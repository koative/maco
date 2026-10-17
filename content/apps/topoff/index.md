---
name: "TopOff"
summary: "A menu bar app that checks for outdated Homebrew packages and updates them with one click."
category: "Developer tools"
tags:
  - homebrew
  - updates
  - package-manager
  - menu-bar
repository: "https://github.com/ihazgithub/TopOff"
website: "https://github.com/ihazgithub/TopOff"
license: "MIT"
licenseUrl: "https://github.com/ihazgithub/TopOff/blob/main/LICENSE"
download: "https://github.com/ihazgithub/TopOff/releases"
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - "https://github.com/ihazgithub/TopOff"
  - "https://github.com/ihazgithub/TopOff/blob/main/LICENSE"
  - "https://github.com/ihazgithub/TopOff/releases"
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/ihazgithub/TopOff/main/TopOff/TopOff/Assets.xcassets/AppIcon.appiconset/icon_256x256.png"
    credit: "Thomas Haslam"
    license: "MIT; upstream app icon, trademarks retained"
---

TopOff runs Homebrew update checks in the background and shows outdated packages from the menu bar, so upgrades do not depend on remembering to open a terminal. You can update everything at once, update or skip individual packages, and follow progress live.

Optional settings include greedy upgrades for casks that update themselves and automatic cleanup afterwards. It requires Homebrew and, per the project, macOS 14 or later.
