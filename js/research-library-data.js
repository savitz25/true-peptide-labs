/* C3: Research library content, separate from the shared material catalog.
 * Catalog entries reuse products.js; reference-only entries belong in references.
 * See RESEARCH-LIBRARY-INDEX.md for the entry contract and extension steps.
 */
window.VV_RESEARCH_LIBRARY = {
  categories: window.TPL_CATEGORIES.map(function (category) {
    return { key: category.key, name: category.name };
  }).concat([
    { key: 'neural', name: 'Neural Signaling Models' },
    { key: 'cellular', name: 'Cellular Biology' },
    { key: 'barrier', name: 'Gut / Barrier Models' },
    { key: 'immune', name: 'Immune Signaling Models' }
  ]),
  catalog: window.TPL_PRODUCTS.map(function (product) {
    return {
      slug: product.slug,
      name: product.name,
      category: product.category,
      description: product.description,
      keywords: [product.shortName, product.sequence].concat(product.researchFocus).join(' '),
      overview: '../research/' + product.slug + '.html',
      specifications: product.slug + '.html#specifications',
      coa: '../vault.html?product=' + encodeURIComponent(product.name) + '#request'
    };
  }),
  // Shared reference content has no specifications or CoA destinations.
  references: (window.VV_RESEARCH_REFERENCES || []).map(function (entry) {
    return Object.assign({}, entry, { referenceOnly: true, overview: entry.note });
  })
};
