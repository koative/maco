---
name: OpenStore
description: A sharp, dark showcase for independent open-source Mac software.
colors:
  accent: "#d9e6a3"
  accent-hover: "#e6efc5"
  accent-ink: "#202417"
  paper: "#111214"
  surface: "#191b1e"
  raised: "#222428"
  ink: "#f2f2ef"
  muted: "#a7aaae"
  line: "#303236"
  control-border: "#727983"
  tag-surface: "#24272c"
  tag-ink: "#bbc3cf"
  button-hover: "#303339"
  selected-ink: "#1b1e23"
typography:
  display:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "clamp(62px, 6.5vw, 90px)"
    fontWeight: 550
    lineHeight: 1.04
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "34px"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "18px"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.025em"
  body:
    fontFamily: "DM Sans Variable, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "DM Sans Variable, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.6
  button:
    fontFamily: "DM Sans Variable, sans-serif"
    fontSize: "13px"
    fontWeight: 550
    lineHeight: 1.6
rounded:
  tag: "4px"
  badge: "5px"
  button: "7px"
  field: "8px"
  image: "12px"
spacing:
  "8": "8px"
  "12": "12px"
  "16": "16px"
  "20": "20px"
  "24": "24px"
  "30": "30px"
  "40": "40px"
  "60": "60px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.button}"
    padding: "13px 19px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  button-default:
    backgroundColor: "{colors.raised}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.button}"
    padding: "13px 19px"
  button-default-hover:
    backgroundColor: "{colors.button-hover}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.button}"
    padding: "13px 19px"
  button-outline-hover:
    backgroundColor: "{colors.raised}"
  search-field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "0 16px"
  category-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.selected-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "9px 13px"
  tag:
    backgroundColor: "{colors.tag-surface}"
    textColor: "{colors.tag-ink}"
    rounded: "{rounded.tag}"
    padding: "4px 8px"
  app-card:
    textColor: "{colors.ink}"
    padding: "29px 0 24px"
---

# Design System: OpenStore

## Overview

**Creative North Star: "The Independent Software Showcase"**

OpenStore presents useful Mac software with a dark, sharp, premium character. Large authentic application screenshots supply the strongest color and visual interest; confident headings and restrained controls frame the software. This is the user-selected direction captured from the implemented site.

Broad compositions and generous section spacing give way to compact, seam-separated catalog entries. Surfaces stay quiet and readable, with a pale golden-olive accent reserved for actions, focus, and small identity details. The earlier pastel library direction was rejected and is not a source of visual authority.

**Key Characteristics:**

- Graphite canvas, warm-white type, and muted silver supporting text.
- Large genuine application imagery with clear source attribution.
- Precise one-pixel seams and restrained rounded controls.
- Expressive Manrope headings paired with readable DM Sans body text.
- Responsive catalog density and visible keyboard focus.

This document records `src/styles/global.css`, the shared layout and app components, and the catalog/detail pages. The final desktop and mobile home captures in `artifacts/` corroborate the composition. Frontmatter contains observed values; the prose and sidecar explain their use. Descriptive spacing keys name existing measurements, not a new CSS token scale. The sidecar’s derived tonal ramps are swatch-preview metadata only; they are not additional shipping colors. The final finish recheck returned **SHIP** after its two reported findings were corrected; this records that bounded recheck, not an independent claim of exhaustive accessibility conformance.

## Colors

The palette uses closely spaced dark neutrals, warm-white foregrounds, and a restrained golden-olive accent. The frontmatter is normative for the reusable colors.

### Primary

- **Golden Olive — accent:** primary browse, download, and contribution actions; brand symbol and dot; focus outlines; input caret; interactive text emphasis.
- **Pale Olive — accent-hover:** primary action hover state.
- **Olive Ink — accent-ink:** text on filled primary actions.

### Neutral

