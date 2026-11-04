// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://deionmenor.com',
  // The site is served from the domain root. If you ever move it back to
  // https://deionmenor.github.io/deion-blog/, set base: '/deion-blog'.
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  // The Harioo essay was published under its working title for a day. The new
  // slug follows the published title; the old one keeps resolving here.
  redirects: {
    '/writing/harioo-an-agent-for-people-who-will-never-read-a-log':
      '/writing/i-built-an-agent-to-scope-client-leads',
  },
});
