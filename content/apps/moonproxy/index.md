---
name: "MoonProxy"
summary: "A desktop client for frp tunnels that manages frpc, proxy rules, health checks and traffic stats."
category: "Internet"
tags:
  - network
  - tunneling
  - self-hosted
repository: https://github.com/MoonProxyHQ/moonproxy-desktop
website: https://moonproxy.app
license: "MIT"
licenseUrl: https://github.com/MoonProxyHQ/moonproxy-desktop/blob/main/LICENSE
download: https://github.com/MoonProxyHQ/moonproxy-desktop/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/MoonProxyHQ/moonproxy-desktop
  - https://github.com/MoonProxyHQ/moonproxy-desktop/blob/main/LICENSE
  - https://github.com/MoonProxyHQ/moonproxy-desktop/releases
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/MoonProxyHQ/moonproxy-desktop/main/docs/app-icons/icon_512x512%402x-macos.png
    credit: "MoonProxyHQ"
    license: "MIT; upstream project asset, trademarks retained"
---

MoonProxy is a graphical front end for frp's client, aimed at exposing local services such as a NAS, a development server or a game server through your own frps server without editing `frpc.toml` by hand. It bundles frpc, manages TCP, UDP, HTTP and HTTPS rules, and shows connection state, port health and traffic.

You still need access to an frps server; MoonProxy only manages the client side. The website and default README are in Chinese, with an English README available. Builds for Apple silicon and Intel Macs are on GitHub releases.
