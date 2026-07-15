'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import AboutSectionHero from '@/components/AboutSectionHero'
import ExploreCollectionClosing from '@/components/ExploreCollectionClosing'
import { ABOUT_SECTION_HERO_IMAGES } from '@/lib/about/aboutSectionHeroImages'
import { getAboutEditorialHeroEyebrow } from '@/lib/about/aboutEditorialHeroChrome'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { trackEvent } from '@/lib/analytics/tracking'
import { buildTheCodesJsonLd } from '@/lib/seo/theCodesJsonLd'
import {
  codesPageImagePath,
  getTheCodesHero,
  getTheCodesSections,
  type CodesSectionContent,
} from '@/lib/the-codes/codesPageContent'
import {
  EDITORIAL_PAGE_CONTAINER,
  EDITORIAL_PAGE_SHELL,
} from '@/lib/ui/editorialPageChrome'

/** Editorial grid / corner brackets disabled site-wide — use border-s + border-b on copy only. */
function DecorativeCorners(_props?: { color?: 'dustyBlue' | 'darkRed' | 'stone' }) {
  return null
}

function SectionStripes(_props?: { variant?: 'default' | 'hero' | 'soft' | 'bold' }) {
  return null
}

type CodeSection = CodesSectionContent


/** Public folder `The Codes Page/` — encode spaces for Next/Image `src`. */
function codesPageImage(fileName: string) {
  return codesPageImagePath(fileName)
}

/** Portrait block: subtle vertical parallax + slight scale so edges stay covered */
function ParallaxFramedImage({
  invert,
  imageSrc,
  imageAlt,
  priority,
  outerClassName,
  clipFrameClassName,
}: {
  invert: boolean
  imageSrc: string
  imageAlt: string
  priority: boolean
  outerClassName: string
  clipFrameClassName: string
}) {
  const clipRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: clipRef,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], invert ? [36, -44] : [-28, 40])
  const scale = useTransform(scrollYProgress, [0, 1], [1.06, 1.12])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.6, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
      className={outerClassName}
    >
      <div ref={clipRef} className={`relative aspect-[4/5] w-full max-w-xl overflow-hidden shadow-[0_22px_56px_rgba(20,8,11,0.12)] lg:aspect-[3/4] ${clipFrameClassName}`}>
        <motion.div
          style={reduceMotion ? undefined : { y, scale }}
          className="absolute inset-0 will-change-transform"
        >
          <Image src={imageSrc} alt={imageAlt} fill className="object-cover" sizes="(min-width: 1024px) 42vw, 92vw" priority={priority} />
        </motion.div>
      </div>
    </motion.div>
  )
}

