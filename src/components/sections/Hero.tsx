import Image from "next/image";

import { basePath, site } from "@/data/site";
import { projects } from "@/data/projects";

const stats = [
  { value: "2000+", label: "Problems solved" },
  { value: "100+", label: "Contests" },
  { value: String(projects.length), label: "Featured projects" },
];

export default function Hero() {
  return (
    <section id="home" className="section-padding">
      <div className="container-x">
        <p className="section-eyebrow text-center">Portfolio</p>
        <h1 className="section-title text-center text-5xl font-extrabold md:text-6xl">
          Hi, I&apos;m <span className="text-accent-primary">{site.name}</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-secondary md:text-xl">
          A Computer Science student passionate about solving complex problems through
          code. I specialize in competitive programming, machine learning, and building
          scalable web applications.
        </p>

        <div className="mt-12 md:flex md:items-center md:gap-8">
          <div className="md:w-1/2">
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn btn-primary">
                View Projects
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact Me
              </a>
            </div>
            <dl className="mt-8 grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-2xl font-bold text-accent-primary">
                    {stat.value}
                  </dd>
                  <dd className="text-sm text-ink-tertiary">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mt-12 md:mt-0 md:w-1/2">
            <div className="relative aspect-square overflow-hidden rounded-xl bg-bg-secondary">
              <Image
                src={`${basePath}/images/profile-picture.jpg`}
                alt={`${site.name} - Profile Picture`}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
                priority
              />
              <p className="absolute bottom-4 left-4 text-sm text-ink-tertiary">
                @rajesh_1920
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
