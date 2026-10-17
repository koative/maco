---
name: "JET Pilot"
summary: "A desktop Kubernetes client for browsing clusters, inspecting workloads, reading logs and managing Helm charts."
category: "Developer tools"
tags:
  - kubernetes
  - containers
  - cross-platform
repository: "https://github.com/unxsist/jet-pilot"
website: "https://www.jet-pilot.app"
license: "MIT"
licenseUrl: "https://github.com/unxsist/jet-pilot/blob/main/LICENSE"
download: "https://github.com/unxsist/jet-pilot/releases/latest"
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - "https://github.com/unxsist/jet-pilot"
  - "https://github.com/unxsist/jet-pilot/blob/main/LICENSE"
  - "https://github.com/unxsist/jet-pilot/releases/latest"
  - "https://www.jet-pilot.app"
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/unxsist/jet-pilot/main/src-tauri/icons/icon.png"
    credit: "unxsist and JET Pilot contributors"
    license: "MIT repository asset; app name and icon retained by unxsist and JET Pilot contributors"
---

JET Pilot is a graphical Kubernetes client. It lets you browse and edit any object in a YAML editor, follow and filter logs across a workload's pods, open shells into containers, manage port forwards, and install, upgrade or roll back Helm charts, offering a point-and-click alternative to terminal tools such as k9s.

Clusters from every kubeconfig and supported cloud account appear in one hub, and the app relies on `kubectl` and `helm` for some tasks. The project publishes Apple silicon and Intel disk images on GitHub releases and its website, updates itself in place, and documents a Homebrew cask in its own tap.
