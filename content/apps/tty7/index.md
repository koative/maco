---
name: "tty7"
summary: "A GPU-rendered terminal whose shells keep running after the window quits, with agent and SSH tools."
category: "Developer tools"
tags: ["terminal", "ssh", "persistence", "agents", "cross-platform"]
repository: "https://github.com/l0ng-ai/tty7"
website: "https://tty7.io"
license: "Apache-2.0"
licenseUrl: "https://github.com/l0ng-ai/tty7/blob/main/LICENSE"
download: "https://github.com/l0ng-ai/tty7/releases"
featured: false
added: "2026-10-17"
verified: "2026-10-17"
sources: ["https://github.com/l0ng-ai/tty7", "https://github.com/l0ng-ai/tty7/blob/main/LICENSE", "https://github.com/l0ng-ai/tty7/releases"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/l0ng-ai/tty7/main/assets/app-icon.png", "credit": "tty7 contributors", "license": "Apache-2.0; upstream project asset, trademarks retained"}]
screenshots: []
---

tty7 separates the terminal window from a background server that owns the shells and panes, so sessions survive quitting the app and layouts can be restored after a reboot without tmux. Remote machines are handled through a built-in SSH stack that keeps files, repositories and panes on the remote side.

It also recognizes coding agents such as Claude Code and Codex running in its panes, showing their status and Git context and letting scripts open panes and wait for results. Releases include separate Apple silicon and Intel builds, alongside a nightly channel.
