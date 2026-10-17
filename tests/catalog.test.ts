import { test, afterEach } from 'bun:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { stringify as stringifyYaml } from 'yaml';
import { appSchema, loadCatalog } from '../src/lib/catalog.ts';

const valid = {
  name: 'Example App',
  summary: 'A small, useful example application for your Mac.',
  category: 'Utilities',
  tags: ['menu-bar'],
  repository: 'https://github.com/example/app',
  website: 'https://example.org',
  license: 'MIT',
  licenseUrl: 'https://github.com/example/app/blob/main/LICENSE',
  download: 'https://github.com/example/app/releases',
  featured: false,
  added: '2026-10-17',
  verified: '2026-10-17',
  icon: './assets/icon.png',
  screenshots: [],
  sources: ['https://github.com/example/app'],
  assets: [
    {
      path: './assets/icon.png',
      source: 'https://example.org/icon.png',
      credit: 'Example contributors',
      license: 'MIT',
    },
  ],
};
const temporaryDirectories: string[] = [];
afterEach(() => {
  for (const directory of temporaryDirectories.splice(0))
    fs.rmSync(directory, { recursive: true, force: true });
});
function fixture() {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'maco-test-'));
  temporaryDirectories.push(directory);
  const write = (slug: string, data: unknown = valid) => {
    const folder = path.join(directory, slug);
    fs.mkdirSync(path.join(folder, 'assets'), { recursive: true });
    fs.writeFileSync(
      path.join(folder, 'index.md'),
      `---\n${stringifyYaml(data)}---\n\nAn original description of this app.`,
    );
    fs.writeFileSync(path.join(folder, 'assets/icon.png'), 'test image');
    return folder;
  };
  return { directory, write };
}

test('loads a folder and resolves images under the configured deployment base', () => {
  const { directory, write } = fixture();
  write('example');
  const [app] = loadCatalog(directory, '/preview/');
  assert.equal(app.slug, 'example');
  assert.equal(app.iconUrl, '/preview/catalog/example/assets/icon.png');
  assert.equal(app.body, 'An original description of this app.');
  assert.deepEqual(app.tags, ['menu-bar']);
});

test('rejects traversal and malformed local asset paths', () => {
  for (const icon of [
    '../secret.png',
    './assets/../../secret.png',
    '/tmp/icon.png',
    'https://example.org/icon.png',
  ]) {
    assert.equal(appSchema.safeParse({ ...valid, icon }).success, false, icon);
  }
});

test('keeps restricted source licenses out of the open-source classification', () => {
  assert.equal(appSchema.parse(valid).sourceAvailability, 'open-source');
  for (const license of [
    'Apache-2.0 WITH Commons-Clause',
    'LicenseRef-Mac-Mouse-Fix',
    'FSL-1.1-MIT',
    'CC-BY-NC-4.0',
  ]) {
    assert.equal(appSchema.safeParse({ ...valid, license }).success, false);
    assert.equal(
      appSchema.safeParse({
        ...valid,
        license,
        sourceAvailability: 'source-available',
      }).success,
      false,
    );
    assert.equal(
      appSchema.safeParse({
        ...valid,
        license,
        sourceAvailability: 'source-available',
        licenseNotes:
          'The published source has additional restrictions on redistribution.',
      }).success,
      true,
    );
  }
  assert.equal(
    appSchema.safeParse({
      ...valid,
      sourceAvailability: 'source-available',
      licenseNotes:
        'This classification would incorrectly restrict an MIT application.',
    }).success,
    false,
  );
});

test('rejects external, missing and uncredited image files', () => {
  const { directory, write } = fixture();
  const folder = write('example', { ...valid, assets: [] });
  assert.throws(() => loadCatalog(directory), /Missing image provenance/);
  write('example');
  fs.unlinkSync(path.join(folder, 'assets/icon.png'));
  assert.throws(() => loadCatalog(directory), /does not exist/);
  fs.symlinkSync(
    path.join(folder, 'index.md'),
    path.join(folder, 'assets/icon.png'),
  );
  assert.throws(() => loadCatalog(directory), /Symbolic links/);
});

