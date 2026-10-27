import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-x">
        <p className="section-eyebrow text-center">Stack</p>
        <h2 className="section-title text-center font-extrabold">Technical Skills</h2>
        <p className="mt-4 text-center text-ink-secondary">
          A practical toolkit for contests, systems, and full-stack delivery.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div key={category.title} className="rounded-lg bg-bg-secondary p-6">
              <h3 className="mb-4 font-display font-medium">{category.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md bg-bg-tertiary px-2.5 py-1 text-xs text-ink-secondary"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
