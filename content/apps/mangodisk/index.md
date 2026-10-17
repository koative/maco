---
name: "MangoDisk"
summary: "A disk cleaner and space analyzer that also finds duplicates, uninstalls apps and manages startup items."
category: "Utilities"
tags:
  - cleanup
  - disk-usage
  - uninstaller
  - storage
  - cross-platform
repository: https://github.com/harry0703/MangoDisk
website: https://mangodisk.app
license: "GPL-3.0"
licenseUrl: https://github.com/harry0703/MangoDisk/blob/main/LICENSE
download: https://github.com/harry0703/MangoDisk/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/harry0703/MangoDisk
  - https://github.com/harry0703/MangoDisk/blob/main/LICENSE
  - https://github.com/harry0703/MangoDisk/releases
  - https://formulae.brew.sh/cask/mangodisk
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/harry0703/MangoDisk/main/src-tauri/icons/icon.icns
    credit: "harry0703 and MangoDisk contributors"
    license: "GPL-3.0 repository asset; MangoDisk name and logo retained by the project"
---

MangoDisk scans system and app caches, logs, browser data, Xcode and package-manager leftovers, container caches and project build folders, then groups the results by reclaimable space so each item can be reviewed before it is removed. It also hunts down large and duplicate files and maps disk usage as a treemap or sunburst chart.

Beyond storage, it uninstalls apps along with their leftovers, toggles startup items, clears privacy traces such as browsing history, and can show CPU, memory and network figures in the menu bar. Optional AI explanations describe what an item does before you act; official builds include a daily free allowance, or you can connect your own AI service. Releases are published for macOS, Windows and Linux, and the Mac version is also a Homebrew cask.
