---
name: "ClawdHome"
summary: "A console for running several OpenClaw or Hermes AI agents on one Mac, each isolated in its own macOS user account."
category: "AI"
tags:
  - agents
  - security
  - local-first
repository: https://github.com/ThinkInAIXYZ/clawdhome
website: https://clawdhome.app
license: "Apache-2.0"
licenseUrl: https://github.com/ThinkInAIXYZ/clawdhome/blob/main/LICENSE
download: https://github.com/ThinkInAIXYZ/clawdhome/releases/latest
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/ThinkInAIXYZ/clawdhome
  - https://github.com/ThinkInAIXYZ/clawdhome/blob/main/LICENSE
  - https://github.com/ThinkInAIXYZ/clawdhome/releases
  - https://clawdhome.app
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/ThinkInAIXYZ/clawdhome/main/ClawdHome/AppIcon.icns
    credit: "ThinkInAIXYZ and ClawdHome contributors"
    license: "Apache-2.0 repository asset; ClawdHome name and icon retained by the project"
---

ClawdHome manages multiple instances of the OpenClaw and Hermes Agent engines on a single Mac. Each agent gets its own macOS user account, data directory and browser profile, so processes, files and Keychain items stay separated by the operating system, and privileged actions go through a dedicated helper rather than the app itself.

One panel covers setup, gateway start and stop, file management, diagnostics, backups and scheduled tasks. It requires macOS 14 or later, and Apple silicon and Intel installer packages are published on GitHub.
