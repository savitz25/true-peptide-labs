/* C3: Literature references shared by the library and Body Explorer.
 * B2: studied text restates the cited paper's setting. Do not add studies.
 * These entries are deliberately independent of TPL_PRODUCTS.
 * note URLs are site-root-relative; bodyAreas identify research models, not uses.
 */
window.VV_RESEARCH_REFERENCES = [
  {
    slug: 'selank', name: 'Selank', category: 'neural',
    description: 'Published rat frontal-cortex research examines Selank alongside GABA using neurotransmission-related gene-expression measurements.',
    studied: [
      'Volkova et al. (2016) measured expression of neurotransmission-related genes in rat frontal cortex by real-time PCR at 1 hour and 3 hours after Selank or GABA administration. The cited work is a rat molecular study.'
    ],
    evidence: ['Rat model', 'Gene-expression assay'],
    models: ['Rat frontal cortex', 'GABA-related gene expression'],
    keywords: 'neurobiology neural neurotransmission', bodyAreas: ['neural'],
    note: '/research/notes/selank.html',
    limitation: 'The cited experiment measures molecular endpoints in rats. It does not establish effects on human cognition, mood, or clinical outcomes.',
    source: { url: 'https://pubmed.ncbi.nlm.nih.gov/26924987/', label: 'Volkova et al. (2016), Frontiers in Pharmacology', pmid: '26924987' }
  },
  {
    slug: 'semax', name: 'Semax', category: 'neural',
    description: 'A rat basal-forebrain study examines Semax binding and brain-derived neurotrophic factor (BDNF) protein measurements in experimental neurobiology.',
    studied: [
      'Dolotov et al. (2006) measured specific Semax binding on membranes from rat basal forebrain and BDNF protein in that region after intranasal application. The cited work is a rodent binding and protein study.'
    ],
    evidence: ['Rat model', 'Binding and protein assays'],
    models: ['Rat basal forebrain', 'BDNF and peptide-binding assays'],
    keywords: 'neurobiology neural ACTH analog', bodyAreas: ['neural'],
    note: '/research/notes/semax.html',
    limitation: 'Regional binding and protein measurements in a rodent model do not establish a human cognitive or neurological benefit.',
    source: { url: 'https://pubmed.ncbi.nlm.nih.gov/16635254/', label: 'Dolotov et al. (2006), Journal of Neurochemistry', pmid: '16635254' }
  },
  {
    slug: 'epitalon', name: 'Epitalon', category: 'cellular',
    description: 'Published under the spelling Epithalon, this peptide appears in human fetal fibroblast culture research measuring telomerase activity and telomere length.',
    studied: [
      'Khavinson et al. (2003), using the spelling Epithalon, added the peptide to telomerase-negative human fetal fibroblast cultures and recorded catalytic-subunit expression, telomerase activity, and telomere length. The cited work is an in vitro cell-culture study.'
    ],
    evidence: ['Human cell culture'],
    models: ['Human fetal fibroblast cultures', 'Telomere and telomerase assays'],
    keywords: 'epithalon cell biology cellular senescence', bodyAreas: [],
    note: '/research/notes/epitalon.html',
    limitation: 'This is an in vitro cell-culture reference, not evidence for human longevity. It is not assigned to an anatomical Body Explorer area.',
    source: { url: 'https://pubmed.ncbi.nlm.nih.gov/12937682/', label: 'Khavinson et al. (2003), Bulletin of Experimental Biology and Medicine', pmid: '12937682' }
  },
  {
    slug: 'kpv', name: 'KPV', category: 'barrier',
    description: 'The Lys-Pro-Val tripeptide is examined in intestinal epithelial and immune-cell experiments, including PepT1 transport and inflammatory-signaling readouts, with accompanying mouse models.',
    studied: [
      'Dalmasso et al. (2008) examined Lys-Pro-Val in Caco2-BBE and HT29-Cl.19A intestinal epithelial cells and in Jurkat T cells, including PepT1 uptake and NF-kappaB and cytokine readouts. The same paper recorded histologic and cytokine mRNA measurements in DSS- and TNBS-induced mouse colitis models.'
    ],
    evidence: ['Human cell lines', 'Mouse models'],
    models: ['Intestinal epithelial cell lines', 'Jurkat T cells', 'Mouse intestinal inflammation models'],
    keywords: 'gut barrier PepT1 NF-kappaB lys pro val', bodyAreas: ['gut-barrier', 'immune'],
    note: '/research/notes/kpv.html',
    limitation: 'The cited cell-line and mouse experiments support a model-system research context only; they do not establish a human gastrointestinal application.',
    source: { url: 'https://pubmed.ncbi.nlm.nih.gov/18061177/', label: 'Dalmasso et al. (2008), Gastroenterology', pmid: '18061177' }
  },
  {
    slug: 'mots-c', name: 'MOTS-c', category: 'metabolic',
    description: 'Mitochondrial-derived peptide literature examines MOTS-c in cellular metabolic assays and mouse studies of skeletal-muscle signaling and metabolic regulation.',
    studied: [
      'Lee et al. (2015) describe MOTS-c as a peptide encoded by a short open reading frame in mitochondrial 12S rRNA. The paper reports cellular assays of folate-cycle and AMPK-related metabolic signaling and mouse experiments that recorded insulin-sensitivity and body-composition measures, with skeletal muscle discussed as a main tissue context.'
    ],
    evidence: ['Cell assays', 'Mouse models'],
    models: ['Cellular metabolic assays', 'Mouse skeletal-muscle and metabolic models'],
    keywords: 'mitochondria AMPK folate metabolism', bodyAreas: ['metabolic'],
    note: '/research/notes/mots-c.html',
    limitation: 'Cellular and mouse metabolic findings do not establish human metabolic, exercise, or body-composition outcomes.',
    source: { url: 'https://pubmed.ncbi.nlm.nih.gov/25738459/', label: 'Lee et al. (2015), Cell Metabolism', pmid: '25738459' }
  },
  {
    slug: 'humanin', name: 'Humanin', category: 'neural',
    description: 'Cell-based Humanin studies examine cytokine-receptor interactions and neuronal cell-death readouts, including CNTFR, WSX-1, and gp130 signaling components.',
    studied: [
      'Hashimoto et al. (2009) used neuronal cells and reconstituted binding assays to examine Humanin interactions with a cytokine-receptor complex involving CNTFR, WSX-1, and gp130. The recorded endpoints were peptide binding and cell-death readouts in those experimental systems.'
    ],
    evidence: ['Neuronal cell models', 'Receptor-binding assays'],
    models: ['Neuronal cell models', 'Reconstituted receptor-binding assays'],
    keywords: 'neurobiology neural cytokine receptor', bodyAreas: ['neural'],
    note: '/research/notes/humanin.html',
    limitation: 'Receptor and cell-survival assays are experimental endpoints. They do not establish prevention or treatment of neurological disease.',
    source: { url: 'https://pubmed.ncbi.nlm.nih.gov/19386761/', label: 'Hashimoto et al. (2009), Molecular Biology of the Cell', pmid: '19386761' }
  },
  {
    slug: 'thymosin-alpha-1', name: 'Thymosin alpha-1', category: 'immune',
    description: 'Published experimental work examines thymosin alpha-1 in dendritic-cell maturation, Toll-like receptor signaling, and mouse host-response models.',
    studied: [
      'Romani et al. (2004) measured dendritic-cell maturation and interleukin-12 production after Aspergillus exposure, and traced signaling through Toll-like receptors. The same paper recorded host-response measures in mice that had received hematopoietic transplants and a fungal challenge.'
    ],
    evidence: ['Dendritic-cell assays', 'Mouse host-response model'],
    models: ['Dendritic-cell assays', 'Mouse host-response models'],
    keywords: 'T alpha 1 Tα1 thymosin alpha 1 innate immunity TLR', bodyAreas: ['immune'],
    note: '/research/notes/thymosin-alpha-1.html',
    limitation: 'This note is limited to the cited immune-cell and mouse experiments. It is not a recommendation to modify immune function in humans.',
    source: { url: 'https://pubmed.ncbi.nlm.nih.gov/14982877/', label: 'Romani et al. (2004), Blood', pmid: '14982877' }
  },
  {
    slug: 'll-37', name: 'LL-37', category: 'cosmetic',
    description: 'Cathelicidin literature examines LL-37-related epithelial biology using organ-cultured human skin and measurements of re-epithelialization.',
    studied: [
      'Heilborn et al. (2003) measured hCAP18/LL-37 in wounded human skin and in chronic-ulcer epithelium, and used organ-cultured human skin as an ex vivo model. In that culture, antibodies directed at LL-37 were applied and re-epithelialization was recorded.'
    ],
    evidence: ['Human skin measurements', 'Ex vivo organ culture'],
    models: ['Ex vivo human skin cultures', 'Epithelial and innate-defense biology'],
    keywords: 'cathelicidin hCAP18 LL37 skin barrier', bodyAreas: ['skin-ecm'],
    note: '/research/notes/ll-37.html',
    limitation: 'An ex vivo skin model is not a clinical efficacy or safety study. This reference does not establish a topical or other human-use application.',
    source: { url: 'https://pubmed.ncbi.nlm.nih.gov/12603850/', label: 'Heilborn et al. (2003), Journal of Investigative Dermatology', pmid: '12603850' }
  },
  {
    slug: 'n-acetyl-semax', name: 'N-Acetyl Semax', category: 'neural',
    description: 'A coordination study compares N-acetyl Semax with Semax in Cu(II) and Zn(II) binding and in SH-SY5Y neuroblastoma cultures exposed to copper.',
    studied: [
      'Magri et al. (2016) compared N-acetyl Semax with Semax in Cu(II) and Zn(II) coordination chemistry. The same paper recorded copper-exposure and zinc-distribution readouts in SH-SY5Y neuroblastoma cultures.'
    ],
    evidence: ['Metal-coordination assays', 'SH-SY5Y cell culture'],
    models: ['Cu(II) and Zn(II) coordination assays', 'SH-SY5Y neuroblastoma cultures'],
    keywords: 'Ac-Semax acetyl semax copper zinc SH-SY5Y', bodyAreas: ['neural'],
    note: '/research/notes/n-acetyl-semax.html',
    limitation: 'This cell-culture and metal-binding study is separate from the Semax basal-forebrain note. It does not establish a human cognitive or neurological outcome.',
    source: { url: 'https://pubmed.ncbi.nlm.nih.gov/27586814/', label: 'Magri et al. (2016), Journal of Inorganic Biochemistry', pmid: '27586814' }
  },
  {
    slug: 'pinealon', name: 'Pinealon', category: 'neural',
    description: 'Cell-culture work on the synthetic tripeptide Pinealon (Glu-Asp-Arg) measures reactive oxygen species and necrotic-cell readouts in cerebellar granule cells, neutrophils, and PC12 cells.',
    studied: [
      'Khavinson et al. (2011) applied the synthetic tripeptide Pinealon (Glu-Asp-Arg) to cerebellar granule cells, neutrophils, and PC12 cells under oxidative stress. The recorded readouts included reactive oxygen species, necrotic-cell staining, ERK 1/2 timing, and cell-cycle measures.'
    ],
    evidence: ['Cell-culture assays'],
    models: ['Cerebellar granule cells', 'Neutrophil cultures', 'PC12 cells'],
    keywords: 'EDR Glu-Asp-Arg pinealon ROS PC12', bodyAreas: ['neural'],
    note: '/research/notes/pinealon.html',
    limitation: 'These in vitro oxidative-stress endpoints do not establish a human neurological or aging outcome.',
    source: { url: 'https://pubmed.ncbi.nlm.nih.gov/21978084/', label: 'Khavinson et al. (2011), Rejuvenation Research', pmid: '21978084' }
  },
  {
    slug: 'cortagen', name: 'Cortagen', category: 'neural',
    description: 'In organotypic culture, the tetrapeptide Cortagen (Ala-Glu-Asp-Pro) was tested on rat brain-cortex explants, with explant growth as the recorded endpoint.',
    studied: [
      'Khavinson (2001) tested Cortagen (Ala-Glu-Asp-Pro) in organotypic cultures of rat brain cortex and recorded explant growth. The same short report also tested other synthetic peptides on explants from different tissues; those other peptides are outside this note.'
    ],
    evidence: ['Organotypic rat explants'],
    models: ['Organotypic rat brain-cortex explants'],
    keywords: 'Ala-Glu-Asp-Pro AEDP cortagen organotypic cortex', bodyAreas: ['neural'],
    note: '/research/notes/cortagen.html',
    limitation: 'An explant-growth observation in rat organotypic culture does not establish a human neurological application.',
    source: { url: 'https://pubmed.ncbi.nlm.nih.gov/11713572/', label: 'Khavinson (2001), Bulletin of Experimental Biology and Medicine', pmid: '11713572' }
  },
  {
    slug: 'vesugen', name: 'Vesugen', category: 'neural',
    description: 'Published mouse work administered the tripeptide Vesugen (Lys-Glu-Asp, KED) intraperitoneally to 5xFAD mice and recorded dendritic-spine morphology.',
    studied: [
      'Khavinson et al. (2021) administered the tripeptide Vesugen (Lys-Glu-Asp) intraperitoneally to 5xFAD mice and recorded dendritic-spine morphology. The paper also describes an in vitro amyloid synaptotoxicity model. A 2025 correction was issued for this article.'
    ],
    evidence: ['Mouse model', 'In vitro model'],
    models: ['5xFAD mouse dendritic-spine counts', 'In vitro amyloid synaptotoxicity model'],
    keywords: 'KED Lys-Glu-Asp vesugen 5xFAD dendritic spines', bodyAreas: ['neural'],
    note: '/research/notes/vesugen.html',
    limitation: 'A 2025 correction was issued for this paper (PMID 39861198). The mouse experiment does not establish a human neurological outcome, and this note does not describe a vascular use.',
    source: { url: 'https://pubmed.ncbi.nlm.nih.gov/34071923/', label: 'Khavinson et al. (2021), Pharmaceuticals', pmid: '34071923' },
    also: [{ url: 'https://pubmed.ncbi.nlm.nih.gov/39861198/', label: 'Khavinson et al. (2025), Pharmaceuticals correction', pmid: '39861198' }]
  },
  {
    slug: 'vilon', name: 'Vilon', category: 'immune',
    description: 'Mouse thymocyte experiments examine the dipeptide Vilon (Lys-Glu) using blast transformation and membrane sphingomyelinase activity as readouts.',
    studied: [
      'Khavinson et al. (2002) examined the dipeptide Vilon (Lys-Glu) in mouse thymocytes, with blast transformation and membrane sphingomyelinase activity as readouts. The same assays included Epithalon and Cortagen as comparison peptides.'
    ],
    evidence: ['Mouse thymocyte assays'],
    models: ['Mouse thymocyte blast transformation', 'Thymocyte-membrane sphingomyelinase activity'],
    keywords: 'Lys-Glu vilon thymocyte sphingomyelinase', bodyAreas: ['immune'],
    note: '/research/notes/vilon.html',
    limitation: 'These mouse thymocyte assays do not establish an effect on human immune function, lifespan, or tumor biology.',
    source: { url: 'https://pubmed.ncbi.nlm.nih.gov/12420072/', label: 'Khavinson et al. (2002), Bulletin of Experimental Biology and Medicine', pmid: '12420072' }
  },
  {
    slug: 'thymogen', name: 'Thymogen', category: 'immune',
    description: 'A long-term rat study recorded survival and spontaneous tumor counts after repeated subcutaneous administration of the dipeptide Thymogen (L-Glu-L-Trp) to outbred female rats.',
    studied: [
      'Anisimov, Khavinson, and Morozov (2000) gave the dipeptide L-Glu-L-Trp by repeated subcutaneous injection to outbred female rats and followed the cohort to natural death. The recorded endpoints were survival and microscopically examined spontaneous tumors.'
    ],
    evidence: ['Rat cohort'],
    models: ['Female rat survival counts', 'Spontaneous tumor counts'],
    keywords: 'L-Glu-L-Trp oglufanide thymogen', bodyAreas: ['immune'],
    note: '/research/notes/thymogen.html',
    limitation: 'Survival and tumor-count endpoints in one rat cohort do not establish a human immune, aging, or cancer outcome.',
    source: { url: 'https://pubmed.ncbi.nlm.nih.gov/11707921/', label: 'Anisimov, Khavinson, and Morozov (2000), Biogerontology', pmid: '11707921' }
  },
  {
    slug: 'dihexa', name: 'Dihexa', category: 'neural',
    description: 'An APP/PS1 mouse study of dihexa (N-hexanoic-Tyr-Ile-(6) aminohexanoic amide) recorded Morris water-maze performance, neuronal and synaptic-protein measurements, cytokine levels, and PI3K/AKT pathway readouts.',
    studied: [
      'Sun et al. (2021) administered dihexa orally to APP/PS1 mice and recorded Morris water-maze performance, neuronal and SYP protein measurements, cytokine levels, and PI3K/AKT pathway readouts, including a PI3K-inhibitor comparison.'
    ],
    evidence: ['APP/PS1 mouse study'],
    models: ['APP/PS1 mouse water maze', 'Neuronal and SYP protein measurements', 'Cytokine and PI3K/AKT readouts'],
    keywords: 'dihexa angiotensin IV analog APP PS1 water maze', bodyAreas: ['neural'],
    note: '/research/notes/dihexa.html',
    limitation: 'These mouse measurements do not establish a human cognitive outcome. A 2014 mechanism paper (PMID 25187433) was retracted in 2025 and is not used as evidence here.',
    source: { url: 'https://pubmed.ncbi.nlm.nih.gov/34827486/', label: 'Sun et al. (2021), Brain Sciences', pmid: '34827486' }
  },
  {
    slug: 'hexarelin', name: 'Hexarelin', category: 'gh',
    description: 'Rat experiments measure plasma growth-hormone release after Hexarelin, including infant rats, adult rats, and preparations used to compare pituitary and hypothalamic contributions.',
    studied: [
      'Torsello et al. (1996) measured plasma growth-hormone release after Hexarelin in infant rats, adult rats, and rats with mediobasal-hypothalamus ablation, and compared some of those responses with GHRH. The paper also recorded growth-hormone release from pituitary tissue in vitro.'
    ],
    evidence: ['Rat experiments', 'In vitro pituitary assay'],
    models: ['Infant and adult rat GH release', 'Mediobasal-hypothalamus ablation comparisons', 'In vitro pituitary GH release'],
    keywords: 'hexarelin GHRP-6 growth hormone secretagogue', bodyAreas: ['gh-axis'],
    note: '/research/notes/hexarelin.html',
    limitation: 'Growth-hormone measurements in rats and pituitary preparations do not establish a human diagnostic or therapeutic use.',
    source: { url: 'https://pubmed.ncbi.nlm.nih.gov/8921832/', label: 'Torsello et al. (1996), European Journal of Endocrinology', pmid: '8921832' }
  },
  {
    slug: 'ss-31', name: 'SS-31', category: 'metabolic',
    description: 'Isolated-mitochondria experiments with elamipretide (SS-31) measure ADP sensitivity in aged skeletal-muscle mitochondria and uptake through the adenine nucleotide translocator.',
    studied: [
      'Pharaoh et al. (2023) measured ADP-stimulated responses in isolated skeletal-muscle mitochondria from young and old animals and ADP uptake through the adenine nucleotide translocator after elamipretide (SS-31). The same study recorded heart and skeletal-muscle function in the animal experiments.'
    ],
    evidence: ['Isolated mitochondria', 'Animal physiological readouts'],
    models: ['Aged skeletal-muscle mitochondria', 'Adenine nucleotide translocator ADP uptake'],
    keywords: 'elamipretide SS-31 mitochondria ANT ADP', bodyAreas: ['metabolic'],
    note: '/research/notes/ss-31.html',
    limitation: 'Mitochondrial measurements in aged muscle, and the related animal physiological readouts in the same study, do not establish a human metabolic or cardiac application.',
    source: { url: 'https://pubmed.ncbi.nlm.nih.gov/37462785/', label: 'Pharaoh et al. (2023), GeroScience', pmid: '37462785' }
  },
  {
    slug: 'foxo4-dri', name: 'FOXO4-DRI', category: 'cellular',
    description: 'Cell and mouse studies of a FOXO4-derived peptide record senescent-cell viability, p53 localization, and responses in doxorubicin-treated, fast-aging, and naturally aged mice.',
    studied: [
      'Baar et al. (2017) tested a FOXO4-derived peptide in senescent-cell assays that recorded viability and p53 localization. The mouse experiments recorded fitness, coat, and renal measurements in doxorubicin-treated, fast-aging XpdTTD/TTD, and naturally aged mice.'
    ],
    evidence: ['Senescent-cell assays', 'Mouse models'],
    models: ['Senescent-cell viability assays', 'Doxorubicin-treated mice', 'Fast-aging and naturally aged mice'],
    keywords: 'FOXO4 DRI p53 senescence', bodyAreas: [],
    note: '/research/notes/foxo4-dri.html',
    limitation: 'Cell and mouse results are not a human anti-aging application. This entry is not assigned to a Body Explorer area.',
    source: { url: 'https://pubmed.ncbi.nlm.nih.gov/28340339/', label: 'Baar et al. (2017), Cell', pmid: '28340339' }
  },
  {
    slug: 'dsip', name: 'DSIP', category: 'neural',
    description: 'A rabbit study infused synthetic delta-sleep-inducing peptide (Trp-Ala-Gly-Gly-Asp-Ala-Ser-Gly-Glu) into the cerebral ventricles and recorded neocortical and archicortical electroencephalogram patterns.',
    studied: [
      'Schoenenberger et al. (1977) synthesized Trp-Ala-Gly-Gly-Asp-Ala-Ser-Gly-Glu and infused it into the cerebral ventricles of rabbits under double-blind conditions. Electroencephalogram leads from neocortex and archicortex were the recorded endpoints. The cited work is a rabbit electroencephalogram experiment.'
    ],
    evidence: ['Rabbit experiment', 'Electroencephalogram'],
    models: ['Rabbit intraventricular infusion', 'Neocortical and archicortical EEG'],
    keywords: 'DSIP delta sleep inducing peptide EEG', bodyAreas: ['neural'],
    note: '/research/notes/dsip.html',
    limitation: 'The cited experiment records electroencephalogram patterns in rabbits. It does not establish a human sleep application.',
    source: { url: 'https://pubmed.ncbi.nlm.nih.gov/265572/', label: 'Schoenenberger et al. (1977), Proceedings of the National Academy of Sciences', pmid: '265572' }
  },
  {
    slug: 'ghrelin', name: 'Ghrelin', category: 'gh',
    description: 'Ghrelin was purified from rat stomach as a 28-amino-acid peptide with an n-octanoyl group on serine 3, and growth-hormone release was measured in vivo and in pituitary preparations.',
    studied: [
      'Kojima et al. (1999) purified a 28-amino-acid peptide from rat stomach with an n-octanoyl group on serine 3 and measured growth-hormone release in vivo and in vitro. The cited work is a purification and hormone-release study.'
    ],
    evidence: ['Peptide purification', 'GH-release assays'],
    models: ['Rat stomach peptide purification', 'In vivo and in vitro GH release'],
    keywords: 'ghrelin GHS-R octanoyl stomach growth hormone', bodyAreas: ['gh-axis'],
    note: '/research/notes/ghrelin.html',
    limitation: 'Growth-hormone measurements in these experimental systems do not establish a human endocrine application.',
    source: { url: 'https://pubmed.ncbi.nlm.nih.gov/10604470/', label: 'Kojima et al. (1999), Nature', pmid: '10604470' }
  },
  {
    slug: 'ghrp-6', name: 'GHRP-6', category: 'gh',
    description: 'A 1984 report on the hexapeptide His-D-Trp-Ala-Trp-D-Phe-Lys-NH2, the sequence known as GHRP-6, measured growth-hormone release in pituitary incubates and in several animal species.',
    studied: [
      'Bowers et al. (1984) tested His-D-Trp-Ala-Trp-D-Phe-Lys-NH2 in pituitary incubates and after administration to rats, monkeys, lambs, calves, and, under the conditions stated in the paper, chicks. Growth-hormone release was the recorded endpoint. The cited work is an animal and pituitary-incubate study.'
    ],
    evidence: ['Pituitary incubates', 'Animal GH measurements'],
    models: ['Pituitary incubate assays', 'Rat, monkey, lamb, and calf GH measurements'],
    keywords: 'GHRP-6 His-D-Trp growth hormone secretagogue', bodyAreas: ['gh-axis'],
    note: '/research/notes/ghrp-6.html',
    limitation: 'Growth-hormone measurements in pituitary preparations and animals do not establish a human growth or body-weight application. This entry is distinct from the Ipamorelin catalog material and the Hexarelin research reference.',
    source: { url: 'https://pubmed.ncbi.nlm.nih.gov/6714155/', label: 'Bowers et al. (1984), Endocrinology', pmid: '6714155' }
  },
  {
    slug: 'orexin-a', name: 'Orexin-A', category: 'neural',
    description: 'Orexin-A was identified in rat hypothalamus as a ligand for previously orphan receptors, and central administration in rats was followed by measurements of food consumption.',
    studied: [
      'Sakurai et al. (1998) identified orexin-A in the rat hypothalamus as a ligand for two orphan receptors and measured food consumption after central administration in rats. The cited work is a localization and feeding-measurement study.'
    ],
    evidence: ['Rat localization', 'Food-intake measurements'],
    models: ['Rat hypothalamic localization', 'Central administration and food-intake measurements'],
    keywords: 'orexin-A hypocretin hypothalamus feeding', bodyAreas: ['neural', 'metabolic'],
    note: '/research/notes/orexin-a.html',
    limitation: 'Localization and feeding measurements in rats do not establish a human sleep, appetite, or metabolic application.',
    source: { url: 'https://pubmed.ncbi.nlm.nih.gov/9491897/', label: 'Sakurai et al. (1998), Cell', pmid: '9491897' }
  },
  {
    slug: 'exendin-4', name: 'Exendin-4', category: 'metabolic',
    description: 'Exendin-4, a 39-amino-acid peptide isolated from Heloderma suspectum venom, was tested on dispersed guinea pig pancreatic acini, with cAMP as the recorded endpoint.',
    studied: [
      'Eng et al. (1992) isolated the 39-amino-acid peptide exendin-4 from Heloderma suspectum venom and measured cAMP in dispersed guinea pig pancreatic acini. The cited work is an isolation and acinar-cell study.'
    ],
    evidence: ['Venom isolation', 'Pancreatic acinar assay'],
    models: ['Heloderma suspectum venom isolation', 'Guinea pig pancreatic acinar cAMP assays'],
    keywords: 'exendin-4 exendin Heloderma acini cAMP', bodyAreas: ['metabolic'],
    note: '/research/notes/exendin-4.html',
    limitation: 'This isolation and acinar-cell study is distinct from the semaglutide catalog material. It does not establish a human metabolic application.',
    source: { url: 'https://pubmed.ncbi.nlm.nih.gov/1313797/', label: 'Eng et al. (1992), Journal of Biological Chemistry', pmid: '1313797' }
  },
  {
    slug: 'pyy-3-36', name: 'PYY(3-36)', category: 'metabolic',
    description: 'Peripheral administration of peptide YY(3-36) was studied in rats and mice, including Y2-receptor knockout mice, with food intake and arcuate-nucleus signaling among the recorded endpoints.',
    studied: [
      'Batterham et al. (2002) gave peptide YY(3-36) peripherally to rats and mice, including mice lacking the Y2 receptor, and recorded food intake and arcuate-nucleus signaling. The same paper reports a human infusion in which food intake was measured. The cited work reports those experimental measurements.'
    ],
    evidence: ['Rodent feeding measurements', 'Human infusion measurement'],
    models: ['Rat and mouse food-intake measurements', 'Y2-receptor knockout comparison', 'Arcuate nucleus signaling readouts'],
    keywords: 'PYY 3-36 peptide YY Y2R arcuate', bodyAreas: ['metabolic'],
    note: '/research/notes/pyy-3-36.html',
    limitation: 'Food-intake measurements in these experiments, including a human infusion reported in the same paper, are not a weight-management recommendation and do not make this a catalog item.',
    source: { url: 'https://pubmed.ncbi.nlm.nih.gov/12167864/', label: 'Batterham et al. (2002), Nature', pmid: '12167864' }
  },
  {
    slug: 'aod9604', name: 'AOD9604', category: 'metabolic',
    description: 'Obese Zucker rats received oral AOD9604, a synthetic fragment analog of human growth hormone, for 19 days. Body-weight gain, adipose lipolytic activity, and euglycemic-clamp measurements were recorded.',
    studied: [
      'Ng et al. (2000) administered oral AOD9604 to obese Zucker rats for 19 days and recorded body-weight gain, adipose lipolytic activity, and euglycemic-clamp results. The cited work is a rat metabolic study.'
    ],
    evidence: ['Obese Zucker rats', 'Metabolic measurements'],
    models: ['Obese Zucker rats', 'Adipose lipolytic activity', 'Euglycemic clamp'],
    keywords: 'AOD9604 hGH fragment Zucker lipolysis', bodyAreas: ['metabolic'],
    note: '/research/notes/aod9604.html',
    limitation: 'These rat measurements do not establish a human weight or metabolic application. The note does not adopt development claims made in the paper.',
    source: { url: 'https://pubmed.ncbi.nlm.nih.gov/11146367/', label: 'Ng et al. (2000), Hormone Research', pmid: '11146367' }
  },
  {
    slug: 'nap', name: 'NAP', category: 'neural',
    description: 'NAP (NAPVSIPQ) was administered to a transgenic mouse model with tau pathology, and hyperphosphorylated tau and cognitive-test scores were recorded.',
    studied: [
      'Matsuoka et al. (2008) administered NAPVSIPQ to a transgenic mouse model with tau pathology and recorded hyperphosphorylated tau and cognitive-test scores. The cited work is a mouse study.'
    ],
    evidence: ['Transgenic mice', 'Tau and behavioral measurements'],
    models: ['Transgenic tauopathy mice', 'Hyperphosphorylated tau measurements', 'Cognitive testing'],
    keywords: 'NAP NAPVSIPQ tau transgenic', bodyAreas: ['neural'],
    note: '/research/notes/nap.html',
    limitation: 'Mouse tau and behavioral measurements do not establish a human neurological application.',
    source: { url: 'https://pubmed.ncbi.nlm.nih.gov/18199809/', label: 'Matsuoka et al. (2008), Journal of Pharmacology and Experimental Therapeutics', pmid: '18199809' }
  },
  {
    slug: 'kisspeptin-10', name: 'Kisspeptin-10', category: 'neural',
    description: 'Whole-cell recordings from rat supraoptic-nucleus slices measured miniature excitatory postsynaptic currents during application of kisspeptin-10.',
    studied: [
      'Yokoyama et al. (2014) applied kisspeptin-10 to rat supraoptic-nucleus slices and recorded miniature excitatory postsynaptic currents. The cited work is a slice electrophysiology study.'
    ],
    evidence: ['Rat brain slices', 'Electrophysiology'],
    models: ['Rat supraoptic nucleus slices', 'Miniature excitatory postsynaptic currents'],
    keywords: 'kisspeptin-10 GPR54 supraoptic mEPSC', bodyAreas: ['neural'],
    note: '/research/notes/kisspeptin-10.html',
    limitation: 'Slice electrophysiology in rats does not establish a human reproductive, endocrine, or neurological application.',
    source: { url: 'https://pubmed.ncbi.nlm.nih.gov/25130664/', label: 'Yokoyama et al. (2014), Brain Research', pmid: '25130664' }
  },
  {
    slug: 'livagen', name: 'Livagen', category: 'immune',
    description: 'The synthetic peptide Livagen was applied to lymphocytes from older adults, and ribosomal-gene activity and heterochromatin condensation were the recorded endpoints.',
    studied: [
      'Khavinson et al. (2002) applied the synthetic peptide Livagen to lymphocytes from older adults and recorded ribosomal-gene activity and heterochromatin condensation. The cited work is a lymphocyte study.'
    ],
    evidence: ['Human lymphocytes', 'Chromatin assays'],
    models: ['Lymphocytes from older adults', 'Ribosomal-gene and heterochromatin assays'],
    keywords: 'Livagen chromatin lymphocytes ribosomal genes', bodyAreas: ['immune'],
    note: '/research/notes/livagen.html',
    limitation: 'These lymphocyte measurements do not establish an immune or aging application in people.',
    source: { url: 'https://pubmed.ncbi.nlm.nih.gov/12533768/', label: 'Khavinson et al. (2002), Bulletin of Experimental Biology and Medicine', pmid: '12533768' }
  }
];
