---
name: "RepoBar"
summary: "Keep GitHub issues, pull requests, CI status and releases for many repositories in a single menu bar menu."
category: "Developer tools"
tags:
  - github
  - menu-bar
  - monitoring
  - git
repository: "https://github.com/steipete/RepoBar"
website: "https://repobar.app/"
license: "MIT"
licenseUrl: "https://github.com/steipete/RepoBar/blob/main/LICENSE"
download: "https://github.com/steipete/RepoBar/releases/latest"
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - "https://github.com/steipete/RepoBar"
  - "https://github.com/steipete/RepoBar/blob/main/LICENSE"
  - "https://github.com/steipete/RepoBar/releases/latest"
  - "https://formulae.brew.sh/cask/repobar"
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/steipete/RepoBar/main/Icon.icns"
    credit: "Peter Steinberger"
    license: "MIT repository asset; app name and icon retained by Peter Steinberger"
---

RepoBar is a menu bar dashboard for people who maintain or watch many GitHub repositories. After signing in, its menu lists each chosen repository with open issue and pull request counts, CI state, recent releases and activity, and a submenu for drilling into issues, pull requests, workflow runs, branches, tags and commits.

Repositories can be pinned, hidden or filtered to those with active work, and RepoBar can also show the state of local checkouts. A companion command-line tool exposes the same data. The project requires macOS 15 or later and is distributed as a signed app archive on GitHub releases and through the official Homebrew cask.
