# Deploying to GitHub Pages

Yes, you can absolutely host this on GitHub Pages!

## Unique Setup for Custom Domain
I noticed you have a `CNAME` file with `www.sunipun.com`.
- I have moved this file to the `public/` folder.
- This ensures it is copied to the final build so GitHub Pages knows to use your custom domain.
- Because you are using a custom domain, we do **NOT** need to change the `base` path in `vite.config.js`. It should remain default (`/`).

## One-Time Setup

1.  **Install the deploy tool**:
    (Run this after you have installed Node.js/npm)
    ```bash
    npm install --save-dev gh-pages
    ```

## How to Deploy

Every time you want to update your live website, simply run:

```bash
npm run deploy
```

This command will:
1.  Build your project (create the `dist` folder).
2.  Push contents of `dist` (including your `CNAME`) to the `gh-pages` branch on GitHub.
3.  Your site will be live at `www.sunipun.com` after a few minutes.
