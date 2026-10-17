---
name: "Swifka"
summary: "A read-only Kafka monitor that browses topics, decodes messages and charts consumer lag without any write access."
category: "Developer tools"
tags:
  - kafka
  - monitoring
  - developer-utilities
  - menu-bar
repository: https://github.com/Ender-Wang/Swifka
website: https://github.com/Ender-Wang/Swifka
license: "GPL-3.0"
licenseUrl: https://github.com/Ender-Wang/Swifka/blob/main/LICENSE
download: https://github.com/Ender-Wang/Swifka/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/Ender-Wang/Swifka
  - https://github.com/Ender-Wang/Swifka/blob/main/LICENSE
  - https://github.com/Ender-Wang/Swifka/releases
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/Ender-Wang/Swifka/main/Swifka/Assets.xcassets/AppIcon.appiconset/Swifka_icon_256x256.png
    credit: "Ender Wang and Swifka contributors"
    license: "GPL-3.0 repository asset; trademarks retained"
---

Swifka connects to Kafka-compatible clusters, including Kafka and Redpanda, and intentionally offers no write operations, so it can be pointed at production without the risk of producing messages or changing settings. It browses topics, partitions and messages, decodes UTF-8, hex, Base64, Protobuf, Avro and JSON payloads (with Schema Registry support), and searches messages by keyword, regular expression or JSON path.

Charts track throughput, consumer-group lag and ISR health live or from stored history, and alert rules can post macOS notifications when lag grows or a broker goes offline. Credentials are kept in the Keychain and the app can stay in the menu bar. Disk images are published on GitHub releases and through the developer's Homebrew tap; version 1.0.0 arrived in February 2026.
