# D4 S13 Whirlwind Playbook

Astro Starlight site for the D4 Season 13 / Lord of Hatred Whirlwind Barb master playbook. 36 community sources consolidated and gated behind HTTP Basic Auth (Netlify edge function).

## Stack

- [Astro](https://astro.build) 5.x
- [Starlight](https://starlight.astro.build) 0.30 (docs theme + Pagefind search)
- Netlify Edge Functions (Basic Auth gate)

## Local development

```bash
npm install
npm run dev
```

## Edit content

All pages are markdown in `src/content/docs/`. Edit, commit, push. Netlify auto-deploys on push.

```bash
# Sidebar order is configured in astro.config.mjs
src/content/docs/
  ├── index.mdx          # Homepage
  ├── cheatsheet.md      # Top-of-priority checklist
  ├── whirlwind-barb.md  # Build spotlight
  └── a-…o-…             # Reference sections A-O
```

## Auth

Site is gated by HTTP Basic Auth via `netlify/edge-functions/auth.ts`. Credentials are stored in Netlify environment variables:

- `SITE_USER` — username
- `SITE_PASS` — password

Browser caches the credentials per session.

## Build

```bash
npm run build   # outputs to ./dist
```
