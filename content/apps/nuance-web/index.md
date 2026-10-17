---
name: "Web"
summary: "An experimental WebKit browser with a quick-lookup Glance panel and an optional local AI assistant."
category: "Internet"
tags:
  - browser
  - local-ai
  - vertical-tabs
repository: https://github.com/nuance-dev/Web
website: https://github.com/nuance-dev/Web
license: "MIT"
licenseUrl: https://github.com/nuance-dev/Web/blob/main/LICENSE
download: https://github.com/nuance-dev/Web/releases/latest
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/nuance-dev/Web
  - https://github.com/nuance-dev/Web/blob/main/LICENSE
  - https://github.com/nuance-dev/Web/releases
assets:
  - path: ./assets/icon.png
    source: https://github.com/nuance-dev/Web/releases/download/v0.1.3/Web-0.1.3-arm64.zip
    credit: "Nuanced"
    license: "MIT; icon extracted unmodified from the official 0.1.3 release bundle (Web.app/Contents/Resources/AppIcon.icns)"
---

Web is a small browser built with SwiftUI and WebKit. A global shortcut opens Glance, a compact lookup window in the corner of the screen that can be pinned or turned into a tab, and a focus mode hides everything but the page. Tabs can sit in a sidebar, along the top, or be hidden, with a command palette for finding tabs and actions.

Its assistant can summarize and answer questions about the current page using a model running locally through MLX, a provider API key, or a compatible server you run; sharing pages with a cloud provider is off by default. The project calls 0.1.3 a development preview. It requires an Apple silicon Mac with macOS 26.5 or later and is distributed as a zip on GitHub.
