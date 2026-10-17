---
name: "Osaurus"
summary: "A Mac AI harness that runs local MLX models or cloud providers with agents, memory, tools and an MCP server."
category: "AI"
tags:
  - local-ai
  - agents
  - chat
  - mcp
repository: https://github.com/osaurus-ai/osaurus
website: https://osaurus.ai
license: "MIT"
licenseUrl: https://github.com/osaurus-ai/osaurus/blob/main/LICENSE
download: https://github.com/osaurus-ai/osaurus/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/osaurus-ai/osaurus
  - https://github.com/osaurus-ai/osaurus/blob/main/LICENSE
  - https://github.com/osaurus-ai/osaurus/releases
  - https://formulae.brew.sh/cask/osaurus
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/osaurus-ai/osaurus/main/App/osaurus/Assets.xcassets/AppIcon.appiconset/icon_256.png
    credit: "Osaurus, Inc."
    license: "MIT; upstream project asset, trademarks retained"
---

Osaurus is a Swift app that sits between you and language models, local or remote. It downloads and runs open models with MLX on the Mac, or connects to providers such as OpenAI, Anthropic, Gemini, OpenRouter, Ollama and LM Studio, and keeps agents, their memory, tools and working folders on your machine.

Agents can be given a folder with file, search and git tools, or shell access inside a sandbox. Osaurus also exposes OpenAI- and Ollama-compatible endpoints and works as an MCP server for other clients. It requires macOS 15.5 or later on Apple silicon and is available from GitHub releases and Homebrew.
