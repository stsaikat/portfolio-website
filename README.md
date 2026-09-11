# sunipun.com

Personal portfolio — React 18 + Vite, prerendered to static HTML and deployed to
GitHub Pages on a custom domain.

## Running it

```bash
npm install
npm run dev      # http://localhost:5173
```

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Vite dev server |
| `npm run build` | Fetches blog + CP stats, regenerates the résumé PDF, builds, then prerenders every route |
| `npm run preview` | Serves the built `dist/` |
| `npm run lint` | ESLint over `src/` |
| `npm run resume` | Regenerates `public/assets/Sunipun-Talukder-Resume.pdf` only |
| `npm run assets` | Regenerates the social share card and apple-touch-icon (rarely needed) |

## Editing content

Content lives in `src/data/` — the pages only render it, so text edits never
touch JSX:

| File | Drives |
| --- | --- |
| `site.js` | Name, title, summary, location, email, social links, availability badge |
| `resume.js` | Experience, community, education, skills, expertise cards |
| `projects.js` | All three project sections, including `stack` chips and `metric` badges |
| `certifications.js` | The certifications list |
| `cp.js` | Competitive programming platform cards and core competencies |

`site.js` and `resume.js` also feed `scripts/generate-resume.mjs`, so the site
and the downloadable PDF can't drift apart. Numbers on the CP page come from
`public/cp-stats.json`, refreshed at build time by `scripts/fetch-cp-stats.mjs`.

Keep `metric` values to numbers you can defend in an interview — they're the
first thing a reader sees on a project card.

## Styles

`src/styles/variables.css` holds the palette and layout tokens; `index.css` is
global (buttons, navbar, footer, focus rings, reduced-motion); `shared.css` holds
the card, grid and skill-tag primitives used by several pages. Everything else is
scoped to one page or component.

## Build pipeline

`scripts/prerender.mjs` runs after `vite build`. It renders each route in headless
Chrome and writes real HTML to `dist/<route>/index.html`, so crawlers and social
link previews see content rather than an empty `<div id="root">`. It also writes
`dist/404.html` (GitHub Pages serves that for any unknown path, which is the only
way the SPA's NotFound route is reached in production) and regenerates
`sitemap.xml` with a fresh `lastmod`.

Per-page `<title>`, description, canonical and Open Graph tags come from
`src/components/Seo.jsx`; the share card is `public/og-image.jpg`.

## Deploying

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and
publishes to GitHub Pages. `public/CNAME` pins the custom domain, so
`vite.config.js` keeps the default `/` base path.

Manual fallback: `npm run deploy` (builds and pushes `dist/` to the `gh-pages`
branch).
