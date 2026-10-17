---
name: "SlowQuitApps"
summary: "Require holding Command-Q for a moment before an app quits, preventing accidental exits."
category: "Utilities"
tags: ["keyboard-shortcuts", "menu-bar"]
repository: "https://github.com/dteoh/SlowQuitApps"
website: "https://github.com/dteoh/SlowQuitApps"
license: "GPL-2.0-or-later"
licenseUrl: "https://github.com/dteoh/SlowQuitApps/blob/master/LICENSE"
download: "https://github.com/dteoh/SlowQuitApps/releases"
featured: false
added: "2026-10-17"
verified: "2026-10-17"
sources: ["https://github.com/dteoh/SlowQuitApps", "https://github.com/dteoh/SlowQuitApps/blob/master/LICENSE", "https://github.com/dteoh/SlowQuitApps/releases", "https://github.com/dteoh/SlowQuitApps/blob/master/README.md"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/dteoh/SlowQuitApps/master/SlowQuitApps/Images.xcassets/AppIcon.appiconset/256pt%401x.png", "credit": "fancyme for SlowQuitApps", "license": "GPL-2.0-or-later; upstream project asset, trademarks retained"}]
screenshots: []
---

SlowQuitApps adds a short hold delay to Command-Q across the system, with an on-screen countdown while the shortcut is held. Releasing early cancels the quit, so a slip of the finger near Command-W no longer closes a whole app. Delay length, an app allow-list and the overlay are configured with `defaults` commands.

The last release dates from December 2020 and the README describes Mojave as its development target. macOS asks for Accessibility permission, which may need to be granted again after updates; treat it as an older utility and check that it behaves on your macOS version.
