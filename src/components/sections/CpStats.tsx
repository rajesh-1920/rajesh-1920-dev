import { cpStats } from "@/data/cpStats";
import {
  ArrowUpRightIcon,
  AwardIcon,
  CodeChefIcon,
  CodeforcesIcon,
  LeetCodeIcon,
  SparklesIcon,
  TrophyIcon,
} from "@/components/ui/Icons";

const platformBadges: Record<
  string,
  {
    theme: string;
    border: string;
    icon?: React.ComponentType<{ className?: string }>;
  }
> = {
  Codeforces: {
    theme: "border-cyan-500/30 bg-cyan-500/10 text-cyan-400",
    border: "hover:border-cyan-500/40",
    icon: CodeforcesIcon,
  },
  LeetCode: {
    theme: "border-orange-500/30 bg-orange-500/10 text-orange-400",
    border: "hover:border-orange-500/40",
    icon: LeetCodeIcon,
  },
  CodeChef: {
    theme: "border-amber-500/30 bg-amber-500/10 text-amber-400",
    border: "hover:border-amber-500/40",
    icon: CodeChefIcon,
  },
  "CSES & AtCoder": {
    theme: "border-violet-500/30 bg-violet-500/10 text-violet-400",
    border: "hover:border-violet-500/40",
  },
};

const cpHonors = [
  {
    icon: TrophyIcon,
    title: "ACM ICPC Regionalist (Asia West / Dhaka Regional)",
    year: "2024 & 2025",
    description:
      "Two-time participant in the ACM-ICPC Asia West / Dhaka Regional Onsite Contest, representing Patuakhali Science and Technology University.",
  },
  {
    icon: SparklesIcon,
    title: "15+ National Onsite IUPCs",
    year: "2023 – 2026",
    description:
      "Competed onsite in 15+ national Inter-University Programming Contests representing PSTU at BUET, KUET, CUET, and other venues.",
  },
  {
    icon: AwardIcon,
    title: "1st Runner-Up — Intra-University Programming Contest",
    year: "2025",
    description:
      "Secured 2nd place in the prestigious intra-university programming contest organized by the CSE Club, PSTU.",
  },
  {
    icon: AwardIcon,
    title: "Rising Junior Programmer & Top Performer",
    year: "2023 – 2026",
    description:
      "Awarded Rising Junior Programmer at PSTU IT Carnival (2023) and consistent top performer in university contests (2024–2026).",
  },
  {
    icon: AwardIcon,
    title: "BAPS National Programming Camp (Intermediate Track)",
    year: "2025",
    description:
      "Selected for and completed intensive intermediate algorithmic problem-solving camp at BUBT.",
  },
  {
    icon: TrophyIcon,
    title: "2,000+ Algorithmic Problems Solved",
    year: "Verified",
    description:
      "Comprehensive problem solving across Codeforces, LeetCode, CodeChef, AtCoder, CSES, LightOJ, and VJudge under handle rajesh_1920.",
  },
];

export default function CpStats() {
  return (
    <section id="cp" className="section-padding section-band">
      <div className="container-x">
        <div className="text-center">
          <p className="section-eyebrow">
            <TrophyIcon className="h-3.5 w-3.5 text-accent-amber" />
            <span>Competitive Programming Record</span>
          </p>
          <h2 className="section-title mt-2">
            Competitive Programming &amp; Problem Solving
          </h2>
          <p className="section-subtitle">
            Consistent contest participation across four major competitive platforms with
            over 2,000 solved problems under handle{" "}
            <span className="font-mono text-accent-primary font-bold">rajesh_1920</span>.
          </p>
        </div>

        {/* 4 Platform Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cpStats.map((stat) => {
            const styling = platformBadges[stat.platform] || {
              theme: "border-accent-primary/30 bg-accent-primary/10 text-accent-primary",
              border: "hover:border-accent-primary/40",
            };
            const Icon = styling.icon;

            return (
              <article
                key={stat.platform}
                className={`card-glass p-6 flex flex-col justify-between transition-all duration-300 ${styling.border}`}
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      {Icon && <Icon className="h-4 w-4" />}
                      <h3 className="font-display text-base font-bold text-ink-primary">
                        {stat.platform}
                      </h3>
                    </div>
                    {stat.link ? (
                      <a
                        href={stat.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-accent-primary hover:underline"
                        aria-label={`View ${stat.platform} profile`}
                      >
                        <span>Profile</span>
                        <ArrowUpRightIcon className="h-3 w-3" />
                      </a>
                    ) : (
                      <span className="text-xs text-ink-tertiary">Verified</span>
                    )}
                  </div>

                  {/* Primary Rating Display */}
                  <div className="rounded-xl border border-border-subtle bg-bg-tertiary/60 p-4 mb-4 text-center">
                    <p className="text-xs uppercase tracking-wider font-semibold text-ink-tertiary">
                      Rating / Performance
                    </p>
                    <p className="font-display text-2xl sm:text-3xl font-extrabold text-ink-primary mt-1">
                      {stat.rating}
                    </p>
                    <span
                      className={`inline-block mt-2 rounded-full border px-3 py-0.5 text-xs font-bold tracking-wide ${styling.theme}`}
                    >
                      {stat.badge}
                    </span>
                  </div>

                  {/* Stats list */}
                  <dl className="space-y-2 text-xs">
                    <div className="flex items-center justify-between py-1 border-b border-border-subtle">
                      <dt className="text-ink-tertiary">Problems Solved</dt>
                      <dd className="font-bold text-ink-primary font-mono">
                        {stat.problems}
                      </dd>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-border-subtle">
                      <dt className="text-ink-tertiary">Contests</dt>
                      <dd className="font-bold text-ink-primary font-mono">
                        {stat.contests}
                      </dd>
                    </div>
                    <div className="flex items-center justify-between py-1">
                      <dt className="text-ink-tertiary">Handle</dt>
                      <dd className="font-mono text-xs text-accent-primary font-semibold">
                        @{stat.handle}
                      </dd>
                    </div>
                  </dl>
                </div>
              </article>
            );
          })}
        </div>

        {/* Contest Honors & Highlights */}
        <div className="mt-14">
          <h3 className="font-display text-xl font-bold text-ink-primary text-center mb-8">
            Contest Honors &amp; Competitive Milestones
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {cpHonors.map((honor) => {
              const Icon = honor.icon;
              return (
                <div
                  key={honor.title}
                  className="card-glass p-5 flex flex-col justify-between hover:border-accent-primary/40 transition-colors"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-primary/10 text-accent-primary">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="shrink-0 text-xs font-mono font-medium text-accent-secondary">
                        {honor.year}
                      </span>
                    </div>

                    <h4 className="font-display text-sm font-bold text-ink-primary">
                      {honor.title}
                    </h4>

                    <p className="mt-2 text-xs text-ink-secondary leading-relaxed">
                      {honor.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
