---
name: "dupeGuru"
summary: "Finds duplicate files across chosen folders by name or content, with special modes for music and pictures."
category: "Utilities"
tags:
  - files
  - cleanup
  - storage
  - cross-platform
repository: https://github.com/arsenetar/dupeguru
website: https://dupeguru.voltaicideas.net
license: "GPL-3.0"
licenseUrl: https://github.com/arsenetar/dupeguru/blob/master/LICENSE
download: https://github.com/arsenetar/dupeguru/releases/tag/4.3.1
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/arsenetar/dupeguru
  - https://github.com/arsenetar/dupeguru/blob/master/LICENSE
  - https://github.com/arsenetar/dupeguru/releases/tag/4.3.1
  - https://dupeguru.voltaicideas.net
  - https://formulae.brew.sh/cask/dupeguru
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/arsenetar/dupeguru/master/images/dupeguru.icns
    credit: "dupeGuru contributors"
    license: "GPL-3.0 repository asset; trademarks retained"
---

dupeGuru scans the folders you choose and groups files that look like duplicates, so you can review each set before deleting, moving or copying the extra copies. Matching can work on filenames or file contents, a music mode can also compare tags, and a picture mode looks for images that are visually similar rather than byte-identical.

The Qt-based app is a long-running project for macOS, Windows and Linux. Its most recent macOS build is 4.3.1 from July 2022, distributed as a zip on GitHub; Homebrew has since disabled its cask because that build fails Gatekeeper checks.
