import { cv } from "@/data/cv";
import {
  BriefcaseIcon,
  CheckIcon,
  GraduationCapIcon,
  SparklesIcon,
} from "@/components/ui/Icons";

export default function Experience() {
  const { professionalExperience, leadership } = cv;

  return (
    <section id="experience" className="section-padding">
      <div className="container-x">
        <div className="text-center">
          <p className="section-eyebrow">
            <SparklesIcon className="h-3.5 w-3.5" />
            <span>Proven Track Record</span>
          </p>
          <h2 className="section-title mt-2">Professional Experience &amp; Leadership</h2>
          <p className="section-subtitle">
            Hands-on engineering across scaled production systems, browser extensions, and
            university technical leadership.
          </p>
        </div>

        <div className="mt-14 max-w-4xl mx-auto space-y-8">
          {/* Work Experience Items */}
          {professionalExperience.map((job) => (
            <article
              key={`${job.role}-${job.company}`}
              className="card-glass relative p-6 sm:p-8 hover:border-accent-primary/40 group"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 border-b border-border-subtle pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-primary/10 text-accent-primary">
                      <BriefcaseIcon className="h-4 w-4" />
                    </span>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-ink-primary group-hover:text-accent-primary transition-colors">
                      {job.role}
                    </h3>
                  </div>
                  <p className="mt-1 text-sm font-semibold text-accent-secondary">
                    {job.company}
                  </p>
                </div>
                <div className="sm:text-right">
                  <span className="inline-block rounded-full border border-border-strong bg-bg-tertiary px-3 py-1 text-xs font-mono font-medium text-ink-tertiary">
                    {job.period}
                  </span>
                </div>
              </div>

              {/* Technologies */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {job.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border-subtle bg-bg-tertiary px-2.5 py-1 text-xs font-mono text-ink-secondary"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Bullet Points */}
              <ul className="mt-5 space-y-2.5">
                {job.description.map((desc, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-sm text-ink-secondary leading-relaxed"
                  >
                    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent-primary/10 text-accent-primary">
                      <CheckIcon className="h-3 w-3" />
                    </span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}

          {/* Leadership Section */}
          <div className="pt-6">
            <h3 className="font-display text-xl font-bold text-ink-primary mb-4 flex items-center gap-2">
              <GraduationCapIcon className="h-5 w-5 text-accent-primary" />
              <span>Community &amp; Club Leadership</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {leadership.map((lead) => (
                <div
                  key={`${lead.role}-${lead.organization}`}
                  className="card-glass p-6 flex flex-col justify-between hover:border-accent-tertiary/40"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-display text-base font-bold text-ink-primary">
                        {lead.role}
                      </h4>
                      <span className="shrink-0 text-xs font-mono text-ink-tertiary">
                        {lead.period}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-accent-tertiary mt-0.5">
                      {lead.organization}
                    </p>
                    <p className="mt-3 text-xs sm:text-sm text-ink-secondary leading-relaxed">
                      {lead.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
