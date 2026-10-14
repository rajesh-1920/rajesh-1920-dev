# Architecture

Single-page static site. No framework, no bundler, no backend.

## Entry

`index.html` at repo root:
- Links `assets/css/*.css` (7 files: variables → base → components → skills → projects → contact → responsive).
- Loads `assets/js/*.js` with `defer` (theme, nav, animations, projects, contact, main coordinator).
- Sections: `#home`, `#about`, `#skills`, `#projects`, `#cp`, `#contact`, footer.

## Why root `index.html`?

Both hosts require zero-config:
- GitHub Pages (legacy, `main`/`/`): serves repo root at `/<repo>/`.
- Vercel (static, no build): serves repo root at `/`.
Moving entry to `src/` or `public/` would break one host without a build step. So entry stays at root.

## Assets

- `assets/css/variables.css`: design tokens, dark/light theme custom properties.
- `assets/js/theme.js`: theme toggle + localStorage; `nav.js`: smooth scroll + active link; `animations.js`: reveal; `projects.js`: filtering; `contact.js`: validation + simulated submit (localStorage only, no API); `main.js`: init coordinator.
- `assets/images/`: logo + profile JPGs. `assets/fonts/`: reserved, currently system fonts + Google Fonts CDN.

## Reusable snippets / future pages

- `components/`: `navbar.html`, `footer.html`, `project-card.html` — reference templates, not imported at runtime.
- `pages/`: `blog.html`, `contact.html`, `projects.html` — placeholders for future standalone routes (`cleanUrls` handles `/pages/blog` → `blog.html` on Vercel).

## Config

- `vercel.json`: `cleanUrls`, no trailing slash, immutable cache on `/assets/*`, `nosniff`/`DENY`/`Referrer-Policy` headers.
- `.nojekyll`: disables Jekyll on Pages so underscore paths serve correctly.
