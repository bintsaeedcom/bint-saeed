'use client'

import { useRef, type ReactNode } from 'react'
import Image from 'next/image'
import LocaleLink from '@/components/LocaleLink'
import { FiArrowRight } from 'react-icons/fi'
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { getCraftsmanshipCopy } from '@/lib/content/craftsmanshipCopyI18n'
import { withBrandAlt } from '@/lib/products/imageAlt'
import { EDITORIAL_STACK_CARD } from '@/lib/ui/editorialPageChrome'

/** Portrait craft finishes — same trio as Craftsmanship closing. */
function detailTrio(locale: 'en' | 'ar') {
  return [
    {
      src: '/craftsmanship/details/bint-saeed-abu-dhabi-luxury-abaya-gold-embroidery-jewel-cuff-detail.webp',
      alt: withBrandAlt(
        locale === 'ar'
          ? 'تطريز ذهبي وتفصيل كم مرصّع على قماش عباءة فاخرة سوداء'
          : 'Luxury abaya gold embroidery and jewel cuff detail on black fabric',
        locale,
      ),
    },
    {
      src: '/craftsmanship/details/bint-saeed-abu-dhabi-hampstead-dress-woven-label-abu-dhabi-detail.webp',
      alt: withBrandAlt(
        locale === 'ar'
          ? 'ملصق Bint Saeed المنسوج — أبوظبي داخل فستان Hampstead الأسود'
          : 'Bint Saeed woven brand label Abu Dhabi on black Hampstead dress interior',
        locale,
      ),
    },
    {
      src: '/craftsmanship/details/bint-saeed-abu-dhabi-hampstead-dress-gold-al-talli-stitch-detail.webp',
      alt: withBrandAlt(
        locale === 'ar'
          ? 'تفصيل تطريز Al Talli الذهبي على قماش فستان Hampstead الأسود'
          : 'Gold Al Talli stitch detail on black Hampstead dress fabric',
        locale,
      ),
    },
  ] as const
}

function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.94', 'start 0.52'],
  })
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 28, restDelta: 0.001 })
  const gated = useTransform(progress, (latest) => {
    const start = Math.min(0.45, Math.max(0, delay) * 0.55)
    if (latest <= start) return 0
    return Math.min(1, (latest - start) / (1 - start))
  })
  const opacity = useTransform(gated, [0, 1], [0, 1])
  const y = useTransform(gated, [0, 1], [42, 0])

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div ref={ref} className={className} style={{ opacity, y }}>
      {children}
    </motion.div>
  )
}

function Still({
  src,
  alt,
  className = '',
}: {
  src: string
  alt: string
  className?: string
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={`h-full w-full object-cover brightness-[1.02] contrast-[1.03] object-center ${className}`}
    />
  )
}

/** Glass frame matching Craftsmanship Post (onDark, no parallax). */
function Post({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`group relative isolate aspect-[3/4] overflow-hidden border border-white/25 bg-white/[0.08] shadow-[0_28px_70px_-34px_rgba(0,0,0,0.62),inset_0_1px_0_rgba(255,255,255,0.22)] backdrop-blur-xl ${className}`}
    >
      {children}
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(160deg,rgba(255,255,255,0.14)_0%,transparent_38%,rgba(26,2,16,0.22)_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[2] ring-1 ring-inset ring-white/25 shadow-[inset_0_0_48px_rgba(255,255,255,0.08)]"
        aria-hidden
      />
    </div>
  )
}

type ExploreCollectionClosingProps = {
  /** `from` query on shop CTA — e.g. craftsmanship, giving-forward, the-codes */
  from: string
  /** Optional analytics attrs on the Discover More link */
  ctaAnalytics?: {
    'data-bs-cta'?: string | boolean
    'data-analytics-event'?: string
    'data-analytics-section'?: string
  }
}

/**
 * Shared “Explore the collection” closing — organic texture, glass detail trio, Discover More.
 * Used on Craftsmanship, Giving Forward, and The Codes.
 */
export default function ExploreCollectionClosing({
  from,
  ctaAnalytics,
}: ExploreCollectionClosingProps) {
  const { language, isRTL } = useLanguage()
  const copy = getCraftsmanshipCopy(language)
  const details = detailTrio(language === 'ar' ? 'ar' : 'en')

  return (
    <section
      className={`relative z-[50] overflow-hidden pt-10 pb-16 sm:pt-12 sm:pb-20 md:pt-14 md:pb-24 ${EDITORIAL_STACK_CARD}`}
      aria-label={
        language === 'ar'
          ? 'تفاصيل إنهاء قطع Bint Saeed'
          : 'Bint Saeed garment finishing details'
      }
    >
      <Image
        src="/craftsmanship/bint-saeed-abu-dhabi-explore-collection-organic-texture.webp"
        alt={withBrandAlt(
          'Explore the Bint Saeed collection — editorial fabric texture background for luxury abayas',
          language === 'ar' ? 'ar' : 'en',
        )}
        title="Explore the collection — Bint Saeed Abu Dhabi"
        fill
        sizes="100vw"
        className="pointer-events-none object-cover object-center"
        priority={false}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(26,2,16,0.72)_0%,rgba(42,8,22,0.55)_42%,rgba(26,2,16,0.82)_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(111,21,36,0.22)_0%,transparent_70%)]"
        aria-hidden
      />
      <div className="relative mx-auto w-full min-w-0 max-w-[1280px] px-4 pb-8 sm:px-6 sm:pb-10 lg:px-12 md:pb-12">
        <Reveal>
          <p className="mb-7 text-center font-rozha text-[clamp(1.75rem,4vw,2.5rem)] tracking-[0.02em] text-[#e8ddd4] md:mb-8">
            {copy.ctaHeading}
          </p>
        </Reveal>

        <div className="mx-auto grid max-w-5xl grid-cols-3 gap-2 sm:gap-3 md:gap-4">
          {details.map((item, index) => (
            <Reveal key={item.src} delay={index * 0.08} className="min-w-0">
              <Post className="bg-[#2a0a14]">
                <Still
                  src={item.src}
                  alt={item.alt}
                  className="!object-contain object-center p-1 sm:p-1.5"
                />
              </Post>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className={`mt-8 flex justify-center md:mt-10 `}>
            <LocaleLink
              href={`/shop?from=${from}`}
              className="inline-flex min-h-[52px] items-center justify-center gap-3 rounded-[4px] border border-[#e8ddd4]/45 bg-[#e8ddd4]/10 px-10 py-4 font-montserrat text-xs uppercase tracking-[0.22em] text-[#e8ddd4] shadow-[0_18px_48px_-28px_rgba(0,0,0,0.45)] backdrop-blur-[2px] transition-colors hover:border-[#e8ddd4]/80 hover:bg-[#e8ddd4] hover:text-brand-darkRed"
              data-cursor-hover
              {...ctaAnalytics}
            >
              {copy.discoverMore}
              <FiArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
            </LocaleLink>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
