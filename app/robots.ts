import type { MetadataRoute } from 'next'

const baseUrl = 'https://www.bintsaeed.com'

/** Brand marks only — keep product photography indexable. */
const BRAND_IMAGE_DISALLOW = [
  '/og-image.png',
  '/gold%20logo.png',
  '/logo-bintsaeed.svg',
  '/flavicon.png',
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
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
