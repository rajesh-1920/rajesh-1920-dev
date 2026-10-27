# Contributing

1. Branch from `main` using a scoped prefix: `feat/...`, `fix/...`, `chore/...`.
2. Keep each change focused. Before pushing, run the full local check:

   ```bash
   npm run check   # format:check + lint + typecheck
   npm run build   # production build must succeed
   ```

3. Push and open a PR against `main`. Do not merge without review.
4. Content lives in `src/data/` — edit the data files instead of hardcoding text in
   components.
5. Keep image assets in `public/images/` and reference them with an absolute path
   (`/images/...`).

## Style

- Formatting is handled by Prettier (`.prettierrc`) — run `npm run format` if needed.
- Linting is ESLint with the Next.js flat config (`eslint.config.mjs`).
- Use the `@/` alias for imports from `src/`.
