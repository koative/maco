---
name: "OpenVoiceFlow"
summary: "Push-to-talk dictation that transcribes on device with Whisper and pastes the text into whichever app you are using."
category: "AI"
tags:
  - dictation
  - speech-to-text
  - local-ai
  - menu-bar
repository: https://github.com/shimoverse/openvoiceflow
website: https://openvoiceflow.com
license: "AGPL-3.0-or-later"
licenseUrl: https://github.com/shimoverse/openvoiceflow/blob/main/LICENSE
download: https://openvoiceflow.com/download.html
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/shimoverse/openvoiceflow
  - https://github.com/shimoverse/openvoiceflow/blob/main/LICENSE
  - https://github.com/shimoverse/openvoiceflow/blob/main/NOTICE
  - https://github.com/shimoverse/openvoiceflow/releases
  - https://openvoiceflow.com/download.html
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/shimoverse/openvoiceflow/main/assets/openvoiceflow-icon-1024.png
    credit: "Shimoverse Studios"
    license: "AGPL-3.0 repository asset; the license grants no rights in the OpenVoiceFlow name or logo"
---

OpenVoiceFlow lives in the menu bar: hold a key, speak, and release to have the transcript pasted at the cursor. Transcription runs locally through WhisperKit with a choice of Whisper model sizes, and words appear in a small floating display while you talk. A personal dictionary, spoken snippets and per-app writing styles adjust the result.

An optional cleanup step, off by default, can polish the text through OpenRouter, OpenAI, Anthropic, Groq or a local Ollama model. Anonymous aggregate usage sharing is on by default and can be switched off. The AGPL code carries Section 7 attribution and naming terms for forks, recorded in its NOTICE file. Signed builds for macOS 14 and later come from the website and GitHub releases.
