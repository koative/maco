---
name: JustTags
summary: Decode, filter and compare BER-TLV EMV tags from hex or base64 strings in a dedicated Mac app.
category: Developer tools
tags:
  - inspection
  - developer-utilities
  - finance
repository: https://github.com/kaphacius/just-tags
website: https://github.com/kaphacius/just-tags
license: GPL-3.0
licenseUrl: https://github.com/kaphacius/just-tags/blob/main/LICENSE
download: https://github.com/kaphacius/just-tags/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/kaphacius/just-tags
  - https://github.com/kaphacius/just-tags/blob/main/LICENSE
  - https://github.com/kaphacius/just-tags/releases
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/kaphacius/just-tags/main/JustTags/Resources/Assets.xcassets/AppIcon.appiconset/icon_1024.png
    credit: kaphacius and JustTags contributors
    license: GPL-3.0 repository asset; project name and icon retained by the project
---

JustTags is a niche tool for people who work on card payments. Paste a hex or base64 string of BER-TLV EMV data and it breaks it into a readable list of tags with names and descriptions, decodes the individual bits of tags such as terminal capabilities or verification results, and shows where each tag comes from and how it is formatted.

Decoded lists can be filtered, copied back out as hex, and compared against each other to spot differences between two transactions, with each tab renamable. A custom URL scheme lets you send data from the command line straight into the app. Builds are published as zipped apps on GitHub.
