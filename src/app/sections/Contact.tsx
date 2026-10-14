"use client";

import { useState } from "react";
import Image from "next/image";
import { site } from "../../data/site";

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [messageType, setMessageType] = useState<string>("success");
  const [messageText, setMessageText] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = {
      name: (e.currentTarget.elements.namedItem("name") as HTMLInputElement).value.trim(),
      email: (e.currentTarget.elements.namedItem("email") as HTMLInputElement).value.trim(),
      subject: (e.currentTarget.elements.namedItem("subject") as HTMLInputElement).value.trim(),
      message: (e.currentTarget.elements.namedItem("message") as HTMLTextAreaElement).value.trim(),
    };

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setShowMessage(true);
    setMessageType("success");
    setMessageText(
      "Thank you! Your message has been sent successfully. I'll get back to you soon!",
    );
    setSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding bg-alternate">
      <div className="container-x">
        <p className="section-eyebrow text-center">Contact</p>
        <h2 className="section-title text-3xl font-extrabold text-center">
          Get in Touch
        </h2>
        <p className="mt-4 text-center text-ink-secondary">
          Have a question or want to collaborate? Feel free to reach out!
        </p>

        <div className="mt-8 max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                name="name"
                className="form-input"
                placeholder="John Doe"
                required
                autoComplete="name"
              />
              <span className="form-error" id="name-error"></span>
            </div>

            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="your.email@example.com"
                required
                autoComplete="email"
              />
              <span className="form-error" id="email-error"></span>
            </div>

            <div className="form-group">
              <label className="form-label">Subject</label>
              <input
                type="text"
                name="subject"
                className="form-input"
                placeholder="What is this about?"
                required
                autoComplete="subject"
              />
              <span className="form-error" id="subject-error"></span>
            </div>

            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                name="message"
                className="form-input form-textarea"
                placeholder="Your message here..."
                rows={6}
                required
                autoComplete="message"
              ></textarea>
              <span className="form-error" id="message-error"></span>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full mt-4"
              disabled={submitting}
            >
              <span className="btn-text">Send Message</span>
              <span className="btn-loader hidden" />
            </button>
          </form>

          {showMessage && (
            <div className="mt-6 p-4 rounded-lg text-center">
              <span className={`text-${messageType} font-medium`}>
                {messageText}
              </span>
            </div>
          )}
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="contact-card bg-bg-secondary rounded-lg p-6">
            <h3 className="contact-card-title">Email</h3>
            <a
              href="mailto:rajesh@example.com"
              className="contact-value"
            >
              rajesh@example.com
            </a>
          </div>

          <div className="contact-card bg-bg-secondary rounded-lg p-6">
            <h3 className="contact-card-title">Phone</h3>
            <a
              href="tel:+8801400234847"
              className="contact-value"
            >
              +8801400234847
            </a>
          </div>

          <div className="contact-card bg-bg-secondary rounded-lg p-6">
            <h3 className="contact-card-title">Location</h3>
            <p className="contact-value">Khulna, Bangladesh</p>
          </div>

          <div className="contact-card bg-bg-secondary rounded-lg p-6">
            <h3 className="contact-card-title">Social</h3>
            <div className="social-links">
              {site.social.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="social-link"
                  aria-label={social.label}
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}