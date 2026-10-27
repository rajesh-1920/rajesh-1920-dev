import { cpStats, type CpStat } from "@/data/cpStats";

const toneClasses: Record<NonNullable<CpStat["tone"]>, string> = {
  specialist: "bg-accent-primary/15 text-accent-primary",
  advanced: "bg-accent-secondary/15 text-accent-secondary",
  intermediate: "bg-accent-tertiary/15 text-accent-tertiary",
};

export default function CpStats() {
  return (
    <section id="cp" className="section-padding">
      <div className="container-x">
        <p className="section-eyebrow text-center">Proof of practice</p>
        <h2 className="section-title text-center font-extrabold">
          Competitive Programming
        </h2>
        <p className="mt-4 text-center text-ink-secondary">
          Consistent contest participation across four platforms.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cpStats.map((stat) => (
            <article
              key={stat.platform}
              className="flex flex-col gap-4 rounded-lg bg-bg-secondary p-6"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-display font-medium">{stat.platform}</h3>
                {stat.link && (
                  <a
                    href={stat.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accent-primary hover:underline"
                  >
                    Profile &rarr;
                  </a>
                )}
              </div>

              <dl className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <dt className="text-ink-tertiary">Rating</dt>
                  <dd className="font-display text-xl font-bold">{stat.rating}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-ink-tertiary">Contests</dt>
                  <dd className="font-display text-xl font-bold">{stat.contests}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-ink-tertiary">Problems</dt>
                  <dd className="font-display text-xl font-bold">{stat.problems}</dd>
                </div>
              </dl>

              <span
                className={`mt-auto w-fit rounded-md px-2.5 py-1 text-xs font-semibold ${
                  toneClasses[stat.tone ?? "intermediate"]
                }`}
              >
                {stat.badge}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
