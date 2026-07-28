# Generate full Phase 2 compound research pages (ASCII-safe)
$ErrorActionPreference = 'Stop'
$Root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$OutDir = Join-Path $Root 'research'
$Domain = 'https://www.vialvibes.com'
$Reviewed = '2026-07-28'

function Nav {
@'
<nav class="bg-white border-b border-slate-200 sticky top-0 z-50">
  <div class="max-w-screen-2xl mx-auto">
    <div class="px-4 sm:px-8 py-4 flex items-center justify-between gap-4">
      <a href="../index.html" class="flex items-center gap-x-2 shrink-0"><img src="../logo.png" alt="Vial Vibes" class="h-12 sm:h-14 w-auto"></a>
      <div class="hidden lg:flex items-center gap-x-7 text-sm font-medium">
        <a href="../peptides/index.html" class="nav-link text-slate-600">Peptides</a>
        <a href="index.html" class="nav-link active text-emerald-700 font-semibold">Research</a>
        <a href="../quality.html" class="nav-link text-slate-600">Quality</a>
        <div class="relative group">
          <button type="button" class="nav-link text-slate-600 flex items-center gap-1">Tools <i class="fa-solid fa-chevron-down text-[10px]"></i></button>
          <div class="absolute left-0 top-full pt-2 hidden group-hover:block z-50">
            <div class="bg-white border border-slate-200 rounded-2xl shadow-lg py-2 min-w-[240px]">
              <a href="../tools/peptide-calculator.html" class="block px-4 py-2.5 text-sm text-slate-700 hover:bg-emerald-50">Reconstitution Calculator</a>
              <a href="../tools/research-combination-builder.html" class="block px-4 py-2.5 text-sm text-slate-700 hover:bg-emerald-50">Research Combination Builder</a>
            </div>
          </div>
        </div>
        <a href="../about.html" class="nav-link text-slate-600">About</a>
        <a href="../contact.html" class="nav-link text-slate-600">Contact</a>
      </div>
      <div class="flex items-center gap-x-2">
        <a href="../cart.html" class="flex items-center gap-x-2 border border-slate-200 px-4 h-11 rounded-2xl text-sm font-semibold"><i class="fa-solid fa-shopping-cart"></i><span class="hidden sm:inline">Cart</span></a>
        <button type="button" class="lg:hidden w-11 h-11" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')" aria-label="Menu"><i class="fa-solid fa-bars"></i></button>
      </div>
    </div>
  </div>
  <div id="mobile-menu" class="hidden lg:hidden border-t bg-white px-6 py-4 text-sm flex flex-col gap-2">
    <a href="../peptides/index.html">Peptides</a><a href="index.html" class="text-emerald-700 font-semibold">Research Hub</a>
    <a href="compare.html">Compare</a><a href="how-to-read-a-coa.html">How to read a CoA</a>
    <a href="../coa.html">CoA request</a><a href="../tools/peptide-calculator.html">Calculator</a>
    <a href="../about.html">About</a><a href="../contact.html">Contact</a><a href="../cart.html">Cart</a>
  </div>
</nav>
<div class="ruo-banner"><div class="max-w-screen-2xl mx-auto px-4 sm:px-8 py-2.5 text-center text-xs sm:text-sm"><strong>Research Use Only.</strong> Scientific reference for laboratory professionals. Not for human consumption or clinical use. <a href="../research-use-only.html" class="underline font-semibold ml-1">RUO policy</a></div></div>
'@
}

