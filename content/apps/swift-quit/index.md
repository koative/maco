---
name: "Swift Quit"
summary: "Quits Mac apps automatically when you close their last window, with per-app include and exclude lists."
category: "Utilities"
tags:
  - app-management
  - automation
repository: https://github.com/onebadidea/swiftquit
website: https://swiftquit.com
license: GPL-3.0
licenseUrl: https://github.com/onebadidea/swiftquit/blob/main/LICENSE
download: https://github.com/onebadidea/swiftquit/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/onebadidea/swiftquit
  - https://github.com/onebadidea/swiftquit/blob/main/LICENSE
  - https://github.com/onebadidea/swiftquit/releases
  - https://swiftquit.com
  - https://formulae.brew.sh/cask/swift-quit
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/onebadidea/swiftquit/main/Swift%20Quit/Assets.xcassets/AppIcon.appiconset/icon_256x256.png
    credit: "onebadidea and Swift Quit contributors"
    license: "GPL-3.0 repository asset; name and logo retained by the project"
---

Swift Quit changes what the red close button does: once the last window of an app is closed, the app quits instead of lingering in the Dock. You can apply this to every app or only to a chosen list, and exclude apps that should keep running without windows.

It needs Accessibility permission to watch windows close. The author warns that some users have seen windows close unexpectedly, so it is worth testing with your own apps. The latest release, 1.5, is from March 2023 and is available from GitHub, the project website, or the `swift-quit` Homebrew cask.
