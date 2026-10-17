import fs from 'node:fs';
import path from 'node:path';
import { site } from '../src/lib/site.ts';
import {
  categories,
  getApps,
  catalogDirectory,
  type CatalogApp,
} from '../src/lib/catalog.ts';

const START = '<!-- catalog:start -->';
const END = '<!-- catalog:end -->';
const command = process.argv[2] ?? 'validate';

function escapeCell(value: string): string {
  return value
    .replaceAll('|', '\\|')
    .replaceAll('[', '\\[')
    .replaceAll(']', '\\]')
    .replaceAll('\n', ' ');
}
function catalogMarkdown(apps: CatalogApp[]): string {
  const openSourceCount = apps.filter(
    (app) => app.sourceAvailability === 'open-source',
  ).length;
  const restrictedCount = apps.length - openSourceCount;
  const groups = categories
    .map((category) => {
      const entries = apps.filter((app) => app.category === category);
      if (!entries.length) return '';
      return `### ${category}\n\n| App | What it does | License |\n| --- | --- | --- |\n${entries
        .map(
          (app) =>
            `| [${escapeCell(app.name)}](${site.url}apps/${app.slug}/) · [Source](${app.repository}) | ${escapeCell(app.summary)} | [${app.license}](${app.licenseUrl})${app.sourceAvailability === 'source-available' ? ' · **Source available**' : ''} |`,
        )
        .join('\n')}`;
    })
    .filter(Boolean)
    .join('\n\n');
  return `${START}\n\n${apps.length} macOS apps: **${openSourceCount} open source** and **${restrictedCount} source available**. Source-available apps have additional restrictions and are labeled separately. Generated from [content/apps](content/apps); edit the app folders to contribute.\n\n${groups}\n\n${END}`;
}
function expectedReadme(apps: CatalogApp[]): {
  current: string;
  expected: string;
} {
  const current = fs.readFileSync('README.md', 'utf8');
  const start = current.indexOf(START);
  const end = current.indexOf(END);
  if (
    start < 0 ||
    end < start ||
    current.indexOf(START, start + START.length) >= 0 ||
    current.indexOf(END, end + END.length) >= 0
  ) {
    throw new Error(
      'README.md needs exactly one ordered pair of catalog:start / catalog:end markers',
    );
  }
  return {
    current,
    expected: `${current.slice(0, start)}${catalogMarkdown(apps)}${current.slice(end + END.length)}`,
  };
}
try {
  if (!['validate', 'sync', 'check'].includes(command))
    throw new Error(`Unknown command: ${command}`);
  const apps = getApps();
  if (!apps.length)
    throw new Error('The catalog must contain at least one app');
  if (command === 'sync') {
    const readme = expectedReadme(apps);
    const output = path.resolve('public/catalog');
    fs.rmSync(output, { recursive: true, force: true });
    fs.mkdirSync(output, { recursive: true });
    for (const app of apps) {
      for (const notice of app.notices) {
        const target = path.join(output, app.slug, notice.path);
        fs.mkdirSync(path.dirname(target), { recursive: true });
        fs.copyFileSync(
          path.join(catalogDirectory, app.slug, notice.path),
          target,
        );
      }
      for (const asset of app.assets) {
        const target = path.join(output, app.slug, asset.path);
        fs.mkdirSync(path.dirname(target), { recursive: true });
        fs.copyFileSync(
          path.join(catalogDirectory, app.slug, asset.path),
          target,
        );
      }
    }
    fs.writeFileSync(
      'public/catalog.json',
      `${JSON.stringify(apps, null, 2)}\n`,
    );
    if (readme.current !== readme.expected)
      fs.writeFileSync('README.md', readme.expected);
  }
  if (command === 'check') {
    const { current, expected } = expectedReadme(apps);
    if (current !== expected)
      throw new Error(
        'README catalog is stale. Run bun run sync and commit README.md.',
      );
  }
  console.log(
    `${command}: ${apps.length} app records validated${command === 'sync' ? '; assets, JSON, and README generated' : ''}.`,
  );
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
}
