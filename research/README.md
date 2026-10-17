# Discovery queue

`sources.json` records ten directories used for discovery. Refresh their GitHub repository links with:

```sh
bun run discover
```

`candidates.json` is a deduplicated review queue, **not a list of approved applications**. It includes libraries, CLI projects, renamed repositories, closed-source distribution wrappers, and apps without current macOS releases. Matching published repositories are marked `published`; every other lead is `needs-review`, including ones previously rejected in the research notes. This is a discovery snapshot, not an approval workflow or a source of truth for the website.

To publish a candidate, read its actual source license and official macOS download evidence, write original metadata, and add an app folder following [CONTRIBUTING.md](../CONTRIBUTING.md). Source-available licenses need explicit labels and restriction notes. Direct upstream discoveries can be added even when no directory lists them.

The script does not install software, copy descriptions or images, infer licenses, or publish new records. Network failures leave the previous queue intact. Directory ownership and app licenses are independent; see [the research comparison](../docs/RESEARCH.md).
