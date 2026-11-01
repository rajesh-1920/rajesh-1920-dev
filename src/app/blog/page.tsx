import Link from "next/link";

import { blogPosts } from "@/data/blog";
import { SEO } from "@/components/layout/SEO";
import { BlogList } from "@/components/blog/BlogList";
import { SparklesIcon } from "@/components/ui/Icons";

export const metadata = SEO({
  title: "Blog & Technical Notes",
  description:
    "Engineering notes, contest reflections, and system architecture breakdowns by Rajesh Biswas.",
});

export default function BlogPage() {
  return (
    <section className="section-padding ambient-glow min-h-screen">
      <div className="container-x">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-secondary hover:text-accent-primary transition-colors"
          >
            &larr; Back to Portfolio
          </Link>

          <span className="text-xs text-ink-tertiary">
            Showing {blogPosts.length} published articles
          </span>
        </div>

        <div className="text-center mb-16">
          <p className="section-eyebrow">
            <SparklesIcon className="h-3.5 w-3.5" />
            <span>Technical Insights</span>
          </p>
          <h1 className="section-title mt-2 text-4xl sm:text-5xl lg:text-6xl">
            Blog &amp; Field Notes
          </h1>
          <p className="section-subtitle">
            Reflections on competitive programming, low-level kernel development, and
            scalable web platforms.
          </p>
        </div>

        <BlogList posts={blogPosts} />
      </div>
    </section>
  );
}
