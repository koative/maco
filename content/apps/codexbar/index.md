---
name: 'CodexBar'
summary: 'A menu bar app that shows usage limits, credits and reset times for AI coding services such as Codex and Claude Code.'
category: 'AI'
tags:
  - coding-agents
  - usage
  - menu-bar
repository: https://github.com/steipete/CodexBar
website: https://codexbar.app
license: 'MIT'
licenseUrl: https://github.com/steipete/CodexBar/blob/main/LICENSE
download: https://github.com/steipete/CodexBar/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/steipete/CodexBar
  - https://github.com/steipete/CodexBar/blob/main/LICENSE
  - https://github.com/steipete/CodexBar/releases
  - https://codexbar.app
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/steipete/CodexBar/main/Icon.icns
    credit: 'Peter Steinberger and CodexBar contributors'
    license: 'MIT repository asset; CodexBar name and icon retained by the author'
---

CodexBar puts the usage windows of AI coding providers in the menu bar, with session, weekly and monthly limits and a countdown to each reset. Depending on what a provider exposes, it can also show credit balances, spending and local cost estimates, and it flags provider status incidents on the icon. It reuses sign-ins you already have, such as OAuth sessions, API keys or browser cookies, instead of asking for passwords.

Each provider can get its own menu bar item, or they can be merged behind one switcher. The macOS app requires macOS 14 and is published as a universal build on GitHub releases and through Homebrew; the project also offers a command-line tool and a Linux desktop version.