test('requires provenance for image files even when not displayed', () => {
  const { directory, write } = fixture();
  const folder = write('example');
  fs.writeFileSync(path.join(folder, 'assets/unlisted.png'), 'test image');
  assert.throws(
    () => loadCatalog(directory),
    /Missing image provenance.*unlisted/,
  );
});

test('rejects duplicate repositories regardless of case, www, .git, trailing slash or fragment', () => {
  for (const repository of [
    'https://github.com/Example/App.git/',
    'https://www.github.com/example/app#readme',
  ]) {
    const { directory, write } = fixture();
    write('first');
    write('second', { ...valid, repository });
    assert.throws(
      () => loadCatalog(directory),
      /Duplicate repository/,
      repository,
    );
  }
});

test('rejects unsafe folder names', () => {
  const { directory, write } = fixture();
  write('Bad_Name');
  assert.throws(() => loadCatalog(directory), /lowercase, hyphen-separated/);
});

test('validates HTTPS, SPDX, unique normalized tags and real dates', () => {
  for (const patch of [
    { repository: 'http://github.com/example/app' },
    { website: 'https://user:secret@example.org' },
    { license: 'source-available' },
    { license: 'MIT OR Proprietary' },
    { tags: ['Menu Bar'] },
    { tags: ['menu-bar', 'menu-bar'] },
    { added: '2026-02-30' },
    { verified: '2026-10-16' },
    { summary: 'a'.repeat(131) },
  ])
    assert.equal(
      appSchema.safeParse({ ...valid, ...patch }).success,
      false,
      JSON.stringify(patch),
    );
  assert.equal(
    appSchema.safeParse({ ...valid, license: 'GPL-2.0-only OR GPL-3.0-only' })
      .success,
    true,
  );
});

test('rejects malformed frontmatter, duplicate YAML keys and missing prose', () => {
  const { directory, write } = fixture();
  const folder = write('example');
  const index = path.join(folder, 'index.md');
  const original = fs.readFileSync(index, 'utf8');
  fs.writeFileSync(index, original.replace(/^---\n/, ''));
  assert.throws(() => loadCatalog(directory), /Expected YAML frontmatter/);
  fs.writeFileSync(
    index,
    original.replace('name: Example App', 'name: Example App\nname: Duplicate'),
  );
  assert.throws(() => loadCatalog(directory), /unique/);
  fs.writeFileSync(
    index,
    original.replace('An original description of this app.', ''),
  );
  assert.throws(() => loadCatalog(directory), /original description/);
});

test('exposes all actual license notices with deployment-aware links', () => {
  const { directory, write } = fixture();
  const folder = write('example');
  assert.deepEqual(loadCatalog(directory)[0].notices, []);
  for (const name of [
    'UPSTREAM-LICENSE.txt',
    'ARTWORK-NOTICE.txt',
    'CC-BY-SA-4.0.txt',
    'NOTICE.TXT',
  ]) {
    fs.writeFileSync(
      path.join(folder, 'assets', name),
      'License and attribution notice',
    );
  }
  const notices = loadCatalog(directory, '/preview/')[0].notices;
  assert.deepEqual(
    notices.map((notice) => notice.name),
    [
      'ARTWORK-NOTICE.txt',
      'CC-BY-SA-4.0.txt',
      'NOTICE.TXT',
      'UPSTREAM-LICENSE.txt',
    ],
  );
  for (const notice of notices) {
    assert.equal(notice.url, `/preview/catalog/example/assets/${notice.name}`);
    assert.equal(notice.path, `./assets/${notice.name}`);
  }
  fs.mkdirSync(path.join(folder, 'assets/invalid.txt'));
  assert.throws(() => loadCatalog(directory), /must be a file/);
});
