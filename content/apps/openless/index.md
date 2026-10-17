---
name: "OpenLess"
summary: "Hold a hotkey and speak: OpenLess transcribes your voice, polishes it with an AI model and inserts the text at the cursor."
category: "AI"
tags:
  - dictation
  - speech-to-text
  - cross-platform
repository: https://github.com/Open-Less/openless
website: https://openless.top
license: "AGPL-3.0-only"
licenseUrl: https://github.com/Open-Less/openless/blob/beta/LICENSE
download: https://github.com/Open-Less/openless/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/Open-Less/openless
  - https://github.com/Open-Less/openless/blob/beta/LICENSE
  - https://github.com/Open-Less/openless/releases
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/Open-Less/openless/beta/openless-all/app/src-tauri/icons/icon.icns
    credit: "OpenLess contributors"
    license: "AGPL-3.0 repository asset; OpenLess name and logo retained by the project"
---

OpenLess records while a global hotkey is held, turns the audio into a transcript, rewrites it with a language model in the style you have chosen, and inserts the result into whichever text field has focus, copying it to the clipboard if insertion is blocked. A prompt mode turns loosely spoken instructions into a structured request for chat assistants and coding tools, and switchable style packs hold custom system prompts.

Speech recognition can use a long list of cloud services with your own credentials, Apple Speech, or a bundled local Qwen3-ASR model on macOS, and a personal dictionary keeps names and terms spelled correctly. Version 2 changed the license from MIT to AGPL-3.0-only; GitHub releases provide macOS disk images for Apple Silicon and Intel as well as Windows builds.
