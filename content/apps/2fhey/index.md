---
name: "2FHey"
summary: "Detects verification codes arriving in Messages and copies them to the clipboard, with optional auto-paste."
category: "Productivity"
tags:
  - two-factor
  - clipboard
  - menu-bar
  - messaging
repository: https://github.com/SoFriendly/2fhey
website: https://2fhey.com
license: CC0-1.0
licenseUrl: https://github.com/SoFriendly/2fhey/blob/main/LICENSE
download: https://2fhey.com
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/SoFriendly/2fhey
  - https://github.com/SoFriendly/2fhey/blob/main/LICENSE
  - https://2fhey.com
  - https://sofriendly.gumroad.com/l/2fhey
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/SoFriendly/2fhey/main/AppIcon.icon/Assets/2fa%202.png
    credit: "SoFriendly and 2FHey contributors"
    license: "CC0-1.0 repository asset (Icon Composer artwork layer); name and logo retained by the project"
---

2FHey watches the Messages database for incoming one-time codes from iMessage and SMS. When a message looks like a verification text, it pulls out the code, recognizes the sending service where it can, copies the code to the clipboard and shows a notification; it can also paste the code for you, and a shortcut re-reads recent messages if one was missed.

Detection happens on the Mac using keyword and pattern files that the community extends through pull requests. It needs Full Disk Access to read Messages and Accessibility for auto-paste. The app is distributed from the official website through Gumroad on a pay-what-you-want basis; the source is dedicated to the public domain under CC0.
