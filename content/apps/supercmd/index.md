---
name: "SuperCmd"
summary: "A keyboard launcher that runs Raycast extensions and adds clipboard history, snippets, dictation and AI actions."
category: "Productivity"
tags:
  - launcher
  - extensions
  - clipboard
  - snippets
  - dictation
  - window-management
repository: https://github.com/SuperCmdLabs/SuperCmd
website: https://supercmd.sh
license: MIT
licenseUrl: https://github.com/SuperCmdLabs/SuperCmd/blob/main/LICENSE
download: https://github.com/SuperCmdLabs/SuperCmd/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/SuperCmdLabs/SuperCmd
  - https://github.com/SuperCmdLabs/SuperCmd/blob/main/LICENSE
  - https://github.com/SuperCmdLabs/SuperCmd/releases
  - https://supercmd.sh
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/SuperCmdLabs/SuperCmd/main/supercmd.png
    credit: "Shobhit Bhosure and SuperCmd contributors"
    license: "MIT repository asset; SuperCmd name and icon retained by the project"
---

SuperCmd is a Spotlight-style launcher whose main draw is compatibility with Raycast extensions: it ships its own implementation of the Raycast extension API, installs extensions from the Raycast store and can import a Raycast settings backup. Around that it bundles clipboard history, text snippets, quick links, file search, window tiling commands, a Caps Lock hyper key and script commands.

Its voice and AI features include hold-to-talk dictation with on-device speech recognition, read-aloud for selected text and chat or inline prompts backed by the provider you configure, including local Ollama models. The app is built on Electron and installs from the GitHub releases or the project's Homebrew tap. Its README notes one anonymous launch event and anonymous extension install counts sent to the project.
