---
name: "Clash Verge Rev"
summary: "A desktop client for the Mihomo (Clash Meta) proxy core with profile, rule and TUN mode management."
category: "Internet"
tags:
  - proxy
  - network
  - vpn
  - cross-platform
repository: https://github.com/clash-verge-rev/clash-verge-rev
website: https://www.clashverge.dev
license: "GPL-3.0"
licenseUrl: https://github.com/clash-verge-rev/clash-verge-rev/blob/dev/LICENSE
download: https://github.com/clash-verge-rev/clash-verge-rev/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/clash-verge-rev/clash-verge-rev
  - https://github.com/clash-verge-rev/clash-verge-rev/blob/dev/LICENSE
  - https://github.com/clash-verge-rev/clash-verge-rev/releases
  - https://formulae.brew.sh/cask/clash-verge-rev
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/clash-verge-rev/clash-verge-rev/dev/src-tauri/icons/icon.png
    credit: "Clash Verge Rev contributors"
    license: "GPL-3.0; upstream project asset, trademarks retained"
---

Clash Verge Rev continues the original Clash Verge project as a graphical front end for the Mihomo proxy core, also known as Clash.Meta. It imports the configuration profiles you supply, switches proxy groups and nodes, edits rules visually, and routes traffic through either the system proxy or a TUN virtual network interface.

Profiles can be extended with merge and script enhancements, and settings can be backed up over WebDAV. The app is built with Rust and Tauri; the project's releases cover macOS 11 or later on Intel and Apple silicon, alongside Windows and Linux, and a Homebrew cask is available.
