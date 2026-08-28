import tailwindcss from '@tailwindcss/postcss';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig, type Plugin } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function mediaPlugin(): Plugin {
  const sourceDir = path.resolve(__dirname, 'source-images');
  const mimeTypes: Record<string, string> = {
    '.webp': 'image/webp',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.avif': 'image/avif',
    '.ico': 'image/x-icon',
  };

  return {
    name: 'media-plugin',
    configureServer(server) {
      server.middlewares.use('/media', (req, res, next) => {
        const relativePath = decodeURIComponent(req.url || '').replace(/^\//, '');
        const filePath = path.join(sourceDir, relativePath);

        if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
          const ext = path.extname(filePath).toLowerCase();
          res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream');
          res.setHeader('Cache-Control', 'public, max-age=3600');
          fs.createReadStream(filePath).pipe(res);
          return;
        }
        next();
      });
    },
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist');
      const distMediaDir = path.join(distDir, 'media');

      if (fs.existsSync(sourceDir) && fs.existsSync(distDir)) {
        fs.mkdirSync(distMediaDir, { recursive: true });
        fs.cpSync(sourceDir, distMediaDir, { recursive: true });
      }

      // Generate 404.html for GitHub Pages / static host SPA fallback
      const indexPath = path.join(distDir, 'index.html');
      const notFoundPath = path.join(distDir, '404.html');
      if (fs.existsSync(indexPath) && !fs.existsSync(notFoundPath)) {
        fs.copyFileSync(indexPath, notFoundPath);
      }
    },
  };
}

export default defineConfig({
  base: process.env.PAGES_BASE_PATH || '/',
  plugins: [
    react(),
    mediaPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});

