/**
 * POST /api/resend-inbound
 *
 * Resend Inbound webhook handler.
 * Forwards received mail for *@vialvibes.com to EMAIL_FORWARD_TO (info@movetrusthub.com).
 *
 * Configure in Resend:
 * 1. Enable Inbound for vialvibes.com (MX → Resend)
 * 2. Webhook URL: https://vialvibes.com/api/resend-inbound
 * 3. Events: email.received (and any inbound equivalents on your plan)
 *
 * If you use Cloudflare Email Routing / ImprovMX for catch-all instead,
 * you do not need this webhook for basic forwarding — keep it as optional.
 */
const {
  getConfig,
  cors,
  readJson,
  escapeHtml,
  sendResendEmail,
  ruoFooter,
} = require('./_lib/resend');

function pick(obj, paths) {
  for (const p of paths) {
    const parts = p.split('.');
    let cur = obj;
    let ok = true;
    for (const part of parts) {
      if (cur == null || typeof cur !== 'object' || !(part in cur)) {
        ok = false;
        break;
      }
      cur = cur[part];
    }
    if (ok && cur != null && cur !== '') return cur;
  }
  return '';
}

function asList(v) {
  if (!v) return [];
  if (Array.isArray(v)) return v.map(String);
  return [String(v)];
}

module.exports = async function handler(req, res) {
  cors(res);
  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'Method not allowed' });
    return;
  }

  try {
    const cfg = getConfig();
    const body = await readJson(req);

    // Optional shared-secret check (set header x-resend-secret or query ?secret=)
    if (cfg.webhookSecret) {
      const headerSecret = req.headers['x-resend-secret'] || req.headers['x-webhook-secret'];
      const q = req.query && req.query.secret;
      if (headerSecret !== cfg.webhookSecret && q !== cfg.webhookSecret) {
        res.status(401).json({ ok: false, error: 'Unauthorized webhook' });
        return;
      }
    }

    // Support a few possible payload shapes from Resend inbound / email.received
    const data = body.data || body.email || body;
    const from =
      pick(data, ['from', 'from.email', 'sender', 'from_email']) ||
      pick(body, ['from', 'data.from']);
    const toRaw =
      pick(data, ['to', 'to.email', 'recipient', 'to_email']) ||
      pick(body, ['to', 'data.to']);
    const subject = pick(data, ['subject']) || pick(body, ['subject']) || '(no subject)';
    const text =
      pick(data, ['text', 'text.body', 'body.text', 'plain', 'email_text']) ||
      pick(body, ['text']) ||
      '';
    const htmlIn =
      pick(data, ['html', 'html.body', 'body.html', 'email_html']) ||
      pick(body, ['html']) ||
      '';

    const toList = asList(toRaw).join(', ') || 'unknown@vialvibes.com';
    const fromStr = typeof from === 'object' ? from.email || JSON.stringify(from) : String(from || 'unknown');

    // Avoid forward loops
    const forwardNorm = cfg.forwardTo.toLowerCase();
    if (fromStr.toLowerCase().includes(forwardNorm) || toList.toLowerCase().includes(forwardNorm)) {
      res.status(200).json({ ok: true, skipped: 'loop_guard' });
      return;
    }

    const html = `
      <div style="font-family:Inter,system-ui,sans-serif;max-width:640px;color:#0f172a">
        <h2 style="margin:0 0 12px">Forwarded inbound email — vialvibes.com</h2>
        <p style="margin:0 0 6px"><strong>Original To:</strong> ${escapeHtml(toList)}</p>
        <p style="margin:0 0 6px"><strong>Original From:</strong> ${escapeHtml(fromStr)}</p>
        <p style="margin:0 0 16px"><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <div style="padding:14px;background:#f8fafc;border-radius:12px">
          ${htmlIn || `<pre style="white-space:pre-wrap;margin:0;font-family:inherit">${escapeHtml(text || '(empty body)')}</pre>`}
        </div>
        <p style="margin:16px 0 0;font-size:12px;color:#64748b">Auto-forwarded by VialVibes Resend inbound webhook → ${escapeHtml(cfg.forwardTo)}</p>
        ${ruoFooter()}
      </div>
    `;

    const result = await sendResendEmail({
      from: cfg.fromResearch,
      to: cfg.forwardTo,
      replyTo: fromStr.includes('@') ? fromStr : undefined,
      subject: `[vialvibes.com →] ${subject}`,
      html,
      text: `Forwarded inbound\nTo: ${toList}\nFrom: ${fromStr}\nSubject: ${subject}\n\n${text || '(see HTML)'}`,
    });

    res.status(200).json({ ok: true, id: result.id, forwardedTo: cfg.forwardTo });
  } catch (err) {
    console.error('[api/resend-inbound]', err);
    res.status(err.code === 'NO_API_KEY' ? 500 : err.status || 500).json({
      ok: false,
      error: err.message || 'Inbound forward failed',
    });
  }
};
