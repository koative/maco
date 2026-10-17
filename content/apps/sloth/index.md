---
name: "Sloth"
summary: "Browse every file, socket, pipe and device that running processes have open, in a searchable window."
category: "Developer tools"
tags:
  - files
  - processes
  - network
  - inspection
repository: https://github.com/sveinbjornt/Sloth
website: https://sveinbjorn.org/sloth
license: "BSD-3-Clause"
licenseUrl: https://github.com/sveinbjornt/Sloth/blob/master/LICENSE.txt
download: https://sveinbjorn.org/sloth
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/sveinbjornt/Sloth
  - https://github.com/sveinbjornt/Sloth/blob/master/LICENSE.txt
  - https://sveinbjorn.org/sloth
  - https://github.com/sveinbjornt/Sloth/releases
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/sveinbjornt/Sloth/master/assets/SlothIcon.iconset/icon_256x256.png
    credit: "Sveinbjorn Thordarson"
    license: "BSD-3-Clause; upstream app icon, trademarks retained"
---

Sloth puts a graphical front end on `lsof`. It lists open files, folders, IP and Unix sockets, pipes and devices for every process, and lets you filter by name, type, volume or regular expression, sort the results, and inspect details for any item.

It is handy for finding which app is holding a volume busy or which process owns a network connection, and can rescan with administrator rights. The project has been maintained since 2004; the current download lists macOS 11 or later, with older versions archived on the author's site.
