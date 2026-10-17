---
name: "TaskTick"
summary: "Schedule shell, Python and other scripts from a menu bar app, with logs and notifications instead of crontab."
category: "Utilities"
tags:
  - automation
  - scripting
  - menu-bar
repository: https://github.com/lifedever/TaskTick
website: https://www.lifedever.com/TaskTick/
license: "GPL-3.0"
licenseUrl: https://github.com/lifedever/TaskTick/blob/main/LICENSE
download: https://github.com/lifedever/TaskTick/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/lifedever/TaskTick
  - https://github.com/lifedever/TaskTick/blob/main/LICENSE
  - https://github.com/lifedever/TaskTick/releases
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/lifedever/TaskTick/main/Sources/Resources/AppIcon.icns
    credit: "lifedever"
    license: "GPL-3.0; upstream project asset, trademarks retained"
---

TaskTick is a graphical alternative to editing crontab or launchd files. Tasks run an inline script or a local file on a schedule set with date, time and repeat options, or with a cron expression for those who prefer one. Each run records its output, exit code and duration, and can post a notification on success or failure.

Built-in templates cover chores like backups and log cleanup, and existing crontab entries can be imported. The app lives in the menu bar, is available in English and Simplified Chinese, and ships separate Apple silicon and Intel DMGs on GitHub releases, as well as through the developer's Homebrew tap.
