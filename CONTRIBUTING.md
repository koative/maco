# Contributing to Maco

Maco is a curated collection of open-source macOS apps and separately labeled source-available apps. App records are the source of truth: both the website and the README catalog are generated from `content/apps/`.

## Before adding an app

Check that the project ships a macOS app and publishes source code under a reviewed license. Read the upstream license file; a repository being public or an app being free is not enough. Prefer maintained projects, useful descriptions, and working download links. A paid download is fine if the code is genuinely open source.

Discovery lists help find candidates, but are not proof of a current license or macOS support. Link primary sources in the record. Do not infer Apple Silicon support or native implementation from a project's programming language.

Search existing app folders and repositories to avoid duplicates. If a license is absent from the reviewed allowlist in `src/lib/catalog.ts`, include evidence in your pull request so it can be reviewed and added.

## Folder format

Use a lowercase, hyphen-separated folder name. Keep each app's metadata, prose, and images together:

```text
content/apps/example-app/
├── index.md
└── assets/
    ├── icon.png
    └── screenshot.png
```

`index.md` starts with YAML frontmatter, followed by an original description. This is a structural example; replace its placeholder URLs and evidence with real upstream sources:

```yaml
---
name: Example App
summary: A focused macOS tool that makes a common task easier.
category: Utilities
tags:
  - menu-bar
  - automation
repository: https://github.com/example/example-app
website: https://example.org
license: MIT
licenseUrl: https://github.com/example/example-app/blob/main/LICENSE
download: https://github.com/example/example-app/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
screenshots:
  - src: ./assets/screenshot.png
    alt: The app's preferences window with automation shortcuts enabled.
    source: https://github.com/example/example-app/blob/main/docs/screenshot.png
    credit: Example App contributors
sources:
  - https://github.com/example/example-app
assets:
  - path: ./assets/icon.png
    source: https://github.com/example/example-app/blob/main/resources/icon.png
    credit: Example App contributors
    license: MIT
  - path: ./assets/screenshot.png
    source: https://github.com/example/example-app/blob/main/docs/screenshot.png
    credit: Example App contributors
    license: MIT
---

Describe what this app does, where it fits into a workflow, and any meaningful
limits. Use your own words rather than copying an upstream README.
```

Body Markdown supports headings, lists, emphasis, links, quotes, code, and tables. Raw HTML and inline Markdown images are not rendered; add imagery through the attributed screenshot fields. Top-level body headings are demoted so the app name remains the page title.

All links must use HTTPS. Keep summaries at most 130 characters. Tags must be unique lowercase words separated by hyphens, with one to ten tags per app. Dates must be quoted ISO dates; `verified` records the most recent manual check and cannot precede `added`. It is not a security audit or endorsement.

Categories are `Productivity`, `Developer tools`, `Utilities`, `Media`, `Privacy & security`, `Writing`, `Design`, `Internet`, `Education`, `Games`, and `AI`. Choose one main category; use tags for overlap. The `featured` flag is an editorial choice, not a popularity metric. License values use reviewed SPDX identifiers, with `AND` or `OR` expressions when upstream requires them.

`sourceAvailability` defaults to `open-source`. Restricted source licenses require `sourceAvailability: source-available` and an original `licenseNotes` paragraph explaining the material restrictions. The reviewed restricted identifiers live separately in `sourceAvailableLicenses`; they cannot pass validation as open source. The catalog currently recognizes `Apache-2.0 WITH Commons-Clause` (an editorial combined label, not a standard SPDX expression), `LicenseRef-Mac-Mouse-Fix`, `FSL-1.1-MIT`, `CC-BY-NC-4.0`, `CC-BY-NC-ND-4.0`, `LicenseRef-PasteBar`, `LicenseRef-NotchPrompter`, and `PolyForm-Shield-1.0.0`. Do not strip extra terms or classify missing licenses as source available. Closed-source apps remain out of scope.

## Images and attribution

Use clear upstream app icons and screenshots, with readable screenshots and descriptive alt text. Keep assets local, sized for their actual use, and preferably PNG or WebP. Avoid oversized retina originals when a smaller image remains sharp. Never fabricate a screenshot or use a discovery list's image without tracing its origin.

Every image file needs an `assets` entry with its original source URL, owner credit, and applicable license. Code and image licenses may differ; verify both. If reuse rights are unclear, omit the image and explain the gap in your pull request. The `icon` field is optional and `screenshots` can be empty. Third-party images retain their upstream license and trademark rights.

Asset paths must begin with `./assets/`, remain inside the app folder, and point to existing files. Symlinks and path traversal are rejected. List provenance even for images not currently shown. Keep the applicable upstream license notices as `.txt` files in `assets/`; the build preserves and links each notice. The build copies these files into `public/catalog/`; do not edit generated copies.

## Local workflow

Use Bun 1.4.3 or newer (CI uses the version pinned in `package.json`):

```sh
bun install --frozen-lockfile
bun run dev
```

After editing records, run:

```sh
bun run validate
bun test
bun run check
bun run build
bun run check:links
bun run check:generated
```

`bun run sync` validates records, copies catalog assets, writes the public `catalog.json` feed, and updates the README between `<!-- catalog:start -->` and `<!-- catalog:end -->`. Both development and production builds run sync automatically. Commit the updated README alongside app records. Generated `public/catalog/`, `public/catalog.json`, and `dist/` stay out of Git.

The site is served beneath `/maco/`. Keep internal links and image URLs aware of Astro's `BASE_URL`; the catalog loader already resolves image paths. Preview production output with `bun run preview` after building.

## Pull requests

Describe the change and include direct evidence for the source license, macOS downloads, and image reuse. Keep unrelated fixes separate. CI checks data integrity, README freshness, meaningful loader tests, Astro types, and the production build. Merges to `main` publish through GitHub Pages.

For an app suggestion without code, use the app suggestion issue form. For a broken link, incorrect license, outdated screenshot, or removal request, open an issue with the affected app and evidence.
