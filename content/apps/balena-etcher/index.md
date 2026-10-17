---
name: "balenaEtcher"
summary: "Write operating system images to SD cards and USB drives, with drive selection safeguards and post-write checks."
category: "Utilities"
tags: ["disk-images", "usb", "cross-platform"]
repository: "https://github.com/balena-io/etcher"
website: "https://etcher.balena.io"
license: "Apache-2.0"
licenseUrl: "https://github.com/balena-io/etcher/blob/master/LICENSE"
download: "https://github.com/balena-io/etcher/releases"
featured: false
added: "2026-10-17"
verified: "2026-10-17"
sources: ["https://github.com/balena-io/etcher", "https://github.com/balena-io/etcher/blob/master/LICENSE", "https://github.com/balena-io/etcher/releases", "https://etcher.balena.io"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/balena-io/etcher/master/assets/icon.png", "credit": "Balena Ltd.", "license": "Apache-2.0 repository asset; balenaEtcher name and logo are trademarks of Balena"}]
---

balenaEtcher flashes disk images such as Raspberry Pi or Linux installers onto SD cards and USB drives. It guards against accidentally writing to your computer's own disks and checks that the data was written correctly, and it can also flash Raspberry Pi devices that boot in USB device mode.

It is an Electron app maintained by Balena, and the official releases include separate macOS builds for Apple silicon and Intel. Writing an image erases the target drive, so double-check the selected device before flashing.
