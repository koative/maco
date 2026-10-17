---
name: ungoogled-chromium
summary: Chromium without its dependencies on Google web services, plus optional privacy
  and control tweaks.
category: Internet
tags:
- browser
- privacy
- chromium
repository: https://github.com/ungoogled-software/ungoogled-chromium
website: https://github.com/ungoogled-software/ungoogled-chromium
license: BSD-3-Clause
licenseUrl: https://github.com/ungoogled-software/ungoogled-chromium/blob/master/LICENSE
download: https://github.com/ungoogled-software/ungoogled-chromium-macos/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
sources:
- https://github.com/ungoogled-software/ungoogled-chromium
- https://github.com/ungoogled-software/ungoogled-chromium/blob/master/LICENSE
- https://github.com/ungoogled-software/ungoogled-chromium-macos/releases
- https://formulae.brew.sh/cask/ungoogled-chromium
- https://ungoogled-software.github.io/ungoogled-chromium-binaries/
---

ungoogled-chromium applies patches to Google's Chromium that remove calls to Google web services and pre-built binaries while keeping the default Chromium experience. Additional privacy and control options exist, but most must be turned on manually.

The main repository holds the shared patches and build tooling; macOS builds come from the project's ungoogled-chromium-macos repository and the official Homebrew cask. Because Google services are stripped out, some conveniences of a regular Chromium build may need extra setup. Chromium and its bundled components carry their own licenses.
