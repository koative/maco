---
name: 'SSH Tunnel Manager'
summary: 'A menu bar app for saving SSH port forwards and switching them on and off with a click.'
category: 'Developer tools'
tags:
  - ssh
  - tunneling
  - menu-bar
  - network
repository: https://github.com/0fuz/ssh-tunnel-manager
website: https://github.com/0fuz/ssh-tunnel-manager
license: 'MIT'
licenseUrl: https://github.com/0fuz/ssh-tunnel-manager/blob/main/LICENSE
download: https://github.com/0fuz/ssh-tunnel-manager/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/0fuz/ssh-tunnel-manager
  - https://github.com/0fuz/ssh-tunnel-manager/blob/main/LICENSE
  - https://github.com/0fuz/ssh-tunnel-manager/releases
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/0fuz/ssh-tunnel-manager/main/SSHTunnelManager/SSHTunnelManager/Assets.xcassets/AppIcon.appiconset/icon_1024.png
    credit: '0fuz and SSH Tunnel Manager contributors'
    license: 'MIT repository asset; project name and icon retained by the author'
---

SSH Tunnel Manager keeps a list of saved SSH connections, each with its own local, remote or SOCKS forwards, and lets you start or stop them from the menu bar instead of retyping `ssh -L` commands. Tunnels can be grouped and toggled together, reconnect after they drop, start at login, and reuse host aliases from your existing `~/.ssh/config`.

When a tunnel fails, the app reports a reason such as an authentication error, a refused connection or a port already in use. It drives the system's own `ssh` rather than bundling a client. Builds are published as DMGs on the GitHub releases page, and the README also documents a Homebrew cask from the author's tap.
