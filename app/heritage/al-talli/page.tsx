'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import Image from 'next/image'
import LocaleLink from '@/components/LocaleLink'
import AboutTopicNav from '@/components/AboutTopicNav'
import AppPageWayfinding from '@/components/AppPageWayfinding'
import { FiArrowRight } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { commerceUi } from '@/lib/i18n/commerceUi'
import { getHeritageSharedChrome } from '@/lib/content/heritageAlTalliCopyI18n'
import {
  AL_TALLI_PAGE_COPY_BODIES,
  type AlTalliPageCopyBody,
} from '@/lib/content/heritageAlTalliPageCopyBodies'
import { AL_TALLI_PAGE_MEDIA } from '@/lib/content/alTalliPageMedia'
import { AL_TALLI_FEATURED_PRODUCTS } from '@/lib/seo/alTalliDiscovery'
import type { AppLocale } from '@/lib/i18n/routing'

type PageCopy = AlTalliPageCopyBody & ReturnType<typeof getHeritageSharedChrome>

function getCopy(locale: string): PageCopy {
  const key = (locale in AL_TALLI_PAGE_COPY_BODIES ? locale : 'en') as AppLocale
  return { ...getHeritageSharedChrome(key), ...AL_TALLI_PAGE_COPY_BODIES[key] }
}

export default function AlTalliPage() {
  return (
    <article className="min-h-screen bg-brand-pageCanvas" itemScope itemType="https://schema.org/Article">
      <meta itemProp="headline" content="Al Talli: The Emirati Craft Woven Through Generations" />
      <HeroSection />
      <AboutTopicNav />
      <StorySection />
      <CraftSection />
      <UnescoSection />
      <AbuDhabiSection />
      <BrandSection />
      <CtaSection />
      <DiscoveryNav />
    </article>
  )
}

function HeroSection() {
  const ref = useRef(null)
  const { isRTL, language } = useLanguage()
  const ui = commerceUi(language)
  const copy = getCopy(language)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '28%'])
  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0])

  return (
    <section ref={ref} className="relative h-[80vh] overflow-hidden bg-brand-darkRed">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src={AL_TALLI_PAGE_MEDIA.hero.src}
          alt={copy.imageAltHero}
          title={copy.imageTitleHero}
          fill
          className="object-cover opacity-55"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-darkRed via-brand-darkRed/55 to-transparent" />
      </motion.div>

      <div className="absolute top-28 start-6 z-20 lg:start-12">
        <motion.div
          initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <AppPageWayfinding
            rtl={isRTL}
            variant="light"
            segments={[
              { label: ui.common.home, href: '/home' },
              { label: copy.heritage, href: '/heritage' },
              { label: copy.alTalli },
            ]}
            backLink={{
              href: '/heritage',
              label: ui.common.backToHeritage,
            }}
          />
        </motion.div>
      </div>

      <motion.div style={{ opacity }} className="relative flex h-full items-center justify-center text-center">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0, 1] }}
            className="mx-auto max-w-4xl text-white"
          >
            <span className="mb-8 inline-block bg-white/10 px-4 py-2 font-montserrat text-xs uppercase tracking-[0.3em] text-white/80 backdrop-blur-sm">
              {copy.heroTag}
            </span>
            <h1 data-document-h1="true" itemProp="name" className="mb-6 font-rozha text-5xl md:text-7xl lg:text-8xl">
              {copy.heroTitle}
            </h1>
            <p itemProp="alternativeHeadline" className="font-montserrat text-lg tracking-wide text-white/70 md:text-xl">
              {copy.heroSubtitle}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

function StorySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-20%' })
  const { isRTL, language } = useLanguage()
  const copy = getCopy(language)

  return (
    <section ref={ref} id="al-talli-definition" className="py-24 md:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-start"
          >
            <span className="mb-6 block font-montserrat text-xs uppercase tracking-[0.4em] text-brand-clayRed">
              {copy.storyEyebrow}
            </span>
            <h2 className="mb-8 font-rozha text-4xl text-brand-darkRed md:text-5xl">{copy.storyTitle}</h2>
            <div
              itemProp="articleBody"
              className="space-y-6 font-montserrat text-base leading-relaxed tracking-wide text-brand-clayRed/80"
            >
              <p>{copy.storyP1}</p>
              <p>{copy.storyP2}</p>
              <p>{copy.storyP3}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isRTL ? -40 : 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative aspect-[4/5] overflow-hidden"
          >
            <Image
              src={AL_TALLI_PAGE_MEDIA.story.src}
              alt={copy.imageAltStory}
              title={copy.imageTitleStory}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function CraftSection() {
  const { language } = useLanguage()
  const copy = getCopy(language)
  const gallery = [
    { media: AL_TALLI_PAGE_MEDIA.loom, alt: copy.imageAltLoom, title: copy.imageTitleLoom },
    { media: AL_TALLI_PAGE_MEDIA.strands, alt: copy.imageAltStrands, title: copy.imageTitleStrands },
    { media: AL_TALLI_PAGE_MEDIA.bobbins, alt: copy.imageAltBobbins, title: copy.imageTitleBobbins },
  ] as const

  return (
    <section className="bg-brand-stone/20 py-24 md:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center"
        >
          <span className="mb-6 block font-montserrat text-xs uppercase tracking-[0.4em] text-brand-clayRed">
            {copy.craftEyebrow}
          </span>
          <h2 className="font-rozha text-4xl text-brand-darkRed md:text-5xl">{copy.craftTitle}</h2>
        </motion.div>

        <div className="mb-14 grid gap-4 md:grid-cols-3">
          {gallery.map((item, index) => (
            <motion.div
              key={item.media.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="relative aspect-[4/5] overflow-hidden md:aspect-[3/4]"
            >
              <Image
                src={item.media.src}
                alt={item.alt}
                title={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </motion.div>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {copy.techniques.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-brand-stone/30 bg-white p-8 text-start"
            >
              <span className="mb-4 block font-rozha text-6xl text-brand-darkRed/10">0{index + 1}</span>
              <h3 className="mb-4 font-rozha text-2xl text-brand-darkRed">{item.title}</h3>
              <p className="font-montserrat text-sm leading-relaxed tracking-wide text-brand-clayRed/80">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function UnescoSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-20%' })
  const { language } = useLanguage()
  const copy = getCopy(language)

  return (
    <section ref={ref} id="al-talli-unesco" className="bg-brand-darkRed py-24 text-white md:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="mb-6 block font-montserrat text-xs uppercase tracking-[0.4em] text-brand-stone">
            {copy.unescoEyebrow}
          </span>
          <h2 className="mb-8 font-rozha text-4xl md:text-5xl lg:text-6xl">{copy.unescoTitle}</h2>
          <p className="mb-8 font-montserrat text-base leading-relaxed tracking-wide text-white/80 md:text-lg">
            {copy.unescoBody}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white/10 px-6 py-3 font-montserrat text-xs uppercase tracking-[0.15em] backdrop-blur-sm">
              {copy.unescoBadge1}
            </span>
            <span className="bg-white/10 px-6 py-3 font-montserrat text-xs uppercase tracking-[0.15em] backdrop-blur-sm">
              {copy.unescoBadge2}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function AbuDhabiSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-20%' })
  const { isRTL, language } = useLanguage()
  const copy = getCopy(language)

  return (
    <section ref={ref} id="al-talli-abu-dhabi" className="py-24 md:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative aspect-[3/4] overflow-hidden"
          >
            <Image
              src={AL_TALLI_PAGE_MEDIA.abuDhabi.src}
              alt={copy.imageAltAbuDhabi}
              title={copy.imageTitleAbuDhabi}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isRTL ? -40 : 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.12 }}
            className="text-start"
          >
            <span className="mb-6 block font-montserrat text-xs uppercase tracking-[0.4em] text-brand-clayRed">
              {copy.abuDhabiEyebrow}
            </span>
            <h2 className="mb-8 font-rozha text-4xl text-brand-darkRed md:text-5xl">
              {copy.abuDhabiTitle}
            </h2>
            <div className="space-y-6 font-montserrat text-base leading-relaxed tracking-wide text-brand-clayRed/80">
              <p>{copy.abuDhabiP1}</p>
              <p>{copy.abuDhabiP2}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function BrandSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-20%' })
  const { isRTL, language } = useLanguage()
  const copy = getCopy(language)

  return (
    <section ref={ref} className="bg-brand-stone/15 py-24 md:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-2 text-start lg:order-1"
          >
            <span className="mb-6 block font-montserrat text-xs uppercase tracking-[0.4em] text-brand-clayRed">
              {copy.brandEyebrow}
            </span>
            <h2 className="mb-8 font-rozha text-4xl text-brand-darkRed md:text-5xl">{copy.brandTitle}</h2>
            <div className="space-y-6 font-montserrat text-base leading-relaxed tracking-wide text-brand-clayRed/80">
              <p>{copy.brandP1}</p>
              <p>{copy.brandP2}</p>
              <p>{copy.brandP3}</p>
              <p>{copy.brandP4}</p>
              <p className="text-sm text-brand-clayRed/70">{copy.journalNote}</p>
            </div>
            <LocaleLink
              href="/shop/covent-garden-abaya"
              className="mt-8 inline-flex min-h-[52px] items-center justify-center gap-3 bg-brand-darkRed px-8 py-4 font-montserrat text-sm uppercase tracking-[0.15em] text-white transition-colors hover:bg-brand-dustyBlue"
              data-cursor-hover
            >
              {copy.shopCta}
              <FiArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
            </LocaleLink>
            <div className="mt-10 grid gap-3 text-start sm:grid-cols-3">
              {AL_TALLI_FEATURED_PRODUCTS.map((item) => (
                <LocaleLink
                  key={item.path}
                  href={item.path}
                  className="group block border border-brand-stone/40 bg-white p-4 transition-colors hover:border-brand-darkRed/40 hover:bg-brand-stone/10"
                  data-cursor-hover
                >
                  <span className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-brand-clayRed/70">
                    {copy.shop}
                  </span>
                  <span className="mt-2 block font-rozha text-lg text-brand-darkRed group-hover:text-brand-dustyBlue">
                    {item.name}
                  </span>
                </LocaleLink>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative order-1 aspect-square overflow-hidden lg:order-2"
          >
            <Image
              src={AL_TALLI_PAGE_MEDIA.strands.src}
              alt={copy.imageAltStrands}
              title={copy.imageTitleStrands}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function CtaSection() {
  const { language } = useLanguage()
  const copy = getCopy(language)

  return (
    <section className="bg-brand-stone/20 py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-start">
            <h3 className="mb-2 font-rozha text-2xl text-brand-darkRed md:text-3xl">{copy.exploreMore}</h3>
            <p className="font-montserrat text-sm tracking-wide text-brand-clayRed/70">
              {copy.exploreMoreLead}
            </p>
          </div>
          <div className="flex gap-4">
            <LocaleLink
              href="/heritage/khous"
              className="inline-flex min-h-[48px] items-center justify-center border border-brand-darkRed px-6 py-3 font-montserrat text-xs uppercase tracking-[0.15em] text-brand-darkRed transition-colors hover:bg-brand-dustyBlue hover:text-white"
              data-cursor-hover
            >
              {copy.khous}
            </LocaleLink>
            <LocaleLink
              href="/heritage"
              className="inline-flex min-h-[48px] items-center justify-center border border-brand-darkRed px-6 py-3 font-montserrat text-xs uppercase tracking-[0.15em] text-brand-darkRed transition-colors hover:bg-brand-dustyBlue hover:text-white"
              data-cursor-hover
            >
              {copy.heritage}
            </LocaleLink>
          </div>
        </div>
      </div>
    </section>
  )
}

/** Crawl-facing internal links — visually hidden; no on-page keyword stuffing. */
function DiscoveryNav() {
  return (
    <nav aria-hidden="true" className="sr-only" aria-label="Al Talli discovery">
      <LocaleLink href="/heritage/al-talli">What is Al Talli — Emirati heritage craft</LocaleLink>
      <LocaleLink href="/heritage/al-talli">Middle Eastern crafts and Middle Eastern heritage</LocaleLink>
      <LocaleLink href="/heritage/al-talli">UAE cultural heritage Al Talli UNESCO</LocaleLink>
      <LocaleLink href="/heritage/al-talli">Visit Abu Dhabi culture — traditional Emirati crafts</LocaleLink>
      <LocaleLink href="/heritage/al-talli">Things to do in Abu Dhabi — House of Artisans Qasr Al Hosn</LocaleLink>
      <LocaleLink href="/heritage/al-talli">Abu Dhabi heritage embroidery and cultural attractions</LocaleLink>
      <LocaleLink href="/heritage/al-talli">Middle Eastern fashion Emirati craft</LocaleLink>
      <LocaleLink href="/the-codes">Bint Saeed house codes Al Talli</LocaleLink>
      <LocaleLink href="/shop/covent-garden-abaya">Al Talli abaya Covent Garden</LocaleLink>
      <LocaleLink href="/shop/hampstead-dress">Al Talli dress Hampstead</LocaleLink>
      <LocaleLink href="/shop/soho-set">Al Talli Soho Set</LocaleLink>
      <a href="/llms/al-talli.txt">Al Talli AI citation brief — Abu Dhabi heritage crafts</a>
      <a href="/llms.txt">Bint Saeed llms.txt for AI systems</a>
    </nav>
  )
}