function Footer {
@'
<footer class="bg-slate-900 text-slate-400 text-sm mt-auto">
  <div class="max-w-screen-2xl mx-auto px-4 sm:px-8 pt-14 pb-9">
    <div class="flex flex-col md:flex-row justify-between gap-y-10">
      <div>
        <a href="../index.html" class="inline-flex mb-4"><img src="../logo.png" alt="Vial Vibes" class="h-12 w-auto"></a>
        <p class="text-xs max-w-xs">Vial Vibes supplies research-use-only peptides for qualified laboratories. Operated by APEX Research, LLC.</p>
        <p class="text-xs mt-3"><a href="mailto:research@vialvibes.com" class="hover:text-white">research@vialvibes.com</a></p>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-8 text-xs">
        <div><div class="font-semibold text-white tracking-wider mb-3">PEPTIDES</div><div class="space-y-1.5"><a href="../peptides/index.html" class="block hover:text-white">All Peptides</a><a href="../peptides/tissue-repair.html" class="block hover:text-white">Tissue and Repair</a><a href="../peptides/metabolic.html" class="block hover:text-white">Metabolic</a></div></div>
        <div><div class="font-semibold text-white tracking-wider mb-3">RESOURCES</div><div class="space-y-1.5"><a href="index.html" class="block hover:text-white">Research Hub</a><a href="compare.html" class="block hover:text-white">Compare</a><a href="how-to-read-a-coa.html" class="block hover:text-white">How to read a CoA</a><a href="glossary.html" class="block hover:text-white">Glossary</a><a href="../coa.html" class="block hover:text-white">CoA request</a></div></div>
        <div><div class="font-semibold text-white tracking-wider mb-3">COMPANY</div><div class="space-y-1.5"><a href="../about.html" class="block hover:text-white">About</a><a href="../about-scientific-content.html" class="block hover:text-white">Scientific content</a><a href="../contact.html" class="block hover:text-white">Contact</a></div></div>
        <div><div class="font-semibold text-white tracking-wider mb-3">LEGAL</div><div class="space-y-1.5"><a href="../terms.html" class="block hover:text-white">Terms</a><a href="../privacy.html" class="block hover:text-white">Privacy</a><a href="../research-use-only.html" class="block hover:text-white">RUO policy</a></div></div>
      </div>
    </div>
    <div class="mt-12 pt-8 border-t border-white/10">
      <div class="disclaimer bg-slate-950 border border-white/10 rounded-2xl p-5 text-[11.5px] leading-relaxed"><strong class="text-white">IMPORTANT DISCLAIMER:</strong> All products sold by Vial Vibes (operated by APEX Research, LLC) are intended <span class="text-red-400 font-semibold">strictly for in vitro laboratory research purposes only</span>. They are not approved by the FDA for human use, are not drugs, and are not intended to diagnose, treat, cure, or prevent any disease. Not for human consumption, injection, or bodily introduction. <a href="../research-use-only.html" class="underline text-emerald-400">Full RUO policy</a>.</div>
      <div class="text-center mt-8 text-[10px] tracking-wider">&copy; 2026 Vial Vibes, operated by APEX Research, LLC.</div>
    </div>
  </div>
</footer>
'@
}

