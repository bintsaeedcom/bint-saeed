'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/i18n/LanguageContext'

const pressLogos = [
  { name: 'Vogue Arabia', logo: 'VOGUE' },
  { name: 'Harper\'s Bazaar', logo: 'BAZAAR' },
  { name: 'Elle Arabia', logo: 'ELLE' },
  { name: 'Grazia Middle East', logo: 'GRAZIA' },
  { name: 'Emirates Woman', logo: 'EMIRATES WOMAN' },
  { name: 'Khaleej Times', logo: 'KHALEEJ TIMES' },
]

export default function PressSection() {
  const { isRTL } = useLanguage()

  return (
    <section className="py-16 md:py-20 bg-white border-y border-brand-stone/20">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center font-roboto text-xs uppercase tracking-[0.4em] text-brand-clayRed/50 mb-10"
        >
          {isRTL ? 'كما ظهر في' : 'As Featured In'}
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {pressLogos.map((press, index) => (
            <motion.div
              key={press.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <span 
                className="font-rozha text-xl md:text-2xl text-brand-stone/40 group-hover:text-brand-dustyBlue/60 transition-colors duration-500 cursor-default"
                style={{ letterSpacing: '0.1em' }}
              >
                {press.logo}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
