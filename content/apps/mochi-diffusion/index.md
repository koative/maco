---
name: "Mochi Diffusion"
summary: "Generate images on your Mac, offline, with Core ML Stable Diffusion and FLUX.2 Klein models."
category: "AI"
tags:
  - image-generation
  - stable-diffusion
  - local-ai
  - offline
repository: https://github.com/MochiDiffusion/MochiDiffusion
website: https://github.com/MochiDiffusion/MochiDiffusion
license: "GPL-3.0"
licenseUrl: https://github.com/MochiDiffusion/MochiDiffusion/blob/main/LICENSE
download: https://github.com/MochiDiffusion/MochiDiffusion/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/MochiDiffusion/MochiDiffusion
  - https://github.com/MochiDiffusion/MochiDiffusion/blob/main/LICENSE
  - https://github.com/MochiDiffusion/MochiDiffusion/releases
  - https://formulae.brew.sh/cask/mochi-diffusion
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/MochiDiffusion/MochiDiffusion/main/Mochi%20Diffusion/Resources/Assets.xcassets/AppIcon.appiconset/AppIcon256.png
    credit: "Mochi Diffusion contributors"
    license: "GPL-3.0 (repository license); upstream project asset"
---

Mochi Diffusion is a SwiftUI app for local image generation. It runs Stable Diffusion models converted to Core ML through Apple's implementation, with a choice of compute units, and FLUX.2 Klein models through a Metal pipeline. Image-to-image and ControlNet are supported with suitable models, which you download or convert separately.

Generation happens entirely on the Mac without a network connection. Results land in a built-in gallery and are saved as PNGs carrying their generation settings in a form that other Stable Diffusion tools can read. Releases are distributed as DMGs on GitHub and through Homebrew.
