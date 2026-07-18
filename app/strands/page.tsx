'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import LocaleLink from '@/components/LocaleLink'
import AppPageWayfinding from '@/components/AppPageWayfinding'
import StrandsStoneBento from '@/components/strands/StrandsStoneBento'
import { accessories } from '@/data/accessories'
import { sortAccessoriesByPriceAsc } from '@/lib/accessories/filterAccessories'
import { products } from '@/data/products'
import { getProductHref } from '@/lib/products/links'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { commerceUi } from '@/lib/i18n/commerceUi'
import { useCurrency } from '@/lib/currency/CurrencyContext'
import { getStrandsPageCopy } from '@/lib/i18n/strandsPageCopyI18n'
import { PRODUCT_LINE_STRANDS } from '@/lib/i18n/strandsBrandLock'
import NoTranslate from '@/components/NoTranslate'
import { withBrandAlt } from '@/lib/products/imageAlt'
import { buildStrandsCollectionJsonLd } from '@/lib/accessories/strandsCollectionSchemaI18n'
import { editorialSectionH2 } from '@/lib/ui/editorialTypography'
import { ctaButtonRow, ctaInButtonRow, ctaPrimary, ctaSecondaryOnLight } from '@/lib/ui/ctaClasses'

/** Strands hero banner — `public/strands/charm-fabric-dark.webp` (served under /strands/, not /charms/ redirect) */
const HERO_CAMPAIGN_IMAGE = '/strands/charm-fabric-dark.webp'
const CONCEPT_FEATURE_IMAGE = '/collection-section/bint-saeed-marylebone-abaya-jade-heart-strand-arm-lifestyle.webp'
const STRAND_HERO_ALT = withBrandAlt(
  'Natural stone bead abaya strands collection — interchangeable onyx, jade, amethyst, malachite and rose quartz for Marylebone Abaya',
)
const CONCEPT_FEATURE_ALT = withBrandAlt(
  'Marylebone Abaya cuff with interchangeable natural stone strand detail — sage beads and gold clasp',
)
const MARYLEBONE_PAIRING_ALT = withBrandAlt(
  'Marylebone Abaya styled with interchangeable natural stone bead strand — pairs with Al Ain necklace and earrings',
)
const INNER_CONTAINER_CLASS = 'mx-auto max-w-[1280px] px-4 md:px-10'

