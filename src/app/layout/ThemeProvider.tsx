"use client";

import { createContext, useCallback, useContext, useEffect, useState, useRef } from "react";

export type Theme = "dark" | "light";

const ThemeContext = createContext<{ theme: Theme; toggle: () => void }>({
  theme: "dark",
  toggle: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const themeRef = useRef<Theme | null>(null);

  useEffect(() => {
    if (themeRef.current === null && typeof window !== "undefined") {
      const saved = localStorage.getItem("portfolio-theme") as Theme | null;
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initial = saved ?? (prefersDark ? "dark" : "light");
      setTheme(initial);
      themeRef.current = initial;
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.classList.toggle("light", theme === "light");
    root.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggle = useCallback(
    () => setTheme((t) => (t === "dark" ? "light" : "dark")),
    []
  );

  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>;
}