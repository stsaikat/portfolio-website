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

The deployment is now automated using GitHub Actions!

1.  Push your changes to the `main` branch:
    ```bash
    git add .
    git commit -m "Update website"
    git push origin main
    ```

2.  Go to the "Actions" tab in your GitHub repository to see the deployment progress.
3.  Once the "Deploy to GitHub Pages" workflow completes, your changes will be live.

### Manual Deployment (Fallback)

If you ever need to manually deploy, you can run:

```bash
npm run deploy
```

This will build the project and push the `dist` folder to the `gh-pages` branch.
