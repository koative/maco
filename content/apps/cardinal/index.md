---
name: "Cardinal"
summary: "A fast file-name search window for macOS with Everything-style query syntax, filters and Quick Look previews."
category: "Utilities"
tags:
  - search
  - files
  - finder
  - quick-look
repository: https://github.com/cardisoft/cardinal
website: https://github.com/cardisoft/cardinal
license: "MIT"
licenseUrl: https://github.com/cardisoft/cardinal/blob/master/LICENSE
download: https://github.com/cardisoft/cardinal/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/cardisoft/cardinal
  - https://github.com/cardisoft/cardinal/blob/master/LICENSE
  - https://github.com/cardisoft/cardinal/releases
  - https://formulae.brew.sh/cask/cardinal-search
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/cardisoft/cardinal/master/cardinal/mac-icon_1024x1024.png
    credit: "Cardinal contributors"
    license: "MIT; upstream project asset, trademarks retained"
---

Cardinal indexes the file system and returns matching paths as you type, using a query language modelled on the Windows tool Everything. Spaces combine terms, and operators narrow results by extension, size, folder, Finder tag, or file contents; quoted phrases, regular expressions, and path fragments are also supported.

A global hotkey brings the window forward, Space opens a Quick Look preview, and keyboard shortcuts reveal results in Finder or copy their paths. The interface can switch between several languages. Builds for Apple silicon, Intel, and universal Macs are published on GitHub, and Homebrew installs it as the `cardinal-search` cask.
