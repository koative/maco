---
name: 'Brew Browser'
summary: 'A desktop app for browsing, searching, installing and upgrading Homebrew formulae and casks.'
category: 'Developer tools'
tags:
  - homebrew
  - package-manager
  - updates
  - cross-platform
repository: https://github.com/msitarzewski/brew-browser
website: https://brew-browser.zerologic.com
license: MIT
licenseUrl: https://github.com/msitarzewski/brew-browser/blob/main/LICENSE
download: https://github.com/msitarzewski/brew-browser/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/msitarzewski/brew-browser
  - https://github.com/msitarzewski/brew-browser/blob/main/LICENSE
  - https://github.com/msitarzewski/brew-browser/releases
  - https://brew-browser.zerologic.com
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/msitarzewski/brew-browser/main/src-tauri/icons/icon.png
    credit: 'Michael Sitarzewski (Brew Browser)'
    license: 'MIT repository asset; Brew Browser name and icon retained by the project'
---

Brew Browser puts a graphical interface on Homebrew. A dashboard summarizes installed formulae and casks, pending updates and disk usage; the library view lists everything installed with outdated and pinned markers; and the discover view searches the full Homebrew catalog by name or category. Installs, upgrades and removals run with live output.

It can also install curated bundles of packages for common setups, show trending packages from Homebrew's public analytics, and snapshot your setup. The main release is a signed Tauri app for macOS 13 and later (also built for Linux), and the repository additionally contains a SwiftUI version for macOS 26. There is no telemetry or account.
