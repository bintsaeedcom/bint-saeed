'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FiArrowRight, FiArrowDown } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'

function DecorativeCorners({ color = 'dustyBlue' }: { color?: 'dustyBlue' | 'darkRed' | 'stone' }) {
  const c = color === 'dustyBlue' ? 'from-brand-dustyBlue/40' : color === 'darkRed' ? 'from-brand-darkRed/30' : 'from-brand-stone/40'
  return (
    <>
      <motion.div className="absolute top-8 left-8 w-16 h-16 md:w-24 md:h-24 pointer-events-none" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
        <div className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r ${c} to-transparent`} />
        <div className={`absolute top-0 left-0 w-px h-full bg-gradient-to-b ${c} to-transparent`} />
      </motion.div>
      <motion.div className="absolute top-8 right-8 w-16 h-16 md:w-24 md:h-24 pointer-events-none" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.1 }}>
        <div className={`absolute top-0 right-0 w-full h-px bg-gradient-to-l ${c} to-transparent`} />
        <div className={`absolute top-0 right-0 w-px h-full bg-gradient-to-b ${c} to-transparent`} />
      </motion.div>
      <motion.div className="absolute bottom-8 left-8 w-16 h-16 md:w-24 md:h-24 pointer-events-none" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }}>
        <div className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r ${c} to-transparent`} />
        <div className={`absolute bottom-0 left-0 w-px h-full bg-gradient-to-t ${c} to-transparent`} />
      </motion.div>
      <motion.div className="absolute bottom-8 right-8 w-16 h-16 md:w-24 md:h-24 pointer-events-none" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.3 }}>
        <div className={`absolute bottom-0 right-0 w-full h-px bg-gradient-to-l ${c} to-transparent`} />
        <div className={`absolute bottom-0 right-0 w-px h-full bg-gradient-to-t ${c} to-transparent`} />
      </motion.div>
    </>
  )
}

export default function AboutPage() {
  const { isRTL } = useLanguage()
  return (
    <div className={`relative overflow-hidden bg-white ${isRTL ? 'rtl' : 'ltr'}`}>
      <AboutHero />
      <EditorialStatement />
      <MissionSection />
      <PhilosophySection />
      <ValuesSection />
      <JourneySection />
      <GivingBackSection />
      <AboutCTA />
    </div>
  )
}

function AboutHero() {
  const ref = useRef(null)
  const { t, isRTL } = useLanguage()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '45%'])
  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15])

  return (
    <section ref={ref} className="relative h-[100svh] w-full overflow-hidden">
      <motion.div style={{ scale }} className="absolute inset-0">
        <Image src="https://images.unsplash.com/photo-1590003511523-9c5e5e60a3b1?w=1920&q=90" alt="Bint Saeed" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2a0012]/70 via-[#1a0008]/50 to-[#0d0004]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,_rgba(146,170,193,0.12)_0%,_transparent_55%)]" />
      </motion.div>
      <DecorativeCorners color="dustyBlue" />
      <motion.div style={{ y, opacity }} className="relative h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-16">
          <div className={`grid lg:grid-cols-12 gap-8 items-center ${isRTL ? '' : ''}`}>
            <div className={`lg:col-span-8 ${isRTL ? 'lg:col-start-5' : ''}`}>
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}>
                <span className="inline-block px-5 py-2.5 backdrop-blur-md bg-white/[0.06] border border-brand-dustyBlue/20 rounded-full text-brand-dustyBlue font-roboto text-[10px] uppercase tracking-[0.4em] mb-8">
                  {t.about.subtitle}
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="font-rozha text-[11vw] md:text-[7vw] lg:text-[5.5vw] text-white leading-[0.9] mb-8"
              >
                {t.about.title}
                <br />
                <span className="text-brand-dustyBlue italic">{t.about.daughters}</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.8 }}
                className="font-roboto text-sm md:text-base text-white/70 tracking-wide max-w-lg leading-relaxed mb-10"
              >
                {t.about.daughtersText1}
              </motion.p>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
                <Link href="#statement" className="group inline-flex items-center gap-3 px-10 py-4 backdrop-blur-sm bg-white/[0.08] border border-brand-dustyBlue/30 text-white font-roboto text-xs uppercase tracking-[0.2em] rounded-xl hover:bg-brand-dustyBlue hover:text-[#1a0008] transition-all duration-500" data-cursor-hover>
                  <span>{t.about.readMore}</span>
                  <FiArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
          <FiArrowDown className="w-5 h-5 text-brand-dustyBlue/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}

