import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://koative.github.io',
  base: '/openstore',
  output: 'static',
  devToolbar: { enabled: false },
  trailingSlash: 'always',
});
