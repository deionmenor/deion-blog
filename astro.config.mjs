// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://deionmenor.com',
  // The site is served from the domain root. If you ever move it back to
  // https://deionmenor.github.io/deion-blog/, set base: '/deion-blog'.
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
