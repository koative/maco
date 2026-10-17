---
name: 'Chipmunk'
summary: 'A desktop log viewer built for very large files, live streams, filtering and automotive DLT and SOME/IP traces.'
category: 'Developer tools'
tags:
  - debugging
  - analysis
  - serial
  - cross-platform
repository: https://github.com/esrlabs/chipmunk
website: https://esrlabs.github.io/chipmunk/
license: 'Apache-2.0'
licenseUrl: https://github.com/esrlabs/chipmunk/blob/master/LICENSE.txt
download: https://github.com/esrlabs/chipmunk/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/esrlabs/chipmunk
  - https://github.com/esrlabs/chipmunk/blob/master/LICENSE.txt
  - https://github.com/esrlabs/chipmunk/releases
  - https://esrlabs.github.io/chipmunk/
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/esrlabs/chipmunk/master/crates/app/data/mac/chipmunk.icns
    credit: 'ESR Labs AG and chipmunk contributors'
    license: 'Apache-2.0 repository asset; chipmunk name and logo retained by ESR Labs'
---

Chipmunk opens log files of many gigabytes without loading them wholesale, then lets you build colour-coded filter sets, save them for later sessions, and chart values pulled out with regular expressions. Besides files it can collect from TCP, UDP, a serial port or the output of a command, updating searches and charts as new lines arrive.

It comes from ESR Labs and has particular support for automotive traces: DLT files, including embedded attachments, SOME/IP, and DLT carried inside pcap or pcapng captures. macOS packages for Intel and Apple silicon appear on the GitHub releases page; the 4.4.0 release shipped without them, so 4.3.0 from September 2026 was the newest macOS build at review.
