import Image from "next/image";

import { testimonials } from "@/data/testimonials";
import { SparklesIcon, StarIcon } from "@/components/ui/Icons";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding">
      <div className="container-x">
        <div className="text-center">
          <p className="section-eyebrow">
            <SparklesIcon className="h-3.5 w-3.5" />
            <span>Peer &amp; Collaborator Feedback</span>
          </p>
          <h2 className="section-title mt-2">Endorsements &amp; What People Say</h2>
          <p className="section-subtitle">
            Feedback from team leads, engineering collaborators, and hackathon teammates.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <article
              key={t.id}
              className="card-glass relative p-7 flex flex-col justify-between hover:border-accent-primary/40 group transition-all"
            >
              <div>
                {/* 5-star rating */}
                <div className="flex items-center gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4 text-accent-amber" />
                  ))}
                  <span className="ml-1 text-xs font-mono font-semibold text-ink-tertiary">
                    {t.rating}.0
                  </span>
                </div>

                {/* Quote text */}
                <p className="text-sm text-ink-secondary leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author info */}
              <div className="mt-6 pt-5 border-t border-border-subtle flex items-center gap-3.5">
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-border-subtle bg-bg-tertiary">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold text-ink-primary">
                    {t.name}
                  </h3>
                  <p className="text-xs text-ink-tertiary">
                    {t.role} •{" "}
                    <span className="text-accent-primary font-medium">{t.company}</span>
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
