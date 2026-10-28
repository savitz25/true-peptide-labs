/* C3: Literature references shared by the library and Body Explorer.
 * These entries are deliberately independent of TPL_PRODUCTS.
 * note URLs are site-root-relative; bodyAreas identify research models, not uses.
 */
window.VV_RESEARCH_REFERENCES = [
  {
    slug: 'selank', name: 'Selank', category: 'neural',
    description: 'Published rat frontal-cortex research examines Selank alongside GABA using neurotransmission-related gene-expression measurements.',
    models: ['Rat frontal cortex', 'GABA-related gene expression'],
    keywords: 'neurobiology neural neurotransmission', bodyAreas: ['neural'],
    note: '/research/reference-notes.html#selank',
    limitation: 'The cited experiment measures molecular endpoints in rats. It does not establish effects on human cognition, mood, or clinical outcomes.',
    source: { url: 'https://pubmed.ncbi.nlm.nih.gov/26924987/', label: 'Volkova et al. (2016), Frontiers in Pharmacology', pmid: '26924987' }
  },
  {
    slug: 'semax', name: 'Semax', category: 'neural',
    description: 'A rat basal-forebrain study examines Semax binding and brain-derived neurotrophic factor (BDNF) protein measurements in experimental neurobiology.',
    models: ['Rat basal forebrain', 'BDNF and peptide-binding assays'],
    keywords: 'neurobiology neural ACTH analog', bodyAreas: ['neural'],
    note: '/research/reference-notes.html#semax',
    limitation: 'Regional binding and protein measurements in a rodent model do not establish a human cognitive or neurological benefit.',
    source: { url: 'https://pubmed.ncbi.nlm.nih.gov/16635254/', label: 'Dolotov et al. (2006), Journal of Neurochemistry', pmid: '16635254' }
  },
  {
    slug: 'epitalon', name: 'Epitalon', category: 'cellular',
    description: 'Published under the spelling Epithalon, this peptide appears in human fetal fibroblast culture research measuring telomerase activity and telomere length.',
    models: ['Human fetal fibroblast cultures', 'Telomere and telomerase assays'],
    keywords: 'epithalon cell biology cellular senescence', bodyAreas: [],
    note: '/research/reference-notes.html#epitalon',
    limitation: 'This is an in vitro cell-culture reference, not evidence for human longevity. It is not assigned to an anatomical Body Explorer area.',
    source: { url: 'https://pubmed.ncbi.nlm.nih.gov/12937682/', label: 'Khavinson et al. (2003), Bulletin of Experimental Biology and Medicine', pmid: '12937682' }
  },
  {
    slug: 'kpv', name: 'KPV', category: 'barrier',
    description: 'The Lys-Pro-Val tripeptide is examined in intestinal epithelial and immune-cell experiments, including PepT1 transport and inflammatory-signaling readouts, with accompanying mouse models.',
    models: ['Intestinal epithelial cell lines', 'Jurkat T cells', 'Mouse intestinal inflammation models'],
    keywords: 'gut barrier PepT1 NF-kappaB lys pro val', bodyAreas: ['gut-barrier', 'immune'],
    note: '/research/reference-notes.html#kpv',
    limitation: 'The cited cell-line and mouse experiments support a model-system research context only; they do not establish a human gastrointestinal application.',
    source: { url: 'https://pubmed.ncbi.nlm.nih.gov/18061177/', label: 'Dalmasso et al. (2008), Gastroenterology', pmid: '18061177' }
  },
  {
    slug: 'mots-c', name: 'MOTS-c', category: 'metabolic',
    description: 'Mitochondrial-derived peptide literature examines MOTS-c in cellular metabolic assays and mouse studies of skeletal-muscle signaling and metabolic regulation.',
    models: ['Cellular metabolic assays', 'Mouse skeletal-muscle and metabolic models'],
    keywords: 'mitochondria AMPK folate metabolism', bodyAreas: ['metabolic'],
    note: '/research/reference-notes.html#mots-c',
    limitation: 'Cellular and mouse metabolic findings do not establish human metabolic, exercise, or body-composition outcomes.',
    source: { url: 'https://pubmed.ncbi.nlm.nih.gov/25738459/', label: 'Lee et al. (2015), Cell Metabolism', pmid: '25738459' }
  },
  {
    slug: 'humanin', name: 'Humanin', category: 'neural',
    description: 'Cell-based Humanin studies examine cytokine-receptor interactions and neuronal cell-death readouts, including CNTFR, WSX-1, and gp130 signaling components.',
    models: ['Neuronal cell models', 'Reconstituted receptor-binding assays'],
    keywords: 'neurobiology neural cytokine receptor', bodyAreas: ['neural'],
    note: '/research/reference-notes.html#humanin',
    limitation: 'Receptor and cell-survival assays are experimental endpoints. They do not establish prevention or treatment of neurological disease.',
    source: { url: 'https://pubmed.ncbi.nlm.nih.gov/19386761/', label: 'Hashimoto et al. (2009), Molecular Biology of the Cell', pmid: '19386761' }
  },
  {
    slug: 'thymosin-alpha-1', name: 'Thymosin alpha-1', category: 'immune',
    description: 'Published experimental work examines thymosin alpha-1 in dendritic-cell maturation, Toll-like receptor signaling, and mouse host-response models.',
    models: ['Dendritic-cell assays', 'Mouse host-response models'],
    keywords: 'T alpha 1 Tα1 thymosin alpha 1 innate immunity TLR', bodyAreas: ['immune'],
    note: '/research/reference-notes.html#thymosin-alpha-1',
    limitation: 'This note is limited to the cited immune-cell and mouse experiments. It is not a recommendation to modify immune function in humans.',
    source: { url: 'https://pubmed.ncbi.nlm.nih.gov/14982877/', label: 'Romani et al. (2004), Blood', pmid: '14982877' }
  },
  {
    slug: 'll-37', name: 'LL-37', category: 'cosmetic',
    description: 'Cathelicidin literature examines LL-37-related epithelial biology using organ-cultured human skin and measurements of re-epithelialization.',
    models: ['Ex vivo human skin cultures', 'Epithelial and innate-defense biology'],
    keywords: 'cathelicidin hCAP18 LL37 skin barrier', bodyAreas: ['skin-ecm'],
    note: '/research/reference-notes.html#ll-37',
    limitation: 'An ex vivo skin model is not a clinical efficacy or safety study. This reference does not establish a topical or other human-use application.',
    source: { url: 'https://pubmed.ncbi.nlm.nih.gov/12603850/', label: 'Heilborn et al. (2003), Journal of Investigative Dermatology', pmid: '12603850' }
  }
];
