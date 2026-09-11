// One-off asset generator: renders the social share card (og-image.png) and the
// apple-touch-icon from HTML using the same palette as the site, so they stay in
// sync with src/styles/variables.css. Run with `npm run assets` after changing
// your name, title, or profile photo — the outputs are committed to public/.
import puppeteer from 'puppeteer';
import { readFile, writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

const NAME = 'Sunipun Talukder';
const TITLE = 'AI Engineer';
const TAGLINE = 'Generative AI · Deep Learning · Computer Vision';
const SITE = 'sunipun.com';

const photo = await readFile(path.join(publicDir, 'assets/imgs/profile.webp'));
const photoUri = `data:image/webp;base64,${photo.toString('base64')}`;

const ogHtml = `<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=JetBrains+Mono:wght@500&display=swap" rel="stylesheet">
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{width:1200px;height:630px;background:#0f172a;font-family:Inter,sans-serif;
       display:flex;align-items:center;gap:64px;padding:0 80px;position:relative;overflow:hidden}
  body::before{content:'';position:absolute;top:-220px;right:-160px;width:640px;height:640px;border-radius:50%;
       background:radial-gradient(circle,rgba(56,189,248,.22),transparent 70%)}
  body::after{content:'';position:absolute;bottom:-260px;left:-180px;width:620px;height:620px;border-radius:50%;
       background:radial-gradient(circle,rgba(129,140,248,.18),transparent 70%)}
  .text{position:relative;z-index:1;flex:1}
  h1{font-size:76px;font-weight:800;letter-spacing:-3px;line-height:1.05;
     background:linear-gradient(135deg,#38bdf8,#818cf8);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
  h2{font-size:38px;font-weight:600;color:#f1f5f9;margin-top:14px;letter-spacing:-1px}
  p{font-size:25px;color:#94a3b8;margin-top:20px;line-height:1.45}
  .site{font-family:'JetBrains Mono',monospace;font-size:23px;color:#38bdf8;margin-top:40px}
  .photo{position:relative;z-index:1;width:340px;height:340px;border-radius:28px;object-fit:cover;
     border:3px solid rgba(56,189,248,.45);box-shadow:0 0 70px rgba(56,189,248,.25);flex-shrink:0}
</style></head><body>
  <div class="text">
    <h1>${NAME}</h1><h2>${TITLE}</h2><p>${TAGLINE}</p><div class="site">${SITE}</div>
  </div>
  <img class="photo" src="${photoUri}">
</body></html>`;

const iconHtml = `<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@700&display=swap" rel="stylesheet">
<style>
  *{margin:0;padding:0}
  body{width:180px;height:180px;background:#0f172a;display:flex;align-items:center;justify-content:center}
  span{font-family:'JetBrains Mono',monospace;font-size:84px;font-weight:700;letter-spacing:-3px;
       background:linear-gradient(135deg,#38bdf8,#818cf8);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
</style></head><body><span>ST</span></body></html>`;

const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] });

async function shoot(html, width, height, outFile) {
    const page = await browser.newPage();
    await page.setViewport({ width, height, deviceScaleFactor: 1 });
    await page.setContent(html, { waitUntil: 'networkidle0' });
    await page.evaluate(() => document.fonts.ready);
    await writeFile(path.join(publicDir, outFile), await page.screenshot({ type: 'jpeg', quality: 90 }));
    await page.close();
    console.log(`Generated public/${outFile}`);
}

async function shootPng(html, width, height, outFile) {
    const page = await browser.newPage();
    await page.setViewport({ width, height, deviceScaleFactor: 1 });
    await page.setContent(html, { waitUntil: 'networkidle0' });
    await page.evaluate(() => document.fonts.ready);
    await writeFile(path.join(publicDir, outFile), await page.screenshot({ type: 'png' }));
    await page.close();
    console.log(`Generated public/${outFile}`);
}

await shoot(ogHtml, 1200, 630, 'og-image.jpg');
await shootPng(iconHtml, 180, 180, 'apple-touch-icon.png');
await browser.close();
