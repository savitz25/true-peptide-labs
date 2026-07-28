# Phase 1 static page generator - ASCII only for PowerShell parsing
$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
Set-Location $Root

$Domain = "https://www.peptidetrue.com"
$Year = 2026

$Products = @(
  [ordered]@{
    id=1; slug='bpc-157'; name='BPC-157 Arginate'; shortName='BPC-157'; category='recovery'
    categorySlug='tissue-repair'; categoryLabel='Tissue and Repair Models'
    price=59; vialSize='5 mg'; form='Lyophilized powder'; cas='137525-51-0'
    molecularWeight='1419.5 g/mol (free peptide; salt form may vary)'
    sequence='Gly-Glu-Pro-Pro-Pro-Gly-Lys-Pro-Ala-Asp-Asp-Ala-Gly-Leu-Val (BPC-157 backbone; arginate salt form)'
    description='Synthetic pentadecapeptide supplied for laboratory research in angiogenesis, soft-tissue, and gut-barrier model systems.'
    details='BPC-157 Arginate is provided as a lyophilized research material for qualified laboratories. Published literature discusses this peptide sequence in experimental models of tissue response and GI barrier biology. Materials from True Peptide Labs are for controlled laboratory research use only - not for human or veterinary use.'
    researchFocus=@('Angiogenesis models','Soft-tissue research','GI barrier models')
  },
  [ordered]@{
    id=2; slug='tb-500'; name='TB-500 (Thymosin Beta-4 fragment)'; shortName='TB-500'; category='recovery'
    categorySlug='tissue-repair'; categoryLabel='Tissue and Repair Models'
    price=69; vialSize='5 mg'; form='Lyophilized powder'; cas='77591-33-4'
    molecularWeight='Approx. 4963 g/mol (full Tb4 reference; research fragment MW may differ - confirm on lot CoA)'
    sequence='Research fragment related to thymosin beta-4 / actin-sequestering peptide literature'
    description='Research peptide used in laboratory studies of cell migration, actin dynamics, and tissue remodeling models.'
    details='TB-500 is supplied for laboratory research only. Literature on thymosin beta-4-related sequences is referenced by researchers studying cell migration and inflammation pathways in model systems. Confirm identity and specifications on the lot Certificate of Analysis when available.'
    researchFocus=@('Cell migration models','Inflammation pathways','Tissue remodeling assays')
  },
  [ordered]@{
    id=3; slug='semaglutide'; name='Semaglutide'; shortName='Semaglutide'; category='metabolic'
    categorySlug='metabolic'; categoryLabel='Metabolic Research'
    price=129; vialSize='5 mg'; form='Lyophilized powder'; cas='910463-68-2'
    molecularWeight='4113.6 g/mol (reference)'
    sequence='GLP-1 receptor agonist peptide analog (research material)'
    description='Long-acting GLP-1 receptor agonist analog supplied for metabolic pathway and incretin-signaling research models.'
    details='Semaglutide research material is intended for laboratory investigation of GLP-1 receptor pathways and metabolic signaling in experimental systems. Not for human use. Use only in qualified research settings with appropriate institutional controls.'
    researchFocus=@('GLP-1 pathway research','Metabolic models','Incretin signaling')
  },
  [ordered]@{
    id=4; slug='tirzepatide'; name='Tirzepatide'; shortName='Tirzepatide'; category='metabolic'
    categorySlug='metabolic'; categoryLabel='Metabolic Research'
    price=149; vialSize='5 mg'; form='Lyophilized powder'; cas='2023788-19-2'
    molecularWeight='4813.5 g/mol (reference)'
    sequence='Dual GIP / GLP-1 receptor agonist peptide (research material)'
    description='Dual incretin-pathway research peptide for laboratory study of GIP and GLP-1 receptor signaling.'
    details='Tirzepatide is supplied strictly for research use in metabolic and dual-agonist pathway models. Specs are lot-dependent; request CoA documentation for analytical details. Not intended for human consumption or clinical use.'
    researchFocus=@('Dual agonist research','GIP/GLP-1 pathways','Metabolic model systems')
  },
  [ordered]@{
    id=5; slug='ipamorelin'; name='Ipamorelin'; shortName='Ipamorelin'; category='gh'
    categorySlug='growth-hormone'; categoryLabel='GH Axis Research'
    price=49; vialSize='5 mg'; form='Lyophilized powder'; cas='170851-70-4'
    molecularWeight='711.9 g/mol (reference)'
    sequence='Aib-His-D-2-Nal-D-Phe-Lys-NH2 (ghrelin receptor research peptide)'
    description='Selective ghrelin receptor (GHSR) agonist peptide for growth-hormone axis research models.'
    details='Ipamorelin is provided for laboratory research into GH secretagogue receptor signaling and related endocrine pathway models. Research use only - not for human or veterinary administration.'
    researchFocus=@('GHSR signaling','GH axis models','Secretagogue research')
  },
  [ordered]@{
    id=6; slug='cjc-1295'; name='CJC-1295 (no DAC)'; shortName='CJC-1295'; category='gh'
    categorySlug='growth-hormone'; categoryLabel='GH Axis Research'
    price=55; vialSize='2 mg'; form='Lyophilized powder'; cas='863288-34-0'
    molecularWeight='Approx. 3367 g/mol (no-DAC form; confirm lot CoA)'
    sequence='Modified GHRH (1-29) analog (research material; DAC not included)'
    description='GHRH analog research material for studies of GH-release pathway amplitude in experimental models.'
    details='CJC-1295 (no DAC) is supplied for laboratory research. Researchers studying GHRH analogs often pair literature discussion with other GH-axis research compounds. Confirm molecular identity on lot documentation when available.'
    researchFocus=@('GHRH analog research','GH pulse models','Axis pathway studies')
  },
  [ordered]@{
    id=7; slug='ghk-cu'; name='GHK-Cu Copper Peptide'; shortName='GHK-Cu'; category='cosmetic'
    categorySlug='cosmetic'; categoryLabel='Skin / ECM Research'
    price=45; vialSize='50 mg'; form='Lyophilized powder'; cas='89030-95-5'
    molecularWeight='Approx. 340-404 g/mol range reported for complex forms (confirm lot CoA)'
    sequence='Gly-His-Lys copper complex (research material)'
    description='Copper-binding tripeptide for laboratory research on collagen pathways, extracellular matrix, and oxidative-stress models.'
    details='GHK-Cu is provided for in vitro / laboratory research only. Published work discusses gene-expression and matrix-biology endpoints in experimental systems. Not for human cosmetic or clinical use when sold as research material from this catalog.'
    researchFocus=@('Collagen pathway models','ECM research','Oxidative stress assays')
  },
  [ordered]@{
    id=8; slug='retatrutide'; name='Retatrutide'; shortName='Retatrutide'; category='metabolic'
    categorySlug='metabolic'; categoryLabel='Metabolic Research'
    price=179; vialSize='5 mg'; form='Lyophilized powder'; cas='2381089-83-2'
    molecularWeight='Approx. 4731 g/mol (reference; confirm lot CoA)'
    sequence='Triple agonist research peptide (GLP-1 / GIP / glucagon pathway literature)'
    description='Investigational triple-agonist peptide for laboratory metabolic pathway research in model systems.'
    details='Retatrutide research material is intended for qualified laboratory use studying multi-receptor metabolic pathways described in the scientific literature. Strictly research use only - not for human use.'
    researchFocus=@('Triple agonist research','Metabolic pathway models','Preclinical literature compound')
  }
)

