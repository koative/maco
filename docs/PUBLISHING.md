# Publishing Maco

The public repository is [koative/maco](https://github.com/koative/maco). The default site address is <https://maco.koative.com/>. Pushes to `main` run the Bun checks and deploy the static Astro build through GitHub Actions.

## Site identity and SEO

`src/lib/site.ts` owns the site name, default title, description, repository URL, and public URL. Astro's base path, catalog asset fallback, generated README links, sitemap, robots output, and link checker derive their address from it.

Each page has a canonical URL without filter parameters, Open Graph and Twitter metadata, and a share image. App pages have descriptive titles and factual `SoftwareApplication` and breadcrumb structured data. We do not invent prices, review scores, or release dates. This markup does not guarantee a Google rich result. The 404 page is marked `noindex` and excluded from the sitemap.

`public/social-card.png` is the 1200 × 630 default sharing image. Its editable source is `design/social-card.html`; serve it from the repository root with dependencies installed so the bundled Manrope font loads, then capture a 1200 × 630 screenshot after fonts are ready. `docs/preview.png` is a screenshot of the actual catalog.

## Moving to a subdomain

1. Set the exact hostname under repository **Settings → Pages → Custom domain**.
2. Add a DNS CNAME for that hostname pointing to `koative.github.io`, with no path.
3. Change `site.url` in `src/lib/site.ts` to `https://your.actual.hostname/`. The base path becomes `/` automatically.
4. Update the README's hand-written links, development instructions, and repository homepage. Run `bun run sync` to regenerate catalog links.
5. Run the validation and build checks, deploy, and enable **Enforce HTTPS** when the certificate is ready.

The Actions publishing method uses the repository's Pages setting, not a `CNAME` file. The generated `/robots.txt` is served at the hostname root and points to `https://maco.koative.com/sitemap.xml`. The sitemap is also linked from every page's HTML.

After choosing the final hostname, verify it in Google Search Console and submit `/sitemap.xml`. Verification requires access to the domain or Search Console account.

GitHub redirects renamed repository URLs, but does not redirect the old GitHub Pages project URL. Share the new site address after a repository rename.

References: [GitHub custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site), [repository renaming](https://docs.github.com/en/repositories/creating-and-managing-repositories/renaming-a-repository), [Google structured data guidance](https://developers.google.com/search/docs/appearance/structured-data/sd-policies).

## Current DNS record

Cloudflare zone: `koative.com`. Add a **CNAME** record named `maco` targeting `koative.github.io`, with **DNS only** (gray cloud) and automatic TTL. GitHub Pages custom domain must be `maco.koative.com`. Enable **Enforce HTTPS** after GitHub provisions the certificate.
