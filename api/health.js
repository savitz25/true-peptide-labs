/**
 * GET /api/health — verify serverless + env (does not expose secrets)
 */
const { getConfig } = require('./_lib/resend');

module.exports = async function handler(req, res) {
  const cfg = getConfig();
  res.status(200).json({
    ok: true,
    service: 'vialvibes-email',
    resendConfigured: Boolean(cfg.apiKey),
    forwardTo: cfg.forwardTo,
    fromResearch: cfg.fromResearch,
    fromOrders: cfg.fromOrders,
  });
};
