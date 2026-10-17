---
name: "CodexIsland"
summary: "Show remaining usage for AI coding subscriptions in a live overlay around the MacBook notch."
category: "Developer tools"
tags: ["notch", "menu-bar", "usage", "agents"]
repository: "https://github.com/ericjypark/codex-island"
website: "https://codexisland.com"
license: "MIT"
licenseUrl: "https://github.com/ericjypark/codex-island/blob/main/LICENSE"
download: "https://github.com/ericjypark/codex-island/releases"
featured: false
added: "2026-10-17"
verified: "2026-10-17"
sources: ["https://github.com/ericjypark/codex-island", "https://github.com/ericjypark/codex-island/blob/main/LICENSE", "https://github.com/ericjypark/codex-island/releases"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/ericjypark/codex-island/main/Assets/codexisland-app-icon-light.png", "credit": "Eric Park and CodexIsland contributors", "license": "MIT; upstream project asset, trademarks retained"}]
screenshots: []
---

CodexIsland draws a small pill over the MacBook notch that expands on hover and click to show quota windows, reset times and usage history for one or two coding assistant subscriptions, including Claude Code and Codex. Macs without a notch get a menu bar pill instead.

It reads the credentials already stored by each provider's command-line tool and asks the provider's own service for usage data; cost figures are estimates from local logs. The app is unsigned, so the first launch needs manual approval.
