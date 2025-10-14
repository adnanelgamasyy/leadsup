# Cloudflare Pages Deployment Guide

## 🚀 Quick Start - Deploy to Cloudflare Pages

### Prerequisites
- A Cloudflare account (free tier works fine)
- Your project pushed to a Git repository (GitHub, GitLab, or Bitbucket)

### Deployment Steps

#### 1. Connect Your Repository

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Workers & Pages** in the left sidebar
3. Click **Create application** → **Pages** → **Connect to Git**
4. Select your Git provider and authorize Cloudflare
5. Choose the repository: `the-leads-up-marketing-site`

#### 2. Configure Build Settings

Set the following build configuration:

```
Production branch: main
Build command: npm run build
Build output directory: dist
Root directory: /
Node version: 18 or higher
```

**Framework preset:** Vite

#### 3. Environment Variables (if needed)

No environment variables are required for this static site.

#### 4. Deploy

Click **Save and Deploy**

Cloudflare will:
- Install dependencies
- Run the build command
- Deploy to their global CDN
- Provide you with a `.pages.dev` URL

### Build Configuration Details

#### Build Command
```bash
npm run build
```

This runs:
1. TypeScript compilation (`tsc`)
2. Vite build process
3. Outputs to `dist` directory

#### Output Directory
```
dist/
```

All compiled assets will be in the `dist` folder after build.

### Custom Domain Setup

1. In your Cloudflare Pages project, go to **Custom domains**
2. Click **Set up a custom domain**
3. Enter your domain name
4. Cloudflare will automatically configure DNS if your domain is on Cloudflare
5. SSL/TLS is automatically enabled

### SPA Routing

The `public/_redirects` file ensures proper routing:

```
/*    /index.html   200
```

This tells Cloudflare to serve `index.html` for all routes, allowing React Router to handle navigation.

### Performance Optimizations

Cloudflare Pages automatically provides:
- ✅ Global CDN distribution
- ✅ HTTP/2 and HTTP/3 support
- ✅ Automatic SSL/TLS certificates
- ✅ DDoS protection
- ✅ Built-in analytics
- ✅ Brotli compression
- ✅ Image optimization

### Build Times

Expected build time: **1-3 minutes**

### Deployment URL

After deployment, your site will be available at:
```
https://your-project-name.pages.dev
```

### Continuous Deployment

Every push to your `main` branch will automatically trigger a new deployment.

Preview deployments are created for pull requests.

### Rollback

To rollback to a previous version:
1. Go to your Pages project
2. Click **Deployments**
3. Find the deployment you want to rollback to
4. Click **...** → **Rollback to this deployment**

### Troubleshooting

#### Build Fails

**Error: Node version too old**
```
Solution: Set Node.js version to 18 or higher in build settings
```

**Error: Command not found**
```
Solution: Ensure package.json has correct scripts
```

#### Routing Issues

**404 on refresh**
```
Solution: Ensure public/_redirects file exists and is deployed
```

#### Slow Build

```
Solution: 
- Clear build cache in Cloudflare dashboard
- Check for large dependencies in package.json
```

### Local Preview of Production Build

Test the production build locally before deploying:

```bash
# Build the project
npm run build

# Preview the build
npm run preview
```

This will serve the built files from `dist/` directory on `http://localhost:4173`

### File Structure After Build

```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [other assets]
├── _redirects (from public/)
└── [other static files]
```

### Analytics

Enable Cloudflare Web Analytics:
1. Go to your Pages project
2. Navigate to **Analytics**
3. Enable **Web Analytics**
4. Add the analytics script (automatic for Pages)

### Security Headers (Optional)

Create `public/_headers` file for additional security:

```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
```

### Cache Control

Cloudflare automatically handles caching optimally for Vite builds.

Assets with hashes are cached for 1 year:
```
/assets/index-abc123.js  →  Cache: 1 year
```

HTML files are cached minimally:
```
/index.html  →  Cache: short TTL
```

### Support

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Cloudflare Community](https://community.cloudflare.com/)

### Cost

Cloudflare Pages is **FREE** for:
- Unlimited sites
- Unlimited requests
- Unlimited bandwidth
- 500 builds per month

---

## 🎉 That's it! Your site is now live on Cloudflare Pages!

**Sample deployment URL:** `https://the-leads-up.pages.dev`

