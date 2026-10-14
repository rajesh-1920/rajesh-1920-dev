# Rajesh Biswas — Portfolio

Static personal portfolio (HTML, CSS, vanilla JS). No build step. Deployed to Vercel Production (canonical) and GitHub Pages (mirror).

Live:

- Production (Vercel): see Vercel project deployments
- Mirror (Pages): https://rajesh-1920.github.io/rajesh-1920-dev/

## Quickstart

```bash
git clone https://github.com/rajesh-1920/rajesh-1920-dev.git
cd rajesh-1920-dev
# serve locally — any static server, e.g:
npx serve .
# or
python3 -m http.server 8080
```

Open http://localhost:8080 (or 3000 for `serve`).

## Scripts

```bash
npm run format        # prettier --write
npm run format:check  # prettier --check
npm run lint:html     # htmlhint
npm run lint:css      # stylelint
npm run validate      # json + xml sanity checks
```

## Structure

```
.
├── index.html              # single-page app entry (kept at root for Pages + Vercel zero-config)
├── assets/
│   ├── css/                # variables, base, components, skills, projects, contact, responsive
│   ├── js/                 # theme, nav, animations, projects, contact, main
│   ├── images/
│   └── fonts/
├── components/             # reusable HTML snippets (navbar, footer, project-card)
├── pages/                  # future standalone pages (blog, contact, projects)
├── docs/                   # architecture, deployment, contributing notes
├── favicon.svg, manifest.webmanifest, robots.txt, sitemap.xml, .nojekyll
├── vercel.json             # clean URLs, caching, security headers
└── .github/workflows/ci.yml
```

Root-level SEO files (`robots.txt`, `sitemap.xml`, `favicon.svg`) are intentionally at repo root so both GitHub Pages (serves repo root under `/<repo>/`) and Vercel (serves root at `/`) resolve them. See `docs/DEPLOYMENT.md`.

## Deployment

See `docs/DEPLOYMENT.md`. Summary:

- Push to `main` → Vercel Production deployment + Pages `built` deployment.
- Push to other branches → Vercel Preview only.
- Custom domain: Vercel Dashboard → Settings → Domains.

## Contributing

See `CONTRIBUTING.md`. Branch from `main`, open PR to `main`, do not merge without review.

## License

MIT — see `LICENSE`.
