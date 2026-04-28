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
    return [{ source: '/:path*', headers: base }]
  },
  async rewrites() {
    return [{ source: '/sitemap.xml', destination: '/sitemap' }]
  },
  async redirects() {
    return [
      { source: '/preview', destination: '/home', permanent: true },
      { source: '/preview/:path*', destination: '/home/:path*', permanent: true },
      { source: '/accessoiries', destination: '/accessories', permanent: true },
      { source: '/accessoiries/:path*', destination: '/accessories/:path*', permanent: true },
      { source: '/collections', destination: '/shop', permanent: true },
      { source: '/collections/:path*', destination: '/shop/:path*', permanent: true },
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
