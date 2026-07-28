# VialVibes Design System — Implementation Changelog

**Date:** 2026-07-28  
**Repo:** true-peptide-labs (`main`)  
**Brand:** VialVibes · tagline **Good Vibes. Serious Science.**  
**Legal:** Operated by APEX Research, LLC  

---

## What shipped

### Identity
- **Waveform Vial** logo lockup: `assets/logo-vialvibes.svg`
- App/favicon mark: `assets/logo-vialvibes-mark.svg`
- Brand notes: `BRAND-VIALVIBES.md`
- Live kit page: `design-system.html`

### Design system (`css/site.css`)
- Dark-mode-first tokens (midnight navy, cyan, violet, mint)
- Glass cards, gradient CTAs, soft glows (not gamer overload)
- Space Grotesk + Inter
- Global theme overrides so existing Tailwind light utilities still read correctly on dark surfaces
- RUO banner restyled (serious interior)

### Site application
- Flagship homepage rebuilt as VialVibes
- Sitewide logo/favicon/title/footer brand → VialVibes
- Product schema brand → VialVibes
- Sitemap includes `design-system.html`
- Emails remain `*@truepeptidelabs.com` until mail for VialVibes is provisioned

### Compliance preserved
- Research Use Only language retained
- No reintroduction of inject / human-stack / therapeutic marketing
- Catalog research category names unchanged
- Phase 0–2 content architecture intact (products, research, tools, CoA)

---

## Brand tension in product

| Outside | Inside |
|---------|--------|
| Playful headlines, cyan/violet energy | CoA, RUO, literature, specs |
| “Discovery” framing | Laboratory-only tools and disclaimers |

---

## Open items
- Optional PNG/PNG favicon export for older browsers
- Production font self-hosting / drop Google Fonts CDN
- Domain email `@vialvibes.com` when DNS ready
- Full page-by-page custom glass components (vs CSS overrides)
- Framer/Figma export of design tokens if needed for design handoff
