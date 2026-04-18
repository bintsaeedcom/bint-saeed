'use client'

import { useRef } from 'react'
import Image from 'next/image'
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  useMotionTemplate,
} from 'framer-motion'
import AppBreadcrumb from '@/components/AppBreadcrumb'
import LocaleLink from '@/components/LocaleLink'
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
  [
    {
      src: '/craftsmanship/bint-saeed-khous-braid.png',
      alt: 'Bint Saeed—Khous braid integrated into garment structure; Emirati palm-frond weaving referenced in contemporary luxury abaya design, Abu Dhabi',
    },
    {
      src: '/craftsmanship/bint-saeed-label-stitching.png',
      alt: 'Bint Saeed woven label detail and hand finishing on a bespoke abaya—quality-controlled construction at the Bint Saeed atelier in Abu Dhabi',
    },
  ],
] as const

/** Matches `/home` editorial framing — decorative corners */
function DecorativeCorners({ tone = 'dustyBlue' }: { tone?: 'dustyBlue' | 'darkRed' }) {
  const c =
    tone === 'dustyBlue' ? 'from-brand-dustyBlue/45' : 'from-brand-darkRed/35'
  return (
    <>
      <div className="pointer-events-none absolute left-6 top-6 h-14 w-14 md:left-10 md:top-10 md:h-20 md:w-20">
        <div className={`absolute left-0 top-0 h-full w-px bg-gradient-to-b ${c} to-transparent`} />
        <div className={`absolute left-0 top-0 h-px w-full bg-gradient-to-r ${c} to-transparent`} />
      </div>
      <div className="pointer-events-none absolute right-6 top-6 h-14 w-14 md:right-10 md:top-10 md:h-20 md:w-20">
        <div className={`absolute right-0 top-0 h-full w-px bg-gradient-to-b ${c} to-transparent`} />
        <div className={`absolute right-0 top-0 h-px w-full bg-gradient-to-l ${c} to-transparent`} />
      </div>
      <div className="pointer-events-none absolute bottom-6 left-6 h-14 w-14 md:bottom-10 md:left-10 md:h-20 md:w-20">
        <div className={`absolute bottom-0 left-0 h-full w-px bg-gradient-to-t ${c} to-transparent`} />
        <div className={`absolute bottom-0 left-0 h-px w-full bg-gradient-to-r ${c} to-transparent`} />
      </div>
      <div className="pointer-events-none absolute bottom-6 right-6 h-14 w-14 md:bottom-10 md:right-10 md:h-20 md:w-20">
        <div className={`absolute bottom-0 right-0 h-full w-px bg-gradient-to-t ${c} to-transparent`} />
        <div className={`absolute bottom-0 right-0 h-px w-full bg-gradient-to-l ${c} to-transparent`} />
      </div>
    </>
  )
}

/** Soft vertical guides — aligned with PreviewHome `SectionStripes` soft variant */
function SectionStripesSoft() {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const drift = useTransform(scrollYProgress, [0, 1], [0, 12])

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <motion.div
        style={reduceMotion ? undefined : { y: drift }}
        className="absolute left-[6%] top-0 h-full w-px bg-gradient-to-b from-transparent via-brand-dustyBlue/28 to-transparent"
      />
      <motion.div
        style={reduceMotion ? undefined : { y: drift }}
        className="absolute right-[7%] top-0 h-full w-px bg-gradient-to-b from-transparent via-brand-clayRed/22 to-transparent"
      />
      <div className="absolute left-[7%] right-[7%] top-0 h-px bg-gradient-to-r from-transparent via-brand-dustyBlue/24 to-transparent" />
      <div className="absolute bottom-0 left-[7%] right-[7%] h-px bg-gradient-to-r from-transparent via-brand-stone/26 to-transparent" />
    </div>
  )
}

