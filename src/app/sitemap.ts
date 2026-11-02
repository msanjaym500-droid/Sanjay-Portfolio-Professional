import { MetadataRoute } from 'next';

/**
 * Next.js Dynamic Sitemap generator
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sanjay-portfolio.vercel.app';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ];
}
