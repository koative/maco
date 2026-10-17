---
name: "teebe"
summary: "A native window listing every git worktree across your repositories, with live views of the coding agents working in each."
category: "Developer tools"
tags:
  - git
  - coding-agents
  - workspaces
repository: https://github.com/klein-t/teebe
website: https://teebe.io
license: "GPL-3.0-or-later"
licenseUrl: https://github.com/klein-t/teebe/blob/dev/LICENSE
download: https://github.com/klein-t/teebe/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/klein-t/teebe
  - https://github.com/klein-t/teebe/blob/dev/LICENSE
  - https://github.com/klein-t/teebe/releases/tag/v0.8.1
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/klein-t/teebe/dev/Sources/Teebe/Resources/teebe-logo.png
    credit: "klein-t"
    license: "GPL-3.0-or-later repository asset; trademarks retained"
---

teebe gathers the git worktrees of all your repositories into one window, showing which have a Claude Code, Codex or Cursor agent running in them, what each one has changed, and which branches are merged and safe to delete. It aims at people who run several AI coding agents in parallel and would rather not open an IDE or type `git worktree` commands to keep track.

The project lists macOS 14 or newer on Apple Silicon. Builds are not notarised yet, so the first launch of a downloaded copy needs approval in System Settings; the author's Homebrew tap avoids that step, and the app updates itself afterwards. Releases have arrived frequently since mid-2026 and are still pre-1.0. The code is GPL-licensed, with a separate commercial license offered by the author.
