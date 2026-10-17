---
name: "Jupyter Notebook Viewer"
summary: "A small Mac app for reading Jupyter notebooks without running Jupyter, with a Quick Look preview plug-in."
category: "Developer tools"
tags:
  - jupyter
  - quick-look
  - previews
repository: https://github.com/tuxu/nbviewer-app
website: https://github.com/tuxu/nbviewer-app
license: "MIT"
licenseUrl: https://github.com/tuxu/nbviewer-app/blob/master/LICENSE.md
download: https://github.com/tuxu/nbviewer-app/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/tuxu/nbviewer-app
  - https://github.com/tuxu/nbviewer-app/blob/master/LICENSE.md
  - https://github.com/tuxu/nbviewer-app/releases
  - https://formulae.brew.sh/cask/jupyter-notebook-viewer
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/tuxu/nbviewer-app/master/Jupyter%20Notebook%20Viewer/Images.xcassets/AppIcon.appiconset/icon_256x256.png
    credit: "Tino Wagner"
    license: "MIT; upstream project asset, trademarks retained"
---

Jupyter Notebook Viewer opens .ipynb files as rendered documents in a standalone app that needs no Python or Jupyter installation. It renders notebooks with nbviewer.js and bundles a Quick Look generator so notebooks can be previewed with the space bar in Finder.

The latest release is 0.1.6 from December 2023. Homebrew disabled its cask in September 2026 because the build fails Gatekeeper checks, so expect to approve the app manually after downloading it from GitHub releases.
