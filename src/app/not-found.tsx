import Link from "next/link";

import { site } from "@/data/site";
import { ArrowRightIcon, SparklesIcon } from "@/components/ui/Icons";

export const metadata = {
  title: `Page Not Found | ${site.name}`,
};

export default function NotFound() {
  return (
    <section className="flex min-h-[75vh] items-center justify-center ambient-glow px-4 py-20">
      <div className="container-x text-center max-w-xl card-glass p-8 sm:p-12">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-primary/30 bg-accent-primary/10 px-3 py-1 text-xs font-mono font-semibold text-accent-primary">
          <SparklesIcon className="h-3.5 w-3.5" />
          HTTP 404 Status
        </span>

        <h1 className="mt-4 font-display text-6xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent-primary via-emerald-400 to-accent-secondary">
          404
        </h1>

        <h2 className="mt-3 text-xl sm:text-2xl font-bold text-ink-primary">
          Page Not Found
        </h2>

        <p className="mt-3 text-sm text-ink-secondary leading-relaxed">
          The requested route does not exist or has been relocated. Let&apos;s get you
          back on track.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/" className="btn btn-primary w-full sm:w-auto">
            <span>Return to Portfolio</span>
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
          <a href={`mailto:${site.email}`} className="btn btn-outline w-full sm:w-auto">
            Report Issue
          </a>
        </div>
      </div>
    </section>
  );
}
