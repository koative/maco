---
name: "Muxy"
summary: "A terminal multiplexer app with split panes, background and remote sessions, git worktrees and coding-agent integrations."
category: "Developer tools"
tags:
  - terminal
  - git
  - coding-agents
  - themes
  - cross-platform
repository: https://github.com/muxy-app/muxy
website: https://muxy.app
license: "MIT"
licenseUrl: https://github.com/muxy-app/muxy/blob/main/LICENSE
download: https://github.com/muxy-app/muxy/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/muxy-app/muxy
  - https://github.com/muxy-app/muxy/blob/main/LICENSE
  - https://github.com/muxy-app/muxy/releases/tag/v2.2.0
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/muxy-app/muxy/main/packaging/macos/AppIcon.png
    credit: "Muxy"
    license: "MIT repository asset; trademarks retained"
---

Muxy brings tmux-style session management into a desktop terminal app. Sessions keep running in the background or on a remote machine, panes split freely, projects can open in separate git worktrees, and integrations follow AI coding agents running inside. It ships with hundreds of colour themes and has extensions and companion apps for iOS and Android.

The project builds it in Rust on GPUI and libghostty, and says the desktop app runs on macOS 14 or newer on Apple Silicon or Intel. A separate `muxy` CLI and server are available for use without the app, and Linux builds are marked experimental.
