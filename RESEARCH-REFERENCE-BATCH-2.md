# B1 — Research-reference batch 2

Added ten literature-only references. The eight catalog compounds and the first eight references are unchanged. Each new card and note says **“Research reference only — not a catalog item”** and has no specification or CoA path. Support remains `hello@asktrusthub.com`.

| Reference | Body Explorer model area | Selected primary literature |
| --- | --- | --- |
| N-Acetyl Semax | Neural signaling | [Magri et al., 2016](https://pubmed.ncbi.nlm.nih.gov/27586814/) |
| Pinealon | Neural signaling | [Khavinson et al., 2011](https://pubmed.ncbi.nlm.nih.gov/21978084/) |
| Cortagen | Neural signaling | [Khavinson, 2001](https://pubmed.ncbi.nlm.nih.gov/11713572/) |
| Vesugen (KED) | Neural signaling | [Khavinson et al., 2021](https://pubmed.ncbi.nlm.nih.gov/34071923/) |
| Vilon | Immune signaling | [Khavinson et al., 2002](https://pubmed.ncbi.nlm.nih.gov/12420072/) |
| Thymogen | Immune signaling | [Anisimov, Khavinson, and Morozov, 2000](https://pubmed.ncbi.nlm.nih.gov/11707921/) |
| Dihexa | Neural signaling | [Sun et al., 2021](https://pubmed.ncbi.nlm.nih.gov/34827486/) |
| Hexarelin | Growth-hormone axis | [Torsello et al., 1996](https://pubmed.ncbi.nlm.nih.gov/8921832/) |
| SS-31 (elamipretide) | Metabolic pathways | [Pharaoh et al., 2023](https://pubmed.ncbi.nlm.nih.gov/37462785/) |
| FOXO4-DRI | Library only: cell and mouse context | [Baar et al., 2017](https://pubmed.ncbi.nlm.nih.gov/28340339/) |

- N-Acetyl Selank is omitted. No primary experimental-biology paper was selected for it.
- The Dihexa note uses the 2021 APP/PS1 study. The 2014 mechanism paper (PMID 25187433) was retracted in 2025 and is not cited as evidence.
- The Vesugen note records that a 2025 correction (PMID 39861198) was issued for the cited mouse paper.
- Hexarelin uses the 1996 rat growth-hormone study. The note does not adopt clinical-use language from earlier reports.
- FOXO4-DRI has an empty `bodyAreas` list, matching the Epitalon pattern.
- Shared source remains `js/research-references.js`. `node scripts/generate-reference-notes.cjs` rewrote the static notes, library ItemList, and no-JavaScript fallback. The note generator now names the growth-hormone axis area and uses the entry count in the notes description. Service-worker cache is `vv-pwa-v8-reference-batch-2` because `research-references.js` is cache-first. The version follows the vault-page cache bump.
