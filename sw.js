/* Vial Vibes service worker — cache shell + tools for offline/PWA use */
const CACHE_VERSION = 'vv-pwa-v1';
const PRECACHE = [
  '/',
  '/index.html',
  '/offline.html',
  '/manifest.webmanifest',
  '/css/site.css',
  '/js/products.js',
  '/js/vial-ui.js',
  '/js/cart.js',
  '/js/email-client.js',
  '/js/pwa-register.js',
  '/tools/peptide-calculator.html',
  '/tools/research-combination-builder.html',
  '/peptides/index.html',
  '/vault.html',
  '/vibe-finder.html',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/icons/apple-touch-icon.png',
  '/assets/logo-vialvibes.svg',
  '/assets/logo-vialvibes-mark.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) =>
      Promise.all(
        PRECACHE.map((url) =>
          cache.add(url).catch(() => {
            /* skip missing optional assets */
          })
        )
      )
    ).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

function isStaticAsset(url) {
  return /\.(?:css|js|png|jpg|jpeg|svg|webp|woff2?|webmanifest)(?:\?|$)/i.test(url.pathname);
}

function isToolPage(url) {
  return (
    url.pathname.indexOf('/tools/') === 0 ||
    url.pathname.endsWith('peptide-calculator.html') ||
    url.pathname.endsWith('research-combination-builder.html')
  );
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // Never cache API (Resend forms need network)
  if (url.pathname.indexOf('/api/') === 0) return;

  // Static assets: cache-first
  if (isStaticAsset(url)) {
    event.respondWith(
      caches.match(req).then((cached) => {
        const fetchPromise = fetch(req)
          .then((res) => {
            if (res && res.ok) {
              const clone = res.clone();
              caches.open(CACHE_VERSION).then((c) => c.put(req, clone));
            }
            return res;
          })
          .catch(() => cached);
        return cached || fetchPromise;
      })
    );
    return;
  }

  // HTML / tools: network-first, fall back to cache, then offline page
  if (req.headers.get('accept') && req.headers.get('accept').includes('text/html')) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          if (res && res.ok) {
            const clone = res.clone();
            caches.open(CACHE_VERSION).then((c) => c.put(req, clone));
          }
          return res;
        })
        .catch(async () => {
          const cached = await caches.match(req);
          if (cached) return cached;
          // try bare tool paths
          if (isToolPage(url)) {
            const alt = await caches.match(url.pathname);
            if (alt) return alt;
          }
          return caches.match('/offline.html');
        })
    );
  }
});
