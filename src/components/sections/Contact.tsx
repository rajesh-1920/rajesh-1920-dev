"use client";

import { useState } from "react";

import { site } from "@/data/site";

const statusStyles = {
  success: "bg-accent-primary/10 text-accent-primary",
  error: "bg-accent-tertiary/10 text-accent-tertiary",
} as const;

type Status = keyof typeof statusStyles;

export default function Contact() {
  const [status, setStatus] = useState<{ type: Status; text: string } | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !subject || !message) {
      setStatus({ type: "error", text: "Please fill in every field before sending." });
      return;
    }

    const body = `${message}\n\n— ${name}\nReply to: ${email}`;
    const href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = href;
    setStatus({
      type: "success",
      text: `Your email app should open with the message ready to send. If it doesn't, write to ${site.email} directly.`,
    });
    e.currentTarget.reset();
  };

  const cards = [
    { title: "Email", value: site.email, href: `mailto:${site.email}` },
    { title: "Phone", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
    { title: "Location", value: site.location },
  ];

  return (
    <section id="contact" className="section-padding section-band">
      <div className="container-x">
        <p className="section-eyebrow text-center">Contact</p>
        <h2 className="section-title text-center font-extrabold">Get in Touch</h2>
        <p className="mt-4 text-center text-ink-secondary">
          Have a question or want to collaborate? Feel free to reach out!
        </p>

        <div className="mx-auto mt-8 max-w-md">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                className="form-input"
                placeholder="John Doe"
                required
                autoComplete="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="form-input"
                placeholder="your.email@example.com"
                required
                autoComplete="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                name="subject"
                className="form-input"
                placeholder="What is this about?"
                required
                autoComplete="off"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="form-input form-textarea"
                placeholder="Your message here..."
                rows={6}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary mt-4 w-full">
              Send Message
            </button>
          </form>

          {status && (
            <p
              role="status"
              className={`mt-6 rounded-lg p-4 text-center text-sm ${statusStyles[status.type]}`}
            >
              {status.text}
            </p>
          )}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <div key={card.title} className="rounded-lg bg-bg-secondary p-6">
              <h3 className="mb-2 font-semibold">{card.title}</h3>
              {card.href ? (
                <a
                  href={card.href}
                  className="text-accent-primary hover:underline"
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {card.value}
                </a>
              ) : (
                <p className="text-ink-secondary">{card.value}</p>
              )}
            </div>
          ))}

          <div className="rounded-lg bg-bg-secondary p-6">
            <h3 className="mb-2 font-semibold">Social</h3>
            <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
              {site.social.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-primary hover:underline"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
