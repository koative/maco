---
name: "KubeContext"
summary: "Switch Kubernetes contexts from the menu bar and manage kubeconfig entries, namespaces and colours in a small window."
category: "Developer tools"
tags:
  - kubernetes
  - menu-bar
repository: https://github.com/turkenh/KubeContext
website: https://github.com/turkenh/KubeContext
license: "Apache-2.0"
licenseUrl: https://github.com/turkenh/KubeContext/blob/master/LICENSE
download: https://github.com/turkenh/KubeContext/releases/latest
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/turkenh/KubeContext
  - https://github.com/turkenh/KubeContext/blob/master/LICENSE
  - https://github.com/turkenh/KubeContext/releases/latest
  - https://formulae.brew.sh/cask/kubecontext
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/turkenh/KubeContext/master/KubeContext/Assets.xcassets/AppIcon.appiconset/icon_256@1x.png
    credit: "Hasan Turken"
    license: "Apache-2.0 repository asset; name and icon retained by Hasan Turken"
---

KubeContext puts the current Kubernetes context name in the menu bar and lets you switch to another one with a click instead of running `kubectl config use-context`. Its management window renames contexts, sets their default namespace, assigns colours, and imports or exports contexts from other kubeconfig files.

The latest release is 2.0.1 from late 2021. Builds from GitHub releases and the Homebrew cask include every feature for free, while the Mac App Store version sells some of them as in-app purchases.
