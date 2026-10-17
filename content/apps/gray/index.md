---
name: Gray
summary: Choose light or dark appearance for individual apps instead of using one
  system-wide setting.
category: Utilities
tags:
- customization
- themes
- native
repository: https://github.com/zenangst/Gray
website: https://github.com/zenangst/Gray
license: MIT
licenseUrl: https://github.com/zenangst/Gray/blob/master/LICENSE.md
download: https://github.com/zenangst/Gray/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
- https://github.com/zenangst/Gray
- https://github.com/zenangst/Gray/blob/master/LICENSE.md
- https://github.com/zenangst/Gray/releases
assets:
- path: ./assets/icon.png
  source: https://raw.githubusercontent.com/zenangst/Gray/master/Resources/Assets.xcassets/AppIcon.appiconset/icon_256x256%402x.png
  credit: Christoffer Winterkvist
  license: MIT; upstream project asset, trademarks retained
---

Gray lists your installed apps and lets you force selected ones to use the light appearance while the rest of the system stays in dark mode. It works by writing each app's appearance preference, which means an app must be restarted for the change to apply; Gray handles the restart, so save your work first.

It was built around macOS Mojave and its last release is from 2021. Because it only changes standard preferences, the settings remain if you remove the app.
