/**
 * Theme Module
 * Handles dark/light mode toggling and persistence
 */

const Theme = (() => {
  const THEME_KEY = "portfolio-theme";
  const DARK = "dark";
  const LIGHT = "light";
  const ICONS = {
    dark: '<svg class="theme-icon-svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>',
    light:
      '<svg class="theme-icon-svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
  };

  /**
   * Initialize theme from localStorage or system preference
   */
  const init = () => {
    const themeBtn = document.getElementById("theme-btn");

    if (!themeBtn) return;

    // Check saved preference or system preference
    const savedTheme = localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = savedTheme || (prefersDark ? DARK : LIGHT);

    setTheme(theme);

    // Event listeners
    themeBtn.addEventListener("click", toggle);

    // Listen for system theme changes
    window.matchMedia("(prefers-color-scheme: dark)").addListener((e) => {
      if (!localStorage.getItem(THEME_KEY)) {
        setTheme(e.matches ? DARK : LIGHT);
      }
    });
  };

  /**
   * Set theme and update DOM/localStorage
   */
  const setTheme = (theme) => {
    const html = document.documentElement;
    const themeBtn = document.getElementById("theme-btn");

    // Update data attribute
    html.setAttribute("data-theme", theme);

    // Update localStorage
    localStorage.setItem(THEME_KEY, theme);

    // Update button icon
    if (themeBtn) {
      themeBtn.innerHTML = theme === DARK ? ICONS.dark : ICONS.light;
      themeBtn.setAttribute(
        "aria-label",
        theme === DARK ? "Switch to light mode" : "Switch to dark mode",
      );
      themeBtn.setAttribute("aria-pressed", theme === LIGHT ? "true" : "false");
    }

    // Dispatch custom event
    window.dispatchEvent(new CustomEvent("themechange", { detail: { theme } }));
  };

  /**
   * Toggle between dark and light mode
   */
  const toggle = () => {
    const html = document.documentElement;
    const currentTheme = html.getAttribute("data-theme") || DARK;
    const newTheme = currentTheme === DARK ? LIGHT : DARK;

    setTheme(newTheme);
  };

  /**
   * Get current theme
   */
  const getTheme = () => {
    return document.documentElement.getAttribute("data-theme") || DARK;
  };

  return {
    init,
    toggle,
    getTheme,
    setTheme,
  };
})();

// Initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", Theme.init);
} else {
  Theme.init();
}
