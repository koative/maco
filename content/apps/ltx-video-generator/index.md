---
name: "LTX Video Generator"
summary: "Generate video clips from text or images on your own Mac with LTX and MiniMax H3 models, plus a queue and history."
category: "AI"
tags:
  - video
  - local-ai
  - models
repository: https://github.com/james-see/ltx-video-mac
website: https://james-see.github.io/ltx-video-mac/
license: "MIT"
licenseUrl: https://github.com/james-see/ltx-video-mac/blob/main/LICENSE
download: https://github.com/james-see/ltx-video-mac/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/james-see/ltx-video-mac
  - https://github.com/james-see/ltx-video-mac/blob/main/LICENSE
  - https://github.com/james-see/ltx-video-mac/releases
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/james-see/ltx-video-mac/main/LTXVideoGenerator/Assets.xcassets/AppIcon.appiconset/icon_256x256.png
    credit: "James Campbell"
    license: "MIT; upstream project icon, trademarks retained"
---

LTX Video Generator is a SwiftUI front end for running open video models locally through MLX. It turns text prompts or still images into short clips, can generate a synchronized soundtrack with the audio-capable LTX models, and keeps a queue of jobs, a browsable history and reusable parameter presets. A local REST API accepts generation requests from other tools.

Missing Python packages can be installed from inside the app. Voiceover narration can use local MLX audio or ElevenLabs, while background music relies on the ElevenLabs API. The project requires an Apple silicon Mac with macOS 14 or later and at least 32 GB of memory.
