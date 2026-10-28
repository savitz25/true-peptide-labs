# B2 research notes batch

Short research-note pages for the research-reference peptides from the first two literature batches, plus the ten references already drafted in the working library (DSIP, Ghrelin, GHRP-6, Orexin-A, Exendin-4, PYY(3-36), AOD9604, NAP, Kisspeptin-10, and Livagen). None of these are catalog items.

- Each peptide now has its own page under `research/notes/`. The shared source remains `js/research-references.js`.
- Every note includes the name, a research-context sentence, a “What has been studied” summary, model areas, the existing citation, a limitations block, and links to the Research Peptide Library and Body Explorer.
- Literature summaries restate the paper already cited on that entry. No study was added. The Vesugen correction (PMID 39861198) stays attached to the existing 2021 paper. The retracted Dihexa paper (PMID 25187433) is still named only as a paper this note does not use.
- Each page is labeled “Research reference only — not a catalog item” and has no specification or CoA path.
- Library cards, the no-JavaScript library fallback, Body Explorer, and the reference-note index link to these pages. Support remains `hello@asktrusthub.com`.
- `node scripts/generate-reference-notes.cjs` rewrote the pages, the index, the library ItemList, and the sitemap block. Service-worker cache is `vv-pwa-v10-research-notes` because `research-references.js` is cache-first.