function scrollToHash(hash: string) {
  if (!hash || hash === '#') return
  const id = hash.replace(/^#/, '')
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function TheCodesClient() {
  const { isRTL, language, t } = useLanguage()
  const pathname = usePathname()
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({})
  const codesJsonLd = useMemo(() => buildTheCodesJsonLd(language), [language])
  const sections = useMemo(() => getTheCodesSections(language), [language])
  const hero = useMemo(() => getTheCodesHero(language), [language])

  const expandedTextBySection: Record<string, string> = {
    'the-monogram':
      'The monogram is built on the idea of connection and return. Its form draws from interlocking lines, reflecting continuity between past and present. It is applied across garments, jewellery, and objects with precision, either as a quiet detail or as a defining element. As a visual signature, it anchors each piece within the language of the house while remaining adaptable across contexts.',
    'al-talli':
      'Al Talli is a heritage craft practiced across the United Arab Emirates, traditionally handwoven using cotton and metallic threads. It forms part of the broader textile traditions of the region, closely tied to techniques recognised on UNESCO’s Representative List of the Intangible Cultural Heritage of Humanity. Historically used to embellish garments, it carries both technical mastery and cultural meaning. Within Bint Saeed, this craft is reinterpreted through placement, structure, and material, allowing it to exist within a contemporary wardrobe while maintaining its origin.',
    khous:
      'Al Khous is a traditional craft of the United Arab Emirates, using dried palm fronds to create woven forms. It belongs to a wider body of heritage practices connected to palm cultivation and craft traditions across the region, which are recognised within UNESCO-listed cultural expressions. Historically used in everyday objects, its strength lies in its structure, built through interlacing patterns that create durability and form. At Bint Saeed, this logic is translated into garment construction and detailing, where lines, folds, and layering reflect the same principles in a modern context.',
    'al-ain-rosette':
      'The Al Ain Rosette is developed as a house motif, carved in carnelian stone. Its colour is chosen for its natural warmth, reflecting the desert tones of Al Ain in the United Arab Emirates. Its form draws from desert flora, recalling both the desert hyacinth and the soft five-petalled bloom of Tribulus omanense, the national flower of the UAE. At present, it appears in jewellery, phone strands, and small objects, where it introduces a recognisable element that can extend across the house over time.',
    'knotted-lines-of-lineage':
      'Knotted Lines are developed as a defining element within the house. Each line is shaped in relation to another, forming knots that reflect connection across time, experience, and generation. What is inherited and what is lived become intertwined, creating a continuous thread rather than separate moments.\n\nWithin Bint Saeed, these knots take form as buttons on abayas and as strands across garments. The strands, often composed of natural stones, are placed with care, frequently along the shoulder, where they bring balance to the silhouette while remaining close to the wearer.\n\nTheir placement is considered. Each knot serves as a reminder of the story you carry, shaped by where you come from and what you move through. A story that is interconnected, personal, and ongoing, one you recognise, stand within, and carry forward with pride.',
    'the-strands':
      'The Strands belong to a longer lineage of adornment in the region, where thread, stone, and gesture have long marked continuity across generations. At Bint Saeed, each strand is assembled from natural stones chosen for tone, grain, and proportion. They are positioned with care — most often at the shoulder — where they introduce equilibrium to the abaya without disturbing its line.\n\nAs a house code, The Strands translate an abstract principle into something worn: that what is carried from where you come from remains present, yet restrained. They appear across abayas and objects as a recognisable signature of the house — a quiet thread that persists from piece to piece, and from one chapter of the story to the next.',
  }

  useEffect(() => {
    const run = () => scrollToHash(window.location.hash)
    requestAnimationFrame(run)
    window.addEventListener('hashchange', run)
    return () => window.removeEventListener('hashchange', run)
  }, [])

  useEffect(() => {
    if (!pathname?.includes('the-codes')) return
    const run = () => scrollToHash(window.location.hash)
    requestAnimationFrame(run)
    const t = window.setTimeout(run, 80)
    return () => window.clearTimeout(t)
  }, [pathname])

  return (
    <main
      className={`${EDITORIAL_PAGE_SHELL} relative min-h-screen bg-brand-pageCanvas pb-8 md:pb-16 ${isRTL ? 'rtl' : 'ltr'}`}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(codesJsonLd) }} />
      <AboutSectionHero
        rtl={isRTL}
        imageSrc={ABOUT_SECTION_HERO_IMAGES.theCodes}
        imageAlt={hero.alt}
        priority
        segments={[
          { label: isRTL ? 'الرئيسية' : 'Home', href: '/home' },
          { label: isRTL ? 'الرموز' : 'The Codes' },
        ]}
        eyebrow={getAboutEditorialHeroEyebrow(language)}
        title={isRTL ? 'الرموز' : 'The Codes'}
        description={
          isRTL
            ? 'العناصر التي تحمل إرث الدار. متجذرة في الأصل. محددة بدقة.'
            : 'The elements that carry the legacy of the house. Rooted in origin. Defined with precision.'
        }
      />

      <div className="relative space-y-0 md:space-y-2 lg:space-y-4">
        {sections.map((section, index) => {
          const isEven = index % 2 === 0
          const textOrder = isEven ? 'lg:order-1' : 'lg:order-2'
          const imageOrder = isEven ? 'lg:order-2' : 'lg:order-1'
          return (
            <section
              key={section.id}
              id={section.id}
              className="relative scroll-mt-28 overflow-hidden md:scroll-mt-32"
              aria-labelledby={`${section.id}-heading`}
            >
              <div className={`${EDITORIAL_PAGE_CONTAINER} relative z-[1] grid max-w-6xl gap-8 py-6 lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-10`}>
                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-12%' }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className={`${textOrder} max-w-xl ${isRTL ? 'lg:mr-auto lg:ml-0 lg:text-right' : 'lg:ml-auto lg:mr-0'}`}
                >
                  <div
                    className={`space-y-4 md:space-y-5 ${isRTL ? 'border-e border-brand-dustyBlue/40 pe-5 md:pe-6' : 'border-s border-brand-dustyBlue/40 ps-5 md:ps-6'}`}
                  >
                    <h3 className="font-montserrat text-[10px] uppercase tracking-[0.32em] text-brand-clayRed/75">
                      {section.eyebrow}
                    </h3>
                    <h2
                      id={`${section.id}-heading`}
                      className="font-rozha text-3xl text-brand-darkRed sm:text-4xl md:text-[2.65rem] md:leading-[1.08]"
                    >
                      {section.title}
                    </h2>
                    <div className="space-y-4 pt-1 md:space-y-5 md:pt-2">
                      {section.paragraphs.map((p, i) => (
                        <p key={i} className="font-montserrat text-sm leading-[1.92] tracking-wide text-brand-darkRed/78">
                          {p}
                        </p>
                      ))}
                      {expandedTextBySection[section.id] && expandedSections[section.id] ? (
                        <p className="font-montserrat text-sm leading-[1.92] tracking-wide text-brand-darkRed/78">
                          {expandedTextBySection[section.id]}
                        </p>
                      ) : null}
                      {expandedTextBySection[section.id] && !expandedSections[section.id] ? (
                        <button
                          type="button"
                          onClick={() => {
                            const eventMap: Record<string, string> = {
                              'the-monogram': 'click_read_more_monogram',
                              'al-talli': 'click_read_more_talli',
                              khous: 'click_read_more_khous',
                              'al-ain-rosette': 'click_read_more_al_ain_rosette',
                              'knotted-lines-of-lineage': 'click_read_more_knotted_lineage',
                              'the-strands': 'click_read_more_strands',
                            }
                            if (eventMap[section.id]) {
                              trackEvent(eventMap[section.id], { section_id: section.id })
                            }
                            setExpandedSections((prev) => ({
                              ...prev,
                              [section.id]: true,
                            }))
                          }}
                          className="inline-flex min-h-[44px] items-center justify-center border-b border-brand-darkRed/35 bg-transparent px-1 py-2 font-montserrat text-[10px] uppercase tracking-[0.18em] text-brand-darkRed transition-colors hover:border-brand-dustyBlue hover:text-brand-dustyBlue"
                          data-cursor-hover
                        >
                          {t.about.readMore}
                        </button>
                      ) : null}
                    </div>
                  </div>
                </motion.div>

                <ParallaxFramedImage
                  invert={isEven}
                  imageSrc={codesPageImage(section.imageFile)}
                  imageAlt={section.imageAlt}
                  priority={index < 2}
                  outerClassName={`${imageOrder} relative z-[1]`}
                  clipFrameClassName={
                    isEven
                      ? isRTL
                        ? 'origin-right rounded-sm lg:ms-auto'
                        : 'origin-left rounded-sm'
                      : isRTL
                        ? 'origin-left rounded-sm'
                        : 'origin-right rounded-sm lg:ms-auto'
                  }
                />
              </div>
            </section>
          )
        })}
      </div>

      <ExploreCollectionClosing
        from="the-codes"
        ctaAnalytics={{
          'data-bs-cta': true,
          'data-analytics-event': 'click_view_collection_codes_page',
          'data-analytics-section': 'the-codes-footer-cta',
        }}
      />
    </main>
  )
}
