---
name: "Sleepless"
summary: "A menu-bar switch that keeps a closed-lid MacBook awake, with a timer and battery cutoff."
category: "Utilities"
tags: ["menu-bar", "power", "sleep"]
repository: "https://github.com/Aboudjem/Sleepless"
website: "https://aboudjem.github.io/Sleepless/"
license: "MIT"
licenseUrl: "https://github.com/Aboudjem/Sleepless/blob/main/LICENSE"
download: "https://github.com/Aboudjem/Sleepless/releases"
featured: false
added: "2026-10-17"
verified: "2026-10-17"
sources: ["https://github.com/Aboudjem/Sleepless", "https://github.com/Aboudjem/Sleepless/blob/main/LICENSE", "https://github.com/Aboudjem/Sleepless/releases"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/Aboudjem/Sleepless/main/docs/icon.png", "credit": "Adam Boudjemaa", "license": "MIT; upstream project asset, trademarks retained"}]
screenshots: []
---

Sleepless toggles the system setting that stops a MacBook from sleeping when its lid is closed, even on battery without an external display. A one- or two-hour auto-off timer and a configurable battery floor turn it back off so the machine is not left running until empty.

Because it changes a system power setting, the app asks for a one-time privileged grant during setup. The project targets macOS 26 on Apple silicon, and its release builds are ad-hoc signed, so Gatekeeper needs approval on first launch.
