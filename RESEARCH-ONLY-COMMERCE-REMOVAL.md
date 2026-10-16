# Research-only commerce removal

Vial Vibes no longer presents ordering, a cart, or prices. Research Hub, laboratory tools, Vial Vault, and RUO language stay.

- Removed Cart from navigation, mobile menus, and footers.
- Removed prices from peptide cards, product pages, Vibe Finder results, the design-system specimen, and product JSON-LD Offer blocks. Tool pages no longer publish a $0 Offer.
- Removed add-to-cart buttons and the homepage checkout FAQ.
- `cart.html` and `checkout.html` are short research-only notices. `vercel.json` permanently redirects both URLs to the homepage.
- `js/cart.js` is a no-op and is no longer loaded or precached. Service worker cache is `vv-pwa-v2`.
- Peptide cards and product pages link to research overview, specifications, and a Vial Vault CoA request.
- The contact page no longer shows an orders card or an orders topic. The about page no longer lists an orders email.
- The privacy local-storage section no longer describes a shopping cart.

Terms of sale were not rewritten in the commerce-removal pass. Public mailbox stays research@vialvibes.com. Wording follow-up: RESEARCH-ONLY-CLEANUP.md.
