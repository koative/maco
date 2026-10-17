---
name: "WebTorrent Desktop"
summary: "A torrent client that streams video and audio while it downloads, and shares with both BitTorrent and WebTorrent peers."
category: "Internet"
tags:
  - bittorrent
  - streaming
  - video
  - cross-platform
repository: https://github.com/webtorrent/webtorrent-desktop
website: https://webtorrent.io/desktop/
license: "MIT"
licenseUrl: https://github.com/webtorrent/webtorrent-desktop/blob/master/LICENSE
download: https://webtorrent.io/desktop/
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/webtorrent/webtorrent-desktop
  - https://github.com/webtorrent/webtorrent-desktop/blob/master/LICENSE
  - https://github.com/webtorrent/webtorrent-desktop/releases
  - https://webtorrent.io/desktop/
  - https://formulae.brew.sh/cask/webtorrent
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/webtorrent/webtorrent-desktop/master/static/WebTorrent.icns
    credit: "WebTorrent, LLC"
    license: "MIT repository asset; WebTorrent name and logo retained by WebTorrent, LLC"
---

WebTorrent Desktop opens torrent files and magnet links and starts playing media almost immediately, fetching the pieces needed for playback first. Besides ordinary BitTorrent peers it can connect to WebTorrent peers running in web browsers, and it supports AirPlay, Chromecast and DLNA for playing on other screens.

The repository still receives commits, but the latest packaged release, 0.24.0, dates from August 2020. It is an Electron app available from the official website, GitHub releases and the `webtorrent` Homebrew cask.