/** Scroll-reveal mask + drift — rich tonal grading (warm lift, vignette, subtle grain) */
function ElevatedScrollImage({
  src,
  alt,
  sizes,
  className = '',
}: {
  src: string
  alt: string
  sizes: string
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 92%', 'end 12%'],
  })
  const topInset = useTransform(scrollYProgress, [0, 0.25, 1], [18, 0, 0])
  const bottomInset = useTransform(scrollYProgress, [0, 0.75, 1], [14, 0, 0])
  const imageY = useTransform(scrollYProgress, [0, 1], [18, -12])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.06, 1])
  const veilOpacity = useTransform(scrollYProgress, [0, 0.35, 1], [0.26, 0.05, 0])
  const clipPath = useMotionTemplate`inset(${topInset}% 0% ${bottomInset}% 0%)`

  return (
    <div ref={ref} className={`relative h-full w-full overflow-hidden ${className}`}>
      <motion.div
        style={reduceMotion ? undefined : { clipPath }}
        className="pointer-events-none absolute inset-0"
      >
        <motion.div
          style={reduceMotion ? undefined : { y: imageY, scale: imageScale }}
          className="relative h-full w-full"
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            className="object-cover brightness-[1.03] contrast-[1.05] saturate-[1.07]"
          />
        </motion.div>
      </motion.div>
      {/* Warm highlight — editorial lift */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_65%_at_18%_12%,rgba(255,248,238,0.22)_0%,transparent_52%)] mix-blend-soft-light"
        aria-hidden
      />
      {/* Depth vignette */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_95%_90%_at_50%_58%,transparent_35%,rgba(26,0,8,0.42)_88%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1a0008]/45 via-transparent to-transparent"
        aria-hidden
      />
      <motion.div
        style={reduceMotion ? undefined : { opacity: veilOpacity }}
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/18 via-white/5 to-brand-darkRed/14 mix-blend-screen"
      />
      {/* Fine grain — print texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />
    </div>
  )
}

function ScreenVideo({ src, ariaLabel }: { src: string; ariaLabel: string }) {
  return (
    <section className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 overflow-hidden bg-[#060304]">
      <div className="pointer-events-none absolute inset-0 z-[4] opacity-90">
        <DecorativeCorners tone="dustyBlue" />
      </div>
      <video
        src={src}
        aria-label={ariaLabel}
        title={ariaLabel}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="relative z-[1] block h-[min(72vh,100vw)] w-full object-cover md:h-[min(78vh,56.25vw)]"
      />
      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-[linear-gradient(to_top,rgba(250,249,247,0.14)_0%,transparent_38%,rgba(8,4,6,0.35)_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-24 bg-gradient-to-t from-[#faf9f7] via-[#faf9f7]/40 to-transparent"
        aria-hidden
      />
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

/** Multi-layer frame — champagne rim, soft halo, deep shadow (luxury editorial) */
function ImageJewelFrame({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`group relative ${className}`}>
      <div
        className="pointer-events-none absolute -inset-[10px] rounded-[2.35rem] bg-[radial-gradient(ellipse_at_40%_25%,rgba(201,169,98,0.16)_0%,transparent_58%)] opacity-75 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden
      />
      <div className="relative rounded-[2rem] bg-[linear-gradient(148deg,#fffefb_0%,#efe6dc_42%,#d9cfc4_100%)] p-[3px] shadow-[0_42px_92px_-34px_rgba(42,0,18,0.48),0_18px_44px_-22px_rgba(26,0,8,0.32),inset_0_1px_0_rgba(255,255,255,0.92)] ring-1 ring-[#c9a962]/20 transition-[box-shadow] duration-500 group-hover:shadow-[0_52px_110px_-38px_rgba(42,0,18,0.52),0_22px_50px_-24px_rgba(26,0,8,0.36),inset_0_1px_0_rgba(255,255,255,0.95)]">
        <div className="relative overflow-hidden rounded-[1.82rem] bg-[#060304] shadow-[inset_0_2px_28px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.2)] ring-1 ring-black/30">
          {children}
        </div>
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
  /** Same aspect ratio and alignment for every tile — no rotation or stagger */
  const frame = (src: string, alt: string, sizes: string) => (
    <ImageJewelFrame className="relative aspect-[4/5] w-full">
      <ElevatedScrollImage src={src} alt={alt} sizes={sizes} className="absolute inset-0 h-full min-h-[100%]" />
    </ImageJewelFrame>
  )

  const bleed =
    'relative left-1/2 w-[calc(100vw-1.5rem)] max-w-[min(100vw,88rem)] -translate-x-1/2 px-3 md:w-[calc(100vw-3rem)] lg:px-6'

  if (layout === 'three') {
    return (
      <div className="relative my-8 md:my-12">
        <div className={bleed}>
          <div className="mx-auto grid max-w-[88rem] grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3 md:gap-8 md:items-start">
            {items.map((item) => (
              <div key={item.src} className="relative w-full">
                {frame(item.src, item.alt, '(max-width:768px)100vw,33vw')}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  const maxInner = layout === 'twoWide' ? 'max-w-6xl' : 'max-w-5xl'

  return (
    <div className="relative my-8 md:my-12">
      <div className={bleed}>
        <div
          className={`mx-auto grid ${maxInner} grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 md:gap-10 md:items-stretch`}
        >
          {items.map((item) => (
            <div key={item.src} className="relative flex w-full">
              {frame(item.src, item.alt, '(max-width:768px)100vw,44vw')}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ProsePhase({
  children,
  className = '',
  narrowCap = false,
}: {
  children: React.ReactNode
  className?: string
  narrowCap?: boolean
}) {
  const { isRTL } = useLanguage()
  return (
    <div
      className={`font-roboto text-[15px] leading-[1.92] tracking-[0.02em] text-brand-darkRed/[0.92] md:text-[17px] md:leading-[2] ${narrowCap ? 'first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-rozha first-letter:text-[3.25rem] first-letter:leading-none first-letter:text-brand-darkRed md:first-letter:text-[3.75rem]' : ''} ${isRTL ? 'text-right' : ''} ${className}`}
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
        className={`pointer-events-none absolute inset-y-0 left-1/2 z-0 w-screen max-w-[100vw] -translate-x-1/2 ${bg}`}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 z-0 w-screen max-w-[100vw] -translate-x-1/2 bg-[radial-gradient(ellipse_90%_60%_at_70%_20%,rgba(146,170,193,0.14)_0%,transparent_55%)]"
        aria-hidden
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}

export default function CraftsmanshipClient() {
  const { isRTL } = useLanguage()

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#faf9f7]">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_12%_10%,rgba(146,170,193,0.12)_0%,transparent_48%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_90%_at_86%_82%,rgba(193,144,134,0.09)_0%,transparent_60%)]"
        aria-hidden
      />

      <div className="pt-24 md:pt-28">
        <ScreenVideo src={CRAFT_VIDEO_BANDS[0].src} ariaLabel={CRAFT_VIDEO_BANDS[0].ariaLabel} />
      </div>

      {/* Intro — wide editorial header aligned with home luxury rhythm */}
      <section className="relative border-b border-brand-stone/15 bg-[linear-gradient(180deg,#faf9f7_0%,#f5f1ea_100%)] px-6 pb-16 pt-16 md:pb-24 md:pt-24 lg:px-16">
        <SectionStripesSoft />
        <div className="relative mx-auto max-w-[90rem]">
          <AppBreadcrumb
            variant="muted"
            className="mb-10"
            segments={[
              { label: isRTL ? 'الرئيسية' : 'Home', href: '/home' },
              { label: isRTL ? 'الحرفية' : 'Craftsmanship' },
            ]}
          />
          <div className="max-w-4xl">
            <span className="mb-5 inline-block font-roboto text-[10px] uppercase tracking-[0.42em] text-brand-dustyBlue">
              Bint Saeed
            </span>
            <motion.h1
              data-document-h1="true"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="font-rozha text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.06] tracking-[0.02em] text-brand-darkRed"
            >
              Craftsmanship
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Phase I — overflowing band + split columns (approved copy unchanged) */}
      <PhaseAtmosphere variant="ivory">
        <article
          className="relative px-6 py-20 md:py-28 lg:px-16 lg:py-36"
          aria-labelledby="phase-i"
        >
          <DecorativeCorners tone="dustyBlue" />
          <div className="relative mx-auto max-w-[90rem]">
            <div className="grid gap-14 lg:grid-cols-12 lg:gap-16 xl:gap-24">
              <header className="lg:col-span-4 xl:col-span-3">
                <p className="mb-4 font-roboto text-[10px] uppercase tracking-[0.42em] text-brand-dustyBlue">Phase I</p>
                <h2
                  id="phase-i"
                  className="font-rozha text-[clamp(1.65rem,3vw,2.35rem)] leading-tight tracking-[0.04em] text-brand-darkRed"
                >
                  Phase I — Development
                </h2>
                <div className="mt-10 hidden h-px w-16 bg-gradient-to-r from-brand-dustyBlue/60 to-transparent lg:block" aria-hidden />
              </header>
              <div className="lg:col-span-8 xl:col-span-9">
                <div className="grid gap-10 md:gap-x-16 md:gap-y-12 lg:grid-cols-2">
                  <ProsePhase narrowCap>
                    <p className="mb-0">
                      At Bint Saeed, each piece begins with a defined process of development. As a house based in Abu Dhabi,
                      the work moves between locations with a clear structure. Patterns are created in Italy, where
                      proportion, balance, and construction are resolved before any material is cut. This stage determines
                      how each abaya will fall, move, and maintain its shape over time.
                    </p>
                  </ProsePhase>
                  <ProsePhase>
                    <p className="mb-0 md:pt-8 lg:pt-12">
                      The process then continues in Abu Dhabi, where prototypes are produced to test construction and
                      proportion. Once these are approved, a sample is made to confirm the final form, material behaviour,
                      and fit. Only after these stages are completed and reviewed does a piece move into production. This
                      sequence ensures that every garment is technically resolved before it is made in its final form.
                    </p>
                  </ProsePhase>
                </div>
              </div>
            </div>
          </div>
        </article>
      </PhaseAtmosphere>

      <ParallaxMosaic items={[...MOSAIC_IMAGES[0]]} layout="three" />

      <PhaseDivider />

      <ScreenVideo src={CRAFT_VIDEO_BANDS[1].src} ariaLabel={CRAFT_VIDEO_BANDS[1].ariaLabel} />

      {/* Phase II */}
      <PhaseAtmosphere variant="stone">
        <article
          className="relative px-6 py-20 md:py-28 lg:px-16 lg:py-36"
          aria-labelledby="phase-ii"
        >
          <DecorativeCorners tone="darkRed" />
          <div className="relative mx-auto max-w-[90rem]">
            <div className="grid gap-14 lg:grid-cols-12 lg:gap-16 xl:gap-24">
              <header className="lg:col-span-4 xl:col-span-3">
                <p className="mb-4 font-roboto text-[10px] uppercase tracking-[0.42em] text-brand-clayRed/90">Phase II</p>
                <h2
                  id="phase-ii"
                  className="font-rozha text-[clamp(1.65rem,3vw,2.35rem)] leading-tight tracking-[0.04em] text-brand-darkRed"
                >
                  Phase II — Making
                </h2>
                <div className="mt-10 hidden h-px w-16 bg-gradient-to-r from-brand-darkRed/45 to-transparent lg:block" aria-hidden />
              </header>
              <div className="space-y-12 lg:col-span-8 xl:col-span-9">
                <div className="grid gap-12 md:grid-cols-2 md:gap-x-14 md:gap-y-14">
                  <ProsePhase narrowCap>
                    <p className="mb-0">
                      Production takes place in Abu Dhabi, United Arab Emirates, under the direction of craftsmen with over
                      25 years of experience. Their role is to ensure that each piece is constructed with consistency,
                      precision, and control across every stage.
                    </p>
                  </ProsePhase>
                  <ProsePhase>
                    <p className="mb-0 md:pt-6">
                      Materials are sourced across Europe and Asia. Components such as buttons are selected from European
                      suppliers, while natural stones are sourced, cut, and polished in Asia. Each element is chosen for its
                      performance, ensuring it contributes to the structure, durability, and overall balance of the garment.
                    </p>
                  </ProsePhase>
                  <ProsePhase>
                    <p className="mb-0">
                      Production is kept controlled in volume, allowing each piece to receive the necessary time and attention.
                      This approach ensures that construction, finishing, and overall quality remain consistent from one piece
                      to the next.
                    </p>
                  </ProsePhase>
                  <ProsePhase>
                    <p className="mb-0 md:pt-4">
                      In line with this approach, pieces are produced primarily on an order basis, with each garment made
                      specifically for the client. This allows production to remain focused and avoids excess inventory,
                      maintaining a more considered and responsible way of working.
                    </p>
                  </ProsePhase>
                </div>
              </div>
            </div>
          </div>
        </article>
      </PhaseAtmosphere>

      <ParallaxMosaic items={[...MOSAIC_IMAGES[1]]} layout="two" />

      <PhaseDivider />

      <ScreenVideo src={CRAFT_VIDEO_BANDS[2].src} ariaLabel={CRAFT_VIDEO_BANDS[2].ariaLabel} />

      {/* Phase III */}
      <PhaseAtmosphere variant="noir">
        <article
          className="relative px-6 py-20 pb-28 md:py-28 md:pb-36 lg:px-16 lg:py-36"
          aria-labelledby="phase-iii"
        >
          <DecorativeCorners tone="dustyBlue" />
          <div className="relative mx-auto max-w-[90rem]">
            <div className="grid gap-14 lg:grid-cols-12 lg:gap-16 xl:gap-24">
              <header className="lg:col-span-4 xl:col-span-3">
                <p className="mb-4 font-roboto text-[10px] uppercase tracking-[0.42em] text-brand-dustyBlue">Phase III</p>
                <h2
                  id="phase-iii"
                  className="font-rozha text-[clamp(1.65rem,3vw,2.35rem)] leading-tight tracking-[0.04em] text-brand-darkRed"
                >
                  Phase III — Direction
                </h2>
                <div className="mt-10 hidden h-px w-16 bg-gradient-to-r from-brand-dustyBlue/55 to-transparent lg:block" aria-hidden />
              </header>
              <div className="space-y-14 lg:col-span-8 xl:col-span-9">
                <ProsePhase narrowCap className="max-w-3xl">
                  <p className="mb-0">
                    Each design is developed and carried through to completion under a single direction. The Creative Director
                    oversees the process from initial concept to final execution, ensuring that proportion, construction, and
                    detail remain aligned throughout.
                  </p>
                </ProsePhase>
                <div className="grid gap-12 md:grid-cols-2 md:gap-x-14">
                  <ProsePhase>
                    <p className="mb-0">
                      Elements such as Al Talli and Khous are integrated into the structure of the garment rather than applied
                      as surface decoration. Their use is determined during development and resolved within the construction
                      process, ensuring consistency in both appearance and performance.
                    </p>
                  </ProsePhase>
                  <ProsePhase>
                    <p className="mb-0 md:pt-6">
                      The result is a piece that reflects a clear standard of development, controlled production, and considered
                      design. Each abaya is made to hold its form, perform in use, and maintain its quality over time. Bint Saeed
                      operates as a contemporary house, shaped in Abu Dhabi and developed through an international process.
                    </p>
                  </ProsePhase>
                </div>
              </div>
            </div>
          </div>
        </article>
      </PhaseAtmosphere>

      <ParallaxMosaic items={[...MOSAIC_IMAGES[2]]} layout="twoWide" />

      <section className="relative overflow-hidden border-t border-brand-stone/25 bg-[linear-gradient(185deg,#2a0012_0%,#1a0008_55%,#120006_100%)] px-6 py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(146,170,193,0.15)_0%,transparent_55%)]" aria-hidden />
        <DecorativeCorners tone="dustyBlue" />
        <div className="relative mx-auto flex max-w-lg flex-col items-center text-center">
          <p className="mb-10 font-rozha text-[clamp(1.75rem,4vw,2.5rem)] tracking-[0.02em] text-white/95">Explore the collection</p>
          <LocaleLink
            href="/shop"
            className="inline-flex items-center gap-3 rounded-sm border border-white/25 bg-white/10 px-10 py-4 font-roboto text-xs uppercase tracking-[0.22em] text-white backdrop-blur-sm transition-colors hover:border-brand-dustyBlue hover:bg-brand-dustyBlue hover:text-[#1a0008]"
            data-cursor-hover
          >
            View Collection
            <FiArrowRight className="h-4 w-4" />
          </LocaleLink>
        </div>
      </section>
    </main>
  )
}
