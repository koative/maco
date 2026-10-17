import { Marked } from 'marked';
import sanitizeHtml from 'sanitize-html';

const parser = new Marked({
  async: false,
  gfm: true,
  renderer: {
    // Media belongs in the catalog's attributed assets, not arbitrary body HTML.
    html: () => '',
    image: () => '',
  },
});

/** Render contributor prose at build time; only this sanitized result may use set:html. */
export function renderMarkdown(markdown: string): string {
  const html = parser.parse(markdown, { async: false });
  return sanitizeHtml(html, {
    allowedTags: [
      'p',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'ul',
      'ol',
      'li',
      'strong',
      'em',
      'del',
      'blockquote',
      'a',
      'code',
      'pre',
      'hr',
      'br',
      'table',
      'thead',
      'tbody',
      'tr',
      'th',
      'td',
    ],
    allowedAttributes: {
      a: ['href', 'title'],
      ol: ['start'],
    },
    allowedSchemes: ['https', 'http', 'mailto'],
    allowProtocolRelative: false,
    transformTags: { h1: 'h2' },
  });
}
