# VialVibes Experience Layer — Changelog

**Date:** 2026-07-28  
**Repo:** true-peptide-labs (`main`)  
**Brand:** VialVibes · Good Vibes. Serious Science.  
**Legal:** Operated by APEX Research, LLC  

---

## Logo system (monogram)

| Asset | Use |
|-------|-----|
| `assets/vv-monogram.svg` | Primary abstract mark — vial + vibe wave + chain nodes, mint→cyan gradient + glow |
| `assets/vv-monogram-solid.svg` | Single-color `currentColor` for print, apparel, light bg |
| `assets/logo-vialvibes.svg` | Wordmark lockup (stacked VIAL / VIBES) + monogram |
| `assets/logo-vialvibes-mark.svg` | App / social / favicon rounded tile |

Avoided: literal molecule-in-vial cliché, generic biotech leaf, crypto-neon glyph.

---

## Signature experiences shipped

| Experience | Path | Notes |
|------------|------|--------|
| **Vial Cards** | Homepage grid + Peptide Library | Category energy colors, floating glass vial |
| **Peptide Library** | `/peptides/index.html` | Filters + search, discovery-first |
| **Interactive 3D Vial** | Product pages (BPC-157, Semaglutide first) | CSS 3D rotate + drag |
| **Vibe Finder** | `/vibe-finder.html` | RUO-safe research focus quiz → catalog |
| **Vial Vault** | `/vault.html` | Lot unlock UX → real CoA email request (no fake scores) |
| **Visual Calculator** | `/tools/peptide-calculator.html` | Beaker fill animation for aliquot volume |
| **Design system** | `/design-system.html` | Updated monogram + experience map |

Supporting: `js/vial-ui.js`, expanded `css/site.css` (motion, energy classes, vault, beaker).

---

## Discovery loop

**Learn → Compare → Verify → Shop** wired via nav/CTAs:

- Research Hub / compound pages  
- Compare table  
- Vial Vault + CoA  
- Peptide Library / product pages / cart  

---

## Compliance (still non-negotiable)

- Research Use Only language retained  
- Quiz personalizes *laboratory study focus*, not human “protocols”  
- Vault never invents purity/GMP results  
- Calculator = reconstitution / aliquot volumes for in-vitro assays only  

---

## Open / next polish

- Apply 3D vial block to all remaining product pages  
- Optional real 3D (Three.js) vial model  
- Cursor-reactive molecules sitewide  
- Macro product photography with neon gel lighting  
- Packaging dielines using solid monogram  
- Self-host fonts; reduce Tailwind CDN dependency  

---

## Key URLs after deploy

- `/` — flagship  
- `/design-system.html`  
- `/peptides/` — library  
- `/vibe-finder.html`  
- `/vault.html`  
- `/tools/peptide-calculator.html`  
