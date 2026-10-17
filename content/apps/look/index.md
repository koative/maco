---
name: "look"
summary: "A keyboard-first launcher for apps, files, folders, clipboard history and quick commands, with a local index."
category: "Productivity"
tags:
  - launcher
  - search
  - keyboard
  - clipboard
  - cross-platform
repository: https://github.com/kunkka19xx/look
website: https://noah-code.com/docs/look
license: "GPL-3.0-or-later"
licenseUrl: https://github.com/kunkka19xx/look/blob/main/LICENSE
download: https://github.com/kunkka19xx/look/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/kunkka19xx/look
  - https://github.com/kunkka19xx/look/blob/main/LICENSE
  - https://github.com/kunkka19xx/look/releases
  - https://formulae.brew.sh/cask/look
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/kunkka19xx/look/main/apps/macos/LauncherApp/look-app/Assets.xcassets/AppIcon.appiconset/icon_256x256.png
    credit: "kunkka19xx and look contributors"
    license: "GPL-3.0-or-later repository asset; trademarks retained"
---

look is a launcher in the Spotlight and Raycast mould: one search field opens apps, files and folders, recalls clipboard history and runs quick commands without reaching for the mouse. On macOS the interface is SwiftUI on top of a Rust search core, and the index, clipboard and history stay on the Mac without telemetry.

The same project ships Windows and Linux versions. Mac releases come as signed, notarized archives on GitHub and through Homebrew, which installs the Apple silicon build; Intel Macs use a separate archive from the releases page.
