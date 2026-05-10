'use client'

import { useState, type CSSProperties } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiInstagram, FiArrowRight, FiCheck } from 'react-icons/fi'
import { validateSubscriberEmail } from '@/lib/validateSubscriberEmail'

/** Same horizontal wine field as `components/Header.tsx` — keeps coming-soon on-brand */
const headerBarGradient =
  'bg-[linear-gradient(90deg,#12080b_0%,#1c0f15_22%,#2d141e_50%,#1c0f15_78%,#12080b_100%)]'

/** `public/coming-soon-images/1a.jpg` … `24a.jpg` */
const COMING_SOON_IMAGES_V = '4'
const COMING_SOON_IMAGES = Array.from(
  { length: 24 },
  (_, i) => `/coming-soon-images/${i + 1}a.jpg?v=${COMING_SOON_IMAGES_V}`,
)

/** One full loop duration (seconds). Very slow drift; tune here. */
const MARQUEE_DURATION_SEC = 140

/** `public/charms/charm-fabric-dark.webp` — ABOUT band backdrop */
const ABOUT_FABRIC_BG = '/charms/charm-fabric-dark.webp'

const aboutRevealContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.05 },
  },
}

const aboutRevealItem = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.82, ease: [0.16, 1, 0.3, 1] },
  },
}

const horizontalFrameClass =
  'coming-soon-carousel-frame relative shrink-0 overflow-hidden rounded-[3px] border border-white/[0.14] bg-black/25 shadow-[0_8px_28px_rgba(0,0,0,0.5),inset_0_0_0_1px_rgba(255,255,255,0.06)] aspect-[3/4] w-[min(42vw,9.5rem)] select-none sm:w-40 md:w-48 lg:w-52 xl:w-56'

