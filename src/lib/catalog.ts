import fs from 'node:fs';
import path from 'node:path';
import { parse as parseYaml } from 'yaml';
import { z } from 'zod';
import { basePath } from './site';

export const categories = [
  'Productivity',
  'Developer tools',
  'Utilities',
  'Media',
  'Privacy & security',
  'Writing',
  'Design',
  'Internet',
  'Education',
  'Games',
  'AI',
] as const;

const approvedLicenses = new Set([
  'MIT',
  'Apache-2.0',
  'BSD-2-Clause',
  'BSD-3-Clause',
  'ISC',
  'MPL-2.0',
  'GPL-2.0',
  'GPL-2.0-only',
  'GPL-2.0-or-later',
  'GPL-3.0',
  'GPL-3.0-only',
  'GPL-3.0-or-later',
  'LGPL-2.1',
  'LGPL-2.1-only',
  'LGPL-2.1-or-later',
  'LGPL-3.0',
  'LGPL-3.0-only',
  'LGPL-3.0-or-later',
  'AGPL-3.0',
  'AGPL-3.0-only',
  'AGPL-3.0-or-later',
  'Unlicense',
  'CC0-1.0',
  'Zlib',
  'Vim',
  'PostgreSQL',
]);
// Reviewed restrictions are kept separate from open-source SPDX licenses.
const sourceAvailableLicenses = new Set([
  'Apache-2.0 WITH Commons-Clause',
  'LicenseRef-Mac-Mouse-Fix',
  'FSL-1.1-MIT',
  'CC-BY-NC-4.0',
  'CC-BY-NC-ND-4.0',
  'LicenseRef-PasteBar',
  'LicenseRef-NotchPrompter',
  'PolyForm-Shield-1.0.0',
]);
const httpsUrl = z.url().refine((value) => {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' && !url.username && !url.password;
  } catch {
    return false;
  }
}, 'Must be an HTTPS URL without credentials');
const isoDate = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/)
  .refine((value) => {
    const date = new Date(`${value}T00:00:00Z`);
    return (
      !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value
    );
  }, 'Must be a real ISO calendar date, quoted in YAML');
const imagePath = z
  .string()
  .regex(
    /^\.\/assets\/(?:[a-zA-Z0-9_-]+\/)*[a-zA-Z0-9_-]+\.(?:png|jpg|jpeg|webp|gif|avif|svg)$/,
    'Use a local ./assets/ image path without traversal',
  );
const license = z.string().refine((value) => {
  if (sourceAvailableLicenses.has(value)) return true;
  const tokens = value.split(/ (?:AND|OR) /);
  return tokens.every((token) => approvedLicenses.has(token));
}, 'Use an approved SPDX identifier or AND / OR expression; review new licenses before adding them');
const screenshotSchema = z
  .object({
    src: imagePath,
    alt: z.string().trim().min(10),
    source: httpsUrl,
    credit: z.string().trim().min(1),
  })
  .strict();
export const appSchema = z
  .object({
    name: z.string().trim().min(1).max(60),
    summary: z.string().trim().min(15).max(130),
    category: z.enum(categories),
    tags: z
      .array(z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/))
      .min(1)
      .max(10)
      .refine(
        (tags) => new Set(tags).size === tags.length,
        'Tags must be unique',
      ),
    repository: httpsUrl,
    website: httpsUrl,
    license,
    sourceAvailability: z
      .enum(['open-source', 'source-available'])
      .default('open-source'),
    licenseNotes: z.string().trim().min(20).optional(),
    licenseUrl: httpsUrl,
    download: httpsUrl,
    featured: z.boolean().default(false),
    added: isoDate,
    verified: isoDate,
    icon: imagePath.optional(),
    screenshots: z.array(screenshotSchema).default([]),
    sources: z.array(httpsUrl).min(1),
    assets: z
      .array(
        z
          .object({
            path: imagePath,
            source: httpsUrl,
            credit: z.string().trim().min(1),
            license: z.string().trim().min(1),
          })
          .strict(),
      )
      .default([]),
  })
  .strict()
  .superRefine((data, ctx) => {
    const restricted = sourceAvailableLicenses.has(data.license);
    if (restricted !== (data.sourceAvailability === 'source-available')) {
      ctx.addIssue({
        code: 'custom',
        path: ['sourceAvailability'],
        message:
          'Restricted licenses must be labeled source-available; open-source licenses must be labeled open-source',
      });
    }
    if (restricted && !data.licenseNotes) {
      ctx.addIssue({
        code: 'custom',
        path: ['licenseNotes'],
        message: 'Explain the restrictions for source-available apps',
      });
    }
  })
  .refine((data) => data.verified >= data.added, {
    message: 'verified must be on or after added',
    path: ['verified'],
  });

export type AppData = z.infer<typeof appSchema>;
export type CatalogApp = Omit<AppData, 'screenshots'> & {
  id: string;
  slug: string;
  body: string;
  iconUrl: string | null;
  notices: { name: string; path: string; url: string }[];
  screenshots: (AppData['screenshots'][number] & { url: string })[];
};
export type App = CatalogApp;

