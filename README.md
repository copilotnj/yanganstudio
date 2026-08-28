# 揚安在這 — React rebuild

A modern rebuild of [yanganstudio.com](https://yanganstudio.com/) with GitHub Pages as the default and Cloudflare Worker + R2 as an optional target:

- **GitHub Pages (default):** routes and images are exported into `out/`. No R2 or server is required.
- **Cloudflare Worker (optional):** React is rendered by the Worker and `/media/*` is streamed from the `FILES` R2 binding.

## Local preview

```bash
npm install
npm run dev
```

The default development server uses the local image source directly; no R2 setup is needed.

## GitHub Pages (no R2)

The repository includes `.github/workflows/deploy-pages.yml`. Push the project to the `main` branch, then choose **GitHub Actions** under **Settings → Pages → Build and deployment**. The workflow builds and publishes the `out/` directory automatically.

The included `public/CNAME` configures `yanganstudio.com`. Remove it if the site will not use that custom domain. For a project URL such as `username.github.io/repository`, set `PAGES_BASE_PATH=/repository` when building (or define a repository variable with that name).

To test the Pages artifact locally:

```bash
npm run build
npx serve out
```

## Cloudflare Worker + R2

The logical R2 binding is declared as `FILES` in `.openai/hosting.json`. Build the Worker with:

```bash
npm run build:r2
```

Upload the image source set to the bound production bucket before switching traffic:

```bash
npx wrangler r2 bucket create site-creator-r2
npm run r2:upload
npx wrangler deploy
```

The default Worker bucket is `site-creator-r2`. The upload helper also accepts
`--bucket <name>` or `R2_BUCKET`, but the deployed Worker's R2 binding must point
to the same bucket.

The Worker entry point handles `GET` and `HEAD` requests under `/media/`, forwards R2 content metadata and ETags, and applies browser caching. `source-images/` is not part of the Worker’s static bundle.

For a local R2 preview:

```bash
npm run r2:upload -- --local
npm run dev:r2
```

## Content notes

- Core routes: home, portfolio, services, journal, About, contact, and newsletter.
- Contact and newsletter forms open a prepared email so they work identically on GitHub Pages and Cloudflare without a third-party form service.
- All migrated photography is stored once in `source-images/`; do not add content photography to `public/`.
