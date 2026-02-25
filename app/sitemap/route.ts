import { NextResponse } from 'next/server'
import { isPrelaunch } from '@/lib/seo'

const baseUrl = 'https://bintsaeed.com'

const allUrls = [
  { loc: baseUrl, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: '1.0' },
  { loc: `${baseUrl}/preview`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: '0.95' },
  { loc: `${baseUrl}/shop`, lastmod: new Date().toISOString(), changefreq: 'daily', priority: '0.9' },
  { loc: `${baseUrl}/accessories`, lastmod: new Date().toISOString(), changefreq: 'daily', priority: '0.9' },
  { loc: `${baseUrl}/about`, lastmod: new Date().toISOString(), changefreq: 'monthly', priority: '0.8' },
  { loc: `${baseUrl}/heritage`, lastmod: new Date().toISOString(), changefreq: 'monthly', priority: '0.8' },
  { loc: `${baseUrl}/heritage/al-talli`, lastmod: new Date().toISOString(), changefreq: 'monthly', priority: '0.7' },
  { loc: `${baseUrl}/heritage/khous`, lastmod: new Date().toISOString(), changefreq: 'monthly', priority: '0.7' },
  { loc: `${baseUrl}/heritage/sadu`, lastmod: new Date().toISOString(), changefreq: 'monthly', priority: '0.7' },
  { loc: `${baseUrl}/contact`, lastmod: new Date().toISOString(), changefreq: 'monthly', priority: '0.6' },
  { loc: `${baseUrl}/faq`, lastmod: new Date().toISOString(), changefreq: 'monthly', priority: '0.5' },
  { loc: `${baseUrl}/size-guide`, lastmod: new Date().toISOString(), changefreq: 'monthly', priority: '0.6' },
  { loc: `${baseUrl}/privacy-policy`, lastmod: new Date().toISOString(), changefreq: 'yearly', priority: '0.3' },
  { loc: `${baseUrl}/cookie-policy`, lastmod: new Date().toISOString(), changefreq: 'yearly', priority: '0.3' },
  { loc: `${baseUrl}/terms`, lastmod: new Date().toISOString(), changefreq: 'yearly', priority: '0.3' },
]

function escapeXml(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export async function GET() {
  const urls = isPrelaunch ? allUrls.slice(0, 1) : allUrls
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${escapeXml(u.loc)}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`

  return new NextResponse(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
    },
  })
}
