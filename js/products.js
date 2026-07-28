/**
 * VialVibes — Phase 1 product catalog
 * Research Use Only. Specs without verified CoA evidence stay conservative.
 * Prices/sizes seeded from Phase 0 homepage catalog.
 */
window.TPL_PRODUCTS = [
  {
    id: 1,
    slug: "bpc-157",
    name: "BPC-157 Arginate",
    shortName: "BPC-157",
    category: "recovery",
    categorySlug: "tissue-repair",
    categoryLabel: "Tissue & Repair Models",
    price: 59,
    vialSize: "5 mg",
    form: "Lyophilized powder",
    purityNote: "Lot-specific Certificate of Analysis available on request",
    cas: "137525-51-0",
    molecularWeight: "1419.5 g/mol (free peptide; salt form may vary)",
    sequence: "Gly-Glu-Pro-Pro-Pro-Gly-Lys-Pro-Ala-Asp-Asp-Ala-Gly-Leu-Val (BPC-157 backbone; arginate salt form)",
    description: "Synthetic pentadecapeptide supplied for laboratory research in angiogenesis, soft-tissue, and gut-barrier model systems.",
    details: "BPC-157 Arginate is provided as a lyophilized research material for qualified laboratories. Published literature discusses this peptide sequence in experimental models of tissue response and GI barrier biology. Materials from VialVibes are for controlled laboratory research use only—not for human or veterinary use.",
    researchFocus: ["Angiogenesis models", "Soft-tissue research", "GI barrier models"],
    inStock: true
  },
  {
    id: 2,
    slug: "tb-500",
    name: "TB-500 (Thymosin Beta-4 fragment)",
    shortName: "TB-500",
    category: "recovery",
    categorySlug: "tissue-repair",
    categoryLabel: "Tissue & Repair Models",
    price: 69,
    vialSize: "5 mg",
    form: "Lyophilized powder",
    purityNote: "Lot-specific Certificate of Analysis available on request",
    cas: "77591-33-4",
    molecularWeight: "Approx. 4963 g/mol (full Tβ4 reference; research fragment MW may differ—confirm on lot CoA)",
    sequence: "Research fragment related to thymosin β4 / actin-sequestering peptide literature",
    description: "Research peptide used in laboratory studies of cell migration, actin dynamics, and tissue remodeling models.",
    details: "TB-500 is supplied for laboratory research only. Literature on thymosin β4-related sequences is referenced by researchers studying cell migration and inflammation pathways in model systems. Confirm identity and specifications on the lot Certificate of Analysis when available.",
    researchFocus: ["Cell migration models", "Inflammation pathways", "Tissue remodeling assays"],
    inStock: true
  },
  {
    id: 3,
    slug: "semaglutide",
    name: "Semaglutide",
    shortName: "Semaglutide",
    category: "metabolic",
    categorySlug: "metabolic",
    categoryLabel: "Metabolic Research",
    price: 129,
    vialSize: "5 mg",
    form: "Lyophilized powder",
    purityNote: "Lot-specific Certificate of Analysis available on request",
    cas: "910463-68-2",
    molecularWeight: "4113.6 g/mol (reference)",
    sequence: "GLP-1 receptor agonist peptide analog (research material)",
    description: "Long-acting GLP-1 receptor agonist analog supplied for metabolic pathway and incretin-signaling research models.",
    details: "Semaglutide research material is intended for laboratory investigation of GLP-1 receptor pathways and metabolic signaling in experimental systems. Not for human use. Use only in qualified research settings with appropriate institutional controls.",
    researchFocus: ["GLP-1 pathway research", "Metabolic models", "Incretin signaling"],
    inStock: true
  },
  {
    id: 4,
    slug: "tirzepatide",
    name: "Tirzepatide",
    shortName: "Tirzepatide",
    category: "metabolic",
    categorySlug: "metabolic",
    categoryLabel: "Metabolic Research",
    price: 149,
    vialSize: "5 mg",
    form: "Lyophilized powder",
    purityNote: "Lot-specific Certificate of Analysis available on request",
    cas: "2023788-19-2",
    molecularWeight: "4813.5 g/mol (reference)",
    sequence: "Dual GIP / GLP-1 receptor agonist peptide (research material)",
    description: "Dual incretin-pathway research peptide for laboratory study of GIP and GLP-1 receptor signaling.",
    details: "Tirzepatide is supplied strictly for research use in metabolic and dual-agonist pathway models. Specs are lot-dependent; request CoA documentation for analytical details. Not intended for human consumption or clinical use.",
    researchFocus: ["Dual agonist research", "GIP/GLP-1 pathways", "Metabolic model systems"],
    inStock: true
  },
  {
    id: 5,
    slug: "ipamorelin",
    name: "Ipamorelin",
    shortName: "Ipamorelin",
    category: "gh",
    categorySlug: "growth-hormone",
    categoryLabel: "GH Axis Research",
    price: 49,
    vialSize: "5 mg",
    form: "Lyophilized powder",
    purityNote: "Lot-specific Certificate of Analysis available on request",
    cas: "170851-70-4",
    molecularWeight: "711.9 g/mol (reference)",
    sequence: "Aib-His-D-2-Nal-D-Phe-Lys-NH2 (ghrelin receptor research peptide)",
    description: "Selective ghrelin receptor (GHSR) agonist peptide for growth-hormone axis research models.",
    details: "Ipamorelin is provided for laboratory research into GH secretagogue receptor signaling and related endocrine pathway models. Research use only—not for human or veterinary administration.",
    researchFocus: ["GHSR signaling", "GH axis models", "Secretagogue research"],
    inStock: true
  },
  {
    id: 6,
    slug: "cjc-1295",
    name: "CJC-1295 (no DAC)",
    shortName: "CJC-1295",
    category: "gh",
    categorySlug: "growth-hormone",
    categoryLabel: "GH Axis Research",
    price: 55,
    vialSize: "2 mg",
    form: "Lyophilized powder",
    purityNote: "Lot-specific Certificate of Analysis available on request",
    cas: "863288-34-0",
    molecularWeight: "Approx. 3367 g/mol (no-DAC form; confirm lot CoA)",
    sequence: "Modified GHRH (1-29) analog (research material; DAC not included)",
    description: "GHRH analog research material for studies of GH-release pathway amplitude in experimental models.",
    details: "CJC-1295 (no DAC) is supplied for laboratory research. Researchers studying GHRH analogs often pair literature discussion with other GH-axis research compounds. Confirm molecular identity on lot documentation when available.",
    researchFocus: ["GHRH analog research", "GH pulse models", "Axis pathway studies"],
    inStock: true
  },
  {
    id: 7,
    slug: "ghk-cu",
    name: "GHK-Cu Copper Peptide",
    shortName: "GHK-Cu",
    category: "cosmetic",
    categorySlug: "cosmetic",
    categoryLabel: "Skin / ECM Research",
    price: 45,
    vialSize: "50 mg",
    form: "Lyophilized powder",
    purityNote: "Lot-specific Certificate of Analysis available on request",
    cas: "89030-95-5",
    molecularWeight: "Approx. 340–404 g/mol range reported for complex forms (confirm lot CoA)",
    sequence: "Gly-His-Lys · copper complex (research material)",
    description: "Copper-binding tripeptide for laboratory research on collagen pathways, extracellular matrix, and oxidative-stress models.",
    details: "GHK-Cu is provided for in vitro / laboratory research only. Published work discusses gene-expression and matrix-biology endpoints in experimental systems. Not for human cosmetic or clinical use when sold as research material from this catalog.",
    researchFocus: ["Collagen pathway models", "ECM research", "Oxidative stress assays"],
    inStock: true
  },
  {
    id: 8,
    slug: "retatrutide",
    name: "Retatrutide",
    shortName: "Retatrutide",
    category: "metabolic",
    categorySlug: "metabolic",
    categoryLabel: "Metabolic Research",
    price: 179,
    vialSize: "5 mg",
    form: "Lyophilized powder",
    purityNote: "Lot-specific Certificate of Analysis available on request",
    cas: "2381089-83-2",
    molecularWeight: "Approx. 4731 g/mol (reference; confirm lot CoA)",
    sequence: "Triple agonist research peptide (GLP-1 / GIP / glucagon pathway literature)",
    description: "Investigational triple-agonist peptide for laboratory metabolic pathway research in model systems.",
    details: "Retatrutide research material is intended for qualified laboratory use studying multi-receptor metabolic pathways described in the scientific literature. Strictly research use only—not for human use.",
    researchFocus: ["Triple agonist research", "Metabolic pathway models", "Preclinical literature compound"],
    inStock: true
  }
];

window.TPL_CATEGORIES = [
  {
    slug: "tissue-repair",
    key: "recovery",
    name: "Tissue & Repair Models",
    description: "Research peptides commonly discussed in soft-tissue, cell-migration, and barrier-biology model literature."
  },
  {
    slug: "metabolic",
    key: "metabolic",
    name: "Metabolic Research",
    description: "Incretin and multi-agonist pathway materials for laboratory metabolic signaling studies."
  },
  {
    slug: "growth-hormone",
    key: "gh",
    name: "GH Axis Research",
    description: "GH secretagogue and GHRH-analog research materials for endocrine pathway models."
  },
  {
    slug: "cosmetic",
    key: "cosmetic",
    name: "Skin / ECM Research",
    description: "Peptides used in extracellular matrix, collagen pathway, and dermal biology research models."
  }
];

window.TPL_SITE = {
  brand: "VialVibes",
  legal: "VialVibes is operated by APEX Research, LLC",
  domain: "https://www.peptidetrue.com",
  emailResearch: "research@vialvibes.com",
  emailOrders: "orders@vialvibes.com"
};
