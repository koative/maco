---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/layouts/Layout.astro","src/styles/global.css","src/pages/apps/[slug].astro","src/pages/search.astro"]
---

# Maco store shell, Discover, browse, and app pages

Mode: Operate. Redesign requested 2026-10-17: "move the project to a real App Store experience" with Impeccable. User confirmed: light + dark following the system appearance, Mac App Store sidebar shell. Pinned canon (the user's own words name the category standard); reference product: the macOS App Store (Sonoma/Sequoia) and apps.apple.com. Preserve product truth: Maco name, English UI, license evidence, source-available labelling, URL-backed search filters, no-JS full catalog, provenance of every image.

## Direction contract

seed: none (pinned by the user's brief; no concept roll, the canon was requested by name)

THESIS: A working Mac App Store for open-source software. Sidebar navigation, Discover shelves, category and collection pages, an app product page with a Get button that goes to the official download. Refuses the old one-page dark showcase and any marketing hero, About included.

OWN-WORLD: Apple system palette in light and dark: white / #1e1e1e content, an opaque #f2f2f5 / #262628 sidebar (nothing scrolls beneath a sticky web sidebar, so vibrancy there would be decorative blur; blur lives only on the mobile bars and the spotlight lockup band, which sit over real content), #1d1d1f / #f5f5f7 labels, secondary grey labels, hairline separators, Apple link blue for actions and Get pills on a grey fill, orange for source-available, eleven system colours for category glyph tiles and icon fallbacks. Platform system type (SF on Apple devices), bold large titles, 13–15px UI labels. 16px card radii, pill controls, window shadow only on screenshots.

STORY: Land on Discover, see real app screenshots in large spotlight cards, scan shelves of lockups (icon, name, summary, Get), jump into a collection, category or search, open an app page, read license/source facts in the info strip, then Get from the official project.

FIRST VIEWPORT: Desktop: 260px sidebar (brand, search field, Discover, Search, Categories, four collections, eleven categories, About/Contribute/GitHub). Main: "Discover" large title with catalogue totals, then a horizontally paged row of two-and-a-bit spotlight cards (tinted stage, real screenshot with window shadow, headline, blurred lockup band with Get over the screenshot's lower edge) and the first lockup shelf's header peeking. Mobile: compact top bar, bottom tab bar (Discover, Categories, Search, About).

FORM: Mac App Store canon executed straight; the world supplies type, palette, density; navigation and controls are standard web controls. Signature move: the app icon lifts from the shelf into the product page header via a cross-document view transition (reduced motion: instant).

FINISH: desktop + mobile, light + dark captures; detector; finish review; DESIGN.md and design.json rewritten from the built world; README preview and social card recaptured.
