# Phase 1 Changelog — Core Architecture & Trust Engine

**Date:** 2026-07-28  
**Brand:** True Peptide Labs (operated by APEX Research, LLC)  
**Repo:** https://github.com/savitz25/true-peptide-labs.git  
**Domain:** https://www.peptidetrue.com  

---

## Goal

Transform the Phase 0 homepage-centric static site into a multi-page, crawlable architecture focused on transparency, product discovery, research utility, and SEO foundations—while remaining strictly Research Use Only.

---

## URL structure decisions

| Path | Purpose |
|------|---------|
| `/` | Proof-first homepage rebuild |
| `/peptides/` | Full catalog index |
| `/peptides/{slug}.html` | Individual product pages (8 peptides) |
| `/peptides/{category}.html` | Category hubs (4) |
| `/research/` | Research Hub landing (structure only) |
| `/tools/peptide-calculator.html` | Reconstitution calculator |
| `/tools/research-combination-builder.html` | Research combination builder |
| `/coa.html` | Enhanced lot lookup / CoA request |
| Root tool URLs | 301 redirects to `/tools/*` via `vercel.json` + HTML stubs |

**Style:** Folder-based static HTML (works on current Vercel static setup). No Next.js/Vite migration in this phase.

---

## Pages created

### Product pages (highest priority)
- `peptides/bpc-157.html`
- `peptides/tb-500.html`
- `peptides/semaglutide.html`
- `peptides/tirzepatide.html`
- `peptides/retatrutide.html`
- `peptides/ipamorelin.html`
- `peptides/cjc-1295.html`
- `peptides/ghk-cu.html`

Each includes: unique title/meta, H1, research-safe description, specs table, CoA request CTAs, related peptides, RUO disclaimer, Product + BreadcrumbList + Organization JSON-LD, breadcrumb nav.

### Category hubs
- `peptides/tissue-repair.html` — Tissue and Repair Models
- `peptides/metabolic.html` — Metabolic Research
- `peptides/growth-hormone.html` — GH Axis Research
- `peptides/cosmetic.html` — Skin / ECM Research
- `peptides/index.html` — All peptides + category cards

### Architecture / tools
- `research/index.html` — Research Hub foundation
- `tools/peptide-calculator.html`
- `tools/research-combination-builder.html`
- Root redirects: `peptide-calculator.html`, `stack-builder.html`

### Shared assets
- `js/products.js` — canonical product catalog data
- `js/cart.js` — add-to-cart from product pages (`tpl_cart`)
- `css/site.css` — shared Phase 1 styles
- `scripts/generate-phase1.ps1` — product/category page generator

### Enhanced / rebuilt
- `index.html` — proof-first homepage
- `coa.html` — lot lookup form, CoA education, honest archive status
- Legal/company pages — Phase 1 nav/footer (Peptides · Research · Quality · Tools · About · Contact · Cart)
- `sitemap.xml`, `vercel.json`

---

## Product data used / assumptions

Seeded from Phase 0 homepage catalog (prices and vial sizes unchanged):

| Slug | Name | Category | Size | Price |
|------|------|----------|------|-------|
| bpc-157 | BPC-157 Arginate | Tissue and Repair | 5 mg | $59 |
| tb-500 | TB-500 | Tissue and Repair | 5 mg | $69 |
| semaglutide | Semaglutide | Metabolic | 5 mg | $129 |
| tirzepatide | Tirzepatide | Metabolic | 5 mg | $149 |
| retatrutide | Retatrutide | Metabolic | 5 mg | $179 |
| ipamorelin | Ipamorelin | GH Axis | 5 mg | $49 |
| cjc-1295 | CJC-1295 (no DAC) | GH Axis | 2 mg | $55 |
| ghk-cu | GHK-Cu | Skin / ECM | 50 mg | $45 |

**Assumptions (no invented proof):**
- **CAS / MW / sequence** values are literature-reference identifiers where commonly published; lot CoA remains the authoritative document. Ambiguous MW noted as “confirm on lot CoA.”
- **Purity:** Always “Lot-specific Certificate of Analysis available on request”—no purity percentages.
- **No product images** beyond flask icon placeholders.
- **No CoA PDFs** — request flow only.
- **No GMP / ISO / stats / testimonials** reintroduced.
- **Emails** remain placeholders (`*@truepeptidelabs.com`).
- **Stripe** still pending (checkout RUO checkbox preserved from Phase 0).

---

## Navigation overhaul

**Primary:** Peptides · Research · Quality · Tools · About · Contact  
**Right:** Cart  
**Tools dropdown:** Reconstitution Calculator · Research Combination Builder  
**Mobile:** Expanded category + tool links  
**Footer:** Peptides · Resources · Company · Legal  

Sitewide RUO banner under nav on new/updated chrome pages.

---

## Homepage rebuild (proof-first)

1. Hero — transparency value prop + RUO + Browse Catalog / Request CoA  
2. Trust strip — CoA request, documentation process, U.S. supplier  
3. Category cards + product grid (from `js/products.js`)  
4. Tools section  
5. Research Hub teaser  
6. RUO-focused FAQ  
7. Final CTA + disclaimer  

No numerical marketing claims or badge fabrications.

---

## SEO foundations

- Unique title + meta description on product, category, hub, tools, homepage  
- Canonical tags (`https://www.peptidetrue.com/...`)  
- Open Graph / Twitter summary tags on major pages  
- Organization JSON-LD sitewide (new pages)  
- Product + BreadcrumbList JSON-LD on peptide pages  
- WebApplication schema on calculator  
- Updated `sitemap.xml` with all Phase 1 URLs  
- `robots.txt` unchanged (Allow / + sitemap)  
- `vercel.json` redirects for index.html, legacy tools, peptides/research folders  

---

## Acceptance criteria

| Criterion | Status |
|-----------|--------|
| All product + category pages exist | Done |
| Homepage proof-first, no unverifiable claims | Done |
| Consistent Phase 1 navigation | Done |
| Tools first-class with metadata + RUO language | Done |
| CoA page useful request flow | Done |
| Research Hub landing exists | Done |
| sitemap.xml + robots.txt updated | Done |
| No reintroduced banned claims/testimonials/human-use marketing | Done |
| Brand True Peptide Labs + APEX disclosure | Done |
| PHASE1-CHANGELOG + push to main | Done (this commit) |

---

## Open items (later phases)

1. **Stripe** hosted Checkout / Payment Element (live)  
2. **Real CoA PDFs** + optional public archive `/coa/[lot]`  
3. **Production Tailwind build** (remove CDN)  
4. **Product photography** / vial imagery  
5. **Confirm CAS/MW** with supplier SDS if available  
6. **Search Console** verification + sitemap submit  
7. **Legal counsel** review before traffic scaling  
8. **Research Hub content** — compound notes, glossary, comparisons (structure only for now)  
9. Optional **Next.js/Vite** migration when scale requires components/includes  
10. Confirm production **email DNS** and institutional **mailing address** for processors  

---

## How to regenerate product pages

```powershell
cd C:\Users\Michael.Savitsky\true-peptide-labs
powershell -ExecutionPolicy Bypass -File scripts\generate-phase1.ps1
```

Update product data in both `scripts/generate-phase1.ps1` and `js/products.js` to stay in sync (or consolidate later).
