/* C3: Regenerate the static, no-JavaScript research notes from shared references. */
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const context = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'js/research-references.js'), 'utf8'), context);
const entries = context.window.VV_RESEARCH_REFERENCES;
const escape = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
const areaNames = { neural: 'Neural signaling models', immune: 'Immune signaling models', 'skin-ecm': 'Skin & ECM models', 'gut-barrier': 'Gut & barrier models', metabolic: 'Metabolic pathway models', 'gh-axis': 'Growth-hormone axis models', connective: 'Connective tissue models' };
const notes = entries.map(entry => `
    <article id="${escape(entry.slug)}" class="reference-note" aria-labelledby="note-${escape(entry.slug)}">
      <p class="research-reference-label">Research reference only — not a catalog item</p>
      <h2 id="note-${escape(entry.slug)}">${escape(entry.name)}</h2>
      <p>${escape(entry.description)}</p>
      <h3>Research model areas</h3>
      <ul>${entry.models.map(model => `<li>${escape(model)}</li>`).join('')}</ul>
      <h3>Selected published literature</h3>
      <p><a href="${escape(entry.source.url)}">${escape(entry.source.label)} · PMID ${escape(entry.source.pmid)}</a></p>
      <h3>Scope of this note</h3>
      <p>${escape(entry.limitation)}</p>
${entry.bodyAreas.length ? `      <p>Explore model context: ${entry.bodyAreas.map(area => `<a href="../body-explorer.html#${escape(area)}">${escape(areaNames[area])}</a>`).join(' · ')}.</p>\n` : ''}      <p><a href="#notes-index">Back to reference list</a> · <a href="../peptides/index.html">Research Peptide Library</a></p>
    </article>`).join('\n');
const schema = {
  '@context': 'https://schema.org', '@type': 'CollectionPage',
  name: 'Research-reference peptide notes', url: 'https://vialvibes.com/research/reference-notes.html',
  description: 'Literature-framed laboratory research notes. Research reference only; not catalog items. Research Use Only.',
  hasPart: entries.map(entry => ({ '@type': 'CreativeWork', name: entry.name + ' research note', url: 'https://vialvibes.com' + entry.note, citation: entry.source.url }))
};
const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Research-reference Peptide Notes | Vial Vibes</title>
  <meta name="description" content="${entries.length} literature-framed peptide research notes with model areas and published sources. Research reference only, not catalog items. Research Use Only.">
  <meta name="theme-color" content="#0F0C29">
  <link rel="canonical" href="https://vialvibes.com/research/reference-notes.html">
  <meta property="og:title" content="Research-reference Peptide Notes | Vial Vibes">
  <meta property="og:description" content="Literature references and experimental model context. Research reference only — not catalog items.">
  <meta property="og:url" content="https://vialvibes.com/research/reference-notes.html">
  <meta property="og:type" content="website">
  <meta property="og:image" content="https://vialvibes.com/images/og-vial-vibes-share.jpg">
  <link rel="icon" type="image/svg+xml" href="../assets/logo-vialvibes-mark.svg">
  <link rel="stylesheet" href="../css/site.css">
  <link rel="stylesheet" href="../css/research-library.css">
  <script type="application/ld+json">${JSON.stringify(schema, null, 2)}</script>
</head>
<body class="research-library">
  <a class="library-skip" href="#reference-main">Skip to research notes</a>
  <nav class="vv-nav library-nav" aria-label="Main navigation">
    <div class="library-shell library-nav-inner">
      <a href="../index.html" aria-label="Vial Vibes home"><img src="../assets/logo-vialvibes.svg" alt="Vial Vibes" class="library-logo" width="176" height="48"></a>
      <div class="library-nav-links">
        <a href="../peptides/index.html" class="nav-link">Peptide Library</a>
        <a href="index.html" class="nav-link">Research Hub</a>
        <a href="../body-explorer.html" class="nav-link">Body Explorer</a>
        <a href="../contact.html" class="nav-link">Contact</a>
      </div>
      <details class="library-mobile-nav">
        <summary>Menu</summary>
        <div class="library-mobile-links">
          <a href="../peptides/index.html">Peptide Library</a>
          <a href="index.html">Research Hub</a>
          <a href="../body-explorer.html">Body Explorer</a>
          <a href="../contact.html">Contact</a>
        </div>
      </details>
    </div>
  </nav>
  <div class="library-notice"><strong>Research Use Only.</strong> Not for human consumption, clinical use, or veterinary administration.</div>
  <main id="reference-main" class="library-shell" tabindex="-1">
    <header class="library-hero">
      <div class="library-breadcrumb"><a href="../peptides/index.html">Peptide Library</a><span aria-hidden="true">/</span><span>Reference notes</span></div>
      <div class="library-eyebrow">Published literature / Model context</div>
      <h1>Research-reference<br><span>peptide notes</span></h1>
      <p class="library-intro">These entries summarize selected experimental literature for qualified researchers. Every compound below is a research reference only — not a catalog item. Inclusion does not indicate availability or establish human safety, efficacy, or a recommended application. These brief notes are not systematic reviews.</p>
    </header>
    <section id="notes-index" aria-labelledby="notes-heading">
      <h2 id="notes-heading">Reference list</h2>
      <ul class="reference-note-index">${entries.map(entry => `<li><a href="#${escape(entry.slug)}">${escape(entry.name)}</a></li>`).join('')}</ul>
    </section>
${notes}
  </main>
  <footer>
    <div class="library-shell library-footer-inner">
      <p>Vial Vibes · Operated by APEX Research, LLC.</p>
      <div class="library-footer-links"><a href="mailto:hello@asktrusthub.com">hello@asktrusthub.com</a><a href="../research-use-only.html">Research Use Only policy</a></div>
    </div>
  </footer>
  <script src="../js/pwa-register.js" defer></script>
</body>
</html>
`;
fs.writeFileSync(path.join(root, 'research/reference-notes.html'), html);
// Keep the index's static discovery metadata and no-JavaScript reference links in sync.
vm.runInNewContext(fs.readFileSync(path.join(root, 'js/products.js'), 'utf8'), context);
const indexPath = path.join(root, 'peptides/index.html');
let index = fs.readFileSync(indexPath, 'utf8');
index = index.replace(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g, (block, json) => {
  const schema = JSON.parse(json);
  if (schema['@type'] !== 'ItemList') return block;
  const items = context.window.TPL_PRODUCTS.map(entry => ({ name: entry.name, url: 'https://vialvibes.com/peptides/' + entry.slug + '.html' }))
    .concat(entries.map(entry => ({ name: entry.name + ' (research reference only — not a catalog item)', url: 'https://vialvibes.com' + entry.note })));
  schema.numberOfItems = items.length;
  schema.itemListElement = items.map((entry, index) => Object.assign({ '@type': 'ListItem', position: index + 1 }, entry));
  return '<script type="application/ld+json">\n' + JSON.stringify(schema, null, 2) + '\n  </script>';
});
index = index.replace(/<!-- C3: reference fallback -->[\s\S]*?<!-- C3: end reference fallback -->/, `<!-- C3: reference fallback -->
      <h3>Research references only — not catalog items</h3>
      <ul>${entries.map(entry => `<li><a href="${escape(entry.note)}">${escape(entry.name)} research note</a></li>`).join('')}</ul>
      <!-- C3: end reference fallback -->`);
fs.writeFileSync(indexPath, index);
console.log('C3: Generated ' + entries.length + ' static research-reference notes.');
