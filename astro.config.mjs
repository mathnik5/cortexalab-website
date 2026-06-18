import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Canonical company domain (already wired via CNAME → GitHub Pages).
const SITE = 'https://cortexalab.com';

export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  integrations: [sitemap()],
});
