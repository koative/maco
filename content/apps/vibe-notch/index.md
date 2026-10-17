---
name: "Vibe Notch"
summary: "Shows Claude Code sessions in a notch overlay, with live status, chat history and approve-or-deny permission prompts."
category: "Developer tools"
tags:
  - notch
  - coding-agents
  - menu-bar
repository: https://github.com/farouqaldori/vibe-notch
website: https://github.com/farouqaldori/vibe-notch
license: "Apache-2.0"
licenseUrl: https://github.com/farouqaldori/vibe-notch/blob/main/LICENSE.md
download: https://github.com/farouqaldori/vibe-notch/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/farouqaldori/vibe-notch
  - https://github.com/farouqaldori/vibe-notch/blob/main/LICENSE.md
  - https://github.com/farouqaldori/vibe-notch/releases
  - https://formulae.brew.sh/cask/vibe-notch
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/farouqaldori/vibe-notch/main/ClaudeIsland/Assets.xcassets/AppIcon.appiconset/icon_256x256.png
    credit: "Farouq Aldori and Vibe Notch contributors"
    license: "Apache-2.0 repository asset; trademarks retained"
---

Vibe Notch follows Claude Code command-line sessions and surfaces them in an animated panel that expands from the MacBook notch. It tracks several sessions at once, shows each conversation with Markdown rendering, and puts approve and deny buttons in the notch when Claude asks to run a tool, so there is no need to switch back to the terminal.

On first launch it installs hooks into Claude Code's configuration folder that report session state to the app over a local socket. It requires macOS 15.6 or later and, according to the project, sends anonymous launch and session events to Mixpanel without conversation content. Earlier builds were released as Claude Island; current disk images are on GitHub releases and in Homebrew.
