# Step 5 — Vial Vault / CoA Strengthening

**Date:** 2026-07-28  
**Live host:** `https://www.vialvibes.com`  
**Prerequisites:** Steps 1–4 complete

## Goal

Make the Vial Vault and Certificate of Analysis experience feel substantial, trustworthy, and central to the brand—while remaining 100% honest. No invented CoA PDFs, purity scores, or instant-download claims.

## Messaging changes

### Core honest positions (sitewide)
- CoAs are provided **on request when available** for the specified lot
- Requests are **human-handled follow-ups**, not automatic PDF downloads
- **No fabricated PDFs** and **no invented purity statistics** on the site
- Public PDF archive is **planned**, not live

### Vial Vault (`vault.html`) — primary documentation center
Expanded from a minimal unlock form into a full documentation hub:
- Clear explanation of **what the Vial Vault is**
- **How lot documentation works** (4-step process)
- **Why lot-level documentation matters**
- **What you receive when you request a CoA** (common fields + honest limits)
- **Sample CoA structure** (educational text table only; not a real certificate)
- Placeholder structure (`<!-- Future PDF slots -->`) for real PDF links later
- Strong educational links to CoA literacy, HPLC/MS, purity, quality
- Dark-lab visual treatment retained and extended

### CoA center (`coa.html`) — alternate form + educational support
- Hero CTA to **Open Vial Vault**
- Clearer “on request when available” language
- Optional **message/notes** field
- Product datalist for faster entry
- Improved confirmation copy with expectation-setting
- Continues to serve as lightweight alternate request path

### Product pages (8 compounds)
- Primary **Request lot CoA** button → `vault.html?product=…#request` (prefilled product)
- New **Lot documentation (CoA)** callout card with Vault + “How to read a CoA”
- Specs table language clarifies on-request availability and links to Vault
- Removed reliance on weak buried “CoA on request” alone

### Research overviews (8)
- Sidebar / CoA CTAs point to Vault with product prefill where applicable
- Labels clarify “Request lot CoA (Vial Vault)”

### Quality page
- New **Vial Vault — practical documentation center** section after “Our approach”
- Analytical testing bullets now reference Vault + CoA form

### Educational guides
- How to Read a CoA: Vault request path in matching section + related resources + hero CTA
- Purity + HPLC guides: “Open Vial Vault” in related resources where missing

## Request flow (how it works)

```
User enters: Lot* · Product · Email · Institution? · Notes?
        ↓
POST /api/vault-request  (source: vault | coa-page)
        ↓
Resend email from research@vialvibes.com
  → EMAIL_FORWARD_TO (ops inbox)
  reply-to: researcher email when provided
        ↓
UI confirmation: request received; CoA when available
(+ optional mailto fallback prefilled)
```

### Form fields
| Field | Required | Notes |
|-------|----------|--------|
| Lot number | Yes | Printed on vial/packaging |
| Product | No | Prefill via `?product=` query; datalist on Vault/CoA |
| Lab email | No | Recommended for reply |
| Institution | No | |
| Notes / message | No | Max 2000 chars; API-supported |

### API update
- `api/vault-request.js` accepts `notes` / `message` and includes them in the email body

## Page types updated

| Area | Files |
|------|--------|
| Vault | `vault.html` (major rewrite) |
| CoA form | `coa.html` |
| API | `api/vault-request.js` |
| Products | 8 × `peptides/*.html` |
| Research | 8 × `research/{compound}.html` |
| Quality | `quality.html` |
| Education | `how-to-read-a-coa.html`, purity, HPLC pages |

## Limitations still present (honest)

- **No downloadable CoA PDFs** hosted on the site yet
- **No public lot archive** (placeholder only)
- Fulfillment depends on manual / ops retrieval of lot docs
- Test panels and formats can vary by lot and testing pathway
- Instant “VIAL VERIFIED” UI means **request logged**, not that a CoA file already exists

## When real CoA files become available

Recommended next steps (no redesign required for Vault):
1. Populate `#coa-pdf-archive` (or equivalent) with lot-keyed PDF links behind authenticated or controlled access if needed
2. Keep “on request” path for lots not yet published
3. Never auto-generate purity numbers on product cards
4. Optionally add product-page “View published CoA for lot …” only when a real file exists

## Acceptance criteria

- [x] Vault / CoA experience feels substantial and professional  
- [x] Product pages have clear, prominent documentation CTAs  
- [x] Messaging is honest and consistent  
- [x] Request form is clear; API supports notes; confirmation sets expectations  
- [x] Research + education + quality link into the Vault  
- [x] No invented testing claims or fake CoAs  
- [x] Documented and pushed to `main`

## Next (suggested)

Stripe/checkout hardening, performance, or real CoA PDF archive when files are ready.
