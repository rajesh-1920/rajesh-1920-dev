import Image from "next/image";

import { blogPosts } from "@/data/blog";
import { SEO } from "@/components/layout/SEO";

export const metadata = SEO({
  title: "Blog",
  description:
    "Thoughts on competitive programming, systems programming, and full-stack web development.",
});

export default function BlogPage() {
  return (
    <section className="section-padding">
      <div className="container-x">
        <div className="text-center mb-16">
          <p className="section-eyebrow text-center">Thoughts</p>
          <h1 className="section-title text-center text-5xl font-extrabold md:text-6xl">
            Blog
          </h1>
          <p className="mt-4 text-center text-ink-secondary max-w-2xl mx-auto">
            Notes on competitive programming, systems programming, and building full-stack
            web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col rounded-lg bg-bg-secondary p-6 border border-white/5 hover:border-accent-primary/30 transition"
            >
              {post.cover && (
                <div className="mb-4 rounded-lg overflow-hidden aspect-[16/9] bg-bg-tertiary">
                  <Image
                    src={post.cover}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-accent-secondary uppercase tracking-wider">
                  {post.category}
                </span>
                <span className="text-xs text-ink-tertiary">{post.readTime}</span>
              </div>
              <h2 className="mb-3 text-xl font-display font-bold text-ink-primary">
                {post.title}
              </h2>
              <p className="mb-6 flex-1 text-sm text-ink-secondary line-clamp-4">
                {post.excerpt}
              </p>
              <div className="mt-auto">
                <time dateTime={post.date} className="text-xs text-ink-tertiary">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
