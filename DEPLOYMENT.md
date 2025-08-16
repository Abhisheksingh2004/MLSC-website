# MLSC Website - Render Deployment Guide

This guide will help you deploy the MLSC website to Render.

## Prerequisites

- A GitHub account
- A Render account (free tier available)
- Your project code pushed to a GitHub repository

## Deployment Steps

### 1. Push Your Code to GitHub

1. Initialize a git repository (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. Push to GitHub:
   ```bash
   git remote add origin https://github.com/yourusername/mlsc-website.git
   git branch -M main
   git push -u origin main
   ```

### 2. Deploy on Render

#### Option A: Using render.yaml (Recommended)

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click "New" → "Blueprint"
3. Connect your GitHub repository
4. Render will automatically detect the `render.yaml` file
5. Click "Apply" to deploy

#### Option B: Manual Setup

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click "New" → "Static Site"
3. Connect your GitHub repository
4. Configure the following settings:
   - **Name**: `mlsc-website`
   - **Branch**: `main`
   - **Build Command**: `npm ci && npm run build`
   - **Publish Directory**: `dist`
   - **Auto Deploy**: Yes

### 3. Configuration Details

The deployment is configured with:
- **Build Command**: `npm ci && npm run build`
- **Output Directory**: `dist`
- **SPA Routing**: All routes redirect to `index.html`
- **Security Headers**: Added for better security
- **Asset Caching**: Optimized for static assets

### 4. Environment Variables

Currently, no environment variables are required for this project.

### 5. Custom Domain (Optional)

After deployment, you can:
1. Go to your service settings in Render
2. Navigate to "Custom Domains"
3. Add your custom domain
4. Update your DNS settings as instructed

## Build Configuration

The project uses Vite with the following optimizations:
- **Minifier**: esbuild (faster than terser)
- **Code Splitting**: Vendor and router chunks
- **Asset Optimization**: Images and other assets are optimized

## Troubleshooting

### Build Fails
- Check that all dependencies are listed in `package.json`
- Ensure Node.js version compatibility
- Review build logs in Render dashboard

### Site Not Loading
- Verify the publish directory is set to `dist`
- Check that the build command completes successfully
- Ensure routing is configured for SPA

### Performance Issues
- Assets are cached for 1 year
- Code is minified and split into chunks
- Consider enabling compression in Render settings

## File Structure for Deployment

```
MLSC-website/
├── render.yaml          # Render configuration
├── build.sh            # Build script (optional)
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
├── public/
│   ├── _redirects      # SPA routing rules
│   └── index.html      # Main HTML file
└── src/                # Source code
```

## Monitoring

Once deployed:
1. Monitor your site at the provided Render URL
2. Check the Render dashboard for deployment logs
3. Set up monitoring for uptime if needed

## Support

If you encounter issues:
1. Check Render documentation
2. Review build logs in the dashboard
3. Ensure your local build works with `npm run build`

Happy deploying! 🚀
