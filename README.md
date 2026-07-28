# True Peptide Labs

Research-use-only (RUO) peptide supplier site. Static HTML, deployed on Vercel.

**Brand:** True Peptide Labs (operated by APEX Research, LLC)  
**Domain:** peptidetrue.com (Vercel: true-peptide-labs)

## Phase 0 status

Critical trust, brand, and compliance fixes are complete. See [PHASE0-CHANGELOG.md](./PHASE0-CHANGELOG.md).

- Unified brand (no “peptide true.com” / fabricated Apex testimonials)
- Unverified GMP/ISO/stats removed
- CoA: lot lookup / request only (no fake PDFs)
- RUO language on calculator & research combination builder
- Real legal pages (About, Terms, Privacy, Quality, RUO, Contact, etc.)
- `/cart` + `/checkout` without client-side card capture
- `robots.txt`, `sitemap.xml`, `vercel.json` 301 for index.html → /

## Local testing

Open `index.html` in a browser, or serve the folder:

```powershell
cd C:\Users\Michael.Savitsky\true-peptide-labs
npx --yes serve .
```

## Deploy

Push to GitHub `true-peptide-labs` (branch `main`). Vercel settings:

- Production Branch: `main`
- Framework: Other / None
- Build Command: empty
- Output Directory: `.`

## Important compliance notes

Products are **research use only**. Recommend legal review before traffic scaling. Do not reintroduce unverified certificates, institutional testimonials, or human-use language.
