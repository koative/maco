export const collections = [
  {
    id: 'everyday',
    name: 'Everyday essentials',
    description: 'Small upgrades. A better Mac.',
    apps: [
      'loop',
      'maccy',
      'localsend',
      'iina',
      'rectangle',
      'stats',
      'ice',
      'itsycal',
    ],
  },
  {
    id: 'focus',
    name: 'Space to focus',
    description: 'Think, write, and keep your place.',
    apps: [
      'joplin',
      'zettlr',
      'markedit',
      'fsnotes',
      'coteditor',
      'netnewswire',
      'keepingyouawake',
    ],
  },
  {
    id: 'developer',
    name: 'The developer desk',
    description: 'From the first idea to the next release.',
    apps: [
      'ghostty',
      'zed',
      'vscodium',
      'bruno',
      'sequel-ace',
      'gitup',
      'utm',
      'devtoys',
    ],
  },
  {
    id: 'creative',
    name: 'Make something',
    description: 'Capture, cut, draw, and compose.',
    apps: [
      'cap',
      'krita',
      'audacity',
      'obs-studio',
      'shotcut',
      'gifski',
      'handbrake',
      'musescore',
    ],
  },
] as const;

/** Discover spotlights: editorial headlines over each app's real screenshot. */
export const spotlights = [
  { slug: 'iina', headline: 'Press play. Enjoy everything.', stage: '#1d3a5c' },
  {
    slug: 'cap',
    headline: 'Record it, polish it, share it.',
    stage: '#3b2a5e',
  },
  {
    slug: 'rectangle',
    headline: 'Less arranging. More doing.',
    stage: '#4a4f57',
  },
  {
    slug: 'maccy',
    headline: 'Everything you copied, one keystroke away.',
    stage: '#2f4a3a',
  },
  { slug: 'markedit', headline: 'Markdown, the Mac way.', stage: '#5c3b28' },
  {
    slug: 'bruno',
    headline: 'API collections that live with your code.',
    stage: '#4d3a1f',
  },
] as const;

/** URL segment for a category name, e.g. "Privacy & security" → "privacy-security". */
export const categorySlug = (category: string) =>
  category
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

/** Short license text for lockups and the info strip; restricted terms always read "Source available". */
export const licenseLabel = (app: {
  license: string;
  sourceAvailability: string;
}) =>
  app.sourceAvailability === 'source-available'
    ? 'Source available'
    : app.license.replaceAll('-only', '').replaceAll('-or-later', '+');
