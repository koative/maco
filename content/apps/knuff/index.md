---
name: Knuff
summary: Send test push notifications to Apple devices through APNs using certificates
  from your keychain.
category: Developer tools
tags:
- notifications
- debugging
- testing
repository: https://github.com/KnuffApp/Knuff
website: https://github.com/KnuffApp/Knuff
license: MIT
licenseUrl: https://github.com/KnuffApp/Knuff/blob/master/LICENSE
download: https://github.com/KnuffApp/Knuff/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
- https://github.com/KnuffApp/Knuff
- https://github.com/KnuffApp/Knuff/blob/master/LICENSE
- https://github.com/KnuffApp/Knuff/releases
assets:
- path: ./assets/icon.png
  source: https://raw.githubusercontent.com/KnuffApp/Knuff/master/Knuff/Images.xcassets/AppIcon.appiconset/icon_256x256%402x.png
  credit: Bowtie AB and Knuff contributors
  license: MIT; upstream project asset, trademarks retained
---

Knuff is a debugging tool for iOS and macOS developers who need to send a push notification without writing server code. It loads an APNs certificate from the keychain, detects the development or production environment, and sends a custom JSON payload to a device token; payloads can be saved as documents.

The last release dates from 2020 and the project is no longer actively developed. It works with APNs certificates stored in the keychain.
