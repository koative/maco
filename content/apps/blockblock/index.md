---
name: BlockBlock
summary: Receive alerts when software attempts to establish persistence.
category: Privacy & security
tags:
  - security
  - persistence
  - monitoring
repository: https://github.com/objective-see/BlockBlock
website: https://github.com/objective-see/BlockBlock
license: GPL-3.0
licenseUrl: https://github.com/objective-see/BlockBlock/blob/master/LICENSE.md
download: https://github.com/objective-see/BlockBlock/releases
featured: false
added: 2026-10-17
verified: 2026-10-17
sources:
  - https://github.com/objective-see/BlockBlock
  - https://github.com/objective-see/BlockBlock/blob/master/LICENSE.md
  - https://github.com/objective-see/BlockBlock/blob/master/README.md
  - https://github.com/objective-see/BlockBlock/releases
assets:
  - path: ./assets/icon.png
    source: https://github.com/objective-see/BlockBlock/blob/9d53e2230633a5a692bd82717c678c50ca98f30c/Daemon/Daemon/Assets.xcassets/AppIcon.appiconset/icon_256x256.png
    credit: BlockBlock contributors
    license: GPL-3.0; upstream app artwork, trademark rights retained.
screenshots: []
icon: ./assets/icon.png
---

BlockBlock watches common persistence locations and alerts when software adds itself there. It is useful for noticing background components that might otherwise be installed quietly.

Legitimate installers can also create persistent items. Review each alert in context and follow the official setup instructions for the required system permissions.
