# True Peptide Labs

Premium research peptides site, deployed on Vercel.

## Current Status

The site is a self-contained static HTML (index.html) using Tailwind via CDN.

## Vercel Deployment Fix (DEPLOYMENT_NOT_FOUND / Missing Branch)

This error usually happens for one of these reasons:

1. **Wrong Production Branch** in Vercel (most common)
2. Root Directory set incorrectly
3. Framework detection trying to build a non-existent app

### Step-by-step Fix

**1. Push the latest code to GitHub**

Run this in PowerShell from the project folder:

```powershell
cd "C:\Users\Michael.Savitsky\true-peptide-labs"
.\push-to-github.ps1
```

When asked, paste your full GitHub repo URL (example: `https://github.com/yourname/true-peptide-labs.git`)

**Manual commands (if script doesn't work):**

```powershell
cd "C:\Users\Michael.Savitsky\true-peptide-labs"
git remote add origin https://github.com/YOUR_USERNAME/true-peptide-labs.git
git branch -M main
git push -u origin main
```

**2. Fix Vercel Project Settings**

Go to your Vercel dashboard → true-peptide-labs project → **Settings** (top tab) → **Git**

Set these values:

- **Production Branch**: `main`   ← Very important
- **Root Directory**: `.`        ← Leave as root / dot
- **Framework Preset**: **Other** (or None)
- **Build Command**: (leave completely empty)
- **Output Directory**: `.`      ← Very important for static HTML

Scroll down and click **Save**.

**3. Redeploy**

- Go back to the **Deployments** tab
- Find the latest deployment
- Click the three dots → **Redeploy**

This should fix the 404 / DEPLOYMENT_NOT_FOUND.

### After Deployment Works

The site should load at https://true-peptide-labs.vercel.app

If you still get issues, take a screenshot of your Vercel **Git** settings page and share it.

## Local Testing

Just open `index.html` in your browser.

## Want to Upgrade?

This is currently the old static version. If you want a more advanced version (React + proper routing, admin panel, real backend, etc.), tell me and I can rebuild it as a Next.js or Vite project.