"use client";

import { useState } from "react";

import { site } from "@/data/site";
import {
  CheckIcon,
  CodeChefIcon,
  CodeforcesIcon,
  CopyIcon,
  GithubIcon,
  LeetCodeIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  SparklesIcon,
} from "@/components/ui/Icons";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const copyEmail = () => {
    navigator.clipboard.writeText(site.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !subject || !message) {
      setStatus({
        type: "error",
        text: "Please complete all fields before sending.",
      });
      return;
    }

    if (message.length < 10) {
      setStatus({
        type: "error",
        text: "Please write a message with at least 10 characters.",
      });
      return;
    }

    setSubmitting(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const json = await res.json();

      if (!res.ok) {
        setStatus({
          type: "error",
          text: json.error ?? "Failed to send message.",
        });
        return;
      }

      if (json.mailto) {
        window.location.href = json.mailto;
      }

      setStatus({
        type: "success",
        text: `Thank you, ${name}! Your message was received. I will reply to ${email} promptly.`,
      });
      form.reset();
    } catch {
      setStatus({
        type: "error",
        text: "Network error occurred. Please reach out to me directly at " + site.email,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding section-band">
      <div className="container-x">
        <div className="text-center">
          <p className="section-eyebrow">
            <SparklesIcon className="h-3.5 w-3.5" />
            <span>Direct Communication</span>
          </p>
          <h2 className="section-title mt-2">Get in Touch</h2>
          <p className="section-subtitle">
            Open to software engineering roles, technical internships, and collaborative
            projects. Let&apos;s build something great.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info & Quick Copy */}
          <div className="lg:col-span-5 space-y-6">
            <div className="card-glass p-6 sm:p-8 space-y-6">
              <div>
                <h3 className="font-display text-xl font-bold text-ink-primary">
                  Let&apos;s talk engineering
                </h3>
                <p className="mt-2 text-sm text-ink-secondary leading-relaxed">
                  I typically respond within 24 hours. Feel free to send an email, copy my
                  address directly, or reach out on LinkedIn or GitHub.
                </p>
              </div>

              {/* Click to Copy Email Card */}
              <div className="rounded-2xl border border-border-strong bg-bg-tertiary/70 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-primary/10 text-accent-primary">
                      <MailIcon className="h-5 w-5" />
                    </div>
                    <div className="truncate">
                      <p className="text-[11px] uppercase font-semibold text-ink-tertiary">
                        Primary Email
                      </p>
                      <a
                        href={`mailto:${site.email}`}
                        className="font-mono text-sm font-bold text-ink-primary hover:text-accent-primary transition-colors truncate block"
                      >
                        {site.email}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={copyEmail}
                    className="shrink-0 flex items-center gap-1.5 rounded-lg border border-border-subtle bg-bg-secondary px-3 py-1.5 text-xs font-semibold text-ink-primary hover:border-accent-primary/50 transition-colors"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <>
                        <CheckIcon className="h-3.5 w-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <CopyIcon className="h-3.5 w-3.5 text-ink-secondary" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Contact Info List */}
              <div className="space-y-4 pt-2 border-t border-border-subtle">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-bg-tertiary text-accent-secondary border border-border-subtle">
                    <PhoneIcon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs text-ink-tertiary">Phone / WhatsApp</p>
                    <a
                      href={`tel:${site.phone.replace(/\s/g, "")}`}
                      className="text-sm font-semibold text-ink-primary hover:text-accent-primary transition-colors"
                    >
                      {site.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-bg-tertiary text-accent-tertiary border border-border-subtle">
                    <MapPinIcon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs text-ink-tertiary">Location &amp; Timezone</p>
                    <p className="text-sm font-semibold text-ink-primary">
                      {site.location}{" "}
                      <span className="text-xs text-ink-tertiary">(UTC+6)</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-border-subtle">
                <p className="text-xs uppercase font-semibold text-ink-tertiary tracking-wider mb-3">
                  Connect on Platforms:
                </p>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://github.com/rajesh-1920"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-lg border border-border-subtle bg-bg-tertiary px-3 py-1.5 text-xs text-ink-secondary hover:text-ink-primary hover:border-accent-primary/40 transition-colors"
                  >
                    <GithubIcon className="h-3.5 w-3.5" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://codeforces.com/profile/rajesh_1920"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-lg border border-border-subtle bg-bg-tertiary px-3 py-1.5 text-xs text-ink-secondary hover:text-ink-primary hover:border-accent-primary/40 transition-colors"
                  >
                    <CodeforcesIcon className="h-3.5 w-3.5 text-accent-secondary" />
                    <span>Codeforces</span>
                  </a>
                  <a
                    href="https://leetcode.com/u/rajesh_1920/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-lg border border-border-subtle bg-bg-tertiary px-3 py-1.5 text-xs text-ink-secondary hover:text-ink-primary hover:border-accent-primary/40 transition-colors"
                  >
                    <LeetCodeIcon className="h-3.5 w-3.5 text-amber-400" />
                    <span>LeetCode</span>
                  </a>
                  <a
                    href="https://www.codechef.com/users/rajesh_1920"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-lg border border-border-subtle bg-bg-tertiary px-3 py-1.5 text-xs text-ink-secondary hover:text-ink-primary hover:border-accent-primary/40 transition-colors"
                  >
                    <CodeChefIcon className="h-3.5 w-3.5 text-amber-500" />
                    <span>CodeChef</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rajesh-biswas-8b9780312"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-lg border border-border-subtle bg-bg-tertiary px-3 py-1.5 text-xs text-ink-secondary hover:text-ink-primary hover:border-accent-primary/40 transition-colors"
                  >
                    <LinkedinIcon className="h-3.5 w-3.5 text-sky-400" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="card-glass p-6 sm:p-8">
              <form onSubmit={handleSubmit} noValidate>
                {/* Form Alert Status */}
                {status && (
                  <div
                    className={`mb-6 rounded-xl border p-4 text-sm ${
                      status.type === "success"
                        ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                        : "border-red-500/30 bg-red-500/10 text-red-400"
                    }`}
                    role="alert"
                  >
                    {status.text}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Your Name <span className="text-accent-primary">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      placeholder="Jane Doe"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email Address <span className="text-accent-primary">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="jane@example.com"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Subject <span className="text-accent-primary">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    required
                    placeholder="Software Engineering Opportunity / Project Inquiry"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message <span className="text-accent-primary">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Hello Rajesh, I'd like to discuss an opportunity regarding..."
                    className="form-input form-textarea"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn btn-primary w-full py-3.5 text-base shadow-lg justify-center disabled:opacity-50"
                >
                  {submitting ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="h-4 w-4 animate-spin text-slate-950"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending Message...
                    </span>
                  ) : (
                    <span>Send Message &rarr;</span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
