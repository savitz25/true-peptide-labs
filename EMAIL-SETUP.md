# VialVibes Email Setup (Resend + Forwarding)

**Brand emails**
- `research@vialvibes.com` — CoA / Vault / research inquiries  
- `orders@vialvibes.com` — orders / fulfillment  
- Catch-all recommended for all other `@vialvibes.com`  

**Delivery destination for team inbox**  
`info@movetrusthub.com`

---

## 1. What the codebase does (outbound)

### Vercel serverless routes

| Endpoint | Purpose |
|----------|---------|
| `POST /api/contact` | Contact form → Resend |
| `POST /api/vault-request` | Vault + CoA forms → Resend |
| `POST /api/resend-inbound` | Optional Resend Inbound webhook → forward to team |
| `GET /api/health` | Confirms env (does not expose API key) |

### Sending identity
- Research path: `VialVibes Research <research@vialvibes.com>`
- Orders path: `VialVibes Orders <orders@vialvibes.com>`
- Delivered **to** `EMAIL_FORWARD_TO` (default `info@movetrusthub.com`)
- **Reply-To** = visitor email so you can reply from your mailbox

### Forms wired
- `contact.html` → `/api/contact`
- `vault.html` → `/api/vault-request`
- `coa.html` → `/api/vault-request`

### Vercel environment variables

Set in **Vercel → Project → Settings → Environment Variables** (Production + Preview):

```
RESEND_API_KEY=re_xxxxxxxx
EMAIL_FROM_RESEARCH=VialVibes Research <research@vialvibes.com>
EMAIL_FROM_ORDERS=VialVibes Orders <orders@vialvibes.com>
EMAIL_FORWARD_TO=info@movetrusthub.com
SITE_URL=https://vialvibes.com
RESEND_WEBHOOK_SECRET=   # optional, for inbound webhook
```

Redeploy after adding env vars.

---

## 2. Resend: domain verification (sending)

In [Resend Domains](https://resend.com/domains), add `vialvibes.com` and publish DNS:

| Type | Name / Host | Value | Purpose |
|------|-------------|-------|---------|
| **TXT** (SPF) | `@` or as Resend shows | `v=spf1 include:amazonses.com ~all` (use exact Resend value) | Authorize sending |
| **CNAME** (DKIM) | e.g. `resend._domainkey` | value from Resend | DKIM signature |
| **TXT** (DMARC, recommended) | `_dmarc` | `v=DMARC1; p=none; rua=mailto:info@movetrusthub.com` | Policy / reporting |

Use **exactly** the records Resend displays for your domain (they may use SES-backed hosts).

Do **not** remove SPF/DKIM after setup — outbound depends on them.

Confirm domain status shows **Verified** in Resend before testing forms.

---

## 3. Inbound: forward all `@vialvibes.com` → `info@movetrusthub.com`

You need **one** receiving path. Pick **A** (simplest) or **B** (Resend-centric).

### Option A — Recommended: Cloudflare Email Routing (or ImprovMX / ForwardEmail)

Best for catch-all forward without app code.

1. Point domain DNS to Cloudflare (if not already).
2. **Email → Email Routing → Enable**.
3. Add destination address: `info@movetrusthub.com` (verify ownership).
4. Create routes:
   - `research@vialvibes.com` → `info@movetrusthub.com`
   - `orders@vialvibes.com` → `info@movetrusthub.com`
   - Catch-all `*@vialvibes.com` → `info@movetrusthub.com`
5. Cloudflare will set **MX** records for receiving.

**Important:** MX for Cloudflare Email Routing coexists with Resend **sending** records (SPF/DKIM TXT/CNAME). You do **not** point MX at Resend if you use Cloudflare for inbound.

### Option B — Resend Inbound + webhook

Use if you want all receiving through Resend.

1. In Resend, enable **Inbound** for `vialvibes.com`.
2. Add Resend **MX** records (as shown in dashboard).  
   *Note: Only one MX set can be primary — this replaces Cloudflare Email Routing MX.*
3. Create a webhook:
   - URL: `https://vialvibes.com/api/resend-inbound`
   - Event: inbound / `email.received` (per current Resend UI)
4. Optional: set `RESEND_WEBHOOK_SECRET` and pass it as header `x-resend-secret` or `?secret=` if you configure that in Resend (or a proxy).
5. Handler forwards the message to `EMAIL_FORWARD_TO` via Resend send API, with Reply-To = original sender.

Payload shapes vary by Resend version; the handler is defensive. If a field is missing, check Resend webhook logs and adjust `api/resend-inbound.js`.

---

## 4. DNS summary (typical final state)

### If using Cloudflare Email Routing for inbound (recommended)

| Record | Purpose |
|--------|---------|
| Resend SPF TXT | Outbound |
| Resend DKIM CNAME(s) | Outbound |
| DMARC TXT | Policy |
| Cloudflare Email Routing MX | Inbound → forward to info@movetrusthub.com |
| Cloudflare Email Routing destination + routes | research@, orders@, catch-all |

### If using Resend Inbound

| Record | Purpose |
|--------|---------|
| Resend SPF / DKIM / DMARC | Outbound |
| Resend Inbound MX | Inbound to Resend |
| Webhook → `/api/resend-inbound` | Forward to info@movetrusthub.com |

---

## 5. Testing checklist

### Outbound (forms)
1. Open `https://vialvibes.com/api/health` → `resendConfigured: true`
2. Submit **Contact** form (topic Research) → email arrives at `info@movetrusthub.com` **From** `research@vialvibes.com`, **Reply-To** = your test address
3. Submit Contact with topic Orders → From `orders@vialvibes.com`
4. Submit **Vault** / **CoA** request → From `research@vialvibes.com`, subject contains lot number
5. Reply from mailbox to Reply-To — reply should go to the visitor

### Inbound (forwarding)
1. From an external account, send email **to** `research@vialvibes.com`
2. Send to `orders@vialvibes.com`
3. Send to a random address `test-xyz@vialvibes.com` (if catch-all is on)
4. Confirm all appear at `info@movetrusthub.com`

### Cleanup
- [ ] No public `@truepeptidelabs.com` on site (already cleaned)
- [ ] Resend domain Verified
- [ ] Env vars set on Vercel Production
- [ ] Forms no longer depend on `mailto:` only

---

## 6. Troubleshooting

| Symptom | Check |
|---------|--------|
| Form 500 / “RESEND_API_KEY is not configured” | Env var missing or not redeployed |
| Form 403 / domain not verified | Resend domain DNS incomplete |
| Mail not received at info@ | Spam folder; `EMAIL_FORWARD_TO`; Resend logs |
| Inbound not forwarding | MX path (Cloudflare vs Resend); webhook URL; function logs |
| SPF fail | Only one SPF TXT on root; merge includes carefully |

---

## 7. Architecture (simple)

```
[Browser forms]
    POST /api/contact | /api/vault-request
         ↓
    Resend API (from research@ or orders@)
         ↓
    info@movetrusthub.com   (Reply-To = visitor)

[External sender] → research@ / orders@ / *@vialvibes.com
         ↓
    Cloudflare Email Routing  (or Resend Inbound + /api/resend-inbound)
         ↓
    info@movetrusthub.com
```
