---
name: "Dictly"
summary: "Hold a hotkey, speak, and get the text pasted or copied, transcribed on your Mac by Whisper."
category: "AI"
tags:
  - dictation
  - speech-to-text
  - local-ai
  - menu-bar
repository: https://github.com/vlr-code/dictly
website: https://github.com/vlr-code/dictly
license: "MIT"
licenseUrl: https://github.com/vlr-code/dictly/blob/main/LICENSE
download: https://github.com/vlr-code/dictly/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/vlr-code/dictly
  - https://github.com/vlr-code/dictly/blob/main/LICENSE
  - https://github.com/vlr-code/dictly/releases
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/vlr-code/dictly/main/Dictly/Dictly/Assets.xcassets/AppIcon.appiconset/icon_256.png
    credit: "vlr-code and Dictly contributors"
    license: "MIT repository asset; trademarks retained"
---

Dictly is a push-to-talk dictation tool in the menu bar. Holding a global hotkey records your voice; releasing it transcribes the audio with OpenAI's Whisper models through WhisperKit and puts the text on the clipboard, or pastes it into the focused app when Accessibility access is granted.

Transcription happens on the Mac and a multilingual base model is bundled so it works offline from the start, with larger models downloadable from inside the app. The project lists Apple silicon and macOS 15 or later as requirements and ships notarized builds on GitHub releases; its most recent release is 1.2.1 from July 2026.
