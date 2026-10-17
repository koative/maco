---
name: "WinMux"
summary: "A tiling window manager organized around projects and workspaces, with a sidebar for moving windows between them."
category: "Utilities"
tags:
  - window-management
  - tiling
  - workspaces
repository: https://github.com/ZimengXiong/WinMux
website: https://winmux.dev
license: "MIT"
licenseUrl: https://github.com/ZimengXiong/WinMux/blob/main/LICENSE.txt
download: https://github.com/ZimengXiong/WinMux/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/ZimengXiong/WinMux
  - https://github.com/ZimengXiong/WinMux/blob/main/LICENSE.txt
  - https://github.com/ZimengXiong/WinMux/releases
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/ZimengXiong/WinMux/main/resources/Assets.xcassets/AppIcon.appiconset/icon.png
    credit: "Zimeng Xiong"
    license: "MIT; upstream project icon, trademarks retained"
---

WinMux groups workspaces into projects, so switching projects swaps a whole set of window layouts at once. A sidebar along the left edge lists every workspace and its windows; windows can be dragged in and out of it and rearranged across spaces, including tab groups, and the rail can stay collapsed or hide until the pointer reaches the screen edge.

New windows are tiled automatically unless that is turned off, and a quick shake while dragging a window toggles it between floating and tiled. Settings live in a TOML configuration file. Builds are published on GitHub and through the author's Homebrew tap; they are signed but not notarized, so the first launch needs an explicit Open.
