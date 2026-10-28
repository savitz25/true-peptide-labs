/* C3: Research library content, separate from the shared material catalog.
 * Catalog entries reuse products.js; reference-only entries belong in references.
 * See RESEARCH-LIBRARY-INDEX.md for the entry contract and extension steps.
 */
window.VV_RESEARCH_LIBRARY = {
  categories: window.TPL_CATEGORIES.map(function (category) {
    return { key: category.key, name: category.name };
  }),
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
  // Add literature-only compounds here, never to TPL_PRODUCTS solely to list them.
  // Use the same fields as above; specifications and coa may be null when absent.
  references: []
};
