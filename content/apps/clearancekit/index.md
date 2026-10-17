---
name: "ClearanceKit"
summary: "Block processes from protected files unless a rule tied to their code-signing identity allows it."
category: "Privacy & security"
tags:
  - security
  - privacy
  - files
repository: https://github.com/craigjbass/clearancekit
website: https://craigjbass.github.io/clearancekit/
license: "MIT"
licenseUrl: https://github.com/craigjbass/clearancekit/blob/main/LICENSE.md
download: https://github.com/craigjbass/clearancekit/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/craigjbass/clearancekit
  - https://github.com/craigjbass/clearancekit/blob/main/LICENSE.md
  - https://github.com/craigjbass/clearancekit/releases
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/craigjbass/clearancekit/main/clearancekit/Assets.xcassets/AppIcon.appiconset/icon_256x256.png
    credit: "Craig J. Bass"
    license: "MIT; upstream app icon, trademarks retained"
---

ClearanceKit uses Apple's Endpoint Security framework to sit between processes and the paths you mark as protected, such as SSH keys, credentials or browser profiles. Accesses without an allow rule are denied and listed in the app, where you can turn them into policy. Rules are bound to a developer's signing identity rather than a file path, and jail rules can confine a process to specific folders.

It targets developers worried about compromised packages running with full user permissions. Setup requires approving a system extension and granting Full Disk Access, and overly strict rules can break tools you rely on, so build policy gradually.
