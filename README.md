# Jalis Diehl — DevOps

English site for DevOps solutions: GitOps, Kubernetes platforms, edge, observability, and data plane.

Static Astro. Cloudflare Pages is the intended host.

## Local

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
npm run preview
```

Requires Node 22+.

## Deploy to Cloudflare Pages

No adapter needed — `npm run build` emits static files in `dist/`.

**CLI** (after [Wrangler](https://developers.cloudflare.com/workers/wrangler/install-and-update/) and `npx wrangler login`):

```bash
npm run deploy
```

That creates (or updates) the `devops-site` Pages project and prints a `*.pages.dev` URL.

**Dashboard:** push this repo to GitHub or GitLab, then in Cloudflare → Workers & Pages → Create → Pages → Connect git:

| Setting | Value |
|---------|--------|
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | `22` (from `.nvmrc`) |

Custom domain: Pages project → Custom domains.

## Swap identity

Name, email, and phone live in `src/i18n/ui.ts`. Site URL is `astro.config.mjs` (`site`).
