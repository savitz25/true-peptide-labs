# Step 2 — Schema Markup (Structured Data)

**Date:** 2026-07-28  
**Live host:** `https://www.vialvibes.com`  
**Repo:** savitz25/true-peptide-labs  
**Prerequisite:** Step 1 (canonicals + brand/domain cleanup)

## Goal

Add accurate, valid JSON-LD so search engines understand the organization, products, research content, tools, and page hierarchy. All markup stays Research Use Only compliant and only reflects content visible on each page.

## Schema types added

| Type | Purpose |
|------|---------|
| **Organization** | Sitewide identity (Vial Vibes / APEX Research, LLC) |
| **WebSite** | Homepage site entity (no SearchAction — no site search) |
| **WebPage** | Supporting content pages |
| **Product** + **Offer** | Peptide product pages (price/availability only when shown) |
| **Article** | Research compound overviews + educational guides |
| **BreadcrumbList** | Pages with visible breadcrumb trails |
| **WebApplication** | Calculator + combination builder tools |
| **FAQPage** | Homepage FAQ section only |
| **ItemList** | Peptide library, category hubs, research hub |

### Canonical Organization block (every page)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Vial Vibes",
  "legalName": "APEX Research, LLC",
  "url": "https://www.vialvibes.com",
  "logo": "https://www.vialvibes.com/icons/icon-512.png",
  "description": "Research-use-only peptides, laboratory tools, and educational resources for qualified researchers. Operated by APEX Research, LLC.",
  "email": "research@vialvibes.com",
  "sameAs": []
}
```

`sameAs` is empty until official social profiles are published.

## Page templates → schema map

### Homepage (`index.html`)
- Organization
- WebSite
- FAQPage (4 Q&As matching the visible FAQ accordion)

### Product pages (`peptides/{slug}.html` — 8 SKUs)
- Organization
- Product (name, RUO description, brand **Vial Vibes**, category, url)
- Offer (USD price + InStock — matches visible research price)
- BreadcrumbList: Home → Peptides → Category → Product

Products: BPC-157, TB-500, Semaglutide, Tirzepatide, Retatrutide, Ipamorelin, CJC-1295, GHK-Cu.

**Not included:** SKU/MPN (not shown on page), reviews, ratings, aggregateRating.

### Category hubs (`peptides/tissue-repair|metabolic|growth-hormone|cosmetic.html`)
- Organization
- WebPage
- ItemList (products in that category)
- BreadcrumbList

### Peptide Library (`peptides/index.html`)
- Organization
- WebPage
- ItemList (all catalog products)
- BreadcrumbList

### Research compound overviews (`research/{slug}.html` — 8 pages)
- Organization
- Article (headline, description from meta, author = Vial Vibes Research Documentation Team, datePublished/dateModified = 2026-07-28 “Last reviewed”, publisher + logo, mainEntityOfPage, url)
- BreadcrumbList: Home → Research → Compound

### Research educational guides (7 pages)
- Same Article + Breadcrumb pattern  
- how-to-read-a-coa, hplc-mass-spectrometry, peptide-purity-claims, storage-stability, reconstitution-best-practices, research-use-only-explainer, glossary

### Research Hub (`research/index.html`)
- Organization, WebPage, ItemList (overviews + guides + compare), BreadcrumbList

### Compare (`research/compare.html`)
- Organization, WebPage, BreadcrumbList  
- (WebPage rather than Article — planning tool UI, not long-form article)

### Tools
| Page | Schema |
|------|--------|
| `tools/peptide-calculator.html` | Organization + WebApplication (ScienceApplication) + BreadcrumbList |
| `tools/research-combination-builder.html` | Organization + WebApplication (ScienceApplication) + BreadcrumbList |

Free tools use `offers.price: "0"`. Descriptions state RUO / not for human dosing.

### CoA + content standards
- `coa.html` — Organization, WebPage, BreadcrumbList (Home → Quality → Certificates of Analysis)
- `about-scientific-content.html` — Organization, WebPage, BreadcrumbList

### Other public pages (Organization + WebPage)
about, contact, quality, research-use-only, terms, privacy, careers, publications, research-grants, vault, vibe-finder, cart, checkout

### Minimal Organization only
- `design-system.html` (internal brand kit)
- `offline.html` (PWA offline shell)
- `peptide-calculator.html` / `stack-builder.html` (redirect stubs; canonical already points at `/tools/...`)

## Intentionally skipped / limited

| Item | Why |
|------|-----|
| **SearchAction** on WebSite | No on-site search UI |
| **SKU / MPN** on Product | Not visibly displayed on product pages (old `TPL-*` codes removed) |
| **Review / AggregateRating** | No review content on site |
| **FAQPage** on product/research pages | No visible FAQ sections there (homepage only) |
| **sameAs social URLs** | No confirmed public profiles yet |
| **ScholarlyArticle** | Guides are educational Article; not peer-reviewed publications |
| **Product schema on category pages** | Categories are lists, not single products → ItemList |

## Bonus fix during Step 2

**`vault.html` was truncated** in recent history (~97 lines, missing `</head>` / body markup). Restored full page content from the last good commit, re-applied `www.vialvibes.com` URLs, re-attached `email-client.js` + Resend vault API submit path, and added Organization + WebPage schema.

## Validation notes

- **Local:** All JSON-LD blocks parse cleanly via `ConvertFrom-Json` (0 parse errors across 52 HTML pages).
- **Google Rich Results Test:** After deploy, test at minimum:
  1. Homepage — Organization, WebSite, FAQ  
     `https://www.vialvibes.com/`
  2. Product — Product + Breadcrumb  
     `https://www.vialvibes.com/peptides/bpc-157.html`
  3. Research — Article + Breadcrumb  
     `https://www.vialvibes.com/research/bpc-157.html`
  4. Calculator — WebApplication  
     `https://www.vialvibes.com/tools/peptide-calculator.html`
- Tool: [Google Rich Results Test](https://search.google.com/test/rich-results)
- Optional: Schema Markup Validator (schema.org)

### Known non-critical notes for Google
- Product rich results may still require `image` for full eligibility — product pages use CSS vial visuals rather than a dedicated product photo URL; image can be added later if product photography is published.
- FAQ eligibility requires the FAQ content to remain visible (it is).

## Acceptance criteria

- [x] Organization schema present sitewide
- [x] Product schema on all 8 peptide product pages
- [x] Article schema on research overviews + educational guides
- [x] BreadcrumbList on pages with breadcrumbs (products, categories, research, tools, CoA, etc.)
- [x] WebApplication schema on both tools
- [x] FAQPage on homepage where FAQs exist
- [x] No invented ratings/reviews; no non-visible SKUs; prices only where shown
- [x] JSON-LD validates locally (parse)
- [x] Changelog + push to `main`

## Next

**Step 3: Internal Linking Pass**
