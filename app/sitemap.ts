import { MetadataRoute } from "next";

const BASE_URL = "https://sidebarai.us";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: BASE_URL,                 lastModified: now, changeFrequency: "weekly",  priority: 1 },
    { url: `${BASE_URL}/seminars`,   lastModified: now, changeFrequency: "weekly",  priority: 0.95 },
    { url: `${BASE_URL}/sprint`,     lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/why-now`,    lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/bar-ethics`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/practice-areas`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
  ];
}
