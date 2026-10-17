---
name: "CCMenu"
summary: "A menu bar monitor that shows the status of GitHub Actions workflows and CCTray-compatible CI builds."
category: "Developer tools"
tags:
  - menu-bar
  - continuous-integration
  - github-actions
  - notifications
repository: https://github.com/ccmenu/ccmenu2
website: https://ccmenu.org
license: "Apache-2.0"
licenseUrl: https://github.com/ccmenu/ccmenu2/blob/main/LICENSE
download: https://apps.apple.com/us/app/ccmenu/id603117688
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/ccmenu/ccmenu2
  - https://github.com/ccmenu/ccmenu2/blob/main/LICENSE
  - https://ccmenu.org
  - https://apps.apple.com/us/app/ccmenu/id603117688
  - https://github.com/ccmenu/ccmenu2/releases
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/ccmenu/ccmenu2/main/CCMenu/Assets.xcassets/AppIcon.appiconset/icon-256.png
    credit: "Erik Doernenburg and CCMenu contributors"
    license: "Apache-2.0; upstream project asset, trademarks retained"
---

CCMenu sits in the menu bar and shows at a glance whether your builds are passing, failing or running. It can watch GitHub Actions workflows, for all branches or a single one, and any CI server that publishes a CCTray-format feed. A pipeline window shows details of the last build and commit, notifications report starts and finishes, and a timer estimates how long a running build has left. Clicking a pipeline opens its page on the server.

This is CCMenu 2, a Swift and SwiftUI rewrite that replaced the classic CCMenu and requires macOS 14 or later. The developers recommend the Mac App Store version, because builds downloaded from GitHub releases have no update check. Private GitHub repositories need an OAuth sign-in whose scopes are broader than the read-only access CCMenu uses, and CCTray feeds only support HTTP Basic authentication. The Homebrew cask named `ccmenu` still installs the classic version.
