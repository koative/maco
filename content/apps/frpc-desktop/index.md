---
name: "Frpc-Desktop"
summary: "A desktop client for the frp reverse proxy that sets up tunnels and proxies through forms instead of config files."
category: "Internet"
tags:
  - tunneling
  - proxy
  - network
  - cross-platform
repository: https://github.com/luckjiawei/frpc-desktop
website: https://jwinks.com/p/frp/
license: "MIT"
licenseUrl: https://github.com/luckjiawei/frpc-desktop/blob/main/LICENSE
download: https://github.com/luckjiawei/frpc-desktop/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/luckjiawei/frpc-desktop
  - https://github.com/luckjiawei/frpc-desktop/blob/main/LICENSE
  - https://github.com/luckjiawei/frpc-desktop/releases/tag/v1.2.7
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/luckjiawei/frpc-desktop/main/src-tauri/icons/128x128%402x.png
    credit: "刘嘉伟 (luckjiawei)"
    license: "MIT repository asset; trademarks retained"
---

frp exposes services on a machine behind NAT or a firewall through a public frp server. Frpc-Desktop is a graphical front end for its client side: you add a server, define TCP, UDP, HTTP or STCP proxies in forms, pick local ports, and start or stop the connection without editing `frpc.toml` by hand. It can download frp releases itself, including through mirrors, and import or export configurations.

It also supports starting at login, multiple languages and searching through many proxies. Builds are published for macOS, Windows and Linux; the interface and documentation are primarily aimed at Chinese-speaking users.
