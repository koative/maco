---
name: "Surge Relay"
summary: "Manage, convert and republish Surge modules from a Mac so every device subscribes to one stable URL."
category: "Internet"
tags:
  - proxy
  - network
  - sync
repository: "https://github.com/EEliberto/SurgeRelay-macOS"
website: "https://github.com/EEliberto/SurgeRelay-macOS"
license: "Apache-2.0"
licenseUrl: "https://github.com/EEliberto/SurgeRelay-macOS/blob/main/LICENSE"
download: "https://github.com/EEliberto/SurgeRelay-macOS/releases/latest"
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - "https://github.com/EEliberto/SurgeRelay-macOS"
  - "https://github.com/EEliberto/SurgeRelay-macOS/blob/main/LICENSE"
  - "https://github.com/EEliberto/SurgeRelay-macOS/releases/latest"
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/EEliberto/SurgeRelay-macOS/main/SurgeRelay/WebResources/app-icon.png"
    credit: "EEliberto and Surge Relay contributors"
    license: "Apache-2.0 repository asset; app name and icon retained by EEliberto and Surge Relay contributors"
---

Surge Relay is a companion tool for people who use the Surge network utility across several Apple devices. It collects module sources in one place, converts them locally using Script-Hub's conversion rules, lets you strip out unwanted rules or MITM hostnames in a graphical editor, and publishes the resulting `.sgmodule` files to iCloud Drive or a private GitHub repository served through Cloudflare.

Devices then subscribe to the fixed published address, so an upstream change only has to be handled once on the Mac. A web interface allows checking status from another device. The interface and documentation are in Chinese; the project states it requires macOS 26 on Apple silicon and ships disk images on GitHub releases. Surge itself is separate commercial software.
