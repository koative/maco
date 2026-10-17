---
name: "MongoDB.app"
summary: "Run a local MongoDB server by opening a Mac app instead of installing it through a package manager."
category: "Developer tools"
tags:
  - database
  - mongodb
repository: https://github.com/gcollazo/mongodbapp
website: https://gcollazo.com/mongodb-app/
license: "MIT"
licenseUrl: https://github.com/gcollazo/mongodbapp/blob/master/LICENSE
download: https://github.com/gcollazo/mongodbapp/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/gcollazo/mongodbapp
  - https://github.com/gcollazo/mongodbapp/blob/master/LICENSE
  - https://github.com/gcollazo/mongodbapp/releases
  - https://formulae.brew.sh/cask/gcollazo-mongodb
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/gcollazo/mongodbapp/master/MongoDB/Images.xcassets/AppIcon.appiconset/icon-512.png
    credit: "Giovanni Collazo"
    license: "MIT project asset depicting the MongoDB leaf; MongoDB trademarks belong to MongoDB, Inc."
---

MongoDB.app bundles the MongoDB server binaries into a Mac app: drag it to Applications and open it to get a local database server without a separate install. The bundled command-line tools can be added to your shell path for use outside the app.

It is meant for local development rather than production deployments. Releases track specific MongoDB versions, the most recent bundling MongoDB 8.0.5. Homebrew has disabled its cask because the build fails Gatekeeper checks, so download from GitHub releases and approve the app manually.
