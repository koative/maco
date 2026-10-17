---
name: "flock"
summary: "A tiling workspace that runs several Claude Code sessions side by side with shell and Markdown panes."
category: "Developer tools"
tags:
  - coding-agents
  - terminal
  - workspaces
  - markdown
repository: "https://github.com/baahaus/flock"
website: "https://baahaus.github.io/flock/"
license: "MIT"
licenseUrl: "https://github.com/baahaus/flock/blob/main/LICENSE"
download: "https://github.com/baahaus/flock/releases/latest"
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - "https://github.com/baahaus/flock"
  - "https://github.com/baahaus/flock/blob/main/LICENSE"
  - "https://github.com/baahaus/flock/releases/latest"
  - "https://baahaus.github.io/flock/"
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/baahaus/flock/main/AppIcon.icns"
    credit: "Brandon Anderson (baahaus)"
    license: "MIT repository asset; app name and icon retained by Brandon Anderson (baahaus)"
---

flock is a single-window workspace for running many Claude Code sessions at once. Panes tile automatically as you open them, and each one is either a Claude Code session with a status indicator for thinking, working or waiting, a regular shell, or an editable Markdown file that saves back to disk.

A command palette, broadcast mode for sending the same input to every pane, and search across all open panes keep larger setups manageable, and an optional status bar tracks token usage. Claude panes run full Claude Code sessions, so it is only useful alongside Claude Code. flock is distributed as a package installer or zip archive on GitHub releases; the project lists macOS 13 or later.
