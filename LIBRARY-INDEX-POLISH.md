# C4 — Research Library index polish

- Refined the intro, spacing, responsive grid, card typography, focus states, and link hierarchy. Narrow screens omit the duplicate entry-type key.
- Added catalog/reference badges and entry-type filtering. Reference cards link to research notes and sources, with explicit non-catalog status and no specification or CoA actions.
- Combined search, category, and type filters with live counts, alphabetical groups, contextual results, and reset/empty states. Search supports aliases, research models, diacritics, and punctuation variants such as `BPC157`.
- Kept category controls compact as the library grows; new category keys remain filterable. Preserved navigation, no-JavaScript fallback, RUO wording, and `hello@asktrusthub.com`.
- Updated the entry-contract notes and service-worker cache version. No compounds, commerce elements, or runtime dependencies added by C4.

Validation: desktop and 390/320-pixel layouts reviewed in Chrome; live search confirmed. DOM checks cover filter intersections, counts, Unicode/compact queries, reset/focus, empty results, safe text rendering, no-JavaScript fallback, reference-only actions, all 88 local links/anchors, and CoA prefill. A temporary 500-reference/20-category fixture passed without changing site data. Rebased onto C3's expansion and rechecked the combined 16-entry library, preserving all eight references, sources, fallback links, and research-note styles. JavaScript syntax and `git diff --check` passed.
