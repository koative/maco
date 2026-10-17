---
name: "ClearDisk"
summary: "A menu bar app that finds rebuildable developer caches and moves the ones you pick to the Trash."
category: "Developer tools"
tags:
  - cleanup
  - storage
  - menu-bar
  - development
repository: https://github.com/bysiber/cleardisk
website: https://bysiber.github.io/cleardisk/
license: "MIT"
licenseUrl: https://github.com/bysiber/cleardisk/blob/main/LICENSE
download: https://github.com/bysiber/cleardisk/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/bysiber/cleardisk
  - https://github.com/bysiber/cleardisk/blob/main/LICENSE
  - https://github.com/bysiber/cleardisk/releases
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/bysiber/cleardisk/main/Resources/AppIcon.png
    credit: "Kadir Can Ozden and ClearDisk contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

ClearDisk scans the places where build tools and package managers pile up data, such as Xcode DerivedData, simulator images, npm and Homebrew caches, Docker, Cargo, and Gradle. Each entry comes with a short explanation and a risk level, and a project scanner looks for stale build folders inside your code directories.

Selected items go to the Trash rather than being deleted outright, so they stay recoverable until you empty it. The menu bar indicator also keeps an eye on overall disk usage. Read the descriptions before cleaning: some caches are cheap to rebuild, others mean large downloads.
