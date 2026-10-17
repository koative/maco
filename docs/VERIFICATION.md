# Release verification

## OpenBucket added — 2026-10-18

Koative's own OpenBucket (MIT, native S3 browser) joined the catalog with its icon and three real screenshots: **878 apps, 864 open source and 14 source available**. `bun run validate`, `bun run check:generated` and `bun run check:links` (62,054 links across 898 pages) pass.

## Catalog expansion to 877 apps — 2026-10-17

The catalog contains **877 apps: 863 open source and 14 source available**, across 11 categories, with 870 official icons and 33 screenshots. Seven apps ship no usable icon of their own and show a letter tile. The 358 new records came from reviewing every remaining discovery lead; decisions are in [RESEARCH.md](RESEARCH.md#third-expansion-2026-10-17).

Oversized catalog images were downscaled (icons to 256 px, screenshots to 1600 px; 113 files), so an icon on Discover no longer downloads up to 2.3 MB. Upscaled icons for Widelands and Teleport were replaced with their native 128 px files, and Lan Mouse's icon was re-rendered with its transparent background.

- `bun run validate` and `bun run check:generated`: all 877 records pass.
- `bun test`: 14 tests passed. `bun run check`: zero errors, warnings or hints.
- `bun run build`: 897 static pages in about 2 seconds.
- `bun run check:links`: 61,972 internal links, assets, self-links, and sitemap entries resolve.
- `bun run discover`: 1,724 leads from ten directories; 766 match published apps.

## Catalog expansion to 519 apps (historical)

The catalog contains **519 apps: 508 open source and 11 source available**, across 11 categories, with 517 official icons and 32 screenshots. SketchyBar and ungoogled-chromium ship no usable icon of their own and show a letter tile. The 227 new records came from reviewing every discovery lead listed by at least two directories; decisions and exclusions are in [RESEARCH.md](RESEARCH.md#second-expansion-2026-10-17).

- `bun run validate` and `bun run check:generated`: all 519 records pass; no repository is listed twice.
- `bun test`: 14 tests passed. `bun run check`: zero errors, warnings or hints.
- `bun run build`: 539 static pages. A production build now reads the catalog once instead of once per page, which took the build from about 51 seconds to under 2 seconds at this size.
- `bun run check:links`: 37,037 internal links, assets, self-links, and sitemap entries resolve.
- `bun run discover`: 1,724 leads from ten directories; 429 match published apps.

## App store redesign and repository audit — 2026-10-17

At the time of the redesign the catalog contained **292 apps: 283 open source and 9 source available**, across 11 categories, and every app showed its official upstream icon (292 icons) alongside 32 screenshots. For 14 apps the icon is reserved by trademark or published under non-commercial or no-derivatives terms (for example Mozilla, Bitwarden, Blender, Joplin, SimpleX, CotEditor, DuckStation). The project owner approved showing these unmodified, only to identify the linked app in this non-commercial directory. Each record states the actual terms, and an icon is removed if its rights holder asks.

The site was rebuilt as an app-store-style catalog: a sidebar shell (bottom tab bar on narrow screens), Discover shelves, Search, 11 category pages, 4 collection pages, and a product page per app. Light and dark appearance follow the system. Text uses system fonts, so the Manrope and DM Sans packages were removed.

- `bun test`: 14 tests passed.
- `bun run check`: zero errors, warnings or hints.
- `bun run build`: 312 static pages.
- `bun run check:links`: 21,022 internal links, assets, absolute self-links, and sitemap entries resolve. The stricter checker found that the 404 page declared a canonical URL `/404/` that does not exist; noindex pages no longer emit one.
- `bun run check:generated`: README matches all 292 records.

Chromium checks against the production build covered: legacy `/?category=` and `/?collection=` links redirecting to `/search/` and `/collections/<id>/`; search typing, URL sync, and mirroring between the sidebar and page fields; empty state and reset; Show More (24 → 48) with focus moving to the first new result; category filters creating history that Back restores; sidebar search submitted from other pages; the `/` shortcut; shelf paging; and naming only the clicked icon for the view transition into the product page. No page errors occurred. With JavaScript disabled, Search lists all 292 apps, filter controls stay hidden, and shelves keep a native scrollbar.

Captures at 1440 and 390 px in light and dark appearance were reviewed against the design brief, and the review's findings were fixed. `DESIGN.md` and `.impeccable/design.json` describe the new system.

The content audit requested every URL in every record, checked repository moves and license files through the GitHub API, and fixed broken or redirected links, moved repositories (ComfyUI Desktop, digiKam), license identifiers (Comfy Desktop, digiKam, Element), and record text (Medis, Mos, Monolingual). Pages that block automated requests but load in a browser, and upstream-only problems (GitButler's download page, jamovi's download redirect), are listed in the audit notes rather than changed. Tooling fixes: stricter duplicate-repository detection, case-insensitive `.TXT` notices, a link checker that also reads single-quoted and `srcset` URLs, absolute self-links and sitemap entries, and GitHub Actions moved to Node 24 releases.

---

## Catalog expansion and Bun migration (historical)

At this point the catalog contained **292 apps: 283 open source and 9 source available**, across 11 categories, with 230 genuine upstream icons and 32 screenshots. Loop, Cap and Pearcleaner are included; Pearcleaner is explicitly classified as source available.

- Bun 1.4.3 installs from `bun.lock`, executes all scripts and tests, and runs Astro. GitHub Actions uses the same pinned version; no npm lockfile or setup-node step remains.
- `bun install --frozen-lockfile`: reproducible dependency install passed.
- `bun test`: 14 tests passed, including prevention of restricted licenses being labeled open source.
- `bun run check`: zero errors, warnings or hints.
- `bun run build`: 295 static pages.
- `bun run check:links`: 8,022 generated internal links and asset references resolve.
- `bun run check:generated`: README matches all 292 records.
- `bun audit`: no reported vulnerabilities in the checked dependency set.
- `bun run discover`: 1,721 repository leads from ten directories; 204 matched published entries at this snapshot. Other leads are explicitly unreviewed, not claimed to be compatible apps.

Chromium checks against the production preview verified initial 24-item batches, loading 48 items, keyboard focus on newly revealed content, restoration of the expanded count through browser history, full-catalog search, all source classifications, category/tag/collection intersections, shareable URLs, reload persistence, and empty/reset states. Collection links reset incompatible prior filters. With JavaScript disabled all 292 app links remain available.

Layout checks covered widths 360, 390, 768 and 1440. Desktop/mobile collection, catalog and license-detail captures were inspected. Loop, Cap, Blender, LibreOffice, Firefox, Jan and DuckStation detail routes and official download links were checked. The final production-preview browser run reported no JavaScript exceptions or failed local resources.

An independent code review identified two navigation issues (retained source filters on collection links and lost expanded counts on Back). Both were fixed and confirmed by the reviewer and browser checks. Related apps are ranked by shared tags and category rather than alphabetic category membership alone.

Primary-source research and exceptions are recorded in [RESEARCH.md](RESEARCH.md), the individual app records, and [the discovery queue](../research/README.md). This review does not claim every app was installed or security audited.

---

## First public release (historical)

Reviewed on 2026-10-17 for the first public release.

### Automated checks

- `npm run validate`: 24 app records, required source evidence and local asset provenance.
- `npm test`: 13 tests covering schema validation, unsafe paths, missing attribution, duplicate repositories, license notices, Markdown rendering, and executable-content removal.
- `npm run check`: no Astro/TypeScript errors, warnings, or hints.
- `npm run build`: 27 static pages.
- `npm run check:links`: 699 generated internal links and asset references resolve.
- `npm run check:generated`: README catalog matches app folders.
- `npm audit`: zero known dependency vulnerabilities at verification time.

These checks run in GitHub Actions before publication, except the dependency audit, which was run locally. Counts describe this release and will change with catalog growth.

### Browser verification

28 assertions passed in Chromium against the working site:

- Search handles uppercase app names and synchronizes the URL.
- Category/tag filtering, clear/reset, empty state, and featured sorting behave correctly.
- Discrete filters create browser history; Back restores the prior category and results.
- Shared filtered URLs survive reloads.
- The slash shortcut focuses search.
- Catalog and detail pages do not overflow at widths 360, 390, 768, and 1440 pixels.
- Application details, official download targets, artwork license links, screenshots, and the About page render correctly.
- No browser JavaScript errors occurred during those checks.

Additional checks confirmed that reduced-motion preferences suppress the screenshot lift and that all 24 app links remain available with JavaScript disabled; inactive search controls are hidden in that fallback.

### Design review

An independent reviewer inspected desktop and mobile captures of the dark showcase, catalog, app details, and About page. Two findings were fixed: a spotlight headline/image collision and insufficient contrast around search/select fields. Confirmation included hover at desktop and tablet widths, mobile spotlights, keyboard focus, empty results, image evidence, and footer content.

The final verdict was **ship** for those fixes and the requested coverage. Field borders measure 3.93:1 against the field surface and 4.26:1 against the page. The design system is recorded in `DESIGN.md` and `.impeccable/design.json`.

App inclusion verifies cited source/license evidence; it is not a software security audit, installation test, or guarantee that an upstream project will remain maintained. macOS compatibility should be checked on each project's current release page.
