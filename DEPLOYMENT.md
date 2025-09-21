# Netlify Deployment Guide

## Quick Deploy to Netlify

### Option 1: Deploy from GitHub (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Portfolio ready for deployment"
   git push origin main
   ```

2. **Connect to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Choose GitHub and select your repository
   - Use these build settings:
     - **Build command:** `npm run build`
     - **Publish directory:** `out`
     - **Node version:** 18

3. **Deploy:**
   - Click "Deploy site"
   - Netlify will automatically build and deploy your site

### Option 2: Manual Deploy

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `out` folder to the deploy area

## Configuration Files

The following files are already configured for Netlify:

- `netlify.toml` - Netlify configuration
- `next.config.js` - Next.js static export configuration
- `public/_redirects` - SPA routing redirects

## Environment Variables

If you need to add environment variables in Netlify:

1. Go to Site settings > Environment variables
2. Add any required variables

## Custom Domain

To add a custom domain:

1. Go to Site settings > Domain management
2. Add your custom domain
3. Update DNS records as instructed

## Build Settings

- **Build command:** `npm run build`
- **Publish directory:** `out`
- **Node version:** 18

## Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Ensure Node.js version is 18 or higher
- Check build logs in Netlify dashboard

### 404 Errors
- The `_redirects` file should handle SPA routing
- Check that `netlify.toml` is properly configured

### Performance Issues
- Images are unoptimized for static export
- Consider using Netlify's image optimization features

## Post-Deployment

1. **Update metadata:** Change the `metadataBase` URL in `app/layout.tsx` to your actual Netlify URL
2. **Test all links:** Ensure all contact links and navigation work
3. **Check mobile responsiveness:** Test on various devices
4. **SEO:** Verify meta tags and Open Graph data

## Continuous Deployment

Once connected to GitHub, Netlify will automatically deploy when you push changes to your main branch.
