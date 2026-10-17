---
name: "VibeProxy"
summary: "A menu bar proxy that lets AI coding tools use the Claude, ChatGPT, Gemini and other subscriptions you already pay for."
category: "AI"
tags:
  - menu-bar
  - proxy
  - coding-agents
  - model-providers
repository: https://github.com/automazeio/vibeproxy
website: https://github.com/automazeio/vibeproxy
license: "MIT"
licenseUrl: https://github.com/automazeio/vibeproxy/blob/main/LICENSE
download: https://github.com/automazeio/vibeproxy/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/automazeio/vibeproxy
  - https://github.com/automazeio/vibeproxy/blob/main/LICENSE
  - https://github.com/automazeio/vibeproxy/releases
  - https://formulae.brew.sh/cask/vibeproxy
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/automazeio/vibeproxy/main/src/Sources/Resources/AppIcon.icns
    credit: "Automaze, Ltd."
    license: "MIT repository asset; VibeProxy name and logo retained by Automaze"
---

VibeProxy runs a local proxy server from the menu bar so that coding tools such as Factory or Amp can send requests through accounts you already hold with Claude Code, ChatGPT/Codex, Gemini, Qwen, Kimi and others. You sign in to each provider from the app, and it keeps the tokens, configuration and server binary inside its own bundle, built on the open-source CLIProxyAPI.

Several accounts per provider can be connected and rotated when one hits a rate limit, and providers can be switched on or off without restarting. Claude traffic can optionally go through Vercel's AI Gateway instead of direct OAuth. Whether a given subscription may be used this way is set by each provider's terms. Releases are offered for Apple silicon and Intel; the project says it needs macOS 13 or later and that the Intel build is untested.
