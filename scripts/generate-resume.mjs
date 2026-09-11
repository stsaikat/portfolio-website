// Renders a one-page resume PDF from the same data the About page uses
// (src/data/site.js + src/data/resume.js), so the download and the site can
// never disagree. Runs as part of `npm run build`.
import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';
import site from '../src/data/site.js';
import { experience, community, education, skills } from '../src/data/resume.js';
import { certifications } from '../src/data/certifications.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outFile = path.join(__dirname, '..', 'public', 'assets', 'Sunipun-Talukder-Resume.pdf');

const escape = (s) =>
    String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const contact = [
    site.location,
    site.email,
    site.url.replace(/^https?:\/\//, ''),
    site.social.github.replace(/^https?:\/\//, ''),
    site.social.linkedin.replace(/^https?:\/\/(www\.)?/, ''),
];

const html = `<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
<style>
  @page { size: A4; margin: 11mm 13mm; }
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:Inter,-apple-system,sans-serif;font-size:9pt;line-height:1.3;color:#1a1a1a;background:#fff}
  header{border-bottom:2px solid #0369a1;padding-bottom:7px;margin-bottom:10px}
  h1{font-size:19pt;font-weight:700;letter-spacing:-.6px;color:#0c4a6e}
  .role{font-size:10.5pt;font-weight:600;color:#0369a1;margin-top:1px}
  .contact{margin-top:6px;font-size:8.4pt;color:#475569}
  .contact span:not(:last-child)::after{content:' · ';color:#94a3b8}
  h2{font-size:9.4pt;font-weight:700;text-transform:uppercase;letter-spacing:1.1px;color:#0369a1;
     border-bottom:1px solid #cbd5e1;padding-bottom:2px;margin:8px 0 4px}
  .summary{color:#334155}
  .job{margin-bottom:5.5px;break-inside:avoid}
  .job-head{display:flex;justify-content:space-between;align-items:baseline;gap:12px}
  .job-title{font-weight:700;font-size:9.6pt}
  .job-meta{font-size:8.4pt;color:#64748b;white-space:nowrap}
  .job-org{font-size:9pt;color:#0369a1;font-weight:600;margin-bottom:2px}
  ul{margin:0 0 0 13px}
  li{margin-bottom:1px;color:#334155}
  .skills-row{display:flex;gap:7px;margin-bottom:2.5px;break-inside:avoid}
  .skills-label{min-width:118px;font-weight:600;color:#0f172a;font-size:8.8pt}
  .skills-list{color:#334155;font-size:8.8pt}
  .edu{display:flex;justify-content:space-between;align-items:baseline;gap:12px}
  .edu-school{font-weight:700}
  .certs{color:#334155;font-size:8.8pt}
  .certs b{color:#0f172a;font-weight:600}
</style></head><body>
<header>
  <h1>${escape(site.name)}</h1>
  <div class="role">${escape(site.title)}</div>
  <div class="contact">${contact.map((c) => `<span>${escape(c)}</span>`).join('')}</div>
</header>

<h2>Summary</h2>
<p class="summary">${escape(site.summary)}</p>

<h2>Experience</h2>
${experience
    .map(
        (job) => `<div class="job">
  <div class="job-head">
    <span class="job-title">${escape(job.role)}</span>
    <span class="job-meta">${escape(job.period)}</span>
  </div>
  <div class="job-org">${escape(job.company)}${job.location ? ` — ${escape(job.location)}` : ''}</div>
  <ul>${job.achievements.map((a) => `<li>${escape(a)}</li>`).join('')}</ul>
</div>`
    )
    .join('')}

<h2>Skills</h2>
${skills
    .map(
        (group) => `<div class="skills-row">
  <span class="skills-label">${escape(group.category)}</span>
  <span class="skills-list">${group.items.map(escape).join(' · ')}</span>
</div>`
    )
    .join('')}

<h2>Education</h2>
<div class="edu">
  <span class="edu-school">${escape(education.school)}</span>
  <span class="job-meta">${escape(education.period)}</span>
</div>
<div style="color:#334155">${escape(education.degree)}</div>

<h2>Community &amp; Mentoring</h2>
${community
    .map(
        (entry) => `<div class="job">
  <div class="job-head">
    <span class="job-title">${escape(entry.role)}</span>
    <span class="job-meta">${escape(entry.period)}</span>
  </div>
  <div class="job-org">${escape(entry.company)}</div>
  <ul>${entry.achievements.map((a) => `<li>${escape(a)}</li>`).join('')}</ul>
</div>`
    )
    .join('')}

<h2>Selected Certifications</h2>
<div class="certs">
${certifications
    .slice(0, 4)
    .map((c) => `<div><b>${escape(c.title)}</b> — ${escape(c.issuer)}, ${escape(c.date)}</div>`)
    .join('')}
</div>
</body></html>`;

const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] });
const page = await browser.newPage();
await page.setContent(html, { waitUntil: 'networkidle0' });
await page.evaluate(() => document.fonts.ready);
await page.pdf({ path: outFile, format: 'A4', printBackground: true });
await browser.close();
console.log(`Generated public/assets/${path.basename(outFile)}`);
