import { MetadataRoute } from 'next';

/**
 * Next.js Robots.txt configuration
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://sanjay-portfolio.vercel.app/sitemap.xml',
  };
}
