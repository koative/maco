---
name: "Pi Stats"
summary: "A menu bar monitor for Pi-hole that shows blocking statistics and can pause filtering on one or more servers."
category: "Utilities"
tags:
  - menu-bar
  - network
  - monitoring
  - dns
repository: https://github.com/Bunn/PiStats
website: https://github.com/Bunn/PiStats
license: "BSD-2-Clause"
licenseUrl: https://github.com/Bunn/PiStats/blob/master/LICENSE
download: https://apps.apple.com/us/app/pi-stats/id1514075262
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/Bunn/PiStats
  - https://github.com/Bunn/PiStats/blob/master/LICENSE
  - https://apps.apple.com/us/app/pi-stats/id1514075262
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/Bunn/PiStats/master/images/icon.png
    credit: "Fernando Bunn"
    license: "BSD-2-Clause repository asset; app name and icon retained by the author"
---

Pi Stats keeps an eye on a Pi-hole from the Mac menu bar: queries, blocked requests and other counters, with charts and quick controls to disable or re-enable blocking. It can track several Pi-hole instances, stores their passwords in the Keychain, and can also show the server's temperature, uptime, load and memory use.

Current versions target Pi-hole 6 and require macOS 15.2 or later. The author distributes the Mac build through the Mac App Store; an iOS version comes from the same repository.