- **Graphite — paper:** the continuous page background.
- **Lifted Graphite — surface:** search and select fields and code blocks.
- **Charcoal — raised:** default buttons and outline-button hover fills.
- **Warm White — ink:** headings, prominent text, and selected category fill.
- **Muted Silver — muted:** supporting copy, category labels, and metadata.
- **Seam Gray — line:** section rules, catalog entry dividers, and detail facts.
- **Control Silver — control-border:** field outlines, spotlight arrow borders, and Markdown blockquote rules.
- **Tag Charcoal / Tag Silver — tag-surface / tag-ink:** small topic links.

Spotlights have contextual blue graphite and plum graphite stages; these support the pictured applications rather than introducing additional action colors. Selected categories use warm white, not the accent.

**The Evidence Rule.** Let actual application imagery supply visual variety; preserve its provenance and attribution.

## Typography

**Display Font:** Manrope Variable, with sans-serif fallback.

**Body Font:** DM Sans Variable, with sans-serif fallback. Both families are loaded locally through Fontsource in the shared layout.

Manrope gives the headline and application names a confident, close-set shape. DM Sans keeps small labels and longer descriptions clear. Headings use balanced wrapping; numeric counts use tabular numerals.

### Hierarchy

- **Display:** the home headline uses the frontmatter display role. Its secondary line is muted; responsive overrides are documented below.
- **Headline:** the catalog title uses the frontmatter headline role. Detail page titles are larger (48px, line-height 1.2); prose section headings are smaller (27px).
- **Title:** catalog app names use the title role. Spotlight names use (17px), while spotlight editorial headings use (29px, weight 550, line-height 1.18).
- **Body:** the base body role is supplemented by catalog descriptions (13px, line-height 1.7) and detail prose (16px, line-height 1.85, maximum 70ch).
- **Label:** controls use compact labels; tags and license summaries use (10px). Spotlight eyebrow text is uppercase (8px, letter-spacing 0.1em). Uppercase is not a general control treatment.

## Layout

The page is centered with a maximum outer width of (1440px) and horizontal padding of (64px). The desktop header is (100px) tall with a bottom seam. The home introduction uses two columns (1.15fr / 1fr) with a (60px) gap and vertical padding of (59px). These are the implemented measurements, superseding preliminary dimensions in the surface brief.

The spotlight grid uses unequal columns (1.35fr / 1fr), a (24px) gap, and image stages (390px) tall. The catalog starts after (68px), then moves from heading to horizontally scrollable categories, search/sort controls, a status/filter line, and a three-column app grid. Catalog columns have a (36px) gap; entries have bottom seams rather than filled outer cards.

Detail pages use a flexible hero and a main-content/facts grid with a (270px) facts column and (60px) gap. The facts column has a left seam. Screenshot frames contain the full image with a maximum image height of (590px). About-page prose is centered within (850px).

### Responsive behavior

- **At or above 1600px:** the introduction gets more vertical space (72px top / 66px bottom); the second spotlight screenshot permits a wider maximum.
- **At or below 1200px:** page padding becomes (40px); the headline is (75px); spotlight stages are (320px); catalog gutters become (26px); button padding becomes (12px 16px).
- **At or below 960px:** page padding becomes (30px), header height (87px), headline (65px), and catalog columns reduce to two. Spotlights remain side by side with (290px) stages. The header contribution link hides. Detail actions wrap under the title, and facts move below the main content into a two-column list.
- **At or below 640px:** page padding becomes (22px) and the header (78px). The introduction and spotlight grid stack; the headline becomes (67px, line-height 1.02). Spotlight stages are (320px) and (300px). The catalog becomes one column. Search fills a row, with native category and sort selects below. The horizontal category strip remains scrollable. Header Explore hides and GitHub becomes an icon link. Detail actions share a full row, and screenshot frame padding shrinks to (13px).
- **At or below 380px:** page padding becomes (18px), the headline (60px), and spotlight stages (285px) and (280px). Smaller labels and action gaps preserve the narrow composition.

## Elevation & Depth

Depth comes mostly from tonal surfaces and one-pixel borders. Catalog rows and buttons have no box shadows. The authentic screenshots in the spotlight are the sole shadowed objects, using `filter: drop-shadow(0 15px 14px #0005)` to separate application windows from their stage.

