import LocaleLink from '@/components/LocaleLink'

const previews = [
  {
    href: '/dev/error-preview/404',
    title: '404 — Page Not Found',
    description: 'Unknown URL (not-found.tsx)',
  },
  {
    href: '/dev/error-preview/500',
    title: '500 — Something Went Wrong',
    description: 'Route error boundary (error.tsx)',
  },
  {
    href: '/dev/error-preview/global',
    title: 'Global error',
    description: 'Root layout failure (global-error.tsx)',
  },
] as const

export default function DevErrorPreviewIndexPage() {
  return (
    <div className="min-h-screen bg-[#faf8f6] px-4 py-16 font-montserrat">
      <div className="mx-auto max-w-lg">
        <p className="mb-2 text-[10px] uppercase tracking-[0.35em] text-brand-clayRed/65">Dev only</p>
        <h1 className="font-rozha text-3xl text-brand-darkRed">Error page previews</h1>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
          Open this page in your browser while the dev server is running, then tap a preview below.
          These routes are hidden in production.
        </p>
        <p className="mt-2 rounded-sm border border-brand-stone/25 bg-white/70 px-3 py-2 font-mono text-[11px] text-neutral-600">
          /dev/error-preview
        </p>
        <ul className="mt-8 space-y-3">
          {previews.map((item) => (
            <li key={item.href}>
              <LocaleLink
                href={item.href}
                className="block rounded-sm border border-brand-stone/30 bg-white/80 px-5 py-4 shadow-sm transition-colors hover:border-brand-darkRed/25 hover:bg-white"
              >
                <span className="block font-montserrat text-sm text-brand-darkRed">{item.title}</span>
                <span className="mt-1 block text-xs text-neutral-500">{item.description}</span>
              </LocaleLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
