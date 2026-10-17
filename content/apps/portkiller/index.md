---
name: "PortKiller"
summary: "Lists listening ports with their processes so you can stop them, and manages Kubernetes port forwards from the menu bar."
category: "Developer tools"
tags:
  - network
  - processes
  - menu-bar
  - cross-platform
repository: https://github.com/productdevbook/port-killer
website: https://github.com/productdevbook/port-killer
license: "MIT"
licenseUrl: https://github.com/productdevbook/port-killer/blob/main/LICENSE
download: https://github.com/productdevbook/port-killer/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/productdevbook/port-killer
  - https://github.com/productdevbook/port-killer/blob/main/LICENSE
  - https://github.com/productdevbook/port-killer/releases
  - https://formulae.brew.sh/cask/portkiller
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/productdevbook/port-killer/main/platforms/macos/Resources/AppIcon.icns
    credit: "PortKiller contributors"
    license: "MIT; upstream project asset, trademarks retained"
---

PortKiller answers the familiar "address already in use" problem without a trip to lsof. It finds every listening TCP port, shows which process owns it, and stops that process gracefully or forcefully with a click. Ports can be searched, grouped by kind, starred as favorites, or added to a watch list that sends notifications.

It also starts and supervises kubectl port-forward sessions, reconnecting them when they drop, and shows active Cloudflare Tunnel connections. On the Mac it runs from the menu bar; a Windows version is also available. Downloads are on GitHub releases and in Homebrew.
