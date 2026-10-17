---
name: "Calyx"
summary: "A terminal built on Ghostty for supervising several coding agents at once, with one approval inbox and diff reviews."
category: "Developer tools"
tags:
  - terminal
  - coding-agents
  - git
repository: https://github.com/yuuichieguchi/Calyx
website: https://getcalyx.app
license: "MIT"
licenseUrl: https://github.com/yuuichieguchi/Calyx/blob/main/LICENSE
download: https://github.com/yuuichieguchi/Calyx/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/yuuichieguchi/Calyx
  - https://github.com/yuuichieguchi/Calyx/blob/main/LICENSE
  - https://github.com/yuuichieguchi/Calyx/releases
  - https://getcalyx.app
  - https://formulae.brew.sh/cask/calyx
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/yuuichieguchi/Calyx/main/Calyx/Resources/AppIcon.icns
    credit: "Yuuichi Eguchi and Calyx contributors"
    license: "MIT repository asset; trademarks retained"
---

Calyx is a terminal aimed at running coding agents such as Claude Code, Codex and OpenCode side by side. A sidebar shows which agent is working, blocked or finished, permission prompts from every pane collect in a single approval panel, and an overview lays all panes out as cards.

A Git sidebar shows working changes and history, and comments left on individual diff lines can be sent to an agent as a review. Agents can in turn inspect panes, command output and each other through MCP and a bundled CLI. The project states that Calyx requires macOS 26 on Apple silicon; it is available from GitHub releases or as a Homebrew cask.
