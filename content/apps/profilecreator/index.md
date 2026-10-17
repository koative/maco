---
name: "ProfileCreator"
summary: "A graphical editor for building standard or customized macOS configuration profiles."
category: "Utilities"
tags:
  - configuration-profiles
  - mdm
  - system-administration
repository: https://github.com/ProfileCreator/ProfileCreator
website: https://github.com/ProfileCreator/ProfileCreator
license: "MIT"
licenseUrl: https://github.com/ProfileCreator/ProfileCreator/blob/master/LICENSE
download: https://github.com/ProfileCreator/ProfileCreator/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/ProfileCreator/ProfileCreator
  - https://github.com/ProfileCreator/ProfileCreator/blob/master/LICENSE
  - https://github.com/ProfileCreator/ProfileCreator/releases
  - https://formulae.brew.sh/cask/profilecreator
  - https://github.com/ProfileManifests/ProfileManifests
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/ProfileCreator/ProfileCreator/master/ProfileCreator/ProfileCreator/Core/Assets.xcassets/AppIcon.appiconset/256.png
    credit: "ProfileCreator contributors"
    license: "MIT repository asset; trademarks retained"
---

ProfileCreator builds `.mobileconfig` configuration profiles, the files Mac administrators deploy through device management or install by hand to apply settings and restrictions. Instead of hand-editing property lists, you pick payloads and fill in their settings in the app, which can produce standard or customized profiles.

The available payloads come from manifests maintained in the separate ProfileManifests project, which is where new settings are contributed. The app requires macOS 11 or later; releases are still numbered 0.x, with 0.3.7 published in December 2024 on GitHub and as a Homebrew cask.
