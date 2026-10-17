---
name: "InjectionIII"
summary: "Hot-reload edited source files into an app running in the simulator without a full rebuild and relaunch."
category: "Developer tools"
tags:
  - xcode
  - ios
  - development
repository: "https://github.com/johnno1962/InjectionIII"
website: "https://github.com/johnno1962/InjectionIII"
license: "MIT"
licenseUrl: "https://github.com/johnno1962/InjectionIII/blob/main/LICENSE"
download: "https://github.com/johnno1962/InjectionIII/releases"
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - "https://github.com/johnno1962/InjectionIII"
  - "https://github.com/johnno1962/InjectionIII/blob/main/LICENSE"
  - "https://github.com/johnno1962/InjectionIII/releases"
  - "https://apps.apple.com/app/injectioniii/id1380446739"
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/johnno1962/InjectionIII/main/InjectionIII/App.icns"
    credit: "John Holdsworth"
    license: "MIT repository asset; app name and icon retained by John Holdsworth"
---

InjectionIII brings code injection to Xcode projects. When you save a source file, it recompiles just that file into a dynamic library and loads it into the app already running in the simulator, so changed function and method implementations take effect without a full build and relaunch. That makes small interface and logic tweaks far quicker to iterate on.

It needs some project setup, and recent Xcode versions require an extra build setting so the app can find the compiler invocation it reuses. The app is available as unsandboxed binary releases on GitHub and as a sandboxed Mac App Store version with fewer capabilities. The author also maintains InjectionNext, a newer successor worth trying where InjectionIII falls short.
