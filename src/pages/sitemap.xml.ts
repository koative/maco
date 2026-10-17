import { getApps } from '../lib/catalog';
import { site } from '../lib/site';
export function GET() {
  const base = site.url;
  const paths = ['', 'about/', ...getApps().map((app) => `apps/${app.slug}/`)];
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map((path) => `<url><loc>${base}${path}</loc></url>`).join('')}</urlset>`,
    { headers: { 'Content-Type': 'application/xml' } },
  );
}
