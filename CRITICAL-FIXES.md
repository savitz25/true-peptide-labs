# B2 critical fixes

Date: 2026-10-28. Scope is the four review items only. Research-use-only language is unchanged. Support email remains hello@asktrusthub.com.

## 1. Combination Builder

`tools/research-combination-builder.html` no longer shows a list-position percentage or an Alignment Index. Cards say how many selected research categories include the compound, for example “Matches 2 of 3 selected research categories.” The header counts compounds that overlap those categories and states that the count is not a compatibility score.

## 2. Calculator material check

`tools/peptide-calculator.html` warns when the requested research amount is larger than the selected vial content. The note includes how many vials of that content the mass would require (`Math.ceil`). The warning stays hidden when inputs are incomplete or the amount fits in one vial. This is a laboratory planning check only.

## 3. Domain

Live check on 2026-10-28: `https://vialvibes.com/` returned 200. `https://www.vialvibes.com/` returned 307 to `https://vialvibes.com/`. Preferred host is the apex.

Canonicals, `og:url`, sitemap locations, `robots.txt`, JSON-LD URLs, and the public JS/API host defaults now use `https://vialvibes.com`. `vercel.json` permanently redirects `www.vialvibes.com` to that host. The Body Explorer page and its sitemap entry use the same apex host. Historical markdown that still names `www` was left as-is. Page generators `scripts/generate-phase1.ps1` and `scripts/generate-phase2-research.ps1` now emit the apex host.

`http://www.vialvibes.com/` still upgrades to `https://www.vialvibes.com/` before the host redirect. That first hop is the platform HTTPS upgrade.

## 4. Citations

PubMed esummary on 2026-10-28. Corrected records:

- GHK-Cu: removed 18689049 (Charness and Tuffiash, human factors) and 20979553 (Orlando, immunosuppression). Replaced with 18644225 (Pickart, 2008, J Biomater Sci Polym Ed) and 29986520 (Pickart and Margolina, 2018, Int J Mol Sci).
- TB-500: 10469335 title no longer adds a rat-model gloss. 23084823 is Ho EN, J Chromatogr A, equine urine and plasma LC-MS. 22074294 title matches PubMed and is not labeled a review.
- BPC-157: 40756949 is Vasireddi et al., 2025, HSS J. The preclinical gloss was removed.
- Tirzepatide: 34170647 and 35658024 no longer add SURPASS-2 or SURMOUNT-1 to the titles.
- Semaglutide: 34942372 is Chao AM et al. 40281304 is Drucker DJ, 2025, Nat Rev Drug Discov.
- Retatrutide: 37385280 now uses the full Lancet title.

The same labels were updated in `scripts/generate-phase2-research.ps1`.

## Still needs deeper review

These PMIDs are the right papers. Bibliographic polish was not finished:

- CJC-1295 16352683 and 17018654, and ipamorelin 9849822, were not rewritten.
- BPC-157 40005999 spells Józwiak as Jozwiak. Tirzepatide 34170647 spells Frías as Frias.
- Semaglutide 40281304 has erratum PMID 40437221.
- Narrative text on the research pages was not re-audited sentence by sentence.
- `PHASE2-CHANGELOG.md` still lists the old GHK-Cu PMIDs. That file is historical.
