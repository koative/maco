---
name: Davit
summary: 'A desktop app for Apple''s container platform: run, inspect and build Linux containers, images, volumes and networks.'
category: Developer tools
tags:
- containers
- docker
- menu-bar
repository: https://github.com/wouterdebie/davit
website: https://github.com/wouterdebie/davit
license: MIT
licenseUrl: https://github.com/wouterdebie/davit/blob/main/LICENSE
download: https://github.com/wouterdebie/davit/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
- https://github.com/wouterdebie/davit
- https://github.com/wouterdebie/davit/blob/main/LICENSE
- https://github.com/wouterdebie/davit/releases
assets:
- path: ./assets/icon.png
  source: https://raw.githubusercontent.com/wouterdebie/davit/main/icon/icon_1024.png
  credit: Wouter de Bie
  license: MIT-licensed repository asset; no separate icon terms stated
---

Davit is a graphical front end for Apple's open-source container tool, which runs each Linux container in a lightweight virtual machine. It covers container lifecycle, logs, live resource charts and a file browser, along with image pulls and builds, volumes, networks, registry sign-in and Compose file import, and adds a menu bar extra for quick actions.

It talks to the container services directly rather than shelling out to the CLI. The project lists an Apple silicon Mac with macOS 15 or later as the requirement; releases are on GitHub and in the developer's Homebrew tap.
