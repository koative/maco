---
name: "Lurar"
summary: "A menu bar parametric equalizer that applies headphone EQ presets to all Mac audio without installing an audio driver."
category: "Media"
tags:
  - audio
  - equalizer
  - menu-bar
  - headphones
repository: https://github.com/lsjoberg/lurar
website: https://lurar.app
license: "MIT"
licenseUrl: https://github.com/lsjoberg/lurar/blob/main/LICENSE
download: https://lurar.app
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/lsjoberg/lurar
  - https://github.com/lsjoberg/lurar/blob/main/LICENSE
  - https://lurar.app
  - https://github.com/lsjoberg/lurar/releases
  - https://github.com/lsjoberg/homebrew-lurar
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/lsjoberg/lurar/main/Lurar/Resources/Assets.xcassets/AppIcon.appiconset/icon_256x256.png
    credit: "Linus Sjöberg"
    license: "MIT; upstream project asset, trademarks retained"
---

Lurar captures the audio of every app through macOS's process tap API, runs it through a 10-band parametric equalizer and sends the result to the output device you choose, so no virtual audio driver is needed. It ships with a flat preset and can browse the AutoEq catalog of headphone measurements to add presets for specific models.

An editor allows live band adjustments, and built-in presets can be copied into your own library before tweaking. It requires macOS 14.2 or later and audio capture permission; apps that take exclusive control of an output device bypass it. Downloads come from the project site, GitHub releases and a Homebrew tap.