$Categories = @(
  [ordered]@{ slug='tissue-repair'; key='recovery'; name='Tissue and Repair Models'; description='Research peptides commonly discussed in soft-tissue, cell-migration, and barrier-biology model literature.' },
  [ordered]@{ slug='metabolic'; key='metabolic'; name='Metabolic Research'; description='Incretin and multi-agonist pathway materials for laboratory metabolic signaling studies.' },
  [ordered]@{ slug='growth-hormone'; key='gh'; name='GH Axis Research'; description='GH secretagogue and GHRH-analog research materials for endocrine pathway models.' },
  [ordered]@{ slug='cosmetic'; key='cosmetic'; name='Skin / ECM Research'; description='Peptides used in extracellular matrix, collagen pathway, and dermal biology research models.' }
)

function Escape-Html([string]$s) {
  if ($null -eq $s) { return '' }
  return (($s -replace '&','&amp;') -replace '<','&lt;' -replace '>','&gt;' -replace '"','&quot;')
}

function Get-Prefix([int]$depth) {
  if ($depth -le 0) { return '' }
  return ('../' * $depth)
}

function Get-OrgJsonLd {
@'
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "True Peptide Labs",
  "legalName": "APEX Research, LLC",
  "url": "https://www.peptidetrue.com",
  "email": "research@truepeptidelabs.com",
  "description": "Research-use-only peptide supplier for qualified laboratories.",
  "areaServed": "US"
}
'@
}

