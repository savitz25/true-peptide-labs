# Social Share / Open Graph Update

**Date:** 2026-07-28  
**Brand:** Vial Vibes  
**Repo:** true-peptide-labs  

## Goal
Eliminate blank/blue iMessage and social previews by shipping a branded 1200×630 share image and complete Open Graph + Twitter Card tags.

## Image asset

| Path | Size | Notes |
|------|------|--------|
| `images/og-vial-vibes-share.jpg` | **1200 × 630** | Primary brand share card |
| `images/og-default.jpg` | 1200 × 630 | Fallback copy |

**Public URL (after deploy):**
- `https://vialvibes.com/images/og-vial-vibes-share.jpg`
- Also available on any host serving this static root (e.g. `https://www.peptidetrue.com/images/og-vial-vibes-share.jpg`)

## Meta pattern (every HTML page)

- `og:title` — page-specific (e.g. `BPC-157 Research Peptide | Vial Vibes`)
- `og:description` — short neutral summary + **Research Use Only**
- `og:image` — main brand share image (shared across pages for now)
- `og:image:width` / `og:image:height` — 1200 / 630
- `og:url` — absolute page URL under `https://vialvibes.com/...`
- `og:type` — website  
- `og:site_name` — Vial Vibes  
- `twitter:card` — `summary_large_image`  
- `twitter:title` / `twitter:description` / `twitter:image` — aligned with OG  

### Homepage (special)
```
og:title = Vial Vibes | Good Vibes. Serious Science.
og:description = Research peptides, interactive lab tools, transparent documentation, and educational resources. Research Use Only.
og:url = https://vialvibes.com/
```

## Pages receiving tags

All HTML documents in the repo (~51 files), including:

- **Core:** `index.html`, `contact.html`, `about.html`, `quality.html`, `coa.html`, `vault.html`, `vibe-finder.html`, `cart.html`, `checkout.html`, legal pages  
- **Peptide Library:** `peptides/index.html`, all product pages, category hubs  
- **Research Hub:** `research/index.html`, compound overviews, educational guides, compare  
- **Tools:** `tools/peptide-calculator.html`, `tools/research-combination-builder.html`  
- **Design:** `design-system.html`  

## Favicon / Apple touch

Sitewide (depth-aware paths):

- `assets/logo-vialvibes-mark.svg` as `rel="icon"` and `apple-touch-icon`

## After deploy — force cache refresh

1. Confirm image loads over HTTPS: `/images/og-vial-vibes-share.jpg`
2. [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) → Scrape Again  
3. Test a fresh link in iMessage  
4. Optional: WhatsApp / X Card Validator / LinkedIn Post Inspector  

## Optional later
- Per-page OG images (Research Hub, Tools, individual peptides)  
- Point `og:url` host fully to production if DNS differs  
- Replace share JPG with designer asset `8f8BJ.jpg` resized to 1200×630  

## Acceptance

- [x] 1200×630 branded image in repo under `images/`  
- [x] Full OG + Twitter on homepage  
- [x] Page-specific title/description/url on product & research templates  
- [x] RUO language in descriptions  
- [x] Favicon / Apple touch present  
- [x] Documentation written  
- [x] Pushed to true-peptide-labs  
