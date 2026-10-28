/* C4: Research library presentation and combined search/category/type filters. */
(function () {
  'use strict';
  var data = window.VV_RESEARCH_LIBRARY;
  if (!data) return;

  var search = document.getElementById('lib-search');
  var category = document.getElementById('lib-category');
  var type = document.getElementById('lib-type');
  var count = document.getElementById('library-count');
  var categories = (data.categories || []).slice();
  var groups = [
    { key: 'catalog', label: 'Catalog material', entries: data.catalog || [], section: document.getElementById('catalog-section'), grid: document.getElementById('library-grid'), count: document.getElementById('catalog-count') },
    { key: 'reference', label: 'Research reference', entries: data.references || [], section: document.getElementById('reference-section'), grid: document.getElementById('reference-grid'), count: document.getElementById('reference-count') }
  ];

  function normalize(value) {
    return String(value || '').normalize('NFKD').toLowerCase()
      .replace(/[\u0300-\u036f]/g, '').replace(/β/g, 'beta')
      .replace(/[^a-z0-9]+/g, ' ').trim();
  }

  function element(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  // New reference categories remain filterable even before a display label is supplied.
  groups.forEach(function (group) {
    group.entries.forEach(function (entry) {
      if (entry.category && !categories.some(function (item) { return item.key === entry.category; })) {
        categories.push({ key: entry.category, name: entry.category.replace(/[-_]/g, ' ') });
      }
    });
  });

  function categoryName(key) {
    var match = categories.find(function (item) { return item.key === key; });
    return match ? match.name : 'General research';
  }

  function entryLink(label, href, entry, className) {
    var link = element('a', className, label);
    link.href = href;
    link.setAttribute('aria-label', label === entry.name ? entry.name : label + ': ' + entry.name);
    return link;
  }

  function card(entry, group) {
    var article = element('article', 'research-card');
    article.dataset.category = entry.category;
    article.dataset.entryType = group.key;
    var headingId = 'entry-' + group.key + '-' + entry.slug;
    article.setAttribute('aria-labelledby', headingId);
    article.appendChild(element('span', 'research-kind' + (group.key === 'reference' ? ' research-kind-reference' : ''), group.label));
    var title = element('h3');
    title.id = headingId;
    if (entry.overview) title.appendChild(entryLink(entry.name, entry.overview, entry));
    else title.textContent = entry.name;
    article.appendChild(title);
    article.appendChild(element('p', 'research-tag', categoryName(entry.category)));
    article.appendChild(element('p', 'research-description', entry.description));
    if (entry.models && entry.models.length) {
      article.appendChild(element('p', 'research-models', 'Research models: ' + entry.models.join('; ') + '.'));
    }
    var links = element('div', 'research-links');
    if (entry.overview) {
      var overview = entryLink(group.key === 'reference' ? 'Read research note & source' : 'Read research overview', entry.overview, entry, 'research-overview');
      var arrow = element('span', '', '→');
      arrow.setAttribute('aria-hidden', 'true');
      overview.appendChild(arrow);
      links.appendChild(overview);
    } else {
      links.appendChild(element('span', 'research-unavailable', 'Research overview not yet documented.'));
    }
    if (group.key === 'catalog') {
      var documents = element('div', 'research-documents');
      [['Specifications', entry.specifications], ['Request CoA', entry.coa]].forEach(function (item) {
        if (item[1]) documents.appendChild(entryLink(item[0], item[1], entry));
      });
      if (documents.childElementCount) links.appendChild(documents);
      else links.appendChild(element('p', 'research-unavailable', 'Material documentation is not listed for this entry.'));
    } else {
      links.appendChild(element('p', 'research-reference-note', 'Research reference only — not a catalog item. No material or lot documentation.'));
    }
    article.appendChild(links);
    return article;
  }

  var allCards = [];
  groups.forEach(function (group) {
    var fragment = document.createDocumentFragment();
    group.cards = group.entries.slice().sort(function (a, b) {
      return a.name.localeCompare(b.name, 'en', { numeric: true, sensitivity: 'base' });
    }).map(function (entry) {
      var node = card(entry, group);
      fragment.appendChild(node);
      var text = normalize([entry.name, entry.slug, entry.description, entry.keywords || '', entry.aliases || '', entry.models || '', categoryName(entry.category)].flat().join(' '));
      var item = { node: node, category: entry.category, type: group.key, text: text, compact: text.replace(/ /g, '') };
      allCards.push(item);
      return item;
    });
    group.grid.appendChild(fragment);
  });

  var categoryOptions = [];
  category.replaceChildren();
  [{ key: 'all', name: 'All categories' }].concat(categories.slice().sort(function (a, b) {
    return a.name.localeCompare(b.name);
  })).forEach(function (item) {
    var option = element('option', '', item.name);
    option.value = item.key;
    category.appendChild(option);
    categoryOptions.push({ node: option, key: item.key, label: item.name });
  });
  var typeOptions = Array.from(type.options).map(function (option) {
    return { node: option, key: option.value, label: option.textContent };
  });

  function paint() {
    var terms = normalize(search.value).split(' ').filter(Boolean);
    allCards.forEach(function (item) {
      item.matchesSearch = terms.every(function (term) {
        return item.text.indexOf(term) !== -1 || item.compact.indexOf(term) !== -1;
      });
    });
    var total = 0;
    groups.forEach(function (group) {
      var visible = 0;
      group.cards.forEach(function (item) {
        var match = item.matchesSearch && (category.value === 'all' || item.category === category.value) && (type.value === 'all' || item.type === type.value);
        item.node.hidden = !match;
        if (match) visible++;
      });
      group.section.hidden = visible === 0;
      group.count.textContent = String(visible);
      total += visible;
    });
    // Counts reflect the other filters; zero-result options stay available to keyboard users.
    categoryOptions.forEach(function (option) {
      var matches = allCards.filter(function (item) {
        return item.matchesSearch && (type.value === 'all' || item.type === type.value) && (option.key === 'all' || item.category === option.key);
      }).length;
      option.node.textContent = option.label + ' (' + matches + ')';
    });
    typeOptions.forEach(function (option) {
      var matches = allCards.filter(function (item) {
        return item.matchesSearch && (category.value === 'all' || item.category === category.value) && (option.key === 'all' || item.type === option.key);
      }).length;
      option.node.textContent = option.label + ' (' + matches + ')';
    });
    var context = [];
    if (search.value.trim()) context.push('matching “' + search.value.trim() + '”');
    if (category.value !== 'all') context.push(categoryName(category.value));
    if (type.value !== 'all') context.push(type.value === 'catalog' ? 'catalog materials' : 'research references');
    count.textContent = 'Showing ' + total + ' of ' + allCards.length + ' entries' + (context.length ? ' · ' + context.join(' · ') : '');
    document.getElementById('empty').hidden = total !== 0;
    document.getElementById('empty-description').textContent = type.value === 'reference' && !groups[1].cards.length
      ? 'No research-reference entries are listed yet. Choose catalog materials or reset all filters to browse the library.'
      : 'Try a broader term, choose another category or entry type, or reset all filters.';
  }

  search.addEventListener('input', function (event) { if (!event.isComposing) paint(); });
  search.addEventListener('compositionend', paint);
  category.addEventListener('change', paint);
  type.addEventListener('change', paint);
  document.querySelectorAll('[data-reset-library]').forEach(function (button) {
    button.addEventListener('click', function () {
      category.value = 'all';
      type.value = 'all';
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
