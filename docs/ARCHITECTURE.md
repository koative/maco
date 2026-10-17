# How OpenStore is maintained

## Source of truth

`content/apps/<slug>/index.md` owns an application. Its YAML frontmatter carries facts and provenance; its body carries original editorial copy. Assets live in the same folder, never at a hotlinked third-party URL at runtime. Git history provides review and rollback.

Astro builds an index and a shareable detail page for each app. Local search and filters run in the browser over the already-rendered catalog. App pages, source links, and the catalog remain available without JavaScript. There is no database, authentication, remote search service, or runtime GitHub API dependency.

## Why folders instead of a database or one JSON file?

- A contributor can add one folder without changing site code.
- Descriptions stay pleasant to write and review in Markdown.
- App images and their attribution move or disappear with the entry.
- File-level diffs isolate changes and reduce merge conflicts.
- Validated metadata generates consistent site and README output.

A database would be justified later by authenticated editing or moderation queues. A read API can be generated from the same content without changing authorship.

## Editing flow

1. Find the project's current official repository and its actual license file.
2. Check that it ships a macOS application and has a reviewed source license and is classified accurately.
3. Add an app folder following CONTRIBUTING.md, with original description text.
4. Record each image's upstream URL, credit, and applicable license. Omit images where rights or provenance are unclear.
5. Run validation and sync, inspect the site, and include the generated README diff in the pull request.
6. CI validates content and builds. A merge to main publishes the static site.

## Maintenance

The verification date means a curator checked the listed evidence on that date; it is not a live health or security badge. Recheck licenses before changing that date. Repositories and licenses can change. Do not automatically rewrite editorial or licensing facts from API guesses.

An app whose current license becomes restrictive needs an editorial re-review: classify it as source available with clear license notes, or remove it if its source is no longer published. The schema prevents restricted identifiers from being labeled open source. Missing screenshots do not disqualify a useful app. Expand coverage through independent review rather than weakening its evidence rules.

## Bun toolchain

`package.json` pins Bun through `packageManager`; CI reads that version with `oven-sh/setup-bun`. The text `bun.lock` is the only dependency lockfile, installed with `bun install --frozen-lockfile`. Catalog scripts run as TypeScript directly on Bun. Tests import `bun:test`. Astro and Prettier are explicitly launched through Bun; `bunfig.toml` also selects Bun for executable scripts. Standard `node:` module imports use Bun’s compatibility APIs and do not require a separate Node runtime.

The deployed output is static HTML, CSS, JavaScript and assets, so GitHub Pages does not need a server runtime.
