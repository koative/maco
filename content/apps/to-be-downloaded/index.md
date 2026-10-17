---
name: TBD (To Be Downloaded)
summary: 'A minimal front end for yt-dlp: paste a link, get the file, or send links from your phone over local Wi-Fi.'
category: Media
tags:
- downloads
- video
- yt-dlp
repository: https://github.com/eliorpom-cmd/to-be-downloaded
website: https://www.tbd.yt/
license: AGPL-3.0
licenseUrl: https://github.com/eliorpom-cmd/to-be-downloaded/blob/main/LICENSE
download: https://github.com/eliorpom-cmd/to-be-downloaded/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
- https://github.com/eliorpom-cmd/to-be-downloaded
- https://github.com/eliorpom-cmd/to-be-downloaded/blob/main/LICENSE
- https://github.com/eliorpom-cmd/to-be-downloaded/releases
assets:
- path: ./assets/icon.png
  source: https://raw.githubusercontent.com/eliorpom-cmd/to-be-downloaded/main/docs/assets/icon.png
  credit: TBD contributors
  license: AGPL-3.0 repository asset; no separate icon terms stated
---

TBD wraps the yt-dlp downloader in a single-field Mac window. It notices a video link on the clipboard, previews the title and thumbnail, and combines yt-dlp's separate video, audio and merge stages into one progress bar. Finished files land in Downloads and work with drag and drop and Quick Look.

An optional Remote Control mode serves a small web page on the local network so a phone can queue downloads on the Mac. FFmpeg is fetched separately rather than bundled. The README lists Apple silicon and macOS 13 or later as requirements.
