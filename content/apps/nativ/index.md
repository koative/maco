---
name: "Nativ"
summary: "A Mac workspace for chatting with, serving and monitoring local MLX models on Apple silicon."
category: "AI"
tags:
  - local-ai
  - language-models
  - chat
  - api
repository: https://github.com/Blaizzy/nativ
website: https://blaizzy.github.io/nativ/
license: "MIT"
licenseUrl: https://github.com/Blaizzy/nativ/blob/main/LICENSE
download: https://github.com/Blaizzy/nativ/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/Blaizzy/nativ
  - https://github.com/Blaizzy/nativ/blob/main/LICENSE
  - https://github.com/Blaizzy/nativ/releases
  - https://formulae.brew.sh/cask/nativ
  - https://blaizzy.github.io/nativ/
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/Blaizzy/nativ/main/Design/AppIcon.svg
    credit: "Prince Canuma and Nativ contributors"
    license: "MIT repository asset; Nativ name and logo retained by the project"
---

Nativ wraps the mlx-vlm inference server in a Mac app for running models on Apple silicon. It picks up MLX models already in your Hugging Face cache, downloads new ones with memory-fit warnings, and offers chat with image attachments, local image generation and a voice-dictation extension.

The same server is exposed through OpenAI- and Anthropic-compatible endpoints, and the app can configure terminal coding agents and editors to use it. Usage analytics, a live CPU, GPU and memory monitor, MCP server connections and scheduled prompts round it out, with server controls and stats in the menu bar.
