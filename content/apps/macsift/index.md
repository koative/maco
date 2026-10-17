---
name: MacSift
summary: A disk cleaner that groups removable files by app and sends selections to the Trash, never deleting outright.
category: Utilities
tags:
- cleanup
- storage
- disk-usage
repository: https://github.com/Lcharvol/MacSift
website: https://lcharvol.github.io/MacSift/
license: MIT
licenseUrl: https://github.com/Lcharvol/MacSift/blob/main/LICENSE
download: https://github.com/Lcharvol/MacSift/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
- https://github.com/Lcharvol/MacSift
- https://github.com/Lcharvol/MacSift/blob/main/LICENSE
- https://github.com/Lcharvol/MacSift/releases
assets:
- path: ./assets/icon.png
  source: https://raw.githubusercontent.com/Lcharvol/MacSift/main/AppIcon.icns
  credit: Lucas Charvolin
  license: MIT repository asset; MacSift name and icon retained by the author
---

MacSift scans for caches, logs and other leftovers and lists every item it proposes to remove, grouped by the app that owns it. Nothing is erased directly: selected files go to the Trash so Finder can restore them until you empty it.

First-time users start in dry-run mode, large deletions ask for an extra confirmation, and each scan and cleanup is written to a log you can audit. The project says it makes no network calls. Builds are on GitHub releases; the app is not notarized, and the author's Homebrew tap clears the quarantine flag on install.
