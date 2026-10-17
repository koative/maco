---
name: "cd to\u2026"
summary: "A Finder toolbar button that opens a Terminal window at the folder you are currently viewing."
category: "Utilities"
tags:
  - finder
  - terminal
  - shell
repository: "https://github.com/jbtule/cdto"
website: "https://github.com/jbtule/cdto"
license: "MIT"
licenseUrl: "https://github.com/jbtule/cdto/blob/master/LICENSE"
download: "https://github.com/jbtule/cdto/releases/latest"
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - "https://github.com/jbtule/cdto"
  - "https://github.com/jbtule/cdto/blob/master/LICENSE"
  - "https://github.com/jbtule/cdto/releases/latest"
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/jbtule/cdto/master/cd%20to%20.../cd%20to%20.../Assets.xcassets/AppIcon.appiconset/monterey512.png"
    credit: "Jay Tuley"
    license: "MIT repository asset; app name and icon retained by Jay Tuley"
---

cd to… is a tiny app meant to live in the Finder toolbar. Drag it there once, and clicking it opens a new Terminal window already changed to the directory of the frontmost Finder window; if an app package is selected it uses the containing folder. It works through Terminal's scripting interface, so it does not care which shell you use.

A couple of hidden preferences, set with `defaults write`, can close Terminal's automatically opened default window and choose the window profile. It is a long-standing utility with a deliberately small scope; the most recent release is version 3.1.3 from April 2022, published as a universal binary zip on GitHub releases.
