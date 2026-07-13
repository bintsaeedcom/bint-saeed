'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import LocaleLink from '@/components/LocaleLink'
import AboutSectionHero from '@/components/AboutSectionHero'
import { ABOUT_SECTION_HERO_IMAGES } from '@/lib/about/aboutSectionHeroImages'
import { getAboutEditorialHeroEyebrow } from '@/lib/about/aboutEditorialHeroChrome'
import { getCraftsmanshipCopy, type CraftsmanshipPhaseCopy } from '@/lib/content/craftsmanshipCopyI18n'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { EDITORIAL_PAGE_CONTAINER } from '@/lib/ui/editorialPageChrome'
import { FiArrowRight } from 'react-icons/fi'

/** Each film used once — compact atelier strip. */
const CRAFT_VIDEOS = [
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
  const ref = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    el.muted = true
    el.defaultMuted = true
    el.playsInline = true
    el.setAttribute('muted', '')
    el.setAttribute('playsinline', '')
    el.setAttribute('webkit-playsinline', '')

    const tryPlay = () => {
      const playAttempt = el.play()
      if (playAttempt && typeof playAttempt.catch === 'function') {
        playAttempt.catch(() => {
          /* Autoplay can be blocked briefly; retry on visibility. */
        })
      }
    }

    tryPlay()
    el.addEventListener('loadeddata', tryPlay)
    el.addEventListener('canplay', tryPlay)

    const onVisible = () => {
      if (document.visibilityState === 'visible') tryPlay()
    }
    document.addEventListener('visibilitychange', onVisible)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) tryPlay()
          else el.pause()
        }
      },
      { threshold: 0.25 },
    )
    observer.observe(el)

    return () => {
      el.removeEventListener('loadeddata', tryPlay)
      el.removeEventListener('canplay', tryPlay)
      document.removeEventListener('visibilitychange', onVisible)
      observer.disconnect()
    }
  }, [src])

  return (
    <video
      ref={ref}
      src={src}
      aria-label={ariaLabel}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      disablePictureInPicture
      controls={false}
      className={`h-full w-full object-cover ${className}`}
    />
  )
}

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
      className={`group relative isolate overflow-hidden bg-brand-stone/25 shadow-[0_28px_64px_-40px_rgba(42,0,18,0.18)] ${ratio} ${className}`}
    >
      {children}
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(26,2,16,0.04)_0%,transparent_34%,rgba(26,2,16,0.06)_100%)]"
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

      {/* Opening — label + khous once */}
      <section
        className="bs-full-bleed relative border-b border-brand-stone/15 bg-brand-pageCanvas pb-4 pt-0 md:pb-6"
        aria-label="Bint Saeed atelier finishing"
      >
        <div className={`${EDITORIAL_PAGE_CONTAINER} py-5 md:py-8`}>
          <div className="grid grid-cols-12 gap-3 md:gap-4 lg:gap-5">
            <div className="col-span-12 md:col-span-7 lg:col-span-8">
              <Post ratio="aspect-[4/5] md:aspect-[5/6] lg:aspect-auto lg:min-h-[min(62vh,640px)] lg:h-full">
                <Still src={MEDIA.label.src} alt={MEDIA.label.alt} priority objectPosition="object-top" />
              </Post>
            </div>
            <div className="col-span-12 md:col-span-5 lg:col-span-4">
              <Post ratio="aspect-[3/4] md:aspect-auto md:h-full md:min-h-[min(62vh,640px)]">
                <Still src={MEDIA.khous.src} alt={MEDIA.khous.alt} />
              </Post>
            </div>
          </div>
        </div>
      </section>

      {/* Phase I */}
      <section className="relative overflow-hidden py-14 md:py-20 lg:py-24" aria-labelledby="phase-i">
        <div className={EDITORIAL_PAGE_CONTAINER}>
          <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-10">
            <div className={`lg:col-span-5 lg:pb-4 ${isRTL ? 'lg:order-2' : ''}`}>
              <PhaseProse phase={copy.phaseI} headingId="phase-i" />
            </div>
            <div className={`lg:col-span-7 ${isRTL ? 'lg:order-1' : ''}`}>
              <div className="grid grid-cols-12 gap-3 md:gap-4">
                <div className="col-span-7 md:col-span-6">
                  <Post ratio="aspect-[3/4]">
                    <Still src={MEDIA.cad.src} alt={MEDIA.cad.alt} />
                  </Post>
                </div>
                <div className="col-span-5 flex flex-col gap-3 md:col-span-6 md:gap-4">
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

      {/* Atelier films — once each, compact carousel / grid */}
      <section
        className="bs-full-bleed relative border-y border-brand-stone/15 bg-brand-pageCanvas py-8 md:py-12"
        aria-label="Bint Saeed atelier process films"
      >
        <div className={EDITORIAL_PAGE_CONTAINER}>
          <div
            className={`flex gap-3 overflow-x-auto pb-1 snap-x snap-mandatory scroll-px-4 [-ms-overflow-style:none] [scrollbar-width:none] md:grid md:grid-cols-3 md:gap-4 md:overflow-visible md:pb-0 md:snap-none [&::-webkit-scrollbar]:hidden ${
              isRTL ? 'flex-row-reverse md:flex-row' : ''
            }`}
          >
            {CRAFT_VIDEOS.map((video) => (
              <div
                key={video.src}
                className="w-[72%] max-w-[17.5rem] shrink-0 snap-center sm:w-[58%] sm:max-w-[20rem] md:w-auto md:max-w-none"
              >
                <Post ratio="aspect-[4/5] md:aspect-[3/4]">
                  <Film src={video.src} ariaLabel={video.ariaLabel} />
                </Post>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phase II */}
      <section className="relative overflow-hidden py-14 md:py-20 lg:py-24" aria-labelledby="phase-ii">
        <div className={EDITORIAL_PAGE_CONTAINER}>
          <div className="mb-10 max-w-3xl md:mb-14">
            <PhaseProse phase={copy.phaseII} headingId="phase-ii" accent="clay" />
          </div>

          <div className="grid grid-cols-12 gap-3 md:gap-4 lg:gap-5">
            <div className="col-span-12 md:col-span-8 lg:col-span-7">
              <Post ratio="aspect-[16/10] md:aspect-[16/9]">
                <Still src={MEDIA.shears.src} alt={MEDIA.shears.alt} objectPosition="object-[center_40%]" />
              </Post>
            </div>
            <div className="col-span-6 md:col-span-4 lg:col-span-5">
              <Post ratio="aspect-[3/4] md:aspect-auto md:h-full">
                <Still src={MEDIA.threads.src} alt={MEDIA.threads.alt} />
              </Post>
            </div>
            <div className="col-span-6 md:col-span-12 lg:col-span-12">
              <Post ratio="aspect-[4/5] md:aspect-[21/9]">
                <Still src={MEDIA.cutting.src} alt={MEDIA.cutting.alt} />
              </Post>
            </div>
          </div>
        </div>
      </section>

      {/* Phase III — prose only (no repeated stills) */}
      <section
        className="relative overflow-hidden border-y border-brand-stone/20 bg-[linear-gradient(180deg,#f7f3ec_0%,#efe9df_55%,#e8e2d8_100%)] py-14 md:py-20 lg:py-24"
        aria-labelledby="phase-iii"
      >
        <div className={EDITORIAL_PAGE_CONTAINER}>
          <PhaseProse phase={copy.phaseIII} headingId="phase-iii" />
        </div>
      </section>

      <section className="relative z-[45] overflow-hidden border-t border-brand-stone/35 bg-brand-pageCanvas px-6 py-20 md:py-28">
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
