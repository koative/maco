---
name: Highball
summary: Sets up Wine-based environments for running Windows games, guided by an open per-game compatibility database.
category: Games
tags:
  - gaming
  - game-library
  - wine
  - compatibility
repository: https://github.com/gauthierpiarrette/highball
website: https://gethighball.com/
license: GPL-3.0
licenseUrl: https://github.com/gauthierpiarrette/highball/blob/main/LICENSE
download: https://github.com/gauthierpiarrette/highball/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/gauthierpiarrette/highball
  - https://github.com/gauthierpiarrette/highball/blob/main/LICENSE
  - https://github.com/gauthierpiarrette/highball/releases
  - https://formulae.brew.sh/cask/highball
  - https://gethighball.com/
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/gauthierpiarrette/highball/main/Resources/AppIcon.png
    credit: Gauthier Piarrette and Highball contributors
    license: GPL-3.0 repository asset; Highball name and logo retained by the project
---

Highball prepares a Windows game environment on the Mac: it downloads a Wine-based engine, picks a graphics translation layer such as DXMT, DXVK or Apple's D3DMetal per game, and can install Steam or connect an Epic library. Its game verdicts come from a separate, openly licensed compatibility database that records which titles run, which renderer to use, and which games are blocked by kernel anti-cheat.

The project targets Apple silicon Macs running macOS 14 or later and labels itself beta. The app is GPL-3.0; D3DMetal is not redistributed but downloaded separately under Apple's own license. Builds are on GitHub releases and in Homebrew as the `highball` cask.
