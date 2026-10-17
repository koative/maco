---
name: LuxShot
summary: A menu bar tool that reads text, QR codes and barcodes from any area of the screen you select.
category: Utilities
tags:
  - ocr
  - menu-bar
  - text-extraction
  - screenshots
repository: https://github.com/lukebuild/LuxShot
website: https://github.com/lukebuild/LuxShot
license: GPL-3.0
licenseUrl: https://github.com/lukebuild/LuxShot/blob/main/LICENSE
download: https://github.com/lukebuild/LuxShot/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/lukebuild/LuxShot
  - https://github.com/lukebuild/LuxShot/blob/main/LICENSE
  - https://github.com/lukebuild/LuxShot/releases
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/lukebuild/LuxShot/main/LuxShot/Assets.xcassets/AppIcon.appiconset/icon_512x512.png
    credit: lukebuild and LuxShot contributors
    license: GPL-3.0 repository asset; project name and icon retained by the project
---

LuxShot sits in the menu bar and waits for a global shortcut. Drag a box around anything on screen and it recognises the text with Apple's Vision framework, copying the result to the clipboard; QR codes and barcodes in the selection are decoded too. Options control whether line breaks are kept, links are opened automatically, and the recognised text is read aloud.

Recent captures are kept in a history list, and recognition happens on the Mac. The project offers a zipped app on GitHub; it is not notarized, so macOS asks you to confirm the first launch.
