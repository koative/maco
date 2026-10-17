import { getApps } from '../src/lib/catalog';
import sources from '../research/sources.json';

// Discovery is deliberately separate from publication: a public repository may
// be a library, a closed-source distribution wrapper, or a stale application.
const normalize = (url: string) =>
  url
    .toLowerCase()
    .replace(/\.git\/?$/, '')
    .replace(/\/$/, '');
const published = new Set(getApps().map((app) => normalize(app.repository)));
const directories = new Set(
  sources.map((source) => normalize(source.repository)),
);
const candidates = new Map<string, Set<string>>();
const skipOwners = new Set([
  'sponsors',
  'topics',
  'orgs',
  'users',
  'settings',
  'features',
  'marketplace',
  'collections',
  'stars',
]);
const outcomes = await Promise.allSettled(
  sources.map(async (source) => {
    const response = await fetch(source.readme, {
      signal: AbortSignal.timeout(30_000),
    });
    if (!response.ok)
      throw new Error(`${source.repository}: HTTP ${response.status}`);
    const readme = await response.text();
    for (const match of readme.matchAll(
      /https:\/\/github\.com\/([\w.-]+)\/([\w.-]+)/g,
    )) {
      if (skipOwners.has(match[1].toLowerCase())) continue;
      const repository = normalize(
        `https://github.com/${match[1]}/${match[2]}`,
      );
      if (directories.has(repository)) continue;
      const discoveredIn = candidates.get(repository) ?? new Set<string>();
      discoveredIn.add(source.repository);
      candidates.set(repository, discoveredIn);
    }
  }),
);
const failures = outcomes.filter((outcome) => outcome.status === 'rejected');
if (failures.length) {
  // Do not replace a complete queue with a partial result after network errors.
  for (const failure of failures) console.error(failure.reason);
  process.exit(1);
}
const records = [...candidates]
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([repository, discoveredIn]) => ({
    repository,
    status: published.has(repository) ? 'published' : 'needs-review',
    discoveredIn: [...discoveredIn].sort(),
  }));
await Bun.write(
  'research/candidates.json',
  JSON.stringify(
    {
      checked: new Date().toISOString().slice(0, 10),
      note: 'Discovery leads, not verified apps. Needs-review includes libraries, duplicates, renamed repositories, closed-source distributions and incompatible software. Never auto-publish this queue.',
      sourceCount: sources.length,
      candidates: records,
    },
    null,
    2,
  ) + '\n',
);
console.log(
  `${records.length} repository leads from ${sources.length} directories; ${records.filter((record) => record.status === 'published').length} already published. Review each remaining lead before adding an app folder.`,
);
