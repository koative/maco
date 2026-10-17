---
name: "Blurt"
summary: "Push-to-talk dictation from AssemblyAI that pastes cleaned-up text into whichever Mac app has focus."
category: "AI"
tags:
  - dictation
  - speech-to-text
  - keyboard
repository: https://github.com/AssemblyAI/blurt
website: https://www.assemblyai.com/blurt
license: "MIT"
licenseUrl: https://github.com/AssemblyAI/blurt/blob/main/LICENSE
download: https://github.com/AssemblyAI/blurt/releases/latest
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/AssemblyAI/blurt
  - https://github.com/AssemblyAI/blurt/blob/main/LICENSE
  - https://github.com/AssemblyAI/blurt/releases
  - https://www.assemblyai.com/blurt
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/AssemblyAI/blurt/main/.github/images/icon.png
    credit: "AssemblyAI and Blurt contributors"
    license: "MIT repository asset; Blurt and AssemblyAI names and marks retained"
---

Blurt starts recording when you tap or hold a single modifier key, sends the audio to AssemblyAI's dictation API, and pastes the returned text into the focused app, restoring your clipboard afterwards. The same request cleans up filler words and punctuation, and you can save a few custom styles or a vocabulary list to steer spelling and phrasing.

Transcription happens on AssemblyAI's servers, not on your Mac, so you need your own AssemblyAI API key. The app requires macOS 15 or later and is distributed as a signed disk image on GitHub, with built-in updates.
