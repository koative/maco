---
name: "QtScrcpy"
summary: "Mirror and control Android phones from your Mac over USB or Wi-Fi, with keyboard mapping and group control."
category: "Utilities"
tags:
  - android
  - screen-mirroring
  - cross-platform
repository: https://github.com/barry-ran/QtScrcpy
website: https://github.com/barry-ran/QtScrcpy
license: Apache-2.0
licenseUrl: https://github.com/barry-ran/QtScrcpy/blob/dev/LICENSE
download: https://github.com/barry-ran/QtScrcpy/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/barry-ran/QtScrcpy
  - https://github.com/barry-ran/QtScrcpy/blob/dev/LICENSE
  - https://github.com/barry-ran/QtScrcpy/releases
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/barry-ran/QtScrcpy/dev/QtScrcpy/res/QtScrcpy.icns
    credit: "Barry and QtScrcpy contributors"
    license: "Apache-2.0 repository asset; name and logo retained by the project"
---

QtScrcpy shows an Android device's screen in a desktop window and passes mouse and keyboard input back to it, without rooting the phone. It connects over USB or across the local network once USB debugging is enabled, and can drive several devices at once from a single window.

Beyond plain mirroring, it supports custom key-mapping scripts that translate keyboard and mouse actions into touches, which is mostly used for playing mobile games on a computer. The macOS downloads on the releases page bundle their dependencies, including ADB, and come as separate Intel and arm64 disk images.
