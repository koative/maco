---
name: "SiliconScope"
summary: "A system monitor for Apple silicon Macs that charts CPU, GPU, Neural Engine, media engine and memory bandwidth."
category: "Utilities"
tags: ["system-monitoring", "menu-bar", "monitoring", "processes"]
repository: "https://github.com/kennss/SiliconScope"
website: "https://siliconscope.calidalab.ai"
license: "MIT"
licenseUrl: "https://github.com/kennss/SiliconScope/blob/main/LICENSE"
download: "https://github.com/kennss/SiliconScope/releases"
featured: false
added: "2026-10-17"
verified: "2026-10-17"
sources: ["https://github.com/kennss/SiliconScope", "https://github.com/kennss/SiliconScope/blob/main/LICENSE", "https://github.com/kennss/SiliconScope/releases/tag/v4.6.0"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/kennss/SiliconScope/main/site/public/icon.png", "credit": "Kennt Kim (Calida Lab)", "license": "MIT repository asset; trademarks retained"}]
screenshots: []
---

SiliconScope is a dashboard and menu bar monitor built around the parts of Apple silicon that Activity Monitor leaves out, such as Neural Engine load, the media engines and memory bandwidth, next to the usual CPU, GPU, temperature, network, storage and battery readings. Each metric can live in its own menu bar item, and it does not ask for administrator rights.

Version 4 added a fleet view: a small agent installed on another Mac or a Linux machine reports back over a paired, encrypted connection, so remote GPUs and containers appear in the same window. The project lists macOS 14 or later on Apple silicon as its requirement.
