# Open Graph / Social Share Preview

**Date:** 2026-07-28  
**Brand:** Vial Vibes  

## Problem
Shared links (iMessage, WhatsApp, Facebook, X, LinkedIn) showed a blank/blue preview because `og:image` was missing or incomplete.

## Solution

### Asset
- `images/og-vial-vibes-share.jpg` — **1200×630** JPEG brand share card  
- `images/og-default.jpg` — identical fallback copy  

Generated/resized for high-contrast dark neon-lab look (glass vial + Vial Vibes branding). Public path after deploy:

- `https://vialvibes.com/images/og-vial-vibes-share.jpg`  
- Also served on current host: `https://www.peptidetrue.com/images/og-vial-vibes-share.jpg` (or Vercel project URL)

### Meta tags
- Homepage: full Open Graph + Twitter `summary_large_image` set  
- All other HTML pages: `og:image`, dimensions, `twitter:card` + `twitter:image` injected  

### Notes
- Crawlers need an absolute HTTPS URL; replace host when production domain is final.  
- After deploy, re-scrape with:
  - [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)  
  - [Twitter Card Validator](https://cards-dev.twitter.com/validator)  
  - LinkedIn Post Inspector  
- If the original designer asset (`8f8BJ.jpg`) is available later, drop it in as `images/og-vial-vibes-share.jpg` (resize to 1200×630) and redeploy.  
