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

Requires Node.js 22.22+ and npm.

```sh
npm ci
npm run dev
npm run validate
npm run check
npm test
npm run build
npm run check:links
```

Open the `/openstore/` address printed by the dev server (normally `http://localhost:4321/openstore/`). `npm run sync` copies catalog assets for the site and refreshes the generated catalog below. CI checks the data, TypeScript, tests, and production build. Changes pushed to `main` deploy to GitHub Pages.

## Catalog principles

- **Licenses are explicit.** Paid open-source distributions can qualify. Apps with published source and additional restrictions are separately labeled **Source available**, explained on their detail pages, and filterable. Closed-source freeware is excluded.
- **Evidence travels with every entry.** Source repository, license file, official download, and a dated verification record are required.
- **Original projects get the credit.** Logos, screenshots, and trademarks belong to their respective owners; each included asset records its source and applicable rights.
- **A directory is a lead, not proof.** We research multiple lists and verify individual projects. See the [research notes](docs/RESEARCH.md).
- **No installer mirror.** Download links lead to official sources. Inclusion is not a security audit or an endorsement by Apple or the app authors.

## Browse the collection

<!-- catalog:start -->

27 macOS apps: **25 open source** and **2 source available**. Source-available apps have additional restrictions and are labeled separately. Generated from [content/apps](content/apps); edit the app folders to contribute.

### Productivity

