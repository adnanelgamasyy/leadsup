import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import sitemap from 'vite-plugin-sitemap';
import { visualizer } from 'rollup-plugin-visualizer';

// Define all your routes for sitemap generation
const routes = [
  '/',
  '/about',
  '/services',
  '/services/cold-calling',
  '/services/data-generation',
  '/services/skip-tracing',
  '/services/market-research',
  '/services/acquisitions-dispositions',
  '/services/appointment-setting',
  '/industries',
  '/industries/real-estate-wholesalers',
  '/industries/fix-flip-investors',
  '/industries/buy-hold-investors',
  '/industries/real-estate-agents',
  '/industries/real-estate',
  '/industries/roofing',
  '/industries/solar',
  '/industries/medical-insurance',
  '/industries/automotive',
  '/pricing',
  '/contact',
  '/blog',
  // Add blog post URLs here as they are created
];

export default defineConfig({
  plugins: [
    react(),
    // Generate sitemap automatically during build
    sitemap({
      hostname: 'https://theleadsup.com',
      dynamicRoutes: routes,
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date().toISOString(),
      exclude: ['/dashboard'], // Exclude private routes
    }),
    // Bundle analyzer - generates stats.html after build
    visualizer({
      open: false,
      filename: 'dist/stats.html',
      gzipSize: true,
      brotliSize: true,
    }) as any,
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    // Optimize chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['framer-motion', 'lucide-react'],
        },
      },
    },
  },
});