export default function StrandsPage() {
  const { isRTL, language } = useLanguage()
  const ui = commerceUi(language)
  const { formatPrice } = useCurrency()
  const copy = getStrandsPageCopy(language)
  const collectionJsonLd = useMemo(() => buildStrandsCollectionJsonLd(language), [language])
  const strandProducts = useMemo(
    () => sortAccessoriesByPriceAsc(accessories.filter((item) => item.category === 'signature-strands')),
    [],
  )
  const marylebone = useMemo(() => products.find((product) => product.slug === 'marylebone-abaya'), [])
  const maryleboneHref = marylebone ? getProductHref(marylebone) : '/shop/marylebone-abaya'
  const maryleboneImage = marylebone?.images[0] || '/Webshop pictures/Abayas/Marylebone Abaya/bint-saeed-marylebone-abaya-black-front.webp'

  const stepsRef = useRef<HTMLElement | null>(null)
  const [stepsVisible, setStepsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === stepsRef.current && entry.isIntersecting) setStepsVisible(true)
        })
      },
      { threshold: 0.28 },
    )
    const steps = stepsRef.current
    if (steps) observer.observe(steps)
    return () => observer.disconnect()
  }, [])

  return (
    <main className={`min-h-screen overflow-x-clip bg-[#1a0210] `}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <section className="relative z-0 flex min-h-0 flex-col overflow-hidden bg-[#1a0210] text-[#e8ddd4] md:sticky md:top-0 md:max-h-[min(72vh,720px)] md:will-change-transform">
        <div className="absolute inset-0" aria-hidden>
          <Image
            src={HERO_CAMPAIGN_IMAGE}
            alt={STRAND_HERO_ALT}
            fill
            priority={true}
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#1a0210]/45" />
          <div className="absolute inset-0 shadow-[inset_0_-24px_48px_rgba(0,0,0,0.28)]" />
        </div>

        <div
          className={`relative z-10 flex min-h-[min(58vh,560px)] flex-col justify-between px-6 pb-[4.75rem] pt-[5.25rem] md:min-h-[min(62vh,640px)] md:px-[60px] md:pb-[4.5rem] md:pt-[6.5rem] text-start`}
        >
          <div className="max-w-[600px]">
          <AppPageWayfinding
            rtl={isRTL}
            variant="light"
            className="mb-3"
            segments={[
              { label: ui.common.home, href: '/home' },
              { label: PRODUCT_LINE_STRANDS },
            ]}
          />

            <p className="mb-4 font-montserrat text-[10px] uppercase tracking-[0.28em] text-[#6a8090] sm:tracking-[0.34em]">
              {copy.heroEyebrow}
            </p>
            <h1
              data-document-h1="true"
              className="max-w-[760px] font-rozha text-[clamp(32px,5.4vw,64px)] leading-[0.98] tracking-[0.01em]"
              style={{ color: '#e8ddd4' }}
            >
              {copy.heroHeadline}
            </h1>
            <p className="mt-2.5 max-w-[480px] font-montserrat text-[14px] font-normal leading-[1.7] tracking-[0.02em] text-[rgba(232,216,200,0.75)]">
              {copy.heroSubline1}
            </p>
            <p className="mt-2.5 max-w-[480px] font-montserrat text-[14px] font-normal leading-[1.7] tracking-[0.02em] text-[rgba(232,216,200,0.75)]">
              {copy.heroSubline2}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <LocaleLink
                href="/accessories?type=signature-strands"
                className="inline-flex items-center justify-center rounded-[4px] bg-[#7A1C28] px-8 py-[13px] font-montserrat text-[11px] uppercase tracking-[0.08em] text-[#e8d8c8] transition-colors hover:bg-[#821b2d]"
                data-cursor-hover
              >
                <NoTranslate>{copy.ctaShopStrands}</NoTranslate>
              </LocaleLink>
              <LocaleLink
                href={maryleboneHref}
                className="inline-flex items-center justify-center rounded-[4px] border border-[#e8ddd4]/40 bg-[#1a0210]/35 px-8 py-[13px] font-montserrat text-[11px] uppercase tracking-[0.08em] text-[#e8d8c8] backdrop-blur-md transition-colors hover:border-[#e8ddd4]/70 hover:bg-[#1a0210]/55"
                data-cursor-hover
              >
                <NoTranslate>{copy.ctaSeeMarylebone}</NoTranslate>
              </LocaleLink>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-20 overflow-hidden border-t border-[#2a0a14] bg-[#1a0210]/80 py-3">
          <div className="strands-marquee flex w-max font-montserrat text-[11px] uppercase tracking-[0.2em] text-[#6a8090]/65">
            {Array.from({ length: 8 }).map((_, index) => (
              <span key={index} className="px-4">
                {copy.marquee}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-6 rounded-t-[16px] bg-[#e8ddd4] py-20 shadow-[0_-12px_40px_rgba(0,0,0,0.3)] md:-mt-10 md:sticky md:top-0 md:will-change-transform">
        <div className={`${INNER_CONTAINER_CLASS} grid gap-12 text-left md:grid-cols-[1.1fr_0.9fr] md:items-center`}>
          <div>
            <p className="font-montserrat text-[10px] uppercase tracking-[0.28em] text-[#7A1C28]">{copy.conceptLabel}</p>
            <h2 className={`mt-4 ${editorialSectionH2} text-[#1a0210]`}>
              {copy.conceptHeadingLine1}
              <br />
              {copy.conceptHeadingLine2}
            </h2>
            <p className="mt-6 max-w-2xl font-montserrat text-[15px] leading-[1.9] tracking-wide text-[#1a0210]/72">
              {copy.conceptP1}
            </p>
            <p className="mt-4 max-w-2xl font-montserrat text-[15px] leading-[1.9] tracking-wide text-[#1a0210]/72">
              {copy.conceptP2}
            </p>

            <div className={`mt-8 ${ctaButtonRow} `}>
              <LocaleLink
                href="/accessories?type=signature-strands"
                className={`${ctaPrimary} ${ctaInButtonRow}`}
                data-cursor-hover
              >
                {copy.conceptExploreStones}
              </LocaleLink>
              <LocaleLink
                href={maryleboneHref}
                className={`${ctaSecondaryOnLight} ${ctaInButtonRow} !whitespace-nowrap sm:!flex-none sm:!basis-auto`}
                data-cursor-hover
              >
                {copy.conceptMaryleboneLink}
              </LocaleLink>
            </div>
          </div>

          <LocaleLink
            href={maryleboneHref}
            className="group block overflow-hidden rounded-[4px] bg-[#faf8f5]"
            data-cursor-hover
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[4px] bg-[#e8ddd4]">
              <Image
                src={CONCEPT_FEATURE_IMAGE}
                alt={CONCEPT_FEATURE_ALT}
                fill
                sizes="(max-width: 768px) 90vw, 42vw"
                className="object-cover object-center"
              />
            </div>
          </LocaleLink>
        </div>
      </section>

      <section ref={stepsRef} className="relative z-20 -mt-6 rounded-t-[16px] bg-[#1a0210] py-20 shadow-[0_-12px_40px_rgba(0,0,0,0.3)] md:-mt-10 md:sticky md:top-0 md:will-change-transform">
        <div className={`${INNER_CONTAINER_CLASS} text-left`}>
          <p className="font-montserrat text-[10px] uppercase tracking-[0.28em] text-[#6a8090]">{copy.howItWorksLabel}</p>
          <h2 className={`mt-4 max-w-3xl ${editorialSectionH2} text-[#e8ddd4]`}>{copy.howItWorksHeading}</h2>
          <div className="mt-12 grid gap-px bg-[rgba(232,216,200,0.1)] md:grid-cols-3">
            {copy.steps.map((step, index) => (
              <article
                key={step.numeral}
                className={`bg-[#1a0210] p-8 text-left transition-all duration-700 ${
 stepsVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
 }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <p className="mb-6 font-rozha text-[48px] leading-none text-[rgba(122,28,40,0.35)]">{step.numeral}</p>
                <h3 className="mb-3 font-montserrat text-[11px] font-medium uppercase tracking-[0.15em] text-[#e8d8c8]">{step.title}</h3>
                <p className="font-montserrat text-[13px] font-normal leading-[1.7] text-[rgba(232,216,200,0.6)]">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="stone-showcase"
        className="relative z-30 -mt-6 rounded-t-[16px] bg-[#faf8f5] py-20 pb-24 shadow-[0_-12px_40px_rgba(0,0,0,0.3)] md:-mt-10 md:py-28 md:pb-28"
      >
        <div className={`${INNER_CONTAINER_CLASS} text-left`}>
          <p className="font-montserrat text-[10px] uppercase tracking-[0.28em] text-[#7A1C28]">{copy.collectionLabel}</p>
          <h2 className={`mt-4 max-w-3xl ${editorialSectionH2} text-[#1a0210]`}>{copy.collectionHeading}</h2>
          <p className="mt-5 max-w-2xl font-montserrat text-[15px] leading-[1.85] tracking-wide text-[#1a0210]/70">
            {copy.collectionIntro}
          </p>
          <LocaleLink
            href="/accessories?type=signature-strands"
            className="mt-6 inline-flex items-center gap-2 font-montserrat text-[11px] font-medium uppercase tracking-[0.14em] text-[#7A1C28] transition-opacity hover:opacity-70"
            data-cursor-hover
          >
            {copy.shopAllStrandsCta}
            <span aria-hidden>→</span>
          </LocaleLink>
        </div>

        <div className="mt-12">
          <StrandsStoneBento
            products={strandProducts}
            isRTL={isRTL}
            chooseCta={copy.viewStrandCta}
            discoverCta={copy.discoverAllStrandsCta}
            limitedLabel={copy.limitedEditionShort}
            stoneNotes={copy.stoneVisualNotes}
            stoneNoteFallback={copy.stoneVisualFallback}
          />
        </div>

        <p className={`${INNER_CONTAINER_CLASS} mt-10 text-center font-montserrat text-[11px] uppercase tracking-[0.14em] text-[#8a7a70]`}>
          {copy.alsoInPrefix}{' '}
          <LocaleLink
            href="/accessories?type=signature-strands"
            className="text-[#7A1C28] underline-offset-4 hover:underline"
            data-cursor-hover
          >
            {copy.alsoInLink}
          </LocaleLink>
        </p>
      </section>

      <section className="strands-fabric-light relative z-40 -mt-6 overflow-hidden rounded-t-[16px] bg-[#7A1C28] py-20 pb-28 shadow-[0_-12px_40px_rgba(0,0,0,0.3)] md:-mt-10 md:sticky md:top-0 md:pb-36 md:will-change-transform">
        <div className={`${INNER_CONTAINER_CLASS} relative z-20 grid gap-10 text-left md:grid-cols-2 md:items-center`}>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[520px] overflow-hidden rounded-[4px] md:mx-0 md:max-w-none">
            <Image
              src={maryleboneImage}
              alt={MARYLEBONE_PAIRING_ALT}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
          <div className="flex items-center">
            <div className="max-w-xl">
              <p className="font-montserrat text-[10px] uppercase tracking-[0.28em] text-[#e8d8c8]/55">{copy.anchorLabel}</p>
              <h2 className={`mt-5 ${editorialSectionH2} text-[#e8ddd4]`}>{copy.anchorHeading}</h2>
              <p className="mt-5 max-w-xl font-montserrat text-sm leading-[1.85] tracking-wide text-[#e8ddd4]/72">
                {copy.anchorBody(
                  marylebone
                    ? formatPrice(marylebone.price, marylebone.id)
                    : formatPrice(2499),
                )}
              </p>
              <LocaleLink
                href={maryleboneHref}
                className="mt-8 inline-flex items-center justify-center rounded-[4px] bg-[#e8ddd4] px-8 py-[13px] font-montserrat text-xs uppercase tracking-[0.08em] text-[#7A1C28] transition-colors hover:bg-[#faf8f5]"
                data-cursor-hover
              >
                {copy.anchorCta}
              </LocaleLink>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes strandsMarquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .strands-marquee {
          animation: strandsMarquee 95s linear infinite;
          will-change: transform;
        }

        .strands-fabric-light {
          position: relative;
        }

        .strands-fabric-light::before,
        .strands-fabric-light::after {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .strands-fabric-light::before {
          z-index: 0;
          background-image: url('/strands/charm-fabric-light.webp');
          background-position: center;
          background-size: cover;
        }

        .strands-fabric-light::after {
          z-index: 1;
          background: rgba(26, 2, 16, 0.75);
        }

        @media (max-width: 767px) {
          .strands-marquee {
            animation-duration: 120s;
          }
        }
      `}</style>
    </main>
  )
}

