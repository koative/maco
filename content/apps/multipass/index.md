---
name: "Multipass"
summary: "Launch and manage lightweight Ubuntu virtual machines from a desktop app or the command line."
category: "Developer tools"
tags:
  - virtual-machines
  - linux
  - cross-platform
repository: https://github.com/canonical/multipass
website: https://canonical.com/multipass
license: "GPL-3.0"
licenseUrl: https://github.com/canonical/multipass/blob/main/LICENSE
download: https://github.com/canonical/multipass/releases/latest
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/canonical/multipass
  - https://github.com/canonical/multipass/blob/main/LICENSE
  - https://github.com/canonical/multipass/releases/latest
  - https://canonical.com/multipass/install
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/canonical/multipass/main/src/client/gui/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_512.png
    credit: "Canonical Ltd."
    license: "GPL-3.0 project asset; Canonical and Ubuntu trademarks retained"
---

Multipass is Canonical's tool for spinning up Ubuntu virtual machines with a single command. It downloads and updates images for you, supports cloud-init metadata for simulating small deployments, and on macOS runs instances with QEMU or, optionally, VirtualBox.

Most workflows use the `multipass` command, with a desktop GUI and tray menu for launching and managing instances. The macOS installer package is published on GitHub releases.
