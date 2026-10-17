---
name: "VirtualBuddy"
summary: "Create and run macOS virtual machines on Apple silicon Macs, with guided installs of current and beta releases."
category: "Developer tools"
tags:
  - virtual-machines
  - virtualization
  - testing
repository: "https://github.com/insidegui/VirtualBuddy"
website: "https://github.com/insidegui/VirtualBuddy"
license: "BSD-2-Clause"
licenseUrl: "https://github.com/insidegui/VirtualBuddy/blob/main/LICENSE"
download: "https://github.com/insidegui/VirtualBuddy/releases/latest"
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - "https://github.com/insidegui/VirtualBuddy"
  - "https://github.com/insidegui/VirtualBuddy/blob/main/LICENSE"
  - "https://github.com/insidegui/VirtualBuddy/releases/latest"
  - "https://formulae.brew.sh/cask/virtualbuddy"
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/insidegui/VirtualBuddy/main/VirtualBuddy/Assets.xcassets/AppIcon-Default.appiconset/icon_512x512.png"
    credit: "Guilherme Rambo"
    license: "BSD-2-Clause repository asset; app name and icon retained by Guilherme Rambo"
---

VirtualBuddy is a virtual machine app that makes it easy to keep several versions of macOS around as virtual machines on an Apple silicon Mac. It can download and install a chosen macOS release, including betas, or start from a restore image you provide, and it is aimed at developers who need to test software on more than one system version.

A guest app adds clipboard sharing and automatic mounting of shared folders, and folders can also be shared directly when host and guest are recent enough. The project states it virtualizes macOS 12 and later and requires macOS 13 or later on the host. Builds are published on GitHub releases and through the official Homebrew cask.
