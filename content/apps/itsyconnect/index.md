---
name: "Itsyconnect"
summary: "A local desktop client for App Store Connect listings, TestFlight builds, customer reviews and analytics."
category: "Developer tools"
tags:
  - development
  - publishing
  - local-first
  - self-hosted
repository: https://github.com/nickustinov/itsyconnect-macos
website: https://itsyconnect.com
license: MIT
licenseUrl: https://github.com/nickustinov/itsyconnect-macos/blob/main/LICENSE
download: https://github.com/nickustinov/itsyconnect-macos/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/nickustinov/itsyconnect-macos
  - https://github.com/nickustinov/itsyconnect-macos/blob/main/LICENSE
  - https://github.com/nickustinov/itsyconnect-macos/releases
  - https://itsyconnect.com
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/nickustinov/itsyconnect-macos/main/public/icon.png
    credit: "Nick Ustinov"
    license: "MIT repository asset; Itsyconnect name and icon retained by the author"
---

Itsyconnect is an alternative front end for the App Store Connect work that app developers repeat with every release: editing names, descriptions, keywords and release notes across locales, choosing builds and release methods, managing TestFlight groups and testers, answering customer reviews and reading sales and usage analytics. An optional diff mode collects edits locally so they can be reviewed before anything is pushed to Apple.

Data lives in a single local SQLite database, with App Store Connect credentials encrypted and the master key kept in the macOS Keychain. Translation and reply drafting use AI providers only with your own API key, and the same code can run as a self-hosted web dashboard through Docker. The Mac app is a signed DMG on the GitHub releases page and requires macOS 11 or later.
