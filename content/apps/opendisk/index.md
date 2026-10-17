---
name: "OpenDisk"
summary: "A disk-usage analyzer that maps your drive as an interactive sunburst chart and lets you clear out large files."
category: "Utilities"
tags:
  - disk-usage
  - storage
  - cleanup
  - visualization
repository: https://github.com/137137137/OpenDisk
website: https://opendisk.app
license: "MIT"
licenseUrl: https://github.com/137137137/OpenDisk/blob/main/LICENSE
download: https://opendisk.app
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/137137137/OpenDisk
  - https://github.com/137137137/OpenDisk/blob/main/LICENSE
  - https://opendisk.app
  - https://github.com/137137137/OpenDisk/releases
  - https://formulae.brew.sh/cask/opendisk
  - https://apps.apple.com/app/opendisk/id6793260558
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/137137137/OpenDisk/main/OpenDisk/Resources/Assets.xcassets/AppIcon.appiconset/icon_256.png
    credit: "OpenDisk contributors"
    license: "MIT; upstream project asset, trademarks retained"
---

OpenDisk scans a drive and draws its folders as a clickable sunburst chart, so the largest directories stand out at a glance. Results appear while the scan is still running, later rescans only revisit what changed, and a name search covers every file on the volume. Purgeable space and caches are shown so the totals line up with what macOS reports.

Files you want gone can be dragged into a collector that totals the space you would reclaim before deleting them in one step; that deletion skips the Trash, and system folders are protected. The direct download needs Full Disk Access to see the whole disk, while the Mac App Store edition is sandboxed and only scans locations you choose. Homebrew users can install the `opendisk` cask.
