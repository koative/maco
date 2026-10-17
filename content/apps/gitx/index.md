---
name: "GitX"
summary: "A community-maintained Mac Git client for browsing history, staging changes and committing, continuing the GitX lineage."
category: "Developer tools"
tags:
  - git
  - version-control
repository: "https://github.com/gitx/gitx"
website: "https://github.com/gitx/gitx"
license: "GPL-2.0-only"
licenseUrl: "https://github.com/gitx/gitx/blob/master/COPYING"
download: "https://github.com/gitx/gitx/releases"
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - "https://github.com/gitx/gitx"
  - "https://github.com/gitx/gitx/blob/master/COPYING"
  - "https://github.com/gitx/gitx/releases"
  - "https://github.com/rowanj/gitx"
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/gitx/gitx/master/assets/AppIcon-macOS-Default-256x256%402x.png"
    credit: "GitX contributors"
    license: "GPL-2.0-only; upstream app icon, trademarks retained"
---

GitX is a lightweight graphical client for Git that shows branch history, diffs and staged changes and handles commits from a Mac interface. Over the years it was maintained in several forks, including the long-popular rowanj build; this repository consolidates that work into one community version.

Releases provide separate Apple silicon and Intel builds, and the Homebrew cask also installs a `gitx` command-line launcher.
