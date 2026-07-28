/**
 * POST /api/contact
 * Body: { name, email, subject?, message, topic? }
 * Sends from research@ or orders@ based on topic; delivers to EMAIL_FORWARD_TO.
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
    const name = String(body.name || '').trim();
    const email = String(body.email || '').trim();
    const subject = String(body.subject || 'Website contact').trim();
    const message = String(body.message || '').trim();
    const topic = String(body.topic || 'research').trim().toLowerCase();

    if (!email || !message) {
      res.status(400).json({ ok: false, error: 'Email and message are required.' });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      res.status(400).json({ ok: false, error: 'Invalid email address.' });
      return;
    }

    const cfg = getConfig();
    const isOrders = topic === 'orders' || topic === 'order' || topic === 'fulfillment';
    const from = isOrders ? cfg.fromOrders : cfg.fromResearch;
    const to = cfg.forwardTo;

    const html = `
      <div style="font-family:Inter,system-ui,sans-serif;max-width:560px;color:#0f172a">
        <h2 style="margin:0 0 12px">VialVibes contact form</h2>
        <p style="margin:0 0 8px"><strong>Topic:</strong> ${escapeHtml(isOrders ? 'Orders / fulfillment' : 'Research / documentation')}</p>
        <p style="margin:0 0 8px"><strong>Name:</strong> ${escapeHtml(name || '(not provided)')}</p>
        <p style="margin:0 0 8px"><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p style="margin:0 0 8px"><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <div style="margin:16px 0;padding:14px;background:#f8fafc;border-radius:12px;white-space:pre-wrap">${escapeHtml(message)}</div>
        ${ruoFooter()}
      </div>
    `;

    const result = await sendResendEmail({
      from,
      to,
      replyTo: email,
      cc: cfg.cc || undefined,
      subject: `[VialVibes Contact] ${subject}`,
      html,
      text: `Contact from ${name || 'n/a'} <${email}>\nTopic: ${topic}\n\n${message}`,
    });

    res.status(200).json({ ok: true, id: result.id });
  } catch (err) {
    console.error('[api/contact]', err);
    res.status(err.code === 'NO_API_KEY' ? 500 : err.status || 500).json({
      ok: false,
      error: err.message || 'Failed to send email',
    });
  }
};
