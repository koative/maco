---
name: OpenBucket
summary: Browse, preview, share and manage files in Amazon S3 and S3-compatible storage from a native Mac app.
category: Internet
tags:
  - cloud
  - file-transfer
  - s3
  - native
repository: https://github.com/koative/openbucket
website: https://openbucket.koative.com
license: MIT
licenseUrl: https://github.com/koative/openbucket/blob/main/LICENSE
download: https://github.com/koative/openbucket/releases/latest
featured: false
added: '2026-10-18'
verified: '2026-10-18'
icon: ./assets/icon.png
screenshots:
  - src: ./assets/grid.jpg
    alt: Grid view of a demo travel folder with image and video thumbnails and the Info panel for a selected photo.
    source: https://github.com/koative/openbucket/blob/main/docs/media/browser-grid.jpg
    credit: Koative
  - src: ./assets/list.jpg
    alt: List view with name, size, modified and kind columns, a selected photo and the Info panel.
    source: https://github.com/koative/openbucket/blob/main/docs/media/browser-list.jpg
    credit: Koative
  - src: ./assets/storage-overview.jpg
    alt: Storage Overview showing a treemap of a folder by size and kind, its storage class and largest files.
    source: https://github.com/koative/openbucket/blob/main/docs/media/storage-overview.jpg
    credit: Koative
sources:
  - https://github.com/koative/openbucket
  - https://github.com/koative/openbucket/blob/main/LICENSE
  - https://github.com/koative/openbucket/releases
  - https://github.com/koative/openbucket/blob/main/docs/compatibility.md
assets:
  - path: ./assets/icon.png
    source: https://github.com/koative/openbucket/blob/main/App/Resources/Assets.xcassets/AppIcon.appiconset/icon-1024.png
    credit: Koative
    license: MIT; the full-bleed app icon shown in the macOS rounded-square shape, trademarks retained
  - path: ./assets/grid.jpg
    source: https://github.com/koative/openbucket/blob/main/docs/media/browser-grid.jpg
    credit: Koative
    license: MIT; real app window with fictional demo content
  - path: ./assets/list.jpg
    source: https://github.com/koative/openbucket/blob/main/docs/media/browser-list.jpg
    credit: Koative
    license: MIT; real app window with fictional demo content
  - path: ./assets/storage-overview.jpg
    source: https://github.com/koative/openbucket/blob/main/docs/media/storage-overview.jpg
    credit: Koative
    license: MIT; real app window with fictional demo content
---

OpenBucket opens S3 buckets like folders on your Mac: grid and list views, thumbnails, Quick Look, an Info panel with headers, tags and photo details, version history, presigned share links with a QR code, and parallel downloads and uploads. A Storage Overview maps a folder by size and kind, and Compare with Local Folder checks a local copy and can update either side without deleting anything.

Every connection is read-only until you turn on Allow changes for it, and keys you enter are kept in the macOS Keychain. It works with custom endpoints, path-style addressing, AWS CLI profiles and buckets your key can't list. It is an early release that needs macOS 26 or later; the project documents which providers have been tested live (Garage and S3Mock so far) and is published by Koative, the team behind this catalog.
