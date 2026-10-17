---
name: "TrayceGUI"
summary: "Watch HTTP, gRPC, MySQL and Postgres traffic inside Docker containers, with a built-in API client."
category: "Developer tools"
tags:
  - network
  - http
  - api
  - inspection
  - cross-platform
repository: https://github.com/evanrolfe/trayce_gui
website: https://github.com/evanrolfe/trayce_gui
license: "GPL-3.0"
licenseUrl: https://github.com/evanrolfe/trayce_gui/blob/main/LICENSE.txt
download: https://github.com/evanrolfe/trayce_gui/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/evanrolfe/trayce_gui
  - https://github.com/evanrolfe/trayce_gui/blob/main/LICENSE.txt
  - https://github.com/evanrolfe/trayce_gui/releases
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/evanrolfe/trayce_gui/main/include/icon.icns
    credit: "Evan Rolfe and TrayceGUI contributors"
    license: "GPL-3.0 (repository license); upstream project asset"
---

TrayceGUI is a desktop network monitor aimed at containerised development. It captures requests flowing through Docker containers and shows them in a readable list, covering HTTP and HTTPS as well as gRPC, MySQL and Postgres traffic, so you can see what a service is actually sending without adding logging to it.

The same app includes an API client for composing and sending requests, and it can work with collections in the Bruno format. It is built with Flutter, and macOS DMGs and Linux packages are published on GitHub Releases.
