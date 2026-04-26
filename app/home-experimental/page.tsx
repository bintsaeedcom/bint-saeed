'use client'

import { useMemo, useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import LocaleLink from '@/components/LocaleLink'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import ExperimentalWebGLBackground from '@/components/ExperimentalWebGLBackground'
import { products as staticProducts } from '@/data/products'
import { getProductHref } from '@/lib/products/links'

const MANIFESTO_PARAGRAPHS = [
  'A house shaped by origin, carried across the world.',
  'It belongs to a way of living that moves between places with ease. From Abu Dhabi to Paris, from London to Riyadh, the same presence remains. A sense of self that does not shift with setting, and a way of dressing that follows it naturally.',
  'Each creation exists within that continuity. Not defined by location, but recognised by its consistency. A clear visual language that holds its place wherever it is worn.',
  'Origin, expressed in form, in attitude, in the way you are recognised.',
] as const

const RUNWAY_PANELS = [
  {
    title: 'Chapter I',
    subtitle: 'DESIGNED TO CARRY YOU, WHEREVER YOU ARE.',
    image: '/collection-section/1.png',
  },
  {
    title: 'Detail Study',
    subtitle: 'A language of texture, structure, and restraint.',
    image: '/collection-section/67.png',
  },
  {
    title: 'Craft Focus',
    subtitle: 'Heritage translated through contemporary form.',
    image: '/collection-section/68.png',
  },
  {
    title: 'Personal Signature',
    subtitle: 'Created for women who move globally, stay rooted.',
    image: '/Personalisation Page/secret pocket.JPG',
  },
] as const

const HOME_TOPICS = [
  {
    label: 'Collection',
    title: 'Shop',
    description: 'Browse ready-to-wear edits and discover new drops.',
    href: '/shop',
  },
  {
    label: 'House Language',
    title: 'The Codes',
    description: 'Explore the motifs and signatures that define Bint Saeed.',
    href: '/the-codes',
  },
  {
    label: 'Personalisation',
    title: 'Carried Close',
    description: 'Add a discreet message and create a truly personal piece.',
    href: '/personalisation',
  },
] as const

function SectionDissolve({
  from = '#ffffff',
  to = '#ffffff',
}: {
  from?: string
  to?: string
}) {
  return (
    <div className="pointer-events-none relative z-[4] -mt-10 h-20 md:-mt-12 md:h-24">
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(to bottom, ${from} 0%, ${to} 100%)` }}
      />
      <div className="absolute inset-0 opacity-35 blur-[22px] bg-[radial-gradient(ellipse_85%_65%_at_50%_5%,rgba(82,41,70,0.12),transparent_72%)]" />
    </div>
  )
}

function HorizontalRunway() {
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-62%'])
  const railScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section ref={ref} className="relative h-[220vh] bg-white">
      <div className="sticky top-0 h-screen overflow-hidden">
        <ExperimentalWebGLBackground intensity={0.5} className="opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_20%_12%,rgba(146,170,193,0.1),transparent_52%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_130%_90%_at_90%_80%,rgba(193,144,134,0.12),transparent_58%)]" />

        <div className="relative mx-auto grid h-full w-full max-w-[1640px] grid-cols-1 items-center gap-8 px-6 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-8 lg:px-16">
          <aside className="hidden lg:block">
            <div className="space-y-7">
              <p className="font-montserrat text-[10px] uppercase tracking-[0.32em] text-brand-dustyBlue">
                Horizontal Scroll Sequence
              </p>
              <div className="relative h-36 w-[2px] bg-white/20">
                <motion.div
                  style={{ scaleY: railScale }}
                  className="absolute inset-0 origin-top bg-gradient-to-b from-brand-dustyBlue via-brand-clayRed to-[#12080b]"
                />
              </div>
              <div className="space-y-2">
                <span className="inline-flex rounded-full border border-brand-darkRed/20 bg-white/70 px-4 py-2 font-montserrat text-[10px] uppercase tracking-[0.18em] text-brand-darkRed/85">
                  Vertical scroll
                </span>
                <span className="inline-flex rounded-full border border-brand-darkRed/20 bg-white/70 px-4 py-2 font-montserrat text-[10px] uppercase tracking-[0.18em] text-brand-darkRed/85">
                  Horizontal scroll
                </span>
                <span className="inline-flex rounded-full border border-brand-darkRed/20 bg-white/70 px-4 py-2 font-montserrat text-[10px] uppercase tracking-[0.18em] text-brand-darkRed/85">
                  Scrolling
                </span>
              </div>
            </div>
          </aside>

          <div className="min-w-0">
            <div className="mb-5 flex items-center justify-between lg:hidden">
                <p className="font-montserrat text-[10px] uppercase tracking-[0.32em] text-brand-dustyBlue">
                Horizontal Scroll Sequence
              </p>
                <span className="rounded-full border border-brand-darkRed/25 bg-white/70 px-4 py-2 font-montserrat text-[10px] uppercase tracking-[0.2em] text-brand-darkRed/75">
                Scroll to explore
              </span>
            </div>

            <motion.div style={{ x }} className="flex w-[260%] gap-4 md:gap-6">
              {RUNWAY_PANELS.map((panel, idx) => (
                <article
                  key={panel.title}
                  className="group relative h-[68vh] min-h-[28rem] w-[76vw] overflow-hidden rounded-[1.8rem] border border-brand-darkRed/14 bg-[linear-gradient(160deg,rgba(255,255,255,0.78),rgba(82,41,70,0.08))] md:w-[52vw] lg:w-[42vw]"
                >
                  <Image
                    src={panel.image}
                    alt={panel.subtitle}
                    fill
                    sizes="(max-width: 1024px) 80vw, 42vw"
                    className="object-cover object-center transition-transform duration-1000 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1f0508]/80 via-[#1f0508]/20 to-transparent" />
                  <div className="absolute right-5 top-5 rounded-full border border-white/30 bg-black/40 px-3 py-1 font-montserrat text-[10px] uppercase tracking-[0.2em] text-white/85">
                    0{idx + 1}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                    <p className="mb-2 font-montserrat text-[10px] uppercase tracking-[0.3em] text-brand-dustyBlue/95">
                      {panel.title}
                    </p>
                    <h3 className="max-w-md font-rozha text-2xl leading-tight text-brand-ivory md:text-3xl">
                      {panel.subtitle}
                    </h3>
                  </div>
                </article>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function HomeExperimentalPage() {
  const { isRTL } = useLanguage()
  const quickProducts = useMemo(() => staticProducts.slice(0, 8), [])

  return (
    <div className={`min-h-screen overflow-x-clip bg-white ${isRTL ? 'rtl' : 'ltr'}`}>
      <section className="relative min-h-[100svh] overflow-hidden bg-[linear-gradient(120deg,#1f0508_0%,#3b0a12_45%,#1f0508_100%)]">
        <div className="absolute inset-0">
          <Image
            src="/hero-image.JPG"
            alt="Bint Saeed hero campaign"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_28%]"
          />
        </div>
        <ExperimentalWebGLBackground intensity={0.66} className="opacity-34" />
        <div className="absolute inset-0 bg-[linear-gradient(102deg,rgba(31,5,8,0.9)_0%,rgba(31,5,8,0.68)_44%,rgba(31,5,8,0.28)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_90%_at_50%_-10%,rgba(82,41,70,0.15),transparent_55%)]" />
        <div className="relative mx-auto flex min-h-[100svh] max-w-[1600px] flex-col justify-center px-6 py-20 lg:px-16">
          <div className="mb-10 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-white/25 px-5 py-2 font-montserrat text-xs uppercase tracking-[0.16em] text-white/85">
              Vertical scroll
            </span>
            <span className="rounded-full border border-white/25 px-5 py-2 font-montserrat text-xs uppercase tracking-[0.16em] text-white/85">
              Horizontal scroll
            </span>
            <span className="rounded-full border border-white/25 px-5 py-2 font-montserrat text-xs uppercase tracking-[0.16em] text-white/85">
              Editorial motion system
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            data-document-h1="true"
            className="max-w-5xl font-rozha text-4xl leading-[1.06] text-brand-ivory [text-shadow:0_14px_42px_rgba(0,0,0,0.45)] md:text-6xl lg:text-7xl"
          >
            FOR THE DAUGHTER IN EVERY WOMAN
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 max-w-2xl border-s border-brand-dustyBlue/50 ps-5 font-montserrat text-sm leading-relaxed tracking-[0.03em] text-white/82 md:text-base"
          >
            Carrying Heritage Forward.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <LocaleLink
              href="/shop"
              className="group inline-flex min-h-[48px] items-center gap-3 rounded-full bg-brand-clayRed px-7 font-montserrat text-xs uppercase tracking-[0.2em] text-brand-ivory transition-colors hover:bg-[#522946]"
              data-cursor-hover
            >
              Discover the Collection
              <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </LocaleLink>
            <LocaleLink
              href="/personalisation"
              className="inline-flex min-h-[48px] items-center rounded-full border border-white/35 px-7 font-montserrat text-xs uppercase tracking-[0.2em] text-white/88 transition-colors hover:border-brand-dustyBlue hover:text-brand-dustyBlue"
              data-cursor-hover
            >
              Discover Personalisation
            </LocaleLink>
          </motion.div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-36 bg-gradient-to-b from-transparent to-white" />
      </section>

      <section className="relative z-[3] -mt-16 md:-mt-20">
        <div className="mx-auto max-w-[1380px] px-6 lg:px-16">
          <div className="grid gap-4 rounded-[1.6rem] border border-brand-stone/35 bg-[linear-gradient(140deg,rgba(255,255,255,0.92),rgba(249,246,241,0.9))] p-3 shadow-[0_26px_70px_rgba(20,8,11,0.14)] backdrop-blur-sm md:grid-cols-3 md:p-4">
            <div className="rounded-[1.2rem] border border-brand-stone/30 bg-[#f9f6f1] px-5 py-4">
              <p className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-brand-dustyBlue">Ready to Wear</p>
              <p className="mt-2 font-rozha text-2xl text-brand-darkRed">Exclusive Cuts</p>
            </div>
            <div className="rounded-[1.2rem] border border-brand-stone/30 bg-[#f9f6f1] px-5 py-4">
              <p className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-brand-dustyBlue">Craft</p>
              <p className="mt-2 font-rozha text-2xl text-brand-darkRed">Hand-finished Detail</p>
            </div>
            <div className="rounded-[1.2rem] border border-brand-stone/30 bg-[#f9f6f1] px-5 py-4">
              <p className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-brand-dustyBlue">Shipping</p>
              <p className="mt-2 font-rozha text-2xl text-brand-darkRed">Global Delivery</p>
            </div>
          </div>
        </div>
      </section>

      <SectionDissolve from="#ffffff" to="#ffffff" />

      <HorizontalRunway />

      <SectionDissolve from="#ffffff" to="#ffffff" />

      <section className="relative bg-white py-20 md:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_85%_at_82%_16%,rgba(193,144,134,0.08),transparent_56%)]" />
        <div className="mx-auto max-w-[1500px] px-6 lg:px-16">
          <div className="mb-7 flex items-end justify-between">
            <div>
              <p className="mb-2 font-montserrat text-[10px] uppercase tracking-[0.32em] text-brand-dustyBlue">
                Curated Selection
              </p>
              <h2 className="font-rozha text-3xl text-brand-darkRed md:text-4xl">Shop the Collection</h2>
            </div>
            <LocaleLink
              href="/shop"
              className="hidden border-b border-brand-darkRed/30 pb-1 font-montserrat text-[11px] uppercase tracking-[0.18em] text-brand-darkRed transition-colors hover:border-brand-dustyBlue hover:text-brand-dustyBlue md:inline-flex md:items-center md:gap-2"
              data-cursor-hover
            >
              View All
              <FiArrowRight className="h-4 w-4" />
            </LocaleLink>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:gap-5">
            {quickProducts.map((product) => (
              <LocaleLink
                key={product.id}
                href={getProductHref(product)}
                className="group block w-[74vw] shrink-0 overflow-hidden rounded-[1.2rem] border border-brand-stone/35 bg-brand-pageCanvas shadow-[0_12px_30px_rgba(20,8,11,0.09)] transition-transform duration-500 hover:-translate-y-1 sm:w-[46vw] md:w-[29vw] lg:w-[23vw]"
                data-cursor-hover
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 75vw, (max-width: 1200px) 35vw, 25vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="border-t border-brand-stone/30 px-4 py-4">
                  <p className="mb-1 font-montserrat text-[10px] uppercase tracking-[0.22em] text-brand-dustyBlue">{product.category}</p>
                  <h3 className="font-rozha text-xl leading-tight text-brand-darkRed">{product.name}</h3>
                  <p className="mt-2 font-montserrat text-sm tracking-wide text-brand-darkRed/72">AED {product.price.toLocaleString()}</p>
                </div>
              </LocaleLink>
            ))}
          </div>
        </div>
      </section>

      <SectionDissolve from="#ffffff" to="#ffffff" />

      <section className="relative overflow-hidden bg-white py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_110%_80%_at_14%_12%,rgba(146,170,193,0.09),transparent_58%)]" />
        <div className="mx-auto max-w-[1500px] px-6 lg:px-16">
          <div className="mb-8 md:mb-10">
            <p className="mb-2 font-montserrat text-[10px] uppercase tracking-[0.34em] text-brand-dustyBlue">All Home Topics</p>
            <h2 className="font-rozha text-3xl text-brand-darkRed md:text-4xl">Everything from Home, in one view</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3 md:gap-5">
            {HOME_TOPICS.map((topic) => (
              <LocaleLink
                key={topic.href}
                href={topic.href}
                className="group rounded-[1.2rem] border border-brand-stone/35 bg-white/85 p-6 shadow-[0_14px_30px_rgba(20,8,11,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-dustyBlue/45 hover:shadow-[0_20px_36px_rgba(20,8,11,0.12)]"
                data-cursor-hover
              >
                <p className="mb-3 font-montserrat text-[10px] uppercase tracking-[0.22em] text-brand-dustyBlue">{topic.label}</p>
                <h3 className="font-rozha text-2xl text-brand-darkRed">{topic.title}</h3>
                <p className="mt-3 max-w-sm font-montserrat text-sm leading-relaxed tracking-wide text-brand-darkRed/75">{topic.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 border-b border-brand-darkRed/30 pb-1 font-montserrat text-[11px] uppercase tracking-[0.18em] text-brand-darkRed transition-colors group-hover:border-brand-dustyBlue group-hover:text-brand-dustyBlue">
                  Explore
                  <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </LocaleLink>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-24 md:py-32">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white to-transparent" />
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 lg:grid-cols-12 lg:gap-14 lg:px-16">
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-[1.6rem] border border-brand-stone/35 bg-white/70 p-8 shadow-[0_24px_54px_rgba(20,8,11,0.08)] md:p-10">
              <p className="mb-3 font-montserrat text-[10px] uppercase tracking-[0.36em] text-brand-dustyBlue">
                Manifesto
              </p>
              <h2 className="mb-6 font-rozha text-3xl text-brand-darkRed md:text-4xl">Bint Saeed</h2>
              <div className="space-y-5 font-montserrat text-sm leading-[1.9] tracking-wide text-brand-darkRed/78">
                {MANIFESTO_PARAGRAPHS.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
              <div className="relative min-h-[15rem] overflow-hidden rounded-[1.3rem] border border-brand-stone/35 bg-white">
                <Image src="/collection-section/2.PNG" alt="Collection visual one" fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="relative min-h-[15rem] overflow-hidden rounded-[1.3rem] border border-brand-stone/35 bg-white">
                <Image src="/collection-section/3.JPG" alt="Collection visual two" fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="relative min-h-[15rem] overflow-hidden rounded-[1.3rem] border border-brand-stone/35 bg-white sm:col-span-2">
                <Image src="/collection-section/4.JPG" alt="Collection visual three" fill sizes="100vw" className="object-cover object-top" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDissolve from="#ffffff" to="#12080b" />

      <section className="bg-[#12080b] py-20">
        <div className="mx-auto max-w-[1200px] px-6 text-center lg:px-16">
          <p className="mb-3 font-montserrat text-[10px] uppercase tracking-[0.34em] text-brand-dustyBlue/90">Design Lab Route</p>
          <h2 className="mx-auto max-w-3xl font-rozha text-3xl leading-tight text-brand-ivory md:text-5xl">
            Prototype future-facing interactions before promoting to live home.
          </h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <LocaleLink
              href="/shop"
              className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-brand-dustyBlue/45 px-7 font-montserrat text-[11px] uppercase tracking-[0.2em] text-brand-ivory transition-colors hover:border-brand-dustyBlue hover:text-brand-dustyBlue"
              data-cursor-hover
            >
              View All
            </LocaleLink>
            <LocaleLink
              href="/personalisation"
              className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-brand-clayRed px-7 font-montserrat text-[11px] uppercase tracking-[0.2em] text-brand-ivory transition-colors hover:bg-brand-darkRed"
              data-cursor-hover
            >
              Discover Personalisation
            </LocaleLink>
          </div>
        </div>
      </section>
    </div>
  )
}

