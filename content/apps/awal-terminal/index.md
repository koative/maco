---
name: Awal Terminal
summary: A Mac terminal emulator built around AI coding agents, with per-model profiles, cost tracking and foldable output.
category: Developer tools
tags:
  - terminal
  - coding-agents
  - git
  - dictation
repository: https://github.com/AwalTerminal/Awal-terminal
website: https://awalterminal.github.io/Awal-terminal/
license: MIT
licenseUrl: https://github.com/AwalTerminal/Awal-terminal/blob/main/LICENSE
download: https://github.com/AwalTerminal/Awal-terminal/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/AwalTerminal/Awal-terminal
  - https://github.com/AwalTerminal/Awal-terminal/blob/main/LICENSE
  - https://github.com/AwalTerminal/Awal-terminal/releases
  - https://awalterminal.github.io/Awal-terminal/
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/AwalTerminal/Awal-terminal/main/app/Sources/AwalTerminalLib/App/Resources/AppIcon.icns
    credit: Awal Terminal contributors
    license: MIT repository asset; project name and icon retained by the project
---

Awal Terminal is a macOS terminal emulator aimed at people who spend their day driving command-line coding agents such as Claude Code, Codex CLI or Gemini CLI. Each tab can start from a saved model profile, and a side panel follows token use, cost, context size and the git changes an agent makes, while tool calls, diffs and code blocks collapse into regions you can expand.

Around that sit the usual terminal features: tabs and windows, a drop-down quick terminal, scrollback search, push-to-talk voice input and a dashboard of running agents across windows. The project builds it with Swift and Rust and renders through Metal; releases are published as a zipped app on GitHub.
