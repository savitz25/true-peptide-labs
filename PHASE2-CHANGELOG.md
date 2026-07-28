# Phase 2 Changelog — Content & E-E-A-T

**Date:** 2026-07-28  
**Brand:** True Peptide Labs (operated by APEX Research, LLC)  
**Repo:** https://github.com/savitz25/true-peptide-labs.git  
**Foundation:** Phase 0 + Phase 1 static multi-page architecture  

---

## Goal

Build literature-framed scientific and educational content so the site functions as a credible research resource (E-E-A-T / topical authority), with strong internal linking and strict Research Use Only language.

---

## Compound research pages created

All under `/research/{slug}.html` with Article + Breadcrumb + Organization schema, byline, last reviewed **2026-07-28**, TOC sidebar, product/CoA/tool links, limitations, and RUO disclaimer.

| Slug | Focus | Primary PubMed / literature sources |
|------|--------|-------------------------------------|
| `bpc-157` | Preclinical BPC-157 literature | 30915550, 40756949, 40005999 |
| `tb-500` | Tβ4 / TB-500 research framing | 22074294, 10469335, 23084823 |
| `ghk-cu` | GHK-Cu matrix / gene-expression literature | 18689049, 20979553 |
| `semaglutide` | GLP-1RA research + drug-vs-RUO distinction | 34942372, 40281304, NCBI Bookshelf NBK603723 |
| `tirzepatide` | Dual GIP/GLP-1 literature | 34170647, 35658024 |
| `retatrutide` | Triple agonist clinical research literature | 37366315, 37385280 |
| `ipamorelin` | Selective GHS pharmacology | 9849822 |
| `cjc-1295` | GHRH analog; no-DAC catalog distinction | 16352683, 17018654 |

**URL style:** flat `/research/{slug}.html` (consistent with Phase 1 static hosting).

**Assumptions / limitations noted on pages:**
- Preclinical ≠ clinical validation.
- Catalog research materials ≠ FDA-approved pharmaceutical products (especially metabolic peptides).
- TB-500 fragment identity may differ from full Tβ4; confirm CoA.
- CAS/MW are literature/database references; lot CoA is authoritative.
- Author field uses institutional language only (no invented people). Reviewer slot left empty.

---

## Educational pages

| Path | Topic |
|------|--------|
| `research/how-to-read-a-coa.html` | CoA fields, lot matching, limitations |
| `research/hplc-mass-spectrometry.html` | What HPLC and MS measure |
| `research/peptide-purity-claims.html` | What purity % can mean; why TPL avoids unverified badges |
| `research/storage-stability.html` | General lyophilized peptide lab storage (no invented TPL data) |
| `research/reconstitution-best-practices.html` | Lab reconstitution literacy (no human dosing language) |
| `research/research-use-only-explainer.html` | RUO meaning for buyers |
| `research/glossary.html` | Key research peptide terms |

---

## Research Hub, comparison, E-E-A-T structure

- **`research/index.html`** — Real destination: compound grid, educational guides, compare, CoA/tools CTAs.
- **`research/compare.html`** — Static side-by-side attribute table + category filter (not promotional ranking).
- **`about-scientific-content.html`** — Content standards; documentation team; reviewer placeholder; corrections path.
- **`about.html`** — Linked scientific content section (when present).
- **Homepage Research Hub teaser** — Updated to live content links.

---

## Internal linking

- Product pages → Research overview, CoA literacy, reconstitution guide, compare, calculator.
- Research compound pages → Product, CoA, calculator, educational guides, related compounds, hub.
- Educational pages → CoA, quality, products, tools as appropriate.
- Hub ↔ all new content.

---

## Technical

- Unique title/meta/canonical/OG on new pages.
- `sitemap.xml` includes research compound + educational + compare URLs.
- `css/site.css` — `.prose-research`, byline, TOC helpers.
- Generator: `scripts/generate-phase2-research.ps1` for compound pages.

---

## Acceptance criteria

| Criterion | Status |
|-----------|--------|
| Priority compound research pages with citations | Done (all 8) |
| Core educational pages live | Done |
| Research Hub is a real destination | Done |
| Bidirectional product ↔ research ↔ edu linking | Done |
| No therapeutic / human-use marketing language | Done (RUO framing) |
| No invented studies or credentials | Done |
| sitemap updated | Done |
| PHASE2-CHANGELOG + push main | This commit |

---

## Open items (later)

1. Named scientific reviewers / affiliations when available  
2. Deeper systematic literature reviews per compound  
3. Interactive multi-select comparison UX upgrades  
4. Additional educational topics (shipping cold chain, solvent residues, etc.)  
5. Verify every PMID title against PubMed for exact bibliographic formatting  
6. Stripe, real CoA PDFs, production Tailwind (from prior phases)  
7. Legal review before traffic scaling  
8. Search Console sitemap resubmit after deploy  

---

## Regeneration

```powershell
cd C:\Users\Michael.Savitsky\true-peptide-labs
powershell -ExecutionPolicy Bypass -File scripts\generate-phase2-research.ps1
```
