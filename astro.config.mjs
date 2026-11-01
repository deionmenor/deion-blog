// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://deionmenor.github.io',
  // GitHub project pages are served from /<repo>/. If you later use a
  // custom domain, delete `base` and change `site` to that domain.
  base: '/deion-blog',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
