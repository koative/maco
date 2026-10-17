import { test, type TestContext } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { stringify as stringifyYaml } from 'yaml';
import { appSchema, loadCatalog } from '../src/lib/catalog.ts';

const valid = {
  name: 'Example App', summary: 'A small, useful example application for your Mac.',
  category: 'Utilities', tags: ['menu-bar'], repository: 'https://github.com/example/app',
  website: 'https://example.org', license: 'MIT', licenseUrl: 'https://github.com/example/app/blob/main/LICENSE',
  download: 'https://github.com/example/app/releases', featured: false,
  added: '2026-10-17', verified: '2026-10-17', icon: './assets/icon.png', screenshots: [],
  sources: ['https://github.com/example/app'],
  assets: [{ path: './assets/icon.png', source: 'https://example.org/icon.png', credit: 'Example contributors', license: 'MIT' }],
};
function fixture(t: TestContext) {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'openstore-test-'));
  t.after(() => fs.rmSync(directory, { recursive: true, force: true }));
  const write = (slug: string, data: unknown = valid) => {
    const folder = path.join(directory, slug);
    fs.mkdirSync(path.join(folder, 'assets'), { recursive: true });
    fs.writeFileSync(path.join(folder, 'index.md'), `---\n${stringifyYaml(data)}---\n\nAn original description of this app.`);
    fs.writeFileSync(path.join(folder, 'assets/icon.png'), 'test image');
    return folder;
  };
  return { directory, write };
}

test('loads a folder and resolves images under the configured deployment base', (t) => {
  const { directory, write } = fixture(t);
  write('example');
  const [app] = loadCatalog(directory, '/preview/');
  assert.equal(app.slug, 'example');
  assert.equal(app.iconUrl, '/preview/catalog/example/assets/icon.png');
  assert.equal(app.body, 'An original description of this app.');
  assert.deepEqual(app.tags, ['menu-bar']);
});

test('rejects traversal and malformed local asset paths', () => {
  for (const icon of ['../secret.png', './assets/../../secret.png', '/tmp/icon.png', 'https://example.org/icon.png']) {
    assert.equal(appSchema.safeParse({ ...valid, icon }).success, false, icon);
  }
});

test('rejects external, missing and uncredited image files', (t) => {
  const { directory, write } = fixture(t);
  const folder = write('example', { ...valid, assets: [] });
  assert.throws(() => loadCatalog(directory), /Missing image provenance/);
  write('example');
  fs.unlinkSync(path.join(folder, 'assets/icon.png'));
  assert.throws(() => loadCatalog(directory), /does not exist/);
  fs.symlinkSync(path.join(folder, 'index.md'), path.join(folder, 'assets/icon.png'));
  assert.throws(() => loadCatalog(directory), /Symbolic links/);
});

test('requires provenance for image files even when not displayed', (t) => {
  const { directory, write } = fixture(t);
  const folder = write('example');
  fs.writeFileSync(path.join(folder, 'assets/unlisted.png'), 'test image');
  assert.throws(() => loadCatalog(directory), /Missing image provenance.*unlisted/);
});

test('rejects duplicate repositories regardless of case, .git or trailing slash', (t) => {
  const { directory, write } = fixture(t);
  write('first');
  write('second', { ...valid, repository: 'https://github.com/Example/App.git/' });
  assert.throws(() => loadCatalog(directory), /Duplicate repository/);
});

test('rejects unsafe folder names', (t) => {
  const { directory, write } = fixture(t);
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
  ]) assert.equal(appSchema.safeParse({ ...valid, ...patch }).success, false, JSON.stringify(patch));
  assert.equal(appSchema.safeParse({ ...valid, license: 'GPL-2.0-only OR GPL-3.0-only' }).success, true);
});

test('rejects malformed frontmatter, duplicate YAML keys and missing prose', (t) => {
  const { directory, write } = fixture(t);
  const folder = write('example');
  const index = path.join(folder, 'index.md');
  const original = fs.readFileSync(index, 'utf8');
  fs.writeFileSync(index, original.replace(/^---\n/, ''));
  assert.throws(() => loadCatalog(directory), /Expected YAML frontmatter/);
  fs.writeFileSync(index, original.replace('name: Example App', 'name: Example App\nname: Duplicate'));
  assert.throws(() => loadCatalog(directory), /unique/);
  fs.writeFileSync(index, original.replace('An original description of this app.', ''));
  assert.throws(() => loadCatalog(directory), /original description/);
});
