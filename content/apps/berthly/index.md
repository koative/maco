---
name: Berthly
summary: A desktop front end for Apple's container tool to build images, run containers and VMs, and follow their logs.
category: Developer tools
tags:
  - containers
  - menu-bar
  - virtualization
repository: https://github.com/henrywang/Berthly
website: https://berthly.net
license: Apache-2.0
licenseUrl: https://github.com/henrywang/Berthly/blob/main/LICENSE
download: https://github.com/henrywang/Berthly/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/henrywang/Berthly
  - https://github.com/henrywang/Berthly/blob/main/LICENSE
  - https://github.com/henrywang/Berthly/releases
  - https://berthly.net
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/henrywang/Berthly/main/Berthly/Assets.xcassets/AppIcon.appiconset/icon_256x256.png
    credit: Henry Wang and Berthly contributors
    license: Apache-2.0 repository asset
---

Berthly gives Apple's open-source `container` command-line tool a windowed interface. It lists and pulls images, builds them from a Dockerfile dropped onto the window, creates and runs containers and machines, manages networks, volumes and registry logins, and streams logs or opens a terminal attached to a running container. Live resource charts and pinned favourites sit in a menu bar extra.

Because it drives Apple's tooling, the requirements are the same: an Apple silicon Mac running macOS 26 or later with `container` installed, which Berthly can set up for you. Disk images are published on the GitHub releases page.
