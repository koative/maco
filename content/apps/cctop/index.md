---
name: "cctop"
summary: "A keyboard-first menu bar view of AI coding sessions that shows which need you and jumps straight back to them."
category: "AI"
tags:
  - coding-agents
  - menu-bar
  - keyboard-shortcuts
repository: https://github.com/st0012/cctop
website: https://cctop.app
license: "MIT"
licenseUrl: https://github.com/st0012/cctop/blob/master/LICENSE
download: https://github.com/st0012/cctop/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/st0012/cctop
  - https://github.com/st0012/cctop/blob/master/LICENSE
  - https://github.com/st0012/cctop/releases
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/st0012/cctop/master/menubar/CctopMenubar/Assets.xcassets/AppIcon.appiconset/icon_256x256.png
    credit: "Stan Lo"
    license: "MIT; upstream project asset, trademarks retained"
---

cctop gathers sessions from coding agents such as Claude Code and Codex into one compact menu bar list showing which are working, idle or waiting for input. A keystroke jumps to the matching editor window, terminal pane, desktop thread or project, and recent projects stay within reach.

It can also find worktrees left behind by finished sessions, check their Git state and remove the ones you no longer need. Session state is stored locally as JSON without analytics or uploads. GitHub releases provide separate Apple silicon and Intel builds.