function Get-NavHtml([int]$depth, [string]$active = '') {
  $p = Get-Prefix $depth
  function LinkClass($key) {
    if ($active -eq $key) { return 'nav-link active text-emerald-700 font-semibold' }
    return 'nav-link text-slate-600'
  }
@"
<nav class="bg-white border-b border-slate-200 sticky top-0 z-50">
  <div class="max-w-screen-2xl mx-auto">
    <div class="px-4 sm:px-8 py-4 flex items-center justify-between gap-4">
      <a href="${p}index.html" class="flex items-center gap-x-2 shrink-0">
        <img src="${p}logo.png" alt="True Peptide Labs" class="h-12 sm:h-14 w-auto">
      </a>
      <div class="hidden lg:flex items-center gap-x-7 text-sm font-medium">
        <a href="${p}peptides/index.html" class="$(LinkClass 'peptides')">Peptides</a>
        <a href="${p}research/index.html" class="$(LinkClass 'research')">Research</a>
        <a href="${p}quality.html" class="$(LinkClass 'quality')">Quality</a>
        <div class="relative group">
          <button type="button" class="$(LinkClass 'tools') flex items-center gap-1">Tools <i class="fa-solid fa-chevron-down text-[10px]"></i></button>
          <div class="absolute left-0 top-full pt-2 hidden group-hover:block z-50">
            <div class="bg-white border border-slate-200 rounded-2xl shadow-lg py-2 min-w-[240px]">
              <a href="${p}tools/peptide-calculator.html" class="block px-4 py-2.5 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-800">Reconstitution Calculator</a>
              <a href="${p}tools/research-combination-builder.html" class="block px-4 py-2.5 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-800">Research Combination Builder</a>
            </div>
          </div>
        </div>
        <a href="${p}about.html" class="$(LinkClass 'about')">About</a>
        <a href="${p}contact.html" class="$(LinkClass 'contact')">Contact</a>
      </div>
      <div class="flex items-center gap-x-2 sm:gap-x-3">
        <a href="${p}cart.html" class="flex items-center gap-x-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 px-4 sm:px-5 h-11 rounded-2xl text-sm font-semibold relative">
          <i class="fa-solid fa-shopping-cart"></i>
          <span class="hidden sm:inline">Cart</span>
        </a>
        <button type="button" class="lg:hidden w-11 h-11 flex items-center justify-center text-slate-600" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')" aria-label="Open menu">
          <i class="fa-solid fa-bars text-xl"></i>
        </button>
      </div>
    </div>
  </div>
  <div id="mobile-menu" class="hidden lg:hidden border-t bg-white px-6 py-4 text-sm">
    <div class="flex flex-col gap-y-3">
      <a href="${p}peptides/index.html" class="py-1 text-slate-700 font-medium">Peptides</a>
      <a href="${p}peptides/tissue-repair.html" class="py-1 pl-3 text-slate-500">Tissue and Repair Models</a>
      <a href="${p}peptides/metabolic.html" class="py-1 pl-3 text-slate-500">Metabolic Research</a>
      <a href="${p}peptides/growth-hormone.html" class="py-1 pl-3 text-slate-500">GH Axis Research</a>
      <a href="${p}peptides/cosmetic.html" class="py-1 pl-3 text-slate-500">Skin / ECM Research</a>
      <a href="${p}research/index.html" class="py-1 text-slate-700 font-medium">Research Hub</a>
      <a href="${p}quality.html" class="py-1 text-slate-700 font-medium">Quality</a>
      <a href="${p}coa.html" class="py-1 text-slate-700 font-medium">CoA / Lot Lookup</a>
      <a href="${p}tools/peptide-calculator.html" class="py-1 text-slate-700 font-medium">Reconstitution Calculator</a>
      <a href="${p}tools/research-combination-builder.html" class="py-1 text-slate-700 font-medium">Research Combination Builder</a>
      <a href="${p}about.html" class="py-1 text-slate-700 font-medium">About</a>
      <a href="${p}contact.html" class="py-1 text-slate-700 font-medium">Contact</a>
      <a href="${p}cart.html" class="py-1 text-slate-700 font-medium">Cart</a>
    </div>
  </div>
</nav>
<div class="ruo-banner">
  <div class="max-w-screen-2xl mx-auto px-4 sm:px-8 py-2.5 text-center text-xs sm:text-sm">
    <strong>Research Use Only.</strong> Products are not for human consumption, clinical use, or veterinary administration.
    <a href="${p}research-use-only.html" class="underline font-semibold ml-1">RUO policy</a>
  </div>
</div>
"@
}

