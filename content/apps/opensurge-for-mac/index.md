---
name: OpenSurge for Mac
summary: Turns a Mac into a rule-based proxy gateway for other devices on the network, with per-device routing policies.
category: Internet
tags:
  - proxy
  - network
  - menu-bar
repository: https://github.com/YTwsy/OpenSurge-for-Mac
website: https://opensurge.pages.dev
license: GPL-3.0-only
licenseUrl: https://github.com/YTwsy/OpenSurge-for-Mac/blob/master/LICENSE
download: https://github.com/YTwsy/OpenSurge-for-Mac/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/YTwsy/OpenSurge-for-Mac
  - https://github.com/YTwsy/OpenSurge-for-Mac/blob/master/LICENSE
  - https://github.com/YTwsy/OpenSurge-for-Mac/blob/master/README.en.md
  - https://github.com/YTwsy/OpenSurge-for-Mac/releases
  - https://opensurge.pages.dev
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/YTwsy/OpenSurge-for-Mac/master/apps/desktop/Resources/OpenSurgeAppIcon.png
    credit: OpenSurge for Mac contributors
    license: GPL-3.0-only repository asset
---

OpenSurge for Mac runs a mihomo-based transparent proxy on the Mac and lets phones, TVs, consoles and other devices route through it. Devices can be pointed at the Mac by hand as a side router, or the app can take over DHCP and DNS for a LAN or a separate downstream network, and each registered device can be given its own egress policy.

Configuration happens in a local web interface backed by a desktop window and a menu bar panel that reports status and recovery warnings; a privileged helper does the networking work. The GitHub releases provide separate Apple silicon and Intel installer packages that are explicitly unsigned, so Gatekeeper asks for confirmation on first install.
