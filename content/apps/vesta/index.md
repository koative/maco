---
name: 'Vesta'
summary: 'A terminal built on libghostty for running coding agents in parallel, with a workspace sidebar, splits and persistent sessions.'
category: 'Developer tools'
tags:
  - terminal
  - coding-agents
  - workspaces
repository: https://github.com/vestaterm/Vesta
website: https://vestaterm.github.io/vesta-site/
license: MIT
licenseUrl: https://github.com/vestaterm/Vesta/blob/main/LICENSE
download: https://github.com/vestaterm/Vesta/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/vestaterm/Vesta
  - https://github.com/vestaterm/Vesta/blob/main/LICENSE
  - https://github.com/vestaterm/Vesta/releases
  - https://vestaterm.github.io/vesta-site/
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/vestaterm/Vesta/main/assets/AppIcon-1024.png
    credit: 'Nuh Naci Kusculu (Vesta)'
    license: 'MIT repository asset; Vesta name and icon retained by the project'
---

Vesta is a macOS terminal that embeds Ghostty's terminal engine rather than forking it, so it renders the same way and reads an existing Ghostty configuration and theme unchanged. On top it adds a sidebar of workspaces, each a session rooted in a directory with its own splits, plus tmux-style persistence: shells keep running in a small background daemon when the app quits and reattach later.

It is aimed at running several AI coding agents at once, with attention markers on busy workspaces and a `vesta` command-line tool that scripts tabs and panes. The signed DMG is on GitHub releases, and the project's Homebrew tap installs the app together with the CLI.
