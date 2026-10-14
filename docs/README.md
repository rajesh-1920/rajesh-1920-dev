# Rajesh Biswas — Portfolio

Static personal portfolio (Next.js + TypeScript + Tailwind CSS). Deployed to Vercel Production and mirrored to GitHub Pages.

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

Open http://localhost:8080 (or 3000 for the development server).

## Scripts

```bash
npm run format        # prettier --write
npm run format:check  # prettier --check
npm run lint          # eslint
npm run lint:css      # stylelint
npm run typecheck     # tsc --noEmit
npm run build         # next build
npm run start         # next start
```

## Structure

```
.
├── public/
│   ├── favicon.svg, manifest.webmanifest          # in public/seo/ folder
│   ├── robots.txt, sitemap.xml                    # at repo root for SEO resolution
│   ├── images/                                    # project images
│   └── fonts/                                     # project fonts
├── src/                                            # Next.js App Router source
│   ├── app/                                        # page layouts and sections
│   │   ├── layout/                                 # ThemeProvider, Navbar, Footer, ThemeToggle
│   │   ├── sections/                               # About, Skills, Projects, CpStats, Contact, Home
│   │   └── page.tsx                                # main page
│   └── data/                                       # projects, skills, cpStats, site metadata
├── docs/                                           # architecture, deployment, contributing notes
├── vercel.json                                     # clean URLs, caching, security headers
└── .github/workflows/ci.yml                        # CI: format, lint, typecheck, build
```

SEO files are organized as follows:

- **`public/seo/`** contains `favicon.svg` and `manifest.webmanifest` — grouped together for clarity.
- **`robots.txt` and `sitemap.xml`** remain at the repo root because both GitHub Pages (serves repo root under `/<repo>/`) and Vercel (serves root at `/`) resolve them from the root. This is intentional for proper search engine indexing.

See `docs/DEPLOYMENT.md` for deployment details.

## Deployment

See `docs/DEPLOYMENT.md`. Summary:

- Push to `main` → Vercel Production deployment + Pages `built` deployment.
- Push to other branches → Vercel Preview only.
- Custom domain: Vercel Dashboard → Settings → Domains.

## Contributing

See `CONTRIBUTING.md`. Branch from `main`, open PR to `main`, do not merge without review.

## License

MIT — see `LICENSE`.
