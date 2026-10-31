# Rajesh Biswas — Portfolio

Personal portfolio site built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. Fully static (every route is prerendered), deployed to Vercel and mirrored to GitHub Pages.

- **Mirror (GitHub Pages):** <https://rajesh-1920.github.io/rajesh-1920-dev/>
- **Production (Vercel):** see the Vercel project deployments

## Tech stack

| Area      | Tool                                                          |
| --------- | ------------------------------------------------------------- |
| Framework | Next.js 15 (App Router, static prerender)                     |
| Language  | TypeScript 5 (strict)                                         |
| Styling   | Tailwind CSS 3 + design tokens in `src/app/globals.css`       |
| Quality   | ESLint 9 (flat config), Prettier, `tsc --noEmit`              |
| CI        | GitHub Actions (`.github/workflows/ci.yml`)                   |
| Hosting   | Vercel (production)                                           |
| Email     | Optional SMTP via `/api/contact` (Vercel Serverless Function) |

## Getting started

Requires **Node.js 22+** (see `.nvmrc`).

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
│   │   ├── sitemap.ts           # /sitemap.xml (generated)
│   │   ├── not-found.tsx        # Custom 404 page
│   │   ├── blog/                # Blog section
│   │   │   └── page.tsx         # Blog listing
│   │   └── api/contact/         # Contact form API (Vercel Serverless Function)
│   ├── components/
│   │   ├── layout/              # Navbar, Footer, ThemeToggle, SEO, JSONLD
│   │   ├── providers/           # ThemeProvider (theme context)
│   │   ├── sections/            # Hero, About, Skills, Projects, CpStats, Testimonials, Cv, Contact
│   │   └── ui/                  # ProgressBar, BackToTop
│   └── data/                    # Single source of truth for all content
│       ├── site.ts              # Site metadata, contact, social links
│       ├── cv.ts                # Profile, education, leadership, certifications
│       ├── projects.ts          # Projects used by both Projects and CV sections
│       ├── skills.ts            # Skill categories
│       ├── cpStats.ts           # Competitive-programming platform stats
│       ├── testimonials.ts      # Social proof / testimonials
│       └── blog.ts              # Blog posts
├── public/                      # Static assets served at / (images, favicon, manifest)
├── .github/
│   ├── workflows/
│   │   ├── ci.yml               # CI: format, lint, typecheck, build
│   │   └── deploy-pages.yml     # Static export + GitHub Pages deployment
│   ├── CONTRIBUTING.md
│   └── SECURITY.md
└── next.config.js               # Security + cache headers, image optimisation
```

All text and links live in `src/data/` — components never hardcode content.

## Configuration

| Variable                | Used by                 | Purpose                                                          |
| ----------------------- | ----------------------- | ---------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`  | both targets            | Canonical origin for `metadataBase`, Open Graph, robots, sitemap |
| `NEXT_PUBLIC_BASE_PATH` | GitHub Pages build only | Sub-path the export is served from (`/rajesh-1920-dev`)          |
| `SMTP_HOST`             | `/api/contact`          | SMTP host for sending contact form emails (optional)             |
| `SMTP_PORT`             | `/api/contact`          | SMTP port (default 587)                                          |
| `SMTP_USER`             | `/api/contact`          | SMTP username                                                    |
| `SMTP_PASS`             | `/api/contact`          | SMTP password                                                    |
| `SMTP_SECURE`           | `/api/contact`          | Use TLS (`true`/`false`)                                         |
| `CONTACT_TO_EMAIL`      | `/api/contact`          | Destination email for contact form submissions                   |

```bash
cp .env.example .env.local
NEXT_PUBLIC_SITE_URL=https://example.com
```

`NEXT_PUBLIC_SITE_URL` defaults to the GitHub Pages mirror when unset. Both values are inlined at build time.

## SEO & metadata

- `src/app/layout.tsx` — title, description, Open Graph, Twitter card, canonical URL, icons, manifest, JSON-LD (Person + WebSite).
- `src/app/robots.ts` and `src/app/sitemap.ts` — generated at build time by Next.js.
- `src/components/layout/SEO.tsx` — reusable JSON-LD and Open Graph helpers.
- `public/favicon.svg`, `public/site.webmanifest` — brand assets.

## New sections

- **Testimonials** — social proof from peers and collaborators (`#testimonials`).
- **Blog** — thought leadership posts at `/blog`.
- **404 page** — custom error page at any unknown route.
- **Contact API** — `/api/contact` serverless function with optional SMTP delivery.

## Deployment

- **Vercel (production)** — push to `main` deploys the standard Next.js build. Set `NEXT_PUBLIC_SITE_URL` in the Vercel project environment settings. Optionally set SMTP variables for contact form email delivery.
- **GitHub Pages (mirror)** — `.github/workflows/deploy-pages.yml` runs the same code as a static export (`output: "export"`, base path `/rajesh-1920-dev`) and deploys it through GitHub Actions. Pages must be configured with **Source: GitHub Actions**.
- **Custom domain** — Vercel Dashboard → Settings → Domains.

## Contributing

See [`.github/CONTRIBUTING.md`](.github/CONTRIBUTING.md). Branch from `main`, open a PR, do not merge without review.

## Security

See [`.github/SECURITY.md`](.github/SECURITY.md).

## License

[MIT](LICENSE) © 2026 Rajesh Biswas
