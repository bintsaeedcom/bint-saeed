import { MetadataRoute } from 'next'

const baseUrl = 'https://bintsaeed.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: { en: baseUrl, ar: `${baseUrl}/ar` },
      },
    },
    {
      url: `${baseUrl}/preview`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/shop`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
      alternates: { languages: { en: `${baseUrl}/shop`, ar: `${baseUrl}/ar/shop` } },
    },
    {
      url: `${baseUrl}/accessories`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: { languages: { en: `${baseUrl}/about`, ar: `${baseUrl}/ar/about` } },
    },
    {
      url: `${baseUrl}/heritage`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: { languages: { en: `${baseUrl}/heritage`, ar: `${baseUrl}/ar/heritage` } },
    },
    {
      url: `${baseUrl}/heritage/al-talli`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: { languages: { en: `${baseUrl}/heritage/al-talli`, ar: `${baseUrl}/ar/heritage/al-talli` } },
    },
    {
      url: `${baseUrl}/heritage/khous`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: { languages: { en: `${baseUrl}/heritage/khous`, ar: `${baseUrl}/ar/heritage/khous` } },
    },
    {
      url: `${baseUrl}/heritage/sadu`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: { languages: { en: `${baseUrl}/heritage/sadu`, ar: `${baseUrl}/ar/heritage/sadu` } },
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/size-guide`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
      alternates: { languages: { en: `${baseUrl}/size-guide`, ar: `${baseUrl}/ar/size-guide` } },
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookie-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
