import type { MetadataRoute } from "next";

import { site } from "@/data/site";

// Required for `output: "export"` (GitHub Pages) — also prerenders on Vercel.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
