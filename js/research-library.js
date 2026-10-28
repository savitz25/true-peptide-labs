/* C3: Accessible, combined category and text filtering for the RUO library. */
(function () {
  'use strict';
  var data = window.VV_RESEARCH_LIBRARY;
  if (!data) return;

  var search = document.getElementById('lib-search');
  var filters = document.getElementById('filters');
  var count = document.getElementById('library-count');
  var category = 'all';
  var groups = [
    { entries: data.catalog, section: document.getElementById('catalog-section'), grid: document.getElementById('library-grid') },
    { entries: data.references, section: document.getElementById('reference-section'), grid: document.getElementById('reference-grid') }
  ];

  function normalize(value) {
    return value.toLowerCase().replace(/[\u2010-\u2015-]/g, ' ').replace(/\s+/g, ' ').trim();
  }

  function element(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function categoryName(key) {
    var match = data.categories.find(function (item) { return item.key === key; });
    return match ? match.name : key;
  }

  function card(entry) {
    var article = element('article', 'research-card');
    article.dataset.category = entry.category;
    if (entry.referenceOnly) {
      article.classList.add('research-card-reference');
      article.appendChild(element('p', 'research-reference-label', 'Research reference only — not a catalog item'));
    }
    article.setAttribute('aria-labelledby', 'entry-' + entry.slug);
    article.appendChild(element('span', 'research-tag', categoryName(entry.category)));
    var title = element('h3', '', entry.name);
    title.id = 'entry-' + entry.slug;
    article.appendChild(title);
    article.appendChild(element('p', 'research-description', entry.description));
    if (entry.models) {
      article.appendChild(element('p', 'research-models', 'Research models: ' + entry.models.join('; ') + '.'));
    }
    var links = element('div', 'research-links');
    var actions = entry.referenceOnly ? [['Research note & source', entry.overview]] : [
      ['Research Overview', entry.overview],
      ['Specifications', entry.specifications],
      ['Request CoA', entry.coa]
    ];
    actions.forEach(function (item) {
      if (item[1]) {
        var link = element('a', '', item[0]);
        link.href = item[1];
        link.setAttribute('aria-label', item[0] + ': ' + entry.name);
        links.appendChild(link);
      } else {
        links.appendChild(element('span', 'research-unavailable', item[0] + ': not available'));
      }
    });
    article.appendChild(links);
    return article;
  }

  groups.forEach(function (group) {
    group.cards = group.entries.map(function (entry) {
      var node = card(entry);
      group.grid.appendChild(node);
      return {
        node: node,
        category: entry.category,
        text: normalize([entry.name, entry.description, entry.keywords || '', (entry.models || []).join(' '), categoryName(entry.category)].join(' '))
      };
    });
  });

  function paint() {
    var terms = normalize(search.value).split(' ').filter(Boolean);
    var total = 0;
    groups.forEach(function (group) {
      var visible = 0;
      group.cards.forEach(function (item) {
        var match = (category === 'all' || item.category === category) && terms.every(function (term) {
          return item.text.indexOf(term) !== -1;
        });
        item.node.hidden = !match;
        if (match) visible++;
      });
      group.section.hidden = visible === 0;
      total += visible;
    });
    count.textContent = 'Showing ' + total + ' of ' + (data.catalog.length + data.references.length) + ' entries (' + data.catalog.length + ' catalog; ' + data.references.length + ' research reference only)';
    document.getElementById('empty').hidden = total !== 0;
    filters.querySelectorAll('button').forEach(function (button) {
      button.setAttribute('aria-pressed', String(button.dataset.category === category));
    });
  }

  [{ key: 'all', name: 'All categories' }].concat(data.categories).forEach(function (item) {
    var button = element('button', 'research-filter', item.name);
    button.type = 'button';
    button.dataset.category = item.key;
    button.addEventListener('click', function () {
      category = item.key;
      paint();
    });
    filters.appendChild(button);
  });

  search.addEventListener('input', paint);
  document.querySelectorAll('[data-reset-library]').forEach(function (button) {
    button.addEventListener('click', function () {
      category = 'all';
      search.value = '';
      paint();
      search.focus();
    });
  });
  paint();
  document.getElementById('library-controls').hidden = false;
  document.getElementById('library-results').hidden = false;
  document.getElementById('library-fallback').hidden = true;
})();