function Get-FooterHtml([int]$depth) {
  $p = Get-Prefix $depth
@"
<footer class="bg-slate-900 text-slate-400 text-sm mt-auto">
  <div class="max-w-screen-2xl mx-auto px-4 sm:px-8 pt-14 pb-9">
    <div class="flex flex-col md:flex-row justify-between gap-y-10">
      <div>
        <a href="${p}index.html" class="inline-flex items-center gap-x-2 text-white mb-4">
          <img src="${p}logo.png" alt="True Peptide Labs" class="h-12 w-auto">
        </a>
        <p class="text-xs max-w-xs">True Peptide Labs supplies research-use-only peptides for qualified laboratories. Operated by APEX Research, LLC.</p>
        <p class="text-xs mt-3"><a href="mailto:research@truepeptidelabs.com" class="hover:text-white">research@truepeptidelabs.com</a></p>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-8 text-xs">
        <div>
          <div class="font-semibold text-white tracking-wider mb-3">PEPTIDES</div>
          <div class="space-y-1.5">
            <a href="${p}peptides/index.html" class="block hover:text-white">All Peptides</a>
            <a href="${p}peptides/tissue-repair.html" class="block hover:text-white">Tissue and Repair</a>
            <a href="${p}peptides/metabolic.html" class="block hover:text-white">Metabolic</a>
            <a href="${p}peptides/growth-hormone.html" class="block hover:text-white">GH Axis</a>
            <a href="${p}peptides/cosmetic.html" class="block hover:text-white">Skin / ECM</a>
          </div>
        </div>
        <div>
          <div class="font-semibold text-white tracking-wider mb-3">RESOURCES</div>
          <div class="space-y-1.5">
            <a href="${p}research/index.html" class="block hover:text-white">Research Hub</a>
            <a href="${p}coa.html" class="block hover:text-white">Certificates of Analysis</a>
            <a href="${p}quality.html" class="block hover:text-white">Quality and Compliance</a>
            <a href="${p}tools/peptide-calculator.html" class="block hover:text-white">Reconstitution Calculator</a>
            <a href="${p}tools/research-combination-builder.html" class="block hover:text-white">Combination Builder</a>
          </div>
        </div>
        <div>
          <div class="font-semibold text-white tracking-wider mb-3">COMPANY</div>
          <div class="space-y-1.5">
            <a href="${p}about.html" class="block hover:text-white">About Us</a>
            <a href="${p}contact.html" class="block hover:text-white">Contact</a>
            <a href="${p}careers.html" class="block hover:text-white">Careers</a>
            <a href="${p}publications.html" class="block hover:text-white">Publications</a>
            <a href="${p}research-grants.html" class="block hover:text-white">Research Grants</a>
          </div>
        </div>
        <div>
          <div class="font-semibold text-white tracking-wider mb-3">LEGAL</div>
          <div class="space-y-1.5">
            <a href="${p}terms.html" class="block hover:text-white">Terms of Sale</a>
            <a href="${p}privacy.html" class="block hover:text-white">Privacy Policy</a>
            <a href="${p}research-use-only.html" class="block hover:text-white">Research Use Only</a>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-12 pt-8 border-t border-white/10">
      <div class="disclaimer bg-slate-950 border border-white/10 rounded-2xl p-5 text-[11.5px] leading-relaxed">
        <strong class="text-white">IMPORTANT DISCLAIMER:</strong> All products sold by True Peptide Labs (operated by APEX Research, LLC) are intended <span class="text-red-400 font-semibold">strictly for in vitro laboratory research purposes only</span>. They are not approved by the FDA for human use, are not drugs, and are not intended to diagnose, treat, cure, or prevent any disease. These products are not for human consumption, injection, or any form of bodily introduction. By purchasing you certify you are a qualified researcher, institution, or laboratory professional. Misuse may be illegal. All sales are final.
        <a href="${p}research-use-only.html" class="underline text-emerald-400">Full RUO policy</a>.
      </div>
      <div class="text-center mt-8 text-[10px] tracking-wider">© $Year True Peptide Labs, operated by APEX Research, LLC. All rights reserved.</div>
    </div>
  </div>
</footer>
"@
}

