// Post-build step: renders each route with a headless browser and writes the
// resulting HTML into dist/<route>/index.html so crawlers that don't execute
// JavaScript (and social link previews) see real content instead of the
// empty <div id="root"> that Vite's SPA build produces.
import { createServer } from 'http';
import handler from 'serve-handler';
import puppeteer from 'puppeteer';
import { mkdir, writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, '..', 'dist');

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

    for (const route of routes) {
        await page.goto(`${baseUrl}${route}`, { waitUntil: 'networkidle0' });
        const html = await page.content();

        const outDir = route === '/' ? distDir : path.join(distDir, route);
        await mkdir(outDir, { recursive: true });
        await writeFile(path.join(outDir, 'index.html'), html);
        console.log(`Prerendered ${route} -> ${path.relative(distDir, outDir) || '.'}/index.html`);
    }

    await browser.close();
    server.close();
}

main().catch((err) => {
    console.error(err);
    server.close();
    process.exit(1);
});
