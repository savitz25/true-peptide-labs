# True Peptide Labs

Premium research peptides website for Vercel deployment.

## Vercel + GitHub Fix (The Issue You Mentioned)

The error about "missing root branch" or GitHub configuration usually means one of these:

1. The production branch in GitHub/Vercel is not set to `main`
2. No code has been pushed to the default branch yet
3. Root directory not set correctly in Vercel

### Steps to Fix and Deploy

**1. Push your code to GitHub (using the helper script)**

In PowerShell, from this folder:

```powershell
.\push-to-github.ps1
```

It will ask for your GitHub repo URL (e.g. `https://github.com/yourusername/true-peptide-labs.git`)

**Manual way:**

```powershell
git remote add origin https://github.com/YOUR_USERNAME/true-peptide-labs.git
git branch -M main
git push -u origin main
```

(Replace YOUR_USERNAME with your GitHub username)

**2. Fix in Vercel Dashboard**

- Go to your Vercel project → **Settings** → **Git**
- Set **Production Branch** to `main`
- Set **Root Directory** to `.` (the current folder / root)
- Framework: **Other** or leave blank
- Build Command: (leave empty)
- Output Directory: `.`

- Then click **Redeploy** on the latest deployment.

This should resolve the "missing root branch" error.

## How to Run Locally

- Double-click `index.html`
- Or run a local server: `python -m http.server 8080`

## Files

- `index.html` - Complete site (self-contained)
- `vercel.json` - Config for Vercel static hosting
- `push-to-github.ps1` - Helper to push code

Let me know if you want to upgrade this to a full React/Next.js app for more advanced features.