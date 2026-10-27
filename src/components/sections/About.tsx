const cards = [
  {
    title: "Education",
    body: (
      <>
        <p>B.Sc. in Computer Science &amp; Engineering</p>
        <p className="text-sm text-ink-tertiary">
          Patuakhali Science and Technology University — 7th Semester
        </p>
      </>
    ),
  },
  {
    title: "Interests",
    body: (
      <ul className="list-disc space-y-2 pl-5 text-ink-secondary">
        <li>Competitive Programming (Codeforces, AtCoder)</li>
        <li>Low-level &amp; systems programming</li>
        <li>Full Stack Web Development</li>
      </ul>
    ),
  },
  {
    title: "Career Goal",
    body: (
      <p>
        To develop expertise in software engineering and contribute to building scalable
        systems that impact millions of users worldwide.
      </p>
    ),
  },
  {
    title: "Strengths",
    body: (
      <ul className="list-disc space-y-2 pl-5 text-ink-secondary">
        <li>Problem-solving &amp; Algorithms</li>
        <li>Software Architecture</li>
        <li>Rapid Learning</li>
      </ul>
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding section-band">
      <div className="container-x">
        <p className="section-eyebrow text-center">Background</p>
        <h2 className="section-title text-center text-3xl font-extrabold">About Me</h2>
        <p className="mt-4 text-center text-ink-secondary">
          CS student focused on algorithms, systems, and clean, scalable web apps.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {cards.map((card) => (
            <article key={card.title} className="rounded-lg bg-bg-secondary p-6">
              <h3 className="mb-2 font-display font-semibold">{card.title}</h3>
              <div className="text-base text-ink-secondary">{card.body}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
