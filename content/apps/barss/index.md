---
name: "baRSS"
summary: "A menu bar RSS and Atom reader that checks feeds in the background and opens new articles in your browser."
category: "Internet"
tags:
  - rss
  - feeds
  - menu-bar
  - reading
repository: https://github.com/relikd/baRSS
website: https://github.com/relikd/baRSS
license: "MIT"
licenseUrl: https://github.com/relikd/baRSS/blob/main/LICENSE
download: https://github.com/relikd/baRSS/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/relikd/baRSS
  - https://github.com/relikd/baRSS/blob/main/LICENSE
  - https://github.com/relikd/baRSS/releases/tag/v1.6.2
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/relikd/baRSS/main/baRSS/Artwork/AppIcon.icns
    credit: "relikd"
    license: "MIT repository asset; trademarks retained"
---

baRSS keeps RSS and Atom subscriptions in a status bar menu, refreshes them on a schedule you set, and marks what is new. There is no built-in article viewer: choosing an item opens it in your browser, which keeps the app very small.

The update interval is adjustable, and requests reuse caching headers so unchanged feeds are not downloaded again. The project requires macOS 10.13 or later and distributes builds through GitHub releases and its own Homebrew tap rather than the App Store.
