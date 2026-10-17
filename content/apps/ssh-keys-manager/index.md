---
name: "SSH Keys Manager"
summary: "Browse, generate and organise SSH keys and edit SSH config entries in a native window instead of the terminal."
category: "Developer tools"
tags: ["ssh", "security", "native"]
repository: "https://github.com/Stmol/ssh-keys-manager-macos-app"
website: "https://github.com/Stmol/ssh-keys-manager-macos-app"
license: "MIT"
licenseUrl: "https://github.com/Stmol/ssh-keys-manager-macos-app/blob/master/LICENSE"
download: "https://github.com/Stmol/ssh-keys-manager-macos-app/releases"
featured: false
added: "2026-10-17"
verified: "2026-10-17"
sources: ["https://github.com/Stmol/ssh-keys-manager-macos-app", "https://github.com/Stmol/ssh-keys-manager-macos-app/blob/master/LICENSE", "https://github.com/Stmol/ssh-keys-manager-macos-app/releases"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/Stmol/ssh-keys-manager-macos-app/master/SSH%20Keys%20Manager/Assets.xcassets/AppIcon.appiconset/icon_256x256.png", "credit": "Stmol", "license": "MIT repository asset; trademarks retained"}]
---

SSH Keys Manager gives your `~/.ssh` folder, or another directory you choose, a graphical front end. It lists key pairs with their metadata, generates, renames, duplicates or removes keys, and edits SSH config host entries including their `IdentityFile` lines.

The project notes that its GitHub release builds are unsigned and not notarised, so macOS may refuse to open them until the quarantine attribute is removed. Because it handles private keys, back up your SSH folder before bulk changes.