function Get-Head($title, $desc, $canonical, $depth, $extraHead = '') {
  $t = Escape-Html $title
  $d = Escape-Html $desc
  $c = Escape-Html $canonical
  $p = Get-Prefix $depth
  $org = Get-OrgJsonLd
@"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>$t</title>
  <meta name="description" content="$d">
  <link rel="canonical" href="$c">
  <meta property="og:title" content="$t">
  <meta property="og:description" content="$d">
  <meta property="og:type" content="website">
  <meta property="og:url" content="$c">
  <meta property="og:site_name" content="True Peptide Labs">
  <meta name="twitter:card" content="summary">
  <link rel="icon" type="image/png" href="${p}logo.png">
  <link rel="apple-touch-icon" href="${p}logo.png">
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <link rel="stylesheet" href="${p}css/site.css">
  <script type="application/ld+json">
$org
  </script>
$extraHead
</head>
<body class="bg-slate-50 text-slate-800 min-h-screen flex flex-col">
"@
}

function Product-CardHtml($prod, [int]$depth) {
  $p = Get-Prefix $depth
  $name = Escape-Html $prod.name
  $desc = Escape-Html $prod.description
  $cat = Escape-Html $prod.categoryLabel
@"
<article class="peptide-card bg-white border border-slate-100 rounded-3xl overflow-hidden flex flex-col">
  <div class="product-img h-36 flex items-center justify-center relative">
    <i class="fa-solid fa-flask text-white text-4xl opacity-90"></i>
    <div class="absolute top-4 right-4 text-[10px] bg-white/90 text-slate-700 font-mono px-2.5 py-0.5 rounded-full">$(Escape-Html $prod.vialSize)</div>
    <div class="absolute bottom-4 left-4 text-emerald-300 text-[10px] font-bold tracking-widest px-2 py-0.5 bg-black/30 backdrop-blur rounded">CoA on request</div>
  </div>
  <div class="p-5 flex-1 flex flex-col">
    <div class="uppercase tracking-widest text-[10px] text-emerald-700 font-bold">$cat</div>
    <h3 class="font-semibold text-xl tracking-tight mt-1 leading-tight">
      <a href="${p}peptides/$($prod.slug).html" class="hover:text-emerald-700">$name</a>
    </h3>
    <p class="text-sm text-slate-600 mt-2 line-clamp-2">$desc</p>
    <div class="mt-auto pt-5 flex items-end justify-between gap-3">
      <div class="text-3xl font-semibold tracking-tighter price">`$$($prod.price)</div>
      <a href="${p}peptides/$($prod.slug).html" class="text-sm font-semibold px-4 py-2.5 bg-slate-900 hover:bg-black text-white rounded-2xl">View</a>
    </div>
  </div>
</article>
"@
}

New-Item -ItemType Directory -Force -Path (Join-Path $Root 'peptides') | Out-Null

foreach ($prod in $Products) {
  $related = @($Products | Where-Object { $_.categorySlug -eq $prod.categorySlug -and $_.slug -ne $prod.slug } | Select-Object -First 3)
  $relatedHtml = if ($related.Count -gt 0) { ($related | ForEach-Object { Product-CardHtml $_ 1 }) -join "`n" } else { '' }
  $focus = ($prod.researchFocus | ForEach-Object { '<span class="px-3 py-1 bg-emerald-50 text-emerald-800 rounded-full text-sm">' + (Escape-Html $_) + '</span>' }) -join "`n"
  $pname = Escape-Html $prod.name
  $pdesc = Escape-Html $prod.description
  $pcat = Escape-Html $prod.categoryLabel
  $pshort = Escape-Html $prod.shortName
  $productJson = @"
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "$pname",
  "description": "$pdesc",
  "sku": "TPL-$($prod.slug.ToUpper())",
  "brand": { "@type": "Brand", "name": "True Peptide Labs" },
  "category": "$pcat",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": "$($prod.price)",
    "availability": "https://schema.org/InStock",
    "url": "$Domain/peptides/$($prod.slug).html"
  }
}
"@
  $breadcrumbJson = @"
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "$Domain/" },
    { "@type": "ListItem", "position": 2, "name": "Peptides", "item": "$Domain/peptides/" },
    { "@type": "ListItem", "position": 3, "name": "$pcat", "item": "$Domain/peptides/$($prod.categorySlug).html" },
    { "@type": "ListItem", "position": 4, "name": "$pshort", "item": "$Domain/peptides/$($prod.slug).html" }
  ]
}
"@
  $extra = @"
  <script type="application/ld+json">
