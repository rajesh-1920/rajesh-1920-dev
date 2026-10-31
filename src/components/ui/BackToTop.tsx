"use client";

import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 rounded-lg bg-accent-primary text-slate-950 px-4 py-3 text-sm font-semibold shadow-lg hover:bg-accent-primary/90 transition focus:outline-none focus:ring-2 focus:ring-accent-primary"
      aria-label="Back to top"
    >
      ↑ Top
    </button>
  );
}
