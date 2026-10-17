---
name: "Core-Monitor"
summary: "Monitor CPU, GPU, memory, temperatures and power, and set custom fan curves on Apple silicon Macs."
category: "Utilities"
tags:
  - system-monitoring
  - menu-bar
  - temperature
  - cpu
repository: https://github.com/offyotto/Core-Monitor
website: https://github.com/offyotto/Core-Monitor
license: "GPL-3.0"
licenseUrl: https://github.com/offyotto/Core-Monitor/blob/main/LICENSE
download: https://github.com/offyotto/Core-Monitor/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/offyotto/Core-Monitor
  - https://github.com/offyotto/Core-Monitor/blob/main/LICENSE
  - https://github.com/offyotto/Core-Monitor/releases
  - https://apps.apple.com/us/app/core-monitor/id6762558526?mt=12
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/offyotto/Core-Monitor/main/Core-Monitor/Assets.xcassets/AppIcon.appiconset/icon-256.png
    credit: "offyotto"
    license: "GPL-3.0; upstream app icon, trademarks retained"
---

Core-Monitor reads sensor data from the SMC and system APIs and shows it in the menu bar, a dashboard, and on the Touch Bar where present. It covers CPU, GPU, memory, battery, thermals, power draw, fans, network and disk.

Fan control goes through a privileged helper that hands control back to macOS when you stop or the app disconnects. The project supports only Apple silicon and macOS 13 or later. It is available as a direct download and on the Mac App Store.
