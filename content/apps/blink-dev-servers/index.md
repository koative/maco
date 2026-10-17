---
name: "Blink"
summary: "A menu bar helper that lists running local dev servers and booted iOS simulators, with one-click restarts."
category: "Developer tools"
tags:
  - menu-bar
  - processes
  - developer-utilities
  - monitoring
repository: https://github.com/megootronic/Blink
website: https://mo.software/apps
license: "MIT"
licenseUrl: https://github.com/megootronic/Blink/blob/main/LICENSE
download: https://github.com/megootronic/Blink/releases/latest
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/megootronic/Blink
  - https://github.com/megootronic/Blink/blob/main/LICENSE
  - https://github.com/megootronic/Blink/releases/latest
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/megootronic/Blink/main/Blink/Assets.xcassets/AppIcon.appiconset/icon_256.png
    credit: "mo.software (Blink)"
    license: "MIT; upstream project asset, trademarks retained"
---

Blink watches the TCP ports listening on your Mac and lists each local development server with its port, project name, and detected framework, from Next.js and Vite to Django and Rails. A server can be stopped or restarted from the menu bar, and when a restart fails the row shows the reason with the output ready to copy. Clicking an entry opens it in the browser.

It also tracks booted iOS simulators, including the app running inside, and can relaunch that app without returning to Xcode. Blink relies on standard tools such as `lsof` and `xcrun simctl`, makes no network requests, and does not check for updates itself. It requires macOS 14 and is distributed as a DMG on GitHub Releases.
