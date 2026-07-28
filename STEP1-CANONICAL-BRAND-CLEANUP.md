# Step 1 — Canonical Tags + Residual Domain & Brand Cleanup

**Date:** 2026-07-28  
**Live host (preferred):** `https://www.vialvibes.com`  
**Repo:** savitz25/true-peptide-labs  

## Goal

Make the entire site fully consistent with the **Vial Vibes** domain and brand. Eliminate residual references to the old domain (`peptidetrue.com`) and old brand name (**True Peptide Labs**) so canonicals, internal absolute URLs, meta tags, schema URLs, and public runtime assets are clean.

This was a pure cleanup / consistency pass — no new product features.

## What changed

### 1. Canonical tags (critical)

- Every HTML page now has **exactly one** self-referencing canonical:
  ```html
  <link rel="canonical" href="https://www.vialvibes.com/exact-path-to-this-page">
  ```
- Replaced old absolute canonicals pointing at `https://www.peptidetrue.com/...`
- Converted relative canonicals (e.g. `/about.html`) to absolute `https://www.vialvibes.com/...`
- Added missing canonicals on `cart.html`, `checkout.html`, and `offline.html`
- Redirect stubs keep canonicals on the **final public URL**:
  - `peptide-calculator.html` → `https://www.vialvibes.com/tools/peptide-calculator.html`
  - `stack-builder.html` → `https://www.vialvibes.com/tools/research-combination-builder.html`
- Homepage → `https://www.vialvibes.com/`
- Directory indexes → trailing slash form (e.g. `/peptides/`, `/research/`)

### 2. Full domain string cleanup

Replaced across public HTML, JS, JSON-LD, robots, sitemap, and API defaults:

| From | To |
|------|-----|
| `https://www.peptidetrue.com` | `https://www.vialvibes.com` |
| `https://peptidetrue.com` | `https://www.vialvibes.com` |
| `https://vialvibes.com` (bare, no www) | `https://www.vialvibes.com` |

Also updated:

- `js/products.js` → `domain: "https://www.vialvibes.com"`
- `js/og-meta.js` → OG image + fallback both on www host
- `api/_lib/resend.js` → default `SITE_URL` = `https://www.vialvibes.com`
- `robots.txt` Sitemap URL → www
- `sitemap.xml` all `<loc>` → www
- Generator scripts under `scripts/` so future regenerations stay on the preferred host

### 3. Brand name cleanup

- **Zero** public-facing occurrences of “True Peptide Labs” / “True Peptide Lab” in HTML/JS (already largely rebranded; verified clean after this pass)
- Public legal disclosure remains: **Vial Vibes / VialVibes is operated by APEX Research, LLC**
- `js/products.js` legal string set to: `Vial Vibes is operated by APEX Research, LLC`
- Historical Phase changelogs may still mention the old brand as project history; they are not live HTML

### 4. Open Graph & Twitter consistency

- `og:url` on every page with OG tags points at the matching `https://www.vialvibes.com/...` URL
- `og:image`, `og:image:secure_url`, and `twitter:image` use  
  `https://www.vialvibes.com/images/og-vial-vibes-share.jpg`

### 5. Internal links

- Absolute internal links that used the old domain were rewritten to www.vialvibes.com
- Navigation, footers, and related CTAs remain relative where they already were (preferred for internal nav)

### 6. Minor encoding fix

- Fixed corrupted copyright symbols (`Â©` → `&copy;`) on product pages under `peptides/`

## Verification

| Check | Result |
|-------|--------|
| `peptidetrue.com` in public HTML/JS/XML/TXT/JSON/webmanifest | **Zero** |
| “True Peptide Labs” in HTML/JS | **Zero** |
| Bare `https://vialvibes.com` (no www) in public runtime files | **Zero** |
| Every HTML page has exactly one `https://www.vialvibes.com/...` canonical | **Pass** |
| Sample OG/Twitter image + url tags on www host | **Pass** |

## Pages updated (HTML)

All 52 HTML pages were touched for domain and/or canonical/og:url alignment:

**Root**

- `index.html`
- `about.html`
- `about-scientific-content.html`
- `careers.html`
- `cart.html`
- `checkout.html`
- `coa.html`
- `contact.html`
- `design-system.html`
- `offline.html`
- `peptide-calculator.html` (redirect stub; canonical → tools)
- `privacy.html`
- `publications.html`
- `quality.html`
- `research-grants.html`
- `research-use-only.html`
- `stack-builder.html` (redirect stub; canonical → tools)
- `terms.html`
- `vault.html`
- `vibe-finder.html`

**Peptides**

- `peptides/index.html`
- `peptides/bpc-157.html`
- `peptides/tb-500.html`
- `peptides/semaglutide.html`
- `peptides/tirzepatide.html`
- `peptides/retatrutide.html`
- `peptides/ipamorelin.html`
- `peptides/cjc-1295.html`
- `peptides/ghk-cu.html`
- `peptides/tissue-repair.html`
- `peptides/metabolic.html`
- `peptides/growth-hormone.html`
- `peptides/cosmetic.html`

**Research**

- `research/index.html`
- `research/compare.html`
- `research/bpc-157.html`
- `research/tb-500.html`
- `research/semaglutide.html`
- `research/tirzepatide.html`
- `research/retatrutide.html`
- `research/ipamorelin.html`
- `research/cjc-1295.html`
- `research/ghk-cu.html`
- `research/how-to-read-a-coa.html`
- `research/hplc-mass-spectrometry.html`
- `research/peptide-purity-claims.html`
- `research/storage-stability.html`
- `research/reconstitution-best-practices.html`
- `research/research-use-only-explainer.html`
- `research/glossary.html`

**Tools**

- `tools/peptide-calculator.html`
- `tools/research-combination-builder.html`

**Non-HTML also updated**

- `robots.txt`, `sitemap.xml`
- `js/products.js`, `js/og-meta.js`
- `api/_lib/resend.js`, `api/resend-inbound.js` (comment URL)
- `scripts/generate-phase1.ps1`, `scripts/generate-phase2-research.ps1`, `scripts/apply-vialvibes-brand.ps1`
- `README.md` domain line

## Acceptance criteria

- [x] Every page has a correct `<link rel="canonical" href="https://www.vialvibes.com/...">`
- [x] Zero occurrences of `peptidetrue.com` in live public HTML/JS source
- [x] Zero public-facing occurrences of “True Peptide Labs”
- [x] `og:url` and related meta tags consistent with live domain
- [x] Navigation and internal links unchanged in structure (domain-only absolute URL fixes)
- [x] Changelog documented; changes committed and pushed to `main`

## Next

**Step 2: Schema Markup** (structured data hardening on product, research, and org entities).
