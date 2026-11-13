import { defineConfig } from 'astro/config';

const site = process.env.SITE_URL || 'https://smdata.net';

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  }
});
