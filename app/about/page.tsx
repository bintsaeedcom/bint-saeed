'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export default function AboutPage() {
  const { isRTL } = useLanguage()
  
  return (
    <div className={`min-h-screen bg-white ${isRTL ? 'rtl' : 'ltr'}`}>
      <HeroSection />
      <MissionSection />
      <PhilosophySection />
      <GivingBackSection />
      <ValuesSection />
      <JourneySection />
      <CTASection />
    </div>
  )
}

function HeroSection() {
  const { t, isRTL } = useLanguage()
  
  return (
    <section className="min-h-screen bg-brand-clayRed flex items-center justify-center py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0, 1] }}
          className="text-center text-white max-w-3xl mx-auto"
        >
          <h1 className="font-rozha text-5xl md:text-7xl lg:text-8xl mb-16">
            {t.about.title}
          </h1>
          
          <p className="font-roboto text-lg md:text-xl tracking-wide mb-8">
            {t.about.daughters}
          </p>
          
          <p className="font-roboto text-base md:text-lg tracking-wide leading-relaxed mb-16 text-white/90">
            {t.about.daughtersText1}
            <br /><br />
            {t.about.daughtersText2}
          </p>
          
          <Link
            href="#mission"
            className="inline-block px-16 py-4 border border-white text-white font-roboto text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-brand-dustyBlue transition-all duration-500"
            data-cursor-hover
          >
            {t.about.readMore}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function MissionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-20%' })
  const { isRTL } = useLanguage()

  return (
    <section id="mission" ref={ref} className="bg-brand-clayRed">
      <div className="grid lg:grid-cols-2">
        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
          className="relative h-[60vh] lg:h-auto lg:min-h-screen order-2 lg:order-1"
        >
          <Image
            src="https://images.unsplash.com/photo-1590003511523-9c5e5e60a3b1?w=1200&q=90"
            alt="Emirati Woman"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-clayRed/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-brand-clayRed/20" />
        </motion.div>

        {/* Content Side */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0, 1] }}
          className="flex items-center py-20 lg:py-32 px-6 lg:px-16 order-1 lg:order-2"
        >
          <div className="text-white max-w-xl">
            <p className="font-roboto text-base md:text-lg tracking-wide leading-relaxed mb-10 text-white/90">
              "As we daily transit through time and space - we emerge in different environments - meeting different reflections of ourselves. Within the reflective layers of our vivid imagination we find the ambition and strength to pursue deeply hidden dreams to discover, to achieve or to become. We want to contribute to a better tomorrow and to add our value to those we love and cherish.
            </p>

            <p className="font-roboto text-base md:text-lg tracking-wide leading-relaxed mb-10 text-white/90">
              Bint Saeed, founded in 2026, is a tribute to the growth and meaningful life of every daughter. It's a novel of becoming that meets the narrative of experiencing the ongoing changes around us and within us.
            </p>

            <p className="font-roboto text-base md:text-lg tracking-wide leading-relaxed text-white/90">
              <span className="font-bold">Inspiring</span> young women to carry theirselves through life in an extraordinary elegant and graceful way with a positive mindset and attitude. <span className="font-bold">Assembling</span> unusual and authentic designs. <span className="font-bold">Enhancing</span> self awareness, confidence, authenticity, individuality and intellect. Embracing cultural heritage and the diversity in culture over the past decades. <span className="font-bold">Creating</span> collections that reflect compelling stories. <span className="font-bold">Evoking</span> interest in architecture, culture, history and science. <span className="font-bold">Sharing</span> knowledge to be extended to others. <span className="font-bold">Fuelling</span> the passion within. <span className="font-bold">Leaving our mark</span> by giving love back to our society.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function PhilosophySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-20%' })

  return (
    <section ref={ref} className="py-24 md:py-32 bg-brand-stone">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="font-roboto text-lg md:text-xl text-brand-darkRed tracking-wide leading-relaxed mb-10">
            We believe in connecting the dots. Matching the essence of who we are with who we aspire to be. Combining cultural innovation with the embracement of cultural heritage by Personification timeless classics with the contemporary.
          </p>
          
          <p className="font-roboto text-lg md:text-xl text-brand-darkRed tracking-wide leading-relaxed">
            Sourcing all materials with utmost care to deliver higher standards of quality. Collaborating with the most skilled craftsmen and woman around Europe, assembling luxurious textures, and elements, to add an extraordinary expression to our designs.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function GivingBackSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-20%' })

  return (
    <section ref={ref} className="py-24 md:py-32 bg-[#f5f7fa]">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="font-rozha text-3xl md:text-4xl lg:text-5xl text-brand-darkRed mb-8">
            Extending Love and Care
          </h2>
          
          <p className="font-roboto text-lg md:text-xl text-brand-darkRed/80 tracking-wide leading-relaxed">
            Bint Saeed donates a 10% of every order to orphanage support programmes facilitated by the Emirates Red Crescent Authority and the Zakat Fund.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function ValuesSection() {
  const { t, isRTL } = useLanguage()
  
  const values = [
    {
      number: '01',
      title: t.about.craftsmanship,
      description: t.about.craftsmanshipDesc,
    },
    {
      number: '02',
      title: t.about.sustainability,
      description: t.about.sustainabilityDesc,
    },
    {
      number: '03',
      title: t.about.timelessness,
      description: t.about.timelessnessDesc,
    },
    {
      number: '04',
      title: t.about.heritage,
      description: t.about.heritageDesc,
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-[#f8f7f5]">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="font-roboto text-xs uppercase tracking-[0.4em] text-brand-clayRed mb-4 block">
            {t.about.valuesSubtitle}
          </span>
          <h2 className="font-rozha text-4xl md:text-5xl lg:text-6xl text-brand-darkRed">
            {t.about.valuesTitle}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`text-center lg:text-${isRTL ? 'right' : 'left'}`}
            >
              <span className="font-rozha text-5xl text-brand-stone/50 mb-4 block">
                {value.number}
              </span>
              <h3 className="font-rozha text-2xl text-brand-darkRed mb-4">
                {value.title}
              </h3>
              <p className="font-roboto text-sm text-brand-clayRed/70 tracking-wide leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function JourneySection() {
  const { t, isRTL } = useLanguage()
  
  const milestones = [
    { year: '2020', title: t.about.theBeginning, description: t.about.theBeginningDesc },
    { year: '2021', title: t.about.firstCollection, description: t.about.firstCollectionDesc },
    { year: '2023', title: t.about.international, description: t.about.internationalDesc },
    { year: '2026', title: t.about.today, description: t.about.todayDesc },
  ]

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-roboto text-xs uppercase tracking-[0.4em] text-brand-clayRed mb-4 block">
            {t.about.journeySubtitle}
          </span>
          <h2 className="font-rozha text-4xl md:text-5xl text-brand-darkRed">
            {t.about.journeyTitle}
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-brand-stone/30 hidden md:block" />
          
          <div className="space-y-12 md:space-y-0">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  <span className="font-rozha text-5xl text-brand-stone/40 block mb-2">
                    {milestone.year}
                  </span>
                  <h3 className="font-rozha text-2xl text-brand-darkRed mb-2">
                    {milestone.title}
                  </h3>
                  <p className="font-roboto text-sm text-brand-clayRed/70 tracking-wide">
                    {milestone.description}
                  </p>
                </div>
                
                {/* Dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-brand-darkRed rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  const { t, isRTL } = useLanguage()
  
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1920&q=90"
          alt="Discover Collection"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative container mx-auto px-6 lg:px-12 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-rozha text-4xl md:text-5xl lg:text-6xl mb-8">
            {t.about.ctaTitle}
          </h2>
          <Link
            href="/shop"
            className={`inline-flex items-center gap-3 px-10 py-4 bg-white text-brand-darkRed font-roboto text-sm uppercase tracking-[0.2em] hover:bg-brand-dustyBlue transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
            data-cursor-hover
          >
            {t.about.shopNow}
            <FiArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
