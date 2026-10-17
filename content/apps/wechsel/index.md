---
name: "wechsel"
summary: "Switch Bluetooth audio devices from a keyboard-driven, Spotlight-style window instead of the menu bar."
category: "Utilities"
tags:
  - bluetooth
  - audio
  - keyboard-shortcuts
repository: https://github.com/friedrichweise/wechsel
website: https://github.com/friedrichweise/wechsel
license: GPL-3.0
licenseUrl: https://github.com/friedrichweise/wechsel/blob/master/LICENSE.md
download: https://github.com/friedrichweise/wechsel/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/friedrichweise/wechsel
  - https://github.com/friedrichweise/wechsel/blob/master/LICENSE.md
  - https://github.com/friedrichweise/wechsel/releases
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/friedrichweise/wechsel/master/wechsel/Assets.xcassets/AppIcon.appiconset/Artboard-3.png
    credit: "Friedrich Weise and wechsel contributors"
    license: "GPL-3.0 repository asset; name and logo retained by the project"
---

wechsel opens a small search window on a global hotkey and lists your paired Bluetooth devices, so you can connect or disconnect headphones and speakers without reaching for the Bluetooth menu. It is a lightweight, open alternative to paid utilities that do the same job.

It is built on the system IOBluetooth framework and the approach used by blueutil. The most recent release, 1.0.2, dates from May 2022; builds are unsigned, so macOS may need the quarantine flag cleared before first launch, as the README explains. Downloads are on the GitHub releases page, and the author also maintains a Homebrew tap.
