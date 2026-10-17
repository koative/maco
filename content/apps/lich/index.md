---
name: "lich"
summary: "A desktop workspace for terminal coding agents, with real terminals, git worktrees, diffs and pull requests side by side."
category: "Developer tools"
tags:
  - coding-agents
  - terminal
  - git
  - cross-platform
repository: https://github.com/omartelo/lich
website: https://omartelo.github.io/lich/
license: "AGPL-3.0-only"
licenseUrl: https://github.com/omartelo/lich/blob/main/LICENSE
download: https://github.com/omartelo/lich/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/omartelo/lich
  - https://github.com/omartelo/lich/blob/main/LICENSE
  - https://github.com/omartelo/lich/releases
  - https://omartelo.github.io/lich/
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/omartelo/lich/main/build/appicon-mac.png
    credit: "omartelo"
    license: "AGPL-3.0-only (repository license); upstream project asset"
---

lich gives command-line coding agents such as Claude Code, Codex and opencode a desktop home. Each project gets PTY-backed terminal sessions running the agent of your choice, alongside git worktrees, diffs and pull requests, so branching off a task and reviewing what the agent changed happens in the same window.

It ships as a single Go binary that opens its interface in an embedded Chromium window rather than Electron. Releases for macOS (Apple silicon and Intel), Linux and Windows are on GitHub; on the Mac the project's own Homebrew tap installs it as an app. The project is young and moves quickly, with frequent releases.
