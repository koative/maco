---
name: "MQTTX"
summary: "A desktop MQTT 5.0 client for opening several broker connections and testing publish and subscribe flows."
category: "Developer tools"
tags:
  - network
  - testing
  - cross-platform
repository: https://github.com/emqx/MQTTX
website: https://mqttx.app
license: "Apache-2.0"
licenseUrl: https://github.com/emqx/MQTTX/blob/main/LICENSE
download: https://mqttx.app/downloads
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/emqx/MQTTX
  - https://github.com/emqx/MQTTX/blob/main/LICENSE
  - https://github.com/emqx/MQTTX/releases
  - https://formulae.brew.sh/cask/mqttx
  - https://mqttx.app/downloads
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/emqx/MQTTX/main/public/icons/mac/Icon.icns
    credit: "EMQ Technologies"
    license: "Apache-2.0; upstream project asset, trademarks retained"
---

MQTTX is a client for working with MQTT brokers during development and testing. Each connection gets its own conversation-style pane where sent and received messages appear in order, which makes it easy to keep several clients open at once and check how topics, retained messages and MQTT 5.0 properties behave.

It is made by EMQ, the company behind the EMQX broker, but connects to any standard broker. Payloads can be formatted as JSON, Base64 or hex, and the same project also ships a command-line client and a web version. Mac builds are on GitHub releases, the official site and Homebrew.
