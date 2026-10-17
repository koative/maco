---
name: "Papr"
summary: "A local-first RSS reader with tags and rules, full-text fetching and FreshRSS sync, plus a CLI that AI agents can use."
category: "Internet"
tags:
  - rss
  - feeds
  - reading
  - local-first
  - cross-platform
repository: https://github.com/l0ng-ai/papr
website: https://github.com/l0ng-ai/papr
license: "MIT"
licenseUrl: https://github.com/l0ng-ai/papr/blob/main/LICENSE
download: https://github.com/l0ng-ai/papr/releases/latest
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/l0ng-ai/papr
  - https://github.com/l0ng-ai/papr/blob/main/LICENSE
  - https://github.com/l0ng-ai/papr/releases
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/l0ng-ai/papr/main/src-tauri/icons/icon.png
    credit: "l0ng-ai"
    license: "MIT; upstream project icon, trademarks retained"
---

Papr is a desktop feed reader that keeps subscriptions and articles in a local database, with no account. Feeds can be organized in folders, imported or exported as OPML, filtered through unread, starred and read-later views, and tagged automatically by rules. It can fetch the full text of truncated articles, play audio in a built-in player, and keep read state in step with a FreshRSS server.

Optional AI summaries and article questions use your own API key. A separate `papr` command reads the same database, so coding agents can search and triage feeds from a terminal. macOS disk images for Apple silicon and Intel are published on GitHub, and the project also offers a Homebrew cask from its own tap.
