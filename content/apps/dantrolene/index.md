---
name: "Dantrolene"
summary: "Keeps a Mac from locking while it is on a chosen home Wi-Fi network, while still dimming the display when idle."
category: "Utilities"
tags:
  - menu-bar
  - wi-fi
  - screen-lock
  - display
repository: https://github.com/kageroumado/dantrolene
website: https://kagerou.glass/dantrolene/
license: "MIT"
licenseUrl: https://github.com/kageroumado/dantrolene/blob/main/LICENSE
download: https://github.com/kageroumado/dantrolene/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/kageroumado/dantrolene
  - https://github.com/kageroumado/dantrolene/blob/main/LICENSE
  - https://github.com/kageroumado/dantrolene/releases
  - https://apps.apple.com/app/id6790834557
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/kageroumado/dantrolene/main/.github/dantrolene-icon.png
    credit: "kageroumado"
    license: "MIT; upstream project asset, trademarks retained"
---

Dantrolene lives in the menu bar and holds off the screen lock while the Mac is connected to a network you mark as home, with Always On and Off modes as alternatives. The display still dims after inactivity, and leaving the trusted network restores normal locking. The project notes that the Wi-Fi name is not authenticated, so a network copying that name would also trigger the hold.

It needs macOS 26 or later and Location Services permission to read the network name. The GitHub edition controls the real backlight and can work with Adrafinil for closed-lid holds; a sandboxed Mac App Store edition dims with overlay windows instead. A Homebrew cask is offered through the developer's tap.
