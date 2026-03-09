import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const industries = ["law-firms", "cpa-firms", "real-estate", "insurance", "restaurants"];

  return [
    {
      url: "https://sidebarai.us",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...industries.map((slug) => ({
      url: `https://sidebarai.us/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
  ];
}
