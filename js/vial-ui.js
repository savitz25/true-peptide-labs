/**
 * VialVibes UI helpers — vial cards, energy classes, library render
 * Research Use Only presentation layer.
 */
(function (w) {
  function energyClass(category) {
    switch (category) {
      case 'recovery': return 'energy-tissue';
      case 'metabolic': return 'energy-metabolic';
      case 'gh': return 'energy-gh';
      case 'cosmetic': return 'energy-cosmetic';
      default: return 'energy-default';
    }
  }

  function escapeHtml(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function vialSvgWave() {
    return '<svg class="vial-wave" viewBox="0 0 50 16" preserveAspectRatio="none" aria-hidden="true"><path d="M2 10 C8 2 14 14 20 8 S32 2 38 10 S46 14 48 8"/></svg>';
  }

  function glassVialHtml() {
    return (
      '<div class="glass-vial" aria-hidden="true">' +
        '<div class="vial-cap"></div>' +
        '<div class="vial-neck"></div>' +
        '<div class="vial-body">' +
          '<div class="vial-liquid"></div>' +
          vialSvgWave() +
        '</div>' +
      '</div>'
    );
  }

  /**
   * @param {object} p product from TPL_PRODUCTS
   * @param {object} opts { basePath: '' | '../' }
   */
  function vialCardHtml(p, opts) {
    opts = opts || {};
    var base = opts.basePath || '';
    var energy = energyClass(p.category);
    var href = base + 'peptides/' + p.slug + '.html';
    var research = base + 'research/' + p.slug + '.html';
    return (
      '<article class="vial-card ' + energy + '">' +
        '<div class="vial-stage">' + glassVialHtml() + '</div>' +
        '<div class="vial-card-body">' +
          '<div class="energy-tag">' + escapeHtml(p.categoryLabel) + '</div>' +
          '<h3><a href="' + href + '">' + escapeHtml(p.name) + '</a></h3>' +
          '<p class="vial-meta">' + escapeHtml(p.vialSize) + ' · CoA on request · ' + escapeHtml(p.shortName) + '</p>' +
          '<p class="vial-meta" style="margin-top:-0.35rem">' + escapeHtml(p.description) + '</p>' +
          '<div class="vial-footer">' +
            '<div class="vial-price">$' + p.price + '</div>' +
            '<div class="flex gap-2">' +
              '<a href="' + research + '" class="vv-btn-ghost !py-2 !px-3 text-xs">Research overview</a>' +
              '<a href="' + href + '" class="vv-btn-primary !py-2 !px-3 text-xs">Product specs</a>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</article>'
    );
  }

  function renderVialGrid(container, products, opts) {
    if (!container) return;
    var list = products || w.TPL_PRODUCTS || [];
    container.innerHTML = list.map(function (p) { return vialCardHtml(p, opts); }).join('');
  }

  function filterProducts(category) {
    var list = w.TPL_PRODUCTS || [];
    if (!category || category === 'all') return list.slice();
    return list.filter(function (p) { return p.category === category || p.categorySlug === category; });
  }

  w.VV = {
    energyClass: energyClass,
    vialCardHtml: vialCardHtml,
    glassVialHtml: glassVialHtml,
    renderVialGrid: renderVialGrid,
    filterProducts: filterProducts
  };
})(window);
