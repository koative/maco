---
name: 'AppDuo'
summary: 'Clone a Mac app into separate copies, each with its own name, icon and data, to run two accounts side by side.'
category: 'Utilities'
tags:
  - app-management
  - profiles
repository: https://github.com/tamia6/AppDuo
website: https://tamia6.github.io/AppDuo/en/
license: 'GPL-3.0'
licenseUrl: https://github.com/tamia6/AppDuo/blob/main/LICENSE
download: https://github.com/tamia6/AppDuo/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/tamia6/AppDuo
  - https://github.com/tamia6/AppDuo/blob/main/LICENSE
  - https://github.com/tamia6/AppDuo/releases
  - https://tamia6.github.io/AppDuo/en/
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/tamia6/AppDuo/main/Sources/CloneCore/Resources/AppIcon.icns
    credit: 'tamia6 and AppDuo contributors'
    license: 'GPL-3.0 repository asset; project name and icon retained by the author'
---

AppDuo makes additional copies of an installed app, each with its own bundle name, icon and data, so that two or more instances can run at once and stay signed in to different accounts. The project's own example is running a second WeChat with a different icon and separate Dock badges and notifications. A "hard clone" mode also renames the process, which lets compatible proxy clients route each copy differently.

Cloning rewrites and re-signs app bundles, so it depends on the target app tolerating that. Releases are separate Apple silicon and Intel DMGs with ad-hoc signatures that are not notarized, and a Homebrew tap is offered; the README is primarily in Chinese with an English version.
