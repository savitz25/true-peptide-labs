# VialVibes Phase 1 + Phase 2 Implementation

**Date:** 2026-07-28  
**Repo:** true-peptide-labs (`main`)  
**Brand:** VialVibes · Good Vibes. Serious Science.

---

## Phase 1 — Critical fixes

### Email & brand identity
- All public emails: `research@vialvibes.com`, `orders@vialvibes.com`
- Removed `@truepeptidelabs.com` from HTML/JS public UI
- `js/products.js` brand emails updated

### APEX presentation
- Homepage hero no longer leads with APEX (RUO + research-only line only)
- APEX remains in footers, About, legal disclaimers, and Organization `legalName` where appropriate
- Cart/checkout footers standardized to “VialVibes, operated by APEX Research, LLC”

### Navigation & Contact
- Homepage nav: Peptide Library · Research · Vibe Finder · Vault · Quality · Tools · About · Contact
- `contact.html` rebuilt with full VialVibes nav + site.css (fixes sparse/legacy contact UX)
- Internal paths: Library, Vibe Finder, Vault, Calculator, product/research links verified present

**Phase 1 success:** No public `@truepeptidelabs.com`; brand reads as VialVibes first; Contact and primary nav resolve.

---

## Phase 2 — Experience upgrades

### Hero
- Large slowly rotating glass vial (signature mark)
- Particle field + orbit rings
- Soft labels: Purpose · Purity note · Lot / testing
- Primary CTA: **What’s your research vibe?**

### Vibe Finder surfaced
- Dedicated homepage discovery band (“Start here”)
- Primary hero button + trust strip not burying the quiz

### The Vial Vault elevated
- Stronger branding as **The Vial Vault**
- Scanline, lock rings, unlock animation, **VIAL VERIFIED · REQUEST LOGGED**
- Still honest: CoA request / email — no invented purity scores
- Mailto → `research@vialvibes.com`

### Motion / polish
- Hero particles, floating vial, vault motion
- Existing vial cards / library energy system retained

**Phase 2 success:** Cool discovery exterior + serious transparent research company underneath, RUO intact.

---

## Constraints honored
- No therapeutic / human-use claims  
- No invented purity scores  
- Design tokens and monogram system preserved and used  

---

## Follow-ups
- DNS / mailbox live for `@vialvibes.com`  
- 3D vial on remaining product pages  
- Public CoA archive when PDFs available  
- Optional real 3D (Three.js) later  
