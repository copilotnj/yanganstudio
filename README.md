# 揚安在這 — React (Vite)

A fast, modern build of [yanganstudio.com](https://yanganstudio.com/) built with React, Vite, React Router, and Tailwind CSS.

## Development

```bash
pnpm install
pnpm run dev
```

The Vite development server uses the local image source in `source-images/` directly via Vite middleware; no separate copy or build step is needed for local media.

## Production Build & Preview

```bash
pnpm run build
pnpm run preview
```

The build output is generated in `dist/`, including all static routes and bundled media from `source-images/`.

## GitHub Pages Deployment

The repository includes `.github/workflows/deploy-pages.yml`. Push the project to the `main` branch, then choose **GitHub Actions** under **Settings → Pages → Build and deployment**. The workflow builds and publishes the `dist/` directory automatically.

The included `public/CNAME` configures `yanganstudio.com`. Remove it if the site will not use that custom domain. For a project URL such as `username.github.io/repository`, set `PAGES_BASE_PATH=/repository` when building (or define a repository variable with that name).

## Content notes

- Core routes: Home, Portfolio (`/collections/`), Services (`/service/`), Journal (`/blog/`), About (`/about/`), Contact (`/contact/`), and Newsletter (`/newsletter/`).
- Contact and newsletter forms open a prepared email so they work cleanly without requiring a backend server.
- All photography is stored in `source-images/`.