export const catalogDirectory = path.resolve(process.cwd(), 'content/apps');
const defaultBase =
  (import.meta as ImportMeta & { env?: { BASE_URL?: string } }).env?.BASE_URL ??
  basePath;

export function assetUrl(
  slug: string,
  file: string,
  base = defaultBase,
): string {
  return `${base.replace(/\/$/, '')}/catalog/${slug}/${file.replace(/^\.\//, '')}`;
}

function ensureContainedFile(folder: string, relative: string): void {
  const root = fs.realpathSync(folder);
  const resolved = path.resolve(root, relative);
  if (!resolved.startsWith(`${root}${path.sep}`) || !fs.existsSync(resolved)) {
    throw new Error(
      `Asset does not exist or escapes its app folder: ${relative}`,
    );
  }
  const real = fs.realpathSync(resolved);
  if (!real.startsWith(`${root}${path.sep}`) || !fs.statSync(real).isFile()) {
    throw new Error(`Asset must be a file inside its app folder: ${relative}`);
  }
}

function walkImages(folder: string, prefix = './assets'): string[] {
  if (!fs.existsSync(folder)) return [];
  return fs.readdirSync(folder, { withFileTypes: true }).flatMap((entry) => {
    const file = `${prefix}/${entry.name}`;
    if (entry.isSymbolicLink())
      throw new Error(`Symbolic links are not allowed in assets: ${file}`);
    if (entry.isDirectory())
      return walkImages(path.join(folder, entry.name), file);
    return /\.(png|jpe?g|webp|gif|avif|svg)$/i.test(entry.name) ? [file] : [];
  });
}

export function loadCatalog(
  directory = catalogDirectory,
  base = defaultBase,
): CatalogApp[] {
  if (!fs.existsSync(directory))
    throw new Error(`Catalog directory is missing: ${directory}`);
  const repositories = new Set<string>();
  return fs
    .readdirSync(directory, { withFileTypes: true })
    .filter((entry) => !entry.name.startsWith('.'))
    .map((entry): CatalogApp => {
      const slug = entry.name;
      try {
        if (!entry.isDirectory() || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
          throw new Error(
            'App entries must be folders with lowercase, hyphen-separated slugs',
          );
        }
        const folder = path.join(directory, slug);
        const index = path.join(folder, 'index.md');
        ensureContainedFile(folder, './index.md');
        const source = fs.readFileSync(index, 'utf8');
        const parts = /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)([\s\S]*)$/.exec(
          source,
        );
        if (!parts)
          throw new Error('Expected YAML frontmatter between --- lines');
        const data = appSchema.parse(parseYaml(parts[1], { uniqueKeys: true }));
        const body = parts[2].trim();
        if (!body)
          throw new Error(
            'Write an original description below the frontmatter',
          );
        const repository = data.repository
          .toLowerCase()
          .replace(/\.git\/?$/, '')
          .replace(/\/$/, '');
        if (repositories.has(repository))
          throw new Error(`Duplicate repository: ${data.repository}`);
        repositories.add(repository);
        const assetPaths = data.assets.map((asset) => asset.path);
        if (new Set(assetPaths).size !== assetPaths.length)
          throw new Error('Duplicate asset provenance paths');
        const referenced = [
          data.icon,
          ...data.screenshots.map((shot) => shot.src),
        ].filter((file): file is string => !!file);
        for (const file of new Set([
          ...referenced,
          ...walkImages(path.join(folder, 'assets')),
        ])) {
          if (!assetPaths.includes(file))
            throw new Error(`Missing image provenance: ${file}`);
        }
        for (const asset of data.assets)
          ensureContainedFile(folder, asset.path);
        const assetFolder = path.join(folder, 'assets');
        const notices = (
          fs.existsSync(assetFolder) ? fs.readdirSync(assetFolder) : []
        )
          .filter((name) => name.endsWith('.txt'))
          .sort()
          .map((name) => {
            if (!/^[a-zA-Z0-9][a-zA-Z0-9._-]*\.txt$/.test(name)) {
              throw new Error(
                `Use a simple filename for license notices: ${name}`,
              );
            }
            const file = `./assets/${name}`;
            ensureContainedFile(folder, file);
            return { name, path: file, url: assetUrl(slug, file, base) };
          });
        return {
          ...data,
          id: slug,
          slug,
          body,
          notices,
          iconUrl: data.icon ? assetUrl(slug, data.icon, base) : null,
          screenshots: data.screenshots.map((shot) => ({
            ...shot,
            url: assetUrl(slug, shot.src, base),
          })),
        };
      } catch (error) {
        throw new Error(
          `[${slug}] ${error instanceof Error ? error.message : String(error)}`,
          { cause: error },
        );
      }
    })
    .sort((a, b) => a.name.localeCompare(b.name, 'en'));
}

export function getApps(): CatalogApp[] {
  return loadCatalog();
}
export function getApp(slug: string): CatalogApp | undefined {
  return getApps().find((app) => app.slug === slug);
}
