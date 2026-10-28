/* C3/B2: Regenerate static research-reference notes from shared references.
 * Writes one short page per reference plus the combined notes index.
 * Do not invent studies. studied text must restate the cited papers.
 */
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const context = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'js/research-references.js'), 'utf8'), context);
const entries = context.window.VV_RESEARCH_REFERENCES;
const escape = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
const areaNames = { neural: 'Neural signaling models', immune: 'Immune signaling models', 'skin-ecm': 'Skin & ECM models', 'gut-barrier': 'Gut & barrier models', metabolic: 'Metabolic pathway models', 'gh-axis': 'Growth-hormone axis models', connective: 'Connective tissue models' };
const allowedPmids = new Set(['26924987', '16635254', '12937682', '18061177', '25738459', '19386761', '14982877', '12603850', '27586814', '21978084', '11713572', '34071923', '39861198', '12420072', '11707921', '34827486', '8921832', '37462785', '28340339', '25187433', '265572', '10604470', '6714155', '9491897', '1313797', '12167864', '11146367', '18199809', '25130664', '12533768']);

function sourcesOf(entry) {
  return [entry.source].concat(entry.also || []);
}

function noteBody(entry, links) {
  const section = links.section || 'h3';
  const cites = sourcesOf(entry).map(source => `<li><a href="${escape(source.url)}">${escape(source.label)} · PMID ${escape(source.pmid)}</a></li>`).join('');
  const areas = entry.bodyAreas.length
    ? `<p>Model areas in the Body Explorer: ${entry.bodyAreas.map(area => `<a href="${escape(links.explorer)}#${escape(area)}">${escape(areaNames[area] || area)}</a>`).join(' · ')}.</p>`
    : '';
  return `      <p class="research-reference-label">Research reference only — not a catalog item</p>
      <${links.heading} id="${escape(links.headingId)}">${escape(entry.name)}</${links.heading}>
      <${section}>Research context</${section}>
      <p>${escape(entry.description)}</p>
      <${section}>What has been studied</${section}>
      <ul class="evidence-types">${entry.evidence.map(label => `<li>${escape(label)}</li>`).join('')}</ul>
      ${entry.studied.map(paragraph => `<p>${escape(paragraph)}</p>`).join('\n      ')}
      <p class="studied-note">These labels restate the setting of the cited paper. They are not new findings and do not describe a catalog material.</p>
      <${section}>Research model areas</${section}>
      <ul>${entry.models.map(model => `<li>${escape(model)}</li>`).join('')}</ul>
      <${section}>Selected published literature</${section}>
      <ul class="reference-cites">${cites}</ul>
      <${section}>What remains uncertain</${section}>
      <div class="uncertain-block">
        <p class="limitation-kicker">Limitations</p>
        <p>${escape(entry.limitation)}</p>
      </div>
${areas ? `      ${areas}\n` : ''}      <p class="reference-note-links"><a href="${escape(links.library)}">Research Peptide Library</a><a href="${escape(links.explorer)}">Body Explorer</a><a href="${escape(links.notes)}">${escape(links.notesLabel)}</a></p>`;
}

entries.forEach(entry => {
  if (!entry.studied || !entry.studied.length || !entry.evidence || !entry.evidence.length) {
    throw new Error('Missing studied text or evidence labels for ' + entry.slug);
  }
  if (entry.note !== '/research/notes/' + entry.slug + '.html') {
    throw new Error('Note URL must be the standalone page for ' + entry.slug);
  }
  sourcesOf(entry).forEach(source => {
    if (!allowedPmids.has(String(source.pmid))) throw new Error('Unexpected PMID ' + source.pmid + ' on ' + entry.slug);
  });
  if (entry.slug === 'dihexa' && /25187433/.test(entry.studied.join(' '))) {
    throw new Error('Dihexa studied text must not cite the retracted paper');
  }
});

const indexNotes = entries.map(entry => `
    <article id="${escape(entry.slug)}" class="reference-note" aria-labelledby="note-${escape(entry.slug)}">
${noteBody(entry, {
  heading: 'h2',
  headingId: 'note-' + entry.slug,
  library: '../peptides/index.html',
  explorer: '../body-explorer.html',
  notes: 'notes/' + entry.slug + '.html',
  notesLabel: 'Open this note',
  section: 'h3'
})}
    </article>`).join('\n');

const schema = {
  '@context': 'https://schema.org', '@type': 'CollectionPage',
  name: 'Research-reference peptide notes', url: 'https://vialvibes.com/research/reference-notes.html',
  description: 'Literature-framed laboratory research notes. Research reference only; not catalog items. Research Use Only.',
  hasPart: entries.map(entry => ({ '@type': 'CreativeWork', name: entry.name + ' research note', url: 'https://vialvibes.com' + entry.note, citation: entry.source.url }))
};

