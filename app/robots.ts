import type { MetadataRoute } from 'next'
import { isPrelaunch } from '@/lib/seo'

const baseUrl = 'https://bintsaeed.com'

/** Sensitive paths — never crawl (all user agents). */
const disallowPrivate = ['/api/', '/admin/', '/_next/', '/checkout/']

/**
 * Crawlers used by major AI / search training products.
 * Listed first in robots.txt so they match their own rule block before `*`.
 */
const aiTrainingUserAgents = [
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  'Google-Extended',
  'GoogleOther',
  'anthropic-ai',
  'ClaudeBot',
  'Claude-Web',
  'PerplexityBot',
  'Applebot-Extended',
  'CCBot',
  'Bytespider',
]

const prelaunchDisallowGeneric = [
  '/home/gate',
  '/home/blocked',
  '/shop',
  '/accessories',
  '/about',
  '/the-codes',
  '/heritage',
  '/contact',
  '/faq',
  '/size-guide',
  '/privacy-policy',
  '/cookie-policy',
  '/terms',
  ...disallowPrivate,
]

export default function robots(): MetadataRoute.Robots {
  if (isPrelaunch) {
    return {
      rules: [
        {
          userAgent: aiTrainingUserAgents,
          allow: '/',
          disallow: disallowPrivate,
        },
        {
          userAgent: '*',
          allow: '/',
          disallow: prelaunchDisallowGeneric,
        },
      ],
      sitemap: `${baseUrl}/sitemap.xml`,
      host: baseUrl,
    }
  }

  return {
    rules: [
      {
        userAgent: aiTrainingUserAgents,
        allow: '/',
        disallow: disallowPrivate,
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: disallowPrivate,
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
