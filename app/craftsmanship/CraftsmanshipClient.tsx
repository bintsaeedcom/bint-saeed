'use client'

import LocaleLink from '@/components/LocaleLink'
import AboutSectionHero from '@/components/AboutSectionHero'
import { ABOUT_SECTION_HERO_IMAGES } from '@/lib/about/aboutSectionHeroImages'
import { getAboutEditorialHeroEyebrow } from '@/lib/about/aboutEditorialHeroChrome'
import { getCraftsmanshipCopy } from '@/lib/content/craftsmanshipCopyI18n'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { FiArrowRight } from 'react-icons/fi'

/** Full-bleed bands (top → middle → bottom). */
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

const LABEL_STITCHING_IMAGE = {
  src: '/craftsmanship/bint-saeed-label-stitching.png',
  alt: 'Bint Saeed woven label detail and hand finishing on a bespoke abaya—quality-controlled construction at the Bint Saeed atelier in Abu Dhabi',
} as const

const KHOUS_BRAID_IMAGE = {
  src: '/craftsmanship/bint-saeed-khous-braid.png',
  alt: 'Bint Saeed—Khous braid integrated into garment structure; Emirati palm-frond weaving referenced in contemporary luxury abaya design, Abu Dhabi',
} as const

const MOSAIC_IMAGES = [
  [
    {
      src: '/craftsmanship/bint-saeed-cad-abaya-pattern.png',
      alt: 'Bint Saeed CAD abaya pattern on screen—technical lines for proportion and construction resolved before cutting; luxury development between Italy and Abu Dhabi',
    },
    {
      src: '/craftsmanship/bint-saeed-pattern-drawing.png',
      alt: 'Bint Saeed—abaya pattern drawing during development; proportion, balance, and construction studied before sampling and production',
    },
    {
      src: '/craftsmanship/bint-saeed-textile-selection-process.png',
      alt: 'Bint Saeed luxury textile and fabric selection for bespoke abayas—evaluating drape, weight, and performance during development in Abu Dhabi',
    },
  ],
  [
    {
      src: '/craftsmanship/bint-saeed-fabric-cutting.png',
      alt: 'Bint Saeed—precision fabric cutting in the Abu Dhabi atelier; controlled cutting for bespoke luxury abayas produced in the UAE',
    },
    {
      src: '/craftsmanship/bint-saeed-thread-spools.png',
      alt: 'Bint Saeed—premium tailoring threads for luxury abaya construction; materials chosen for durability, consistency, and refined finish',
    },
  ],
] as const

function DecorativeCorners(_props?: { tone?: 'dustyBlue' | 'darkRed' }) {
  return null
}

/**
 * Mosaic tile — native img avoids Next/Image sizing edge cases inside nested sticky/aspect layouts.
 */
