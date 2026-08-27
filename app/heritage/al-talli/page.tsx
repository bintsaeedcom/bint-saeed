'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import LocaleLink from '@/components/LocaleLink'
import AboutSectionHero from '@/components/AboutSectionHero'
import { FiArrowRight } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { commerceUi } from '@/lib/i18n/commerceUi'
import { getHeritageSharedChrome } from '@/lib/content/heritageAlTalliCopyI18n'
import {
  AL_TALLI_PAGE_COPY_BODIES,
  type AlTalliPageCopyBody,
} from '@/lib/content/heritageAlTalliPageCopyBodies'
import { AL_TALLI_PAGE_MEDIA } from '@/lib/content/alTalliPageMedia'
import { AL_TALLI_FEATURED_PRODUCTS, AL_TALLI_JOURNAL_URL } from '@/lib/seo/alTalliDiscovery'
import type { AppLocale } from '@/lib/i18n/routing'
import { ctaPrimaryWithGap } from '@/lib/ui/ctaClasses'
import { EDITORIAL_PAGE_CONTAINER, EDITORIAL_PAGE_SHELL } from '@/lib/ui/editorialPageChrome'
import {
  HERITAGE_CHAPTER_BADGE_DARK,
  HERITAGE_CHAPTER_BODY,
  HERITAGE_CHAPTER_BODY_DARK,
  HERITAGE_CHAPTER_CARD,
  HERITAGE_CHAPTER_CARD_BODY,
  HERITAGE_CHAPTER_CTA_PAD,
  HERITAGE_CHAPTER_DARK_BAND,
  HERITAGE_CHAPTER_EYEBROW,
  HERITAGE_CHAPTER_H2,
  HERITAGE_CHAPTER_H2_DARK,
  HERITAGE_CHAPTER_H3,
  HERITAGE_CHAPTER_HERO_DESC,
  HERITAGE_CHAPTER_HERO_TITLE,
  HERITAGE_CHAPTER_SECTION_PAD,
  HERITAGE_CHAPTER_STEP_NUM,
} from '@/lib/ui/heritageChapterChrome'

type PageCopy = AlTalliPageCopyBody & ReturnType<typeof getHeritageSharedChrome>

function getCopy(locale: string): PageCopy {
  const key = (locale in AL_TALLI_PAGE_COPY_BODIES ? locale : 'en') as AppLocale
  return { ...getHeritageSharedChrome(key), ...AL_TALLI_PAGE_COPY_BODIES[key] }
}

