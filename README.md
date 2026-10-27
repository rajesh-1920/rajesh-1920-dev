# Rajesh Biswas — Portfolio

Personal portfolio site built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. Fully static (every route is prerendered), deployed to Vercel and mirrored to GitHub Pages.

- **Mirror (GitHub Pages):** <https://rajesh-1920.github.io/rajesh-1920-dev/>
- **Production (Vercel):** see the Vercel project deployments

## Tech stack

| Area      | Tool                                                    |
| --------- | ------------------------------------------------------- |
| Framework | Next.js 15 (App Router, static prerender)               |
| Language  | TypeScript 5 (strict)                                   |
| Styling   | Tailwind CSS 3 + design tokens in `src/app/globals.css` |
| Quality   | ESLint 9 (flat config), Prettier, `tsc --noEmit`        |
| CI        | GitHub Actions (`.github/workflows/ci.yml`)             |
| Hosting   | Vercel (production) + GitHub Pages (mirror)             |

## Getting started

```bash
git clone https://github.com/rajesh-1920/rajesh-1920-dev.git
cd rajesh-1920-dev
npm ci
npm run dev
```

Open <http://localhost:3000>.

## Scripts

| Command                | Purpose                             |
| ---------------------- | ----------------------------------- |
| `npm run dev`          | Development server                  |
| `npm run build`        | Production build                    |
| `npm run start`        | Serve the production build          |
| `npm run lint`         | ESLint over the whole repo          |
| `npm run lint:fix`     | ESLint with autofix                 |
| `npm run typecheck`    | TypeScript, no emit                 |
| `npm run format`       | Prettier write                      |
| `npm run format:check` | Prettier check (CI)                 |
| `npm run check`        | format + lint + typecheck in one go |

## Project structure

```
.
├── src/
│   ├── app/                     # Routes, metadata, global styles
│   │   ├── layout.tsx           # Root layout: <head> metadata, nav/footer shell
│   │   ├── page.tsx             # Composes the landing page sections
│   │   ├── globals.css          # Design tokens + component layer
│   │   ├── robots.ts            # /robots.txt (generated)
│   │   └── sitemap.ts           # /sitemap.xml (generated)
│   ├── components/
│   │   ├── layout/              # Navbar, Footer, ThemeToggle
│   │   ├── providers/           # ThemeProvider (theme context)
│   │   └── sections/            # Hero, About, Skills, Projects, CpStats, Cv, Contact
│   └── data/                    # Single source of truth for all content
│       ├── site.ts              # Site metadata, contact, social links
│       ├── cv.ts                # Profile, education, leadership, certifications
│       ├── projects.ts          # Projects used by both Projects and CV sections
│       ├── skills.ts            # Skill categories
│       └── cpStats.ts           # Competitive-programming platform stats
├── public/                      # Static assets served at / (images, favicon, manifest)
├── .github/
│   ├── workflows/ci.yml         # CI: format, lint, typecheck, build
│   ├── CONTRIBUTING.md
│   └── SECURITY.md
└── next.config.js               # Security + cache headers, image optimisation
```

All text and links live in `src/data/` — components never hardcode content.

## Configuration

Set the canonical origin (used for `metadataBase`, Open Graph URLs, `robots.txt`, and `sitemap.xml`):

```bash
cp .env.example .env.local
NEXT_PUBLIC_SITE_URL=https://example.com
```

Defaults to the GitHub Pages mirror when unset.

## SEO & metadata

- `src/app/layout.tsx` — title, description, Open Graph, Twitter card, canonical URL, icons, manifest.
- `src/app/robots.ts` and `src/app/sitemap.ts` — generated at build time by Next.js.
- `public/favicon.svg`, `public/site.webmanifest` — brand assets.

## Deployment

- **Vercel** — push to `main` deploys production. Set `NEXT_PUBLIC_SITE_URL` in the project environment settings.
- **GitHub Pages mirror** — served from the built output of `main`.
- **Custom domain** — Vercel Dashboard → Settings → Domains.

## Contributing

See [`.github/CONTRIBUTING.md`](.github/CONTRIBUTING.md). Branch from `main`, open a PR, do not merge without review.

## Security

See [`.github/SECURITY.md`](.github/SECURITY.md).

## License

[MIT](LICENSE) © 2026 Rajesh Biswas
