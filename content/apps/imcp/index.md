---
name: iMCP
summary: Expose your Messages, Contacts, Calendar, Reminders and more to AI assistants through the Model Context Protocol.
category: AI
tags:
- contacts
- calendar
- reminders
- messaging
- menu-bar
repository: https://github.com/mattt/iMCP
website: https://github.com/mattt/iMCP
license: MIT
licenseUrl: https://github.com/mattt/iMCP/blob/main/LICENSE.md
download: https://github.com/mattt/iMCP/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
- https://github.com/mattt/iMCP
- https://github.com/mattt/iMCP/blob/main/LICENSE.md
- https://github.com/mattt/iMCP/releases
assets:
- path: ./assets/icon.png
  source: https://raw.githubusercontent.com/mattt/iMCP/main/App/Assets.xcassets/AppIcon.appiconset/Icon-macOS-256x256.png
  credit: Mattt
  license: MIT repository asset; iMCP name and icon retained by the author
---

iMCP is a Mac app that acts as a Model Context Protocol server for data that normally stays inside Apple's own apps. Once you grant access, an MCP client such as Claude Desktop can read and manage calendar events and reminders, look up contacts, read message history, search places and directions in Maps, and use your current location.

Each data source is switched on separately, so you choose exactly what an assistant can see. Other capabilities, including call history, voicemail and Shortcuts, are listed by the project, and Home control needs an extra helper you build yourself. It runs from the menu bar, and releases are published on GitHub.
