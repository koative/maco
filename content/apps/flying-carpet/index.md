---
name: "Flying Carpet"
summary: "Send files between Mac, Windows, Linux, Android and iOS over an ad hoc Wi-Fi hotspot or a shared network."
category: "Utilities"
tags:
  - file-transfer
  - file-sharing
  - offline
  - cross-platform
repository: https://github.com/spieglt/FlyingCarpet
website: https://github.com/spieglt/FlyingCarpet
license: "GPL-3.0"
licenseUrl: https://github.com/spieglt/FlyingCarpet/blob/main/LICENSE.txt
download: https://github.com/spieglt/FlyingCarpet/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/spieglt/FlyingCarpet
  - https://github.com/spieglt/FlyingCarpet/blob/main/LICENSE.txt
  - https://github.com/spieglt/FlyingCarpet/releases
  - https://formulae.brew.sh/cask/flying-carpet
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/spieglt/FlyingCarpet/main/Apple/macOS/FlyingCarpet/Assets.xcassets/AppIcon.appiconset/fc256.png
    credit: "Theron Spiegl"
    license: "GPL-3.0 repository asset; trademarks retained"
---

Flying Carpet moves files directly between two nearby devices with no internet connection or cloud service involved. In hotspot mode one device hosts an ad hoc Wi-Fi network for the other to join, optionally exchanging the credentials over Bluetooth; in shared-network mode both devices use an existing Wi-Fi or wired network.

Apple platforms cannot start a hotspot programmatically, so transfers between two Apple devices need the shared-network mode. Version 10 cannot talk to earlier releases, so both ends must be updated together. The Mac app is a zipped download on GitHub releases and a Homebrew cask, and a separate iOS version is sold on the App Store.
