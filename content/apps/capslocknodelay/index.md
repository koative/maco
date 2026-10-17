---
name: 'CapsLockNoDelay'
summary: 'Removes the short delay macOS adds before Caps Lock turns on, so a quick tap toggles it.'
category: 'Utilities'
tags:
  - keyboard
  - input
repository: https://github.com/gkpln3/CapsLockNoDelay
website: https://github.com/gkpln3/CapsLockNoDelay
license: MIT
licenseUrl: https://github.com/gkpln3/CapsLockNoDelay/blob/main/LICENSE
download: https://github.com/gkpln3/CapsLockNoDelay/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/gkpln3/CapsLockNoDelay
  - https://github.com/gkpln3/CapsLockNoDelay/blob/main/LICENSE
  - https://github.com/gkpln3/CapsLockNoDelay/releases
  - https://formulae.brew.sh/cask/capslocknodelay
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/gkpln3/CapsLockNoDelay/main/CapsLockNoDelay/Assets.xcassets/AppIcon.appiconset/icon-512x512-1.png
    credit: 'Guy Kaplan (CapsLockNoDelay)'
    license: 'MIT repository asset; icon retained by the project'
---

macOS ignores very brief presses of Caps Lock to avoid accidental activation, which gets in the way of anyone who uses the key deliberately or remaps it for input switching. CapsLockNoDelay runs in the background without a window and makes every press count.

It needs Accessibility and Input Monitoring permission and is added as a login item to stay active. The README also documents a one-line `hidutil` setting that does the same job without the app. The latest release is v1.0.8 from December 2022, which the author reports working on macOS Sequoia 15.5; a Homebrew cask is available.