function MosaicTileImage({
  src,
  alt,
  className = '',
  priority = false,
}: {
  src: string
  alt: string
  className?: string
  priority?: boolean
}) {
  return (
    <div className={`relative h-full min-h-[200px] w-full overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
        className="absolute inset-0 z-[1] h-full w-full object-cover brightness-[1.03] contrast-[1.02]"
      />
      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-[linear-gradient(180deg,transparent_55%,rgba(26,0,8,0.06)_100%)]"
        aria-hidden
      />
    </div>
  )
}

function ScreenVideo({
  src,
  ariaLabel,
  introHandoff,
  className = '',
}: {
  src: string
  ariaLabel: string
  /** Hero only: dark + dusty-blue end fade so it does not blend into the cream intro strip below */
  introHandoff?: boolean
  className?: string
}) {
  return (
    <section className={`bs-full-bleed relative overflow-hidden bg-[#060304] ${className}`}>
      <div className="pointer-events-none absolute inset-0 z-[4] opacity-90">
        <DecorativeCorners tone="dustyBlue" />
      </div>
      <video
        src={src}
        aria-label={ariaLabel}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="relative z-[1] block h-[min(72vh,100vw)] w-full object-cover md:h-[min(78vh,56.25vw)]"
      />
      {introHandoff ? (
        <>
          <div
            className="pointer-events-none absolute inset-0 z-[2] bg-[linear-gradient(to_top,rgba(146,170,193,0.11)_0%,transparent_40%,rgba(10,6,9,0.42)_100%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-[min(32vh,260px)] bg-gradient-to-t from-[#0a0608] via-[#140c10]/95 to-transparent"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-[4] h-24 bg-gradient-to-t from-[#1a121a]/90 via-brand-dustyBlue/[0.12] to-transparent"
            aria-hidden
          />
        </>
      ) : (
        <>
          <div
            className="pointer-events-none absolute inset-0 z-[2] bg-[linear-gradient(to_top,rgba(250,249,247,0.1)_0%,transparent_38%,rgba(8,4,6,0.35)_100%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-24 bg-gradient-to-t from-[#ebe6df] via-[#ebe6df]/45 to-transparent"
            aria-hidden
          />
        </>
      )}
    </section>
  )
}

function PhaseDivider() {
  return (
    <div className="relative flex justify-center py-16 md:py-20" aria-hidden>
      <div className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-brand-dustyBlue/35 to-transparent" />
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#f7f4ee] px-6 font-rozha text-lg tracking-[0.55em] text-brand-darkRed/30 md:bg-transparent md:px-0 md:text-xl">
        ⸻
      </span>
    </div>
  )
}

/** Portrait editorial frame — sharp corners, tall ratio, editorial shadow */
function PortraitFrame({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`group relative shadow-[0_36px_80px_-36px_rgba(26,0,8,0.45),0_12px_36px_-16px_rgba(26,0,8,0.28)] transition-[box-shadow] duration-500 hover:shadow-[0_44px_96px_-38px_rgba(26,0,8,0.5)] ${className}`}
    >
      <div className="relative h-full min-h-0 w-full overflow-hidden bg-[#ebe4d8]">
        {children}
      </div>
    </div>
  )
}

function ParallaxMosaic({
  items,
  layout,
}: {
  items: readonly { src: string; alt: string }[]
  layout: 'three' | 'two' | 'twoWide'
}) {
  /** Tall portrait tiles — sharp frame, 3:4 ratio scales with grid width */
  const frame = (src: string, alt: string) => (
    <PortraitFrame className="relative aspect-[3/4] w-full">
      <MosaicTileImage src={src} alt={alt} className="absolute inset-0 h-full w-full min-h-0" />
    </PortraitFrame>
  )

  /** Bleed inward slightly less on large screens so portraits read larger */
  const bleed = 'bs-full-bleed px-3 sm:px-5 lg:px-8'

  if (layout === 'three') {
    return (
      <div className="relative my-10 md:my-14">
        <div className={bleed}>
          <div className="mx-auto grid max-w-[100rem] grid-cols-1 gap-7 sm:gap-9 md:grid-cols-3 md:gap-8 md:items-start">
            {items.map((item) => (
              <div key={item.src} className="relative w-full">
                {frame(item.src, item.alt)}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  const maxInner = layout === 'twoWide' ? 'max-w-7xl' : 'max-w-6xl'

  return (
    <div className="relative my-10 md:my-14">
      <div className={bleed}>
        <div
          className={`mx-auto grid ${maxInner} grid-cols-1 gap-7 sm:gap-9 md:grid-cols-2 md:gap-12 md:items-stretch`}
        >
          {items.map((item) => (
            <div key={item.src} className="relative flex w-full">
              {frame(item.src, item.alt)}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/** Opening editorial — label leads, flush under topic nav (no gap). */
function OpeningAtelierGallery({ rtl }: { rtl: boolean }) {
  return (
    <section
      className="bs-full-bleed relative border-b border-brand-stone/20 bg-[#0a0608]"
      aria-label="Bint Saeed atelier finishing"
    >
      <div
        className={`grid md:min-h-[min(72vh,720px)] md:grid-cols-12 ${rtl ? '[direction:rtl]' : ''}`}
      >
        <div className="relative md:col-span-7 lg:col-span-8">
          <div className="relative aspect-[4/5] w-full md:aspect-auto md:min-h-[min(72vh,720px)] md:h-full">
            <MosaicTileImage
              src={LABEL_STITCHING_IMAGE.src}
              alt={LABEL_STITCHING_IMAGE.alt}
              priority
              className="absolute inset-0 h-full min-h-0"
            />
          </div>
        </div>
        <div className="relative border-t border-white/[0.06] md:col-span-5 md:border-l md:border-t-0 md:border-white/[0.08] lg:col-span-4">
          <div className="relative aspect-[3/4] w-full md:aspect-auto md:min-h-[min(72vh,720px)] md:h-full">
            <MosaicTileImage
              src={KHOUS_BRAID_IMAGE.src}
              alt={KHOUS_BRAID_IMAGE.alt}
              className="absolute inset-0 h-full min-h-0"
            />
          </div>
        </div>
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-14 bg-gradient-to-t from-brand-pageCanvas to-transparent md:h-20"
        aria-hidden
      />
    </section>
  )
}

function ProsePhase({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { isRTL } = useLanguage()
  return (
    <div
      className={`font-montserrat text-[15px] leading-[1.92] tracking-[0.02em] text-brand-darkRed/[0.92] md:text-[17px] md:leading-[2] ${isRTL ? 'text-right' : ''} ${className}`}
    >
      {children}
    </div>
  )
}

/** Full-bleed atmospheric band behind phase — “overflow” beyond text column */
function PhaseAtmosphere({
  variant,
  children,
}: {
  variant: 'ivory' | 'stone' | 'noir'
  children: React.ReactNode
}) {
  const bg =
    variant === 'ivory'
      ? 'bg-[linear-gradient(165deg,#fdfcfa_0%,#f4efe6_48%,#ebe4d8_100%)]'
      : variant === 'stone'
        ? 'bg-[linear-gradient(175deg,#f0ebe3_0%,#e8e2d8_45%,#ddd5c9_100%)]'
        : 'bg-[linear-gradient(180deg,#f7f3ec_0%,#efe9df_55%,#e5dfd4_100%)]'

  return (
    <div className="relative">
      <div
        className={`pointer-events-none absolute inset-y-0 left-[calc(50%-50vw)] z-0 w-screen max-w-[100vw] ${bg}`}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 left-[calc(50%-50vw)] z-0 w-screen max-w-[100vw] bg-[radial-gradient(ellipse_90%_60%_at_70%_20%,rgba(146,170,193,0.14)_0%,transparent_55%)]"
        aria-hidden
      />
      <div className="relative z-10">{children}</div>
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
    <div className="relative isolate min-h-screen w-full min-w-0 bg-brand-pageCanvas">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_12%_10%,rgba(146,170,193,0.12)_0%,transparent_48%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_90%_at_86%_82%,rgba(193,144,134,0.09)_0%,transparent_60%)]"
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

      <OpeningAtelierGallery rtl={isRTL} />

      {/* Phase I — overflowing band + split columns (approved copy unchanged) */}
      <PhaseAtmosphere variant="ivory">
        <article
          className="relative px-6 pb-20 pt-14 md:pb-28 md:pt-20 lg:px-16 lg:pb-36 lg:pt-24"
          aria-labelledby="phase-i"
        >
          <DecorativeCorners tone="dustyBlue" />
          <div className="relative mx-auto max-w-[90rem]">
            <div className="grid gap-14 lg:grid-cols-12 lg:items-start lg:gap-16 xl:gap-24">
              <header className="lg:col-span-4 xl:col-span-3 lg:pt-0">
                <p className="mb-4 font-montserrat text-[10px] uppercase tracking-[0.42em] text-brand-dustyBlue">{copy.phaseI.label}</p>
                <h2
                  id="phase-i"
                  className="font-rozha text-[clamp(1.65rem,3vw,2.35rem)] leading-tight tracking-[0.04em] text-brand-darkRed"
                >
                  {copy.phaseI.title}
                </h2>
                <div className="mt-10 hidden h-px w-16 bg-gradient-to-r from-brand-dustyBlue/60 to-transparent lg:block" aria-hidden />
              </header>
              <div className="lg:col-span-8 xl:col-span-9">
                <div className="grid items-start gap-10 md:grid-cols-2 md:gap-x-16 md:gap-y-10 lg:gap-y-12">
                  <ProsePhase>
                    <p className="mb-0">{copy.phaseI.paragraphs[0]}</p>
                  </ProsePhase>
                  <ProsePhase>
                    <p className="mb-0">{copy.phaseI.paragraphs[1]}</p>
                  </ProsePhase>
                </div>
              </div>
            </div>
          </div>
        </article>
      </PhaseAtmosphere>

      <ParallaxMosaic items={[...MOSAIC_IMAGES[0]]} layout="three" />

      <div className="relative z-[22] bg-brand-pageCanvas">
        <PhaseDivider />
      </div>

      {/* Film 1 of 3 — development through production */}
      <ScreenVideo
        className="relative z-[25]"
        src={CRAFT_VIDEO_BANDS[0].src}
        ariaLabel={CRAFT_VIDEO_BANDS[0].ariaLabel}
      />

      {/* Phase II */}
      <PhaseAtmosphere variant="stone">
        <article
          className="relative px-6 py-20 md:py-28 lg:px-16 lg:py-36"
          aria-labelledby="phase-ii"
        >
          <DecorativeCorners tone="darkRed" />
          <div className="relative mx-auto max-w-[90rem]">
            <div className="grid gap-14 lg:grid-cols-12 lg:items-start lg:gap-16 xl:gap-24">
              <header className="lg:col-span-4 xl:col-span-3">
                <p className="mb-4 font-montserrat text-[10px] uppercase tracking-[0.42em] text-brand-clayRed/90">{copy.phaseII.label}</p>
                <h2
                  id="phase-ii"
                  className="font-rozha text-[clamp(1.65rem,3vw,2.35rem)] leading-tight tracking-[0.04em] text-brand-darkRed"
                >
                  {copy.phaseII.title}
                </h2>
                <div className="mt-10 hidden h-px w-16 bg-gradient-to-r from-brand-darkRed/45 to-transparent lg:block" aria-hidden />
              </header>
              <div className="lg:col-span-8 xl:col-span-9">
                <div className="grid items-start gap-12 md:grid-cols-2 md:gap-x-14 md:gap-y-12">
                  <ProsePhase>
                    <p className="mb-0">{copy.phaseII.paragraphs[0]}</p>
                  </ProsePhase>
                  <ProsePhase>
                    <p className="mb-0">{copy.phaseII.paragraphs[1]}</p>
                  </ProsePhase>
                  <ProsePhase>
                    <p className="mb-0">{copy.phaseII.paragraphs[2]}</p>
                  </ProsePhase>
                  <ProsePhase>
                    <p className="mb-0">{copy.phaseII.paragraphs[3]}</p>
                  </ProsePhase>
                </div>
              </div>
            </div>
          </div>
        </article>
      </PhaseAtmosphere>

      <ParallaxMosaic items={[...MOSAIC_IMAGES[1]]} layout="two" />

      <div className="relative z-[32] bg-brand-pageCanvas">
        <PhaseDivider />
      </div>

      {/* Film 2 of 3 — mid-page atelier */}
      <ScreenVideo
        className="relative z-[35]"
        src={CRAFT_VIDEO_BANDS[1].src}
        ariaLabel={CRAFT_VIDEO_BANDS[1].ariaLabel}
      />

      {/* Phase III */}
      <PhaseAtmosphere variant="noir">
        <article
          className="relative px-6 py-20 pb-28 md:py-28 md:pb-36 lg:px-16 lg:py-36"
          aria-labelledby="phase-iii"
        >
          <DecorativeCorners tone="dustyBlue" />
          <div className="relative mx-auto max-w-[90rem]">
            <div className="grid gap-14 lg:grid-cols-12 lg:items-start lg:gap-16 xl:gap-24">
              <header className="lg:col-span-4 xl:col-span-3">
                <p className="mb-4 font-montserrat text-[10px] uppercase tracking-[0.42em] text-brand-dustyBlue">{copy.phaseIII.label}</p>
                <h2
                  id="phase-iii"
                  className="font-rozha text-[clamp(1.65rem,3vw,2.35rem)] leading-tight tracking-[0.04em] text-brand-darkRed"
                >
                  {copy.phaseIII.title}
                </h2>
                <div className="mt-10 hidden h-px w-16 bg-gradient-to-r from-brand-dustyBlue/55 to-transparent lg:block" aria-hidden />
              </header>
              <div className="flex flex-col gap-12 lg:col-span-8 xl:col-span-9 lg:gap-14">
                <ProsePhase className="max-w-3xl">
                  <p className="mb-0">{copy.phaseIII.paragraphs[0]}</p>
                </ProsePhase>
                <div className="grid items-start gap-12 md:grid-cols-2 md:gap-x-14">
                  <ProsePhase>
                    <p className="mb-0">{copy.phaseIII.paragraphs[1]}</p>
                  </ProsePhase>
                  <ProsePhase>
                    <p className="mb-0">{copy.phaseIII.paragraphs[2]}</p>
                  </ProsePhase>
                </div>
              </div>
            </div>
          </div>
        </article>
      </PhaseAtmosphere>

      {/* Film 3 of 3 — hand finishing */}
      <ScreenVideo
        className="relative z-[40]"
        src={CRAFT_VIDEO_BANDS[2].src}
        ariaLabel={CRAFT_VIDEO_BANDS[2].ariaLabel}
      />

      <section className="relative z-[45] overflow-hidden border-t border-brand-stone/35 bg-brand-pageCanvas px-6 py-24 md:py-32">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_0%,rgba(146,170,193,0.14)_0%,transparent_58%)]"
          aria-hidden
        />
        <DecorativeCorners tone="dustyBlue" />
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
