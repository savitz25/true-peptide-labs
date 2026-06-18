# APEX Research — Premium Research Peptides

A complete, self-contained professional website for selling research peptides.

## Features

- **Modern premium design** using Tailwind CSS with custom science/medical aesthetic
- **8 high-quality research peptides** across 4 categories:
  - Recovery & Healing: BPC-157 Arginate, TB-500
  - Metabolic: Semaglutide, Tirzepatide, Retatrutide
  - Growth Hormone: Ipamorelin, CJC-1295
  - Cosmetic: GHK-Cu
- **Fully functional shopping cart** with quantity adjustment and live totals
- **Product detail modals** with full research descriptions and disclaimers
- **Category filtering + powerful client-side search**
- **Complete checkout flow** (simulated) with order confirmation
- **Strong legal disclaimers** and research-use-only messaging throughout
- **Responsive** — works beautifully on desktop, tablet, and mobile
- **Zero dependencies** — single `index.html` file (uses Tailwind CDN + Font Awesome CDN)

## How to Run

### Option 1 — Quickest (Recommended)
1. Double-click `index.html` in File Explorer, or
2. Right-click `index.html` → **Open with** → your browser

### Option 2 — Using a Local Server (better for development)
From this folder, run one of the following:

**PowerShell:**
```powershell
python -m http.server 8080
```
Then visit: **http://localhost:8080**

(If Python is not installed, use VS Code Live Server extension.)

## Key Pages / Sections

- **Hero** — Strong value proposition with trust indicators
- **Catalog** — Filterable + searchable product grid
- **Science** — Quality / CoA section
- **Testimonials** — Social proof from realistic researchers
- **FAQ** — Accordion with important legal clarifications
- **Cart Drawer** — Slide-in cart with qty controls
- **Checkout** — Full modal checkout with fake payment form
- **Order Confirmation** — Realistic success screen

## Important Notes

All products are clearly marked **"For Research Use Only. Not for Human Consumption"**.

This site includes heavy disclaimers in the footer and product detail views to reflect real-world legal requirements around research peptides.

## Customization Ideas

- Replace placeholder avatars in testimonials with real ones
- Add your actual company address, logo image, and real CoA links
- Connect the checkout form to Stripe / Paddle / a real backend
- Add inventory tracking and out-of-stock states
- Add real product images (the current design uses elegant gradients + icons)

## Tech Stack

- Plain HTML5 + Tailwind CSS (Play CDN)
- Vanilla JavaScript (no frameworks)
- Font Awesome 6 icons

Built as a high-fidelity prototype / production-ready landing page for a research peptide supplier.

---

© 2026 — APEX Research (demo)