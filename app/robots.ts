import type { MetadataRoute } from 'next'

const baseUrl = 'https://www.bintsaeed.com'

/** Brand marks only — keep product photography indexable.
 * Favicon MUST stay crawlable by Googlebot-Image or Search shows a generic globe. */
const BRAND_IMAGE_DISALLOW = [
  '/og-image.png',
  '/gold%20logo.png',
  '/logo-bintsaeed.svg',
  '/opengraph-image.jpg',
  '/twitter-image.jpg',
  '/opengraph-image',
  '/twitter-image',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/admin/', '/api/', '/home/gate', '/home/blocked'],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
        disallow: BRAND_IMAGE_DISALLOW,
      },
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
      },
      {
        userAgent: 'anthropic-ai',
        allow: '/',
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
      },
      {
        userAgent: 'Yandex',
        allow: '/',
      },
      {
        userAgent: 'YandexBot',
        allow: '/',
      },
      {
        userAgent: 'DuckDuckBot',
        allow: '/',
      },
      {
        userAgent: 'Applebot',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
