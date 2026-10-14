export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10">
      <div className="container-x grid gap-8 py-12 md:grid-cols-4">
        <div>
          <h3 className="font-display font-bold">Rajesh.dev</h3>
          <p className="mt-2 text-sm text-ink-secondary">
            Building awesome projects and solving challenging problems.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-1 text-sm text-ink-secondary">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Social</h3>
          <ul className="mt-2 space-y-1 text-sm text-ink-secondary">
            <li>
              <a href="#">GitHub</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">CodeForces</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Contact</h3>
          <ul className="mt-2 space-y-1 text-sm text-ink-secondary">
            <li>
              <a href="mailto:rajesh@example.com">rajesh@example.com</a>
            </li>
            <li>
              <a href="tel:+8801400234847">+8801400234847</a>
            </li>
            <li>Khulna, Bangladesh</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex items-center justify-between py-4 text-sm text-ink-tertiary">
          <p>&copy; {year} Rajesh Biswas. All rights reserved.</p>
          <a href="#home" aria-label="Back to top">
            ↑ Top
          </a>
        </div>
      </div>
    </footer>
  );
}
