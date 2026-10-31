import Image from "next/image";

import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding section-band">
      <div className="container-x">
        <p className="section-eyebrow text-center">Trusted by peers</p>
        <h2 className="section-title text-center font-extrabold">What People Say</h2>
        <p className="mt-4 text-center text-ink-secondary">
          Collaborations, projects, and competitive-programming teams.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.id}
              className="rounded-lg bg-bg-secondary p-8 border border-white/5"
            >
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover"
                  priority
                />
                <div>
                  <h3 className="font-medium text-ink-primary">{t.name}</h3>
                  <p className="text-xs text-ink-tertiary">{t.role}</p>
                </div>
              </div>
              <div className="flex items-end gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-accent-primary fill-current"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.032.098.032.197.032.296v1.823a1 1 0 01-1.579 1.05l-2.8-2.034a1 1 0 00-1.171 0l-2.8 2.034a1 1 0 01-1.579-1.05V8.664c0-.099 0-.197.032-.296l1.07-3.292a1 1 0 00-.364-1.118L4.325 8.121c-.783-.57-.381-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-1 text-sm text-ink-tertiary">{t.rating}.0</span>
              </div>
              <p className="text-ink-secondary italic">{t.quote}</p>
              <div className="mt-6 pt-6 border-t border-white/5">
                <span className="text-xs font-semibold text-accent-primary uppercase tracking-wider">
                  {t.company}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
