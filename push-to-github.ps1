# PowerShell script to push True Peptide Labs to GitHub

Write-Host "Setting up git remote and pushing to GitHub for true-peptide-labs..." -ForegroundColor Cyan

$repoUrl = Read-Host "Enter your GitHub repo URL (e.g. https://github.com/yourusername/true-peptide-labs.git)"

if (-not $repoUrl) {
    Write-Host "No URL provided. Exiting." -ForegroundColor Red
    exit
}

git remote remove origin 2>$null

git remote add origin $repoUrl

git branch -M main

Write-Host "Pushing to main branch..." -ForegroundColor Yellow

git push -u origin main

Write-Host "Done! If it asks for credentials, use your GitHub token or login." -ForegroundColor Green
Write-Host "Then go back to Vercel and redeploy." -ForegroundColor Green