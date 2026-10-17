---
name: "qutebrowser"
summary: "A keyboard-driven web browser with Vim-style commands and a minimal interface, built on Qt WebEngine."
category: "Internet"
tags:
  - browser
  - keyboard
  - vim
  - minimal
repository: "https://github.com/qutebrowser/qutebrowser"
website: "https://www.qutebrowser.org"
license: "GPL-3.0-or-later"
licenseUrl: "https://github.com/qutebrowser/qutebrowser/blob/main/LICENSE"
download: "https://github.com/qutebrowser/qutebrowser/releases"
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - "https://github.com/qutebrowser/qutebrowser"
  - "https://github.com/qutebrowser/qutebrowser/blob/main/LICENSE"
  - "https://github.com/qutebrowser/qutebrowser/releases"
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/qutebrowser/qutebrowser/main/qutebrowser/icons/qutebrowser-256x256.png"
    credit: "qutebrowser contributors"
    license: "GPL-3.0-or-later; upstream project asset, trademarks retained"
---

qutebrowser is a browser for people who prefer to keep their hands on the keyboard. Navigation, tabs, link hints, and settings are driven by Vim-like keybindings and a command line, and the interface stays out of the way of page content.

It renders pages with Qt WebEngine and is configured through a Python file or its built-in settings. GitHub releases provide separate Apple silicon and Intel DMGs; Homebrew disabled its cask in 2026 because the builds fail Gatekeeper checks, so expect to approve the app manually.
