// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  // GitHub Pages user site, served at the domain root: https://ary22-gif.github.io/
  site: 'https://ary22-gif.github.io',
  base: '/',
  integrations: [react()],
  devToolbar: { enabled: false },
});
