# Step 3 — Internal Linking Pass

**Date:** 2026-07-28  
**Live host:** `https://www.vialvibes.com`  
**Prerequisites:** Step 1 (canonicals/brand), Step 2 (schema)

## Goal

Strengthen internal linking so product pages, research overviews, educational guides, tools, CoA/Vault, and hubs form a connected topical ecosystem (research → documentation → tools → product).

## Connection patterns implemented

| Pattern | Implementation |
|---------|----------------|
| **Product → Research** | Primary CTA + “Continue your research workflow” card + library “Research overview” button |
| **Product → Tools** | Calculator + combination builder in quick links and workflow card |
| **Product → Docs** | CoA request, How to read a CoA, storage, reconstitution, Vial Vault |
| **Product → Related products** | Existing related materials cards (same category) retained |
| **Research → Product** | Sidebar + body CTA: “View {compound} product specifications” |
| **Research → Education** | Sidebar + lab handling: CoA, storage, reconstitution, HPLC/MS, purity |
| **Research → Tools / Vault / Hub** | Sidebar + related chips |
| **Education → Product / Research / Tools** | Expanded “Related resources” (Vault, calculator, combination builder, sample overviews, library, hub) |
| **Tools → Product / Research / Guides** | “Related research resources” panel + hero chips (reconstitution guide, vault) |
| **Category → Research / Tools** | Hero pathway chips per category |
| **Library → Research / Tools / Vault** | Pathway strip + improved card CTAs |
| **Research Hub → Vault** | Vault card in laboratory tools section |
| **Compare → Next steps** | Pathways strip after comparison table |
| **CoA → Guides / Library / Hub / Vault** | Documentation pathways section |
| **Vault → Products / Research / Tools / CoA** | “Continue researching” strip |

## Page types updated

### Product pages (`/peptides/*.html` — 8 compounds)
- Stronger research overview CTA labels (`{Compound} research overview`)
- Expanded quick-link strip (CoA literacy, storage, reconstitution, calculator, combination builder, compare, Vault)
- New **Continue your research workflow** block (9 contextual destinations)
- Related product cards retained

### Research overviews (`/research/{compound}.html` — 8)
- Product CTAs renamed for clarity
- Sidebar expanded: combination builder, Vault, HPLC/MS, purity claims, storage, Research Hub
- Lab handling lists expanded where needed
- Related chips include product specs, Vault, calculator

### Educational guides (7)
- `how-to-read-a-coa`, `hplc-mass-spectrometry`, `peptide-purity-claims`, `storage-stability`, `reconstitution-best-practices`, `glossary`, `research-use-only-explainer`
- Related resources enriched with Vault, tools, Research Hub, sample product + research links

### Tools
- Both calculator and combination builder: **Related research resources** panel
- Calculator hero: reconstitution guide chip
- Combination builder: Vault + reconstitution guide chips

### Hubs & utility pages
- Peptide Library: research pathways strip; card buttons → “Research overview” / “Product specs” (`js/vial-ui.js`)
- Category hubs (4): research overview + tool + vault chips
- Research Hub: Vault documentation card
- Compare: next-steps pathways
- CoA page: documentation pathways section
- Vial Vault: continue-researching strip (products, research, tools, CoA)

### Homepage
- Already had strong paths to Library, Research Hub, both tools, and Vault (verified; no structural clutter added)

## Anchor text approach

- Descriptive, user-intent phrases (e.g. “Calculate reconstitution volumes”, “View BPC-157 product specifications”, “How to read a Certificate of Analysis”)
- Avoided “click here” and keyword-stuffed spam
- RUO context kept in surrounding copy on new panels

## Link health

- Relative internal links preferred
- Automated relative-link existence check on product/research/tools + key hubs: **no real broken targets** (JS template false positive on homepage ignored)

## Future linking opportunities

- Deeper in-body contextual links inside long research sections (not only sidebars/panels)
- Product photography pages → image-linked cross-sell once assets exist
- Publications / grants pages → more compound-level deep links when content grows
- Full site search + SearchAction (out of scope for this step)

## Acceptance criteria

- [x] Every product page links to its research overview and the calculator  
- [x] Every research overview links back to its product page and educational content  
- [x] Educational guides link to products, research, and tools  
- [x] Tools pages link outward to products, research, and guides  
- [x] Research Hub and major landings have pathways into deeper content  
- [x] No broken links introduced  
- [x] Design remains panel/chip based (not cluttered footers only)  
- [x] Changelog + push to `main`

## Next

**Step 4: Title Tags & Meta Description Optimization**
