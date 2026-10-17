---
name: 'Reactotron'
summary: 'A desktop debugger for React and React Native apps that shows state, network requests, logs and performance.'
category: 'Developer tools'
tags:
  - inspection
  - http
  - cross-platform
repository: https://github.com/infinitered/reactotron
website: https://docs.infinite.red/reactotron/
license: MIT
licenseUrl: https://github.com/infinitered/reactotron/blob/master/LICENSE
download: https://github.com/infinitered/reactotron/releases?q=reactotron-app&expanded=true
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/infinitered/reactotron
  - https://github.com/infinitered/reactotron/blob/master/LICENSE
  - https://github.com/infinitered/reactotron/releases?q=reactotron-app&expanded=true
  - https://formulae.brew.sh/cask/reactotron
  - https://docs.infinite.red/reactotron/
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/infinitered/reactotron/master/apps/reactotron-app/icon.png
    credit: 'Infinite Red'
    license: 'MIT repository asset; Reactotron name and logo retained by Infinite Red'
---

Reactotron is a desktop companion for debugging React and React Native apps. After adding its client library to a project as a development dependency, the app shows application state, API requests and responses, log messages, errors with source-mapped stack traces, and quick benchmarks as the app runs.

It can dispatch actions, subscribe to parts of Redux or MobX-State-Tree state and swap it on the fly, inspect React Native AsyncStorage, and overlay images on a device. It is made by Infinite Red; macOS builds for Intel and Apple silicon are attached to the `reactotron-app` releases and packaged as the `reactotron` Homebrew cask.
