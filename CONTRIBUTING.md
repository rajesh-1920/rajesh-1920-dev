# Contributing

1. Branch from `main`: `feat/...`, `fix/...`, `chore/...`.
2. Keep changes scoped; run checks before pushing:
   ```bash
   npm run format:check
   npm run lint:html
   npm run lint:css
   ```
3. Push and open a PR to `main`. Do not merge without review.
4. Keep asset paths relative (`assets/...`) so Pages subpath + Vercel root both work.
5. Update `CHANGELOG.md` for user-visible changes and `sitemap.xml` `lastmod` if routes change.
