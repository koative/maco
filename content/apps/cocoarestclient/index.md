---
name: "CocoaRestClient"
summary: "A lightweight Mac app for sending HTTP requests and reading pretty-printed JSON and XML responses."
category: "Developer tools"
tags:
  - http
  - api
  - testing
repository: https://github.com/mmattozzi/cocoa-rest-client
website: https://mmattozzi.github.io/cocoa-rest-client/
license: "BSD-3-Clause"
licenseUrl: https://github.com/mmattozzi/cocoa-rest-client/blob/master/LICENSE.txt
download: https://github.com/mmattozzi/cocoa-rest-client/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/mmattozzi/cocoa-rest-client
  - https://github.com/mmattozzi/cocoa-rest-client/blob/master/LICENSE.txt
  - https://github.com/mmattozzi/cocoa-rest-client/releases
  - https://formulae.brew.sh/cask/cocoarestclient
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/mmattozzi/cocoa-rest-client/master/CocoaRestClient/Images.xcassets/AppIcon.appiconset/icon_512x512.png
    credit: "Michael Mattozzi and CocoaRestClient contributors"
    license: "BSD-3-Clause; upstream project asset, trademarks retained"
---

CocoaRestClient is a small HTTP client for testing REST endpoints. You can set the method, headers, authentication and request body, then read a formatted JSON, XML or MsgPack response alongside its headers and latency. Saved requests live in a sidebar with folders.

It suits quick checks when curl output is hard to read but a full API platform is more than you need. Development has slowed: the most recent binary release on GitHub dates from 2021, so check that it still meets your needs on current macOS.
