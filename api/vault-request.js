/**
 * POST /api/vault-request
 * Body: { lot, product?, email?, institution? }
 * CoA / documentation request from Vial Vault or CoA form.
 * From: research@vialvibes.com → EMAIL_FORWARD_TO (info@movetrusthub.com)
 */
const {
  getConfig,
  cors,
  readJson,
  escapeHtml,
  sendResendEmail,
  ruoFooter,
} = require('./_lib/resend');

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
    const body = await readJson(req);
    const lot = String(body.lot || '').trim();
    const product = String(body.product || '').trim();
    const email = String(body.email || '').trim();
    const institution = String(body.institution || '').trim();
    const source = String(body.source || 'vault').trim();

    if (!lot) {
      res.status(400).json({ ok: false, error: 'Lot number is required.' });
      return;
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      res.status(400).json({ ok: false, error: 'Invalid email address.' });
      return;
    }

    const cfg = getConfig();
    const html = `
      <div style="font-family:Inter,system-ui,sans-serif;max-width:560px;color:#0f172a">
        <h2 style="margin:0 0 12px">Vial Vault / CoA documentation request</h2>
        <p style="margin:0 0 8px"><strong>Source:</strong> ${escapeHtml(source)}</p>
        <p style="margin:0 0 8px"><strong>Lot number:</strong> <code style="font-size:15px">${escapeHtml(lot)}</code></p>
        <p style="margin:0 0 8px"><strong>Product:</strong> ${escapeHtml(product || '(not specified)')}</p>
        <p style="margin:0 0 8px"><strong>Institution:</strong> ${escapeHtml(institution || '(not specified)')}</p>
        <p style="margin:0 0 8px"><strong>Researcher email:</strong> ${escapeHtml(email || '(not specified)')}</p>
        <p style="margin:16px 0 0;color:#475569;font-size:14px">
          Please provide Certificate of Analysis documentation <em>if available</em> for this research lot.
          Do not invent purity results.
        </p>
        ${ruoFooter()}
      </div>
    `;

    const result = await sendResendEmail({
      from: cfg.fromResearch,
      to: cfg.forwardTo,
      replyTo: email || undefined,
      cc: cfg.cc || undefined,
      subject: `[Vial Vault] CoA request — lot ${lot}`,
      html,
      text: `CoA request\nLot: ${lot}\nProduct: ${product || 'n/a'}\nEmail: ${email || 'n/a'}\nInstitution: ${institution || 'n/a'}\nSource: ${source}`,
    });

    res.status(200).json({ ok: true, id: result.id, lot });
  } catch (err) {
    console.error('[api/vault-request]', err);
    res.status(err.code === 'NO_API_KEY' ? 500 : err.status || 500).json({
      ok: false,
      error: err.message || 'Failed to send documentation request',
    });
  }
};
