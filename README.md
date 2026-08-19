# Jalis Diehl — DevOps

English site for DevOps solutions: GitOps, Kubernetes platforms, edge, observability, and data plane.

Static Astro, hosted on Cloudflare at [jalisdiehl.dev](https://jalisdiehl.dev).

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

## Deploy to Cloudflare

`npm run build` writes static files to `dist/`. Wrangler uploads them as a Worker with custom domains `jalisdiehl.dev` and `www.jalisdiehl.dev` (see `wrangler.jsonc`).

```bash
npx wrangler login   # once
npm run deploy
```

The zone `jalisdiehl.dev` must stay on this Cloudflare account so Wrangler can attach the DNS records.

## Swap identity

Name, email, and phone live in `src/i18n/ui.ts`. Site URL is `astro.config.mjs` (`site`).
