---
name: "WireGuard"
summary: "The official WireGuard VPN client for macOS, managing tunnels from the menu bar with on-demand activation rules."
category: "Privacy & security"
tags:
  - vpn
  - network
  - menu-bar
  - tunneling
repository: https://git.zx2c4.com/wireguard-apple
website: https://www.wireguard.com
license: "MIT"
licenseUrl: https://git.zx2c4.com/wireguard-apple/tree/COPYING
download: https://apps.apple.com/us/app/wireguard/id1451685025
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://git.zx2c4.com/wireguard-apple
  - https://git.zx2c4.com/wireguard-apple/tree/COPYING
  - https://www.wireguard.com/install/
  - https://apps.apple.com/us/app/wireguard/id1451685025
assets:
  - path: ./assets/icon.png
    source: https://git.zx2c4.com/wireguard-apple/plain/Sources/WireGuardApp/UI/macOS/Assets.xcassets/AppIcon.appiconset/WireGuardMacAppIcon256.png
    credit: "WireGuard LLC / Jason A. Donenfeld"
    license: "WireGuard name and logo are registered trademarks of Jason A. Donenfeld; not covered by the MIT code license"
---

WireGuard for macOS is the project's own client for the WireGuard VPN protocol. Tunnels are created by hand or imported from configuration files, edited in a text view with syntax colouring, and switched on or off from a menu bar item. Per-tunnel on-demand rules can bring a connection up automatically depending on the Wi-Fi network or wired connection in use.

The source for the iOS and macOS apps lives in a shared repository on the project's own Git server (a GitHub copy is a mirror), and the official build is distributed through the Mac App Store.
