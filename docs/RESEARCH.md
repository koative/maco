# Maco research and inclusion policy

Research date: **2026-10-17**. This is a dated editorial assessment, not a live status feed.

## What we researched

We compared ten GitHub collections, starting with the original directory, then checked
candidate applications against their own repositories, license files, and websites.
Directory popularity helps discovery; it does not prove licensing, compatibility, or quality.
Counts below describe what the source README reported on the research date.

| Directory | Useful contribution | Limitation | Directory license evidence |
| --- | --- | --- | --- |
| [jeffreyjackson/mac-apps](https://github.com/jeffreyjackson/mac-apps) | Original seed; broad history of Mac applications | Contains legacy entries including Atom and Spectacle; review each upstream | No license detected by GitHub metadata |
| [serhii-londar/open-source-mac-os-apps](https://github.com/serhii-londar/open-source-mac-os-apps) | Main discovery source; README reports 812 apps across 49 categories | Inclusion is a lead, not independent verification | CC0-1.0 |
| [jaywcjlove/awesome-mac](https://github.com/jaywcjlove/awesome-mac) | Broad category coverage and a large discovery pool | Mixes proprietary, paid, free, and open-source software | CC0-1.0 |
| [iCHAIT/awesome-macOS](https://github.com/iCHAIT/awesome-macOS) | Useful secondary source with open-source markers | Mixed software list; markers still require upstream checks | No license detected by GitHub metadata |
| [abordage/awesome-mac](https://github.com/abordage/awesome-mac) | README reports 296 repositories and daily metadata updates | Automated activity ranking does not establish open-source eligibility | MIT |
| [AndrewSB/awesome-macOS](https://github.com/AndrewSB/awesome-macOS) | Native Mac projects and smaller discoveries | Mixes libraries and applications; many historical entries | Public-domain waiver in README; metadata has no license |
| [Awesome-llms-labs/awesome-oss-macos](https://github.com/Awesome-llms-labs/awesome-oss-macos) | 121 entries and machine-readable JSON; useful schema reference | Its verification claims are secondary evidence and need checking | MIT |
| [open-saas-directory/awesome-native-macosx-apps](https://github.com/open-saas-directory/awesome-native-macosx-apps) | Native Mac utility discovery, including Loop and small menu-bar apps | Mixes closed and open source; Pearcleaner classification and destination need independent correction | MIT |
| [KiarashS/awesome-macOS-applications](https://github.com/KiarashS/awesome-macOS-applications) | README reports 308 apps across 26 categories; includes Loop, Cap and Pearcleaner together | Generated from a personal star list; source availability and macOS support still need review | MIT, read from LICENSE despite metadata NOASSERTION |
| [guyzyl/awesome-macos-apps](https://github.com/guyzyl/awesome-macos-apps) | Practical everyday-use selection and installation pointers | Includes extensions, fonts, CLI tools and proprietary apps outside our scope | CC0-1.0 in GitHub metadata |

Use these lists to discover projects and credit their role. Write original descriptions.
Do not copy a directory's prose or assume its license covers the applications it links to.

## Inclusion policy

An app can enter the published catalog when an editor can establish all of the following:

1. The canonical upstream repository contains the application's source.
2. An identifiable reviewed license covers that source. Open-source licenses and restricted
   source-available licenses are classified separately; missing licenses do not qualify.
3. An official website, README, or release provides evidence of macOS support.
4. Its purpose fits an end-user Mac application or a clearly described Mac utility.
5. Its description, category, and tags are accurate and written for this catalog.
6. Repository, website, installation, and license links resolve to the intended project.
7. Any included assets have their own provenance and applicable attribution recorded.

Record the verification date and a direct license link. Prefer a commit permalink when
preserving evidence of a specific license decision. A missing or ambiguous license means
the candidate needs review; it does not mean public-domain software.

The [Open Source Definition](https://opensource.org/osd) is the scope reference.
Free of charge, publicly visible source, and open source are separate properties.
Paid distribution does not by itself disqualify an app with an eligible source license.

## Findings that change catalog decisions

### Source-available listings: a distinct classification

| Project | Primary evidence | Decision |
| --- | --- | --- |
| Mac Mouse Fix | [MMF License](https://github.com/noah-nuebling/mac-mouse-fix/blob/master/License) restricts charging for some redistributed programs and requires preserving monetization systems unless stated exceptions apply | Include as source available with restriction notes; LinearMouse is an MIT alternative |
| Pearcleaner | [LICENSE.md](https://github.com/alienator88/Pearcleaner/blob/main/LICENSE.md) explicitly combines Apache 2.0 with Commons Clause and limits selling the software | Include as source available; never label the combined terms as plain Apache-2.0 |
| Mos | [LICENSE](https://github.com/Caldis/Mos/blob/master/LICENSE) applies CC BY-NC 4.0 | Include as source available with noncommercial restriction explained |
| GitButler | [LICENSE.md](https://github.com/gitbutlerapp/gitbutler/blob/master/LICENSE.md) applies FSL-1.1-MIT | Include as source available; FSL has restrictions before its later MIT change date |
| Plash | The repository license endpoint returned no license during this review | Hold for manual evidence; absence of evidence is not an open-source license |

Source-available entries were added after the project owner explicitly requested a separate
classification on 2026-10-17. Cards use a visible label; detail pages explain the restrictions;
the catalog filter and JSON feed expose the distinction. They are never included in the
open-source count. The schema rejects mismatched classifications and requires license notes.

These decisions concern the versions and terms inspected on the research date.
A later upstream license change can justify a fresh review.

### GitHub's automatic license field is only a hint

| Project | Metadata observation | Result from reading the license |
| --- | --- | --- |
| [Rectangle](https://github.com/rxhanson/Rectangle/blob/main/LICENSE) | `NOASSERTION` | MIT text; inherited Spectacle attribution is retained |
| [Sequel Ace](https://github.com/Sequel-Ace/Sequel-Ace/blob/main/LICENSE) | `NOASSERTION` | MIT terms with current and inherited notices |
| [CotEditor](https://github.com/coteditor/CotEditor/blob/main/LICENSE) | `NOASSERTION` | Apache-2.0 source; image resources have separate CC BY-NC-ND 4.0 terms |
| [HandBrake](https://github.com/HandBrake/HandBrake/blob/master/LICENSE) | `NOASSERTION` | Compiled builds are GPLv2; source components and graphics have further notices |

Never turn `NOASSERTION` into a guessed SPDX identifier. Read the actual file and record
the scope of the decision. A wrapper's license also does not describe all bundled software:
for example, [syncthing-macos](https://github.com/syncthing/syncthing-macos) is a distinct project.

## Images and screenshots

Code, documentation, icons, screenshots, and trademarks can have different terms.
CotEditor's separate image license and HandBrake's graphics notice are concrete examples.
Do not apply Maco's repository license to upstream artwork.

- Prefer official upstream assets whose usage terms have been checked.
- Store the original source URL, attribution, and applicable license beside each asset.
- Record an asset's purpose and useful alternative text.
- Preserve required notices and distinguish official screenshots from our illustrations.
- If reuse terms for a screenshot or other image are unclear, omit it and link to the official gallery.
- Official app icons are the exception: on 2026-10-17 the project owner approved showing them even under reserved trademark, non-commercial, or no-derivatives terms, unmodified and only to identify the linked app in this non-commercial directory. Each record states the real terms; an icon is removed if its rights holder asks.
- Never invent a product screenshot or imply a mockup shows the real application's interface.

## Compatibility and maintenance claims

Do not infer Apple Silicon support from an app's language, age, popularity, or macOS support.
Verify architecture using official release assets, documentation, or the distributed binary.
Universal, arm64, Intel, and Rosetta support are separate claims.

Likewise, Swift code does not by itself establish a fully native interface.
Use a native-interface label only when the project's documentation or implementation supports it.
Leave unverified architecture, minimum OS, and interface claims absent rather than guessing.

Archived status, release date, and recent source activity describe different things.
Do not equate a recent documentation commit with a maintained binary release.
Prefer Sequel Ace over Sequel Pro for the initial selection after reviewing both upstreams;
Sequel Pro's last recorded push was 2023-02-25 during this check.

## Ongoing editorial workflow

Discovery leads should pass the same review whether supplied by an awesome list or a PR.
Recheck canonical URLs, license text, release availability, and asset provenance when updating.
Keep rejected candidates and the reason for rejection documented rather than silently relabeling them.
Automation may flag changes and broken links, but a metadata refresh must not silently
overwrite an editor's license decision or add unsupported compatibility claims.

Research used primary GitHub README and license files plus GitHub repository metadata.
This review did not install or security-audit every candidate application.

## Expansion review

The first 24 records were a seed, not the extent of the available ecosystem. The expansion
reviews native utilities, developer and communication tools, creative software, and writing
apps in parallel, with each accepted record retaining upstream license and macOS evidence.

- **Loop**: GPLv3 source and official macOS releases, included.
- **Cap**: current LICENSE places the application under AGPLv3, with MIT exceptions for
  cap-camera and scap crate families; included with a real upstream editor screenshot.
- **Pearcleaner**: use the canonical alienator88 GitHub repository and releases, not a domain
  copied from a discovery list. Commons Clause is preserved in its classification and notices.
- **HTTPie Desktop**: do not infer a desktop license from the separately open-source CLI.
- **Clop**: public historical GPL source does not establish the license of later private work;
  held out of this expansion pending a version-specific source/distribution review.
- **SimpleX**: published source does not grant blanket rights to its separately reserved
  graphic assets. Only the official app icon is shown, under the icon exception above.

Catalog inclusion verifies evidence, not every feature through installation. Some historical
utilities retain usable releases but have maintenance caveats stated in their descriptions.

The first expansion published 292 applications (283 open source and 9 separately labeled source
available). Additional restricted licenses include the custom PasteBar and NotchPrompter terms,
PolyForm Shield for SaneClip, FSL for Switch, and CC BY-NC-ND for current DuckStation.
Each record links the exact source terms and states its restrictions.

## Second expansion (2026-10-17)

Every unreviewed lead listed by at least two directories (368 leads) was reviewed against the
inclusion policy; 227 became apps, bringing the catalog to 519 (508 open source, 11 source
available, adding PolyForm Shield for SaneClick and SaneHosts). Each new record reads the actual
license file, links official macOS download evidence, and carries the official icon with
provenance. Decisions worth keeping:

- **Held out, binaries differ from the open code**: Rockxy and Tracexy (AGPL source, but the
  official DMGs ship under a proprietary EULA from private code), eqMac (current releases come
  from a private fork), Visual Studio Code (Microsoft's builds are proprietary; VSCodium is listed),
  Requestly's API client, and Pulse by fatwang2 (closed app, open plugins).
- **Held out, license not on the allowlist**: Cork (Commons Clause–style custom terms), Capso
  (BSL 1.1), Haystack Editor (PolyForm Strict), PDF Archiver (CC BY-NC-SA), MacYTDL (custom
  non-commercial terms), AnyBar (EPL-1.0), screenpipe (commercial license), Hiddify (extended GPL),
  and AFFiNE (a desktop component under its Enterprise Edition license).
- **Held out, no license file or conflicting statements**: BeardedSpice, Juice, gasmask, Keka,
  Clocker, ShiftIt, Dockit (LICENSE says MIT, README says GPL-3.0), among others.
- **Held out, service gone or superseded**: Caprine and fb-mac-messenger (messenger.com shut
  down), Spectacle (use Rectangle), Sequel Pro (use Sequel Ace), Brackets (moved to Phoenix Code),
  ImageAlpha and SoundCleod (archived, no longer working).
- **Included with judgement**: mpv ships a macOS app bundle although it calls itself a
  command-line player; yabai and SketchyBar are background utilities without an app window;
  Whisky is the community fork that continued after the original was archived; MagicQuit is
  listed under its GPL-3.0 LICENSE file although its README says MIT. Old but working apps
  (for example Adium, MacDown, Knuff) state their last release in the description.

## Third expansion (2026-10-17)

The remaining 1,146 unreviewed leads (1,144 listed by a single directory, plus Berthly and Warp,
newly listed twice) were reviewed under the same policy with a stricter quality bar: skip apps
whose last macOS release predates 2020 unless they demonstrably still work, toy or unproven
projects (a single pre-release, days-old repositories with almost no adoption), and apps built
around a discontinued service. 356 became apps, and two projects that surfaced during review were
added directly: The Battle for Wesnoth (official DMGs and Mac App Store) and CCMenu2. That brings
the catalog to 877 (863 open source, 14 source available).

- **Removed after cross-checking**: Saber's Mac listing is its iPad app ("Designed for iPad"), not
  a macOS build; skhd is a configuration-only command-line daemon with no binary download.
- **Held out, binaries differ from the open code or ship closed parts**: AlDente (proprietary
  EULA), palmier-pro, Copilot for Xcode, WhatCable, OneClip, Stirling-PDF's desktop app,
  Duplicati (unconfirmed proprietary folder), Rhea, Safe Exam Browser, OGAD, Franz 6.
- **Held out, license**: VeraCrypt (TrueCrypt License 3.0), Aseprite (EULA), PolyForm
  Noncommercial, BSL, FSL-1.1-ALv2 (supacode, ReqRes, Burrow's engine, tart), O'Saasy, BSD with
  an advertising clause (OpenCore Legacy Patcher), CC BY-NC-SA, CC BY-ND, GPL plus Commons Clause
  or branding terms (MacOSCleaner, m-courtyard, Blink Eye), EPL-2.0, and every repository without
  a license file or with README-versus-LICENSE conflicts (for example uPic, VutronMusic).
- **Held out, editorial**: Kumone (plays tracks from third-party services that block or limit
  them) and hongguo-drama (unauthorised scraping client).
- **Included with judgement**: MioIsland (CC BY-NC 4.0, labeled source available), Sentinel
  (Apache-2.0 with Commons Clause, source available), WireGuard (canonical repository on
  git.zx2c4.com, Mac App Store build), and Warp (AGPL-3.0 client with MIT UI crates; the hosted AI
  and Drive services are proprietary and say so). Several apps sell optional paid tiers built from
  the same open code (Rclone UI, FlyEnv, Starcat, Dayflow); each description says so.

The repeatable [discovery queue](../research/README.md) contains 1,724 deduplicated repository
leads from the ten directories, 766 of which match published apps. Every lead has now been
reviewed once; the rest were held out for the reasons above and remain `needs-review` only
because the queue does not record rejections.
