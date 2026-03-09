import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const industries = ["law-firms", "cpa-firms", "real-estate", "insurance", "restaurants"];

  return [
    {
      url: "https://blueprintaihq.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...industries.map((slug) => ({
      url: `https://blueprintaihq.com/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
  ];
}
