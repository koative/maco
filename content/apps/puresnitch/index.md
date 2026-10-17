---
name: "PureSnitch"
summary: "Watch which hosts your Mac connects to and block untrusted ones with rules enforced by the packet filter."
category: "Privacy & security"
tags:
  - firewall
  - network
  - privacy
  - security
repository: https://github.com/momenbasel/puresnitch
website: https://www.moamenbasel.com/puresnitch/
license: "MIT"
licenseUrl: https://github.com/momenbasel/puresnitch/blob/main/LICENSE
download: https://github.com/momenbasel/puresnitch/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/momenbasel/puresnitch
  - https://github.com/momenbasel/puresnitch/blob/main/LICENSE
  - https://github.com/momenbasel/puresnitch/releases
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/momenbasel/puresnitch/main/Resources/Assets.xcassets/AppIcon.appiconset/icon_256x256.png
    credit: "Moamen Basel"
    license: "MIT; upstream app icon, trademarks retained"
---

PureSnitch shows outgoing network activity, including a world map of destinations, and lets you write allow and block rules, subscribe to blocklists and try DNS over HTTPS. Enforcement is optional and uses the built-in `pf` packet filter through a privileged helper.

It is early software: the project notes that current blocking is host-wide rather than per app, because per-process filtering needs a Network Extension entitlement that the shipping build lacks. Follow its instructions to disable enforcement and remove the helper before uninstalling.
