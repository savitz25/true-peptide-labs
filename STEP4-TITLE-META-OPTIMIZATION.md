# Step 4 — Title Tags & Meta Description Optimization

**Date:** 2026-07-28  
**Live host:** `https://www.vialvibes.com`  
**Prerequisites:** Steps 1–3 complete

## Goal

Make every important page’s `<title>` and meta description unique, clear, search-intent aligned, and strictly Research Use Only compliant. Keep `og:title` / `og:description` and `twitter:title` / `twitter:description` in sync where those tags exist.

## Guidelines applied

### Titles
- Target ≤ ~60 characters (hard cap ~65–70)
- Pattern: **Primary topic | Supporting detail | Vial Vibes**
- Compound name + page type + brand for products/research
- No keyword stuffing; no therapeutic/human-use language

### Meta descriptions
- Target ~110–160 characters
- Unique per page; explain value + subtle reason to click
- RUO language where natural
- No human dosing, weight-loss, or healing claims

## Before → After examples

### Homepage
| | Text | Len |
|--|------|-----|
| **Before title** | VialVibes \| Good Vibes. Serious Science. Research Peptides | 58 |
| **After title** | Vial Vibes \| Research Peptides, Lab Tools & Resources | 53 |
| **Before desc** | VialVibes: research-use-only peptides… (brand-heavy) | 171 |
| **After desc** | Research-use-only peptides, reconstitution calculator, combination tools, and scientific resources for qualified laboratories. Good Vibes. Serious Science. | 155 |

### Product (BPC-157)
| | Text | Len |
|--|------|-----|
| **Before title** | BPC-157 Research Peptide \| VialVibes | 36 |
| **After title** | BPC-157 Arginate 5mg \| Research Peptide \| Vial Vibes | 52 |
| **After desc** | BPC-157 Arginate lyophilized research peptide (5 mg). Lot CoA on request for qualified labs. Research use only from Vial Vibes. | 127 |

### Research overview
| | Text |
|--|------|
| **Before title** | BPC-157 Research Overview \| VialVibes |
| **After title** | BPC-157 Research Overview \| Literature Summary \| Vial Vibes |
| **After desc** | Scientific overview of BPC-157 research: chemistry, published studies, mechanisms discussed, and limitations. Educational resource for labs. Research use only. |

### Calculator
| | Text |
|--|------|
| **Before title** | Reconstitution Calculator \| VialVibes |
| **After title** | Peptide Reconstitution Calculator \| Lab Tool \| Vial Vibes |
| **After desc** | Free peptide reconstitution calculator for laboratory use. Calculate concentrations and aliquot volumes for lyophilized research peptides. Research Use Only. |

### Educational (CoA guide)
| | Text |
|--|------|
| **Before title** | How to Read a Certificate of Analysis \| VialVibes |
| **After title** | How to Read a Peptide CoA \| Lab Guide \| Vial Vibes |
| **After desc** | Learn how to read a peptide Certificate of Analysis: lot numbers, purity methods, identity tests, and limits. Research-use-only educational guide. |

### Vault
| | Text |
|--|------|
| **Before title** | The Vial Vault \| Lot verification \| VialVibes |
| **After title** | Vial Vault \| Lot CoA Documentation Request \| Vial Vibes |
| **After desc** | Enter your vial lot number to start a CoA documentation request. No invented purity scores. Research-use-only verification from Vial Vibes. |

## Full list of pages updated

### Priority
- `index.html`
- All 8 product pages under `peptides/`
- All 8 research overview pages under `research/`
- `tools/peptide-calculator.html`, `tools/research-combination-builder.html`
- Redirect stubs: `peptide-calculator.html`, `stack-builder.html` (titles aligned to final tools)
- Educational guides (7): CoA reading, HPLC/MS, purity, storage, reconstitution, RUO explainer, glossary
- Hubs: Research Hub, Peptide Library, 4 category pages, Compare, CoA, Vault, Quality

### Supporting
- about, about-scientific-content, contact, research-use-only, terms, privacy, careers, publications, research-grants, vibe-finder, cart, checkout, design-system, offline

**Total:** 52 HTML pages reviewed/updated for title and/or meta description.

## Special decisions

| Decision | Rationale |
|----------|-----------|
| Brand form **“Vial Vibes”** (with space) in titles | Matches OG site_name and public brand phrasing |
| Product titles include **vial size** (e.g. 5mg) | Matches visible product data; improves specificity |
| Research titles use **Literature/Lab Summary** | Differentiates overviews from product pages without medical claims |
| Calculator title leads with **Peptide Reconstitution Calculator** | Stronger intent match than short “Reconstitution Calculator” |
| Redirect stubs share tool titles | Canonicals already point to `/tools/…`; avoids conflicting SERP titles for stubs |
| Description length sometimes ~120–155 | Prefer complete RUO clarity over padding to exactly 155 |
| Visible H1s **not changed** | Content/IA left intact; meta-only optimization this step |

## Intentionally light / unchanged substance
- **H1 headlines** and body copy unchanged
- **Schema JSON-LD** headlines left as-is (content schema, not SERP title tags)
- Redirect stub descriptions note redirect purpose for accuracy

## Consistency checks (post-run)

- [x] Unique titles across important pages (redirect stubs intentionally mirror tools)
- [x] Unique meta descriptions (except intentional redirect stub mirrors)
- [x] `og:title` / `og:description` match page title/description where present
- [x] `twitter:title` / `twitter:description` match where present
- [x] No title over ~65 characters (one guide at 62)
- [x] RUO-safe language throughout

## Acceptance criteria

- [x] Every priority page has a unique, improved `<title>`
- [x] Every priority page has a unique, useful meta description
- [x] Titles/descriptions RUO compliant
- [x] OG/Twitter meta stay consistent
- [x] No duplicate titles on important content pages
- [x] Documented and pushed to `main`

## Next

**Step 5: Vial Vault / CoA Strengthening** (or next priority as directed)
