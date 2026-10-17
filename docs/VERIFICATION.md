# Release verification

## Catalog expansion and Bun migration — 2026-10-17

The current catalog contains **292 apps: 283 open source and 9 source available**, across 11 categories, with 230 genuine upstream icons and 32 screenshots. Loop, Cap and Pearcleaner are included; Pearcleaner is explicitly classified as source available.

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

## Automated checks

- `npm run validate`: 24 app records, required source evidence and local asset provenance.
- `npm test`: 13 tests covering schema validation, unsafe paths, missing attribution, duplicate repositories, license notices, Markdown rendering, and executable-content removal.
- `npm run check`: no Astro/TypeScript errors, warnings, or hints.
- `npm run build`: 27 static pages.
- `npm run check:links`: 699 generated internal links and asset references resolve.
- `npm run check:generated`: README catalog matches app folders.
- `npm audit`: zero known dependency vulnerabilities at verification time.

These checks run in GitHub Actions before publication, except the dependency audit, which was run locally. Counts describe this release and will change with catalog growth.

## Browser verification

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

## Design review

An independent reviewer inspected desktop and mobile captures of the dark showcase, catalog, app details, and About page. Two findings were fixed: a spotlight headline/image collision and insufficient contrast around search/select fields. Confirmation included hover at desktop and tablet widths, mobile spotlights, keyboard focus, empty results, image evidence, and footer content.

The final verdict was **ship** for those fixes and the requested coverage. Field borders measure 3.93:1 against the field surface and 4.26:1 against the page. The design system is recorded in `DESIGN.md` and `.impeccable/design.json`.

App inclusion verifies cited source/license evidence; it is not a software security audit, installation test, or guarantee that an upstream project will remain maintained. macOS compatibility should be checked on each project's current release page.
