---
name: 'Teleport'
summary: 'Share one keyboard and pointing device between several Macs, with clipboard sync, as a lightweight virtual KVM.'
category: 'Utilities'
tags:
  - keyboard
  - mouse
  - clipboard
  - sharing
  - network
repository: https://github.com/johndbritton/teleport
website: https://github.com/johndbritton/teleport
license: GPL-2.0
licenseUrl: https://github.com/johndbritton/teleport/blob/main/LICENSE
download: https://github.com/johndbritton/teleport/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/johndbritton/teleport
  - https://github.com/johndbritton/teleport/blob/main/LICENSE
  - https://github.com/johndbritton/teleport/releases
  - https://formulae.brew.sh/cask/abyssoft-teleport
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/johndbritton/teleport/main/teleport.icns
    credit: 'Julien Robert (abyssoft) and Teleport contributors'
    license: 'GPL-2.0 repository asset; Teleport name and icon retained by the project'
---

Teleport lets one keyboard and pointing device control several Macs on the same network, much like a software KVM switch. A Mac can act as the client that sends input to another machine or as the server that accepts it, and the clipboard is synchronized so text copied on one Mac can be pasted on another.

Teleport began as Julien Robert's closed-source utility and was opened up after it was discontinued; it is now kept running by volunteers, led by John Britton, with fixes rather than new features as the goal. Older extras such as file drag-and-drop and encrypted traffic are described as unsupported. The latest release is v1.3.5 from February 2022, also available as the `abyssoft-teleport` Homebrew cask.
