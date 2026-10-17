---
name: "FanBar"
summary: "A menu bar fan controller that shows Mac temperatures and fan speeds and applies fixed or curve-based fan presets."
category: "Utilities"
tags:
  - temperature
  - system-monitoring
  - menu-bar
  - widgets
repository: https://github.com/helson-lin/FanBar
website: https://getfanbar.com
license: "GPL-3.0"
licenseUrl: https://github.com/helson-lin/FanBar/blob/main/LICENSE
download: https://github.com/helson-lin/FanBar/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/helson-lin/FanBar
  - https://github.com/helson-lin/FanBar/blob/main/LICENSE
  - https://github.com/helson-lin/FanBar/releases
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/helson-lin/FanBar/main/Assets/FanBar.icns
    credit: "helson-lin and FanBar contributors"
    license: "GPL-3.0; upstream project asset, trademarks retained"
---

FanBar reads CPU, GPU, SSD and battery temperatures together with fan speeds, and puts the readings in the menu bar. Normal cooling stays under macOS automatic control; when you want more, you can set a fixed target speed or pick a preset such as Silent or Performance, each backed by an editable temperature-to-speed curve kept within the fan's reported range.

The project lists macOS 11 or later on Apple silicon and Intel Macs that expose readable fan data, and says it tries to hand control back to the system when a preset ends or the app quits. A desktop widget is available on macOS 14 and later. Notarized builds are published on GitHub releases.
