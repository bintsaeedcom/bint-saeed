/** Old `/shop/[slug]` → current catalog slug (301). Keep in sync with `lib/products/legacyShopSlugRedirects.ts`. */
const LEGACY_SHOP_SLUG_REDIRECTS = [
  ['khous-jacket-abaya', 'knightsbridge-abaya-jacket'],
  ['royal-talli-abaya', 'covent-garden-abaya'],
  ['natural-stone-signature-abaya', 'marylebone-abaya'],
  ['parklane-abaya', 'park-lane-abaya'],
  ['royal-v-neck-kaftan', 'mayfair-kaftan'],
  ['royal-boatneck-kaftan', 'nothing-hill-kaftan'],
  ['khous-signature-midi-dress', 'knightsbridge-dress'],
  ['inner-flow-dress', 'chelsea-dress'],
  ['talli-signature-dress', 'hampstead-dress'],
  ['khous-signature-classic-set', 'covent-garden-signature-set'],
  ['khous-signature-classic-jacket', 'covent-garden-signature-set'],
  ['talli-signature-set', 'soho-set'],
  ['signature-belt-one', 'signature-belt-i'],
  ['signature-belt-two', 'signature-belt-ii'],
  ['khous-signature-abaya', 'belgravia-abaya'],
  ['khous-structured-blazer-abaya', 'kensington-abaya'],
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  transpilePackages: ['swiper'],
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    formats: ['image/webp'],
  },
  async headers() {
    const base = [
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      {
        key: 'Permissions-Policy',
        value: 'camera=(), microphone=(), geolocation=(self)',
      },
      { key: 'X-DNS-Prefetch-Control', value: 'on' },
    ]
    if (process.env.NODE_ENV === 'production') {
      base.push({
        key: 'Strict-Transport-Security',
        value: 'max-age=31536000; includeSubDomains',
      })
    }
    /** Link previews (WhatsApp, etc.) re-fetch images; public cache helps rescrapes succeed quickly. */
    const shareImageCache = [
      { key: 'Cache-Control', value: 'public, max-age=604800, stale-while-revalidate=86400' },
    ]
    return [
      { source: '/og-share.jpg', headers: [...base, ...shareImageCache] },
      { source: '/opengraph-image.jpg', headers: [...base, ...shareImageCache] },
      { source: '/twitter-image.jpg', headers: [...base, ...shareImageCache] },
      { source: '/:path*', headers: base },
    ]
  },
  async rewrites() {
    return [{ source: '/sitemap.xml', destination: '/sitemap' }]
  },
  async redirects() {
    return [
      // Apex → canonical host (SEO + IndexNow host alignment). Preserves path + query string.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'bintsaeed.com' }],
        destination: 'https://www.bintsaeed.com/:path*',
        permanent: true,
      },
      { source: '/charms', destination: '/strands', permanent: true },
      { source: '/charms/:path*', destination: '/strands/:path*', permanent: true },
      { source: '/preview', destination: '/home', permanent: true },
      { source: '/preview/:path*', destination: '/home/:path*', permanent: true },
      { source: '/accessoiries', destination: '/accessories', permanent: true },
      { source: '/accessoiries/:path*', destination: '/accessories/:path*', permanent: true },
      { source: '/collections', destination: '/shop', permanent: true },
      { source: '/collections/:path*', destination: '/shop/:path*', permanent: true },
      ...LEGACY_SHOP_SLUG_REDIRECTS.map(([from, to]) => ({
        source: `/shop/${from}`,
        destination: `/shop/${to}`,
        permanent: true,
      })),
      { source: '/heritage/sadu', destination: '/heritage/khous', permanent: true },
      // Social links → always coming soon page (/)
      { source: '/facebook', destination: '/?utm_source=facebook&utm_medium=social&utm_campaign=bio', permanent: true },
      { source: '/instgram', destination: '/?utm_source=instagram&utm_medium=social&utm_campaign=bio', permanent: true },
      { source: '/instagram', destination: '/?utm_source=instagram&utm_medium=social&utm_campaign=bio', permanent: true },
      { source: '/x', destination: '/?utm_source=x&utm_medium=social&utm_campaign=bio', permanent: true },
      { source: '/pinterest', destination: '/?utm_source=pinterest&utm_medium=social&utm_campaign=bio', permanent: true },
      { source: '/tiktok', destination: '/?utm_source=tiktok&utm_medium=social&utm_campaign=bio', permanent: true },
      { source: '/snapchat', destination: '/?utm_source=snapchat&utm_medium=social&utm_campaign=bio', permanent: true },
    ]
  },
}

module.exports = nextConfig
