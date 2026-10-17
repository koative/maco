---
name: "CompressO"
summary: "An offline desktop app that shrinks video and image files with FFmpeg-based compression presets."
category: "Media"
tags:
  - compression
  - video
  - images
  - offline
  - cross-platform
repository: https://github.com/codeforreal1/compressO
website: https://compresso.codeforreal.com
license: "AGPL-3.0"
licenseUrl: https://github.com/codeforreal1/compressO/blob/main/LICENSE
download: https://github.com/codeforreal1/compressO/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/codeforreal1/compressO
  - https://github.com/codeforreal1/compressO/blob/main/LICENSE
  - https://github.com/codeforreal1/compressO/releases
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/codeforreal1/compressO/main/src-tauri/icons/128x128@2x.png
    credit: "CompressO contributors"
    license: "AGPL-3.0 repository asset; name and icon retained by the author"
---

CompressO takes a video or image and produces a much smaller copy, handing the actual encoding to bundled tools such as FFmpeg. Everything happens on the machine: apart from its built-in update check, the app makes no network requests.

It is a Tauri app published for macOS, Windows and Linux. GitHub releases carry separate disk images for Apple silicon and Intel Macs; the builds are not notarized, so macOS asks for confirmation on first launch.
