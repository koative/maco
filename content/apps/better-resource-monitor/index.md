---
name: "Better Resource Monitor"
summary: "A small menu bar monitor for CPU, memory, storage, GPU and network use, with optional warning colours."
category: "Utilities"
tags:
  - menu-bar
  - system-monitoring
  - monitoring
repository: https://github.com/alexx855/better-resource-monitor
website: https://better-resource-monitor.alexpedersen.dev/
license: "MIT"
licenseUrl: https://github.com/alexx855/better-resource-monitor/blob/main/LICENSE
download: https://github.com/alexx855/better-resource-monitor/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/alexx855/better-resource-monitor
  - https://github.com/alexx855/better-resource-monitor/blob/main/LICENSE
  - https://github.com/alexx855/better-resource-monitor/releases
  - https://apps.apple.com/app/better-resource-monitor/id6758237306
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/alexx855/better-resource-monitor/main/src-tauri/icons/icon.png
    credit: "Alex Pedersen"
    license: "MIT repository asset; name and icon retained by Alex Pedersen"
---

Better Resource Monitor keeps a handful of system figures in the menu bar: processor and memory load, free storage, GPU use and network throughput. It deliberately leaves out fans, temperatures and sensor history, aiming instead to be a quiet, low-overhead readout you can glance at during the day. An optional setting tints the menu bar item when load or free space crosses a fixed threshold.

The project says the app is sandboxed, makes no network requests and needs no administrator helper. It is built with Rust and Tauri; the author publishes DMG builds on GitHub and the same app on the Mac App Store.
