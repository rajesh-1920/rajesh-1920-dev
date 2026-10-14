export default function About() {
  return (
    <section id="about" className="section-padding bg-alternate">
      <div className="container-x">
        <p className="section-eyebrow text-center">Background</p>
        <h2 className="section-title text-3xl font-extrabold text-center">About Me</h2>
        <p className="mt-4 text-center text-ink-secondary">
          CS student focused on algorithms, ML, and clean, scalable web apps.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Education */}
          <article className="bg-bg-secondary rounded-lg p-6">
            <h3 className="font-display font-semibold mb-2">Education</h3>
            <p className="text-base">
              Bachelor of Technology in Computer Science and Engineering
            </p>
            <p className="text-sm text-ink-tertiary">Currently Pursuing</p>
          </article>

          {/* Interests */}
          <article className="bg-bg-secondary rounded-lg p-6">
            <h3 className="font-display font-semibold mb-2">Interests</h3>
            <ul className="list-disc pl-5 space-y-2 text-ink-secondary">
              <li>Competitive Programming (Codeforces, AtCoder)</li>
              <li>Machine Learning & Data Science</li>
              <li>Full Stack Web Development</li>
            </ul>
          </article>

          {/* Career Goal */}
          <article className="bg-bg-secondary rounded-lg p-6">
            <h3 className="font-display font-semibold mb-2">Career Goals</h3>
            <p className="text-base">
              To develop expertise in software engineering and contribute to building
              scalable systems that impact millions of users worldwide.
            </p>
          </article>

          {/* Technical Strengths */}
          <article className="bg-bg-secondary rounded-lg p-6">
            <h3 className="font-display font-semibold mb-2">Strengths</h3>
            <ul className="list-disc pl-5 space-y-2 text-ink-secondary">
              <li>Problem-solving & Algorithms</li>
              <li>Software Architecture</li>
              <li>Rapid Learning</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
