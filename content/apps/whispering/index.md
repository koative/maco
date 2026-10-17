---
name: "Whispering"
summary: "Dictate with a shortcut, transcribe through local or cloud speech models, and paste the polished text at the cursor."
category: "AI"
tags:
  - dictation
  - transcription
  - speech-to-text
  - cross-platform
repository: https://github.com/EpicenterHQ/epicenter
website: https://whispering.epicenter.so/
license: "AGPL-3.0-or-later"
licenseUrl: https://github.com/EpicenterHQ/epicenter/blob/main/apps/whispering/LICENSE
download: https://github.com/EpicenterHQ/epicenter/releases/tag/v7.11.0
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/EpicenterHQ/epicenter
  - https://github.com/EpicenterHQ/epicenter/blob/main/LICENSE
  - https://github.com/EpicenterHQ/epicenter/blob/main/apps/whispering/LICENSE
  - https://github.com/EpicenterHQ/epicenter/releases/tag/v7.11.0
  - https://formulae.brew.sh/cask/whispering
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/EpicenterHQ/epicenter/main/apps/whispering/src-tauri/icons/icon.png
    credit: "Braden Wong and Epicenter contributors"
    license: "AGPL-3.0-or-later repository asset; name and icon retained by Braden Wong and Epicenter"
---

Whispering is the dictation app from the Epicenter project. A keyboard shortcut, or a voice-activated mode, starts recording; the audio is sent to the transcription provider you configure, either a local engine such as whisper.cpp or a hosted service like Groq or OpenAI, and the text is copied and pasted at the cursor. Optional transformations run the transcript through a prompt of your own before it is inserted, and recordings stay on your machine.

The current release is 7.11.0 from December 2025, with an Apple silicon DMG on GitHub and a Homebrew cask. The app's source now lives in the AGPL-licensed Epicenter monorepo, where Whispering is being reworked; expect changes before the next release.
