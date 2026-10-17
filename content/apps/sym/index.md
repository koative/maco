---
name: "SYM"
summary: "Symbolicate Apple crash reports by matching them with dSYM files found on your Mac, in Xcode archives or on a server."
category: "Developer tools"
tags:
  - debugging
  - ios
  - xcode
repository: https://github.com/zqqf16/SYM
website: https://github.com/zqqf16/SYM
license: "MIT"
licenseUrl: https://github.com/zqqf16/SYM/blob/master/LICENSE
download: https://github.com/zqqf16/SYM/releases/latest
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/zqqf16/SYM
  - https://github.com/zqqf16/SYM/blob/master/LICENSE
  - https://github.com/zqqf16/SYM/releases/latest
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/zqqf16/SYM/master/SYM/Assets.xcassets/AppIcon.appiconset/icon_256x256.png
    credit: "zqqf16"
    license: "MIT repository asset; name and icon retained by zqqf16"
---

SYM turns raw Apple crash reports into readable stack traces. Open a classic `.crash` or newer IPS report, or paste a log into its editor, and it looks for the matching dSYMs on the Mac, including inside Xcode archives; missing ones can be imported by hand or fetched with a download script of your own. It can also pull crash logs from a connected iOS device and browse an app's sandbox.

The newest published build is 0.8.8 from November 2022, available as a DMG on GitHub releases. The repository has seen later development, and its current README targets macOS 13 or later.
