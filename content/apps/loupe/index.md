---
name: "Loupe"
summary: "An accessibility inspector that turns any on-screen Mac UI element into structured notes for AI coding agents."
category: "Developer tools"
tags:
  - accessibility
  - inspection
  - coding-agents
  - annotation
repository: https://github.com/britchie4/Loupe
website: https://britchie4.github.io/Loupe/
license: "MIT"
licenseUrl: https://github.com/britchie4/Loupe/blob/main/LICENSE
download: https://github.com/britchie4/Loupe/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/britchie4/Loupe
  - https://github.com/britchie4/Loupe/blob/main/LICENSE
  - https://github.com/britchie4/Loupe/releases
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/britchie4/Loupe/main/Loupe/Assets.xcassets/AppIcon.appiconset/app_icon_256.png
    credit: "Brent Ritchie"
    license: "MIT repository asset; Loupe name and icon retained by the author"
---

Loupe reads the accessibility tree of whatever app is under the pointer and shows each element's role and hierarchy as you hover. Click an element, write the change you want in plain language, and copy the result as structured text with element paths and search hints.

The output is meant to be pasted into tools such as Claude Code, Cursor or Codex so they can locate the exact control while building a Mac app, instead of guessing from a screenshot. It needs macOS 14 and Accessibility permission; disk images are on GitHub releases.
