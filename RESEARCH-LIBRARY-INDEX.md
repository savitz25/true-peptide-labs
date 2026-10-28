# C3 — Research Peptide Library index

- Rebuilt `/peptides/index.html` as a responsive dark laboratory reference with eight existing compounds, research-safe catalog descriptions, category tags, and Research Overview / Specifications / Request CoA links. Specifications target the existing section; CoA links prefill the existing request form.
- Added combined category and text search (including pathway keywords), single-character matching, whitespace/hyphen normalization, result announcements, reset and empty states, keyboard focus styles, mobile navigation, and a no-JavaScript overview fallback.
- Standardized existing desktop/mobile navigation labels to **Peptide Library** while retaining index destinations. Kept existing research and specification pages; no commerce controls, prices, or therapeutic claims were added. Support: `hello@asktrusthub.com`.
- Added library-specific CSS and scripts without a new runtime dependency. Updated the service-worker cache and precache list for the new assets.

## Adding entries

`js/research-library-data.js` separates `catalog` (adapted from `TPL_PRODUCTS` in `js/products.js`) from `references` (adapted from `VV_RESEARCH_REFERENCES` in `js/research-references.js`). Filtering and rendering are in `js/research-library.js`; presentation is in `css/research-library.css`. See `RESEARCH-REFERENCE-EXPANSION.md` for the shared reference and Body Explorer workflow.

- For a catalog compound, add its reviewed data to `TPL_PRODUCTS` and create the matching existing-pattern research/specification pages. The library picks it up automatically.
- For a reference-only compound, add its literature-framed data, model areas, source, and note URL to `js/research-references.js`, then run `node scripts/generate-reference-notes.cjs`. Reference entries have no specifications or CoA fields or actions. Do not add a reference-only compound to the material catalog merely to list it.
- Reuse a category key (`recovery`, `metabolic`, `gh`, `cosmetic`), or add a `{ key, name }` entry to the library's `categories` array for a new reference topic. Filters are generated from that array.
- The reference-note generator updates the index's static `ItemList` and reference fallback links. Catalog fallback links remain manually maintained. Confirm destination pages, specification anchors for catalog entries, accurate RUO wording, and source citations before publishing.

## Validation

C3 verified in Chromium: all four category counts; combined, normalized, and single-character search; empty/reset behavior; all 24 card links and destination anchors; CoA product-name prefill without submitting; keyboard activation; mobile menu; no horizontal overflow at 320, 390, 768, 1024, and 1440 px; no-JavaScript fallback; and a temporary reference-only fixture with unavailable documents. No browser runtime errors. Automated axe WCAG A/AA checks passed on desktop and mobile; screenshots were visually reviewed. JavaScript syntax and `git diff --check` passed.
