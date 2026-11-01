"use client";

import { useEffect, useState } from "react";

export function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setProgress(height ? (winScroll / height) * 100 : 0);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-accent-primary via-emerald-400 to-accent-secondary z-50 transition-all duration-150"
      style={{ width: `${progress}%` }}
      role="progressbar"
      aria-label="Scroll progress"
    />
  );
}
