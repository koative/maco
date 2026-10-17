---
name: "Open Video Downloader"
summary: "A desktop front end for yt-dlp that downloads video, audio, subtitles and playlists from many sites."
category: "Media"
tags:
  - video
  - downloads
  - youtube
  - cross-platform
repository: https://github.com/jely2002/youtube-dl-gui
website: https://jely2002.github.io/youtube-dl-gui/
license: "AGPL-3.0"
licenseUrl: https://github.com/jely2002/youtube-dl-gui/blob/main/LICENSE
download: https://github.com/jely2002/youtube-dl-gui/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/jely2002/youtube-dl-gui
  - https://github.com/jely2002/youtube-dl-gui/blob/main/LICENSE
  - https://github.com/jely2002/youtube-dl-gui/releases
  - https://formulae.brew.sh/cask/open-video-downloader
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/jely2002/youtube-dl-gui/main/src-tauri/icons/icon.icns
    credit: "Jelle Glebbeek and Open Video Downloader contributors"
    license: "AGPL-3.0 repository asset; name and logo retained by the project"
---

Open Video Downloader, formerly youtube-dl-gui, wraps yt-dlp in a window where you paste links, pick quality, format and output naming, and queue the downloads. It can extract audio only, save captions and metadata, fetch whole playlists, and use cookie files or passwords for sites that need a login.

The current version is built with Tauri, Rust and Vue, and both the app and yt-dlp keep themselves up to date. macOS builds are on GitHub releases and in Homebrew as a cask.
