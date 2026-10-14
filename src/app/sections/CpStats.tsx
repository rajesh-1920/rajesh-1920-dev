"use client";

import { cpStats } from "../../data/cpStats";

export default function CpStats() {
  return (
    <section id="cp" className="section-padding">
      <div className="container-x">
        <p className="section-eyebrow text-center">Proof of practice</p>
        <h2 className="section-title text-3xl font-extrabold text-center">
          Competitive Programming
        </h2>
        <p className="mt-4 text-center text-ink-secondary">
          Consistent contest participation across four platforms.
        </p>

        <div className="cp-stats-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {cpStats.map((stat) => (
            <article
              key={stat.platform}
              className="cp-card bg-bg-secondary rounded-lg p-6"
            >
              <div className="cp-header">
                <h3 className="cp-platform font-display font-medium">{stat.platform}</h3>
                {stat.link && (
                  <a
                    href={stat.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cp-link text-sm text-accent-primary"
                  >
                    Visit Profile →
                  </a>
                )}
              </div>

              <div className="cp-stat">
                <span className="cp-label text-sm text-ink-tertiary">Current Rating</span>
                <span className="cp-value font-display font-bold text-2xl">
                  {stat.rating}
                </span>
              </div>

              <div className="cp-stat">
                <span className="cp-label text-sm text-ink-tertiary">
                  Contests Participated
                </span>
                <span className="cp-value font-display font-bold text-2xl">
                  {stat.contests}
                </span>
              </div>

              <div className="cp-stat">
                <span className="cp-label text-sm text-ink-tertiary">
                  Problems Solved
                </span>
                <span className="cp-value font-display font-bold text-2xl">
                  {stat.problems}
                </span>
              </div>

              <div className={`cp-badge ${stat.badge.toLowerCase()}`}>{stat.badge}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
