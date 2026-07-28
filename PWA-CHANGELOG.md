# Progressive Web App (PWA) — Changelog

**Date:** 2026-07-28  
**Brand:** Vial Vibes  
**Repo:** true-peptide-labs  

## Goal
Turn the static site into a high-quality PWA so users can **Add to Home Screen** (especially iPhone) for a fast, app-like experience focused on the **Reconstitution Calculator** and **Research Combination Builder** — without changing the normal browser website.

## Deliverables

### 1. Web App Manifest
- **File:** `/manifest.webmanifest`
- `name` / `short_name`: Vial Vibes  
- `start_url`: `/tools/peptide-calculator.html?source=pwa` (tools-first home-screen launch)  
- `display`: `standalone`  
- `theme_color` / `background_color`: `#0F0C29`  
- `orientation`: `portrait-primary`  
- `categories`: science, utilities, education  
- Shortcuts: Calculator, Combination Builder, Peptide Library  

### 2. Icons (`/icons/`)
| File | Size |
|------|------|
| `icon-192.png` | 192×192 |
| `icon-512.png` | 512×512 |
| `icon-512-maskable.png` | 512×512 |
| `apple-touch-icon.png` | 180×180 |
| `icon-152.png` | 152×152 |
| `icon-167.png` | 167×167 |

High-contrast vial monogram on dark navy (`#0F0C29`) for home-screen clarity.

### 3. Service Worker
- **File:** `/sw.js`  
- Precaches shell + **calculator**, **combination builder**, library, vault, vibe-finder, CSS/JS, icons  
- Static assets: **cache-first**  
- HTML: **network-first**, fallback to cache, then `/offline.html`  
- **Never** caches `/api/*` (Resend forms stay online-only)  

### 4. Registration
- **File:** `/js/pwa-register.js`  
- Registers SW with scope `/`  
- Linked on **all HTML pages**  

### 5. Apple / theme meta (all pages)
```
apple-mobile-web-app-capable = yes
apple-mobile-web-app-status-bar-style = black-translucent
apple-mobile-web-app-title = Vial Vibes
theme-color = #0F0C29
link rel=manifest
link rel=apple-touch-icon
viewport-fit=cover
```

### 6. Add to Home Screen guidance
- Discreet bottom banner (once / 21 days after dismiss)  
- **iOS Safari:** Share → Add to Home Screen instructions  
- **Android/Chrome:** uses `beforeinstallprompt` when available  
- Skipped in standalone mode  

### 7. Tools mobile polish
- Larger touch targets for calculator chips (min 44px)  
- Safe-area insets in standalone mode  
- Offline fallback page with links to cached tools  

## Testing checklist

- [ ] Manifest loads at `/manifest.webmanifest` (Content-Type application/manifest+json)  
- [ ] Chrome DevTools → Application → Manifest validates  
- [ ] SW registers (Application → Service Workers)  
- [ ] iPhone Safari → Share → Add to Home Screen → icon looks sharp  
- [ ] Opens **standalone** (no Safari chrome)  
- [ ] Calculator usable offline after first visit  
- [ ] Combination Builder usable offline after first visit  
- [ ] Desktop/browser visit unchanged  
- [ ] A2HS prompt appears on iOS (tools/home), dismissible  
- [ ] Theme color / status bar look correct  

## Acceptance

| Criterion | Status |
|-----------|--------|
| Add to Home Screen works | Implemented (test on device after deploy) |
| Tools fast from home icon | `start_url` → calculator; shortcuts for both tools |
| Offline/caching for core tools | SW precache + strategies |
| Normal website intact | Progressive enhancement only |
| Icons, manifest, SW, Apple meta | Done |
| Documented + pushed | This file |

## Notes
- First load still needs network to populate cache.  
- Forms (contact/vault) require network by design.  
- Bump `CACHE_VERSION` in `sw.js` when shipping major asset changes.  
