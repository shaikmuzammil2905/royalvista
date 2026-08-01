import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://royalvistastudio.in';

  const routes = [
    '',
    '/about',
    '/services',
    '/portfolio',
    '/contact',
    '/process',
    '/testimonials',
    '/faq',
    '/blog',
    '/privacy',
    '/terms',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
