import { site } from "@/data/site";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10">
      <div className="container-x grid gap-8 py-12 md:grid-cols-4">
        <div>
          <h3 className="font-display font-bold">Rajesh.dev</h3>
          <p className="mt-2 text-sm text-ink-secondary">
            Building scalable systems and solving challenging problems.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-1 text-sm text-ink-secondary">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Social</h3>
          <ul className="mt-2 space-y-1 text-sm text-ink-secondary">
            {site.social.map((social) => (
              <li key={social.label}>
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Contact</h3>
          <ul className="mt-2 space-y-1 text-sm text-ink-secondary">
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
            </li>
            <li>{site.location}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex items-center justify-between py-4 text-sm text-ink-tertiary">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <a href="#home" aria-label="Back to top">
            &uarr; Top
          </a>
        </div>
      </div>
    </footer>
  );
}
