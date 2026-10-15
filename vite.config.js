import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';

// GitHub Pages serves the site from /cafeTemplate/. Change BASE if the repo name differs.
const BASE = '/cafeTemplate/';

export default defineConfig(({ command, isPreview }) => ({
  base: command === 'build' || isPreview ? BASE : '/',
  plugins: [
    react(),
    {
      // GitHub Pages has no SPA fallback: a copy of index.html as 404.html makes /books and /events load on refresh.
      name: 'copy-404',
      closeBundle() {
        const dist = path.resolve('dist');
        if (fs.existsSync(path.join(dist, 'index.html'))) fs.copyFileSync(path.join(dist, 'index.html'), path.join(dist, '404.html'));
      },
    },
  ],
}));
