---
name: "Claudexor"
summary: "A local control plane that runs Claude Code, Codex, Cursor and OpenCode behind one interface with quota and cost tracking."
category: "AI"
tags:
  - coding-agents
  - agents
  - local-first
  - ssh
repository: https://github.com/razzant/claudexor
website: https://claudexor.ai/
license: MIT
licenseUrl: https://github.com/razzant/claudexor/blob/main/LICENSE
download: https://github.com/razzant/claudexor/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/razzant/claudexor
  - https://github.com/razzant/claudexor/blob/main/LICENSE
  - https://github.com/razzant/claudexor/releases
  - https://claudexor.ai/
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/razzant/claudexor/main/apps/macos/ClaudexorApp/Sources/ClaudexorApp/Resources/AppIcon.png
    credit: "Anton Razzhigaev and Claudexor contributors"
    license: "MIT repository asset; Claudexor name and icon retained by the project"
---

Claudexor sits above the coding-agent command-line tools you already use and pay for, such as Codex CLI, Claude Code, Cursor CLI and OpenCode, and drives them through one chat-style workspace. Edits arrive as patches you can inspect, several agents can attempt the same task with independent review choosing a result, and subscription quotas and spending are tracked per account, including named profiles for several subscriptions.

The Mac app is a signed and notarized DMG that bundles its own background engine, can run threads on a remote macOS or Linux machine over SSH, and still needs Git plus at least one vendor CLI or provider API key to do any work. A separate command-line version is published on npm.
