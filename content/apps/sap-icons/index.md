---
name: "Icons"
summary: "Make consistent app, installer and uninstaller icons for an internal Mac app catalog by dropping in an image."
category: "Design"
tags:
  - images
  - packaging
  - batch-processing
repository: https://github.com/SAP/macOS-icon-generator
website: https://github.com/SAP/macOS-icon-generator
license: "Apache-2.0"
licenseUrl: https://github.com/SAP/macOS-icon-generator/blob/main/LICENSE
download: https://github.com/SAP/macOS-icon-generator/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/SAP/macOS-icon-generator
  - https://github.com/SAP/macOS-icon-generator/blob/main/LICENSE
  - https://github.com/SAP/macOS-icon-generator/releases
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/SAP/macOS-icon-generator/main/source/Icons/Assets.xcassets/AppIcon.appiconset/AppIcon-1024.png
    credit: "SAP SE and Icons contributors"
    license: "Apache-2.0; upstream project asset, trademarks retained"
---

Icons, from SAP, produces a matching set of PNG icons from a single dropped image: a regular app icon, an installer icon and an uninstaller icon with a delete badge and an animated variant. Optional banners mark builds such as test or production versions.

It is aimed at Mac administrators who publish apps through tools such as Jamf Pro or Munki. A Finder extension and a command-line mode support automation. It requires macOS 13 or later and is distributed as an installer package on GitHub releases.
