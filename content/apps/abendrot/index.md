---
name: "Abendrot"
summary: "Warm each display around local sunset, with a hotkey to briefly reveal true colour and a scripting CLI."
category: "Utilities"
tags:
  - display
  - night-shift
  - menu-bar
repository: https://github.com/matthewrball/abendrot
website: https://abendrot.app
license: "MIT"
licenseUrl: https://github.com/matthewrball/abendrot/blob/main/LICENSE
download: https://abendrot.app/download/
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/matthewrball/abendrot
  - https://github.com/matthewrball/abendrot/blob/main/LICENSE
  - https://abendrot.app/download/
  - https://github.com/matthewrball/abendrot/releases
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/matthewrball/abendrot/main/App/Resources/Colors.xcassets/AppIcon.appiconset/icon_512.png
    credit: "Matthew Ball"
    license: "MIT; upstream project asset, trademarks retained"
---

Abendrot is a menu bar app that shifts your displays toward warmer colours around local sunset. It picks a warming method per display and falls back to a screen tint where direct adjustment is unavailable; holding a hotkey temporarily restores true colour.

A bundled `abendrot` command-line tool can read state and change warmth, which also makes it scriptable from other tools. The project lists macOS 12 or later and publishes signed downloads on its site and on GitHub.
