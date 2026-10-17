---
name: "Redis Pro"
summary: "A SwiftUI desktop client for browsing keys, editing values and inspecting Redis servers."
category: "Developer tools"
tags:
  - redis
  - database
repository: https://github.com/cmushroom/redis-pro
website: https://github.com/cmushroom/redis-pro
license: "GPL-3.0"
licenseUrl: https://github.com/cmushroom/redis-pro/blob/main/LICENSE
download: https://github.com/cmushroom/redis-pro/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/cmushroom/redis-pro
  - https://github.com/cmushroom/redis-pro/blob/main/LICENSE
  - https://github.com/cmushroom/redis-pro/releases
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/cmushroom/redis-pro/main/redis-pro/Assets.xcassets/AppIcon.appiconset/redis%40256.png
    credit: "cmushroom and Redis Pro contributors"
    license: "GPL-3.0 project asset based on the Redis logo; Redis trademarks belong to their owner"
---

Redis Pro is a graphical client for working with Redis servers: browse and edit keys, inspect server info and configuration, view the slow log and client list, and connect through SSH. It is written in SwiftUI and takes cues from Sequel Ace's straightforward approach.

The README targets macOS 11 or later and Redis 3 through 6. The latest release on GitHub dates from January 2024, and Homebrew has disabled its cask because the build fails Gatekeeper checks, so expect to approve the app manually.
