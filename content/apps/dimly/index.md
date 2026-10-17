---
name: 'Dimly'
summary: 'A menu bar app for per-display brightness, contrast, color profiles and input switching on external monitors.'
category: 'Utilities'
tags:
  - brightness
  - monitors
  - display
  - menu-bar
  - night-shift
repository: https://github.com/Punshnut/macos-dimly
website: https://feuerbacher.me/projects/dimly
license: AGPL-3.0
licenseUrl: https://github.com/Punshnut/macos-dimly/blob/dev/LICENSE
download: https://github.com/Punshnut/macos-dimly/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/Punshnut/macos-dimly
  - https://github.com/Punshnut/macos-dimly/blob/dev/LICENSE
  - https://github.com/Punshnut/macos-dimly/releases
  - https://feuerbacher.me/projects/dimly
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/Punshnut/macos-dimly/dev/Media/Dimly_Logo.png
    credit: 'Punshnut (Dimly)'
    license: 'AGPL-3.0 repository asset; Dimly name and logo retained by the project'
---

Dimly controls each connected display from the menu bar. Where a monitor supports DDC/CI it adjusts real hardware brightness and contrast, switches inputs and puts the panel to sleep; otherwise it falls back to a dimming overlay. It also changes resolution, refresh rate and ICC color profiles, applies warm, cool or inverted filters, and toggles Night Shift and True Tone.

Named profiles can be applied by hotkey, on a schedule including sunrise and sunset, or when a particular monitor connects, and a fixed panic shortcut restores every display. It requires macOS 14 or later. The source is AGPL-3.0 from 11 September 2026; releases published before that date remain under the MIT license they shipped with.
