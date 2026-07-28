/**
 * Shared Resend helpers for Vercel serverless functions.
 * Uses global fetch (Node 18+ on Vercel).
 */

function env(name, fallback = '') {
  const v = process.env[name];
  return v == null || v === '' ? fallback : v;
}

function getConfig() {
  return {
    apiKey: env('RESEND_API_KEY'),
    fromResearch: env('EMAIL_FROM_RESEARCH', 'VialVibes Research <research@vialvibes.com>'),
    fromOrders: env('EMAIL_FROM_ORDERS', 'VialVibes Orders <orders@vialvibes.com>'),
    forwardTo: env('EMAIL_FORWARD_TO', 'info@movetrusthub.com'),
    cc: env('EMAIL_CC'),
    siteUrl: env('SITE_URL', 'https://vialvibes.com'),
    webhookSecret: env('RESEND_WEBHOOK_SECRET'),
  };
}

function cors(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
}

function readJson(req) {
  return new Promise((resolve, reject) => {
    if (req.body && typeof req.body === 'object') {
      resolve(req.body);
      return;
    }
    let data = '';
    req.on('data', (chunk) => {
      data += chunk;
      if (data.length > 1_000_000) {
        reject(new Error('Payload too large'));
      }
    });
    req.on('end', () => {
      if (!data) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(data));
      } catch (e) {
        reject(new Error('Invalid JSON body'));
      }
    });
    req.on('error', reject);
  });
}

function escapeHtml(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Send email via Resend REST API.
 * @param {object} opts
 * @param {string} opts.from
 * @param {string|string[]} opts.to
 * @param {string} [opts.replyTo]
 * @param {string} opts.subject
 * @param {string} opts.html
 * @param {string} [opts.text]
 */
async function sendResendEmail(opts) {
  const { apiKey } = getConfig();
  if (!apiKey) {
    const err = new Error('RESEND_API_KEY is not configured');
    err.code = 'NO_API_KEY';
    throw err;
  }

  const payload = {
    from: opts.from,
    to: Array.isArray(opts.to) ? opts.to : [opts.to],
    subject: opts.subject,
    html: opts.html,
  };
  if (opts.text) payload.text = opts.text;
  if (opts.replyTo) payload.reply_to = opts.replyTo;
  if (opts.cc) payload.cc = Array.isArray(opts.cc) ? opts.cc : [opts.cc];

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const body = await res.json().catch(() => ({}));
  if (!res.ok) {
    const err = new Error(body.message || body.error || `Resend error ${res.status}`);
    err.status = res.status;
    err.body = body;
    throw err;
  }
  return body;
}

function ruoFooter() {
  return `
    <hr style="border:none;border-top:1px solid #e2e8f0;margin:24px 0" />
    <p style="font-size:12px;color:#64748b;line-height:1.5">
      <strong>Research Use Only.</strong> VialVibes products and communications relate to laboratory research materials only.
      Not for human consumption or clinical use. Not FDA-approved drugs.
      Operated by APEX Research, LLC.
    </p>
  `;
}

module.exports = {
  env,
  getConfig,
  cors,
  readJson,
  escapeHtml,
  sendResendEmail,
  ruoFooter,
};
