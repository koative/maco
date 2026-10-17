---
name: "OpenCode"
summary: "An open-source AI coding agent with a terminal interface and a beta desktop app for macOS."
category: "AI"
tags:
  - coding-agents
  - agents
  - terminal
  - cross-platform
repository: https://github.com/anomalyco/opencode
website: https://opencode.ai
license: "MIT"
licenseUrl: https://github.com/anomalyco/opencode/blob/dev/LICENSE
download: https://opencode.ai/download
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/anomalyco/opencode
  - https://github.com/anomalyco/opencode/blob/dev/LICENSE
  - https://github.com/anomalyco/opencode/releases
  - https://opencode.ai/download
  - https://formulae.brew.sh/cask/opencode-desktop
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/anomalyco/opencode/dev/packages/desktop/icons/prod/icon.png
    credit: "OpenCode contributors"
    license: "MIT repository asset; OpenCode name and logo retained by the project"
---

OpenCode is an AI coding agent that reads a project, plans changes, edits files and runs commands on your behalf. It ships two built-in agents you can switch between: a full-access one for development work and a read-only one for exploring an unfamiliar codebase, which asks before running shell commands.

Most people drive it from the terminal, but the project also publishes a desktop application, still marked beta, with separate Apple silicon and Intel downloads on its releases page and a Homebrew cask (`opencode-desktop`). The command-line version installs through Homebrew, npm or the project's install script.
