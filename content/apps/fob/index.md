---
name: "fob"
summary: "Keeps SSH and Git signing keys in the Secure Enclave and asks for Touch ID, naming the destination, before each use."
category: "Privacy & security"
tags:
  - ssh
  - security
  - git
  - menu-bar
repository: https://github.com/olivierzol/fob
website: https://getfob.app
license: "AGPL-3.0"
licenseUrl: https://github.com/olivierzol/fob/blob/main/LICENSE
download: https://github.com/olivierzol/fob/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/olivierzol/fob
  - https://github.com/olivierzol/fob/blob/main/LICENSE
  - https://github.com/olivierzol/fob/releases
  - https://getfob.app
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/olivierzol/fob/main/Resources/Assets.xcassets/AppIcon.appiconset/icon_256x256.png
    credit: "olivierzol and fob contributors"
    license: "AGPL-3.0 repository asset; fob name and icon retained by the author"
---

fob generates SSH keys inside the Mac's Secure Enclave, so no usable private key file sits in `~/.ssh`. Each SSH login, Git push or pull, and commit signature asks for Touch ID, Apple Watch or the account password, and the prompt names the verified host it is connecting to.

Keys can be pinned to a single host, a short touch-reuse window covers bursts of Git commands, and a hash-chained log records every decision. A menu bar app and a command-line tool guide setup and migration of existing hosts, and a read-only checkup reports risky SSH configuration. It requires macOS 13 and installs from the project's Homebrew tap or GitHub releases.
