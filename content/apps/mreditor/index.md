---
name: "MrEditor"
summary: "A Mac editor for huge logs and CSV files that opens multi-gigabyte text instantly and can follow, filter and diff it."
category: "Developer tools"
tags:
  - text-editor
  - plain-text
  - search
  - inspection
repository: https://github.com/MR-TABATA/MrEditor
website: https://mrktools.app/editor/
license: "MIT"
licenseUrl: https://github.com/MR-TABATA/MrEditor/blob/main/LICENSE
download: https://github.com/MR-TABATA/MrEditor/releases/latest
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/MR-TABATA/MrEditor
  - https://github.com/MR-TABATA/MrEditor/blob/main/LICENSE
  - https://github.com/MR-TABATA/MrEditor/releases
  - https://mrktools.app/editor/
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/MR-TABATA/MrEditor/main/art/AppIcon.icns
    credit: "TABATA Hitoshi"
    license: "MIT repository asset; MrEditor name and icon retained by the author"
---

MrEditor is aimed at text you receive rather than write: server logs, CSV exports, dumps and JSON responses. It memory-maps files and indexes lines in the background, so even multi-gigabyte logs open and scroll without loading everything into memory. Around that it offers full-file search, a filtered live-grep view, column alignment for CSV and fixed-width data, JSON pretty-printing, file comparison, `tail -f`-style following, and opening remote files over SSH.

Unlike most large-file viewers it also edits and saves in place. The editor in this repository is free and MIT licensed; a separately sold companion, MrkEditor, adds analysis features and is not part of this listing. MrEditor requires macOS 13 or later and is published as a disk image on GitHub.
