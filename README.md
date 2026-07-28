# True Peptide Labs

Research-use-only (RUO) peptide supplier site. Static multi-page HTML on Vercel.

**Brand:** True Peptide Labs (operated by APEX Research, LLC)  
**Domain:** peptidetrue.com  

## Phase status

| Phase | Focus | Doc |
|-------|--------|-----|
| **0** | Brand, claims, RUO, legal pages, PCI-safe checkout stubs | [PHASE0-CHANGELOG.md](./PHASE0-CHANGELOG.md) |
| **1** | Multi-page architecture, product pages, Research Hub, tools, SEO | [PHASE1-CHANGELOG.md](./PHASE1-CHANGELOG.md) |
| **2** | Compound research overviews, educational guides, E-E-A-T, linking | [PHASE2-CHANGELOG.md](./PHASE2-CHANGELOG.md) |

## Structure

```
/                       Homepage (proof-first)
/peptides/              Catalog + category hubs + product pages
/research/              Research Hub + compound overviews + educational guides + compare
/tools/                 Calculator + combination builder
/about-scientific-content.html  Content standards (E-E-A-T)
/coa.html               Lot CoA request
/quality.html           Quality stance
/cart.html /checkout.html
legal & company pages   about, terms, privacy, RUO, contact, ...
/js/products.js         Shared catalog data
/css/site.css           Shared styles
```

## Local testing

Open `index.html` in a browser or serve the folder statically.

## Deploy

Push to `main`. Vercel: Framework **Other**, empty build, output `.`.  
Redirects in `vercel.json` (index.html → `/`, legacy tools → `/tools/*`).

## Compliance

Products are **research use only**. Do not reintroduce unverified certificates, institutional testimonials, or human-use language. Prefer legal review before traffic scaling.