$Pages = @(
  @{
    slug='bpc-157'; short='BPC-157'; name='BPC-157 Arginate'; cat='Tissue and Repair Models'; catSlug='tissue-repair'
    product='../peptides/bpc-157.html'; cas='137525-51-0'; mw='About 1419.5 g/mol (free peptide; salt form may vary)'
    intro='BPC-157 is a synthetic pentadecapeptide sequence that has been investigated extensively in preclinical laboratory and animal research literature. This page summarizes published research context for laboratory professionals. It is not medical advice and does not authorize human use of research materials.'
    chem='Catalog listing: BPC-157 Arginate, typically supplied as lyophilized powder (see product page for vial size). CAS commonly associated with the free peptide sequence: 137525-51-0. Identity and purity are lot-dependent; request a Certificate of Analysis for the lot you receive.'
    history='BPC-157 (body protection compound-157) is described in the literature as a synthetic peptide derived from a partial sequence related to a protein found in gastric juice. Over several decades, experimental papers and reviews have examined this sequence in a range of animal and in vitro models. Systematic and narrative reviews emphasize that the bulk of the evidence base remains preclinical.'
    areas=@(
      'Soft-tissue and musculoskeletal injury models in animals (reviewed in orthopaedic and sports-medicine literature)',
      'Tendon and ligament experimental models discussed in narrative and systematic reviews',
      'Gastrointestinal mucosal and barrier-related animal models referenced across the BPC-157 literature corpus',
      'Angiogenesis and cytoprotective pathway hypotheses explored in preclinical reports'
    )
    mechanisms='Reviews of preclinical work discuss proposed involvement of growth-related signaling, angiogenesis-associated pathways, and inflammatory-cytokine modulation in model systems. These mechanistic discussions are literature-derived hypotheses and model-level findings. They are not product claims and do not establish clinical indications for research reagents.'
    studies=@(
      @{ pmid='30915550'; label='Gwyer D, et al. (2019). Gastric pentadecapeptide body protection compound BPC 157 and its role in accelerating musculoskeletal soft tissue healing. Cell Tissue Res. PubMed 30915550.' },
      @{ pmid='40756949'; label='Vasireddi N, et al. Emerging use of BPC-157 in orthopaedic sports medicine: a systematic review (preclinical-focused synthesis). PubMed 40756949.' },
      @{ pmid='40005999'; label='Jozwiak M, et al. (2025). Multifunctionality and possible medical application of the BPC 157 peptide - literature and patent review. Pharmaceuticals. PubMed 40005999.' }
    )
    limits='High-quality, large-scale clinical trials remain limited relative to the volume of preclinical reports. Manufacturing quality, contamination risk, and regulatory status of non-pharmaceutical sources are repeatedly flagged as practical concerns in review literature. Findings in animal models do not automatically translate to humans. Always separate approved drug products (if any) from research-use materials sold for laboratory work.'
    related=@(@{href='tb-500.html'; t='TB-500'},@{href='ghk-cu.html'; t='GHK-Cu'},@{href='compare.html'; t='Compare compounds'})
  },
  @{
    slug='tb-500'; short='TB-500'; name='TB-500 (Thymosin Beta-4-related research material)'; cat='Tissue and Repair Models'; catSlug='tissue-repair'
    product='../peptides/tb-500.html'; cas='77591-33-4'; mw='Full thymosin beta-4 reference mass is often cited near ~4963 g/mol; research fragment identity may differ - confirm on lot CoA'
    intro='TB-500 is a name used in research-supply contexts for synthetic material related to thymosin beta-4 (T-beta-4) literature. Full-length T-beta-4 has been studied in laboratory and animal models of cell migration and tissue response. This page frames published science carefully and does not equate catalog research material with pharmaceutical products.'
    chem='Catalog material is lyophilized research peptide associated with T-beta-4 / actin-related literature. CAS 77591-33-4 is commonly linked to thymosin beta-4 in databases; fragment preparations may have different sequences or masses. Confirm identity methods on the lot CoA.'
    history='Thymosin beta-4 is a naturally occurring peptide discussed for roles in actin sequestration and cell motility. Laboratory studies and reviews describe experimental endpoints in wound and tissue models. Analytical chemistry literature has also described detection of TB-500-related sequences in doping-control matrices, which is relevant to identity and monitoring research rather than therapeutic use of research reagents.'
    areas=@(
      'Cell migration and actin-related laboratory assays associated with T-beta-4 biology',
      'Animal wound and tissue-response models reported for thymosin beta-4',
      'Analytical detection and metabolite characterization of TB-500-related peptides (doping-control research)'
    )
    mechanisms='Literature on T-beta-4 discusses actin-binding behavior and effects on cell motility and angiogenesis-related endpoints in experimental systems. Mechanistic language in reviews should be read as model biology, not as instructions or claims for research materials sold RUO.'
    studies=@(
      @{ pmid='22074294'; label='Goldstein AL, et al. (2012). Thymosin beta-4: a multi-functional regenerative peptide - basic properties and clinical applications (review). Expert Opin Biol Ther. PubMed 22074294.' },
      @{ pmid='10469335'; label='Malinda KM, et al. (1999). Thymosin beta-4 accelerates wound healing (rat full-thickness wound model). J Invest Dermatol. PubMed 10469335.' },
      @{ pmid='23084823'; label='Ho ENM, et al. (2012). Doping control analysis of TB-500, a synthetic version of an active region of thymosin beta-4. Drug Test Anal. PubMed 23084823.' }
    )
    limits='Catalog "TB-500" preparations may not be chemically identical to full-length T-beta-4 used in some papers. Sequence and mass must be verified analytically. Much of the regenerative framing in secondary literature exceeds what is supported for unregulated research materials. Human clinical validation for research reagents is not established by animal models alone.'
    related=@(@{href='bpc-157.html'; t='BPC-157'},@{href='ghk-cu.html'; t='GHK-Cu'},@{href='compare.html'; t='Compare compounds'})
  },
  @{
    slug='ghk-cu'; short='GHK-Cu'; name='GHK-Cu Copper Peptide'; cat='Skin / ECM Research'; catSlug='cosmetic'
    product='../peptides/ghk-cu.html'; cas='89030-95-5'; mw='Complex forms often reported roughly 340-404 g/mol range - confirm lot CoA'
    intro='GHK-Cu (glycyl-L-histidyl-L-lysine copper complex) has been investigated in laboratory research on extracellular matrix biology, gene-expression profiling, and dermal model systems. This overview is for scientific reference only.'
    chem='Tripeptide Gly-His-Lys complexed with copper(II). Supplied as lyophilized research material. CAS and mass can vary by salt/complex form; verify lot documentation.'
    history='The GHK peptide and its copper complex have a long research history in connective-tissue and skin-biology literature, including work associated with Pickart and colleagues on remodeling-related gene expression and matrix endpoints in experimental systems.'
    areas=@(
      'Collagen and extracellular-matrix pathway research models',
      'Gene-expression and remodeling-related laboratory studies discussed for GHK/GHK-Cu',
      'Oxidative stress and copper-peptide chemistry contexts in experimental literature'
    )
    mechanisms='Published discussions link GHK-Cu to modulation of gene sets related to matrix remodeling and antioxidant defenses in experimental systems. These are literature mechanisms under study, not clinical product claims for RUO materials.'
    studies=@(
      @{ pmid='18689049'; label='Pickart L, Margolina A. (2008). The human tri-peptide GHK and tissue remodeling. J Biomater Sci Polym Ed. PubMed 18689049.' },
      @{ pmid='20979553'; label='Pickart L, et al. related copper-peptide / GHK literature (verify exact title on PubMed). PubMed 20979553.' }
    )
    limits='Cosmetic or clinical product claims found in marketing sources are not equivalent to controlled laboratory research use. In vitro findings do not prove clinical outcomes. Confirm complex stoichiometry and purity on CoA.'
    related=@(@{href='bpc-157.html'; t='BPC-157'},@{href='tb-500.html'; t='TB-500'},@{href='compare.html'; t='Compare compounds'})
  },
  @{
    slug='semaglutide'; short='Semaglutide'; name='Semaglutide'; cat='Metabolic Research'; catSlug='metabolic'
    product='../peptides/semaglutide.html'; cas='910463-68-2'; mw='About 4113.6 g/mol (reference)'
    intro='Semaglutide is a long-acting GLP-1 receptor agonist extensively described in metabolic research and clinical literature. Vial Vibes supplies research-use-only material for qualified laboratory investigation. Research materials are distinct from FDA-approved pharmaceutical products (e.g., branded medicines) and must not be used as substitutes for approved drugs.'
    chem='GLP-1 receptor agonist peptide analog. Lyophilized research material. CAS 910463-68-2 commonly listed. Confirm identity/purity on lot CoA.'
    history='GLP-1 biology and GLP-1 receptor agonists are central to modern metabolic research. Semaglutide has been studied in large clinical programs for type 2 diabetes and weight management as approved medicines in those regulated contexts. Laboratory research also uses incretin analogs as tool compounds under appropriate institutional controls.'
    areas=@(
      'GLP-1 receptor signaling and incretin biology in experimental systems',
      'Metabolic pathway research informed by the broader clinical literature on GLP-1 receptor agonists',
      'Comparative pharmacology research among incretin-based peptides'
    )
    mechanisms='As a GLP-1 receptor agonist, semaglutide is described as engaging receptors involved in glucose-dependent insulin secretion, glucagon pathways, gastric emptying, and central appetite-regulation circuits in research and clinical literature. Those descriptions concern the molecule class and approved-drug contexts; they are not directions for using RUO research material in humans.'
    studies=@(
      @{ pmid='34942372'; label='Chao AM, Wadden TA. (2023). Semaglutide for the treatment of obesity. Trends Cardiovasc Med. PubMed 34942372.' },
      @{ pmid='40281304'; label='Drucker DJ. GLP-1-based therapies for diabetes, obesity and beyond (review). PubMed 40281304.' },
      @{ pmid=''; label='Kommu S, et al. Semaglutide - StatPearls. NCBI Bookshelf NBK603723. https://www.ncbi.nlm.nih.gov/books/NBK603723/' }
    )
    limits='Do not conflate RUO research peptides with FDA-approved semaglutide medicines. Clinical trial results for approved products do not authorize unregulated use of research materials. Institutional review and legal compliance remain buyer responsibilities.'
    related=@(@{href='tirzepatide.html'; t='Tirzepatide'},@{href='retatrutide.html'; t='Retatrutide'},@{href='compare.html'; t='Compare compounds'})
  },
  @{
    slug='tirzepatide'; short='Tirzepatide'; name='Tirzepatide'; cat='Metabolic Research'; catSlug='metabolic'
    product='../peptides/tirzepatide.html'; cas='2023788-19-2'; mw='About 4813.5 g/mol (reference)'
    intro='Tirzepatide is a dual GIP and GLP-1 receptor agonist widely discussed in metabolic clinical research literature. Catalog research material from Vial Vibes is Research Use Only and is not an approved drug product.'
    chem='Dual incretin-pathway peptide research material. CAS 2023788-19-2 commonly listed. Confirm lot CoA for identity and purity.'
    history='Dual agonism at GIP and GLP-1 receptors has been investigated in clinical development programs (e.g., SURPASS and SURMOUNT series) for metabolic disease endpoints under regulated pharmaceutical pathways. Those programs are distinct from RUO laboratory supply.'
    areas=@(
      'Dual GIP/GLP-1 receptor pharmacology research',
      'Metabolic model systems informed by dual-agonist literature',
      'Comparative incretin research alongside single GLP-1 agonists'
    )
    mechanisms='Literature describes simultaneous engagement of GIP and GLP-1 receptors with effects on glycemic and body-weight endpoints in clinical studies of the pharmaceutical product. Mechanistic summaries are for scientific literacy only and do not authorize human use of research reagents.'
    studies=@(
      @{ pmid='34170647'; label='Frias JP, et al. (2021). Tirzepatide versus semaglutide once weekly in patients with type 2 diabetes (SURPASS-2). N Engl J Med. PubMed 34170647.' },
      @{ pmid='35658024'; label='Jastreboff AM, et al. (2022). Tirzepatide once weekly for the treatment of obesity (SURMOUNT-1). N Engl J Med. PubMed 35658024.' }
    )
    limits='Approved pharmaceutical tirzepatide products are regulated medicines. Research materials sold RUO are not interchangeable with them. Clinical efficacy results do not constitute claims for laboratory reagents.'
    related=@(@{href='semaglutide.html'; t='Semaglutide'},@{href='retatrutide.html'; t='Retatrutide'},@{href='compare.html'; t='Compare compounds'})
  },
  @{
    slug='retatrutide'; short='Retatrutide'; name='Retatrutide'; cat='Metabolic Research'; catSlug='metabolic'
    product='../peptides/retatrutide.html'; cas='2381089-83-2'; mw='About 4731 g/mol (reference; confirm lot CoA)'
    intro='Retatrutide is an investigational triple agonist (GIP, GLP-1, and glucagon receptors) described in peer-reviewed clinical research literature. Vial Vibes research material is supplied RUO for laboratory use only and is not an approved medicine.'
    chem='Triple-agonist peptide research material. CAS 2381089-83-2 commonly associated. Confirm lot analytical documentation.'
    history='Phase 2 clinical trials published in major journals have evaluated retatrutide in obesity and type 2 diabetes research contexts under regulated clinical development. Those trials study a drug candidate pathway, not open-market research vials as medicines.'
    areas=@(
      'Triple receptor agonist pharmacology (GIP / GLP-1 / glucagon)',
      'Metabolic research literature comparison with dual and single agonists',
      'Preclinical and clinical research program context for multi-agonist peptides'
    )
    mechanisms='Published trial reports describe multi-receptor engagement designed to influence energy balance and glycemic pathways. Language from clinical papers must not be repurposed as instructions for RUO materials.'
    studies=@(
      @{ pmid='37366315'; label='Jastreboff AM, et al. (2023). Triple-hormone-receptor agonist retatrutide for obesity - a phase 2 trial. N Engl J Med. PubMed 37366315.' },
      @{ pmid='37385280'; label='Rosenstock J, et al. (2023). Retatrutide for people with type 2 diabetes: a phase 2 trial. Lancet. PubMed 37385280.' }
    )
    limits='Investigational status of pharmaceutical programs is not the same as RUO catalog supply. Human trial data do not authorize non-clinical research materials for human administration.'
    related=@(@{href='tirzepatide.html'; t='Tirzepatide'},@{href='semaglutide.html'; t='Semaglutide'},@{href='compare.html'; t='Compare compounds'})
  },
  @{
    slug='ipamorelin'; short='Ipamorelin'; name='Ipamorelin'; cat='GH Axis Research'; catSlug='growth-hormone'
    product='../peptides/ipamorelin.html'; cas='170851-70-4'; mw='About 711.9 g/mol (reference)'
    intro='Ipamorelin is a selective growth hormone secretagogue (ghrelin receptor agonist) characterized in classical pharmacological literature. It is supplied here strictly for laboratory research use only.'
    chem='Pentapeptide GHS (Aib-His-D-2-Nal-D-Phe-Lys-NH2). CAS 170851-70-4. Lyophilized research material; confirm CoA.'
    history='Ipamorelin was described as a selective GH secretagogue with relatively low effects on ACTH/cortisol in comparative animal pharmacology relative to some other GHRPs, making it a useful research tool for GH axis studies.'
    areas=@(
      'GHS-R1a (ghrelin receptor) pharmacology',
      'Pituitary GH release models in laboratory animals',
      'Selectivity profiling versus other growth hormone-releasing peptides'
    )
    mechanisms='Ipamorelin acts as an agonist at the growth hormone secretagogue receptor (ghrelin receptor), stimulating GH release via pathways distinct from GHRH receptor activation. Descriptions reflect research pharmacology, not clinical use guidance for RUO products.'
    studies=@(
      @{ pmid='9849822'; label='Raun K, et al. (1998). Ipamorelin, the first selective growth hormone secretagogue. Eur J Endocrinol. PubMed 9849822.' }
    )
    limits='Older pharmacological papers do not establish modern clinical approval for research reagents. Combination marketing claims with other GH-axis peptides are not literature conclusions for RUO supply.'
    related=@(@{href='cjc-1295.html'; t='CJC-1295'},@{href='compare.html'; t='Compare compounds'})
  },
  @{
    slug='cjc-1295'; short='CJC-1295'; name='CJC-1295 (no DAC)'; cat='GH Axis Research'; catSlug='growth-hormone'
    product='../peptides/cjc-1295.html'; cas='863288-34-0'; mw='Approximately 3367 g/mol for no-DAC form (confirm lot CoA)'
    intro='CJC-1295 is a modified GHRH analog studied for effects on GH and IGF-I axes. The Vial Vibes catalog lists a no-DAC research form. DAC and no-DAC forms differ in half-life engineering; do not assume interchangeability without analytical confirmation.'
    chem='Modified GHRH (1-29) analog research material, no DAC. CAS 863288-34-0 commonly referenced. Confirm form and mass on CoA.'
    history='Published clinical pharmacology studies examined long-acting CJC-1295 constructs (including DAC-related designs) for prolonged GH and IGF-I stimulation with preserved pulsatility in some reports. Mouse GHRH-knockout work has also been used to study growth endpoints.'
    areas=@(
      'GHRH receptor pathway research',
      'GH / IGF-I axis experimental pharmacology',
      'Comparison of long-acting GHRH analogs in published studies'
    )
    mechanisms='As a GHRH analog, CJC-1295 is discussed for increasing GH secretion amplitude/duration depending on formulation. Literature on DAC-containing forms emphasizes albumin binding and extended action; no-DAC material should be interpreted on its own analytical identity.'
    studies=@(
      @{ pmid='16352683'; label='Teichman SL, et al. (2006). Prolonged stimulation of GH and IGF-I secretion by CJC-1295, a long-acting GHRH analog, in healthy adults. J Clin Endocrinol Metab. PubMed 16352683.' },
      @{ pmid='17018654'; label='Ionescu M, Frohman LA. (2006). Pulsatile secretion of GH persists during continuous stimulation by CJC-1295. J Clin Endocrinol Metab. PubMed 17018654.' }
    )
    limits='Catalog no-DAC research material is not automatically equivalent to every CJC-1295 construct in published trials. Human pharmacology papers describe regulated study settings, not open use of RUO peptides.'
    related=@(@{href='ipamorelin.html'; t='Ipamorelin'},@{href='compare.html'; t='Compare compounds'})
  }
)

