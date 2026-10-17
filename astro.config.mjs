import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://koative.github.io',
  base: '/openstore',
  output: 'static',
  trailingSlash: 'always',
});
