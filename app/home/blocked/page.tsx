'use client'

import LocaleLink from '@/components/LocaleLink'
import { useSearchParams } from 'next/navigation'
import PreviewAccessShell from '@/components/preview/PreviewAccessShell'

const COPY: Record<string, { title: string; body: string }> = {
  private: {
    title: 'Private browsing',
    body: 'The preview is not available in a private or incognito window. Please open this link in a normal browser window and try again.',
  },
  vpn: {
    title: 'Network not allowed',
    body: 'We cannot show this preview over a VPN, proxy, or similar connection. Please disconnect, use your regular home or mobile network, and try again.',
  },
  bot: {
    title: 'Access denied',
    body: 'We could not confirm you are human, or your session looked automated. If you are a real visitor, try again in a few minutes or use another device.',
  },
  config: {
    title: 'Preview unavailable',
    body: 'Preview protection is not configured on this deployment. If you manage this site, add the required environment variables and redeploy.',
  },
  default: {
    title: 'Preview unavailable',
    body: 'You cannot access this preview from your current browser or network.',
  },
}

export default function HomeBlockedPage() {
  const searchParams = useSearchParams()
  const reason = searchParams.get('reason') || 'default'
  const { title, body } = COPY[reason] ?? COPY.default

  return (
    <PreviewAccessShell title={title} subtitle={body}>
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <LocaleLink
          href="/"
          className="rounded-xl border border-white/15 px-8 py-3 font-roboto text-xs uppercase tracking-[0.2em] text-white/80 transition-colors hover:border-brand-dustyBlue/50 hover:text-brand-dustyBlue"
        >
          Back to site
        </LocaleLink>
        {reason !== 'private' && reason !== 'config' ? (
          <LocaleLink
            href="/home/gate?returnTo=%2Fhome"
            className="rounded-xl bg-brand-dustyBlue/20 px-8 py-3 font-roboto text-xs uppercase tracking-[0.2em] text-brand-dustyBlue transition-colors hover:bg-brand-dustyBlue/30"
          >
            Try verification again
          </LocaleLink>
        ) : null}
      </div>
    </PreviewAccessShell>
  )
}
