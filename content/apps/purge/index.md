---
name: 'Purge'
summary: 'Find and clear caches and junk files on your Mac, with safety labels and Trash-first removal.'
category: 'Utilities'
tags:
  - cleanup
  - storage
  - maintenance
  - disk-usage
repository: https://github.com/jithin-sabu/purge-app
website: https://purgemac.com/
license: MIT
licenseUrl: https://github.com/jithin-sabu/purge-app/blob/main/LICENSE
download: https://github.com/jithin-sabu/purge-app/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/jithin-sabu/purge-app
  - https://github.com/jithin-sabu/purge-app/blob/main/LICENSE
  - https://github.com/jithin-sabu/purge-app/releases
  - https://purgemac.com/
  - https://formulae.brew.sh/cask/purge
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/jithin-sabu/purge-app/main/Assets/purge-iOS-Default-1024x1024%401x.png
    credit: 'Jithin Sabu (Purge)'
    license: 'MIT repository asset; Purge name and icon retained by the project'
---

Purge scans for the caches and leftovers a Mac accumulates on its own, from app caches to developer tool data such as Xcode derived data, package manager caches and stale `node_modules` folders, and sorts the results into categories with their sizes. Every item carries a plain-language explanation and a safety label, so you can check what something is before clearing it.

Files are moved to the Trash rather than deleted, and the app never empties the Trash itself; a few things, such as iOS simulator runtimes and Time Machine local snapshots, are removed through their own system tools and cannot be restored that way. It is distributed through GitHub releases and the `purge` Homebrew cask.
