# Security

## Scope

This is a statically rendered site with no backend, no database, and no authentication. No secrets or credentials are stored in the repository.

The only environment variable is `NEXT_PUBLIC_SITE_URL` (public by design — see `.env.example`). Anything prefixed with `NEXT_PUBLIC_` is baked into the client bundle and must never hold a secret.

The contact form does not send anything over the network: it composes a `mailto:` link in the visitor's own email app, so no form data is transmitted by this site.

## Reporting a vulnerability

Open a GitHub issue (do not include secrets or personal data), or contact the owner via the email address on the profile. Response target: 7 days.
