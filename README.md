# BXVenture Capital — Coming Soon

A faithful, production-ready recreation of the [bxventure.framer.website](https://bxventure.framer.website/)
"Coming Soon" page, built with **Next.js 14 (App Router) + TypeScript** and ready to deploy on **Vercel**.

## What's inside

- Dark radial-gradient background (`radial-gradient(88% 110% at 17.7% 19.6%, #292929, #121212)`)
- The **BXVenture Capital** wordmark, vector-traced to inline SVG (`components/Logo.tsx`) so it
  stays crisp at any size and needs no licensed font
- The large building-photo chevron from the BX mark (`public/x-background.png`), served through
  `next/image`
- `Coming Soon` headline, responsive via `clamp()`

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts: `npm run build`, `npm run start`, `npm run lint`.

## Deploying to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel, **Add New → Project** and import the repo.
   - If this folder is **not** the repo root, set the **Root Directory** to `bxventure-coming-soon`.
3. Vercel auto-detects Next.js — no extra configuration needed. Click **Deploy**.

## Font note

The headline uses **Produkt Regular** (Commercial Type), the same licensed font as the original
site. It is self-hosted at `app/fonts/produkt-regular.woff2` and loaded via `next/font/local` in
`app/layout.tsx`, which exposes the `--font-produkt` CSS variable that `--font-display` consumes
(`app/globals.css`). A slab-serif stack (Rockwell / Roboto Slab / Georgia) remains as a fallback
while the woff2 loads.

> **Licensing:** this font is bundled on the basis that you hold a valid Produkt webfont license
> (the original site does). If this repo is ever shared without that license, swap in a
> properly-licensed alternative.

## Structure

```
app/
  globals.css        global tokens + background gradient
  layout.tsx         metadata, <html>/<body>
  page.tsx           page composition
  page.module.css    layout & responsive rules
components/
  Logo.tsx           BXVenture Capital wordmark (inline SVG)
public/
  x-background.png   chevron hero graphic
```
