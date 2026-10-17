---
name: "macUSB"
summary: "A guided app for creating bootable USB drives for macOS, Windows and Linux, with a built-in macOS installer downloader."
category: "Utilities"
tags:
  - external-drives
  - downloads
  - linux
repository: https://github.com/Kruszoneq/macUSB
website: https://macusb.app
license: "MIT"
licenseUrl: https://github.com/Kruszoneq/macUSB/blob/main/LICENSE.txt
download: https://github.com/Kruszoneq/macUSB/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/Kruszoneq/macUSB
  - https://github.com/Kruszoneq/macUSB/blob/main/LICENSE.txt
  - https://github.com/Kruszoneq/macUSB/releases
  - https://formulae.brew.sh/cask/macusb
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/Kruszoneq/macUSB/main/docs/readme-assets/images/macUSBicon.png
    credit: "Krystian Pierz (macUSB)"
    license: "MIT; upstream project asset, trademarks retained"
---

macUSB walks through turning a USB stick into installation media. It began as a way to make installers for older Mac OS X and macOS versions on current machines, including Apple silicon Macs, and now also writes Linux and Windows images. A built-in downloader fetches macOS installers from Apple's servers, and SHA-256 checksums can be calculated for disk images before writing.

The app checks free space before downloading and explains version-specific requirements, such as Rosetta for some older installers. Windows images are written as FAT32, so very large `install.wim` files may need the separately installed `wimlib` to split them. Download it from GitHub Releases or install the `macusb` Homebrew cask.
