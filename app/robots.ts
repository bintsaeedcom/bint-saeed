import type { MetadataRoute } from 'next'
import { isPrelaunch } from '@/lib/seo'

const baseUrl = 'https://bintsaeed.com'

const prelaunchDisallow = [
  '/preview',
  '/shop',
  '/accessories',
  '/about',
  '/heritage',
  '/contact',
  '/faq',
  '/size-guide',
  '/privacy-policy',
  '/cookie-policy',
  '/terms',
  '/api/',
  '/admin/',
  '/_next/',
  '/checkout/',
]

export default function robots(): MetadataRoute.Robots {
  if (isPrelaunch) {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: prelaunchDisallow,
      },
      sitemap: `${baseUrl}/sitemap.xml`,
      host: baseUrl,
    }
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/_next/', '/checkout/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
