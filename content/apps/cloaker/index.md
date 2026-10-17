---
name: "Cloaker"
summary: "Password-based file encryption: drop a file on the window, choose a password and save the encrypted copy."
category: "Privacy & security"
tags:
  - encryption
  - files
  - drag-and-drop
  - cross-platform
repository: https://github.com/spieglt/Cloaker
website: https://github.com/spieglt/Cloaker
license: GPL-3.0
licenseUrl: https://github.com/spieglt/Cloaker/blob/master/LICENSE
download: https://github.com/spieglt/Cloaker/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/spieglt/Cloaker
  - https://github.com/spieglt/Cloaker/blob/master/LICENSE
  - https://github.com/spieglt/Cloaker/releases
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/spieglt/Cloaker/master/gui/assets/macCloakerLogo.icns
    credit: "spieglt (Cloaker author)"
    license: "GPL-3.0 repository asset; Cloaker name and icon retained by the author"
---

Cloaker reduces file encryption to a single window. Drop a file onto it, enter a password and pick where the encrypted copy should go; dropping that file back and entering the same password restores the original. There are no keys or accounts to manage, which also means a forgotten password cannot be recovered.

Files use libsodium's XChaCha20-Poly1305 stream format with an Argon2id password hash, and version 5.0 moved the whole program to Rust with a new graphical interface. A command-line build is offered alongside the Mac, Windows and Linux apps on the GitHub releases page, and a browser-based version can open the same files.
