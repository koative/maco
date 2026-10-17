import fs from 'node:fs';
import path from 'node:path';
import { basePath, site } from '../src/lib/site.ts';

const root = path.resolve('dist');
const base = basePath;
let pages = 0;
let links = 0;
const errors: string[] = [];

function inspect(directory: string) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) inspect(file);
    else if (/\.(?:html|xml)$/.test(file)) {
      if (file.endsWith('.html')) pages++;
      const html = fs.readFileSync(file, 'utf8');
      for (const match of html.matchAll(
        /\b(href|src|srcset)=(?:"([^"]*)"|'([^']*)')|<loc>([^<]*)<\/loc>/g,
      )) {
        const raw = match[2] ?? match[3] ?? match[4];
        const values =
          match[1] === 'srcset'
            ? raw
                .split(',')
                .map((candidate) => candidate.trim().split(/\s+/)[0])
            : [raw.trim()];
        for (let value of values) {
          // Canonical, Open Graph and sitemap URLs point at this site absolutely.
          if (value.startsWith(site.url))
            value = base + value.slice(site.url.length);
          if (value.startsWith('//')) continue;
          if (!value.startsWith(base)) {
            if (value.startsWith('/'))
              errors.push(
                `${file}: root-relative URL is outside site base: ${value}`,
              );
            continue;
          }
          let relative: string;
          try {
            relative = decodeURIComponent(
              value.slice(base.length).split(/[?#]/)[0],
            );
          } catch {
            errors.push(`${file}: malformed URL encoding: ${value}`);
            continue;
          }
          let target = path.resolve(root, relative);
          if (target !== root && !target.startsWith(`${root}${path.sep}`)) {
            errors.push(`${file}: link escapes output root: ${value}`);
            continue;
          }
          if (fs.existsSync(target) && fs.statSync(target).isDirectory())
            target = path.join(target, 'index.html');
          if (!fs.existsSync(target)) errors.push(`${file}: missing ${value}`);
          links++;
        }
      }
    }
  }
}
if (!fs.existsSync(root))
  throw new Error('Build the site before checking links: bun run build');
inspect(root);
if (!pages) throw new Error('No HTML pages found in dist');
if (!links)
  throw new Error('No internal links checked; verify the configured site base');
if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else
  console.log(
    `Checked ${links} internal links and assets across ${pages} pages.`,
  );