function pageShell(options) {
  const up = options.depth === 1 ? '..' : '../..';
  const research = options.depth === 1 ? '' : '..';
  const researchHref = research ? research + '/index.html' : 'index.html';
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escape(options.title)}</title>
  <meta name="description" content="${escape(options.description)}">
  <meta name="theme-color" content="#0F0C29">
  <link rel="canonical" href="${escape(options.canonical)}">
  <meta property="og:title" content="${escape(options.title)}">
  <meta property="og:description" content="${escape(options.ogDescription)}">
  <meta property="og:url" content="${escape(options.canonical)}">
  <meta property="og:type" content="website">
  <meta property="og:image" content="https://vialvibes.com/images/og-vial-vibes-share.jpg">
  <link rel="icon" type="image/svg+xml" href="${up}/assets/logo-vialvibes-mark.svg">
  <link rel="stylesheet" href="${up}/css/site.css">
  <link rel="stylesheet" href="${up}/css/research-library.css">
  ${options.schema ? '<script type="application/ld+json">' + options.schema + '</script>' : ''}
</head>
<body class="research-library">
  <a class="library-skip" href="#${escape(options.mainId)}">Skip to research notes</a>
  <nav class="vv-nav library-nav" aria-label="Main navigation">
    <div class="library-shell library-nav-inner">
      <a href="${up}/index.html" aria-label="Vial Vibes home"><img src="${up}/assets/logo-vialvibes.svg" alt="Vial Vibes" class="library-logo" width="176" height="48"></a>
      <div class="library-nav-links">
        <a href="${up}/peptides/index.html" class="nav-link">Peptide Library</a>
        <a href="${researchHref}" class="nav-link">Research Hub</a>
        <a href="${up}/body-explorer.html" class="nav-link">Body Explorer</a>
        <a href="${up}/contact.html" class="nav-link">Contact</a>
      </div>
      <details class="library-mobile-nav">
        <summary>Menu</summary>
        <div class="library-mobile-links">
          <a href="${up}/peptides/index.html">Peptide Library</a>
          <a href="${researchHref}">Research Hub</a>
          <a href="${up}/body-explorer.html">Body Explorer</a>
          <a href="${up}/contact.html">Contact</a>
        </div>
      </details>
    </div>
  </nav>
  <div class="library-notice"><strong>Research Use Only.</strong> Not for human consumption, clinical use, or veterinary administration.</div>
  <main id="${escape(options.mainId)}" class="library-shell" tabindex="-1">
${options.main}
  </main>
  <footer>
    <div class="library-shell library-footer-inner">
      <p>Vial Vibes · Operated by APEX Research, LLC.</p>
      <div class="library-footer-links"><a href="mailto:hello@asktrusthub.com">hello@asktrusthub.com</a><a href="${up}/research-use-only.html">Research Use Only policy</a></div>
    </div>
  </footer>
  <script src="${up}/js/pwa-register.js" defer></script>
</body>
</html>
`;
}

const indexHtml = pageShell({
  depth: 1,
  title: 'Research-reference Peptide Notes | Vial Vibes',
  description: entries.length + ' literature-framed peptide research notes with model areas and published sources. Research reference only, not catalog items. Research Use Only.',
  ogDescription: 'Literature references and experimental model context. Research reference only — not catalog items.',
  canonical: 'https://vialvibes.com/research/reference-notes.html',
  mainId: 'reference-main',
  schema: JSON.stringify(schema, null, 2),
  main: `    <header class="library-hero">
      <div class="library-breadcrumb"><a href="../peptides/index.html">Peptide Library</a><span aria-hidden="true">/</span><span>Reference notes</span></div>
      <div class="library-eyebrow">Published literature / Model context</div>
      <h1>Research-reference<br><span>peptide notes</span></h1>
      <p class="library-intro">These entries summarize selected experimental literature for qualified researchers. Every compound below is a research reference only — not a catalog item. Inclusion does not indicate availability or establish human safety, efficacy, or a recommended application. These brief notes are not systematic reviews. Each name also opens its own note page.</p>
    </header>
    <section id="notes-index" aria-labelledby="notes-heading">
      <h2 id="notes-heading">Reference list</h2>
      <ul class="reference-note-index">${entries.map(entry => `<li><a href="notes/${escape(entry.slug)}.html">${escape(entry.name)}</a></li>`).join('')}</ul>
    </section>
