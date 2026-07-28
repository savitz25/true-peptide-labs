# Phase 0 Changelog — True Peptide Labs

**Date:** 2026-07-28  
**Brand:** True Peptide Labs (operated by APEX Research, LLC)  
**Primary domain (sitemap/robots):** https://www.peptidetrue.com/  
**Repo:** true-peptide-labs  
**Contact emails (placeholders until DNS mail is live):** orders@truepeptidelabs.com, research@truepeptidelabs.com  

---

## Goals completed

| # | Task | Status |
|---|------|--------|
| 1 | Brand unification → **True Peptide Labs** | Done |
| 2 | Delete fabricated testimonials + pravatar hotlinks | Done |
| 3 | Remove unverified stats/badges (GMP, ISO 17025, 4,812, 42k, 99.4%, ratings, EST. 2019) | Done |
| 4 | CoA: no dead `#` downloads; lot lookup + request flow | Done |
| 5 | RUO language purge (calculator, combination builder, catalog) | Done |
| 6 | Legal/supporting pages as real HTML | Done |
| 7 | Checkout: remove client-side card form; `/cart` + `/checkout` | Done |
| 8 | robots.txt, sitemap.xml, canonical, index.html → / 301 | Done |

---

## Assumptions (no invented proof)

| Topic | Decision |
|--------|----------|
| CoA PDFs | **None available** — public archive “coming soon”; lot lookup emails research@truepeptidelabs.com |
| Testimonials | **None permissioned** — section removed entirely (not replaced) |
| Marketing stats | **Removed** until evidenced |
| GMP / cGMP / ISO 17025 | **Removed** until certificate/export can be linked |
| Product purity % | Replaced with **“Lot CoA on request”** |
| Physical street address | **Not published** — United States + email for institutional buyers |
| Emails | `*@truepeptidelabs.com` placeholders |
| Stripe | Hosted payment **integration pending**; no PAN/CVC in HTML |
| Tailwind CDN | **Deferred** to Phase 1 production build (noted open item) |
| Legal entity | True Peptide Labs operated by **APEX Research, LLC** (disclosure only) |

---

## Files added

### Legal & company
- `about.html`, `terms.html`, `privacy.html`, `quality.html`
- `careers.html`, `publications.html`, `research-grants.html`
- `contact.html`, `research-use-only.html`, `coa.html`

### Commerce & SEO
- `cart.html`, `checkout.html`
- `robots.txt`, `sitemap.xml`, `vercel.json`

### Docs
- `PHASE0-CHANGELOG.md` (this file)

---

## Key string / behavior changes

### Brand
- Titles/meta: `peptide true.com` → **True Peptide Labs**
- Footer/legal: primary brand + APEX Research, LLC entity note
- Emails: `orders@apexresearch.co` → `orders@truepeptidelabs.com` / `research@truepeptidelabs.com`
- localStorage: `apex_*` → `tpl_*` (with one-time migration)

### Removed liability content
- Three institutional testimonials (Stanford / Regeneron / Harvard)
- All `i.pravatar.cc` avatar hotlinks
- Hero “EST. 2019 • GMP CERTIFIED”, researcher counts, vials shipped, university counts, rating
- Dead “Download CoA” `#` links and fabricated lot purity rows
- Hand-rolled card number / CVC inputs

### RUO tooling
- Calculator → laboratory reconstitution / aliquot volumes for in-vitro assays
- Stack Builder → **Research Combination Builder** (study focus areas; no human protocol language)
- Categories: Tissue & Repair Models, Metabolic Research, GH Axis Research, Skin / ECM Research

### Checkout safety
- Cart drawer links to `cart.html` / `checkout.html`
- Checkout: shipping identity + **mandatory RUO checkbox**; Stripe hosted noted as pending
- Order IDs: `TPL-` prefix

---

## Acceptance criteria checklist

- [x] Single coherent brand (True Peptide Labs + LLC disclosure)
- [x] Zero fabricated institutional testimonials / pravatar
- [x] Remaining claims conservative or removed
- [x] No dead CoA download links
- [x] RUO language on tools/products/checkout
- [x] Legal/footer pages exist and load
- [x] robots.txt + sitemap.xml present
- [x] Card data not collected client-side
- [ ] Production Tailwind build (Phase 1)
- [ ] Real CoA PDFs / `/coa/[lot]` when assets exist
- [ ] Stripe live keys + hosted Checkout
- [ ] Legal counsel review before traffic scaling
- [ ] Search Console property + sitemap submission

---

## Phase 1 open items

1. Wire real Stripe Checkout / Payment Element
2. Publish authenticated CoA PDFs + optional `/coa/[lot]` pages
3. Replace Tailwind CDN with proper CSS build
4. Confirm production emails + physical address for processors
5. Permissioned testimonials only if obtained in writing
6. Optional: Next.js/Vite multi-route architecture
7. Google Search Console verification for peptidetrue.com
8. Independent legal review of Terms / RUO / claims

---

## Demo checkout flow

1. Add products on homepage → `tpl_cart`
2. Review `cart.html`
3. `checkout.html` — RUO checkbox required
4. Submit stores `tpl_orders`, clears cart, shows `TPL-…` (no payment processed)
