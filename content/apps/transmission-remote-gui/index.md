---
name: Transmission Remote GUI
summary: A SwiftUI client that manages a local or remote Transmission BitTorrent daemon over its RPC interface.
category: Internet
tags:
  - bittorrent
  - downloads
  - remote-control
  - network
repository: https://github.com/epaxpax/transmission-remote-gui
website: https://epaxpax.github.io/transmission-remote-gui/
license: MIT
licenseUrl: https://github.com/epaxpax/transmission-remote-gui/blob/main/LICENSE
download: https://github.com/epaxpax/transmission-remote-gui/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/epaxpax/transmission-remote-gui
  - https://github.com/epaxpax/transmission-remote-gui/blob/main/LICENSE
  - https://github.com/epaxpax/transmission-remote-gui/releases
  - https://epaxpax.github.io/transmission-remote-gui/
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/epaxpax/transmission-remote-gui/main/docs/icon.png
    credit: Viktor Falcsik
    license: MIT repository asset
---

Transmission Remote GUI connects to a running Transmission BitTorrent daemon over its RPC interface and manages it from a Mac window. It lists torrents with sortable, configurable columns, filters them by status, tracker, folder or label, and adds new downloads from magnet links, URLs, dropped `.torrent` files or links opened from Finder and the browser.

The project describes itself as an independent Swift rewrite modelled on the features of the older cross-platform transgui client, and adds rules for per-tracker or per-label seeding limits. It requires macOS 14 or later, and disk images are published on GitHub releases. It is a young project still in 0.x development.
