import type { MetadataRoute } from 'next'
import { ROBOTS_UTILITY_DISALLOWS } from '@/lib/seo/utilityPaths'

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

/**
 * AI search + answer engines. OAI-SearchBot powers ChatGPT search results;
 * ChatGPT-User / Claude-User / Perplexity-User fetch pages when a user asks about the brand.
 */
const AI_CRAWLERS = [
  'OAI-SearchBot',
  'GPTBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'Amazonbot',
  'meta-externalagent',
  'MistralAI-User',
  'cohere-ai',
  'Diffbot',
  'DeepSeekBot',
  'Bytespider',
]

const SEARCH_ENGINES = [
  'Googlebot',
  'Bingbot',
  'Applebot',
  'DuckDuckBot',
  'Baiduspider',
  'Baiduspider-render',
  'Yandex',
  'YandexBot',
  'YandexImages',
  'YandexMobileBot',
  'Mail.RU_Bot',
  'NaverBot',
  'Yeti',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ROBOTS_UTILITY_DISALLOWS,
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
        disallow: BRAND_IMAGE_DISALLOW,
      },
      {
        userAgent: SEARCH_ENGINES,
        allow: '/',
        disallow: ROBOTS_UTILITY_DISALLOWS,
      },
      {
        userAgent: AI_CRAWLERS,
        allow: '/',
        disallow: ROBOTS_UTILITY_DISALLOWS,
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
