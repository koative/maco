---
name: Dylib Hijack Scanner
summary: Scan for applications susceptible to dynamic-library hijacking.
category: Privacy & security
tags:
  - security
  - libraries
  - inspection
repository: https://github.com/objective-see/DylibHijackScanner
website: https://objective-see.org/products/dhs.html
license: GPL-3.0
licenseUrl: https://github.com/objective-see/DylibHijackScanner/blob/main/LICENSE
download: https://github.com/objective-see/DylibHijackScanner/releases
featured: false
added: 2026-10-17
verified: 2026-10-17
sources:
  - https://github.com/objective-see/DylibHijackScanner
  - https://github.com/objective-see/DylibHijackScanner/blob/main/LICENSE
  - https://github.com/objective-see/DylibHijackScanner/releases
  - https://objective-see.org/products/dhs.html
assets:
  - path: ./assets/icon.png
    source: https://github.com/objective-see/DylibHijackScanner/blob/1fd9df048284320e7bcd6fae1657d4e7da446ba6/DHS/images/Assets.xcassets/AppIcon.appiconset/icon_256x256.png
    credit: Dylib Hijack Scanner contributors
    license: GPL-3.0; upstream app artwork, trademark rights retained.
screenshots: []
icon: ./assets/icon.png
---

Dylib Hijack Scanner checks for dynamic-library loading conditions that could allow a hijack and for signs of an existing one. It is an inspection utility for investigating a specific class of macOS security issue.

Findings require interpretation and can include susceptible software that has not been compromised. The official product page describes the scanning approach and limitations.
