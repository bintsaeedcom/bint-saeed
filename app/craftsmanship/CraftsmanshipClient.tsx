'use client'

import type { ReactNode } from 'react'
import LocaleLink from '@/components/LocaleLink'
import AboutSectionHero from '@/components/AboutSectionHero'
import { ABOUT_SECTION_HERO_IMAGES } from '@/lib/about/aboutSectionHeroImages'
import { getAboutEditorialHeroEyebrow } from '@/lib/about/aboutEditorialHeroChrome'
import { getCraftsmanshipCopy, type CraftsmanshipPhaseCopy } from '@/lib/content/craftsmanshipCopyI18n'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { EDITORIAL_PAGE_CONTAINER } from '@/lib/ui/editorialPageChrome'
import { FiArrowRight } from 'react-icons/fi'

/** Full-bleed film assets — same sources, new editorial framing. */
const CRAFT_VIDEO_BANDS = [
  {
    src: '/craftsmanship/bint-saeed-craftsmanship-process.webm',
    ariaLabel:
      'Video: Bint Saeed luxury abaya craftsmanship—Italian pattern development, prototyping in Abu Dhabi, and controlled atelier production in the UAE',
  },
  {
    src: '/craftsmanship/bint-saeed-fabric-cutting-atelier.webm',
    ariaLabel:
      'Video: Bint Saeed—precision fabric cutting and atelier work for bespoke luxury abayas in Abu Dhabi, United Arab Emirates',
  },
  {
    src: '/craftsmanship/bint-saeed-stitching-process.webm',
    ariaLabel:
      'Video: hand stitching and garment finishing by experienced craftspeople—tailored construction for Bint Saeed luxury abayas in Abu Dhabi',
  },
] as const

const MEDIA = {
  label: {
    src: '/craftsmanship/bint-saeed-label-stitching.png',
    alt: 'Bint Saeed woven label detail and hand finishing on a bespoke abaya—quality-controlled construction at the Bint Saeed atelier in Abu Dhabi',
  },
  khous: {
    src: '/craftsmanship/bint-saeed-khous-braid.png',
    alt: 'Bint Saeed—Khous braid integrated into garment structure; Emirati palm-frond weaving referenced in contemporary luxury abaya design, Abu Dhabi',
  },
  cad: {
    src: '/craftsmanship/bint-saeed-cad-abaya-pattern.png',
    alt: 'Bint Saeed CAD abaya pattern on screen—technical lines for proportion and construction resolved before cutting; luxury development between Italy and Abu Dhabi',
  },
  pattern: {
    src: '/craftsmanship/bint-saeed-pattern-drawing.png',
    alt: 'Bint Saeed—abaya pattern drawing during development; proportion, balance, and construction studied before sampling and production',
  },
  textile: {
    src: '/craftsmanship/bint-saeed-textile-selection-process.png',
    alt: 'Bint Saeed luxury textile and fabric selection for bespoke abayas—evaluating drape, weight, and performance during development in Abu Dhabi',
  },
  cutting: {
    src: '/craftsmanship/bint-saeed-fabric-cutting.png',
    alt: 'Bint Saeed—precision fabric cutting in the Abu Dhabi atelier; controlled cutting for bespoke luxury abayas produced in the UAE',
  },
  shears: {
    src: '/craftsmanship/bint-saeed-atelier-shears-cutting.jpg',
    alt: 'Bint Saeed atelier—hand cutting fabric with professional shears during precision construction for luxury abayas in Abu Dhabi',
  },
  threads: {
    src: '/craftsmanship/bint-saeed-thread-spools.png',
    alt: 'Bint Saeed—premium tailoring threads for luxury abaya construction; materials chosen for durability, consistency, and refined finish',
  },
} as const

function Still({
  src,
  alt,
  className = '',
  priority = false,
  objectPosition = 'object-center',
}: {
  src: string
  alt: string
  className?: string
  priority?: boolean
  objectPosition?: string
}) {
  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : 'auto'}
      className={`h-full w-full object-cover brightness-[1.02] contrast-[1.03] transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035] ${objectPosition} ${className}`}
    />
  )
}

