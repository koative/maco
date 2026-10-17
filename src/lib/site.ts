/** Publishing identity shared by Astro, generated files, and maintenance scripts. */
export const site = {
  name: 'Maco',
  title: 'Maco — Discover open-source Mac apps',
  description:
    'Discover open-source Mac apps for productivity, design, development, and more. Browse screenshots, source code, and clear license details on Maco.',
  url: 'https://maco.koative.com/',
  repository: 'https://github.com/koative/maco',
};

export const basePath = new URL(site.url).pathname;
export const absoluteUrl = (path = '') => new URL(path, site.url).href;

/** Prevent content from terminating an inline JSON-LD script element. */
export const serializeJsonLd = (value: unknown) =>
  JSON.stringify(value).replace(/</g, '\\u003c');
