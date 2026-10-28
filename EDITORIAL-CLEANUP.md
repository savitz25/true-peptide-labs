# C4 — Editorial cleanup

2026-10-28

- Fixed broken punctuation in homepage and combination-builder copy, including exported text.
- Replaced visible TPL branding in research pages and metadata with VialVibes. Internal JavaScript identifiers remain unchanged.
- Replaced reviewer placeholders on 18 pages with current independent-review status; clarified that existing review dates are editorial dates. Updated the generator template too.
- Simplified Contact and CoA copy, removed provider details from visitor-facing messages, and clarified request details and response expectations without inventing a response-time guarantee.
- Replaced the empty Publications placeholder with three references already cited in the Research Hub, verified against PubMed: [30915550](https://pubmed.ncbi.nlm.nih.gov/30915550/), [34170647](https://pubmed.ncbi.nlm.nih.gov/34170647/), and [37366315](https://pubmed.ncbi.nlm.nih.gov/37366315/).
- Confirmed public HTML and browser JavaScript use only `hello@asktrusthub.com`; removed stale sender-domain wording and email examples. Updated current email setup documentation and a generator's email label. Historical changelogs remain historical; internal mail forwarding is unchanged.
- Aligned two conflicting policy exceptions with the existing restrictions on human, clinical, veterinary, and bodily use. Preserved research-only and educational disclaimers.

Validation: checked all 52 HTML pages and public JavaScript for encoding, public email, old branding, and reviewer placeholders; parsed 137 JSON-LD blocks; syntax-checked 13 inline scripts; checked Publications links and anchors. Contact success/error paths passed with mocked delivery; no email was sent. `git diff --check` passed. Browser preview was unavailable, so visual rendering and actual email delivery were not verified.

No new features, dependencies, or backend changes.