Hovering or keyboard-focusing a spotlight lifts its screenshot by (5px) over (0.6s) with `cubic-bezier(0.16, 1, 0.3, 1)` and changes its arrow circle to warm white with a dark arrow. The arrow is visible at rest. Reduced-motion preferences disable animations and transitions, suppress the screenshot lift, and use immediate scrolling.

## Shapes

The form language combines straight seams with gently rounded image stages. Reused radii are captured in the frontmatter: tags are tight, buttons slightly softer, fields slightly larger, and image panels broader. The only circular control-like ornament is the spotlight arrow, which belongs to the surrounding link. App icons retain their upstream artwork and silhouette; missing icons use the existing two-letter fallback.

## Components

### Buttons

Actions are compact and confident, with centered text and an optional inline arrow. The primary action uses Golden Olive, the default action uses Charcoal, and the outline action uses a transparent fill with a (1px) border in `#44484e`. Both historical light/dark button class names map to the same primary treatment. Buttons have a minimum height of (46px), reduced to (44px) on mobile. Background transitions take (0.15s). Disabled buttons have opacity (0.5) and a not-allowed cursor.

### Chips

Category links are bordered controls with counts and a warm-white selected state. Selection is exposed with `aria-current`; the strip scrolls horizontally. Topic tags are small filled links, with a lighter charcoal hover state. Tags support long strings through wrapping and link to a filtered catalog.

### Cards / Containers

Catalog entries stay on the page canvas, separated by bottom seams. Each entry groups a genuine app icon, name, category, arrow, description, topic tag, and license. The main entry link and tag link are separate targets. Hovering the main link changes the name and arrow to the accent. Rows preserve complete descriptions rather than truncating them.

### Inputs / Fields

Search and native selects use Lifted Graphite with a (1px) Control Silver border. Search is (51px) tall on desktop and (48px) on mobile; selects are (51px) and (43px). Search focus is rendered on its container with an accent border and (1px) outline, replacing the input's own outline. The slash hint exposes the keyboard shortcut visually. Labels remain available to assistive technology. The implementation has no error-validation visual variant to document.

### Navigation

Header links use muted text, brightening on hover and for the current page. The brand and GitHub destination remain explicit accessible links when the layout compresses. Footer and breadcrumbs repeat the same restrained typography and underline hover treatment. The mobile suggestion link keeps its text in the accessible name while visually presenting an arrow.

### Spotlight

Each complete spotlight is one link, combining an editorial title, authentic screenshot, app identity, license/category metadata, and circular arrow. The screenshot retains its aspect ratio. Stages clip overflow intentionally; the IINA stage contains the screenshot while Rectangle is positioned to extend below the stage edge. This pattern may showcase real applications but must not substitute invented product UI.

### Accessibility and discovery states

The page supplies a keyboard-visible skip link, semantic navigation and headings, a search landmark, named inputs, and a polite atomic live result count. Global keyboard focus uses an accent outline (2px) offset by (5px). Screenshot links have descriptive accessible labels and meaningful image alternatives; app icons beside app names use empty alternatives to avoid repetition. Source and image credits are available in native disclosure elements on detail pages.

Search, category, tag, and sort choices are reflected in the URL and restored with browser history. Clearing filters returns focus to search. The empty state offers a reset action. With JavaScript disabled, the full app catalog remains available and a note explains that filtering requires JavaScript. Reduced-motion handling also applies to programmatic category scrolling.

## Do's and Don'ts

### Do:

- **Do** preserve the graphite, warm-white, silver, and golden-olive color hierarchy.
- **Do** use genuine application screenshots and retain source and image credits.
- **Do** use seam-separated catalog entries and the established responsive grid.
- **Do** preserve visible focus, semantic labels, live result counts, and reduced-motion handling.
- **Do** keep source, license, and official destination information close to application discovery.

### Don't:

- **Don't** reintroduce the rejected pastel library visual direction.
- **Don't** replace actual application imagery with invented interfaces or decorative artwork.
- **Don't** add shadows, gradients, or glowing surfaces as a default card treatment.
- **Don't** infer new type scales, component variants, or token ramps as shipping implementation rules.
