---
name: "CodeSucker"
summary: "Turns a local code project into the source-code document required for Chinese software copyright registration."
category: "Developer tools"
tags:
  - code
  - offline
  - cross-platform
repository: https://github.com/fanbuz/codesucker
website: https://github.com/fanbuz/codesucker
license: "Apache-2.0"
licenseUrl: https://github.com/fanbuz/codesucker/blob/main/LICENSE
download: https://github.com/fanbuz/codesucker/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/fanbuz/codesucker
  - https://github.com/fanbuz/codesucker/blob/main/LICENSE
  - https://github.com/fanbuz/codesucker/releases
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/fanbuz/codesucker/main/packages/app/build/icon.png
    credit: "fanbuz"
    license: "Apache-2.0; upstream project asset, trademarks retained"
---

CodeSucker addresses a narrow but tedious job: preparing the source program material for a software copyright application in China, which expects a fixed number of pages, lines per page and a header with the software name and version. A step-by-step wizard scans a project, lets you pick folders and file types, strips comments, masks secrets such as API keys, and paginates the result.

Exports are Word and plain-text documents, and a pre-export check flags problems like short pages or inconsistent headers. Everything runs locally. The interface and documentation are in Chinese; unsigned Mac builds for Apple silicon and Intel are on GitHub releases.