function EditorialStatement() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-15%' })
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const floatY = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [80, 0, 0, -60])
  const floatOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const { t, isRTL } = useLanguage()

  return (
    <section id="statement" ref={ref} className="relative bg-white">
      <div className="absolute top-0 left-0 w-full md:w-1/2 h-full bg-gradient-to-br from-brand-rose/15 via-brand-stone/30 to-white" />
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-brand-dustyBlue via-brand-dustyBlue/40 to-transparent" />
      <div className="relative container mx-auto px-6 lg:px-16 py-28 md:py-44">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-0">
          <motion.div
            style={{ y: floatY, opacity: floatOpacity }}
            className={`lg:col-span-5 ${isRTL ? 'lg:col-start-8' : ''} relative z-10`}
          >
            <div className="lg:pr-12">
              <span className="font-roboto text-[10px] uppercase tracking-[0.4em] text-brand-dustyBlue mb-6 block">{t.about.subtitle}</span>
              <h2 className="font-rozha text-4xl md:text-5xl lg:text-6xl text-brand-darkRed leading-[1.05] mb-8">
                {t.about.heroTitle1}
                <br />
                <span className="text-brand-dustyBlue">{t.about.heroTitle2}</span>
                <br />
                {t.about.heroTitle3}
              </h2>
              <p className="font-roboto text-sm text-brand-darkRed/70 tracking-wide leading-[1.9] mb-10">{t.about.beginningP1}</p>
              <p className="font-roboto text-sm text-brand-darkRed/70 tracking-wide leading-[1.9]">{t.about.beginningP2}</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -80 : 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className={`lg:col-span-6 ${isRTL ? 'lg:col-start-1' : 'lg:col-start-7'}`}
          >
            <div className="relative aspect-[4/5] lg:-mr-8">
              <Image src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=900&q=90" alt="Heritage" fill className="object-cover" />
              <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-brand-dustyBlue/25 -z-10" />
              <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
                <p className="font-roboto text-sm text-brand-darkRed/90 tracking-wide leading-relaxed italic">
                  &ldquo;{t.about.daughtersText2}&rdquo;
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function MissionSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 0.5], [80, -40])
  const opacity = useTransform(scrollYProgress, [0, 0.35], [0, 1])
  const { t, isRTL } = useLanguage()

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#2a0012] via-[#1a0008] to-[#0d0004]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,_rgba(146,170,193,0.08)_0%,_transparent_60%)]" />
      <DecorativeCorners color="dustyBlue" />
      <div className="relative container mx-auto px-6 lg:px-16 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div style={{ y }} className="relative order-2 lg:order-1">
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0">
              <Image src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1000&q=90" alt="Craftsmanship" fill className="object-cover" />
              <div className="absolute -top-4 -right-4 w-full h-full border border-brand-dustyBlue/30" />
            </div>
            <div className="absolute -bottom-4 -right-4 md:right-auto md:-left-4 backdrop-blur-md bg-[#1a0008]/85 border border-brand-dustyBlue/25 px-6 py-4 rounded-xl">
              <span className="font-roboto text-[10px] uppercase tracking-[0.3em] text-brand-dustyBlue">{isRTL ? 'قصتنا' : 'Our Story'}</span>
            </div>
          </motion.div>
          <motion.div style={{ opacity }} className={`text-white order-1 lg:order-2 ${isRTL ? 'text-right' : ''}`}>
            <div className="relative max-w-xl">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-brand-dustyBlue/15 via-transparent to-brand-stone/10 opacity-60" />
              <div className="relative backdrop-blur-sm bg-white/[0.04] rounded-2xl p-8 md:p-10 border border-white/[0.06]">
                <span className="font-roboto text-[10px] uppercase tracking-[0.4em] text-brand-dustyBlue/80 mb-6 block">{t.about.beginningSubtitle}</span>
                <h2 className="font-rozha text-3xl md:text-4xl lg:text-5xl leading-[1.05] mb-8 text-white">
                  {t.about.beginningTitle1}
                  <br />
                  <span className="text-brand-dustyBlue">{t.about.beginningTitle2}</span>
                </h2>
                <p className="font-roboto text-sm text-white/65 tracking-wide leading-[1.85] mb-6">
                  As we move through time and space we emerge in different environments — meeting different reflections of ourselves. Within the reflective layers of imagination we find the ambition to pursue deeply hidden dreams.
                </p>
                <p className="font-roboto text-sm text-white/65 tracking-wide leading-[1.85] mb-10">
                  Bint Saeed, founded in 2026, is a tribute to the growth and meaningful life of every daughter. Inspiring young women to carry themselves through life with extraordinary elegance and grace. Creating collections that reflect compelling stories. Heritage and diversity at the heart of every stitch.
                </p>
                <Link href="/heritage" className={`group inline-flex items-center gap-3 font-roboto text-xs uppercase tracking-[0.2em] text-brand-dustyBlue hover:text-brand-stone transition-colors ${isRTL ? 'flex-row-reverse' : ''}`} data-cursor-hover>
                  {t.about.viewCollection}
                  <FiArrowRight className={`w-4 h-4 group-hover:translate-x-2 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute top-1/2 right-8 -translate-y-1/2 hidden xl:block">
        <span className="font-rozha text-8xl text-white/[0.04] select-none" style={{ writingMode: 'vertical-rl' }}>Bint Saeed</span>
      </div>
    </section>
  )
}

function PhilosophySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-20%' })
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0])
  const { isRTL } = useLanguage()

  return (
    <section ref={ref} className="relative py-32 md:py-48 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-rose/5 via-transparent to-brand-dustyBlue/5" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-dustyBlue/30 to-transparent" />
      <motion.div className="absolute inset-0 flex items-center justify-center opacity-[0.035]" style={{ opacity }}>
        <span className="font-rozha text-[28vw] text-brand-darkRed whitespace-nowrap select-none">Craft</span>
      </motion.div>
      <div className="relative container mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className={`max-w-3xl mx-auto text-center ${isRTL ? 'text-right' : ''}`}
        >
          <span className="font-roboto text-[10px] uppercase tracking-[0.4em] text-brand-dustyBlue mb-6 block">{isRTL ? 'فلسفتنا' : 'Our Philosophy'}</span>
          <h2 className="font-rozha text-4xl md:text-5xl lg:text-6xl text-brand-darkRed leading-[1.1] mb-10">
            {isRTL ? 'ربط الجذور بالمستقبل' : 'Connecting the Essence of Who We Are'}
          </h2>
          <div className="space-y-8">
            <p className="font-roboto text-base md:text-lg text-brand-darkRed/75 tracking-wide leading-[1.9]">
              We believe in connecting the dots. Matching the essence of who we are with who we aspire to be. Combining cultural innovation with the embrace of heritage — personifying timeless classics with the contemporary.
            </p>
            <p className="font-roboto text-base md:text-lg text-brand-darkRed/75 tracking-wide leading-[1.9]">
              Sourcing all materials with utmost care to deliver the highest standards. Collaborating with skilled craftspeople across Europe and the UAE, assembling luxurious textures and elements to add an extraordinary expression to every design.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ValuesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-10%' })
  const { t, isRTL } = useLanguage()
  const values = [
    { number: '01', title: t.about.craftsmanship, description: t.about.craftsmanshipDesc },
    { number: '02', title: t.about.sustainability, description: t.about.sustainabilityDesc },
    { number: '03', title: t.about.timelessness, description: t.about.timelessnessDesc },
    { number: '04', title: t.about.heritage, description: t.about.heritageDesc },
  ]

  return (
    <section ref={ref} className="relative py-28 md:py-40 bg-[#faf9f7]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-dustyBlue/25 to-transparent" />
      <div className="container mx-auto px-6 lg:px-16">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className={`text-center mb-20 ${isRTL ? 'text-right' : ''}`}>
          <span className="font-roboto text-[10px] uppercase tracking-[0.4em] text-brand-dustyBlue mb-4 block">{t.about.valuesSubtitle}</span>
          <h2 className="font-rozha text-4xl md:text-5xl lg:text-6xl text-brand-darkRed">{t.about.valuesTitle}</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`backdrop-blur-sm bg-white/60 border border-brand-dustyBlue/15 rounded-2xl p-8 md:p-10 ${isRTL ? 'text-right' : 'text-center'}`}
            >
              <span className="font-rozha text-5xl md:text-6xl text-brand-dustyBlue/30 mb-6 block">{v.number}</span>
              <h3 className="font-rozha text-2xl text-brand-darkRed mb-4">{v.title}</h3>
              <p className="font-roboto text-sm text-brand-clayRed/80 tracking-wide leading-relaxed">{v.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function JourneySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-15%' })
  const { t, isRTL } = useLanguage()
  const milestones = [
    { year: '2020', title: t.about.theBeginning, description: t.about.theBeginningDesc },
    { year: '2021', title: t.about.firstCollection, description: t.about.firstCollectionDesc },
    { year: '2023', title: t.about.international, description: t.about.internationalDesc },
    { year: '2026', title: t.about.today, description: t.about.todayDesc },
  ]

  return (
    <section ref={ref} className="relative py-28 md:py-40 bg-white">
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-brand-dustyBlue/40 via-brand-dustyBlue/20 to-transparent hidden lg:block" />
      <div className="container mx-auto px-6 lg:px-16">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className={`mb-20 ${isRTL ? 'text-right' : ''}`}>
          <span className="font-roboto text-[10px] uppercase tracking-[0.4em] text-brand-dustyBlue mb-4 block">{t.about.journeySubtitle}</span>
          <h2 className="font-rozha text-4xl md:text-5xl text-brand-darkRed">{t.about.journeyTitle}</h2>
        </motion.div>
        <div className="relative">
          <div className="absolute top-0 bottom-0 left-0 lg:left-8 w-px bg-brand-dustyBlue/20 hidden md:block" />
          <div className="space-y-16 md:space-y-24">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.12 }}
                className={`relative flex flex-col md:flex-row md:items-center gap-8 ${isRTL ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`md:w-1/2 ${isRTL ? 'md:pl-16 md:text-right' : 'md:pr-16'}`}>
                  <div className="inline-block backdrop-blur-sm bg-brand-dustyBlue/10 border border-brand-dustyBlue/25 rounded-xl px-6 py-3 mb-4">
                    <span className="font-rozha text-3xl text-brand-darkRed">{m.year}</span>
                  </div>
                  <h3 className="font-rozha text-2xl md:text-3xl text-brand-darkRed mb-3">{m.title}</h3>
                  <p className="font-roboto text-sm text-brand-clayRed/80 tracking-wide leading-relaxed">{m.description}</p>
                </div>
                <div className="hidden md:flex absolute left-0 lg:left-8 top-8 w-3 h-3 bg-brand-dustyBlue rounded-full -translate-x-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function GivingBackSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-20%' })
  const { isRTL } = useLanguage()

  return (
    <section ref={ref} className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&q=90" alt="Giving Back" fill className="object-cover" />
        <div className="absolute inset-0 bg-brand-darkRed/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(146,170,193,0.1)_0%,_transparent_70%)]" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="relative container mx-auto px-6 lg:px-16 text-center"
      >
        <div className="max-w-2xl mx-auto backdrop-blur-md bg-white/[0.08] border border-brand-dustyBlue/25 rounded-3xl p-10 md:p-14">
          <span className="font-roboto text-[10px] uppercase tracking-[0.4em] text-brand-dustyBlue mb-6 block">{isRTL ? 'العطاء' : 'Giving Back'}</span>
          <h2 className="font-rozha text-4xl md:text-5xl lg:text-6xl text-white mb-8">
            {isRTL ? 'حب يمتد' : 'Extending Love'}
            <br />
            <span className="text-brand-dustyBlue">&amp; Care</span>
          </h2>
          <p className="font-roboto text-base md:text-lg text-white/80 tracking-wide leading-relaxed mb-10">
            {isRTL ? 'تبرع بنت سعيد 10٪ من كل طلب لبرامج رعاية الأيتام التي تسهلها هيئة الهلال الأحمر الإماراتي وصندوق الزكاة.' : 'Bint Saeed donates 10% of every order to orphanage support programmes facilitated by the Emirates Red Crescent Authority and the Zakat Fund.'}
          </p>
          <div className="w-16 h-px bg-brand-dustyBlue/50 mx-auto" />
        </div>
      </motion.div>
    </section>
  )
}

function AboutCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-20%' })
  const { t, isRTL } = useLanguage()

  return (
    <section ref={ref} className="relative">
      <div className="absolute inset-0">
        <Image src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1920&q=90" alt="Discover" fill className="object-cover" />
        <div className="absolute inset-0 bg-brand-darkRed/75" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-dustyBlue/40 to-transparent" />
      <div className="relative container mx-auto px-6 lg:px-16 py-32 md:py-48 text-center">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9 }}>
          <h2 className="font-rozha text-4xl md:text-5xl lg:text-6xl text-white mb-8">{t.about.ctaTitle}</h2>
          <Link
            href="/shop"
            className={`inline-flex items-center gap-3 px-12 py-5 bg-brand-dustyBlue text-[#1a0008] font-roboto text-sm uppercase tracking-[0.2em] hover:bg-brand-stone hover:text-brand-darkRed transition-all duration-500 rounded-xl ${isRTL ? 'flex-row-reverse' : ''}`}
            data-cursor-hover
          >
            {t.about.shopNow}
            <FiArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
          </Link>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-dustyBlue/40 via-brand-stone/40 to-brand-dustyBlue/40" />
    </section>
  )
}
