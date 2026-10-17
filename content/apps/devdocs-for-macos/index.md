---
name: "DevDocs for macOS"
summary: "An unofficial Mac viewer for DevDocs that puts searchable API documentation in its own app window."
category: "Developer tools"
tags:
  - reference
  - development
  - search
repository: https://github.com/dteoh/devdocs-macos
website: https://github.com/dteoh/devdocs-macos
license: "GPL-3.0"
licenseUrl: https://github.com/dteoh/devdocs-macos/blob/master/LICENSE.txt
download: https://github.com/dteoh/devdocs-macos/releases/latest
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/dteoh/devdocs-macos
  - https://github.com/dteoh/devdocs-macos/blob/master/LICENSE.txt
  - https://github.com/dteoh/devdocs-macos/releases
  - https://devdocs.io
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/dteoh/devdocs-macos/master/devdocs-macos/Assets.xcassets/AppIcon.appiconset/256pt@2x.png
    credit: "Darren Teoh"
    license: "GPL-3.0 repository asset"
---

DevDocs for macOS wraps the DevDocs.io documentation browser in a dedicated Mac app, so language and framework references live in their own windows instead of a browser tab. It registers a `devdocs-macos://` URL scheme that can open a search in a given documentation set, which makes it easy to call from editors, launchers or AppleScript.

The content comes from the DevDocs website, so it is not an offline mirror on its own. Development has been quiet: the latest release, 0.7.0, dates from July 2021 and is published as a zip on GitHub.
