import type { Metadata } from 'next'
import Link from 'next/link'
import { getServerLocale } from '@/lib/i18n/serverLocale'
import { buildChinaSocialPageMetadata } from '@/lib/seo/chinaSocialPageMeta'
import { buildChinaSocialWebPageJsonLd } from '@/lib/seo/chinaWebPageJsonLd'
import {
  BRAND_NAME_ZH_DISPLAY,
  WECHAT_ID,
} from '@/lib/brand/chinaPresence'
import {
  EDITORIAL_PAGE_CONTAINER,
  EDITORIAL_PAGE_SHELL,
  SITE_CONTENT_TOP_PAD,
} from '@/lib/ui/editorialPageChrome'

export async function generateMetadata(): Promise<Metadata> {
  return buildChinaSocialPageMetadata('wechat', await getServerLocale())
}

export default async function WeChatPage() {
  const locale = await getServerLocale()
  const jsonLd = buildChinaSocialWebPageJsonLd('wechat', locale)

  return (
    <main className={`${EDITORIAL_PAGE_SHELL} bg-brand-pageCanvas text-neutral-900`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className={`${EDITORIAL_PAGE_CONTAINER} ${SITE_CONTENT_TOP_PAD} pb-20 md:pb-28`}>
        <p className="mb-4 font-montserrat text-[10px] uppercase tracking-[0.28em] text-brand-dustyBlue">
          China · WeChat / 微信
        </p>
        <h1
          data-document-h1="true"
          className="max-w-3xl font-rozha text-[clamp(2rem,5vw,3.5rem)] font-normal leading-[1.1] tracking-[0.01em] text-brand-darkRed"
        >
          {BRAND_NAME_ZH_DISPLAY}
        </h1>
        <p className="mt-6 max-w-2xl font-montserrat text-sm leading-relaxed tracking-wide text-neutral-600 md:text-base">
          Official WeChat account for the Abu Dhabi fashion house. In Chinese, the house name is
          承悦 — the only language in which Bint Saeed uses a distinct brand name.
        </p>

        <dl className="mt-12 max-w-xl space-y-6 font-montserrat text-sm">
          <div>
            <dt className="text-[10px] uppercase tracking-[0.22em] text-brand-dustyBlue">WeChat ID</dt>
            <dd className="mt-2 text-brand-darkRed">{WECHAT_ID}</dd>
          </div>
          <div>
            <dt className="text-[10px] uppercase tracking-[0.22em] text-brand-dustyBlue">Display name</dt>
            <dd className="mt-2 text-brand-darkRed">{BRAND_NAME_ZH_DISPLAY}</dd>
          </div>
        </dl>

        <p className="mt-10 max-w-2xl font-montserrat text-sm leading-relaxed text-neutral-600">
          Open WeChat → Add contacts → search for the WeChat ID above, or for{' '}
          <span className="text-brand-darkRed">{BRAND_NAME_ZH_DISPLAY}</span>.
        </p>

        <p className="mt-14">
          <Link
            href="/shop"
            className="inline-flex font-montserrat text-[11px] uppercase tracking-[0.22em] text-brand-darkRed underline decoration-brand-darkRed/25 underline-offset-8 transition-colors hover:decoration-brand-darkRed"
          >
            Shop the collection
          </Link>
        </p>

        <nav aria-label="Related" className="sr-only">
          <Link href="/rednote">RedNote</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/zh/shop">中文选购</Link>
          <Link href="/zh/heritage">中文传承</Link>
        </nav>
      </div>
    </main>
  )
}
