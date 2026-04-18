'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import AppBreadcrumb from '@/components/AppBreadcrumb'
import LocaleLink from '@/components/LocaleLink'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { FiArrowRight } from 'react-icons/fi'

/** Public folder paths (encoded for spaces in filenames). */
const VIDEOS = {
  top: '/craftsmanship/craftsmanship%20video.mp4',
  middle: '/craftsmanship/video%201.mp4',
  bottom: '/craftsmanship/crafstamanship%20video%202.mp4',
} as const

const MOSAIC_IMAGES = [
  [
    { src: '/craftsmanship/craft.png', alt: 'Development and pattern work at Bint Saeed' },
    { src: '/craftsmanship/61.png', alt: 'Craft and materials' },
    { src: '/craftsmanship/62.png', alt: 'Construction detail' },
  ],
  [
    { src: '/craftsmanship/63.png', alt: 'Production in Abu Dhabi' },
    { src: '/craftsmanship/64.png', alt: 'Finishing and precision' },
  ],
  [
    { src: '/craftsmanship/66.png', alt: 'Creative direction and house standards' },
    { src: '/craftsmanship/craft2.png', alt: 'Contemporary house craft' },
  ],
] as const

function ScreenVideo({ src }: { src: string }) {
  return (
    <section
      className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 overflow-hidden bg-[#080506]"
      aria-label="Craftsmanship film"
    >
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="block h-[min(72vh,100vw)] w-full object-cover md:h-[min(78vh,56.25vw)]"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(250,249,247,0.12)_0%,transparent_35%,rgba(10,5,8,0.25)_100%)]"
        aria-hidden
      />
    </section>
  )
}

function PhaseDivider() {
  return (
    <div className="my-14 flex justify-center md:my-16" aria-hidden>
      <span className="font-rozha text-lg tracking-[0.55em] text-brand-darkRed/25 md:text-xl">⸻</span>
    </div>
  )
}

function ParallaxFigure({
  children,
  yRange,
  rotate = 0,
  className = '',
}: {
  children: React.ReactNode
  yRange: [string, string]
  rotate?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], yRange)

  return (
    <motion.div ref={ref} style={{ y, rotate }} className={className}>
      {children}
    </motion.div>
  )
}

function ParallaxMosaic({
  items,
  layout,
}: {
  items: readonly { src: string; alt: string }[]
  layout: 'three' | 'two' | 'twoWide'
}) {
  if (layout === 'three') {
    return (
      <div className="relative my-16 md:my-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 md:grid-cols-12 md:gap-8 lg:px-16">
          <ParallaxFigure
            yRange={['8%', '-6%']}
            rotate={-1.2}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_28px_60px_-20px_rgba(26,0,8,0.35)] md:col-span-7 md:row-span-2 md:row-start-1 md:col-start-1"
          >
            <Image src={items[0].src} alt={items[0].alt} fill className="object-cover" sizes="(max-width:768px)100vw,55vw" />
          </ParallaxFigure>
          <ParallaxFigure
            yRange={['14%', '-10%']}
            rotate={1}
            className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-[0_24px_50px_-18px_rgba(26,0,8,0.3)] md:col-span-5 md:row-start-1 md:col-start-8 md:self-start"
          >
            <Image src={items[1].src} alt={items[1].alt} fill className="object-cover" sizes="(max-width:768px)100vw,40vw" />
          </ParallaxFigure>
          <ParallaxFigure
            yRange={['6%', '-14%']}
            rotate={0.6}
            className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-[0_28px_55px_-20px_rgba(26,0,8,0.28)] md:col-span-8 md:col-start-3 md:row-start-3 md:mt-4"
          >
            <Image src={items[2].src} alt={items[2].alt} fill className="object-cover" sizes="(max-width:768px)100vw,50vw" />
          </ParallaxFigure>
        </div>
      </div>
    )
  }

  if (layout === 'two') {
    return (
      <div className="relative my-16 md:my-24">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-6 md:grid-cols-2 md:gap-10 lg:px-16">
          <ParallaxFigure
            yRange={['10%', '-8%']}
            rotate={-0.8}
            className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-[0_26px_55px_-18px_rgba(26,0,8,0.32)]"
          >
            <Image src={items[0].src} alt={items[0].alt} fill className="object-cover" sizes="(max-width:768px)100vw,45vw" />
          </ParallaxFigure>
          <ParallaxFigure
            yRange={['16%', '-12%']}
            rotate={1.1}
            className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-[0_26px_55px_-18px_rgba(26,0,8,0.32)] md:mt-20"
          >
            <Image src={items[1].src} alt={items[1].alt} fill className="object-cover" sizes="(max-width:768px)100vw,45vw" />
          </ParallaxFigure>
        </div>
      </div>
    )
  }

  /* twoWide */
  return (
    <div className="relative my-16 md:my-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 md:grid-cols-2 md:gap-12 lg:px-16">
        <ParallaxFigure
          yRange={['12%', '-8%']}
          rotate={-0.5}
          className="relative aspect-[5/6] overflow-hidden rounded-[1.35rem] shadow-[0_30px_60px_-22px_rgba(26,0,8,0.3)]"
        >
          <Image src={items[0].src} alt={items[0].alt} fill className="object-cover" sizes="(max-width:768px)100vw,48vw" />
        </ParallaxFigure>
        <ParallaxFigure
          yRange={['8%', '-14%']}
          rotate={0.9}
          className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] shadow-[0_30px_60px_-22px_rgba(26,0,8,0.3)] md:translate-y-10"
        >
          <Image src={items[1].src} alt={items[1].alt} fill className="object-cover" sizes="(max-width:768px)100vw,48vw" />
        </ParallaxFigure>
      </div>
    </div>
  )
}

