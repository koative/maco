---
name: "Tribler"
summary: "A BitTorrent client that routes downloads through its own onion-style relay network to keep peers anonymous."
category: "Internet"
tags: ["bittorrent", "privacy", "peer-to-peer", "downloads", "cross-platform"]
repository: "https://github.com/Tribler/tribler"
website: "https://www.tribler.org"
license: "GPL-3.0"
licenseUrl: "https://github.com/Tribler/tribler/blob/main/LICENSE.txt"
download: "https://github.com/Tribler/tribler/releases"
featured: false
added: "2026-10-17"
verified: "2026-10-17"
sources: ["https://github.com/Tribler/tribler", "https://github.com/Tribler/tribler/blob/main/LICENSE.txt", "https://github.com/Tribler/tribler/releases/tag/v8.4.3"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/Tribler/tribler/main/build/debian/tribler/usr/share/icons/hicolor/256x256/apps/org.tribler.Tribler.png", "credit": "Tribler contributors", "license": "GPL-3.0 repository asset; Tribler name and logo retained by the project"}]
screenshots: []
---

Tribler is a BitTorrent client that has been in development since 2004. Instead of connecting you directly to other peers, it can relay traffic through several hops of fellow Tribler users, an approach modelled on Tor, and it adds built-in search for content shared on its peer-to-peer network.

The extra hops trade download speed for privacy, and the number of hops is adjustable. macOS disk images accompany each GitHub release alongside the Windows and Linux builds.
