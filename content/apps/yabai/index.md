---
name: yabai
summary: Tile windows automatically with binary space partitioning, controlled from
  the command line and your own shortcuts.
category: Productivity
tags:
- window-management
- tiling
- keyboard-shortcuts
repository: https://github.com/asmvik/yabai
website: https://github.com/asmvik/yabai
license: MIT
licenseUrl: https://github.com/asmvik/yabai/blob/master/LICENSE.txt
download: https://github.com/asmvik/yabai/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
- https://github.com/asmvik/yabai
- https://github.com/asmvik/yabai/blob/master/LICENSE.txt
- https://github.com/asmvik/yabai/releases
- https://github.com/asmvik/yabai/wiki
assets:
- path: ./assets/icon.png
  source: https://raw.githubusercontent.com/asmvik/yabai/master/assets/icon/2x/icon-256px%402x.png
  credit: Åsmund Vikane
  license: MIT; upstream project asset, trademarks retained
---

yabai extends the macOS window manager with automatic tiling: new windows are arranged by binary space partitioning so they fill the screen without overlapping. It can also manage spaces and displays, follow focus with the mouse, and float windows by rule.

There is no graphical interface. yabai runs in the background, is configured with a script, and is driven by its command-line messages, usually bound to keys through skhd or a similar tool. Some advanced features need System Integrity Protection to be partially disabled, which the project documents as optional.
