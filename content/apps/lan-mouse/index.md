---
name: "Lan Mouse"
summary: "Share one mouse and keyboard across Macs, Linux and Windows computers on the same local network."
category: "Utilities"
tags:
  - mouse
  - keyboard
  - network
  - cross-platform
repository: https://github.com/feschber/lan-mouse
website: https://github.com/feschber/lan-mouse
license: "GPL-3.0-or-later"
licenseUrl: https://github.com/feschber/lan-mouse/blob/main/LICENSE
download: https://github.com/feschber/lan-mouse/releases/latest
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/feschber/lan-mouse
  - https://github.com/feschber/lan-mouse/blob/main/LICENSE
  - https://github.com/feschber/lan-mouse/blob/main/Cargo.toml
  - https://github.com/feschber/lan-mouse/releases/latest
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/feschber/lan-mouse/main/lan-mouse-gtk/resources/de.feschber.LanMouse.svg
    credit: "Ferdinand Schober and Lan Mouse contributors"
    license: "GPL-3.0-or-later repository asset; name and icon retained by the Lan Mouse project"
---

Lan Mouse is a software KVM switch: moving the pointer off the edge of one screen carries the mouse and keyboard over to another computer on the local network. The project describes itself as an open-source alternative to Synergy and ShareMouse, and each machine in the setup runs its own copy of Lan Mouse.

It is written in Rust and runs on macOS, Windows and Linux, though some Linux desktops can only receive input. The project's GitHub releases include separate Apple silicon and Intel macOS downloads; the bundled Mac build runs from the menu bar rather than the Dock.
