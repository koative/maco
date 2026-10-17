---
name: "Asset Catalog Tinkerer"
summary: "Open compiled asset catalog (.car) files to browse the images inside, then copy or export them."
category: "Developer tools"
tags:
  - xcode
  - images
  - inspection
  - quick-look
repository: https://github.com/insidegui/AssetCatalogTinkerer
website: https://github.com/insidegui/AssetCatalogTinkerer
license: "BSD-2-Clause"
licenseUrl: https://github.com/insidegui/AssetCatalogTinkerer/blob/main/LICENSE
download: https://github.com/insidegui/AssetCatalogTinkerer/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/insidegui/AssetCatalogTinkerer
  - https://github.com/insidegui/AssetCatalogTinkerer/blob/main/LICENSE
  - https://github.com/insidegui/AssetCatalogTinkerer/releases/tag/2.9
  - https://formulae.brew.sh/cask/asset-catalog-tinkerer
assets:
  - path: ./assets/icon.png
    source: https://github.com/insidegui/AssetCatalogTinkerer/releases/download/2.9/AssetCatalogTinkerer_v2.9-290.zip
    credit: "Guilherme Rambo"
    license: "BSD-2-Clause project asset (AppIcon.icns from the 2.9 release bundle); trademarks retained"
---

Apps ship their images compiled into asset catalog files, which Finder cannot look inside. Asset Catalog Tinkerer opens a `.car` file, usually found in an app's Resources folder, shows the images it contains, and lets you drag individual assets out or export a selection or the whole catalog to a folder. A bundled Quick Look plug-in previews catalogs without opening the app.

It was built for images, so newer catalog contents such as named colours are not supported. The latest release is 2.9 from August 2024, also available as a Homebrew cask.