$productJson
  </script>
  <script type="application/ld+json">
$breadcrumbJson
  </script>
"@
  $head = Get-Head "$($prod.shortName) Research Peptide | True Peptide Labs" "$($prod.name) for laboratory research. $($prod.vialSize) lyophilized. Lot CoA on request. Research use only." "$Domain/peptides/$($prod.slug).html" 1 $extra
  $nav = Get-NavHtml 1 'peptides'
  $footer = Get-FooterHtml 1
  $html = @"
$head
$nav
<main class="flex-1">
  <div class="max-w-screen-2xl mx-auto px-4 sm:px-8 py-6">
    <nav class="breadcrumb text-sm text-slate-500 flex flex-wrap gap-2 items-center" aria-label="Breadcrumb">
      <a href="../index.html">Home</a><span>/</span>
      <a href="index.html">Peptides</a><span>/</span>
      <a href="$($prod.categorySlug).html">$pcat</a><span>/</span>
      <span class="text-slate-800">$pshort</span>
    </nav>
  </div>
  <section class="max-w-screen-2xl mx-auto px-4 sm:px-8 pb-16">
    <div class="grid lg:grid-cols-12 gap-10">
      <div class="lg:col-span-5">
        <div class="product-img rounded-3xl h-72 sm:h-96 flex items-center justify-center border border-slate-800">
          <div class="text-center text-white">
            <i class="fa-solid fa-flask text-6xl text-emerald-400 mb-4"></i>
            <div class="font-mono text-sm text-white/70">$(Escape-Html $prod.vialSize) - Research material</div>
          </div>
        </div>
      </div>
      <div class="lg:col-span-7">
        <div class="uppercase tracking-[2px] text-xs font-semibold text-emerald-600 mb-2">$pcat</div>
        <h1 class="heading-font text-4xl sm:text-5xl font-semibold tracking-tighter text-slate-900">$pname</h1>
        <p class="mt-4 text-lg text-slate-600 leading-relaxed">$pdesc</p>
        <div class="mt-6 flex flex-wrap items-end gap-6">
          <div>
            <div class="text-xs text-slate-500 uppercase tracking-wider font-semibold">Research price</div>
            <div class="text-4xl font-semibold tracking-tighter price">`$$($prod.price)</div>
          </div>
          <div class="text-sm text-slate-500">$(Escape-Html $prod.vialSize) vial - $(Escape-Html $prod.form)</div>
        </div>
        <div class="mt-8 flex flex-wrap gap-3">
          <button type="button" onclick="tplAddToCart('$($prod.slug)')" class="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-2xl inline-flex items-center gap-2">
            <i class="fa-solid fa-cart-plus"></i> Add to research cart
          </button>
          <a href="../coa.html?product=$pshort" class="px-6 py-3.5 border border-slate-200 hover:bg-white font-semibold rounded-2xl inline-flex items-center gap-2">
            <i class="fa-solid fa-file-lines"></i> Request lot CoA
          </a>
          <a href="mailto:research@truepeptidelabs.com?subject=CoA%20request%20-%20$pshort" class="px-6 py-3.5 border border-slate-200 hover:bg-white font-semibold rounded-2xl text-sm">Email research@</a>
        </div>
        <div class="mt-6 bg-amber-50 border border-amber-200 rounded-2xl p-4 text-sm text-amber-950 leading-relaxed">
          <strong>Research Use Only.</strong> This material is not for human consumption, injection, clinical use, or veterinary administration. Sold only to qualified researchers and institutions.
          <a href="../research-use-only.html" class="underline font-semibold">RUO policy</a>.
        </div>
      </div>
    </div>
    <div class="grid lg:grid-cols-2 gap-8 mt-14">
      <div class="bg-white border border-slate-200 rounded-3xl overflow-hidden">
        <div class="px-6 py-4 border-b border-slate-100 font-semibold">Specifications</div>
        <table class="spec-table w-full">
          <tbody>
            <tr><th>Size</th><td>$(Escape-Html $prod.vialSize)</td></tr>
            <tr><th>Form</th><td>$(Escape-Html $prod.form)</td></tr>
            <tr><th>Purity / documentation</th><td>Lot-specific Certificate of Analysis available on request</td></tr>
            <tr><th>CAS</th><td>$(Escape-Html $prod.cas)</td></tr>
            <tr><th>Molecular weight</th><td>$(Escape-Html $prod.molecularWeight)</td></tr>
            <tr><th>Sequence / identity</th><td>$(Escape-Html $prod.sequence)</td></tr>
            <tr><th>Intended use</th><td>In vitro laboratory research only (RUO)</td></tr>
          </tbody>
        </table>
      </div>
      <div class="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8">
        <h2 class="heading-font text-2xl mb-4">Research context</h2>
        <p class="text-slate-600 leading-relaxed mb-6">$(Escape-Html $prod.details)</p>
        <div class="uppercase text-xs font-bold tracking-widest text-emerald-700 mb-3">Research focus areas</div>
        <div class="flex flex-wrap gap-2">$focus</div>
        <p class="mt-6 text-sm text-slate-500">Content is for scientific reference only and does not constitute medical advice or instructions for human use.</p>
      </div>
    </div>
    <div class="mt-14">
      <h2 class="heading-font text-3xl mb-6">Related research materials</h2>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        $relatedHtml
      </div>
      <div class="mt-6">
        <a href="$($prod.categorySlug).html" class="text-emerald-700 font-semibold hover:underline">Browse $pcat</a>
      </div>
    </div>
  </section>
</main>
$footer
<script src="../js/products.js"></script>
<script src="../js/cart.js"></script>
</body>
</html>
"@
  $outPath = Join-Path $Root ("peptides\" + $prod.slug + ".html")
  [System.IO.File]::WriteAllText($outPath, $html)
  Write-Host "Wrote peptides/$($prod.slug).html"
}

# Catalog index
$allCards = ($Products | ForEach-Object { Product-CardHtml $_ 1 }) -join "`n"
$catLinks = ($Categories | ForEach-Object {
@"
<a href="$($_.slug).html" class="block bg-white border border-slate-200 rounded-2xl p-5 hover:border-emerald-400 hover:shadow-md transition">
  <div class="font-semibold text-lg">$(Escape-Html $_.name)</div>
  <p class="text-sm text-slate-500 mt-1">$(Escape-Html $_.description)</p>
</a>
"@
}) -join "`n"

