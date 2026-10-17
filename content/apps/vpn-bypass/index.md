---
name: "VPN Bypass"
summary: "A menu bar app that routes chosen domains and services around a VPN, or forces only selected traffic through it."
category: "Internet"
tags:
  - vpn
  - routing
  - network
  - menu-bar
repository: "https://github.com/GeiserX/VPN-Bypass"
website: "https://geiserx.github.io/VPN-Bypass/"
license: "GPL-3.0"
licenseUrl: "https://github.com/GeiserX/VPN-Bypass/blob/main/LICENSE"
download: "https://github.com/GeiserX/VPN-Bypass/releases"
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - "https://github.com/GeiserX/VPN-Bypass"
  - "https://github.com/GeiserX/VPN-Bypass/blob/main/LICENSE"
  - "https://github.com/GeiserX/VPN-Bypass/releases"
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/GeiserX/VPN-Bypass/main/assets/AppIcon.icns"
    credit: "GeiserX"
    license: "GPL-3.0; upstream app icon, trademarks retained"
---

VPN Bypass manages routes for split tunnelling when a VPN client sends everything through its tunnel. You pick services or domains to skip the VPN, or switch to a mode where only listed destinations use it; a custom mode can send each rule direct, through a specific VPN, a proxy or a Tailscale peer.

Routes are reapplied when the VPN reconnects or the network changes, and domains are re-resolved as their addresses rotate. A command-line tool is included. Check your employer's policy before bypassing a corporate VPN.
