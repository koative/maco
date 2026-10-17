---
name: Scrcpy GUI
summary: A graphical front end for scrcpy that builds mirroring commands and manages connected Android devices.
category: Utilities
tags:
  - android
  - screen-mirroring
  - cross-platform
repository: https://github.com/GeorgeEnglezos/Scrcpy-GUI
website: https://github.com/GeorgeEnglezos/Scrcpy-GUI
license: AGPL-3.0
licenseUrl: https://github.com/GeorgeEnglezos/Scrcpy-GUI/blob/main/LICENSE
download: https://github.com/GeorgeEnglezos/Scrcpy-GUI/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/GeorgeEnglezos/Scrcpy-GUI
  - https://github.com/GeorgeEnglezos/Scrcpy-GUI/blob/main/LICENSE
  - https://github.com/GeorgeEnglezos/Scrcpy-GUI/releases
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/GeorgeEnglezos/Scrcpy-GUI/main/ScrcpyGui/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_512.png
    credit: George Englezos and Scrcpy GUI contributors
    license: AGPL-3.0 repository asset; project name and icon retained by the project
---

scrcpy mirrors and controls an Android phone from a computer, but its many options live behind command-line flags. Scrcpy GUI, an unofficial companion project, lays those options out in panels for video, audio, recording and window behaviour, shows the resulting command as you change settings, and keeps favourite configurations for reuse.

It also lists connected devices, helps switch a device to wireless debugging, and tracks the scrcpy sessions it has started. scrcpy and adb must be installed separately, for example with Homebrew; the Flutter app itself is published for macOS, Windows and Linux on GitHub.
