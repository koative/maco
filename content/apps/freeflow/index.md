---
name: "FreeFlow"
summary: "Hold a key to dictate into any text field, with AI transcription and cleanup through Groq or another provider."
category: "AI"
tags:
  - dictation
  - speech-to-text
  - keyboard-shortcuts
repository: https://github.com/zachlatta/freeflow
website: https://freeflow.zachlatta.com
license: "MIT"
licenseUrl: https://github.com/zachlatta/freeflow/blob/main/LICENSE
download: https://github.com/zachlatta/freeflow/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/zachlatta/freeflow
  - https://github.com/zachlatta/freeflow/blob/main/LICENSE
  - https://github.com/zachlatta/freeflow/releases
  - https://freeflow.zachlatta.com
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/zachlatta/freeflow/main/Resources/AppIcon.icns
    credit: "Zach Latta and FreeFlow contributors"
    license: "MIT repository asset; name and logo retained by the project"
---

FreeFlow records while you hold Fn, or toggles with Command-Fn, then transcribes the speech, tidies it up and pastes the result into the focused text field. It can read nearby context in the current app and a custom vocabulary so names and jargon come out right, and an edit mode rewrites selected text from a spoken instruction.

There is no FreeFlow server: you supply an API key, Groq by default or any OpenAI-compatible provider, and audio goes only to that service. The project positions it as a free alternative to subscription dictation apps; the DMG is on GitHub releases.
