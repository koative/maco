---
name: "Crunch"
summary: "A drag-and-drop PNG optimizer that combines pngquant and zopflipng to shrink image files."
category: "Design"
tags:
  - images
  - compression
  - optimization
  - drag-and-drop
repository: https://github.com/chrissimpkins/Crunch
website: https://github.com/chrissimpkins/Crunch
license: "MIT AND GPL-3.0 AND Apache-2.0"
licenseUrl: https://github.com/chrissimpkins/Crunch/blob/master/LICENSE.md
download: https://github.com/chrissimpkins/Crunch/releases/latest
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/chrissimpkins/Crunch
  - https://github.com/chrissimpkins/Crunch/blob/master/LICENSE.md
  - https://github.com/chrissimpkins/Crunch/releases
  - https://github.com/chrissimpkins/Crunch/blob/master/docs/MACOSGUI.md
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/chrissimpkins/Crunch/master/img/CrunchIcon.icns
    credit: "Christopher Simpkins; adapted from the \"Audacity Icon\" by Evin (xillra)"
    license: "CC BY 3.0 per the Crunch LICENSE.md application icon notice"
---

Crunch reduces the size of PNG files by running them through lossy palette quantization with pngquant and then lossless recompression with zopflipng. Drop images on its window and it writes optimized copies; the project also provides a Finder right-click service and a `crunch` command-line tool that use the same pipeline.

It trades speed for smaller files, so large batches can take a while. Crunch's own code is MIT licensed, while the bundled pngquant (GPL-3.0) and zopflipng (Apache-2.0) keep their licenses, all recorded in the project's LICENSE.md. The last release, 5.0.0, was published in June 2022 as a disk image on GitHub.