function Build-Page($p) {
  $nav = Nav
  $footer = Footer
  $areasHtml = ($p.areas | ForEach-Object { "<li>$_</li>" }) -join "`n"
  $studiesHtml = ''
  foreach ($s in $p.studies) {
    if ($s.pmid -and $s.pmid.Length -gt 0) {
      $studiesHtml += "<li><a href=`"https://pubmed.ncbi.nlm.nih.gov/$($s.pmid)/`" target=`"_blank`" rel=`"noopener noreferrer`">$($s.label)</a></li>`n"
    } else {
      $studiesHtml += "<li>$($s.label)</li>`n"
    }
  }
  $relatedHtml = ($p.related | ForEach-Object { "<a href=`"$($_.href)`" class=`"px-4 py-2 border border-slate-200 rounded-xl text-sm font-semibold hover:border-emerald-400`">$($_.t)</a>" }) -join "`n"
  $desc = "$($p.short) research overview for laboratory professionals. Literature-framed, research use only. Vial Vibes."
  $html = @"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>$($p.short) Research Overview | Vial Vibes</title>
  <meta name="description" content="$desc">
  <link rel="canonical" href="$Domain/research/$($p.slug).html">
  <meta property="og:title" content="$($p.short) Research Overview | Vial Vibes">
  <meta property="og:description" content="$desc">
  <meta property="og:type" content="article">
  <meta property="og:url" content="$Domain/research/$($p.slug).html">
  <meta property="og:site_name" content="Vial Vibes">
  <link rel="icon" type="image/png" href="../logo.png">
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <link rel="stylesheet" href="../css/site.css">
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"Organization","name":"Vial Vibes","legalName":"APEX Research, LLC","url":"$Domain","email":"research@vialvibes.com"}
  </script>
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"Article","headline":"$($p.short) Research Overview","dateModified":"$Reviewed","datePublished":"$Reviewed","author":{"@type":"Organization","name":"Vial Vibes research documentation team"},"publisher":{"@type":"Organization","name":"Vial Vibes"},"mainEntityOfPage":"$Domain/research/$($p.slug).html"}
  </script>
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"$Domain/"},{"@type":"ListItem","position":2,"name":"Research","item":"$Domain/research/"},{"@type":"ListItem","position":3,"name":"$($p.short)","item":"$Domain/research/$($p.slug).html"}]}
  </script>
</head>
<body class="bg-slate-50 text-slate-800 min-h-screen flex flex-col">
$nav
<main class="flex-1">
  <div class="hero-dark text-white py-14">
    <div class="max-w-screen-2xl mx-auto px-4 sm:px-8 relative z-10">
      <nav class="breadcrumb text-sm text-white/60 flex flex-wrap gap-2 mb-6"><a href="../index.html" class="hover:text-white">Home</a><span>/</span><a href="index.html" class="hover:text-white">Research</a><span>/</span><span class="text-white">$($p.short)</span></nav>
      <p class="text-emerald-400 text-xs font-semibold tracking-wider uppercase mb-2">Compound research overview</p>
      <h1 class="heading-font text-4xl sm:text-5xl font-semibold tracking-tighter">$($p.short)</h1>
      <p class="mt-4 text-lg text-white/80 max-w-3xl">$($p.name) - literature-framed laboratory reference</p>
    </div>
  </div>

  <div class="max-w-screen-2xl mx-auto px-4 sm:px-8 py-10 grid lg:grid-cols-12 gap-10">
    <aside class="lg:col-span-3 order-2 lg:order-1">
      <div class="lg:sticky lg:top-28 space-y-4">
        <div class="bg-white border border-slate-200 rounded-2xl p-5 toc-card">
          <div class="text-xs font-bold tracking-wider text-emerald-700 mb-2">ON THIS PAGE</div>
          <a href="#intro">Introduction</a>
          <a href="#chemistry">Chemistry</a>
          <a href="#history">Background</a>
          <a href="#areas">Research areas</a>
          <a href="#mechanisms">Mechanisms</a>
          <a href="#studies">Key literature</a>
          <a href="#limits">Limitations</a>
          <a href="#lab">Lab handling</a>
          <a href="#regulatory">Regulatory</a>
        </div>
        <div class="bg-slate-900 text-white rounded-2xl p-5 text-sm space-y-3">
          <a href="$($p.product)" class="block font-semibold text-emerald-300 hover:text-emerald-200">Product page</a>
          <a href="../coa.html?product=$($p.short)" class="block hover:text-emerald-300">Request lot CoA</a>
          <a href="../tools/peptide-calculator.html" class="block hover:text-emerald-300">Reconstitution calculator</a>
          <a href="how-to-read-a-coa.html" class="block hover:text-emerald-300">How to read a CoA</a>
          <a href="reconstitution-best-practices.html" class="block hover:text-emerald-300">Reconstitution guide</a>
          <a href="compare.html" class="block hover:text-emerald-300">Compare peptides</a>
        </div>
      </div>
    </aside>

    <article class="lg:col-span-9 order-1 lg:order-2 prose-research">
      <div class="meta-byline mb-8">
        <div><strong>Written by:</strong> Vial Vibes research documentation team</div>
        <div><strong>Scientifically reviewed by:</strong> [slot for future named reviewer]</div>
        <div><strong>Last reviewed:</strong> $Reviewed</div>
        <div class="mt-1"><a href="../about-scientific-content.html" class="text-emerald-700 underline">Content standards</a></div>
      </div>

      <section id="intro">
        <h2>Introduction</h2>
        <p>$($p.intro)</p>
      </section>

      <section id="chemistry">
        <h2>Chemical and structural summary</h2>
        <p>$($p.chem)</p>
        <table class="spec-table w-full bg-white border border-slate-200 rounded-2xl overflow-hidden text-sm my-4">
          <tbody>
            <tr><th>Catalog name</th><td>$($p.name)</td></tr>
            <tr><th>Category</th><td><a href="../peptides/$($p.catSlug).html">$($p.cat)</a></td></tr>
            <tr><th>CAS</th><td class="font-mono">$($p.cas)</td></tr>
            <tr><th>Molecular weight note</th><td>$($p.mw)</td></tr>
            <tr><th>Documentation</th><td>Lot-specific CoA available on request</td></tr>
          </tbody>
        </table>
        <p><a href="$($p.product)" class="font-semibold text-emerald-700">View product specifications and ordering</a></p>
      </section>

      <section id="history">
        <h2>Research history and background</h2>
        <p>$($p.history)</p>
      </section>

      <section id="areas">
        <h2>Areas investigated in laboratory and preclinical research</h2>
        <p>The following themes appear in peer-reviewed literature. Inclusion here means the topic has been studied or reviewed scientifically - not that catalog materials are validated for any endpoint.</p>
        <ul>
$areasHtml
        </ul>
      </section>

      <section id="mechanisms">
        <h2>Mechanisms discussed in the literature</h2>
        <p>$($p.mechanisms)</p>
      </section>

      <section id="studies">
        <h2>Key published studies and reviews</h2>
        <p>Prefer primary literature. Open links in a new tab. Always read full papers for methods and limitations.</p>
        <ol class="cite-list list-decimal pl-5 space-y-2">
$studiesHtml
        </ol>
      </section>

      <section id="limits">
        <h2>Known limitations and evidence gaps</h2>
        <p>$($p.limits)</p>
      </section>

      <section id="lab">
        <h2>Laboratory handling notes</h2>
        <p>General laboratory practice for lyophilized peptides includes cool, dry storage protected from moisture and light, careful reconstitution with appropriate research diluents, and documentation of lot numbers. See educational guides for process literacy - not product-specific validated stability claims.</p>
        <ul>
          <li><a href="storage-stability.html">Storage and stability of lyophilized peptides</a></li>
          <li><a href="reconstitution-best-practices.html">Reconstitution best practices for laboratory use</a></li>
          <li><a href="../tools/peptide-calculator.html">Reconstitution calculator</a> (concentration and aliquot volume math)</li>
          <li><a href="how-to-read-a-coa.html">How to read a Certificate of Analysis</a></li>
        </ul>
      </section>

      <section id="regulatory">
        <h2>Regulatory status note</h2>
        <p>Materials sold by Vial Vibes are <strong>Research Use Only</strong>. They are not intended for human consumption, clinical administration, or veterinary use, and are not sold as FDA-approved drugs. Where the scientific literature discusses approved medicines or investigational drug programs involving the same active structure class, those regulated products remain distinct from RUO research reagents. See <a href="research-use-only-explainer.html">Research Use Only - what it means</a> and the legal <a href="../research-use-only.html">RUO policy</a>.</p>
      </section>

      <div class="bg-amber-50 border border-amber-200 rounded-2xl p-5 text-sm text-amber-950 leading-relaxed mt-8">
        <strong>Scientific reference only - Research Use Only.</strong> Content prepared for laboratory professionals. Citations describe published research and do not constitute product claims, medical advice, or authorization for human use of research materials. Vial Vibes is operated by APEX Research, LLC.
      </div>

      <section class="mt-10">
        <h2>Related research pages</h2>
        <div class="flex flex-wrap gap-3 not-prose">
$relatedHtml
          <a href="index.html" class="px-4 py-2 border border-slate-200 rounded-xl text-sm font-semibold hover:border-emerald-400">Research Hub</a>
          <a href="glossary.html" class="px-4 py-2 border border-slate-200 rounded-xl text-sm font-semibold hover:border-emerald-400">Glossary</a>
        </div>
      </section>
    </article>
  </div>
</main>
$footer
</body>
</html>
"@
  $path = Join-Path $OutDir ($p.slug + '.html')
  [System.IO.File]::WriteAllText($path, $html)
  Write-Host "Wrote research/$($p.slug).html"
}

foreach ($page in $Pages) { Build-Page $page }
Write-Host 'Done generating compound research pages.'
