---
name: "Open in Code"
summary: "A Finder toolbar button that opens the current folder, or the selected item, in Visual Studio Code."
category: "Developer tools"
tags:
  - finder
  - code-editor
repository: https://github.com/sozercan/OpenInCode
website: https://github.com/sozercan/OpenInCode
license: "MIT"
licenseUrl: https://github.com/sozercan/OpenInCode/blob/master/LICENSE
download: https://github.com/sozercan/OpenInCode/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/sozercan/OpenInCode
  - https://github.com/sozercan/OpenInCode/blob/master/LICENSE
  - https://github.com/sozercan/OpenInCode/releases
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/sozercan/OpenInCode/master/docs/assets/open-in-code-icon.png
    credit: "Sertac Ozercan"
    license: "MIT repository asset; the icon depicts the Visual Studio Code logo, a trademark of Microsoft"
---

Open in Code is a tiny app meant to live in the Finder toolbar. Clicking it opens Visual Studio Code on whatever Finder is showing: a selected folder, the folder containing a selected file, or the front window's location. If the stable editor is not installed it falls back to VS Code Insiders.

It has no window of its own; you add it by Command-dragging the app into the toolbar. Version 2.0, released in 2026, requires macOS 12 or later and is available from GitHub releases or the author's Homebrew tap.