$head = Get-Head 'Research Peptides Catalog | True Peptide Labs' 'Browse research-use-only peptides for qualified laboratories. Tissue, metabolic, GH axis, and ECM research materials. Lot CoA on request.' "$Domain/peptides/" 1
$nav = Get-NavHtml 1 'peptides'
$footer = Get-FooterHtml 1
$catalog = @"
$head
$nav
<main class="flex-1">
  <div class="hero-dark text-white py-14 sm:py-16">
    <div class="max-w-screen-2xl mx-auto px-4 sm:px-8 relative z-10">
      <nav class="breadcrumb text-sm text-white/60 flex gap-2 mb-6"><a href="../index.html" class="hover:text-white">Home</a><span>/</span><span class="text-white">Peptides</span></nav>
      <h1 class="heading-font text-4xl sm:text-6xl font-semibold tracking-tighter">Research peptide catalog</h1>
      <p class="mt-4 text-lg text-white/80 max-w-2xl">Lyophilized research materials for qualified laboratories. Documentation by lot on request. Strictly research use only.</p>
    </div>
  </div>
  <div class="max-w-screen-2xl mx-auto px-4 sm:px-8 py-12">
    <h2 class="heading-font text-2xl mb-5">Categories</h2>
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">$catLinks</div>
    <div class="flex items-end justify-between mb-6">
      <h2 class="heading-font text-3xl">All peptides</h2>
      <span class="text-sm text-slate-500">$($Products.Count) research materials</span>
    </div>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">$allCards</div>
  </div>
