---
name: 'PHP Monitor'
summary: 'A menu bar app for switching PHP versions and managing a Homebrew and Laravel Valet development setup.'
category: 'Developer tools'
tags:
  - menu-bar
  - homebrew
  - development
repository: https://github.com/nicoverbruggen/phpmon
website: https://phpmon.app/
license: MIT
licenseUrl: https://github.com/nicoverbruggen/phpmon/blob/main/LICENSE
download: https://github.com/nicoverbruggen/phpmon/releases
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
sources:
  - https://github.com/nicoverbruggen/phpmon
  - https://github.com/nicoverbruggen/phpmon/blob/main/LICENSE
  - https://github.com/nicoverbruggen/phpmon/releases
  - https://phpmon.app/
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/nicoverbruggen/phpmon/main/assets/icon-2025.svg
    credit: 'Nico Verbruggen (PHP Monitor)'
    license: 'MIT repository asset; PHP Monitor name and icon retained by the project'
---

PHP Monitor shows the active PHP version in the menu bar and switches the system-wide version in a click, or per site through Laravel Valet's isolation. It installs and updates PHP versions and extensions through Homebrew, opens configuration files, restarts services, and manages Valet domains and links.

On first launch it can walk through installing the Command Line Tools, Homebrew, PHP, Composer and Valet, and a First Aid menu fixes common Homebrew and PHP breakage. It requires macOS 13.5 or later and an administrator account, and is downloaded from GitHub releases or installed with Homebrew.
