import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Rajesh Biswas - Portfolio",
  description:
    "Rajesh Biswas - Competitive Programmer, Machine Learning Enthusiast, Full Stack Developer. Showcase of projects, skills, and competitive programming achievements.",
  keywords: ["portfolio", "developer", "competitive programming", "machine learning", "full stack"],
  authors: [{ name: "Rajesh Biswas" }],
  openGraph: {
    title: "Rajesh Biswas - Portfolio",
    description:
      "Computer Science Student | Competitive Programmer | Problem Solver | Full Stack Developer",
    type: "website",
  },
  icons: { icon: "/favicon.svg" },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-black"
          >
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
