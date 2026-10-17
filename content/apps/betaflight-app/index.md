---
name: "Betaflight App"
summary: "Configuration and management app for flight controllers running Betaflight, for multirotor and fixed-wing aircraft."
category: "Utilities"
tags:
  - drones
  - flight-controller
  - cross-platform
repository: https://github.com/betaflight/betaflight-configurator
website: https://betaflight.com
license: "GPL-3.0"
licenseUrl: https://github.com/betaflight/betaflight-configurator/blob/master/LICENSE
download: https://github.com/betaflight/betaflight-configurator/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/betaflight/betaflight-configurator
  - https://github.com/betaflight/betaflight-configurator/blob/master/LICENSE
  - https://github.com/betaflight/betaflight-configurator/releases
  - https://app.betaflight.com
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/betaflight/betaflight-configurator/master/src/images/bf_icon.icns
    credit: "Betaflight contributors"
    license: "GPL-3.0 repository asset; Betaflight name and logo retained by the project"
---

Betaflight App, formerly Betaflight Configurator, is the companion tool for the Betaflight flight-control firmware. It connects to a flight controller to set up and manage the craft, and the project lists quadcopters, hexacopters, octocopters and fixed-wing aircraft among the supported types.

The project's main distribution is now a progressive web app at app.betaflight.com, but it still publishes standalone builds: GitHub releases carry macOS disk images for Apple Silicon and Intel, alongside Windows, Linux and Android packages. The README explains how to get past macOS reporting the app as damaged on first launch.
