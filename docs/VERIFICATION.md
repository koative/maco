# Release verification

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
