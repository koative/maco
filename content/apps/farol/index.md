---
name: "Farol"
summary: "A terminal built on libghostty for running several coding agents side by side and seeing which needs attention."
category: "Developer tools"
tags:
  - terminal
  - coding-agents
  - git
  - workspaces
repository: https://github.com/snowztech/farol
website: https://farol.sh
license: "MIT"
licenseUrl: https://github.com/snowztech/farol/blob/main/LICENSE
download: https://github.com/snowztech/farol/releases/latest
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/snowztech/farol
  - https://github.com/snowztech/farol/blob/main/LICENSE
  - https://github.com/snowztech/farol/releases/latest
  - https://github.com/snowztech/farol/releases
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/snowztech/farol/main/assets/Farol.icns
    credit: "Lucas Neves Pereira (Farol)"
    license: "MIT; upstream project asset, trademarks retained"
---

Farol is a terminal app organised around coding agents. Each agent runs in its own session, and Farol indicates whether it is working, finished, or waiting for input. A new task can start Claude Code or Codex in a fresh Git worktree, optionally seeded from a Jira ticket or GitHub issue. The terminal itself is libghostty, the engine behind Ghostty, and it reads an existing Ghostty configuration.

The project describes itself as early software with rough edges. Releases are signed and notarized, need an Apple silicon Mac with macOS 14 or later, and are available as a DMG on GitHub or from the project's own Homebrew tap.
