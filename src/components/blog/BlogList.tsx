"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { type BlogPost } from "@/data/blog";
import { ArrowRightIcon, CloseIcon } from "@/components/ui/Icons";

export function BlogList({ posts }: { posts: BlogPost[] }) {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="card-glass overflow-hidden flex flex-col justify-between group hover:border-accent-primary/40 transition-all cursor-pointer"
            onClick={() => setActivePost(post)}
          >
            <div>
              {post.cover && (
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-bg-tertiary">
                  <Image
                    src={post.cover}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 rounded-full border border-white/20 bg-slate-950/80 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-400 backdrop-blur-md">
                    {post.category}
                  </div>
                </div>
              )}

              <div className="p-6">
                <div className="flex items-center justify-between text-xs text-ink-tertiary mb-3">
                  <span className="font-semibold text-accent-secondary">
                    {post.readTime}
                  </span>
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                </div>

                <h2 className="font-display text-lg font-bold text-ink-primary group-hover:text-accent-primary transition-colors line-clamp-2">
                  {post.title}
                </h2>

                <p className="mt-3 text-sm text-ink-secondary line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                type="button"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-primary hover:underline"
              >
                <span>Read Full Article</span>
                <ArrowRightIcon className="h-3.5 w-3.5" />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Article Modal */}
      {activePost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-border-strong bg-bg-primary p-6 sm:p-10 shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-post-title"
          >
            <button
              type="button"
              onClick={() => setActivePost(null)}
              className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle bg-bg-secondary text-ink-secondary hover:text-ink-primary hover:border-accent-primary/40 focus:outline-none"
              aria-label="Close article modal"
            >
              <CloseIcon className="h-5 w-5" />
            </button>

            {activePost.cover && (
              <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl bg-bg-tertiary mb-6">
                <Image
                  src={activePost.cover}
                  alt={activePost.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <div className="flex items-center gap-3 text-xs text-ink-tertiary mb-3">
              <span className="rounded-full border border-accent-primary/30 bg-accent-primary/10 px-2.5 py-0.5 font-semibold text-accent-primary">
                {activePost.category}
              </span>
              <span>•</span>
              <span>{activePost.readTime}</span>
              <span>•</span>
              <time dateTime={activePost.date}>
                {new Date(activePost.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
            </div>

            <h1
              id="modal-post-title"
              className="font-display text-2xl sm:text-3xl font-extrabold text-ink-primary"
            >
              {activePost.title}
            </h1>

            <div
              className="mt-6 prose prose-invert max-w-none text-ink-secondary text-sm sm:text-base leading-relaxed space-y-4"
              dangerouslySetInnerHTML={{ __html: activePost.content }}
            />

            <div className="mt-8 pt-6 border-t border-border-subtle flex justify-between items-center">
              <Link
                href="/#contact"
                onClick={() => setActivePost(null)}
                className="text-xs font-semibold text-accent-primary hover:underline"
              >
                Have thoughts or questions? Contact Rajesh &rarr;
              </Link>

              <button
                type="button"
                onClick={() => setActivePost(null)}
                className="btn btn-outline !px-4 !py-2 text-xs"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
