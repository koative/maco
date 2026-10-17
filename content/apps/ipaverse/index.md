---
name: "ipaverse"
summary: "Search, download, inspect and re-sign App Store packages, then install compatible IPAs on an iPhone or iPad."
category: "Developer tools"
tags:
  - iphone
  - ipad
  - code-signing
  - inspection
  - downloads
repository: https://github.com/bahattinkoc/ipaverse
website: https://github.com/bahattinkoc/ipaverse
license: "MIT AND GPL-2.0 AND LGPL-2.1-or-later"
licenseUrl: https://github.com/bahattinkoc/ipaverse/blob/main/LICENSE
download: https://github.com/bahattinkoc/ipaverse/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/bahattinkoc/ipaverse
  - https://github.com/bahattinkoc/ipaverse/blob/main/LICENSE
  - https://github.com/bahattinkoc/ipaverse#license
  - https://github.com/bahattinkoc/ipaverse/releases
  - https://formulae.brew.sh/cask/ipaverse
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/bahattinkoc/ipaverse/main/ipaverse/ipaverse/Assets.xcassets/AppIcon.appiconset/Untitled-macOS-Default-1024x1024@1x.png
    credit: "Bahattin Koç (baaddin)"
    license: "MIT (repository license); upstream project asset"
---

ipaverse signs in with one or more Apple Accounts to search the App Store catalogues, browse version history and download app packages into an offline library. Downloads normally stay FairPlay-encrypted and tied to the account. Self-built or DRM-free IPAs can be compared, edited, re-signed with your own certificate and provisioning profile, and installed on an iPhone or iPad over USB or Wi-Fi.

A separate toolkit for authorised security testing (static analysis, Frida injection and similar tools) stays hidden until it is explicitly enabled. The original code is MIT-licensed, but distributed builds also statically link Unicorn Engine under GPL-2.0 and bundle libimobiledevice components under LGPL-2.1-or-later, which is reflected in the license field. It is distributed as a DMG on GitHub and through Homebrew.
