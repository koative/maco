---
name: "Santa"
summary: "A binary and file access authorization system for macOS that can monitor or block executables by signature or path."
category: "Privacy & security"
tags:
  - security
  - monitoring
  - code-signing
repository: "https://github.com/northpolesec/santa"
website: "https://northpole.dev"
license: "Apache-2.0"
licenseUrl: "https://github.com/northpolesec/santa/blob/main/LICENSE"
download: "https://github.com/northpolesec/santa/releases"
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - "https://github.com/northpolesec/santa"
  - "https://github.com/northpolesec/santa/blob/main/LICENSE"
  - "https://github.com/northpolesec/santa/releases"
  - "https://github.com/google/santa"
  - "https://northpole.dev"
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/northpolesec/santa/main/Source/gui/Resources/Assets.xcassets/AppIcon.appiconset/santa-icon_256x256.png"
    credit: "North Pole Security and Santa contributors"
    license: "Apache-2.0; upstream app icon, trademarks retained"
---

Santa uses a system extension to log program launches and decide whether they may run. In monitor mode everything not explicitly blocked runs and is recorded; in lockdown mode only allowed binaries run. Rules can target code signatures (team, signing ID, certificate or CDHash) or paths, and a GUI agent tells users when something is blocked.

It is aimed mainly at managed fleets, with configuration that can sync from a server. Google archived its original repository in 2025 and pointed users to this actively maintained North Pole Security fork.
