---
name: betterglobekey
summary: Rework the Globe key to cycle through groups of input sources, with an optional
  settings app.
category: Utilities
tags:
- keyboard
- input
- languages
- remapping
repository: https://github.com/Serpentiel/betterglobekey
website: https://github.com/Serpentiel/betterglobekey
license: MIT
licenseUrl: https://github.com/Serpentiel/betterglobekey/blob/main/LICENSE.md
download: https://github.com/Serpentiel/betterglobekey/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
- https://github.com/Serpentiel/betterglobekey
- https://github.com/Serpentiel/betterglobekey/blob/main/LICENSE.md
- https://github.com/Serpentiel/betterglobekey/releases
- https://formulae.brew.sh/formula/betterglobekey
assets:
- path: ./assets/icon.png
  source: https://raw.githubusercontent.com/Serpentiel/betterglobekey/main/companion/src-tauri/icons/icon.png
  credit: Aleksandr Zaruchevskii
  license: MIT; upstream project asset, trademarks retained
---

betterglobekey replaces the stock Globe key behaviour for people who switch keyboard input sources often. A single press cycles within a collection of input sources and a double press moves between collections, starting from whichever source is active.

It runs as a background service, usually installed with Homebrew and configured in a YAML file; an optional companion app edits the configuration graphically. It needs Accessibility permission, and the Globe key must be set to do nothing in System Settings.
