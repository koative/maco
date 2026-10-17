---
name: "SwitchShuttle"
summary: "A tray app that keeps terminal commands in nested menus and runs them by hotkey in the terminal of your choice."
category: "Developer tools"
tags:
  - terminal
  - menu-bar
  - keyboard-shortcuts
  - launcher
  - cross-platform
repository: https://github.com/s00d/switchshuttle
website: https://s00d.github.io/switchshuttle/
license: "MIT"
licenseUrl: https://github.com/s00d/switchshuttle/blob/main/LICENSE
download: https://github.com/s00d/switchshuttle/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/s00d/switchshuttle
  - https://github.com/s00d/switchshuttle/blob/main/LICENSE
  - https://github.com/s00d/switchshuttle/releases/tag/app-v2.3.0
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/s00d/switchshuttle/main/src-tauri/icons/256x256.png
    credit: "s00d"
    license: "MIT repository asset; trademarks retained"
---

SwitchShuttle collects frequently used shell commands in a menu bar or tray menu, organised into nested submenus, and runs them in iTerm, Terminal, Warp, Alacritty, Hyper and other terminals. Commands can be bound to global hotkeys, prompt for input before running, and open in the current window, a new tab or a new window.

Built with Rust, Tauri and Vue, it runs on macOS, Windows and Linux, can start at login, and includes a command-line interface for running saved commands from a shell.
