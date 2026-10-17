---
name: "Cocoa-Way"
summary: "A Wayland compositor for macOS that shows Linux GUI apps from containers or remote machines in Mac windows."
category: "Developer tools"
tags: ["linux", "containers", "wayland", "remote-desktop"]
repository: "https://github.com/J-x-Z/cocoa-way"
website: "https://github.com/J-x-Z/cocoa-way"
license: "GPL-3.0"
licenseUrl: "https://github.com/J-x-Z/cocoa-way/blob/main/LICENSE"
download: "https://github.com/J-x-Z/cocoa-way/releases"
featured: false
added: "2026-10-17"
verified: "2026-10-17"
sources: ["https://github.com/J-x-Z/cocoa-way", "https://github.com/J-x-Z/cocoa-way/blob/main/LICENSE", "https://github.com/J-x-Z/cocoa-way/releases/tag/v2.1.0"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/J-x-Z/cocoa-way/main/assets/icon.png", "credit": "J-x-Z and Cocoa-Way contributors", "license": "GPL-3.0 repository asset; trademarks retained"}]
screenshots: []
---

Cocoa-Way receives the Wayland display protocol on the Mac and draws Linux applications with Metal, either as a whole desktop in one window or as individual app windows. It can attach to a Linux machine over Waypipe and SSH, or launch saved application profiles through Apple Container, Docker-compatible engines or OrbStack.

Clipboard text and images, audio, keyboard, pointer and gestures are forwarded between both sides, and a companion command-line tool exposes the same controls for scripting. The container runtime is installed separately. GitHub releases provide DMG and ZIP downloads labelled for arm64.