${indexNotes}`
});
fs.writeFileSync(path.join(root, 'research/reference-notes.html'), indexHtml);

const notesDir = path.join(root, 'research', 'notes');
fs.mkdirSync(notesDir, { recursive: true });
const keep = new Set();
entries.forEach(entry => {
  const fileName = entry.slug + '.html';
  keep.add(fileName);
  const pageSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'ScholarlyArticle',
    name: entry.name + ' research note',
    url: 'https://vialvibes.com' + entry.note,
    description: entry.description,
    citation: entry.source.url,
    isPartOf: 'https://vialvibes.com/research/reference-notes.html'
  }, null, 2);
  const html = pageShell({
    depth: 2,
    title: entry.name + ' research note | Vial Vibes',
    description: entry.description + ' Research reference only — not a catalog item. Research Use Only.',
    ogDescription: 'Research reference only — not a catalog item. Literature framing for qualified researchers.',
    canonical: 'https://vialvibes.com' + entry.note,
    mainId: 'note-main',
    schema: pageSchema,
    main: `    <header class="library-hero">
      <div class="library-breadcrumb"><a href="../../peptides/index.html">Peptide Library</a><span aria-hidden="true">/</span><a href="../reference-notes.html">Reference notes</a><span aria-hidden="true">/</span><span>${escape(entry.name)}</span></div>
      <div class="library-eyebrow">Published literature / Model context</div>
    </header>
    <article id="${escape(entry.slug)}" class="reference-note" aria-labelledby="note-${escape(entry.slug)}">
${noteBody(entry, {
  heading: 'h1',
  headingId: 'note-' + entry.slug,
  library: '../../peptides/index.html',
  explorer: '../../body-explorer.html',
  notes: '../reference-notes.html#' + entry.slug,
  notesLabel: 'All reference notes',
  section: 'h2'
})}
    </article>`
  });
  fs.writeFileSync(path.join(notesDir, fileName), html);
});
fs.readdirSync(notesDir).forEach(file => {
  if (file.endsWith('.html') && !keep.has(file)) fs.unlinkSync(path.join(notesDir, file));
});

const sitemapPath = path.join(root, 'sitemap.xml');
let sitemap = fs.readFileSync(sitemapPath, 'utf8');
const nl = sitemap.includes('\r\n') ? '\r\n' : '\n';
const sitemapBlock = ['  <!-- B2: reference note pages -->']
  .concat(entries.map(entry => `  <url><loc>https://vialvibes.com${entry.note}</loc><changefreq>monthly</changefreq><priority>0.6</priority></url>`))
  .concat(['  <!-- B2: end reference note pages -->'])
  .join(nl);
if (sitemap.includes('<!-- B2: reference note pages -->')) {
  sitemap = sitemap.replace(/[ \t]*<!-- B2: reference note pages -->[\s\S]*?<!-- B2: end reference note pages -->/, sitemapBlock);
} else {
  const anchor = '  <url><loc>https://vialvibes.com/research/reference-notes.html</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>';
  if (!sitemap.includes(anchor)) throw new Error('Sitemap anchor for reference notes was not found');
  sitemap = sitemap.replace(anchor, anchor + nl + sitemapBlock);
}
fs.writeFileSync(sitemapPath, sitemap);

vm.runInNewContext(fs.readFileSync(path.join(root, 'js/products.js'), 'utf8'), context);
const indexPath = path.join(root, 'peptides/index.html');
let index = fs.readFileSync(indexPath, 'utf8');
index = index.replace(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g, (block, json) => {
  const schema = JSON.parse(json);
  if (schema['@type'] !== 'ItemList') return block;
  const items = context.window.TPL_PRODUCTS.map(entry => ({ name: entry.name, url: 'https://vialvibes.com/peptides/' + entry.slug + '.html' }))
    .concat(entries.map(entry => ({ name: entry.name + ' (research reference only — not a catalog item)', url: 'https://vialvibes.com' + entry.note })));
  schema.numberOfItems = items.length;
  schema.itemListElement = items.map((entry, position) => Object.assign({ '@type': 'ListItem', position: position + 1 }, entry));
  return '<script type="application/ld+json">\n' + JSON.stringify(schema, null, 2) + '\n  </script>';
});
index = index.replace(/<!-- C3: reference fallback -->[\s\S]*?<!-- C3: end reference fallback -->/, `<!-- C3: reference fallback -->
      <h3>Research references only — not catalog items</h3>
      <ul>${entries.map(entry => `<li><a href="${escape(entry.note)}">${escape(entry.name)} research note</a></li>`).join('')}</ul>
      <!-- C3: end reference fallback -->`);
fs.writeFileSync(indexPath, index);
console.log('B2: Generated ' + entries.length + ' research-reference note pages.');
