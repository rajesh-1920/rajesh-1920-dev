import Image from "next/image";
import Link from "next/link";
import { useTheme } from "../layout/ThemeProvider";

export default function Hero() {
  const { theme } = useTheme();

  return (
    <section id="home" className="section-padding">
      <div className="container-x relative">
        <p className="section-eyebrow text-center text-accent-primary">Portfolio</p>
        <h1 className="section-title text-5xl font-extrabold md:text-6xl">
          Hi, I&apos;m <span className="text-accent-primary">Rajesh Biswas</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-ink-secondary md:max-w-2xl mx-auto">
          A Computer Science student passionate about solving complex problems through
          code. I specialize in competitive programming, machine learning, and building
          scalable web applications.
        </p>

        <div className="mt-12 md:flex md:items-center md:gap-8">
          <div className="hero-text md:w-1/2">
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary" data-scroll>
                View Projects
              </a>
              <a href="#contact" className="btn btn-outline ml-4" data-scroll>
                Contact Me
              </a>
            </div>
            <dl className="hero-stats mt-8 grid grid-cols-3 gap-4">
              <div className="hero-stat">
                <dt className="sr-only">Problems solved</dt>
                <dd className="hero-stat-value font-display font-bold text-2xl text-accent-primary">
                  2000+
                </dd>
                <dd className="hero-stat-label text-sm text-ink-tertiary">
                  Problems solved
                </dd>
              </div>
              <div className="hero-stat">
                <dt className="sr-only">Contests</dt>
                <dd className="hero-stat-value font-display font-bold text-2xl text-accent-primary">
                  100+
                </dd>
                <dd className="hero-stat-label text-sm text-ink-tertiary">Contests</dd>
              </div>
              <div className="hero-stat">
                <dt className="sr-only">Projects</dt>
                <dd className="hero-stat-value font-display font-bold text-2xl text-accent-primary">
                  6
                </dd>
                <dd className="hero-stat-label text-sm text-ink-tertiary">
                  Featured projects
                </dd>
              </div>
            </dl>
          </div>

          <div className="hero-image md:w-1/2 relative">
            <div className="absolute inset-0 rounded-xl overflow-hidden bg-bg-secondary">
              <Image
                src="/images/profile-picture.jpg"
                alt="Rajesh Biswas - Profile Picture"
                width={500}
                height={500}
                className="object-cover"
                priority
              />
            </div>
            <p className="absolute bottom-4 left-4 text-sm text-ink-tertiary">
              @rajesh_1920
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
