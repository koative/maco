---
name: "ThinkWatch Lite"
summary: "A local gateway for Claude Code, Codex and other AI clients that routes upstreams, logs costs and filters risky replies."
category: "AI"
tags:
  - coding-agents
  - model-providers
  - routing
  - privacy
  - cross-platform
repository: https://github.com/ThinkWatchProject/ThinkWatch-Lite
website: https://thinkwat.ch/lite/
license: "MIT"
licenseUrl: https://github.com/ThinkWatchProject/ThinkWatch-Lite/blob/main/LICENSE
download: https://github.com/ThinkWatchProject/ThinkWatch-Lite/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/ThinkWatchProject/ThinkWatch-Lite
  - https://github.com/ThinkWatchProject/ThinkWatch-Lite/blob/main/LICENSE
  - https://github.com/ThinkWatchProject/ThinkWatch-Lite/releases
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/ThinkWatchProject/ThinkWatch-Lite/main/src-tauri/icons/icon.icns
    credit: "ThinkWatch"
    license: "MIT; upstream project icon, trademarks retained"
---

ThinkWatch Lite runs on your machine between AI coding clients and the model providers they call. Each client is pointed at the gateway once, with its original configuration backed up; after that, upstreams, models and routing rules change in the gateway alone, with failover when a provider errors and a searchable log of every request and its cost.

It can also swap secrets for placeholders before a request leaves, strip hidden instructions, block answers that try to run dangerous commands, compare relays serving the same model, and scan client MCP servers, skills and hooks. The macOS release is an Apple silicon disk image; Windows and Linux builds are also published.
