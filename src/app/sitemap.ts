import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.domain,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${site.domain}/mentions-legales`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${site.domain}/politique-de-confidentialite`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
