# OpenStore research and inclusion policy

Research date: **2026-10-17**. This is a dated editorial assessment, not a live status feed.

## What we researched

We compared the original directory with six additional GitHub collections, then checked
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

Use these lists to discover projects and credit their role. Write original descriptions.
Do not copy a directory's prose or assume its license covers the applications it links to.

## Inclusion policy

An app can enter the published catalog when an editor can establish all of the following:

1. The canonical upstream repository contains the application's source.
2. An identifiable open-source license covers that source without additional restrictions
   that conflict with the catalog's open-source scope.
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

### Excluded from the strict open-source catalog

| Project | Primary evidence | Decision |
| --- | --- | --- |
| Mac Mouse Fix | [MMF License](https://github.com/noah-nuebling/mac-mouse-fix/blob/master/License) restricts charging for some redistributed programs and requires preserving monetization systems unless stated exceptions apply | Exclude the current restricted license; LinearMouse is an MIT alternative |
| Pearcleaner | [LICENSE.md](https://github.com/alienator88/Pearcleaner/blob/main/LICENSE.md) explicitly combines Apache 2.0 with Commons Clause and limits selling the software | Exclude; do not label the combined terms as plain Apache-2.0 |
| Plash | The repository license endpoint returned no license during this review | Hold for manual evidence; absence of evidence is not an open-source license |

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
Do not apply OpenStore's repository license to upstream artwork.

- Prefer official upstream assets whose usage terms have been checked.
- Store the original source URL, attribution, and applicable license beside each asset.
- Record an asset's purpose and useful alternative text.
- Preserve required notices and distinguish official screenshots from our illustrations.
- If reuse terms are unclear, use an original neutral visual and link to the official gallery.
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
