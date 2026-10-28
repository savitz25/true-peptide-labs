# C3 — Research-reference expansion

Added eight literature-only references alongside the unchanged eight catalog compounds. Every reference card and note says **“Research reference only — not a catalog item”** and has no specification or CoA path. All copy remains laboratory/literature framed; support remains `hello@asktrusthub.com`.

| Reference | Body Explorer model area | Selected primary literature |
| --- | --- | --- |
| Selank | Neural signaling | [Volkova et al., 2016](https://pubmed.ncbi.nlm.nih.gov/26924987/) |
| Semax | Neural signaling | [Dolotov et al., 2006](https://pubmed.ncbi.nlm.nih.gov/16635254/) |
| Epitalon / Epithalon | Library only: cell-culture context | [Khavinson et al., 2003](https://pubmed.ncbi.nlm.nih.gov/12937682/) |
| KPV | Gut/barrier; immune signaling | [Dalmasso et al., 2008](https://pubmed.ncbi.nlm.nih.gov/18061177/) |
| MOTS-c | Metabolic pathways | [Lee et al., 2015](https://pubmed.ncbi.nlm.nih.gov/25738459/) |
| Humanin | Neural signaling | [Hashimoto et al., 2009](https://pubmed.ncbi.nlm.nih.gov/19386761/) |
| Thymosin alpha-1 | Immune signaling | [Romani et al., 2004](https://pubmed.ncbi.nlm.nih.gov/14982877/) |
| LL-37 | Skin/ECM | [Heilborn et al., 2003](https://pubmed.ncbi.nlm.nih.gov/12603850/) |

- Shared content: `js/research-references.js`. Add `slug`, `name`, `category`, literature-framed `description`, `models`, searchable `keywords`, `bodyAreas`, root-relative `note`, `limitation`, and a verified primary `source` (`url`, `label`, `pmid`). Keep reference entries out of `TPL_PRODUCTS`.
- Run `node scripts/generate-reference-notes.cjs` after changes. It writes the static `/research/reference-notes.html` notes and synchronizes library structured data and reference fallback links. Commit those generated files. Body Explorer maps the shared `bodyAreas` directly; an empty array keeps an entry library-only.
- Reference cards use dashed violet borders and explicit labels in both views. Added neural/immune category controls and figure markers, corrected the existing broken `beOutline` SVG reference, and retained the catalog actions. Figure locations are navigation cues, not proposed sites of use.
- Updated the sitemap and service-worker precache/version for the new page and data.
- Validation: Chromium checks passed for 8 catalog + 8 reference entries; labels and absence of reference specification/CoA links; citations/model lists; search/reset; all seven Body Explorer areas; keyboard/deep-link navigation; 320–1440 px layouts; no-JavaScript notes and fallback; structured data; and zero runtime errors. Automated WCAG A/AA checks passed on all three pages. Desktop/mobile screenshots reviewed; JavaScript syntax and diff checks passed.