| App | What it does | License |
| --- | --- | --- |
| [AltTab](https://koative.github.io/openstore/apps/alttab/) · [Source](https://github.com/lwouis/alt-tab-macos) | Switch between individual windows with visual previews. | [GPL-3.0](https://github.com/lwouis/alt-tab-macos/blob/master/LICENCE.md) |
| [Itsycal](https://koative.github.io/openstore/apps/itsycal/) · [Source](https://github.com/sfsam/Itsycal) | A small calendar that is always one click away. | [MIT](https://github.com/sfsam/Itsycal/blob/master/LICENSE.txt) |
| [Maccy](https://koative.github.io/openstore/apps/maccy/) · [Source](https://github.com/p0deje/Maccy) | A quick, searchable clipboard history that stays close to your keyboard. | [MIT](https://github.com/p0deje/Maccy/blob/master/LICENSE) |
| [NetNewsWire](https://koative.github.io/openstore/apps/netnewswire/) · [Source](https://github.com/Ranchero-Software/NetNewsWire) | Follow the websites you care about in a calm RSS reader. | [MIT](https://github.com/Ranchero-Software/NetNewsWire/blob/main/LICENSE) |
| [Rectangle](https://koative.github.io/openstore/apps/rectangle/) · [Source](https://github.com/rxhanson/Rectangle) | Arrange your windows with keyboard shortcuts and simple edge snapping. | [MIT](https://github.com/rxhanson/Rectangle/blob/main/LICENSE) |

### Developer tools

| App | What it does | License |
| --- | --- | --- |
| [Bruno](https://koative.github.io/openstore/apps/bruno/) · [Source](https://github.com/usebruno/bruno) | Keep API collections in your project, alongside your code. | [MIT](https://github.com/usebruno/bruno/blob/main/license.md) |
| [Cyberduck](https://koative.github.io/openstore/apps/cyberduck/) · [Source](https://github.com/iterate-ch/cyberduck) | Browse remote servers and cloud storage from your desktop. | [GPL-3.0](https://github.com/iterate-ch/cyberduck/blob/master/LICENSE.txt) |
| [Sequel Ace](https://koative.github.io/openstore/apps/sequel-ace/) · [Source](https://github.com/Sequel-Ace/Sequel-Ace) | Explore MySQL and MariaDB databases in a native Mac interface. | [MIT](https://github.com/Sequel-Ace/Sequel-Ace/blob/main/LICENSE) |

### Utilities

| App | What it does | License |
| --- | --- | --- |
| [Hidden Bar](https://koative.github.io/openstore/apps/hidden-bar/) · [Source](https://github.com/dwarvesf/hidden) | Hide the menu bar items you rarely need, with a single divider. | [MIT](https://github.com/dwarvesf/hidden/blob/develop/LICENSE) |
| [Ice](https://koative.github.io/openstore/apps/ice/) · [Source](https://github.com/jordanbaird/Ice) | Give your menu bar a little breathing room. | [GPL-3.0](https://github.com/jordanbaird/Ice/blob/main/LICENSE) |
| [LocalSend](https://koative.github.io/openstore/apps/localsend/) · [Source](https://github.com/localsend/localsend) | Send files between nearby devices without setting up a cloud account. | [Apache-2.0](https://github.com/localsend/localsend/blob/main/LICENSE) |
| [Mac Mouse Fix](https://koative.github.io/openstore/apps/mac-mouse-fix/) · [Source](https://github.com/noah-nuebling/mac-mouse-fix) | Customize mouse buttons, scrolling, and gestures for everyday navigation on macOS. | [LicenseRef-Mac-Mouse-Fix](https://github.com/noah-nuebling/mac-mouse-fix/blob/master/License) · **Source available** |
| [MonitorControl](https://koative.github.io/openstore/apps/monitorcontrol/) · [Source](https://github.com/MonitorControl/MonitorControl) | Adjust supported external displays using familiar Mac controls. | [MIT](https://github.com/MonitorControl/MonitorControl/blob/main/License.txt) |
| [Pearcleaner](https://koative.github.io/openstore/apps/pearcleaner/) · [Source](https://github.com/alienator88/Pearcleaner) | Inspect installed apps and their leftover files before removing them from your Mac. | [Apache-2.0 WITH Commons-Clause](https://github.com/alienator88/Pearcleaner/blob/main/LICENSE.md) · **Source available** |
| [Stats](https://koative.github.io/openstore/apps/stats/) · [Source](https://github.com/exelban/stats) | Keep an eye on CPU, memory, network activity and more from your menu bar. | [MIT](https://github.com/exelban/stats/blob/master/LICENSE) |
| [Transmission](https://koative.github.io/openstore/apps/transmission/) · [Source](https://github.com/transmission/transmission) | A focused BitTorrent client with a native Mac interface. | [GPL-2.0-only OR GPL-3.0-only](https://github.com/transmission/transmission/blob/main/COPYING) |

### Media

| App | What it does | License |
| --- | --- | --- |
| [Cap](https://koative.github.io/openstore/apps/cap/) · [Source](https://github.com/CapSoftware/Cap) | Record your screen and camera, edit a polished video, and share it from your own workflow. | [AGPL-3.0](https://github.com/CapSoftware/Cap/blob/main/LICENSE) |
| [HandBrake](https://koative.github.io/openstore/apps/handbrake/) · [Source](https://github.com/HandBrake/HandBrake) | Convert video files with useful presets and detailed encoding controls. | [GPL-2.0-only](https://github.com/HandBrake/HandBrake/blob/master/LICENSE) |
| [IINA](https://koative.github.io/openstore/apps/iina/) · [Source](https://github.com/iina/iina) | A considered video player with the controls and shortcuts Mac users expect. | [GPL-3.0](https://github.com/iina/iina/blob/develop/LICENSE) |
| [Kap](https://koative.github.io/openstore/apps/kap/) · [Source](https://github.com/wulkano/Kap) | Capture a small moment on your screen and share it as a clip. | [MIT](https://github.com/wulkano/Kap/blob/main/LICENSE.md) |
| [OBS Studio](https://koative.github.io/openstore/apps/obs-studio/) · [Source](https://github.com/obsproject/obs-studio) | Build scenes, record your screen and broadcast live. | [GPL-2.0](https://github.com/obsproject/obs-studio/blob/master/COPYING) |
| [VLC](https://koative.github.io/openstore/apps/vlc/) · [Source](https://github.com/videolan/vlc) | A familiar media player for a wide range of files and streams. | [GPL-2.0](https://github.com/videolan/vlc/blob/master/COPYING) |

### Privacy & security

| App | What it does | License |
| --- | --- | --- |
| [KeePassXC](https://koative.github.io/openstore/apps/keepassxc/) · [Source](https://github.com/keepassxreboot/keepassxc) | Manage passwords in an encrypted database you control. | [GPL-2.0-only OR GPL-3.0-only](https://github.com/keepassxreboot/keepassxc/blob/develop/COPYING) |
| [LuLu](https://koative.github.io/openstore/apps/lulu/) · [Source](https://github.com/objective-see/LuLu) | See and control which apps make outgoing network connections. | [GPL-3.0](https://github.com/objective-see/LuLu/blob/master/LICENSE.md) |

### Writing

| App | What it does | License |
| --- | --- | --- |
| [CotEditor](https://koative.github.io/openstore/apps/coteditor/) · [Source](https://github.com/coteditor/CotEditor) | A focused native editor for plain text, scripts and everyday notes. | [Apache-2.0](https://github.com/coteditor/CotEditor/blob/main/LICENSE) |
| [FSNotes](https://koative.github.io/openstore/apps/fsnotes/) · [Source](https://github.com/glushchenko/fsnotes) | Keep searchable notes in plain-text files. | [MIT](https://github.com/glushchenko/fsnotes/blob/master/LICENSE) |
| [MarkEdit](https://koative.github.io/openstore/apps/markedit/) · [Source](https://github.com/MarkEdit-app/MarkEdit) | A clean Mac workspace for writing Markdown. | [MIT](https://github.com/MarkEdit-app/MarkEdit/blob/main/LICENSE) |

<!-- catalog:end -->

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for the complete entry format, image policy, and checks. Small improvements to descriptions, broken links, screenshots, and license evidence are welcome.

## Credits and licensing

Built with [Astro](https://astro.build/) and [Lucide](https://lucide.dev/). Bundled font and icon licenses are preserved in [third-party notices](public/third-party-notices.txt). Discovery sources include [mac-apps](https://github.com/jeffreyjackson/mac-apps), [open-source-mac-os-apps](https://github.com/serhii-londar/open-source-mac-os-apps), and [awesome-mac](https://github.com/jaywcjlove/awesome-mac); the full comparison is in [our research](docs/RESEARCH.md).

OpenStore's original code and text are MIT licensed. Third-party application code, logos, screenshots, fonts, and other assets retain their own licenses and trademark rights. App code licenses are listed for discovery and do not automatically license every visual asset.
