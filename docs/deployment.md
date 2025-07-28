# GitHub Pages Deployment Setup

## Overview
This repository is configured to automatically deploy to GitHub Pages on every push to the main branch.

## Domain Configuration
- **Domain**: okoholding.com
- **Registration**: Managed at Route 53
- **Hosting**: GitHub Pages
- **Name Servers**: AWS Route 53

## DNS Setup Required
To connect your custom domain `okoholding.com` to GitHub Pages:

1. **In your AWS Route 53 console:**
   - Create/Update A records pointing to GitHub Pages IPs:
     - `185.199.108.153`
     - `185.199.109.153` 
     - `185.199.110.153`
     - `185.199.111.153`
   - Create a CNAME record for `www` pointing to `thunderblok.github.io`

2. **In GitHub Repository Settings:**
   - Go to Settings > Pages
   - Set Source to "Deploy from a branch"
   - Select branch: `main` and folder: `/ (root)`
   - Add custom domain: `okoholding.com`
   - Enable "Enforce HTTPS"

## Deployment Process
1. Push to main branch
2. GitHub Actions builds the Next.js app
3. Static files are deployed to GitHub Pages
4. Site becomes available at `https://okoholding.com`

## Build Configuration
- Next.js configured for static export
- Images optimized for static hosting
- Trailing slashes enabled for GitHub Pages compatibility

## Monitoring
- Check GitHub Actions tab for build status
- Deployment typically completes in 2-3 minutes
- DNS propagation may take up to 24 hours for initial setup
