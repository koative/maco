# OpenStore

**Good software. Open by nature.** A considered collection of open-source macOS apps and clearly labeled source-available alternatives, maintained by [Koative](https://github.com/koative).

[Explore the catalog](https://koative.github.io/openstore/) · [Contribute an app](CONTRIBUTING.md) · [Research & inclusion policy](docs/RESEARCH.md)

![OpenStore dark catalog preview](docs/preview.png)

OpenStore brings app discovery, license evidence, screenshots, and official project links together. Every entry is a small, reviewable folder. The website and the catalog below come from the same Markdown source.

## One app, one folder

```text
content/apps/
  rectangle/
    index.md              # Metadata + original Markdown description
    assets/
      icon.png            # Official image with recorded provenance
      screenshot.png
```

YAML frontmatter describes the app: name, summary, category, tags, repository, official website, download page, source classification, reviewed license, license evidence, verification date, and asset attribution. The Markdown body explains what it does. Screenshots are optional; invented screenshots and unverified compatibility claims are not accepted.

This structure keeps assets beside the app, makes pull requests understandable, and avoids one giant JSON file becoming a merge-conflict bottleneck. Generated output is never the editing surface.

## Development

Requires Bun 1.4.3+. Bun installs dependencies, runs TypeScript, executes tests, and runs Astro in development and CI. The static site is served by GitHub Pages.

```sh
bun install --frozen-lockfile
bun run dev
bun run validate
bun run check
bun test
bun run build
bun run check:links
```

Open the `/openstore/` address printed by the dev server (normally `http://localhost:4321/openstore/`). `bun run sync` copies catalog assets for the site and refreshes the generated catalog below. CI checks the data, TypeScript, tests, and production build. Changes pushed to `main` deploy to GitHub Pages.

## Catalog principles

- **Licenses are explicit.** Paid open-source distributions can qualify. Apps with published source and additional restrictions are separately labeled **Source available**, explained on their detail pages, and filterable. Closed-source freeware is excluded.
- **Evidence travels with every entry.** Source repository, license file, official download, and a dated verification record are required.
- **Original projects get the credit.** Logos, screenshots, and trademarks belong to their respective owners; each included asset records its source and applicable rights.
- **A directory is a lead, not proof.** We research multiple lists and verify individual projects. See the [research notes](docs/RESEARCH.md).
- **No installer mirror.** Download links lead to official sources. Inclusion is not a security audit or an endorsement by Apple or the app authors.

## Browse the collection

<!-- catalog:start -->

172 macOS apps: **168 open source** and **4 source available**. Source-available apps have additional restrictions and are labeled separately. Generated from [content/apps](content/apps); edit the app folders to contribute.

### Productivity

| App | What it does | License |
| --- | --- | --- |
| [AeroSpace](https://koative.github.io/openstore/apps/aerospace/) · [Source](https://github.com/nikitabobko/AeroSpace) | Arrange windows into keyboard-driven tiles and fast-switching workspaces. | [MIT](https://github.com/nikitabobko/AeroSpace/blob/main/LICENSE.txt) |
| [AltTab](https://koative.github.io/openstore/apps/alttab/) · [Source](https://github.com/lwouis/alt-tab-macos) | Switch between individual windows with visual previews. | [GPL-3.0](https://github.com/lwouis/alt-tab-macos/blob/master/LICENCE.md) |
| [Amethyst](https://koative.github.io/openstore/apps/amethyst/) · [Source](https://github.com/ianyh/Amethyst) | Automatically tile windows and move between layouts with keyboard shortcuts. | [MIT](https://github.com/ianyh/Amethyst/blob/development/LICENSE.md) |
| [Anki](https://koative.github.io/openstore/apps/anki/) · [Source](https://github.com/ankitects/anki) | Study with customizable flashcards and review schedules based on spaced repetition. | [AGPL-3.0-or-later](https://github.com/ankitects/anki/blob/main/LICENSE) |
| [AppFlowy](https://koative.github.io/openstore/apps/appflowy/) · [Source](https://github.com/AppFlowy-IO/AppFlowy) | Arrange documents, tasks, and structured information in a customizable desktop workspace. | [AGPL-3.0](https://github.com/AppFlowy-IO/AppFlowy/blob/main/LICENSE) |
| [Calibre](https://koative.github.io/openstore/apps/calibre/) · [Source](https://github.com/kovidgoyal/calibre) | Organize ebooks, edit their metadata, convert formats, and transfer books to reading devices. | [GPL-3.0](https://github.com/kovidgoyal/calibre/blob/master/LICENSE) |
| [draw.io Desktop](https://koative.github.io/openstore/apps/drawio/) · [Source](https://github.com/jgraph/drawio-desktop) | Create flowcharts, architecture diagrams, and other visual documents in an offline desktop editor. | [GPL-3.0](https://github.com/jgraph/drawio-desktop/blob/dev/LICENSE) |
| [Element](https://koative.github.io/openstore/apps/element/) · [Source](https://github.com/element-hq/element-web) | A Matrix chat client for rooms, direct conversations, and community collaboration. | [AGPL-3.0](https://github.com/element-hq/element-web/blob/develop/LICENSE-AGPL-3.0) |
| [Flycut](https://koative.github.io/openstore/apps/flycut/) · [Source](https://github.com/TermiT/Flycut) | Keep a history of copied text and paste earlier items with a shortcut. | [MIT](https://github.com/TermiT/Flycut/blob/master/license.txt) |
| [Freeplane](https://koative.github.io/openstore/apps/freeplane/) · [Source](https://github.com/freeplane/freeplane) | Map ideas into branching diagrams with notes, links, and structured project information. | [GPL-2.0](https://github.com/freeplane/freeplane/blob/1.13.x/license.txt) |
| [GoldenDict-ng](https://koative.github.io/openstore/apps/goldendict-ng/) · [Source](https://github.com/xiaoyifang/goldendict-ng) | Search local dictionaries and reference sources from a single desktop lookup interface. | [GPL-3.0-or-later](https://github.com/xiaoyifang/goldendict-ng/blob/staged/LICENSE.txt) |
| [Hammerspoon](https://koative.github.io/openstore/apps/hammerspoon/) · [Source](https://github.com/Hammerspoon/hammerspoon) | Automate windows, shortcuts, and desktop behavior with Lua scripts. | [MIT](https://github.com/Hammerspoon/hammerspoon/blob/master/LICENSE) |
| [Itsycal](https://koative.github.io/openstore/apps/itsycal/) · [Source](https://github.com/sfsam/Itsycal) | A small calendar that is always one click away. | [MIT](https://github.com/sfsam/Itsycal/blob/master/LICENSE.txt) |
| [Keyboard Cowboy](https://koative.github.io/openstore/apps/keyboard-cowboy/) · [Source](https://github.com/zenangst/KeyboardCowboy) | Create keyboard workflows and context-sensitive automation for your Mac. | [MIT](https://github.com/zenangst/KeyboardCowboy/blob/main/LICENSE.md) |
| [KiCad](https://koative.github.io/openstore/apps/kicad/) · [Source](https://github.com/KiCad/kicad-source-mirror) | Design electronic schematics and circuit boards with integrated layout and inspection tools. | [GPL-3.0](https://github.com/KiCad/kicad-source-mirror/blob/master/LICENSE) |
| [Leader Key](https://koative.github.io/openstore/apps/leader-key/) · [Source](https://github.com/mikker/LeaderKey) | Launch apps and actions through nested, memorable key sequences. | [MIT](https://github.com/mikker/LeaderKey/blob/main/LICENSE) |
| [Loop](https://koative.github.io/openstore/apps/loop/) · [Source](https://github.com/mrkai77/Loop) | Arrange windows with a radial menu and configurable keyboard shortcuts. | [GPL-3.0](https://github.com/mrkai77/Loop/blob/develop/LICENSE) |
| [Maccy](https://koative.github.io/openstore/apps/maccy/) · [Source](https://github.com/p0deje/Maccy) | A quick, searchable clipboard history that stays close to your keyboard. | [MIT](https://github.com/p0deje/Maccy/blob/master/LICENSE) |
| [MeetingBar](https://koative.github.io/openstore/apps/meetingbar/) · [Source](https://github.com/leits/MeetingBar) | Keep upcoming meetings in the menu bar and join from their calendar links. | [Apache-2.0](https://github.com/leits/MeetingBar/blob/master/LICENSE) |
| [Min](https://koative.github.io/openstore/apps/min/) · [Source](https://github.com/minbrowser/min) | A compact browser that organizes tabs into tasks and keeps navigation simple. | [Apache-2.0](https://github.com/minbrowser/min/blob/master/LICENSE.txt) |
| [NetNewsWire](https://koative.github.io/openstore/apps/netnewswire/) · [Source](https://github.com/Ranchero-Software/NetNewsWire) | Follow the websites you care about in a calm RSS reader. | [MIT](https://github.com/Ranchero-Software/NetNewsWire/blob/main/LICENSE) |
| [ONLYOFFICE Desktop Editors](https://koative.github.io/openstore/apps/onlyoffice/) · [Source](https://github.com/ONLYOFFICE/DesktopEditors) | Edit documents, spreadsheets, and presentations in a desktop office suite. | [AGPL-3.0](https://github.com/ONLYOFFICE/DesktopEditors/blob/master/LICENSE) |
| [OpenBoard](https://koative.github.io/openstore/apps/openboard/) · [Source](https://github.com/OpenBoard-org/OpenBoard) | Teach and present on a digital whiteboard with drawing tools, documents, and multimedia. | [GPL-3.0](https://github.com/OpenBoard-org/OpenBoard/blob/master/LICENSE) |
| [Penc](https://koative.github.io/openstore/apps/penc/) · [Source](https://github.com/dgurkaynak/Penc) | Move, resize, and snap windows with trackpad gestures. | [MIT](https://github.com/dgurkaynak/Penc/blob/master/LICENSE) |
| [Quicksilver](https://koative.github.io/openstore/apps/quicksilver/) · [Source](https://github.com/quicksilver/Quicksilver) | Launch applications and perform actions through a keyboard-driven interface. | [Apache-2.0](https://github.com/quicksilver/Quicksilver/blob/main/LICENSE) |
| [Rectangle](https://koative.github.io/openstore/apps/rectangle/) · [Source](https://github.com/rxhanson/Rectangle) | Arrange your windows with keyboard shortcuts and simple edge snapping. | [MIT](https://github.com/rxhanson/Rectangle/blob/main/LICENSE) |
| [Reminders MenuBar](https://koative.github.io/openstore/apps/reminders-menubar/) · [Source](https://github.com/DamascenoRafael/reminders-menubar) | View, create, and complete Apple Reminders from the menu bar. | [GPL-3.0](https://github.com/DamascenoRafael/reminders-menubar/blob/master/LICENSE) |
| [SelfControl](https://koative.github.io/openstore/apps/selfcontrol/) · [Source](https://github.com/SelfControlApp/selfcontrol) | Block distracting websites for a fixed period that cannot be canceled early. | [GPL-3.0](https://github.com/SelfControlApp/selfcontrol/blob/master/COPYING) |
| [SwiftShift](https://koative.github.io/openstore/apps/swiftshift/) · [Source](https://github.com/pablopunk/SwiftShift) | Move and resize windows using configurable mouse and keyboard gestures. | [MIT](https://github.com/pablopunk/SwiftShift/blob/main/LICENSE) |
| [Telegram Desktop](https://koative.github.io/openstore/apps/telegram-desktop/) · [Source](https://github.com/telegramdesktop/tdesktop) | A desktop Telegram client for conversations, groups, channels, and file sharing. | [GPL-3.0](https://github.com/telegramdesktop/tdesktop/blob/dev/LICENSE) |
| [TomatoBar](https://koative.github.io/openstore/apps/tomatobar/) · [Source](https://github.com/ivoronin/TomatoBar) | Run configurable work and break intervals from the menu bar. | [MIT](https://github.com/ivoronin/TomatoBar/blob/main/LICENSE) |
| [Übersicht](https://koative.github.io/openstore/apps/uebersicht/) · [Source](https://github.com/felixhageloh/uebersicht) | Display customizable widgets directly on your desktop. | [GPL-3.0-or-later](https://github.com/felixhageloh/uebersicht/blob/master/LICENSE) |

### Developer tools

| App | What it does | License |
| --- | --- | --- |
| [Alacritty](https://koative.github.io/openstore/apps/alacritty/) · [Source](https://github.com/alacritty/alacritty) | A GPU-accelerated terminal focused on a small, configurable core. | [Apache-2.0](https://github.com/alacritty/alacritty/blob/master/LICENSE-APACHE) |
| [Beekeeper Studio Community](https://koative.github.io/openstore/apps/beekeeper-studio/) · [Source](https://github.com/beekeeper-studio/beekeeper-studio) | A SQL editor and database browser in the open-source Community edition. | [GPL-3.0-or-later](https://github.com/beekeeper-studio/beekeeper-studio/blob/master/LICENSE.md) |
| [Bruno](https://koative.github.io/openstore/apps/bruno/) · [Source](https://github.com/usebruno/bruno) | Keep API collections in your project, alongside your code. | [MIT](https://github.com/usebruno/bruno/blob/main/license.md) |
| [CodeEdit](https://koative.github.io/openstore/apps/codeedit/) · [Source](https://github.com/CodeEditApp/CodeEdit) | A community-built native Mac code editor with projects, terminal tools, and Git integration. | [MIT](https://github.com/CodeEditApp/CodeEdit/blob/main/LICENSE.md) |
| [Cyberduck](https://koative.github.io/openstore/apps/cyberduck/) · [Source](https://github.com/iterate-ch/cyberduck) | Browse remote servers and cloud storage from your desktop. | [GPL-3.0](https://github.com/iterate-ch/cyberduck/blob/master/LICENSE.txt) |
| [DB Browser for SQLite](https://koative.github.io/openstore/apps/db-browser-for-sqlite/) · [Source](https://github.com/sqlitebrowser/sqlitebrowser) | Browse SQLite files, edit tables, and run SQL through a desktop interface. | [MPL-2.0 OR GPL-3.0-or-later](https://github.com/sqlitebrowser/sqlitebrowser/blob/master/LICENSE) |
| [DBeaver Community](https://koative.github.io/openstore/apps/dbeaver/) · [Source](https://github.com/dbeaver/dbeaver) | A database workbench for browsing tables, writing SQL, and managing many database engines. | [Apache-2.0](https://github.com/dbeaver/dbeaver/blob/devel/LICENSE.md) |
| [DbGate](https://koative.github.io/openstore/apps/dbgate/) · [Source](https://github.com/dbgate/dbgate) | A database manager for querying SQL systems and exploring supported NoSQL stores. | [GPL-3.0](https://github.com/dbgate/dbgate/blob/master/LICENSE) |
| [DevToys](https://koative.github.io/openstore/apps/devtoys/) · [Source](https://github.com/DevToys-app/DevToys) | A desktop collection of formatters, converters, encoders, and text utilities. | [MIT](https://github.com/DevToys-app/DevToys/blob/main/LICENSE.md) |
| [Geany](https://koative.github.io/openstore/apps/geany/) · [Source](https://github.com/geany/geany) | A compact editor and IDE with syntax highlighting, project tools, and build commands. | [GPL-2.0](https://github.com/geany/geany/blob/master/COPYING) |
| [Ghostty](https://koative.github.io/openstore/apps/ghostty/) · [Source](https://github.com/ghostty-org/ghostty) | A fast terminal with native Mac windows, tabs, split panes, and extensive keyboard controls. | [MIT](https://github.com/ghostty-org/ghostty/blob/main/LICENSE) |
| [GitButler](https://koative.github.io/openstore/apps/gitbutler/) · [Source](https://github.com/gitbutlerapp/gitbutler) | A graphical Git workspace for organizing parallel changes and preparing commits. | [FSL-1.1-MIT](https://github.com/gitbutlerapp/gitbutler/blob/master/LICENSE.md) · **Source available** |
| [GitHub Desktop](https://koative.github.io/openstore/apps/github-desktop/) · [Source](https://github.com/desktop/desktop) | A desktop Git workflow for reviewing diffs, committing changes, and working with branches. | [MIT](https://github.com/desktop/desktop/blob/development/LICENSE) |
| [Gittyup](https://koative.github.io/openstore/apps/gittyup/) · [Source](https://github.com/Murmele/Gittyup) | A graphical Git client for reading history, inspecting changes, and preparing commits. | [MIT](https://github.com/Murmele/Gittyup/blob/master/LICENSE.md) |
| [GitUp](https://koative.github.io/openstore/apps/gitup/) · [Source](https://github.com/git-up/GitUp) | A Mac Git client built around an interactive history graph and reversible operations. | [GPL-3.0](https://github.com/git-up/GitUp/blob/master/LICENSE) |
| [Hoppscotch Desktop](https://koative.github.io/openstore/apps/hoppscotch/) · [Source](https://github.com/hoppscotch/hoppscotch) | The Hoppscotch API development workspace packaged as a desktop app. | [MIT](https://github.com/hoppscotch/hoppscotch/blob/main/LICENSE) |
| [Hyper](https://koative.github.io/openstore/apps/hyper/) · [Source](https://github.com/vercel/hyper) | A terminal built with web technologies and customized through themes and extensions. | [MIT](https://github.com/vercel/hyper/blob/canary/LICENSE) |
| [Insomnia](https://koative.github.io/openstore/apps/insomnia/) · [Source](https://github.com/Kong/insomnia) | Design and send API requests, inspect responses, and organize collections of endpoints. | [Apache-2.0](https://github.com/Kong/insomnia/blob/develop/LICENSE) |
| [iTerm2](https://koative.github.io/openstore/apps/iterm2/) · [Source](https://github.com/gnachman/iTerm2) | A Mac terminal with split panes, search, profiles, and deep shell integration. | [GPL-2.0](https://github.com/gnachman/iTerm2/blob/master/LICENSE) |
| [kitty](https://koative.github.io/openstore/apps/kitty/) · [Source](https://github.com/kovidgoyal/kitty) | A keyboard-driven terminal with GPU rendering, layouts, and extensible helper tools. | [GPL-3.0](https://github.com/kovidgoyal/kitty/blob/master/LICENSE) |
| [Lapce](https://koative.github.io/openstore/apps/lapce/) · [Source](https://github.com/lapce/lapce) | A code editor built around responsive editing, language tools, and a modern interface. | [Apache-2.0](https://github.com/lapce/lapce/blob/master/LICENSE) |
| [Lite XL](https://koative.github.io/openstore/apps/lite-xl/) · [Source](https://github.com/lite-xl/lite-xl) | A lightweight text editor extended with Lua plugins and a deliberately compact interface. | [MIT](https://github.com/lite-xl/lite-xl/blob/master/LICENSE) |
| [MacVim](https://koative.github.io/openstore/apps/macvim/) · [Source](https://github.com/macvim-dev/macvim) | Vim editing in a Mac desktop app with platform integration and graphical windows. | [Vim](https://github.com/macvim-dev/macvim/blob/master/LICENSE) |
| [Medis](https://koative.github.io/openstore/apps/medis/) · [Source](https://github.com/luin/medis) | A graphical Redis client for browsing keys and inspecting stored values. | [MIT](https://github.com/luin/medis/blob/master/LICENSE) |
| [pgAdmin 4](https://koative.github.io/openstore/apps/pgadmin/) · [Source](https://github.com/pgadmin-org/pgadmin4) | A PostgreSQL administration app with database navigation, query tools, and server management. | [PostgreSQL](https://github.com/pgadmin-org/pgadmin4/blob/master/LICENSE) |
| [Podman Desktop](https://koative.github.io/openstore/apps/podman-desktop/) · [Source](https://github.com/podman-desktop/podman-desktop) | Manage containers, images, and local development environments from a desktop app. | [Apache-2.0](https://github.com/podman-desktop/podman-desktop/blob/main/LICENSE) |
| [Pulsar](https://koative.github.io/openstore/apps/pulsar/) · [Source](https://github.com/pulsar-edit/pulsar) | A community-led text and code editor continuing the extensible Atom experience. | [MIT](https://github.com/pulsar-edit/pulsar/blob/master/LICENSE.md) |
| [Rancher Desktop](https://koative.github.io/openstore/apps/rancher-desktop/) · [Source](https://github.com/rancher-sandbox/rancher-desktop) | A local container and Kubernetes environment with desktop settings and management tools. | [Apache-2.0](https://github.com/rancher-sandbox/rancher-desktop/blob/main/LICENSE) |
| [Rio](https://koative.github.io/openstore/apps/rio/) · [Source](https://github.com/raphamorim/rio) | A hardware-accelerated terminal with configurable rendering and window layouts. | [MIT](https://github.com/raphamorim/rio/blob/main/LICENSE) |
| [Sequel Ace](https://koative.github.io/openstore/apps/sequel-ace/) · [Source](https://github.com/Sequel-Ace/Sequel-Ace) | Explore MySQL and MariaDB databases in a native Mac interface. | [MIT](https://github.com/Sequel-Ace/Sequel-Ace/blob/main/LICENSE) |
| [Tabby](https://koative.github.io/openstore/apps/tabby/) · [Source](https://github.com/Eugeny/tabby) | A terminal workspace for local shells, SSH connections, and serial devices. | [MIT](https://github.com/Eugeny/tabby/blob/master/LICENSE) |
| [TextMate](https://koative.github.io/openstore/apps/textmate/) · [Source](https://github.com/textmate/textmate) | A Mac text editor with language bundles, snippets, commands, and project navigation. | [GPL-3.0-or-later](https://github.com/textmate/textmate/blob/master/LICENSE) |
| [UTM](https://koative.github.io/openstore/apps/utm/) · [Source](https://github.com/utmapp/UTM) | Run virtual machines and emulate other systems through a Mac desktop interface. | [Apache-2.0](https://github.com/utmapp/UTM/blob/main/LICENSE) |
| [VSCodium](https://koative.github.io/openstore/apps/vscodium/) · [Source](https://github.com/VSCodium/vscodium) | Community builds of the VS Code source with a different default distribution setup. | [MIT](https://github.com/VSCodium/vscodium/blob/master/LICENSE) |
| [WezTerm](https://koative.github.io/openstore/apps/wezterm/) · [Source](https://github.com/wezterm/wezterm) | A configurable terminal and multiplexer with tabs, panes, and Lua-based settings. | [MIT](https://github.com/wezterm/wezterm/blob/main/LICENSE.md) |
| [Wireshark](https://koative.github.io/openstore/apps/wireshark/) · [Source](https://github.com/wireshark/wireshark) | Capture and inspect network traffic with protocol-aware views and powerful display filters. | [GPL-2.0](https://github.com/wireshark/wireshark/blob/master/COPYING) |
| [Yaak](https://koative.github.io/openstore/apps/yaak/) · [Source](https://github.com/mountain-loop/yaak) | A desktop API client for organizing requests and examining responses. | [MIT](https://github.com/mountain-loop/yaak/blob/main/LICENSE) |
| [Zed](https://koative.github.io/openstore/apps/zed/) · [Source](https://github.com/zed-industries/zed) | A fast code editor with project navigation, collaboration, and integrated development tools. | [GPL-3.0-or-later AND Apache-2.0](https://github.com/zed-industries/zed/blob/main/LICENSE-GPL) |

### Utilities

| App | What it does | License |
| --- | --- | --- |
| [Background Music](https://koative.github.io/openstore/apps/background-music/) · [Source](https://github.com/kyleneideck/BackgroundMusic) | Control application volumes and pause music when another app plays audio. | [GPL-2.0](https://github.com/kyleneideck/BackgroundMusic/blob/master/LICENSE) |
| [Bambu Studio](https://koative.github.io/openstore/apps/bambu-studio/) · [Source](https://github.com/bambulab/BambuStudio) | Slice 3D models and manage print projects with multi-plate and material-aware workflows. | [AGPL-3.0](https://github.com/bambulab/BambuStudio/blob/master/LICENSE) |
| [Dozer](https://koative.github.io/openstore/apps/dozer/) · [Source](https://github.com/Mortennn/Dozer) | Hide groups of menu bar icons until you need them. | [MPL-2.0](https://github.com/Mortennn/Dozer/blob/master/LICENSE) |
| [eul](https://koative.github.io/openstore/apps/eul/) · [Source](https://github.com/gao-sun/eul) | Monitor Mac resource usage and device information from the menu bar. | [MIT](https://github.com/gao-sun/eul/blob/master/LICENSE) |
| [Hidden Bar](https://koative.github.io/openstore/apps/hidden-bar/) · [Source](https://github.com/dwarvesf/hidden) | Hide the menu bar items you rarely need, with a single divider. | [MIT](https://github.com/dwarvesf/hidden/blob/develop/LICENSE) |
| [Hot](https://koative.github.io/openstore/apps/hot/) · [Source](https://github.com/macmade/Hot) | See CPU temperature and thermal pressure from the menu bar. | [MIT](https://github.com/macmade/Hot/blob/main/LICENSE) |
| [Ice](https://koative.github.io/openstore/apps/ice/) · [Source](https://github.com/jordanbaird/Ice) | Give your menu bar a little breathing room. | [GPL-3.0](https://github.com/jordanbaird/Ice/blob/main/LICENSE) |
| [Input Source Pro](https://koative.github.io/openstore/apps/input-source-pro/) · [Source](https://github.com/runjuu/InputSourcePro) | Switch keyboard input sources automatically for different apps and websites. | [GPL-3.0](https://github.com/runjuu/InputSourcePro/blob/main/LICENSE) |
| [Karabiner-Elements](https://koative.github.io/openstore/apps/karabiner-elements/) · [Source](https://github.com/pqrs-org/Karabiner-Elements) | Remap keys and build complex keyboard rules for macOS. | [Unlicense](https://github.com/pqrs-org/Karabiner-Elements/blob/main/LICENSE.md) |
| [KeepingYouAwake](https://koative.github.io/openstore/apps/keepingyouawake/) · [Source](https://github.com/newmarcel/KeepingYouAwake) | Keep your Mac awake for a chosen interval from the menu bar. | [MIT](https://github.com/newmarcel/KeepingYouAwake/blob/main/LICENSE) |
| [Latest](https://koative.github.io/openstore/apps/latest/) · [Source](https://github.com/mangerlahn/Latest) | See available updates for supported Mac apps in one place. | [GPL-3.0](https://github.com/mangerlahn/Latest/blob/main/LICENSE.md) |
| [LinearMouse](https://koative.github.io/openstore/apps/linearmouse/) · [Source](https://github.com/linearmouse/linearmouse) | Tune mouse and trackpad behavior with controls for scrolling and pointer movement. | [MIT](https://github.com/linearmouse/linearmouse/blob/main/LICENSE) |
| [LocalSend](https://koative.github.io/openstore/apps/localsend/) · [Source](https://github.com/localsend/localsend) | Send files between nearby devices without setting up a cloud account. | [Apache-2.0](https://github.com/localsend/localsend/blob/main/LICENSE) |
| [Lunar](https://koative.github.io/openstore/apps/lunar/) · [Source](https://github.com/alin23/Lunar) | Control external monitor brightness, volume, and input settings. | [MIT](https://github.com/alin23/Lunar/blob/master/LICENSE) |
| [Mac Mouse Fix](https://koative.github.io/openstore/apps/mac-mouse-fix/) · [Source](https://github.com/noah-nuebling/mac-mouse-fix) | Customize mouse buttons, scrolling, and gestures for everyday navigation on macOS. | [LicenseRef-Mac-Mouse-Fix](https://github.com/noah-nuebling/mac-mouse-fix/blob/master/License) · **Source available** |
| [MenuMeters](https://koative.github.io/openstore/apps/menumeters/) · [Source](https://github.com/yujitach/MenuMeters) | Show CPU, memory, disk, and network activity in the menu bar. | [GPL-2.0](https://github.com/yujitach/MenuMeters/blob/main/LICENSE) |
| [MiddleClick](https://koative.github.io/openstore/apps/middleclick/) · [Source](https://github.com/artginzburg/MiddleClick) | Add a middle-click gesture to a Mac trackpad or Magic Mouse. | [GPL-3.0](https://github.com/artginzburg/MiddleClick/blob/main/LICENSE) |
| [MonitorControl](https://koative.github.io/openstore/apps/monitorcontrol/) · [Source](https://github.com/MonitorControl/MonitorControl) | Adjust supported external displays using familiar Mac controls. | [MIT](https://github.com/MonitorControl/MonitorControl/blob/main/License.txt) |
| [Monolingual](https://koative.github.io/openstore/apps/monolingual/) · [Source](https://github.com/IngmarStein/Monolingual) | Remove language resources you do not need from installed software. | [GPL-3.0](https://github.com/IngmarStein/Monolingual/blob/main/LICENSE.txt) |
| [Mos](https://koative.github.io/openstore/apps/mos/) · [Source](https://github.com/Caldis/Mos) | Smooth mouse-wheel scrolling and set its direction independently. | [CC-BY-NC-4.0](https://github.com/Caldis/Mos/blob/master/LICENSE) · **Source available** |
| [Motrix](https://koative.github.io/openstore/apps/motrix/) · [Source](https://github.com/agalwood/Motrix) | A graphical download manager for HTTP, FTP, BitTorrent, and magnet links. | [MIT](https://github.com/agalwood/Motrix/blob/main/LICENSE) |
| [OnlySwitch](https://koative.github.io/openstore/apps/onlyswitch/) · [Source](https://github.com/jacklandrin/OnlySwitch) | Collect everyday macOS toggles and shortcuts into a configurable menu. | [MIT](https://github.com/jacklandrin/OnlySwitch/blob/main/LICENSE) |
| [OrcaSlicer](https://koative.github.io/openstore/apps/orcaslicer/) · [Source](https://github.com/OrcaSlicer/OrcaSlicer) | Prepare 3D prints with printer profiles, calibration tools, and detailed slicing controls. | [AGPL-3.0](https://github.com/OrcaSlicer/OrcaSlicer/blob/main/LICENSE.txt) |
| [Pearcleaner](https://koative.github.io/openstore/apps/pearcleaner/) · [Source](https://github.com/alienator88/Pearcleaner) | Inspect installed apps and their leftover files before removing them from your Mac. | [Apache-2.0 WITH Commons-Clause](https://github.com/alienator88/Pearcleaner/blob/main/LICENSE.md) · **Source available** |
| [PrusaSlicer](https://koative.github.io/openstore/apps/prusaslicer/) · [Source](https://github.com/prusa3d/PrusaSlicer) | Prepare 3D models for printing with supports, printer profiles, and detailed toolpath previews. | [AGPL-3.0](https://github.com/prusa3d/PrusaSlicer/blob/master/LICENSE) |
| [qBittorrent](https://koative.github.io/openstore/apps/qbittorrent/) · [Source](https://github.com/qbittorrent/qBittorrent) | A BitTorrent client with download queues, bandwidth controls, and torrent management. | [GPL-2.0-or-later](https://github.com/qbittorrent/qBittorrent/blob/master/COPYING) |
| [RustDesk](https://koative.github.io/openstore/apps/rustdesk/) · [Source](https://github.com/rustdesk/rustdesk) | A remote desktop application with an option to use your own connection infrastructure. | [AGPL-3.0](https://github.com/rustdesk/rustdesk/blob/master/LICENCE) |
| [Scroll Reverser](https://koative.github.io/openstore/apps/scroll-reverser/) · [Source](https://github.com/pilotmoon/Scroll-Reverser) | Choose scrolling direction separately for different input devices. | [Apache-2.0](https://github.com/pilotmoon/Scroll-Reverser/blob/master/LICENSE) |
| [SensibleSideButtons](https://koative.github.io/openstore/apps/sensible-side-buttons/) · [Source](https://github.com/archagon/sensible-side-buttons) | Use extra mouse buttons for back and forward navigation across macOS. | [GPL-2.0](https://github.com/archagon/sensible-side-buttons/blob/master/LICENSE) |
| [Shifty](https://koative.github.io/openstore/apps/shifty/) · [Source](https://github.com/thompsonate/Shifty) | Adjust Night Shift quickly and create app-specific exceptions. | [GPL-3.0](https://github.com/thompsonate/Shifty/blob/master/LICENSE) |
| [Stats](https://koative.github.io/openstore/apps/stats/) · [Source](https://github.com/exelban/stats) | Keep an eye on CPU, memory, network activity and more from your menu bar. | [MIT](https://github.com/exelban/stats/blob/master/LICENSE) |
| [SwiftBar](https://koative.github.io/openstore/apps/swiftbar/) · [Source](https://github.com/swiftbar/SwiftBar) | Build menu bar tools from scripts and a library of community plugins. | [MIT](https://github.com/swiftbar/SwiftBar/blob/main/LICENSE) |
| [Transmission](https://koative.github.io/openstore/apps/transmission/) · [Source](https://github.com/transmission/transmission) | A focused BitTorrent client with a native Mac interface. | [GPL-2.0-only OR GPL-3.0-only](https://github.com/transmission/transmission/blob/main/COPYING) |
| [UltiMaker Cura](https://koative.github.io/openstore/apps/ultimaker-cura/) · [Source](https://github.com/Ultimaker/Cura) | Convert 3D models into printer-ready toolpaths with profiles and adjustable slicing settings. | [LGPL-3.0](https://github.com/Ultimaker/Cura/blob/main/LICENSE) |
| [UnnaturalScrollWheels](https://koative.github.io/openstore/apps/unnatural-scroll-wheels/) · [Source](https://github.com/ther0n/UnnaturalScrollWheels) | Reverse a physical mouse wheel without changing natural trackpad scrolling. | [GPL-3.0](https://github.com/ther0n/UnnaturalScrollWheels/blob/main/LICENSE) |
| [xbar](https://koative.github.io/openstore/apps/xbar/) · [Source](https://github.com/matryer/xbar) | Put script output and custom controls in your macOS menu bar. | [MIT](https://github.com/matryer/xbar/blob/main/LICENSE.txt) |

### Media

| App | What it does | License |
| --- | --- | --- |
| [Audacity](https://koative.github.io/openstore/apps/audacity/) · [Source](https://github.com/audacity/audacity) | Record, trim, mix, and process audio in a multitrack desktop editor. | [GPL-3.0-only](https://github.com/audacity/audacity/blob/master/LICENSE.txt) |
| [Cap](https://koative.github.io/openstore/apps/cap/) · [Source](https://github.com/CapSoftware/Cap) | Record your screen and camera, edit a polished video, and share it from your own workflow. | [AGPL-3.0](https://github.com/CapSoftware/Cap/blob/main/LICENSE) |
| [Clementine](https://koative.github.io/openstore/apps/clementine/) · [Source](https://github.com/clementine-player/Clementine) | Browse a music library, manage playlists, and listen to local tracks or internet radio. | [GPL-3.0](https://github.com/clementine-player/Clementine/blob/master/COPYING) |
| [darktable](https://koative.github.io/openstore/apps/darktable/) · [Source](https://github.com/darktable-org/darktable) | Develop RAW photographs with a nondestructive editing pipeline and a searchable photo library. | [GPL-3.0](https://github.com/darktable-org/darktable/blob/master/LICENSE) |
| [digiKam](https://koative.github.io/openstore/apps/digikam/) · [Source](https://github.com/KDE/digikam) | Organize large photo collections with albums, tags, metadata editing, and image search. | [GPL-2.0](https://github.com/KDE/digikam/blob/master/COPYING) |
| [FreeCAD](https://koative.github.io/openstore/apps/freecad/) · [Source](https://github.com/FreeCAD/FreeCAD) | Build parametric 3D models with sketches, constraints, and specialized design workbenches. | [LGPL-2.1](https://github.com/FreeCAD/FreeCAD/blob/main/LICENSE) |
| [FreeTube](https://koative.github.io/openstore/apps/freetube/) · [Source](https://github.com/FreeTubeApp/FreeTube) | Watch YouTube through a desktop client with local subscriptions and viewing preferences. | [AGPL-3.0](https://github.com/FreeTubeApp/FreeTube/blob/development/LICENSE) |
| [Gifski](https://koative.github.io/openstore/apps/gifski/) · [Source](https://github.com/sindresorhus/Gifski) | Turn video clips into animated GIFs with controls for size, quality, and playback. | [MIT](https://github.com/sindresorhus/Gifski/blob/main/license) |
| [HandBrake](https://koative.github.io/openstore/apps/handbrake/) · [Source](https://github.com/HandBrake/HandBrake) | Convert video files with useful presets and detailed encoding controls. | [GPL-2.0-only](https://github.com/HandBrake/HandBrake/blob/master/LICENSE) |
| [Hydrogen](https://koative.github.io/openstore/apps/hydrogen/) · [Source](https://github.com/hydrogen-music/hydrogen) | Program drum patterns and arrange them into songs with a dedicated drum machine. | [GPL-2.0](https://github.com/hydrogen-music/hydrogen/blob/main/COPYING) |
| [IINA](https://koative.github.io/openstore/apps/iina/) · [Source](https://github.com/iina/iina) | A considered video player with the controls and shortcuts Mac users expect. | [GPL-3.0](https://github.com/iina/iina/blob/develop/LICENSE) |
| [ImageOptim](https://koative.github.io/openstore/apps/imageoptim/) · [Source](https://github.com/ImageOptim/ImageOptim) | Reduce image file sizes through a desktop interface for established optimizers. | [GPL-2.0-or-later](https://github.com/ImageOptim/ImageOptim/blob/main/LICENSE) |
| [Kap](https://koative.github.io/openstore/apps/kap/) · [Source](https://github.com/wulkano/Kap) | Capture a small moment on your screen and share it as a clip. | [MIT](https://github.com/wulkano/Kap/blob/main/LICENSE.md) |
| [Kdenlive](https://koative.github.io/openstore/apps/kdenlive/) · [Source](https://github.com/KDE/kdenlive) | Edit multitrack video with effects, transitions, proxy workflows, and flexible export options. | [GPL-3.0](https://github.com/KDE/kdenlive/blob/master/COPYING) |
| [Krita](https://koative.github.io/openstore/apps/krita/) · [Source](https://github.com/KDE/krita) | Paint illustrations, comics, and frame-by-frame animation with a flexible digital art workspace. | [GPL-3.0](https://github.com/KDE/krita/blob/master/COPYING) |
| [LMMS](https://koative.github.io/openstore/apps/lmms/) · [Source](https://github.com/LMMS/lmms) | Compose electronic music with a piano roll, instruments, patterns, and an effects mixer. | [GPL-2.0](https://github.com/LMMS/lmms/blob/master/LICENSE.txt) |
| [LosslessCut](https://koative.github.io/openstore/apps/losslesscut/) · [Source](https://github.com/mifi/lossless-cut) | Trim and rearrange video or audio segments without re-encoding supported media. | [GPL-2.0](https://github.com/mifi/lossless-cut/blob/master/LICENSE) |
| [Mixxx](https://koative.github.io/openstore/apps/mixxx/) · [Source](https://github.com/mixxxdj/mixxx) | Mix music with virtual decks, beat analysis, effects, and support for DJ controllers. | [GPL-2.0-or-later](https://github.com/mixxxdj/mixxx/blob/main/LICENSE) |
| [MuseScore Studio](https://koative.github.io/openstore/apps/musescore/) · [Source](https://github.com/musescore/MuseScore) | Compose, arrange, and print sheet music with a dedicated notation editor. | [GPL-3.0-only](https://github.com/musescore/MuseScore/blob/main/LICENSE.txt) |
| [MusicBrainz Picard](https://koative.github.io/openstore/apps/musicbrainz-picard/) · [Source](https://github.com/metabrainz/picard) | Match albums to MusicBrainz and clean up the tags in a local music collection. | [GPL-2.0](https://github.com/metabrainz/picard/blob/master/COPYING.txt) |
| [Natron](https://koative.github.io/openstore/apps/natron/) · [Source](https://github.com/NatronGitHub/Natron) | Build visual effects and image composites by connecting processing nodes. | [GPL-2.0](https://github.com/NatronGitHub/Natron/blob/RB-2.6/LICENSE.txt) |
| [Nuclear](https://koative.github.io/openstore/apps/nuclear/) · [Source](https://github.com/nukeop/nuclear) | Discover and play music through a desktop player that brings multiple online sources together. | [AGPL-3.0](https://github.com/nukeop/nuclear/blob/master/LICENSE) |
| [OBS Studio](https://koative.github.io/openstore/apps/obs-studio/) · [Source](https://github.com/obsproject/obs-studio) | Build scenes, record your screen and broadcast live. | [GPL-2.0](https://github.com/obsproject/obs-studio/blob/master/COPYING) |
| [OpenSCAD](https://koative.github.io/openstore/apps/openscad/) · [Source](https://github.com/openscad/openscad) | Design precise 3D objects by writing code that describes their geometry. | [GPL-2.0](https://github.com/openscad/openscad/blob/master/COPYING) |
| [OpenShot](https://koative.github.io/openstore/apps/openshot/) · [Source](https://github.com/OpenShot/openshot-qt) | Assemble clips, titles, transitions, and audio in an approachable timeline video editor. | [GPL-3.0](https://github.com/OpenShot/openshot-qt/blob/develop/COPYING) |
| [RawTherapee](https://koative.github.io/openstore/apps/rawtherapee/) · [Source](https://github.com/RawTherapee/RawTherapee) | Develop RAW files with detailed exposure, color, sharpening, and batch export controls. | [GPL-3.0](https://github.com/RawTherapee/RawTherapee/blob/dev/LICENSE) |
| [Shotcut](https://koative.github.io/openstore/apps/shotcut/) · [Source](https://github.com/mltframework/shotcut) | Edit videos with a multitrack timeline, filters, transitions, and flexible export settings. | [GPL-3.0](https://github.com/mltframework/shotcut/blob/master/COPYING) |
| [Sonic Visualiser](https://koative.github.io/openstore/apps/sonic-visualiser/) · [Source](https://github.com/sonic-visualiser/sonic-visualiser) | Inspect recordings with waveforms, spectrograms, annotations, and audio analysis layers. | [GPL-2.0](https://github.com/sonic-visualiser/sonic-visualiser/blob/default/COPYING) |
| [Subtitle Edit](https://koative.github.io/openstore/apps/subtitle-edit/) · [Source](https://github.com/SubtitleEdit/subtitleedit) | Create, synchronize, and revise subtitle files with video and waveform guidance. | [MIT](https://github.com/SubtitleEdit/subtitleedit/blob/main/LICENSE) |
| [SuperCollider](https://koative.github.io/openstore/apps/supercollider/) · [Source](https://github.com/supercollider/supercollider) | Create sounds and performances with an audio programming language, synthesis server, and IDE. | [GPL-3.0](https://github.com/supercollider/supercollider/blob/develop/COPYING) |
| [VLC](https://koative.github.io/openstore/apps/vlc/) · [Source](https://github.com/videolan/vlc) | A familiar media player for a wide range of files and streams. | [GPL-2.0](https://github.com/videolan/vlc/blob/master/COPYING) |

### Privacy & security

| App | What it does | License |
| --- | --- | --- |
| [Bitwarden](https://koative.github.io/openstore/apps/bitwarden/) · [Source](https://github.com/bitwarden/clients) | A desktop password vault with open-source builds and account synchronization. | [GPL-3.0](https://github.com/bitwarden/clients/blob/main/LICENSE.txt) |
| [BlockBlock](https://koative.github.io/openstore/apps/blockblock/) · [Source](https://github.com/objective-see/BlockBlock) | Receive alerts when software attempts to establish persistence. | [GPL-3.0](https://github.com/objective-see/BlockBlock/blob/master/LICENSE.md) |
| [Dylib Hijack Scanner](https://koative.github.io/openstore/apps/dylib-hijack-scanner/) · [Source](https://github.com/objective-see/DylibHijackScanner) | Scan for applications susceptible to dynamic-library hijacking. | [GPL-3.0](https://github.com/objective-see/DylibHijackScanner/blob/main/LICENSE) |
| [IVPN](https://koative.github.io/openstore/apps/ivpn/) · [Source](https://github.com/ivpn/desktop-app) | The open-source desktop client for connecting to the IVPN service. | [GPL-3.0](https://github.com/ivpn/desktop-app/blob/development/LICENSE.md) |
| [KeePassXC](https://koative.github.io/openstore/apps/keepassxc/) · [Source](https://github.com/keepassxreboot/keepassxc) | Manage passwords in an encrypted database you control. | [GPL-2.0-only OR GPL-3.0-only](https://github.com/keepassxreboot/keepassxc/blob/develop/COPYING) |
| [KnockKnock](https://koative.github.io/openstore/apps/knockknock/) · [Source](https://github.com/objective-see/KnockKnock) | Inspect software configured to persist on your Mac. | [GPL-3.0](https://github.com/objective-see/KnockKnock/blob/main/LICENSE) |
| [LuLu](https://koative.github.io/openstore/apps/lulu/) · [Source](https://github.com/objective-see/LuLu) | See and control which apps make outgoing network connections. | [GPL-3.0](https://github.com/objective-see/LuLu/blob/master/LICENSE.md) |
| [MacPass](https://koative.github.io/openstore/apps/macpass/) · [Source](https://github.com/MacPass/MacPass) | Manage KeePass-compatible password databases in a native Mac interface. | [GPL-3.0-or-later](https://github.com/MacPass/MacPass/blob/master/LICENSE.txt) |
| [Mullvad VPN](https://koative.github.io/openstore/apps/mullvad-vpn/) · [Source](https://github.com/mullvad/mullvadvpn-app) | The open-source Mac client for managing a Mullvad VPN connection. | [GPL-3.0](https://github.com/mullvad/mullvadvpn-app/blob/main/LICENSE.md) |
| [Netiquette](https://koative.github.io/openstore/apps/netiquette/) · [Source](https://github.com/objective-see/Netiquette) | Inspect network connections and the processes behind them. | [GPL-3.0](https://github.com/objective-see/Netiquette/blob/master/LICENSE.md) |
| [OverSight](https://koative.github.io/openstore/apps/oversight/) · [Source](https://github.com/objective-see/OverSight) | See alerts when processes use your Mac's microphone or camera. | [GPL-3.0](https://github.com/objective-see/OverSight/blob/main/LICENSE.md) |
| [Proton VPN](https://koative.github.io/openstore/apps/proton-vpn/) · [Source](https://github.com/ProtonVPN/ios-mac-app) | The open-source macOS client for connecting to Proton VPN. | [GPL-3.0](https://github.com/ProtonVPN/ios-mac-app/blob/develop/LICENSE) |
| [RansomWhere?](https://koative.github.io/openstore/apps/ransomwhere/) · [Source](https://github.com/objective-see/RansomWhere) | Watch for suspicious file encryption activity on your Mac. | [GPL-3.0](https://github.com/objective-see/RansomWhere/blob/main/LICENSE.md) |
| [ReiKey](https://koative.github.io/openstore/apps/reikey/) · [Source](https://github.com/objective-see/ReiKey) | Inspect keyboard event taps that can observe keystrokes. | [GPL-3.0](https://github.com/objective-see/ReiKey/blob/master/LICENSE.md) |
| [Signal Desktop](https://koative.github.io/openstore/apps/signal/) · [Source](https://github.com/signalapp/Signal-Desktop) | An encrypted messaging desktop app linked to your Signal account. | [AGPL-3.0](https://github.com/signalapp/Signal-Desktop/blob/main/LICENSE) |
| [SimpleX Chat](https://koative.github.io/openstore/apps/simplex-chat/) · [Source](https://github.com/simplex-chat/simplex-chat) | A messaging app that connects contacts without requiring a public user identifier. | [AGPL-3.0](https://github.com/simplex-chat/simplex-chat/blob/stable/LICENSE) |
| [TaskExplorer](https://koative.github.io/openstore/apps/taskexplorer/) · [Source](https://github.com/objective-see/TaskExplorer) | Explore running processes, signatures, loaded libraries, and network connections. | [GPL-3.0](https://github.com/objective-see/TaskExplorer/blob/main/LICENSE) |
| [Tunnelblick](https://koative.github.io/openstore/apps/tunnelblick/) · [Source](https://github.com/Tunnelblick/Tunnelblick) | A Mac interface for importing OpenVPN profiles and controlling VPN connections. | [GPL-2.0](https://github.com/Tunnelblick/Tunnelblick/blob/main/COPYING) |
| [WhatsYourSign](https://koative.github.io/openstore/apps/whatsyoursign/) · [Source](https://github.com/objective-see/WhatsYourSign) | Inspect a file's code-signing information from Finder. | [GPL-3.0](https://github.com/objective-see/WhatsYourSign/blob/master/License.md) |

### Writing

| App | What it does | License |
| --- | --- | --- |
| [CotEditor](https://koative.github.io/openstore/apps/coteditor/) · [Source](https://github.com/coteditor/CotEditor) | A focused native editor for plain text, scripts and everyday notes. | [Apache-2.0](https://github.com/coteditor/CotEditor/blob/main/LICENSE) |
| [FSNotes](https://koative.github.io/openstore/apps/fsnotes/) · [Source](https://github.com/glushchenko/fsnotes) | Keep searchable notes in plain-text files. | [MIT](https://github.com/glushchenko/fsnotes/blob/master/LICENSE) |
| [JabRef](https://koative.github.io/openstore/apps/jabref/) · [Source](https://github.com/JabRef/jabref) | Manage bibliography files, collect publication metadata, and organize research references. | [MIT](https://github.com/JabRef/jabref/blob/main/LICENSE) |
| [Joplin](https://koative.github.io/openstore/apps/joplin/) · [Source](https://github.com/laurent22/joplin) | Organize notes, to-do lists, and attachments in notebooks with optional synchronization. | [AGPL-3.0-or-later](https://github.com/laurent22/joplin/blob/dev/LICENSE) |
| [Logseq](https://koative.github.io/openstore/apps/logseq/) · [Source](https://github.com/logseq/logseq) | Connect daily notes and ideas through an outliner with backlinks and linked references. | [AGPL-3.0](https://github.com/logseq/logseq/blob/master/LICENSE.md) |
| [MarkEdit](https://koative.github.io/openstore/apps/markedit/) · [Source](https://github.com/MarkEdit-app/MarkEdit) | A clean Mac workspace for writing Markdown. | [MIT](https://github.com/MarkEdit-app/MarkEdit/blob/main/LICENSE) |
| [MarkText](https://koative.github.io/openstore/apps/marktext/) · [Source](https://github.com/marktext/marktext) | Edit Markdown with a live rendered view, tables, code blocks, and a focused writing workspace. | [MIT](https://github.com/marktext/marktext/blob/develop/LICENSE) |
| [Notesnook](https://koative.github.io/openstore/apps/notesnook/) · [Source](https://github.com/streetwriters/notesnook) | Keep notes and notebooks in a writing app built around encrypted synchronization. | [GPL-3.0](https://github.com/streetwriters/notesnook/blob/master/LICENSE) |
| [QOwnNotes](https://koative.github.io/openstore/apps/qownnotes/) · [Source](https://github.com/pbek/QOwnNotes) | Manage plain-text Markdown notes with search, scripting, and optional Nextcloud integration. | [GPL-2.0](https://github.com/pbek/QOwnNotes/blob/main/LICENSE) |
| [SiYuan](https://koative.github.io/openstore/apps/siyuan/) · [Source](https://github.com/siyuan-note/siyuan) | Organize notes with block references, document trees, and a locally stored workspace. | [AGPL-3.0](https://github.com/siyuan-note/siyuan/blob/master/LICENSE) |
| [Standard Notes](https://koative.github.io/openstore/apps/standard-notes/) · [Source](https://github.com/standardnotes/app) | Write and organize notes with encrypted synchronization across desktop and mobile clients. | [AGPL-3.0](https://github.com/standardnotes/app/blob/main/LICENSE) |
| [Trilium Notes](https://koative.github.io/openstore/apps/trilium-notes/) · [Source](https://github.com/TriliumNext/Trilium) | Build a hierarchical personal knowledge base with rich notes, links, and attachments. | [AGPL-3.0](https://github.com/TriliumNext/Trilium/blob/main/LICENSE) |
| [VNote](https://koative.github.io/openstore/apps/vnote/) · [Source](https://github.com/vnotex/vnote) | Organize Markdown notebooks in a keyboard-friendly editor with navigation and preview tools. | [LGPL-3.0](https://github.com/vnotex/vnote/blob/master/COPYING.LESSER) |
| [Xournal++](https://koative.github.io/openstore/apps/xournalpp/) · [Source](https://github.com/xournalpp/xournalpp) | Take handwritten notes, sketch diagrams, and annotate PDF documents with pen-based tools. | [GPL-2.0](https://github.com/xournalpp/xournalpp/blob/master/LICENSE) |
| [Zettlr](https://koative.github.io/openstore/apps/zettlr/) · [Source](https://github.com/Zettlr/Zettlr) | Write Markdown documents with project organization, references, and research-oriented tools. | [GPL-3.0](https://github.com/Zettlr/Zettlr/blob/develop/LICENSE) |
| [Zotero](https://koative.github.io/openstore/apps/zotero/) · [Source](https://github.com/zotero/zotero) | Collect research sources, annotate documents, and generate citations and bibliographies. | [AGPL-3.0-only](https://github.com/zotero/zotero/blob/main/COPYING) |

<!-- catalog:end -->

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for the complete entry format, image policy, and checks. Small improvements to descriptions, broken links, screenshots, and license evidence are welcome.

## Credits and licensing

Built with [Astro](https://astro.build/) and [Lucide](https://lucide.dev/). Bundled font and icon licenses are preserved in [third-party notices](public/third-party-notices.txt). Discovery sources include [mac-apps](https://github.com/jeffreyjackson/mac-apps), [open-source-mac-os-apps](https://github.com/serhii-londar/open-source-mac-os-apps), and [awesome-mac](https://github.com/jaywcjlove/awesome-mac); the full comparison is in [our research](docs/RESEARCH.md).

OpenStore's original code and text are MIT licensed. Third-party application code, logos, screenshots, fonts, and other assets retain their own licenses and trademark rights. App code licenses are listed for discovery and do not automatically license every visual asset.
