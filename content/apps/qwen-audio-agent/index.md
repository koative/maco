---
name: "Qwen Audio Agent"
summary: "A realtime voice assistant that keeps talking with you while delegating tasks to coding agents in the background."
category: "AI"
tags:
  - agents
  - coding-agents
  - speech-to-text
  - audio
  - cross-platform
repository: https://github.com/QwenAudio/qwen-audio-agent
website: https://qwenaudio.github.io/qwen-audio-agent/
license: "Apache-2.0"
licenseUrl: https://github.com/QwenAudio/qwen-audio-agent/blob/main/LICENSE
download: https://github.com/QwenAudio/qwen-audio-agent/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/QwenAudio/qwen-audio-agent
  - https://github.com/QwenAudio/qwen-audio-agent/blob/main/LICENSE
  - https://github.com/QwenAudio/qwen-audio-agent/releases
  - https://qwenaudio.github.io/qwen-audio-agent/
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/QwenAudio/qwen-audio-agent/main/desktop/build/icon.png
    credit: "Qwen Audio Agent contributors"
    license: "Apache-2.0 repository asset; Qwen name and icon retained by their owners"
---

Qwen Audio Agent holds a full-duplex voice conversation that you can interrupt, and hands longer jobs to a backend agent such as Qwen Code, OpenCode, Codex or Claude Code. Tasks run in parallel with the conversation, you can ask about progress or cancel them, and results come back into the chat when they finish.

The voice side is pluggable, with cloud realtime services from Qwen, OpenAI, Google and others or local speech pipelines. Besides a web UI and terminal interface, it ships a desktop floating-orb app; the macOS build is a universal disk image on GitHub releases.