</main>
$footer
</body>
</html>
"@
[System.IO.File]::WriteAllText((Join-Path $Root 'peptides\index.html'), $catalog)
Write-Host 'Wrote peptides/index.html'

foreach ($cat in $Categories) {
  $list = @($Products | Where-Object { $_.categorySlug -eq $cat.slug })
  $cards = ($list | ForEach-Object { Product-CardHtml $_ 1 }) -join "`n"
  $head = Get-Head ($cat.name + ' Peptides | True Peptide Labs') ($cat.name + ': research-use-only peptides for laboratory models. ' + $cat.description) "$Domain/peptides/$($cat.slug).html" 1
  $nav = Get-NavHtml 1 'peptides'
  $footer = Get-FooterHtml 1
  $cname = Escape-Html $cat.name
  $cdesc = Escape-Html $cat.description
  $page = @"
$head
$nav
<main class="flex-1">
  <div class="hero-dark text-white py-14">
    <div class="max-w-screen-2xl mx-auto px-4 sm:px-8 relative z-10">
      <nav class="breadcrumb text-sm text-white/60 flex flex-wrap gap-2 mb-6">
        <a href="../index.html" class="hover:text-white">Home</a><span>/</span>
        <a href="index.html" class="hover:text-white">Peptides</a><span>/</span>
        <span class="text-white">$cname</span>
      </nav>
      <h1 class="heading-font text-4xl sm:text-5xl font-semibold tracking-tighter">$cname</h1>
      <p class="mt-4 text-lg text-white/80 max-w-2xl">$cdesc</p>
    </div>
  </div>
  <div class="max-w-screen-2xl mx-auto px-4 sm:px-8 py-12">
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">$cards</div>
    <div class="mt-10"><a href="index.html" class="text-emerald-700 font-semibold hover:underline">Full catalog</a></div>
  </div>
</main>
$footer
</body>
</html>
"@
  [System.IO.File]::WriteAllText((Join-Path $Root ("peptides\" + $cat.slug + ".html")), $page)
  Write-Host "Wrote peptides/$($cat.slug).html"
}

Write-Host 'Phase 1 peptide generation complete.'
