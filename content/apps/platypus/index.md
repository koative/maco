---
name: "Platypus"
summary: "Wrap shell, Python, Ruby and other scripts in Mac app bundles with droplets, menus or progress windows."
category: "Developer tools"
tags:
  - scripting
  - automation
  - packaging
repository: https://github.com/sveinbjornt/Platypus
website: https://sveinbjorn.org/platypus
license: "BSD-3-Clause"
licenseUrl: https://github.com/sveinbjornt/Platypus/blob/master/LICENSE.txt
download: https://sveinbjorn.org/platypus
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/sveinbjornt/Platypus
  - https://github.com/sveinbjornt/Platypus/blob/master/LICENSE.txt
  - https://sveinbjorn.org/platypus
  - https://github.com/sveinbjornt/Platypus/releases
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/sveinbjornt/Platypus/master/Icons/PlatypusAppIcon.icns
    credit: "Sveinbjorn Thordarson"
    license: "BSD-3-Clause; upstream project asset, trademarks retained"
---

Platypus turns a script into a regular Mac application. Choose an interpreter, an interface style such as a progress bar, text output window, droplet, web view or status menu, then set the icon, identifier and accepted file types. Dragged files are passed to the script as arguments.

It is useful for sharing command-line tools with people who will not open Terminal. A command-line tool is included for scripted builds. Homebrew has disabled its cask because the download fails Gatekeeper checks, so download from the official site or GitHub releases.
