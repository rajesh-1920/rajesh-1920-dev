/**
 * Two deployment targets:
 * - Vercel (default): standard Next.js server output with security headers.
 * - GitHub Pages (GITHUB_PAGES=true + NEXT_PUBLIC_BASE_PATH=/<repo>):
 *   fully static export served from a sub-path.
 *
 * @type {import('next').NextConfig}
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const isPagesBuild = process.env.GITHUB_PAGES === "true" || basePath !== "";

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  ...(isPagesBuild
    ? {
        output: "export",
        basePath: basePath || undefined,
        trailingSlash: true,
      }
    : {}),
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    // The Pages target is a static export: no image optimisation server.
    unoptimized: isPagesBuild,
    contentSecurityPolicy:
      "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; img-src 'data:' 'self';",
  },
  // Static export cannot apply response headers — Vercel handles those.
  ...(isPagesBuild
    ? {}
    : {
        async headers() {
          return [
            {
              source: "/(.*)",
              headers: [
                { key: "X-Content-Type-Options", value: "nosniff" },
                { key: "X-Frame-Options", value: "DENY" },
                { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
                { key: "X-DNS-Prefetch-Control", value: "on" },
                {
                  key: "Permissions-Policy",
                  value: "camera=(), microphone=(), geolocation=()",
                },
              ],
            },
            {
              source: "/images/:path*",
              headers: [
                { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
              ],
            },
            {
              source: "/:path*.(svg|webmanifest)",
              headers: [{ key: "Cache-Control", value: "public, max-age=86400" }],
            },
          ];
        },
      }),
};

module.exports = nextConfig;
