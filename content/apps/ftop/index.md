---
name: "ftop"
summary: "A compact floating system monitor for Apple silicon Macs showing cores, memory, GPU, power and the busiest apps."
category: "Utilities"
tags:
  - system-monitoring
  - cpu
  - processes
  - temperature
repository: https://github.com/Nongfsq/ftop
website: https://github.com/Nongfsq/ftop
license: "MIT"
licenseUrl: https://github.com/Nongfsq/ftop/blob/main/LICENSE
download: https://github.com/Nongfsq/ftop/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/Nongfsq/ftop
  - https://github.com/Nongfsq/ftop/blob/main/LICENSE
  - https://github.com/Nongfsq/ftop/releases
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/Nongfsq/ftop/main/Support/AppIcon.icns
    credit: "Nongfsq"
    license: "MIT (repository license); upstream project asset"
---

ftop puts a live view of the machine into one small floating panel instead of a terminal tab. It shows per-core load and frequency grouped by core type, memory use and pressure, network speed, GPU load, power draw and a temperature reading, plus a ranked list of the busiest apps with helper processes folded into their parent app.

The panel rearranges itself to fit whatever size you drag it to, shows only current values rather than history graphs, and stops sampling when it is hidden apart from one figure in the menu bar. The project targets Apple silicon Macs, and its GitHub releases are arm64 builds.
