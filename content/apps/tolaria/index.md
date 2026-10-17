---
name: "Tolaria"
summary: "A keyboard-first desktop app for markdown knowledge bases, where every vault is a folder of plain files in Git."
category: "Productivity"
tags:
  - notes
  - markdown
  - knowledge-base
  - git
  - cross-platform
repository: https://github.com/refactoringhq/tolaria
website: https://tolaria.md
license: "AGPL-3.0"
licenseUrl: https://github.com/refactoringhq/tolaria/blob/main/LICENSE
download: https://github.com/refactoringhq/tolaria/releases/latest
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/refactoringhq/tolaria
  - https://github.com/refactoringhq/tolaria/blob/main/LICENSE
  - https://github.com/refactoringhq/tolaria/releases/latest
  - https://formulae.brew.sh/cask/tolaria
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/refactoringhq/tolaria/main/src-tauri/icons/icon.png
    credit: "Refactoring and Tolaria contributors"
    license: "AGPL-3.0; upstream project asset, trademarks retained"
---

Tolaria organizes a personal or team knowledge base as markdown files with YAML frontmatter, so notes stay readable in any editor. Each vault is a Git repository, which gives it version history and lets you sync through any remote without an account or a Tolaria server. Note types act as navigation aids rather than enforced schemas, and a command palette keeps most actions on the keyboard.

Because a vault is just files, it also works as shared context for AI coding agents, and the app includes setup paths for Claude Code, Codex CLI and Gemini CLI. It is built with Tauri; stable releases include separate macOS builds for Intel and Apple silicon, and a Homebrew cask is available.
