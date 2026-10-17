import { defineConfig } from 'astro/config';
import { realpathSync } from 'node:fs';
import { site, basePath } from './src/lib/site.ts';

export default defineConfig({
  site: new URL(site.url).origin,
  base: basePath,
  output: 'static',
  devToolbar: { enabled: false },
  trailingSlash: 'always',
  vite: {
    server: {
      fs: {
        // Bun's isolated linker stores font packages outside the workspace.
        allow: [
          '.',
          ...['manrope', 'dm-sans'].map((font) =>
            realpathSync(
              new URL(
                `./node_modules/@fontsource-variable/${font}`,
                import.meta.url,
              ),
            ),
          ),
        ],
      },
    },
  },
});