/** One row, 12 images duplicated — seamless horizontal loop (drifts left-to-right) */
function HorizontalMarqueeStrip({ images }: { images: string[] }) {
  const looped = [...images, ...images]
  return (
    <div
      className="relative w-full min-w-0 overflow-hidden"
      style={
        {
          ['--coming-soon-marquee-duration' as string]: `${MARQUEE_DURATION_SEC}s`,
        } as CSSProperties
      }
    >
      <div
        className="coming-soon-carousel-fade-x pointer-events-none absolute inset-0 z-10"
        aria-hidden
      />
      <div className="coming-soon-marquee-track-x coming-soon-marquee-track-x--ltr flex w-max flex-nowrap items-center gap-3 py-0.5 sm:gap-4 md:gap-5 lg:gap-6">
        {looped.map((src, i) => (
          <div key={`${src}-${i}`} className={horizontalFrameClass}>
            <Image
              src={src}
              alt=""
              fill
              draggable={false}
              className="pointer-events-none object-cover select-none"
              sizes="(max-width: 640px) 42vw, (max-width: 1280px) 18vw, 224px"
              aria-hidden
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ComingSoonPage() {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const validateEmail = (value: string) => {
    if (!value.trim()) return 'Please enter your email'
    const r = validateSubscriberEmail(value)
    return r.valid ? '' : r.message
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    setSubmitError('')
    if (emailError) setEmailError(validateEmail(e.target.value))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const error = validateEmail(email)
    if (error) {
      setEmailError(error)
      return
    }

    setIsSubmitted(true)

    fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, source: 'coming-soon' }),
    }).catch(() => {})

    setEmail('')
  }

  return (
    <div
      className={`relative min-h-[100dvh] min-h-screen overflow-x-hidden overflow-y-auto ${headerBarGradient}`}
    >
      {/* Depth — same family as header */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_115%_88%_at_50%_-8%,rgba(45,20,30,0.35)_0%,transparent_52%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(146,170,193,0.07)_0%,transparent_68%)]" />
        <div className="absolute inset-0 bg-[#1a0a10]/55" />
        <div className="absolute inset-0 shadow-[inset_0_0_96px_rgba(0,0,0,0.36)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100dvh] w-full min-w-0 max-w-lg flex-col px-4 pt-[max(1rem,env(safe-area-inset-top,0px))] pb-[max(1.5rem,env(safe-area-inset-bottom,0px))] sm:px-6 md:max-w-full md:px-10 lg:px-16 xl:px-24">
        {/* Logo — compact on narrow phones */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex shrink-0 flex-col items-center"
        >
          <div className="absolute inset-0 scale-[1.4] blur-[48px] opacity-35">
            <div className="h-full w-full rounded-full bg-gradient-to-r from-brand-dustyBlue/40 via-brand-stone/25 to-brand-dustyBlue/40" />
          </div>
          <Image
            src="/gold logo.png"
            alt="Bint Saeed"
            width={480}
            height={144}
            className="relative z-10 h-11 w-auto sm:h-14 md:h-16"
            priority
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-montserrat mx-auto mb-8 mt-5 max-w-[18rem] px-1 text-center text-[10px] uppercase leading-snug tracking-[0.2em] text-white/75 sm:mb-10 sm:mt-7 md:mb-10 md:mt-8 sm:max-w-none sm:text-[11px] sm:tracking-[0.24em]"
        >
          Soon more will be revealed
        </motion.p>

        {/* One horizontal carousel — full-bleed on md+ via negative margins (avoids w-screen + translate clip bugs) */}
        <div className="relative -mx-1 mb-8 w-[calc(100%+0.5rem)] max-w-none shrink-0 select-none sm:mx-0 sm:mb-10 sm:w-full md:mb-10 md:-mx-10 md:w-[calc(100%+5rem)] lg:-mx-16 lg:w-[calc(100%+8rem)] xl:-mx-24 xl:w-[calc(100%+12rem)]">
          <div
            className="flex min-h-[min(38vw,11.5rem)] items-center sm:min-h-[13.5rem] md:min-h-[16rem] lg:min-h-[18rem]"
            aria-hidden
          >
            <HorizontalMarqueeStrip images={COMING_SOON_IMAGES} />
          </div>
          <div
            className="absolute inset-0 z-[30] cursor-default touch-pan-y"
            onContextMenu={(e) => {
              e.preventDefault()
              e.stopPropagation()
            }}
            onDragStart={(e) => {
              e.preventDefault()
              e.stopPropagation()
            }}
            onPointerDown={(e) => {
              if (e.button === 1) e.preventDefault()
            }}
            aria-hidden
          />
        </div>

        {/* ABOUT — fabric field + staggered scroll reveal */}
        <section
          className="relative -mx-1 mb-6 min-h-[min(60vh,28rem)] w-[calc(100%+0.5rem)] overflow-hidden sm:mx-0 sm:mb-8 sm:w-full md:-mx-10 md:w-[calc(100%+5rem)] lg:-mx-16 lg:w-[calc(100%+8rem)] xl:-mx-24 xl:w-[calc(100%+12rem)]"
          aria-labelledby="coming-soon-about-heading"
        >
          <div
            className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${ABOUT_FABRIC_BG}')` }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-black/58"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_40%,transparent_0%,rgba(0,0,0,0.35)_100%)]"
            aria-hidden
          />

          <div className="relative z-10 mx-auto w-full max-w-lg px-5 py-12 text-white sm:px-8 sm:py-16 md:max-w-full md:px-12 md:py-16 lg:px-20 lg:py-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2, margin: '0px 0px -10% 0px' }}
              variants={aboutRevealContainer}
            >
              <motion.h2
                variants={aboutRevealItem}
                id="coming-soon-about-heading"
                className="font-rozha text-left text-[clamp(1.45rem,4.6vw,2rem)] leading-tight tracking-[0.12em] text-white"
              >
                ABOUT
              </motion.h2>
              <motion.div
                variants={aboutRevealItem}
                className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/35 to-transparent sm:mt-5"
                aria-hidden
              />
              <motion.h3
                variants={aboutRevealItem}
                className="font-rozha mt-6 text-left text-[clamp(1rem,3.4vw,1.25rem)] font-normal leading-snug tracking-wide text-white/95 sm:mt-8"
              >
                A house shaped by origin, carried across the world.
              </motion.h3>
              <motion.p
                variants={aboutRevealItem}
                className="font-montserrat mt-6 text-left text-[15px] font-normal leading-[1.65] text-white/85 sm:mt-8 sm:text-[0.95rem]"
              >
                The woman of today does not live as the woman of ten years ago. She moves between responsibilities,
                countries, meetings, family life, travel, and occasion with a pace that asks more of her than ever
                before. Yet whatever she becomes in the world, she remains a daughter first, carrying with her the
                values, recognitions, and standards she was shaped by.
              </motion.p>
              <motion.p
                variants={aboutRevealItem}
                className="font-montserrat mt-5 text-left text-[15px] font-normal leading-[1.65] text-white/85 sm:mt-6 sm:text-[0.95rem]"
              >
                Bint Saeed fills the gap where consistent elegance is often lost as women transition between settings,
                environments, and borders. The Bint Saeed wardrobe allows its clientele to present themselves with
                confidence and certainty, without the need to adapt to every passing trend.
              </motion.p>
              <motion.p
                variants={aboutRevealItem}
                className="font-montserrat mt-5 text-left text-[15px] font-normal leading-[1.65] text-white/80 sm:mt-6 sm:text-[0.95rem]"
              >
                Rooted in Abu Dhabi, Bint Saeed builds its design language through enduring codes like the woven memory
                of Khous, the delicacy of Talli, the warmth of natural gemstones, and signature details carried into
                modern silhouettes made for a life in motion.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Gazelles — editorial image below ABOUT */}
        <div
          className="relative -mx-1 mb-6 mt-4 aspect-[21/9] w-[calc(100%+0.5rem)] overflow-hidden sm:mx-0 sm:mb-8 sm:mt-6 sm:w-full md:-mx-10 md:aspect-[3/1] md:w-[calc(100%+5rem)] lg:-mx-16 lg:w-[calc(100%+8rem)] xl:-mx-24 xl:w-[calc(100%+12rem)]"
        >
          <Image
            src="/gazelles.jpg"
            alt="Gazelles"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        {/* Email + social — below collage */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.55 }}
          className="mt-10 w-full shrink-0 sm:mt-12 md:mt-14"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mx-auto max-w-[48rem] py-6 text-center"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-brand-dustyBlue/30">
                <FiCheck className="h-7 w-7 text-brand-dustyBlue" />
              </div>
              <p className="font-rozha mb-2 text-2xl tracking-wide text-white">Thank You</p>
              <p className="font-montserrat text-xs tracking-wider text-brand-dustyBlue/60">
                We&apos;ll notify you when we launch
              </p>
            </motion.div>
          ) : (
            <div className="relative mx-auto w-full max-w-[48rem]">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-brand-dustyBlue/20 via-transparent to-brand-stone/10 opacity-50" />
              <div className="relative rounded-2xl border border-white/[0.1] bg-white/[0.04] p-4 backdrop-blur-sm sm:p-6 md:p-7">
                <p className="font-montserrat mb-3 text-center text-[10px] uppercase tracking-[0.2em] text-brand-dustyBlue/85 sm:mb-4 sm:text-[11px] sm:tracking-[0.24em] md:whitespace-nowrap">
                  Be the first to know when we launch our site
                </p>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      onBlur={() => email && setEmailError(validateEmail(email))}
                      placeholder="Enter your email"
                      autoComplete="email"
                      inputMode="email"
                      enterKeyHint="done"
                      className={`font-montserrat min-h-[48px] w-full rounded-xl border bg-white/[0.07] px-4 py-3 text-base tracking-wide text-white/90 placeholder:text-white/55 focus:outline-none transition-all duration-300 sm:text-sm ${
                        emailError
                          ? 'border-red-400/30'
                          : 'border-white/[0.22] focus:border-brand-dustyBlue/60 focus:bg-white/[0.12]'
                      }`}
                    />
                  </div>
                  {emailError && (
                    <p className="font-montserrat px-1 text-xs tracking-wide text-red-400/70">{emailError}</p>
                  )}
                  {submitError && (
                    <p className="font-montserrat px-1 text-xs tracking-wide text-red-400/70">{submitError}</p>
                  )}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="group flex min-h-[48px] w-full touch-manipulation items-center justify-center gap-3 rounded-[4px] bg-brand-dustyBlue py-3 font-montserrat text-xs uppercase tracking-[0.2em] text-[#12060e] transition-all duration-300 active:bg-[#9fb4c8] hover:bg-[#a8bfd1] disabled:opacity-50 sm:min-h-[44px]"
                  >
                    {isLoading ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#1a0008]/20 border-t-[#1a0008]" />
                        <span>Subscribing...</span>
                      </>
                    ) : (
                      <>
                        <span>Notify Me</span>
                        <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="relative z-50 mt-5 flex items-center justify-center gap-6 sm:mt-6 sm:gap-8"
        >
          <a
            href="https://www.instagram.com/bintsaeed_brand/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] min-w-[44px] touch-manipulation items-center justify-center rounded-full p-2 text-white/45 transition-colors duration-300 active:text-brand-dustyBlue/90 hover:text-brand-dustyBlue"
            aria-label="Instagram"
          >
            <FiInstagram className="h-6 w-6" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="mt-6 flex items-center justify-center gap-3 pb-[env(safe-area-inset-bottom,0px)] pt-1"
        >
          <div className="h-1 w-1 rounded-full bg-brand-dustyBlue/50" />
          <p className="font-montserrat max-w-[90vw] text-center text-[10px] uppercase tracking-[0.35em] text-white/25 sm:tracking-[0.4em]">
            Abu&nbsp;Dhabi
          </p>
          <div className="h-1 w-1 rounded-full bg-brand-dustyBlue/50" />
        </motion.div>
      </div>
    </div>
  )
}
