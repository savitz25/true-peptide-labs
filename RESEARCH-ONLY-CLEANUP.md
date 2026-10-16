# Research-only cleanup

Follow-up to the commerce-removal commit. Public pages now read as a research and education library.

- Public mailbox is `research@vialvibes.com` only. `orders@` addresses and a stray `hello@asktrusthub.com` swap are gone from HTML, JavaScript, and the contact API default.
- Homepage FAQ, About, Contact, Quality, Terms, Privacy, and the RUO policy no longer describe checkout, orders, purchases, or sales. Terms of Sale is now Terms of Use.
- Shared disclaimers and footers use laboratory-reference wording. “Research Use Only” is unchanged.
- Price badges, cart icons, and order buttons stay removed. `cart.html` and `checkout.html` remain noindex notices, and `vercel.json` still redirects both URLs home.
- Canonicals, `og:url`, `sitemap.xml`, and `robots.txt` stay on `https://www.vialvibes.com`.

Historical phase notes were left as history. They are not public pages.
