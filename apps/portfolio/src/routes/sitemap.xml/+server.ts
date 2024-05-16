import { projects } from '../../stores/featured';
import type { Project } from '../../stores/featured';

const pages = ['cv', 'research', 'projects']; //list of pages as a string ex. ["about", "blog", "contact"]
const site = 'https://www.adamemerson.com';

let projectPages: {
	[key: string]: Project;
};
projects.subscribe((value) => {
	projectPages = value;
});
/** @type {import('./$types').RequestHandler} */
export async function GET() {
	const body = sitemap(pages);
	const response = new Response(body);
	response.headers.set('Cache-Control', 'max-age=0, s-maxage=3600');
	response.headers.set('Content-Type', 'application/xml');
	return response;
}

const sitemap = (pages: string[]) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
  <url>
    <loc>${site}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  ${pages
		.map(
			(page) => `
  <url>
    <loc>${site}/${page}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  `
		)
		.join('')}
  ${Object.keys(projectPages)
		.map(
			(key) => `
    <url>
      <loc>${site}/${projectPages[key].isResearch ? 'research' : 'projects'}/${
				projectPages[key].slug
			}</loc>
      <changefreq>monthly</changefreq>
      <lastmod>${projectPages[key].updated}</lastmod>
      <priority>0.3</priority>
    </url>
  `
		)
		.join('')}
</urlset>`;
