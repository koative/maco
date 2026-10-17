---
name: "Gantry"
summary: "A Mac app for managing Docker containers, images and Compose stacks locally and on remote hosts over SSH."
category: "Developer tools"
tags:
  - docker
  - ssh
  - monitoring
  - developer-utilities
repository: https://github.com/getgantry/gantry
website: https://getgantry.github.io/
license: "MIT"
licenseUrl: https://github.com/getgantry/gantry/blob/main/LICENSE
download: https://github.com/getgantry/gantry/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/getgantry/gantry
  - https://github.com/getgantry/gantry/blob/main/LICENSE
  - https://github.com/getgantry/gantry/releases
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/getgantry/gantry/main/App/Assets.xcassets/AppIcon.appiconset/icon_256x256.png
    credit: "Gantry contributors"
    license: "MIT; upstream project asset, trademarks retained"
---

Gantry is a graphical front end for Docker that talks to the local daemon, to any number of servers reached over SSH, and to hosts running Apple's `container` runtime. It covers the usual chores: starting and inspecting containers, building and pulling images, managing volumes and networks, running Compose projects, following logs with search, and reclaiming disk space from unused resources.

The app also bundles an MCP server and App Intents, so AI agents, Shortcuts, and scripts can query and act on the same hosts. Current releases require macOS 26; download the zip from GitHub Releases or install it from the project's own Homebrew tap (`getgantry/tap/gantry`).
