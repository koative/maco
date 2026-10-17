---
name: "FnKey"
summary: "Hold the Fn key, speak, and release to paste a cloud transcription of what you said."
category: "AI"
tags:
  - dictation
  - speech-to-text
  - menu-bar
repository: https://github.com/evoleinik/fnkey
website: https://github.com/evoleinik/fnkey
license: GPL-3.0
licenseUrl: https://github.com/evoleinik/fnkey/blob/main/LICENSE
download: https://github.com/evoleinik/fnkey/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
sources:
  - https://github.com/evoleinik/fnkey
  - https://github.com/evoleinik/fnkey/blob/main/LICENSE
  - https://github.com/evoleinik/fnkey/releases
---

FnKey is a small menu bar utility for push-to-talk dictation. The microphone is only active while you hold Fn; when you let go, the recording is transcribed and pasted into the frontmost app, optionally followed by Return. A keywords file lets you add custom vocabulary.

Transcription is not done on the Mac: you supply your own Deepgram key for streaming results or a Groq key for Whisper, written to a configuration folder from the terminal. Separate Apple silicon and Intel builds are available on the GitHub releases page.
