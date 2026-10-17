---
name: "Rayburst"
summary: "A download manager for HTTP, BitTorrent, magnet, ED2K and streaming-media tasks, built on a maintained aria2 fork."
category: "Internet"
tags:
  - download-manager
  - bittorrent
  - downloads
  - cross-platform
repository: https://github.com/AnInsomniacy/rayburst
website: https://rayburst.pages.dev
license: "MIT"
licenseUrl: https://github.com/AnInsomniacy/rayburst/blob/main/LICENSE
download: https://github.com/AnInsomniacy/rayburst/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/AnInsomniacy/rayburst
  - https://github.com/AnInsomniacy/rayburst/blob/main/LICENSE
  - https://github.com/AnInsomniacy/rayburst/releases
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/AnInsomniacy/rayburst/main/src-tauri/icons/128x128%402x.png
    credit: "AnInsomniacy and Rayburst contributors"
    license: "MIT repository asset; Rayburst name and logo retained by the project"
---

Rayburst queues downloads over HTTP and HTTPS, SFTP, ED2K and BitTorrent, including magnet links and `.torrent` files, and can capture HLS and DASH streams with track and subtitle selection. Its engine is Aria2 Next, the project's own maintained fork of aria2, inside a Tauri desktop app that adds per-task and scheduled speed limits, a history of completed downloads, and an optional bridge for its browser extension.

The app was previously called Motrix Next; the original Motrix has its own entry in this catalog, and settings from the earlier app are not carried over. GitHub releases provide separate macOS disk images for Apple Silicon and Intel alongside Windows and Linux builds.
