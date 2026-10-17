---
name: "Preview3MF"
summary: "Quick Look previews and Finder thumbnails for 3MF print files, rendered in 3D without opening a slicer."
category: "Utilities"
tags:
  - quick-look
  - 3d-printing
  - previews
  - finder
repository: https://github.com/cavoco/Preview3MF
website: https://cavoco.github.io/Preview3MF/
license: "MIT"
licenseUrl: https://github.com/cavoco/Preview3MF/blob/main/LICENSE
download: https://github.com/cavoco/Preview3MF/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/cavoco/Preview3MF
  - https://github.com/cavoco/Preview3MF/blob/main/LICENSE
  - https://github.com/cavoco/Preview3MF/releases
  - https://cavoco.github.io/Preview3MF/
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/cavoco/Preview3MF/main/Preview3MF/Assets.xcassets/AppIcon.appiconset/3mf.png
    credit: "Cavan O'Connor and Preview3MF contributors"
    license: "MIT repository asset; name and logo retained by the author"
---

Preview3MF adds Quick Look and thumbnail extensions for `.3mf` files, so pressing Space in Finder shows a rotating, zoomable 3D view of the model. An overlay lists triangle and object counts and dimensions, and for Bambu Studio or OrcaSlicer projects it shows the build plate, print profile and, after slicing, estimated time and filament.

The host app only needs to be launched once to register the extensions, which are then enabled under Quick Look in the Extensions section of System Settings. Builds are published on GitHub releases.
