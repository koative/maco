---
name: "Helium"
summary: "A Chromium-based browser with a bundled ad blocker and self-hostable supporting services, currently in beta."
category: "Internet"
tags:
  - browser
  - privacy
  - chromium
  - cross-platform
repository: https://github.com/imputnet/helium
website: https://helium.computer
license: "GPL-3.0 AND BSD-3-Clause"
licenseUrl: https://github.com/imputnet/helium/blob/main/LICENSE
download: https://helium.computer
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/imputnet/helium
  - https://github.com/imputnet/helium/blob/main/LICENSE
  - https://github.com/imputnet/helium/blob/main/LICENSE.ungoogled_chromium
  - https://github.com/imputnet/helium-macos
  - https://github.com/imputnet/helium-macos/releases
  - https://formulae.brew.sh/cask/helium-browser
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/imputnet/helium-macos/main/resources/assets/app.icns
    credit: "imputnet and Helium contributors"
    license: "GPL-3.0 repository asset; Helium name and logo retained by the project"
---

Helium is a web browser built on Chromium with code imported from ungoogled-chromium. It includes its own fork of uBlock Origin with the project's filters and defaults, and the services behind extension downloads, !bangs, filter lists, updates and crash reports are published as open source so they can be self-hosted.

The project is still in beta. Mac builds come from the separate helium-macos packaging repository and are offered through helium.computer, GitHub releases and the `helium-browser` Homebrew cask, with automatic updates. Helium's own code is GPL-3.0; code imported from ungoogled-chromium keeps its BSD-3-Clause license.
