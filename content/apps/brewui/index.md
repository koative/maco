---
name: BrewUI
summary: Homebrew's official Mac app for finding, installing and updating formulae and casks without the Terminal.
category: Developer tools
tags:
  - homebrew
  - package-manager
repository: https://github.com/Homebrew/BrewUI
website: https://github.com/Homebrew/BrewUI
license: AGPL-3.0
licenseUrl: https://github.com/Homebrew/BrewUI/blob/main/LICENSE
download: https://github.com/Homebrew/BrewUI/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/Homebrew/BrewUI
  - https://github.com/Homebrew/BrewUI/blob/main/LICENSE
  - https://github.com/Homebrew/BrewUI/releases
  - https://formulae.brew.sh/cask/homebrew-app
assets:
  - path: ./assets/icon.png
    source: https://github.com/Homebrew/BrewUI/releases/download/v0.6.0/Homebrew-0.6.0.zip
    credit: Homebrew project
    license: Extracted unmodified from the official app bundle (Contents/Resources/AppIcon.icns); Homebrew name and logo retained by the project
---

BrewUI is a graphical front end maintained by the Homebrew project itself. It lets you discover, install, update and remove formulae and casks while keeping the underlying Homebrew operations visible instead of hiding them behind the interface. Data comes from the local `brew` command and Homebrew's public JSON API.

The app installs as Homebrew.app, either from the GitHub releases or with the official `homebrew-app` cask. It is still in its 0.x releases, so expect the feature set to keep changing; configuration follows Homebrew's own `brew.env` rather than shell variables.
