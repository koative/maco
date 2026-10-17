import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('dist');
const base = '/openstore/';
let pages = 0;
let links = 0;
const errors: string[] = [];

function inspect(directory: string) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) inspect(file);
    else if (file.endsWith('.html')) {
      pages++;
      const html = fs.readFileSync(file, 'utf8');
      for (const match of html.matchAll(/(?:href|src)="([^"\s]+)"/g)) {
        const value = match[1];
        if (!value.startsWith(base)) continue;
        const relative = decodeURIComponent(
          value.slice(base.length).split(/[?#]/)[0],
        );
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
if (!fs.existsSync(root))
  throw new Error('Build the site before checking links: npm run build');
inspect(root);
if (!pages) throw new Error('No HTML pages found in dist');
if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else
  console.log(
    `Checked ${links} internal links and assets across ${pages} pages.`,
  );
