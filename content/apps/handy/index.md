---
name: "Handy"
summary: "Hold a shortcut, speak, and have offline speech recognition type the words into whatever app you are using."
category: "AI"
tags:
  - dictation
  - speech-to-text
  - local-ai
  - cross-platform
repository: https://github.com/cjpais/Handy
website: https://handy.computer
license: "MIT"
licenseUrl: https://github.com/cjpais/Handy/blob/main/LICENSE
download: https://github.com/cjpais/Handy/releases/latest
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/cjpais/Handy
  - https://github.com/cjpais/Handy/blob/main/LICENSE
  - https://github.com/cjpais/Handy/releases/latest
  - https://formulae.brew.sh/cask/handy
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/cjpais/Handy/main/src-tauri/icons/icon.png
    credit: "CJ Pais and Handy contributors"
    license: "MIT repository asset; name and icon retained by CJ Pais"
---

Handy is a deliberately simple dictation tool. Press its keyboard shortcut, either held down or toggled, talk, and the transcription is pasted into the active text field. Speech is processed on the computer: voice activity detection trims silence, and recognition uses a Whisper or Parakeet model that the app downloads for you.

It is a Tauri app for macOS, Windows and Linux. Official builds are on GitHub releases and the project website; a community-maintained Homebrew cask is also available.
