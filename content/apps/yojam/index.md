---
name: "Yojam"
summary: "A browser picker that routes each clicked link to the right browser, profile or app using your own rules."
category: "Utilities"
tags:
  - browser
  - links
  - menu-bar
  - automation
  - privacy
repository: https://github.com/fluffypony/yojam
website: https://yoj.am
license: "BSD-3-Clause"
licenseUrl: https://github.com/fluffypony/yojam/blob/main/LICENSE
download: https://github.com/fluffypony/yojam/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/fluffypony/yojam
  - https://github.com/fluffypony/yojam/blob/main/LICENSE
  - https://github.com/fluffypony/yojam/releases
  - https://yoj.am
  - https://formulae.brew.sh/cask/yojam
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/fluffypony/yojam/main/Sources/Yojam/Resources/Assets.xcassets/AppIcon.appiconset/icon_256x256.png
    credit: "Riccardo Spagni"
    license: "BSD-3-Clause (repository license); upstream project asset"
---

Yojam sets itself as the default browser and decides where every link should go. Rules can match a domain, URL prefix, regular expression or the app the link came from, and send it to a particular browser, a named profile in Chrome, Firefox, Edge and other browsers, a private window, a specific display, or a native app. When no rule applies, a small picker appears at the cursor.

It also strips common tracking parameters, can rewrite URLs, handles `mailto:` links, and offers to import setups from Bumpr, Choosy or Finicky. Settings are mirrored to an editable JSON file and can sync between Macs through iCloud. It runs from the menu bar and is distributed as a DMG and through Homebrew.