function Prose({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { isRTL } = useLanguage()
  return (
    <div
      className={`space-y-5 font-roboto text-base leading-[1.85] tracking-wide text-brand-darkRed/88 md:text-[17px] md:leading-[1.9] ${isRTL ? 'text-right' : ''} ${className}`}
    >
      {children}
    </div>
  )
}

export default function CraftsmanshipClient() {
  const { isRTL } = useLanguage()

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[linear-gradient(165deg,#faf9f7_0%,#f0ece4_42%,#e8e4db_100%)]">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_12%_10%,rgba(146,170,193,0.12)_0%,transparent_48%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_90%_at_86%_82%,rgba(193,144,134,0.08)_0%,transparent_60%)]"
        aria-hidden
      />

      {/* Top — full-width video */}
      <div className="pt-24 md:pt-28">
        <ScreenVideo src={VIDEOS.top} />
      </div>

      <div className="relative mx-auto max-w-[42rem] px-6 pb-12 pt-14 md:pt-20 lg:px-8">
        <AppBreadcrumb
          variant="muted"
          className="mb-8"
          segments={[
            { label: isRTL ? 'الرئيسية' : 'Home', href: '/home' },
            { label: isRTL ? 'الحرفية' : 'Craftsmanship' },
          ]}
        />
        <span className="mb-4 block font-roboto text-[10px] uppercase tracking-[0.38em] text-brand-dustyBlue">Bint Saeed</span>
        <motion.h1
          data-document-h1="true"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-rozha text-4xl leading-[1.08] text-brand-darkRed md:text-5xl"
        >
          Craftsmanship
        </motion.h1>
      </div>

      <article className="relative mx-auto max-w-[42rem] px-6 pb-8 lg:px-8">
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.75 }}
          aria-labelledby="phase-i"
        >
          <h2 id="phase-i" className="mb-6 font-roboto text-[10px] uppercase tracking-[0.38em] text-brand-clayRed/85">
            Phase I — Development
          </h2>
          <Prose>
            <p>
              At Bint Saeed, each piece begins with a defined process of development. As a house based in Abu Dhabi, the
              work moves between locations with a clear structure. Patterns are created in Italy, where proportion, balance,
              and construction are resolved before any material is cut. This stage determines how each abaya will fall, move,
              and maintain its shape over time.
            </p>
            <p>
              The process then continues in Abu Dhabi, where prototypes are produced to test construction and proportion.
              Once these are approved, a sample is made to confirm the final form, material behaviour, and fit. Only after
              these stages are completed and reviewed does a piece move into production. This sequence ensures that every
              garment is technically resolved before it is made in its final form.
            </p>
          </Prose>
        </motion.section>
      </article>

      <ParallaxMosaic items={[...MOSAIC_IMAGES[0]]} layout="three" />

      <PhaseDivider />

      {/* Middle — full-width video */}
      <ScreenVideo src={VIDEOS.middle} />

      <article className="relative mx-auto max-w-[42rem] px-6 py-14 lg:px-8 md:py-20">
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.75 }}
          aria-labelledby="phase-ii"
        >
          <h2 id="phase-ii" className="mb-6 font-roboto text-[10px] uppercase tracking-[0.38em] text-brand-clayRed/85">
            Phase II — Making
          </h2>
          <Prose>
            <p>
              Production takes place in Abu Dhabi, United Arab Emirates, under the direction of craftsmen with over 25 years
              of experience. Their role is to ensure that each piece is constructed with consistency, precision, and control
              across every stage.
            </p>
            <p>
              Materials are sourced across Europe and Asia. Components such as buttons are selected from European suppliers,
              while natural stones are sourced, cut, and polished in Asia. Each element is chosen for its performance,
              ensuring it contributes to the structure, durability, and overall balance of the garment.
            </p>
            <p>
              Production is kept controlled in volume, allowing each piece to receive the necessary time and attention. This
              approach ensures that construction, finishing, and overall quality remain consistent from one piece to the
              next.
            </p>
            <p>
              In line with this approach, pieces are produced primarily on an order basis, with each garment made specifically
              for the client. This allows production to remain focused and avoids excess inventory, maintaining a more
              considered and responsible way of working.
            </p>
          </Prose>
        </motion.section>
      </article>

      <ParallaxMosaic items={[...MOSAIC_IMAGES[1]]} layout="two" />

      <PhaseDivider />

      {/* Bottom — full-width video */}
      <ScreenVideo src={VIDEOS.bottom} />

      <article className="relative mx-auto max-w-[42rem] px-6 py-14 pb-28 lg:px-8 md:py-20 md:pb-36">
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.75 }}
          aria-labelledby="phase-iii"
        >
          <h2 id="phase-iii" className="mb-6 font-roboto text-[10px] uppercase tracking-[0.38em] text-brand-clayRed/85">
            Phase III — Direction
          </h2>
          <Prose>
            <p>
              Each design is developed and carried through to completion under a single direction. The Creative Director
              oversees the process from initial concept to final execution, ensuring that proportion, construction, and detail
              remain aligned throughout.
            </p>
            <p>
              Elements such as Al Talli and Khous are integrated into the structure of the garment rather than applied as
              surface decoration. Their use is determined during development and resolved within the construction process,
              ensuring consistency in both appearance and performance.
            </p>
            <p>
              The result is a piece that reflects a clear standard of development, controlled production, and considered
              design. Each abaya is made to hold its form, perform in use, and maintain its quality over time. Bint Saeed
              operates as a contemporary house, shaped in Abu Dhabi and developed through an international process.
            </p>
          </Prose>
        </motion.section>
      </article>

      <ParallaxMosaic items={[...MOSAIC_IMAGES[2]]} layout="twoWide" />

      <section className="relative border-t border-brand-stone/25 bg-brand-darkRed/[0.03] px-6 py-20 md:py-28">
        <div className="mx-auto flex max-w-lg flex-col items-center text-center">
          <p className="mb-8 font-rozha text-2xl text-brand-darkRed md:text-3xl">Explore the collection</p>
          <LocaleLink
            href="/shop"
            className="inline-flex items-center gap-2 border border-brand-darkRed/35 bg-white/90 px-8 py-3.5 font-roboto text-xs uppercase tracking-[0.18em] text-brand-darkRed transition-colors hover:border-brand-dustyBlue hover:text-brand-dustyBlue"
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
