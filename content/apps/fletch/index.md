---
name: "Fletch"
summary: "Runs coding agents in sandboxed clones of your repository and chains them into reviewable plan, build and test workflows."
category: "AI"
tags:
  - coding-agents
  - agents
  - git
  - workspaces
repository: https://github.com/fwdai/fletch
website: https://fletch.sh
license: AGPL-3.0
licenseUrl: https://github.com/fwdai/fletch/blob/main/LICENSE
download: https://github.com/fwdai/fletch/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/fwdai/fletch
  - https://github.com/fwdai/fletch/blob/main/LICENSE
  - https://github.com/fwdai/fletch/releases
  - https://github.com/fwdai/fletch/blob/main/NOTICE
  - https://fletch.sh
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/fwdai/fletch/main/src-tauri/icons/icon.png
    credit: "Alex Chaplinsky and fwdai.org"
    license: "AGPL-3.0 repository asset; Fletch name and icon retained by the project"
---

Fletch is a desktop workspace for supervising AI coding agents such as Claude Code, Codex, Cursor and OpenCode. Each agent works in its own clone of your repository inside a macOS sandbox, or optionally a Docker container, so it cannot touch your checkout; an index of the codebase's symbols and call graph is served to every agent, and live diffs and approval gates sit between their work and a merge.

Repeatable jobs can be defined as workflows of plan, build, review and test steps with custom agent roles, where a step finishes only when a checkable condition holds. Fletch drives the command-line tools and subscriptions you already have rather than its own service. The project's releases include a universal, signed DMG, and the README lists macOS 13 or later.
