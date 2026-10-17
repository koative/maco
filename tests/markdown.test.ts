import { test } from 'node:test';
import assert from 'node:assert/strict';
import { renderMarkdown } from '../src/lib/markdown.ts';

test('renders common Markdown while preserving a single page-level heading', () => {
  const html = renderMarkdown(`# Features

A **focused** app with *useful* tools and [documentation](https://example.org/docs "Read the docs").

- First feature
- Second feature

3. Start here
4. Continue here

> An important detail.

Use \`open example\`.
`);
  assert.match(html, /<h2>Features<\/h2>/);
  assert.doesNotMatch(html, /<h1>/);
  assert.match(html, /<strong>focused<\/strong>/);
  assert.match(html, /<em>useful<\/em>/);
  assert.match(
    html,
    /<a href="https:\/\/example.org\/docs" title="Read the docs">documentation<\/a>/,
  );
  assert.match(
    html,
    /<ul>\s*<li>First feature<\/li>\s*<li>Second feature<\/li>\s*<\/ul>/,
  );
  assert.match(html, /<ol start="3">/);
  assert.match(html, /<blockquote>/);
  assert.match(html, /<code>open example<\/code>/);
});

test('drops raw HTML, executable content, events, and untracked images', () => {
  const html = renderMarkdown(`Before.

<script>alert("script-payload")</script>

<iframe src="https://evil.example"></iframe>

<svg onload="alert(1)"><a href="javascript:alert(1)">bad</a></svg>

<img src="x" onerror="alert(1)">

[ordinary](https://example.org) <span onclick="alert(1)">text</span>

![Untracked remote image](https://evil.example/tracker.png)

After.`);
  assert.match(html, /Before/);
  assert.match(html, /After/);
  assert.match(html, /<a href="https:\/\/example.org">ordinary<\/a>/);
  assert.doesNotMatch(
    html,
    /<(?:script|iframe|svg|img|span)\b|onload|onclick|onerror|script-payload|tracker\.png/,
  );
});

test('removes executable and protocol-relative link targets, retaining readable text', () => {
  const html = renderMarkdown(`[javascript](javascript:alert%281%29)

[entity attack](jav&#x61;script:alert%281%29)

[data](data:text/html;base64,PHNjcmlwdD4=)

[vbscript](vbscript:msgbox%281%29)

[protocol relative](//evil.example)

[relative](../help/)

[contact](mailto:hello@example.org)`);
  assert.doesNotMatch(html, /href="(?:javascript:|data:|vbscript:|\/\/)/i);
  assert.match(html, />javascript<\/a>/);
  assert.match(html, />entity attack<\/a>/);
  assert.match(html, /href="\.\.\/help\/"/);
  assert.match(html, /href="mailto:hello@example.org"/);
});

test('escapes HTML examples inside code rather than executing or dropping them', () => {
  const html = renderMarkdown('```html\n<img src="x" onerror="alert(1)">\n```');
  assert.match(html, /<pre><code>/);
  assert.match(html, /&lt;img/);
  assert.doesNotMatch(html, /<img/);
});
