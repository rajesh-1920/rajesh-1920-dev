import {
  AwardIcon,
  CodeIcon,
  CpuIcon,
  GraduationCapIcon,
  MapPinIcon,
  SparklesIcon,
  TerminalIcon,
} from "@/components/ui/Icons";

const bentoHighlights = [
  {
    icon: CodeIcon,
    title: "Algorithmic Problem Solving",
    tag: "2,000+ Solved",
    accent: "text-accent-primary",
    border: "group-hover:border-accent-primary/40",
    description:
      "Deep algorithmic intuition sharpened over 100+ rated contests. Fluent with dynamic programming, graph algorithms, segment trees, number theory, and edge-case dissection under strict time limits.",
  },
  {
    icon: CpuIcon,
    title: "Low-Level & Systems Engineering",
    tag: "x86-64 Kernel",
    accent: "text-accent-secondary",
    border: "group-hover:border-accent-secondary/40",
    description:
      "Engineered NovaOS — a 64-bit operating system kernel in C and NASM booting via Limine. Comfortable with pointers, memory layout, framebuffers, assembly, and operating system internals.",
  },
  {
    icon: TerminalIcon,
    title: "Full-Stack & Mobile Delivery",
    tag: "540+ Commits",
    accent: "text-emerald-400",
    border: "group-hover:border-emerald-400/40",
    description:
      "Proven production execution with Next.js 16, React 19, Flutter, and Node.js. Built complex RBAC access systems (24 modules), SSLCommerz payment reconciliation, and Chrome extensions.",
  },
  {
    icon: AwardIcon,
    title: "Leadership & Community",
    tag: "PSTU CSE Club AGS",
    accent: "text-accent-tertiary",
    border: "group-hover:border-accent-tertiary/40",
    description:
      "Serving as Assistant General Secretary of the PSTU CSE Club. Spearheading programming bootcamps, organizing university contest rounds, and mentoring 100+ junior competitive programmers.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding section-band">
      <div className="container-x">
        <div className="text-center">
          <p className="section-eyebrow">
            <SparklesIcon className="h-3.5 w-3.5" />
            <span>Background &amp; Philosophy</span>
          </p>
          <h2 className="section-title mt-2">About Me</h2>
          <p className="section-subtitle">
            Bridging theoretical computer science and algorithmic discipline with
            production-grade software engineering.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Narrative & Key Facts */}
          <div className="lg:col-span-5 space-y-6">
            <div className="card-glass p-6 sm:p-8 space-y-5">
              <h3 className="font-display text-xl font-bold text-ink-primary">
                Passionate about Hard Problems &amp; Clean Systems
              </h3>
              <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
                I am a final-year Computer Science &amp; Engineering undergraduate at
                Patuakhali Science and Technology University (PSTU). My journey began with
                competitive programming, where I discovered the elegance of algorithms and
                the discipline required to write bug-free code under extreme pressure.
              </p>
              <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
                Rather than treating algorithms as abstract academic exercises, I channel
                that same analytical precision into production software engineering —
                whether that means architecting resilient web micro-flows, designing
                mobile user experiences, or exploring how an OS boots from bare metal into
                64-bit long mode.
              </p>

              {/* Quick facts pill list */}
              <div className="pt-2 border-t border-border-subtle space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <GraduationCapIcon className="h-4 w-4 text-accent-primary shrink-0" />
                  <div>
                    <span className="font-semibold text-ink-primary">B.Sc. in CSE: </span>
                    <span className="text-ink-secondary">
                      PSTU (7th Sem, CGPA 3.41 / 4.00)
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <MapPinIcon className="h-4 w-4 text-accent-secondary shrink-0" />
                  <div>
                    <span className="font-semibold text-ink-primary">Location: </span>
                    <span className="text-ink-secondary">
                      Khulna, Bangladesh (Open to Remote / Relocation)
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <AwardIcon className="h-4 w-4 text-accent-tertiary shrink-0" />
                  <div>
                    <span className="font-semibold text-ink-primary">Honors: </span>
                    <span className="text-ink-secondary">
                      Two-Time ICPC Regionalist (2024 &amp; 2025)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bento Highlights */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {bentoHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`card-glass group p-6 flex flex-col justify-between ${item.border}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-bg-tertiary border border-border-subtle group-hover:scale-105 transition-transform">
                        <Icon className={`h-5 w-5 ${item.accent}`} />
                      </div>
                      <span className="rounded-full border border-border-subtle bg-bg-tertiary px-2.5 py-0.5 text-[11px] font-semibold text-ink-secondary">
                        {item.tag}
                      </span>
                    </div>

                    <h4 className="font-display text-base font-bold text-ink-primary group-hover:text-accent-primary transition-colors">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-xs sm:text-sm text-ink-secondary leading-relaxed">
                      {item.description}
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
