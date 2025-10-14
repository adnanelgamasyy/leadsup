# Deployment Guide for Cloudflare Pages

This guide will help you deploy your CMS Vite app to Cloudflare Pages.

## Prerequisites

- A Cloudflare account (free tier works perfectly)
- Your code in a Git repository (GitHub, GitLab, or Bitbucket)
- Or, you can deploy directly using Wrangler CLI

## Method 1: Deploy via Cloudflare Dashboard (Recommended)

This is the easiest method and provides automatic deployments on every git push.

### Step 1: Push Your Code to Git

Make sure your code is pushed to a Git repository:

```bash
git init
git add .
git commit -m "Initial commit - CMS Vite App"
git remote add origin <your-repo-url>
git push -u origin main
```

### Step 2: Connect to Cloudflare Pages

1. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Go to **Workers & Pages**
3. Click **Create application**
4. Select the **Pages** tab
5. Click **Connect to Git**

### Step 3: Configure Your Project

1. **Select your repository** from the list
2. Click **Begin setup**
3. Configure build settings:
   - **Project name**: `cms-vite-app` (or your preferred name)
   - **Production branch**: `main`
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`

### Step 4: Deploy

1. Click **Save and Deploy**
2. Wait for the build to complete (usually 1-2 minutes)
3. Your site will be live at `https://cms-vite-app.pages.dev`

### Step 5: Custom Domain (Optional)

1. Go to your Pages project settings
2. Click **Custom domains**
3. Click **Set up a custom domain**
4. Follow the instructions to add your domain

## Method 2: Deploy via Wrangler CLI

This method is great for manual deployments or CI/CD pipelines.

### Step 1: Install Wrangler

```bash
npm install -g wrangler
```

Or use it with npx:

```bash
npx wrangler
```

### Step 2: Login to Cloudflare

```bash
wrangler login
```

This will open a browser window to authorize Wrangler.

### Step 3: Build Your Project

```bash
npm run build
```

### Step 4: Deploy

For the first deployment:

```bash
wrangler pages deploy dist --project-name=cms-vite-app
```

For subsequent deployments:

```bash
wrangler pages deploy dist
```

### Step 5: View Your Site

After deployment, Wrangler will provide a URL like:
```
https://cms-vite-app.pages.dev
```

## Method 3: Direct Upload via Dashboard

If you don't want to use Git:

1. Build your project locally: `npm run build`
2. Go to **Workers & Pages** → **Create application**
3. Select **Pages** → **Upload assets**
4. Drag and drop your `dist` folder
5. Click **Deploy site**

## Continuous Deployment

Once connected to Git via Method 1, Cloudflare Pages will automatically:

- Deploy on every push to your production branch
- Create preview deployments for pull requests
- Provide deployment logs and analytics

## Environment Variables

If you need environment variables in the future:

1. Go to your Pages project in Cloudflare Dashboard
2. Click **Settings** → **Environment variables**
3. Add variables for **Production** and/or **Preview** environments
4. Redeploy for changes to take effect

## Build Configuration

The project is already configured with:

- `vite.config.ts` - Vite build configuration
- `wrangler.toml` - Cloudflare Pages configuration
- `public/_redirects` - SPA routing support
- `tsconfig.json` - TypeScript configuration

## Troubleshooting

### Build fails with "command not found"

Make sure your build command in Cloudflare is exactly:
```
npm run build
```

### 404 errors on navigation

Ensure the `_redirects` file exists in your `public` folder:
```
/* /index.html 200
```

### localStorage not working

localStorage is client-side only and works automatically. If you experience issues:
- Clear your browser cache
- Check browser console for errors
- Ensure you're not in private/incognito mode

### TypeScript errors during build

Run locally first to catch errors:
```bash
npm run build
```

Fix any TypeScript errors before deploying.

## Performance Optimization

Cloudflare Pages automatically provides:

- ✅ Global CDN with 275+ data centers
- ✅ Automatic HTTPS
- ✅ HTTP/3 and IPv6 support
- ✅ DDoS protection
- ✅ Unlimited bandwidth (on free tier!)

## Monitoring

Access deployment analytics:

1. Go to your Pages project
2. Click **Analytics**
3. View:
   - Page views
   - Unique visitors
   - Response time
   - Status codes

## Rollback

To rollback to a previous deployment:

1. Go to your Pages project
2. Click **Deployments**
3. Find the deployment you want to rollback to
4. Click **···** → **Rollback to this deployment**

## Need Help?

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Vite Documentation](https://vitejs.dev/)
- [GitHub Issues](https://github.com/yourusername/cms-vite-app/issues)

---

Happy deploying! 🚀