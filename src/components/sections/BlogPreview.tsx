import Image from "next/image";
import Link from "next/link";

import { blogPosts } from "@/data/blog";
import { ArrowRightIcon, ArrowUpRightIcon, SparklesIcon } from "@/components/ui/Icons";

export default function BlogPreview() {
  return (
    <section id="blog-preview" className="section-padding section-band">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="section-eyebrow">
              <SparklesIcon className="h-3.5 w-3.5" />
              <span>Technical Writing &amp; Reflections</span>
            </p>
            <h2 className="section-title mt-2">Latest Articles &amp; Insights</h2>
            <p className="mt-2 text-sm sm:text-base text-ink-secondary max-w-xl">
              Deep dives into operating systems, contest floor strategy, and web
              architecture.
            </p>
          </div>

          <div>
            <Link href="/blog" className="btn btn-outline text-xs font-semibold">
              <span>Explore All Posts</span>
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.slice(0, 3).map((post) => (
            <article
              key={post.slug}
              className="card-glass overflow-hidden flex flex-col justify-between group hover:border-accent-primary/40 transition-all"
            >
              <div>
                {/* Cover image if available */}
                {post.cover && (
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-bg-tertiary">
                    <Image
                      src={post.cover}
                      alt={post.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 rounded-full border border-white/20 bg-slate-950/80 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-400 backdrop-blur-md">
                      {post.category}
                    </div>
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-center justify-between text-xs text-ink-tertiary mb-2">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="font-display text-base font-bold text-ink-primary group-hover:text-accent-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-ink-secondary line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-primary hover:underline"
                >
                  <span>Read full article</span>
                  <ArrowUpRightIcon className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
