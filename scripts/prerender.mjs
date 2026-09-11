// Post-build step: renders each route with a headless browser and writes the
// resulting HTML into dist/<route>/index.html so crawlers that don't execute
// JavaScript (and social link previews) see real content instead of the
// empty <div id="root"> that Vite's SPA build produces.
//
// Also emits dist/404.html — GitHub Pages serves that file for any path we did
// not prerender, which is the only way the SPA's NotFound route is ever reached
// in production.
import { createServer } from 'http';
import handler from 'serve-handler';
import puppeteer from 'puppeteer';
import { mkdir, writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, '..', 'dist');

const SITE_URL = 'https://www.sunipun.com';
const routes = ['/', '/about', '/projects', '/cp', '/certifications', '/blogs'];

const server = createServer((req, res) =>
    handler(req, res, { public: distDir, rewrites: [{ source: '**', destination: '/index.html' }] })
);

async function main() {
    await new Promise((resolve) => server.listen(0, resolve));
    const { port } = server.address();
    const baseUrl = `http://localhost:${port}`;

    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();

    const render = async (route) => {
        await page.goto(`${baseUrl}${route}`, { waitUntil: 'networkidle0' });
        await page.evaluate(() => document.fonts.ready);
        return page.content();
    };

    for (const route of routes) {
        const html = await render(route);
        const outDir = route === '/' ? distDir : path.join(distDir, route);
        await mkdir(outDir, { recursive: true });
        await writeFile(path.join(outDir, 'index.html'), html);
        console.log(`Prerendered ${route} -> ${path.relative(distDir, outDir) || '.'}/index.html`);
    }

    // Any unknown path: render the SPA's own 404 view as GitHub Pages' 404 page.
    await writeFile(path.join(distDir, '404.html'), await render('/this-path-does-not-exist'));
    console.log('Prerendered 404 -> 404.html');

    // Keep <lastmod> honest rather than letting the sitemap go stale.
    const lastmod = new Date().toISOString().slice(0, 10);
    const urls = routes
        .map((route) => `    <url>\n        <loc>${SITE_URL}${route}</loc>\n        <lastmod>${lastmod}</lastmod>\n    </url>`)
        .join('\n');
    await writeFile(
        path.join(distDir, 'sitemap.xml'),
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
    );
    console.log(`Wrote sitemap.xml (lastmod ${lastmod})`);

    await browser.close();
    server.close();
}

main().catch((err) => {
    console.error(err);
    server.close();
    process.exit(1);
});
