---
name: Clash Party
summary: A desktop GUI for the Mihomo (Clash Meta) proxy core, with subscription management, TUN mode and config overrides.
category: Internet
tags:
  - proxy
  - network
  - menu-bar
  - cross-platform
repository: https://github.com/mihomo-party-org/clash-party
website: https://clashparty.org/
license: GPL-3.0
licenseUrl: https://github.com/mihomo-party-org/clash-party/blob/smart_core/LICENSE
download: https://github.com/mihomo-party-org/clash-party/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/mihomo-party-org/clash-party
  - https://github.com/mihomo-party-org/clash-party/blob/smart_core/LICENSE
  - https://github.com/mihomo-party-org/clash-party/releases
  - https://formulae.brew.sh/cask/clash-party
  - https://clashparty.org/
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/mihomo-party-org/clash-party/smart_core/build/icon.png
    credit: mihomo-party-org and Clash Party contributors
    license: GPL-3.0 repository asset; Clash Party name and logo retained by the project
---

Clash Party, formerly Mihomo Party, wraps the Mihomo proxy core in a desktop interface that exposes most of its common settings. It bundles both the standard Mihomo core and a "Smart" core that can choose nodes automatically, offers a TUN mode that does not require a separate service install, and supports configuration overrides, WebDAV backup and subscription handling through Sub-Store.

It is a client only: proxy servers or subscriptions must come from elsewhere. The project and most of its documentation are in Chinese. Builds for macOS, Windows and Linux are published on GitHub releases, and the Mac version is also available as the `clash-party` Homebrew cask.
