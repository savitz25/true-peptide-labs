# True Peptide Labs

Premium research peptides website.

## Deployment to Vercel

This site is set up for easy deployment on Vercel.

### Steps to Deploy / Fix the GitHub Connection

1. Make sure your GitHub repository is named `true-peptide-labs` (or update the remote).

2. The production branch must be `main`.

3. In Vercel:
   - When importing the GitHub repo, set:
     - **Framework Preset**: Other (or None)
     - **Root Directory**: `.` (leave as root)
     - **Build Command**: (leave empty)
     - **Output Directory**: `.` (or leave default)
     - **Production Branch**: `main`

4. Common fix for "missing root branch" or branch errors:
   - Go to your GitHub repo → Settings → Branches
   - Make sure the default branch is set to `main`
   - If it's `master`, rename it to `main` in GitHub settings.

### Local Development

Double click `index.html` or serve it locally.

## Project Structure

- `index.html` - The full site (self-contained with Tailwind CDN)
- `vercel.json` - Configuration for Vercel static deployment

This was migrated from the original APEX Research template and rebranded for True Peptide Labs.

For a more advanced version (React etc.), let me know and we can upgrade the project.