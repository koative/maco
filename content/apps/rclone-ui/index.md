---
name: "Rclone UI"
summary: "A desktop interface for rclone that mounts remotes and runs, schedules and monitors transfers to S3 and other storage."
category: "Utilities"
tags:
  - cloud-storage
  - sync
  - backup
  - cross-platform
repository: https://github.com/rclone/rclone-ui
website: https://rcloneui.com
license: "Apache-2.0"
licenseUrl: https://github.com/rclone/rclone-ui/blob/main/LICENSE
download: https://github.com/rclone/rclone-ui/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/rclone/rclone-ui
  - https://github.com/rclone/rclone-ui/blob/main/LICENSE
  - https://github.com/rclone/rclone-ui/releases
  - https://formulae.brew.sh/cask/rclone-ui
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/rclone/rclone-ui/main/src-tauri/icons/icon.icns
    credit: "Rclone UI contributors"
    license: "Apache-2.0 repository asset; Rclone UI name and logo retained by the project"
---

Rclone UI wraps the rclone command-line tool in a desktop app for working with remotes such as S3-compatible buckets, Backblaze and Cloudflare storage. It mounts remotes and can remount them at login, runs copy, sync and move jobs while showing their progress, schedules one-off or recurring tasks, and can control rclone instances running on servers or in Docker containers.

The app is free to use; the developer sells an optional lifetime license that unlocks extra features, and that license check is part of the published Apache-2.0 source. macOS downloads for Apple Silicon and Intel come from GitHub releases, and the app is also a Homebrew cask.
