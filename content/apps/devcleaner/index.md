---
name: "DevCleaner"
summary: "Reclaim disk space taken up by Xcode device support files, archives, derived data and simulator caches."
category: "Developer tools"
tags:
  - cleanup
  - storage
  - disk-usage
  - developer-utilities
repository: https://github.com/vashpan/xcode-dev-cleaner
website: https://github.com/vashpan/xcode-dev-cleaner
license: "GPL-3.0"
licenseUrl: https://github.com/vashpan/xcode-dev-cleaner/blob/master/LICENSE
download: https://github.com/vashpan/xcode-dev-cleaner/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/vashpan/xcode-dev-cleaner
  - https://github.com/vashpan/xcode-dev-cleaner/blob/master/LICENSE
  - https://github.com/vashpan/xcode-dev-cleaner/releases
  - https://apps.apple.com/app/devcleaner/id1388020431
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/vashpan/xcode-dev-cleaner/master/DevCleaner/Resources/Assets.xcassets/DevCleanerIcon.imageset/DevCleaner%20Icon%20-%20Tahoe-macOS-Default-256x256%402x.png
    credit: "vashpan and DevCleaner contributors"
    license: "GPL-3.0; upstream project asset, trademarks retained"
---

DevCleaner scans the folders where Xcode accumulates data, such as device support symbols, archives, derived data, old documentation and simulator caches, and shows how much each takes up so you can choose what to remove. It can also remind you to run a scan again after a while.

Because it depends on Xcode's internal folder layout, the author warns it could break with future Xcode versions and recommends a backup before cleaning. Builds are on GitHub releases and the Mac App Store.