export default function AlTalliPage() {
  return (
    <article
      className={`${EDITORIAL_PAGE_SHELL} min-h-screen bg-brand-pageCanvas`}
      itemScope
      itemType="https://schema.org/Article"
    >
      <meta itemProp="headline" content="Al Talli: The Emirati Craft Woven Through Generations" />
      <HeroSection />
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
  const { isRTL, language } = useLanguage()
  const ui = commerceUi(language)
  const copy = getCopy(language)

  return (
    <AboutSectionHero
      rtl={isRTL}
      imageSrc={AL_TALLI_PAGE_MEDIA.hero.src}
      imageAlt={copy.imageAltHero}
      imageOpacity={55}
      priority
      segments={[
        { label: ui.common.home, href: '/home' },
        { label: copy.heritage, href: '/heritage' },
        { label: copy.alTalli },
      ]}
      eyebrow={copy.heroTag}
      title={copy.heroTitle}
      description={copy.heroSubtitle}
      titleClassName={HERITAGE_CHAPTER_HERO_TITLE}
      descriptionClassName={HERITAGE_CHAPTER_HERO_DESC}
    />
  )
}

function StorySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-20%' })
  const { isRTL, language } = useLanguage()
  const copy = getCopy(language)

  return (
    <section ref={ref} id="al-talli-definition" className={HERITAGE_CHAPTER_SECTION_PAD}>
      <div className={EDITORIAL_PAGE_CONTAINER}>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-start"
          >
            <span className={HERITAGE_CHAPTER_EYEBROW}>{copy.storyEyebrow}</span>
            <h2 className={HERITAGE_CHAPTER_H2}>{copy.storyTitle}</h2>
            <div itemProp="articleBody" className={`space-y-5 ${HERITAGE_CHAPTER_BODY}`}>
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
    { media: AL_TALLI_PAGE_MEDIA.story, alt: copy.imageAltStory, title: copy.imageTitleStory },
  ] as const

  return (
    <section className={`${HERITAGE_CHAPTER_SECTION_PAD} bg-brand-stone/20`}>
      <div className={EDITORIAL_PAGE_CONTAINER}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center"
        >
          <span className={HERITAGE_CHAPTER_EYEBROW}>{copy.craftEyebrow}</span>
          <h2 className={HERITAGE_CHAPTER_H2}>{copy.craftTitle}</h2>
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

        <div className="grid gap-6 md:grid-cols-3">
          {copy.techniques.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={HERITAGE_CHAPTER_CARD}
            >
              <span className={HERITAGE_CHAPTER_STEP_NUM}>0{index + 1}</span>
              <h3 className={`mb-3 ${HERITAGE_CHAPTER_H3}`}>{item.title}</h3>
              <p className={HERITAGE_CHAPTER_CARD_BODY}>{item.description}</p>
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
    <section ref={ref} id="al-talli-unesco" className={`${HERITAGE_CHAPTER_SECTION_PAD} ${HERITAGE_CHAPTER_DARK_BAND}`}>
      <div className={EDITORIAL_PAGE_CONTAINER}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className={HERITAGE_CHAPTER_EYEBROW}>{copy.unescoEyebrow}</span>
          <h2 className={HERITAGE_CHAPTER_H2_DARK}>{copy.unescoTitle}</h2>
          <p className={`mb-8 ${HERITAGE_CHAPTER_BODY_DARK}`}>{copy.unescoBody}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className={HERITAGE_CHAPTER_BADGE_DARK}>{copy.unescoBadge1}</span>
            <span className={HERITAGE_CHAPTER_BADGE_DARK}>{copy.unescoBadge2}</span>
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
    <section ref={ref} id="al-talli-abu-dhabi" className={HERITAGE_CHAPTER_SECTION_PAD}>
      <div className={EDITORIAL_PAGE_CONTAINER}>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
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
            <span className={HERITAGE_CHAPTER_EYEBROW}>{copy.abuDhabiEyebrow}</span>
            <h2 className={HERITAGE_CHAPTER_H2}>{copy.abuDhabiTitle}</h2>
            <div className={`space-y-5 ${HERITAGE_CHAPTER_BODY}`}>
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
    <section ref={ref} className={`${HERITAGE_CHAPTER_SECTION_PAD} bg-brand-stone/10`}>
      <div className={EDITORIAL_PAGE_CONTAINER}>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-2 text-start lg:order-1"
          >
            <span className={HERITAGE_CHAPTER_EYEBROW}>{copy.brandEyebrow}</span>
            <h2 className={HERITAGE_CHAPTER_H2}>{copy.brandTitle}</h2>
            <div className={`space-y-5 ${HERITAGE_CHAPTER_BODY}`}>
              <p>{copy.brandP1}</p>
              <p>{copy.brandP2}</p>
              <p>{copy.brandP3}</p>
              <p>{copy.brandP4}</p>
              <p className="text-sm text-brand-darkRed/70">
                {copy.journalNote}{' '}
                <a
                  href={AL_TALLI_JOURNAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-brand-dustyBlue/50 underline-offset-4 transition-colors hover:text-brand-dustyBlue hover:decoration-brand-dustyBlue"
                  data-cursor-hover
                >
                  {copy.journalCta}
                </a>
              </p>
            </div>
            <LocaleLink
              href="/shop/covent-garden-abaya"
              className={`mt-8 ${ctaPrimaryWithGap}`}
              data-bs-cta
              data-cursor-hover
            >
              {copy.shopCta}
              <FiArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
            </LocaleLink>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {AL_TALLI_FEATURED_PRODUCTS.map((item) => (
                <LocaleLink
                  key={item.path}
                  href={item.path}
                  className="group block overflow-hidden border border-brand-stone/40 bg-white transition-colors hover:border-brand-darkRed/40"
                  data-cursor-hover
                >
                  <div className="relative aspect-[3/4] bg-brand-stone/15">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <span className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-brand-dustyBlue/80">
                      {copy.shop}
                    </span>
                    <span
                      className={`mt-2 block ${HERITAGE_CHAPTER_H3} text-[clamp(1rem,1.8vw,1.25rem)] leading-snug group-hover:text-brand-dustyBlue`}
                    >
                      {item.name}
                    </span>
                  </div>
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
    <section className={`${HERITAGE_CHAPTER_CTA_PAD} bg-brand-stone/20`}>
      <div className={EDITORIAL_PAGE_CONTAINER}>
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-start">
            <h3 className={`mb-2 ${HERITAGE_CHAPTER_H3}`}>{copy.exploreMore}</h3>
            <p className="font-montserrat text-sm tracking-wide text-brand-darkRed/70">{copy.exploreMoreLead}</p>
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
              href="/heritage/sadu"
              className="inline-flex min-h-[48px] items-center justify-center border border-brand-darkRed px-6 py-3 font-montserrat text-xs uppercase tracking-[0.15em] text-brand-darkRed transition-colors hover:bg-brand-dustyBlue hover:text-white"
              data-cursor-hover
            >
              {copy.sadu}
            </LocaleLink>
          </div>
        </div>
      </div>
    </section>
  )
}

/** Crawl-facing internal links, visually hidden; no on-page keyword stuffing. */
function DiscoveryNav() {
  return (
    <nav aria-hidden="true" className="sr-only" aria-label="Al Talli discovery">
      <LocaleLink href="/heritage/al-talli">What is Al Talli, Emirati heritage craft</LocaleLink>
      <LocaleLink href="/heritage/al-talli">Middle Eastern crafts and Middle Eastern heritage</LocaleLink>
      <LocaleLink href="/heritage/al-talli">UAE cultural heritage Al Talli UNESCO</LocaleLink>
      <LocaleLink href="/heritage/al-talli">Visit Abu Dhabi culture, traditional Emirati crafts</LocaleLink>
      <LocaleLink href="/heritage/al-talli">Things to do in Abu Dhabi, House of Artisans Qasr Al Hosn</LocaleLink>
      <LocaleLink href="/heritage/al-talli">Abu Dhabi heritage embroidery and cultural attractions</LocaleLink>
      <LocaleLink href="/heritage/al-talli">Middle Eastern fashion Emirati craft</LocaleLink>
      <LocaleLink href="/the-codes">Bint Saeed house codes Al Talli</LocaleLink>
      <LocaleLink href="/shop/covent-garden-abaya">Al Talli abaya Covent Garden</LocaleLink>
      <LocaleLink href="/shop/hampstead-dress">Al Talli dress Hampstead</LocaleLink>
      <LocaleLink href="/shop/soho-set">Al Talli Soho Set</LocaleLink>
      <a href="/llms/al-talli.txt">Al Talli AI citation brief, Abu Dhabi heritage crafts</a>
      <a href="/llms.txt">Bint Saeed llms.txt for AI systems</a>
    </nav>
  )
}
