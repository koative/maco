---
name: ImHex
summary: A hex editor for reverse engineering, with a C++-like pattern language for
  decoding and highlighting binary formats.
category: Developer tools
tags:
- inspection
- debugging
- cross-platform
repository: https://github.com/WerWolv/ImHex
website: https://imhex.werwolv.net
license: GPL-2.0-only AND LGPL-2.1
licenseUrl: https://github.com/WerWolv/ImHex/blob/master/LICENSE
download: https://imhex.download
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
- https://github.com/WerWolv/ImHex
- https://github.com/WerWolv/ImHex/blob/master/LICENSE
- https://github.com/WerWolv/ImHex/blob/master/lib/libimhex/LICENSE
- https://github.com/WerWolv/ImHex/releases
- https://imhex.download
- https://imhex.werwolv.net
assets:
- path: ./assets/icon.png
  source: https://raw.githubusercontent.com/WerWolv/ImHex/master/resources/dist/macos/AppIcon.icns
  credit: WerWolv and ImHex contributors
  license: GPL-2.0-only; upstream project asset, trademarks retained
---

ImHex is a hex editor built for people who take binary files apart. Beyond byte editing, patch management and many data views, its pattern language describes structures, arrays, pointers and bitfields so a file's layout can be parsed and highlighted automatically.

It also includes tools such as a data inspector, an integrated disassembler and diffing between data sources. Most of the code is GPL-2.0-only, while the plugin library and some plugins use LGPL-2.1. Separate Intel and Apple silicon builds are offered for macOS.
