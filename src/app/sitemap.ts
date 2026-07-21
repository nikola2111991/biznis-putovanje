import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

// Fiksni datum namerno (NE new Date()): Google gubi poverenje u sitemap
// ako se lastmod menja na svaki fetch. Azurirati rucno kad se struktura menja.
const LAST_MODIFIED = new Date("2026-07-21");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/momentum`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
