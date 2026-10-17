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

export function collectionIds(slug: string): string[] {
  return collections
    .filter((collection) =>
      (collection.apps as readonly string[]).includes(slug),
    )
    .map((collection) => collection.id);
}
