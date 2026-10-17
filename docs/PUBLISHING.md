# Publishing Maco

The public repository is [koative/maco](https://github.com/koative/maco). The site is served at <https://maco.koative.com/>. Pushes to `main` run the Bun checks and deploy the static Astro build through GitHub Actions.

## Site identity and SEO

`src/lib/site.ts` owns the site name, default title, description, repository URL, and public URL. Astro's base path, catalog asset fallback, generated README links, sitemap, robots output, and link checker derive their address from it.

Each page has a canonical URL without filter parameters, Open Graph and Twitter metadata, and a share image. Discover, search, the category and collection pages, About, and every app page are in the sitemap. App pages have descriptive titles and factual `SoftwareApplication` and breadcrumb structured data. We do not invent prices, review scores, or release dates. This markup does not guarantee a Google rich result. The 404 page is marked `noindex` and excluded from the sitemap.

`public/social-card.png` is the 1200 × 630 default sharing image. Its editable source is `design/social-card.html`, which shows real catalog icons from `content/apps/`. Serve the repository root over HTTP, open the file in a browser on macOS so `system-ui` resolves to SF Pro, and capture a 1200 × 630 screenshot. `docs/preview.png` is a 1440 × 1050 screenshot of the actual Discover page in light appearance.

## Custom domain

The site is served at the root of the `maco.koative.com` subdomain:

- Cloudflare zone `koative.com` has a **CNAME** record named `maco` targeting `koative.github.io`, with **DNS only** (gray cloud), automatic TTL, and no path.
- Repository **Settings → Pages → Custom domain** is `maco.koative.com`. The Actions publishing method uses this setting, not a `CNAME` file.
- `site.url` in `src/lib/site.ts` is `https://maco.koative.com/`, so the base path is `/`.

**Enforce HTTPS** is on: plain `http://` requests get a 301 redirect to HTTPS (checked 2026-10-17).

To change the hostname, update the Pages setting and DNS record, change `site.url`, update the README's hand-written links and the repository homepage, run `bun run sync` to regenerate catalog links, then run the validation and build checks before deploying.

The generated `/robots.txt` is served at the hostname root and points to `https://maco.koative.com/sitemap.xml`. The sitemap is also linked from every page's HTML. Verify the domain in Google Search Console and submit `/sitemap.xml`; this requires access to the domain or Search Console account.

The custom domain does not contain the repository name, so a repository rename does not change the site address. GitHub redirects renamed repository URLs; still update `site.repository` in `src/lib/site.ts` and the README links after a rename.

References: [GitHub custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site), [repository renaming](https://docs.github.com/en/repositories/creating-and-managing-repositories/renaming-a-repository), [Google structured data guidance](https://developers.google.com/search/docs/appearance/structured-data/sd-policies).
