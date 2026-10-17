---
name: "ExtendFS"
summary: "Mount Linux ext2, ext3 and ext4 drives read-only on a Mac through an FSKit extension."
category: "Utilities"
tags:
  - external-drives
  - files
  - linux
repository: https://github.com/kthchew/ExtendFS
website: https://apps.kpchew.com/extendfs/
license: "GPL-3.0-or-later"
licenseUrl: https://github.com/kthchew/ExtendFS/blob/main/LICENSE.md
download: https://github.com/kthchew/ExtendFS/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/kthchew/ExtendFS
  - https://github.com/kthchew/ExtendFS/blob/main/LICENSE.md
  - https://github.com/kthchew/ExtendFS/releases
  - https://github.com/kthchew/ExtendFS/blob/main/COPYING
  - https://apps.apple.com/us/app/extendfs-for-linux-filesystems/id6755664332
assets:
  - path: ./assets/icon.png
    source: https://github.com/kthchew/ExtendFS/releases/download/v1.2.1/ExtendFS.app.zip
    credit: "Kenneth Chew"
    license: "GPL-3.0-or-later; official app icon extracted unmodified from the upstream release build, trademarks retained"
---

ExtendFS adds read-only support for Linux ext2, ext3 and ext4 volumes using Apple's FSKit, so there is no kernel extension to install. After enabling its file system extension in System Settings, supported drives and disk images mount automatically.

It cannot write to these volumes, and it requires macOS 15.6 or later; the website documents further limitations. The GitHub build is free, and the same app is sold on the Mac App Store. The license is GPL version 3 or later with an added permission for app store distribution.
