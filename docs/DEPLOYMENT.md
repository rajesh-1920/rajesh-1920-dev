# Deployment

## Canonical: Vercel Production

- Trigger: push to `main`.
- Output: Production deployment (`vercel[bot]`, environment `Production`), zero-config static, no build command.
- Config: `vercel.json` (clean URLs, caching, security headers).
- Custom domain: Vercel Dashboard → Project → Settings → Domains → add domain → update DNS → set as primary. Use this URL on resume.
- Previews: pushes to other branches create Preview deployments automatically.

## Mirror: GitHub Pages

- Type: legacy Pages, source `main` / `/` (see repo Settings → Pages).
- Trigger: push to `main` → Pages `building` → `built`.
- URL: `https://rajesh-1920.github.io/rajesh-1920-dev/`.
- Notes: serves under `/<repo>/` subpath; asset paths are relative (`assets/...`) so both hosts work. `.nojekyll` required. `robots.txt`/`sitemap.xml` reference the Pages URL until a custom domain is set — update them when the domain changes.

## GitHub Deployments record

`gh api repos/rajesh-1920/rajesh-1920-dev/deployments` lists both `github-pages` and Vercel `Production`/`Preview` entries. Deleted deployment records cannot be restored — redeploy creates new records (see `docs/ARCHITECTURE.md` for why redeploy = empty commit or any `main` push).

## Verify

```bash
gh api repos/rajesh-1920/rajesh-1920-dev/pages --jq '{status, html_url}'
gh api repos/rajesh-1920/rajesh-1920-dev/pages/builds --jq '.[0:2] | map({status, commit: .commit[0:7]})'
gh api repos/rajesh-1920/rajesh-1920-dev/deployments --jq '.[0:3] | map({id, environment, sha: .sha[0:7]})'
curl -s -o /dev/null -w "%{http_code}\n" -L https://rajesh-1920.github.io/rajesh-1920-dev/
```
