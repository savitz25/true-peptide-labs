# Apply VialVibes branding across static HTML (logos, favicons, visible brand strings).
# Preserves: emails (@vialvibes.com), APEX Research LLC legal, RUO substance.
# Usage: from repo root:  powershell -ExecutionPolicy Bypass -File scripts/apply-vialvibes-brand.ps1

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
if (-not (Test-Path (Join-Path $root 'index.html'))) {
  $root = Get-Location
}

$utf8NoBom = New-Object System.Text.UTF8Encoding $false
$htmlFiles = Get-ChildItem -Path $root -Filter '*.html' -Recurse -File |
  Where-Object { $_.FullName -notmatch '\\(\.git|node_modules)\\' }

$updated = [System.Collections.Generic.List[string]]::new()

foreach ($file in $htmlFiles) {
  $rel = $file.FullName.Substring($root.Length).TrimStart('\', '/')
  $depth = ([regex]::Matches($rel, '[\\/]')).Count
  $content = [System.IO.File]::ReadAllText($file.FullName)
  $original = $content

  if ($depth -eq 0) {
    $content = $content.Replace(
      '<link rel="icon" type="image/png" href="logo.png">',
      '<link rel="icon" type="image/svg+xml" href="assets/logo-vialvibes-mark.svg">'
    )
    $content = $content.Replace(
      '<link rel="apple-touch-icon" href="logo.png">',
      '<link rel="apple-touch-icon" href="assets/logo-vialvibes-mark.svg">'
    )
    $content = $content.Replace('src="logo.png"', 'src="assets/logo-vialvibes.svg"')
    $content = $content.Replace('href="logo.png"', 'href="assets/logo-vialvibes-mark.svg"')
  }
  else {
    $content = $content.Replace(
      '<link rel="icon" type="image/png" href="../logo.png">',
      '<link rel="icon" type="image/svg+xml" href="../assets/logo-vialvibes-mark.svg">'
    )
    $content = $content.Replace(
      '<link rel="apple-touch-icon" href="../logo.png">',
      '<link rel="apple-touch-icon" href="../assets/logo-vialvibes-mark.svg">'
    )
    $content = $content.Replace('src="../logo.png"', 'src="../assets/logo-vialvibes.svg"')
    $content = $content.Replace('href="../logo.png"', 'href="../assets/logo-vialvibes-mark.svg"')
  }

  # Visible brand → VialVibes (emails use vialvibes.com — unchanged)
  $content = $content.Replace('Vial Vibes', 'VialVibes')
  # Fix mojibake copyright if present
  $content = $content.Replace([char]0x00C2 + [char]0x00A9, [char]0x00A9)
  $content = $content.Replace('Â©', '©')

  if ($content -ne $original) {
    [System.IO.File]::WriteAllText($file.FullName, $content, $utf8NoBom)
    $updated.Add($rel)
  }
}

# products.js / cart.js brand strings
$jsTargets = @(
  (Join-Path $root 'js\products.js'),
  (Join-Path $root 'js\cart.js')
)
foreach ($js in $jsTargets) {
  if (-not (Test-Path $js)) { continue }
  $content = [System.IO.File]::ReadAllText($js)
  $original = $content
  $content = $content.Replace('Vial Vibes', 'VialVibes')
  if ($content -ne $original) {
    [System.IO.File]::WriteAllText($js, $content, $utf8NoBom)
    $updated.Add(($js.Substring($root.Length).TrimStart('\', '/')))
  }
}

Write-Host "Updated $($updated.Count) files:"
$updated | ForEach-Object { Write-Host "  $_" }
