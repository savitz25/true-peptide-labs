/**
 * Register service worker + subtle iOS/Android Add-to-Home-Screen guidance.
 * Non-blocking; safe if SW unsupported.
 */
(function () {
  'use strict';

  // --- Service worker ---
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('/sw.js', { scope: '/' }).catch(function () {
        /* silent — site still works online */
      });
    });
  }

  // --- Install / A2HS prompt (discreet, once) ---
  var STORAGE_KEY = 'vv_a2hs_dismissed_v1';
  var DISMISS_DAYS = 21;

  function isStandalone() {
    return (
      window.matchMedia('(display-mode: standalone)').matches ||
      window.navigator.standalone === true
    );
  }

  function isIos() {
    return /iphone|ipad|ipod/i.test(navigator.userAgent) && !window.MSStream;
  }

  function isAndroid() {
    return /android/i.test(navigator.userAgent);
  }

  function wasDismissed() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return false;
      var t = parseInt(raw, 10);
      if (isNaN(t)) return true;
      return Date.now() - t < DISMISS_DAYS * 24 * 60 * 60 * 1000;
    } catch (e) {
      return true;
    }
  }

  function dismiss() {
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch (e) {}
    var el = document.getElementById('vv-a2hs');
    if (el) el.remove();
  }

  function showBanner(htmlBody) {
    if (document.getElementById('vv-a2hs')) return;
    var wrap = document.createElement('div');
    wrap.id = 'vv-a2hs';
    wrap.setAttribute('role', 'dialog');
    wrap.setAttribute('aria-label', 'Add Vial Vibes to Home Screen');
    wrap.innerHTML =
      '<div class="vv-a2hs-inner">' +
      '<button type="button" class="vv-a2hs-close" aria-label="Dismiss">&times;</button>' +
      htmlBody +
      '</div>';
    document.body.appendChild(wrap);
    wrap.querySelector('.vv-a2hs-close').addEventListener('click', dismiss);
    var later = wrap.querySelector('[data-a2hs-later]');
    if (later) later.addEventListener('click', dismiss);
  }

  function maybeShowIos() {
    if (!isIos() || isStandalone() || wasDismissed()) return;
    // Only on tools or home for relevance
    var path = location.pathname || '';
    var relevant =
      path === '/' ||
      path.indexOf('index.html') !== -1 ||
      path.indexOf('/tools/') !== -1 ||
      path.indexOf('peptide-calculator') !== -1 ||
      path.indexOf('combination') !== -1;
    if (!relevant) return;

    setTimeout(function () {
      showBanner(
        '<div class="vv-a2hs-title">Add Vial Vibes to your Home Screen</div>' +
          '<p class="vv-a2hs-text">Get one-tap access to the Reconstitution Calculator and Research Combination Builder — even on the go.</p>' +
          '<p class="vv-a2hs-steps">In Safari: tap <strong>Share</strong> → <strong>Add to Home Screen</strong></p>' +
          '<button type="button" class="vv-btn-primary vv-a2hs-btn" data-a2hs-later>Got it</button>'
      );
    }, 2800);
  }

  var deferredPrompt = null;
  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault();
    deferredPrompt = e;
    if (isStandalone() || wasDismissed() || isIos()) return;
    setTimeout(function () {
      if (!deferredPrompt) return;
      showBanner(
        '<div class="vv-a2hs-title">Install Vial Vibes</div>' +
          '<p class="vv-a2hs-text">Install for quick access to lab tools. Works great offline for cached calculators.</p>' +
          '<div class="vv-a2hs-actions">' +
          '<button type="button" class="vv-btn-primary vv-a2hs-btn" id="vv-a2hs-install">Install</button>' +
          '<button type="button" class="vv-btn-ghost vv-a2hs-btn" data-a2hs-later>Not now</button>' +
          '</div>'
      );
      var btn = document.getElementById('vv-a2hs-install');
      if (btn) {
        btn.addEventListener('click', function () {
          if (!deferredPrompt) return;
          deferredPrompt.prompt();
          deferredPrompt.userChoice.finally(function () {
            deferredPrompt = null;
            dismiss();
          });
        });
      }
    }, 3200);
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', maybeShowIos);
  } else {
    maybeShowIos();
  }
})();
