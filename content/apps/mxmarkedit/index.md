---
name: "mxMarkEdit"
summary: "An outline-oriented Markdown editor inspired by Org-mode, with todo tracking, tables, presentations and Pandoc export."
category: "Writing"
tags:
  - markdown
  - text-editor
  - tasks
  - presentations
repository: https://github.com/maxnd/mxMarkEdit
website: https://github.com/maxnd/mxMarkEdit
license: "GPL-3.0-or-later"
licenseUrl: https://github.com/maxnd/mxMarkEdit/blob/main/LICENSE
download: https://github.com/maxnd/mxMarkEdit/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/maxnd/mxMarkEdit
  - https://github.com/maxnd/mxMarkEdit/blob/main/LICENSE
  - https://github.com/maxnd/mxMarkEdit/releases
  - https://github.com/maxnd/homebrew-tap
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/maxnd/mxMarkEdit/main/icon.icns
    credit: "Massimo Nardello"
    license: "GPL-3.0 repository asset; mxMarkEdit name and logo retained by the author"
---

mxMarkEdit is a local Markdown editor that takes its cues from Emacs Org-mode. Text is formatted inline as you type, and todo items written in a document are gathered into a summary view. It also handles tables, bibliographies and slide presentations written in Markdown.

Export to other formats goes through Pandoc when it is installed. The app is written in Free Pascal with Lazarus rather than a web runtime. The author states that it runs only on Apple silicon Macs and is no longer notarized, so it has to be allowed manually on first launch; it is distributed through GitHub releases and the author's Homebrew tap.