function Film({
  src,
  ariaLabel,
  className = '',
}: {
  src: string
  ariaLabel: string
  className?: string
}) {
  return (
    <video
      src={src}
      aria-label={ariaLabel}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className={`h-full w-full object-cover ${className}`}
    />
  )
}

/** Social-post style media tile — sharp editorial crop, no card chrome. */
function Post({
  children,
  className = '',
  ratio = 'aspect-[4/5]',
}: {
  children: ReactNode
  className?: string
  ratio?: string
}) {
  return (
    <div
      className={`group relative isolate overflow-hidden bg-[#120910] shadow-[0_28px_64px_-40px_rgba(18,9,16,0.55)] ${ratio} ${className}`}
    >
      {children}
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(18,9,16,0.08)_0%,transparent_34%,rgba(18,9,16,0.12)_100%)]"
        aria-hidden
      />
    </div>
  )
}

function PhaseProse({
  phase,
  headingId,
  accent = 'dusty',
}: {
  phase: CraftsmanshipPhaseCopy
  headingId: string
  accent?: 'dusty' | 'clay'
}) {
  const { isRTL } = useLanguage()
  const labelColor = accent === 'clay' ? 'text-brand-clayRed/90' : 'text-brand-dustyBlue'

  return (
    <div className={`max-w-3xl ${isRTL ? 'ms-auto text-right' : ''}`}>
      <p className={`mb-3 font-montserrat text-[10px] uppercase tracking-[0.42em] ${labelColor}`}>{phase.label}</p>
      <h2
        id={headingId}
        className="font-rozha text-[clamp(1.75rem,3.4vw,2.65rem)] leading-[1.05] tracking-[0.03em] text-brand-darkRed"
      >
        {phase.title}
      </h2>
      <div className="mt-8 space-y-6 font-montserrat text-[15px] leading-[1.95] tracking-[0.02em] text-brand-darkRed/[0.88] md:mt-10 md:space-y-7 md:text-[16px] md:leading-[2]">
        {phase.paragraphs.map((paragraph, index) => (
          <p key={index} className="mb-0">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  )
}

export default function CraftsmanshipClient() {
  const { t, isRTL, language } = useLanguage()
  const copy = getCraftsmanshipCopy(language)
  const title = language === 'id' ? copy.breadcrumbCraftsmanship : (t.footer?.craftsmanship ?? 'Craftsmanship')
  const eyebrow = getAboutEditorialHeroEyebrow(language)
  const description = t.about?.craftsmanshipDesc ?? ''
  const homeLabel = language === 'id' ? copy.breadcrumbHome : isRTL ? 'الرئيسية' : 'Home'
  const craftLabel = language === 'id' ? copy.breadcrumbCraftsmanship : isRTL ? 'الحرفية' : 'Craftsmanship'

  return (
    <div className={`relative isolate min-h-screen w-full min-w-0 bg-brand-pageCanvas ${isRTL ? 'rtl' : 'ltr'}`}>
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_8%_12%,rgba(146,170,193,0.1)_0%,transparent_52%)]"
        aria-hidden
      />

      <AboutSectionHero
        rtl={isRTL}
        imageSrc={ABOUT_SECTION_HERO_IMAGES.craftsmanship}
        imageAlt="Bint Saeed — craftsmanship editorial banner"
        priority
        segments={[
          { label: homeLabel, href: '/home' },
          { label: craftLabel },
        ]}
        eyebrow={eyebrow}
        title={title}
        description={description || undefined}
      />

      {/* Opening — social collage: large story + stacked posts */}
      <section
        className="bs-full-bleed relative border-b border-brand-stone/15 bg-[#0a0608] pb-4 pt-0 md:pb-6"
        aria-label="Bint Saeed atelier finishing"
      >
        <div className={`${EDITORIAL_PAGE_CONTAINER} py-5 md:py-8`}>
          <div className="grid grid-cols-12 gap-3 md:gap-4 lg:gap-5">
            <div className="col-span-12 md:col-span-7 lg:col-span-8">
              <Post ratio="aspect-[4/5] md:aspect-[5/6] lg:aspect-auto lg:min-h-[min(78vh,820px)] lg:h-full">
                <Still src={MEDIA.label.src} alt={MEDIA.label.alt} priority objectPosition="object-top" />
              </Post>
            </div>
            <div className="col-span-12 grid grid-cols-2 gap-3 md:col-span-5 md:grid-cols-1 md:gap-4 lg:col-span-4 lg:gap-5">
              <Post ratio="aspect-[3/4] md:aspect-[4/5]">
                <Still src={MEDIA.khous.src} alt={MEDIA.khous.alt} />
              </Post>
              <Post ratio="aspect-[3/4] md:aspect-[4/5]">
                <Film src={CRAFT_VIDEO_BANDS[2].src} ariaLabel={CRAFT_VIDEO_BANDS[2].ariaLabel} />
              </Post>
            </div>
          </div>
        </div>
      </section>

      {/* Phase I — copy as editorial caption beside / under media */}
      <section className="relative overflow-hidden py-16 md:py-24 lg:py-28" aria-labelledby="phase-i">
        <div className={EDITORIAL_PAGE_CONTAINER}>
          <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-10">
            <div className={`lg:col-span-5 lg:pb-6 ${isRTL ? 'lg:order-2' : ''}`}>
              <PhaseProse phase={copy.phaseI} headingId="phase-i" />
            </div>
            <div className={`lg:col-span-7 ${isRTL ? 'lg:order-1' : ''}`}>
              <div className="grid grid-cols-12 gap-3 md:gap-4">
                <div className="col-span-7 md:col-span-6 md:pt-10">
                  <Post ratio="aspect-[3/4]">
                    <Still src={MEDIA.cad.src} alt={MEDIA.cad.alt} />
                  </Post>
                </div>
                <div className="col-span-5 flex flex-col gap-3 md:col-span-6 md:gap-4 md:pt-0">
                  <Post ratio="aspect-square md:aspect-[4/5]">
                    <Still src={MEDIA.pattern.src} alt={MEDIA.pattern.alt} />
                  </Post>
                  <Post ratio="aspect-[4/5] md:aspect-[5/4]" className="hidden md:block">
                    <Still src={MEDIA.textile.src} alt={MEDIA.textile.alt} />
                  </Post>
                </div>
                <div className="col-span-12 md:hidden">
                  <Post ratio="aspect-[16/10]">
                    <Still src={MEDIA.textile.src} alt={MEDIA.textile.alt} />
                  </Post>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cinematic story post — process film as a centered editorial frame */}
      <section className="bs-full-bleed relative bg-[#0a0608] py-8 md:py-12" aria-label={CRAFT_VIDEO_BANDS[0].ariaLabel}>
        <div className={`${EDITORIAL_PAGE_CONTAINER} max-w-[1100px]`}>
          <Post ratio="aspect-[9/16] sm:aspect-[4/5] md:aspect-[16/9]">
            <Film src={CRAFT_VIDEO_BANDS[0].src} ariaLabel={CRAFT_VIDEO_BANDS[0].ariaLabel} />
          </Post>
        </div>
      </section>

      {/* Phase II — making, with staggered atelier posts */}
      <section className="relative overflow-hidden py-16 md:py-24 lg:py-28" aria-labelledby="phase-ii">
        <div className={EDITORIAL_PAGE_CONTAINER}>
          <div className="mb-12 max-w-3xl md:mb-16 lg:mb-20">
            <PhaseProse phase={copy.phaseII} headingId="phase-ii" accent="clay" />
          </div>

          <div className="grid grid-cols-12 gap-3 md:gap-4 lg:gap-5">
            <div className="col-span-12 md:col-span-8 lg:col-span-7">
              <Post ratio="aspect-[16/10] md:aspect-[16/9]">
                <Still src={MEDIA.shears.src} alt={MEDIA.shears.alt} objectPosition="object-[center_40%]" />
              </Post>
            </div>
            <div className="col-span-6 md:col-span-4 md:pt-16 lg:col-span-5 lg:pt-24">
              <Post ratio="aspect-[3/4]">
                <Still src={MEDIA.threads.src} alt={MEDIA.threads.alt} />
              </Post>
            </div>
            <div className="col-span-6 md:col-span-5 lg:col-span-4 lg:-mt-20">
              <Post ratio="aspect-[3/4] md:aspect-[4/5]">
                <Film src={CRAFT_VIDEO_BANDS[1].src} ariaLabel={CRAFT_VIDEO_BANDS[1].ariaLabel} />
              </Post>
            </div>
            <div className="col-span-12 md:col-span-7 md:pt-8 lg:col-span-8 lg:pt-4">
              <Post ratio="aspect-[16/10] md:aspect-[21/9]">
                <Still src={MEDIA.cutting.src} alt={MEDIA.cutting.alt} />
              </Post>
            </div>
          </div>
        </div>
      </section>

      {/* Phase III — direction, quiet prose + closing atelier stills */}
      <section
        className="relative overflow-hidden border-y border-brand-stone/20 bg-[linear-gradient(180deg,#f7f3ec_0%,#efe9df_55%,#e8e2d8_100%)] py-16 md:py-24 lg:py-28"
        aria-labelledby="phase-iii"
      >
        <div className={EDITORIAL_PAGE_CONTAINER}>
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
            <div className={`lg:col-span-6 ${isRTL ? 'lg:order-2' : ''}`}>
              <PhaseProse phase={copy.phaseIII} headingId="phase-iii" />
            </div>
            <div className={`grid grid-cols-2 gap-3 md:gap-4 lg:col-span-6 ${isRTL ? 'lg:order-1' : ''}`}>
              <Post ratio="aspect-[3/4] md:mt-14">
                <Still src={MEDIA.khous.src} alt={MEDIA.khous.alt} />
              </Post>
              <Post ratio="aspect-[3/4]">
                <Still src={MEDIA.label.src} alt={MEDIA.label.alt} objectPosition="object-top" />
              </Post>
            </div>
          </div>
        </div>
      </section>

      {/* Closing film — full-bleed social story */}
      <section className="bs-full-bleed relative overflow-hidden bg-[#060304]" aria-label={CRAFT_VIDEO_BANDS[2].ariaLabel}>
        <div className="relative mx-auto max-w-[1400px]">
          <div className="relative aspect-[9/16] w-full sm:aspect-[3/4] md:aspect-[21/9]">
            <Film src={CRAFT_VIDEO_BANDS[2].src} ariaLabel={CRAFT_VIDEO_BANDS[2].ariaLabel} />
            <div
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(250,248,245,0.12)_0%,transparent_36%,rgba(8,4,6,0.35)_100%)]"
              aria-hidden
            />
          </div>
        </div>
      </section>

      <section className="relative z-[45] overflow-hidden border-t border-brand-stone/35 bg-brand-pageCanvas px-6 py-24 md:py-32">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_0%,rgba(146,170,193,0.14)_0%,transparent_58%)]"
          aria-hidden
        />
        <div className="relative mx-auto flex max-w-lg flex-col items-center text-center">
          <p className="mb-10 font-rozha text-[clamp(1.75rem,4vw,2.5rem)] tracking-[0.02em] text-brand-darkRed">
            {copy.ctaHeading}
          </p>
          <LocaleLink
            href="/shop?from=craftsmanship"
            className="inline-flex min-h-[52px] items-center justify-center gap-3 rounded-[4px] border border-brand-darkRed/40 bg-brand-darkRed/[0.06] px-10 py-4 font-montserrat text-xs uppercase tracking-[0.22em] text-brand-darkRed shadow-[0_18px_48px_-28px_rgba(42,0,18,0.22)] transition-colors hover:border-brand-dustyBlue hover:bg-brand-dustyBlue hover:text-brand-pageCanvas"
            data-cursor-hover
          >
            {copy.ctaButton}
            <FiArrowRight className="h-4 w-4" />
          </LocaleLink>
        </div>
      </section>
    </div>
  )
}
