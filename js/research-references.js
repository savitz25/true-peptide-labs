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
  },
  {
    slug: 'n-acetyl-semax', name: 'N-Acetyl Semax', category: 'neural',
    description: 'A coordination study compares N-acetyl Semax with Semax in Cu(II) and Zn(II) binding and in SH-SY5Y neuroblastoma cultures exposed to copper.',
    models: ['Cu(II) and Zn(II) coordination assays', 'SH-SY5Y neuroblastoma cultures'],
    keywords: 'Ac-Semax acetyl semax copper zinc SH-SY5Y', bodyAreas: ['neural'],
    note: '/research/reference-notes.html#n-acetyl-semax',
    limitation: 'This cell-culture and metal-binding study is separate from the Semax basal-forebrain note. It does not establish a human cognitive or neurological outcome.',
    source: { url: 'https://pubmed.ncbi.nlm.nih.gov/27586814/', label: 'Magri et al. (2016), Journal of Inorganic Biochemistry', pmid: '27586814' }
  },
  {
    slug: 'pinealon', name: 'Pinealon', category: 'neural',
    description: 'Cell-culture work on the synthetic tripeptide Pinealon (Glu-Asp-Arg) measures reactive oxygen species and necrotic-cell readouts in cerebellar granule cells, neutrophils, and PC12 cells.',
    models: ['Cerebellar granule cells', 'Neutrophil cultures', 'PC12 cells'],
    keywords: 'EDR Glu-Asp-Arg pinealon ROS PC12', bodyAreas: ['neural'],
    note: '/research/reference-notes.html#pinealon',
    limitation: 'These in vitro oxidative-stress endpoints do not establish a human neurological or aging outcome.',
    source: { url: 'https://pubmed.ncbi.nlm.nih.gov/21978084/', label: 'Khavinson et al. (2011), Rejuvenation Research', pmid: '21978084' }
  },
  {
    slug: 'cortagen', name: 'Cortagen', category: 'neural',
    description: 'In organotypic culture, the tetrapeptide Cortagen (Ala-Glu-Asp-Pro) was tested on rat brain-cortex explants, with explant growth as the recorded endpoint.',
    models: ['Organotypic rat brain-cortex explants'],
    keywords: 'Ala-Glu-Asp-Pro AEDP cortagen organotypic cortex', bodyAreas: ['neural'],
    note: '/research/reference-notes.html#cortagen',
    limitation: 'An explant-growth observation in rat organotypic culture does not establish a human neurological application.',
    source: { url: 'https://pubmed.ncbi.nlm.nih.gov/11713572/', label: 'Khavinson (2001), Bulletin of Experimental Biology and Medicine', pmid: '11713572' }
  },
  {
    slug: 'vesugen', name: 'Vesugen', category: 'neural',
    description: 'Published mouse work administered the tripeptide Vesugen (Lys-Glu-Asp, KED) intraperitoneally to 5xFAD mice and recorded dendritic-spine morphology.',
    models: ['5xFAD mouse dendritic-spine counts', 'In vitro amyloid synaptotoxicity model'],
    keywords: 'KED Lys-Glu-Asp vesugen 5xFAD dendritic spines', bodyAreas: ['neural'],
    note: '/research/reference-notes.html#vesugen',
    limitation: 'A 2025 correction was issued for this paper (PMID 39861198). The mouse experiment does not establish a human neurological outcome, and this note does not describe a vascular use.',
    source: { url: 'https://pubmed.ncbi.nlm.nih.gov/34071923/', label: 'Khavinson et al. (2021), Pharmaceuticals', pmid: '34071923' }
  },
  {
    slug: 'vilon', name: 'Vilon', category: 'immune',
    description: 'Mouse thymocyte experiments examine the dipeptide Vilon (Lys-Glu) using blast transformation and membrane sphingomyelinase activity as readouts.',
    models: ['Mouse thymocyte blast transformation', 'Thymocyte-membrane sphingomyelinase activity'],
    keywords: 'Lys-Glu vilon thymocyte sphingomyelinase', bodyAreas: ['immune'],
    note: '/research/reference-notes.html#vilon',
    limitation: 'These mouse thymocyte assays do not establish an effect on human immune function, lifespan, or tumor biology.',
    source: { url: 'https://pubmed.ncbi.nlm.nih.gov/12420072/', label: 'Khavinson et al. (2002), Bulletin of Experimental Biology and Medicine', pmid: '12420072' }
  },
  {
    slug: 'thymogen', name: 'Thymogen', category: 'immune',
    description: 'A long-term rat study recorded survival and spontaneous tumor counts after repeated subcutaneous administration of the dipeptide Thymogen (L-Glu-L-Trp) to outbred female rats.',
    models: ['Female rat survival counts', 'Spontaneous tumor counts'],
    keywords: 'L-Glu-L-Trp oglufanide thymogen', bodyAreas: ['immune'],
    note: '/research/reference-notes.html#thymogen',
    limitation: 'Survival and tumor-count endpoints in one rat cohort do not establish a human immune, aging, or cancer outcome.',
    source: { url: 'https://pubmed.ncbi.nlm.nih.gov/11707921/', label: 'Anisimov, Khavinson, and Morozov (2000), Biogerontology', pmid: '11707921' }
  },
  {
    slug: 'dihexa', name: 'Dihexa', category: 'neural',
    description: 'An APP/PS1 mouse study of dihexa (N-hexanoic-Tyr-Ile-(6) aminohexanoic amide) recorded Morris water-maze performance, neuronal and synaptic-protein measurements, cytokine levels, and PI3K/AKT pathway readouts.',
    models: ['APP/PS1 mouse water maze', 'Neuronal and SYP protein measurements', 'Cytokine and PI3K/AKT readouts'],
    keywords: 'dihexa angiotensin IV analog APP PS1 water maze', bodyAreas: ['neural'],
    note: '/research/reference-notes.html#dihexa',
    limitation: 'These mouse measurements do not establish a human cognitive outcome. A 2014 mechanism paper (PMID 25187433) was retracted in 2025 and is not used as evidence here.',
    source: { url: 'https://pubmed.ncbi.nlm.nih.gov/34827486/', label: 'Sun et al. (2021), Brain Sciences', pmid: '34827486' }
  },
  {
    slug: 'hexarelin', name: 'Hexarelin', category: 'gh',
    description: 'Rat experiments measure plasma growth-hormone release after Hexarelin, including infant rats, adult rats, and preparations used to compare pituitary and hypothalamic contributions.',
    models: ['Infant and adult rat GH release', 'Mediobasal-hypothalamus ablation comparisons', 'In vitro pituitary GH release'],
    keywords: 'hexarelin GHRP-6 growth hormone secretagogue', bodyAreas: ['gh-axis'],
    note: '/research/reference-notes.html#hexarelin',
    limitation: 'Growth-hormone measurements in rats and pituitary preparations do not establish a human diagnostic or therapeutic use.',
    source: { url: 'https://pubmed.ncbi.nlm.nih.gov/8921832/', label: 'Torsello et al. (1996), European Journal of Endocrinology', pmid: '8921832' }
  },
  {
    slug: 'ss-31', name: 'SS-31', category: 'metabolic',
    description: 'Isolated-mitochondria experiments with elamipretide (SS-31) measure ADP sensitivity in aged skeletal-muscle mitochondria and uptake through the adenine nucleotide translocator.',
    models: ['Aged skeletal-muscle mitochondria', 'Adenine nucleotide translocator ADP uptake'],
    keywords: 'elamipretide SS-31 mitochondria ANT ADP', bodyAreas: ['metabolic'],
    note: '/research/reference-notes.html#ss-31',
    limitation: 'Mitochondrial measurements in aged muscle, and the related animal physiological readouts in the same study, do not establish a human metabolic or cardiac application.',
    source: { url: 'https://pubmed.ncbi.nlm.nih.gov/37462785/', label: 'Pharaoh et al. (2023), GeroScience', pmid: '37462785' }
  },
  {
    slug: 'foxo4-dri', name: 'FOXO4-DRI', category: 'cellular',
    description: 'Cell and mouse studies of a FOXO4-derived peptide record senescent-cell viability, p53 localization, and responses in doxorubicin-treated, fast-aging, and naturally aged mice.',
    models: ['Senescent-cell viability assays', 'Doxorubicin-treated mice', 'Fast-aging and naturally aged mice'],
    keywords: 'FOXO4 DRI p53 senescence', bodyAreas: [],
    note: '/research/reference-notes.html#foxo4-dri',
    limitation: 'Cell and mouse results are not a human anti-aging application. This entry is not assigned to a Body Explorer area.',
    source: { url: 'https://pubmed.ncbi.nlm.nih.gov/28340339/', label: 'Baar et al. (2017), Cell', pmid: '28340339' }
  }
];
