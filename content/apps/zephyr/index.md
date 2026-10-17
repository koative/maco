---
name: "Zephyr"
summary: "A Mihomo (Clash Meta) proxy client with subscriptions, rule modes, TUN mode and a rule-patching engine."
category: "Internet"
tags:
  - proxy
  - network
  - cross-platform
repository: https://github.com/Juwan-Hwang/Zephyr
website: https://juwan-hwang.github.io/Zephyr/
license: "MIT"
licenseUrl: https://github.com/Juwan-Hwang/Zephyr/blob/main/LICENSE
download: https://github.com/Juwan-Hwang/Zephyr/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/Juwan-Hwang/Zephyr
  - https://github.com/Juwan-Hwang/Zephyr/blob/main/LICENSE
  - https://github.com/Juwan-Hwang/Zephyr/blob/main/README_en.md
  - https://github.com/Juwan-Hwang/Zephyr/releases
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/Juwan-Hwang/Zephyr/main/apps/desktop/src-tauri/icons/icon.png
    credit: "Juwan Hwang"
    license: "MIT; upstream project icon, trademarks retained"
---

Zephyr is a desktop front end for the Mihomo proxy core. It imports subscriptions from a URL or file, manages several YAML configurations, switches between rule, global and direct modes, and can set the system proxy or route traffic through TUN mode, with live connection and traffic views.

Its Prism engine applies declarative patches to rules, scores nodes by latency and reliability for automatic selection and failover, and runs user scripts in a sandbox. The Tauri app ships full and lite macOS disk images for Apple silicon and Intel. The project states that its code is AI-generated and that its security measures have not been fully verified, so weigh that before routing traffic through it.
