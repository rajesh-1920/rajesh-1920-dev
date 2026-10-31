import Link from "next/link";

import { site } from "@/data/site";

export const metadata = {
  title: `Page Not Found | ${site.name}`,
};

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center p-8">
      <div className="container-x text-center">
        <p className="section-eyebrow text-center">404</p>
        <h1 className="section-title text-6xl font-extrabold text-accent-primary">404</h1>
        <h2 className="mt-4 text-2xl font-bold text-ink-primary">Page not found</h2>
        <p className="mt-4 text-lg text-ink-secondary max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist. It may have been moved or
          deleted.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="btn btn-primary px-8 py-3"
            aria-label="Go to homepage"
          >
            Back to Home
          </Link>
          <a
            href={`mailto:${site.email}`}
            className="btn btn-outline px-8 py-3"
            aria-label="Contact the owner"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
