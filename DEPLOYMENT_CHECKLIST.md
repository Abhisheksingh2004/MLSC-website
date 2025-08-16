# Deployment Checklist

## Pre-Deployment
- [ ] Code is tested locally
- [ ] Build works locally (`npm run build`)
- [ ] All dependencies are in `package.json`
- [ ] Code is committed to Git
- [ ] Repository is pushed to GitHub

## Render Setup
- [ ] GitHub repository connected to Render
- [ ] Service type set to "Static Site"
- [ ] Build command: `npm ci && npm run build`
- [ ] Publish directory: `dist`
- [ ] Auto-deploy enabled

## Post-Deployment
- [ ] Site loads correctly
- [ ] All routes work (SPA routing)
- [ ] Images and assets load
- [ ] Site is responsive on mobile
- [ ] Performance is acceptable

## Optional
- [ ] Custom domain configured
- [ ] Analytics setup (if required)
- [ ] SSL certificate verified
- [ ] SEO optimization checked
