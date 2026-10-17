---
name: "GoogleDriveSync"
summary: "A menu bar app that syncs chosen local folders to one or more Google Drive accounts using rclone."
category: "Utilities"
tags:
  - sync
  - cloud
  - menu-bar
  - backup
repository: https://github.com/saihgupr/GoogleDriveSync
website: https://github.com/saihgupr/GoogleDriveSync
license: "MIT"
licenseUrl: https://github.com/saihgupr/GoogleDriveSync/blob/main/LICENSE
download: https://github.com/saihgupr/GoogleDriveSync/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/saihgupr/GoogleDriveSync
  - https://github.com/saihgupr/GoogleDriveSync/blob/main/LICENSE
  - https://github.com/saihgupr/GoogleDriveSync/releases
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/saihgupr/GoogleDriveSync/main/GoogleDriveSync/Assets.xcassets/AppIcon.appiconset/icon_256x256.png
    credit: "Saihgupr (GoogleDriveSync)"
    license: "MIT; upstream project asset, trademarks retained"
---

GoogleDriveSync is a small alternative to Google's own desktop client for people who only want specific folders copied to Drive. Each local folder is paired with a destination path and account, several Google accounts can be connected at once, and syncs run on a schedule from every 15 minutes to daily or on demand. Ignore patterns exclude files such as build output.

Transfers are handled by a bundled rclone engine, with live progress and error reporting in the menu bar. It also copes with external volumes that macOS remounts under a different name. It is an independent project, not a Google product; separate Apple silicon and Intel builds are published on GitHub Releases and require macOS 14.
