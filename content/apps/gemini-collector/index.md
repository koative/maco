---
name: "Gemini Collector"
summary: "Back up Google Gemini conversations, attachments and generated media locally, then browse and export them."
category: "AI"
tags:
  - backup
  - chat
  - ai-client
repository: "https://github.com/FirenzeLor/gemini-collector"
website: "https://github.com/FirenzeLor/gemini-collector"
license: "AGPL-3.0-only"
licenseUrl: "https://github.com/FirenzeLor/gemini-collector/blob/main/LICENSE"
download: "https://github.com/FirenzeLor/gemini-collector/releases/latest"
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - "https://github.com/FirenzeLor/gemini-collector"
  - "https://github.com/FirenzeLor/gemini-collector/blob/main/LICENSE"
  - "https://github.com/FirenzeLor/gemini-collector/releases/latest"
  - "https://github.com/FirenzeLor/gemini-collector/blob/main/COMMERCIAL-LICENSE.md"
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/FirenzeLor/gemini-collector/main/src-tauri/icons/icon.png"
    credit: "FirenzeLor"
    license: "AGPL-3.0-only repository asset; app name and icon retained by FirenzeLor"
---

Gemini Collector downloads your Google Gemini chat history into a local archive: conversation text, uploaded attachments and generated images, audio, video, Deep Research reports and canvas files. On macOS it picks up the Gemini accounts already signed in to Chrome, syncs incrementally, and supports several accounts side by side.

The archive can be read in the app with Markdown, code and LaTeX rendering, and exported to Markdown or JSON. On macOS it authorises through Chrome's local Gemini sign-in, so Chrome must be installed and signed in. The source is AGPL-3.0-only, with a separate commercial licence offered by the author; Apple silicon disk images are published on GitHub releases and the README lists macOS 12 or later.
