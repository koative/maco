---
name: "Runner"
summary: "Run Claude Code, Codex and other coding-agent CLIs together on shared missions, each in its own real terminal."
category: "Developer tools"
tags:
  - coding-agents
  - terminal
  - agents
repository: https://github.com/yicheng47/runner
website: https://runnersh.dev
license: "MIT"
licenseUrl: https://github.com/yicheng47/runner/blob/main/LICENSE
download: https://github.com/yicheng47/runner/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/yicheng47/runner
  - https://github.com/yicheng47/runner/blob/main/LICENSE
  - https://github.com/yicheng47/runner/releases
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/yicheng47/runner/main/assets/icon.png
    credit: "Yicheng Wang and Runner contributors"
    license: "MIT repository asset; trademarks retained"
---

Runner groups command-line coding agents such as Claude Code, Codex, Antigravity CLI, GitHub Copilot CLI and pi into reusable crews with assigned roles, then sets a crew to work on a mission. Each agent keeps its own interactive session in a real terminal pane, while a shared feed carries messages between agents and questions that need your answer.

Sessions are held by a background service, so agents keep running when the window is closed, and every action is also available as a `runner` command for scripts or other agents. Runner does not install the agents; it uses the ones already on your `PATH`. The project describes itself as alpha software, and the macOS build is an Apple Silicon disk image on GitHub releases.
