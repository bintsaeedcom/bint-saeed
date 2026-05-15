'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import LocaleLink from '@/components/LocaleLink'

const INNER_CONTAINER_CLASS = 'mx-auto max-w-[1280px] px-4 md:px-10'
const PERSONALISATION_PAGE = encodeURIComponent('Personalisation Page')
const HERO_IMAGE = `/${PERSONALISATION_PAGE}/${encodeURIComponent('secret pocket.JPG')}`
const SECRET_POCKET_IMAGE = HERO_IMAGE
const LABEL_IMAGE = `/${PERSONALISATION_PAGE}/${encodeURIComponent('label.JPG')}`
const HIDDEN_POCKET_ALT = 'Bint Saeed hidden pocket personalisation detail — Abu Dhabi'
const LABEL_ALT = 'Bint Saeed personalised label — Abu Dhabi'

/** TODO: replace src with pocket location video once filmed */
const POCKET_VIDEO_SRC = ''

const STEP_COPY = [
  {
    numeral: 'I',
    title: 'ADD YOUR MESSAGE',
    body: 'During checkout, add a name, a date, or a short private message to be placed within the garment.',
  },
  {
    numeral: 'II',
    title: 'WE PLACE IT INSIDE',
    body: 'Your message is printed on a Bint Saeed label and placed inside the hidden pocket before the piece is completed.',
  },
  {
    numeral: 'III',
    title: 'YOU CARRY IT',
    body: 'The pocket is sealed. Only you know it is there.',
  },
] as const

const CLOSING_QUOTE = 'It turns a piece into something that belongs to you in a deeper way.'

export default function PersonalisationPage() {
  const stepsRef = useRef<HTMLElement | null>(null)
  const quoteRef = useRef<HTMLElement | null>(null)
  const [heroOffset, setHeroOffset] = useState(0)
  const [stepsVisible, setStepsVisible] = useState(false)
  const [quoteVisible, setQuoteVisible] = useState(false)

  useEffect(() => {
    let frame = 0
    const update = () => {
      window.cancelAnimationFrame(frame)
      frame = window.requestAnimationFrame(() => {
        setHeroOffset(window.scrollY * 0.5)
      })
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', update)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === stepsRef.current && entry.isIntersecting) setStepsVisible(true)
          if (entry.target === quoteRef.current && entry.isIntersecting) setQuoteVisible(true)
        })
      },
      { threshold: 0.28 },
    )
    const steps = stepsRef.current
    const quote = quoteRef.current
    if (steps) observer.observe(steps)
    if (quote) observer.observe(quote)
    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen overflow-x-clip bg-[#1a0210] ltr">
      <section className="relative z-0 h-[85vh] max-h-[85vh] overflow-hidden bg-[#1a0210] text-[#e8ddd4]">
        <div
          className="absolute inset-0 opacity-65"
          style={{ transform: `translateY(${heroOffset}px)` }}
          aria-hidden
        >
          <Image
            src={HERO_IMAGE}
            alt={HIDDEN_POCKET_ALT}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(26,2,16,0.92)_0%,rgba(26,2,16,0.62)_46%,rgba(26,2,16,0.22)_100%)]" />
        </div>

        <div className="absolute bottom-10 left-6 right-6 z-10 max-w-[600px] pb-14 text-left md:bottom-[60px] md:left-[60px] md:right-auto md:pb-16">
          <h1
            data-document-h1="true"
            className="max-w-[760px] font-rozha text-[clamp(36px,6vw,72px)] leading-[0.98] tracking-[0.01em]"
            style={{ color: '#e8ddd4' }}
          >
            A piece you wear. A message you carry.
          </h1>
          <p className="mt-3 max-w-[480px] font-montserrat text-[14px] font-normal leading-[1.7] tracking-[0.02em] text-[rgba(232,216,200,0.75)]">
            Every Bint Saeed piece includes a hidden pocket. What you place inside it is yours alone.
          </p>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-20 overflow-hidden border-t border-[#2a0a14] bg-[#1a0210]/80 py-4">
          <div className="personalisation-marquee flex w-max font-montserrat text-[11px] uppercase tracking-[0.2em] text-[#6a8090]/65">
            {Array.from({ length: 8 }).map((_, index) => (
              <span key={index} className="px-4">
                PERSONALISATION · BINT SAEED · ABU DHABI · HIDDEN POCKET · CRAFTED TO ORDER ·
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-6 rounded-t-[16px] bg-[#e8ddd4] py-20 shadow-[0_-12px_40px_rgba(0,0,0,0.3)] md:-mt-10 md:sticky md:top-0 md:will-change-transform">
        <div className={`${INNER_CONTAINER_CLASS} grid gap-12 text-left md:grid-cols-[1.1fr_0.9fr] md:items-center`}>
          <div>
            <p className="font-montserrat text-[10px] uppercase tracking-[0.28em] text-[#7A1C28]">THE SECRET</p>
            <h2 className="mt-4 font-rozha text-[clamp(2.5rem,5vw,4.75rem)] leading-[1] text-[#1a0210]">
              Some things are not meant to be shown.
            </h2>
            <p className="mt-6 max-w-2xl font-montserrat text-[15px] leading-[1.9] tracking-wide text-[#1a0210]/72">
              Each Bint Saeed piece includes a discreet space within it — a small pocket, covered and hidden inside the
              garment. A name. A meaningful date. A few words written for yourself or for someone you love.
            </p>
          </div>
          <div className="overflow-hidden rounded-[4px] bg-[#faf8f5]">
            <Image
              src={SECRET_POCKET_IMAGE}
              alt={HIDDEN_POCKET_ALT}
              width={480}
              height={600}
              sizes="(max-width: 768px) 90vw, 42vw"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="relative z-20 -mt-6 rounded-t-[16px] bg-[#1a0210] py-20 shadow-[0_-12px_40px_rgba(0,0,0,0.3)] md:-mt-10 md:sticky md:top-0 md:will-change-transform">
        <div className={`${INNER_CONTAINER_CLASS} text-left`}>
          <p className="font-montserrat text-[10px] uppercase tracking-[0.28em] text-[#6a8090]">THE POCKET</p>
          <h2 className="mt-4 max-w-3xl font-rozha text-[clamp(2.4rem,5vw,4.5rem)] leading-[1] text-[#e8ddd4]">Where it lives.</h2>
          <p className="mt-5 max-w-2xl font-montserrat text-[15px] leading-[1.9] tracking-wide text-[#e8ddd4]/72">
            The pocket sits discreetly inside the garment, invisible from the outside. Only you know it is there.
          </p>
          <div className="relative mx-auto mt-10 aspect-video w-full max-w-[640px] overflow-hidden rounded-[4px] bg-[#2a0a14]">
            {POCKET_VIDEO_SRC ? (
              <video src={POCKET_VIDEO_SRC} autoPlay loop muted playsInline className="h-full w-full object-cover" />
            ) : (
              <>
                {/* TODO: replace src with pocket location video once filmed */}
                <video src="" autoPlay loop muted playsInline className="sr-only" aria-hidden />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="font-montserrat text-[11px] uppercase tracking-[0.2em] text-[#e8ddd4]/40">
                    Video coming soon
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="relative z-30 -mt-6 rounded-t-[16px] bg-[#faf8f5] py-20 shadow-[0_-12px_40px_rgba(0,0,0,0.3)] md:-mt-10 md:sticky md:top-0 md:will-change-transform">
        <div className={`${INNER_CONTAINER_CLASS} text-left`}>
          <p className="font-montserrat text-[10px] uppercase tracking-[0.28em] text-[#7A1C28]">THE MESSAGE</p>
          <h2 className="mt-4 max-w-3xl font-rozha text-[clamp(2.4rem,5vw,4.5rem)] leading-[1] text-[#1a0210]">
            What you place inside it.
          </h2>
          <p className="mt-5 max-w-2xl font-montserrat text-[15px] leading-[1.9] tracking-wide text-[#1a0210]/72">
            A piece may carry your own name, the name of the person gifting it, or a message that marks a moment, a bond,
            or something you never want to forget. Because the message is hidden, it remains intimate. Not created for
            display, but for closeness.
          </p>
          <div className="mx-auto mt-10 grid max-w-[640px] grid-cols-2 gap-3">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="relative aspect-square overflow-hidden rounded-[4px]">
                <Image src={LABEL_IMAGE} alt={LABEL_ALT} fill sizes="(max-width: 768px) 45vw, 320px" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={stepsRef}
        className="relative z-40 -mt-6 rounded-t-[16px] bg-[#1a0210] py-20 shadow-[0_-12px_40px_rgba(0,0,0,0.3)] md:-mt-10 md:sticky md:top-0 md:will-change-transform"
      >
        <div className={`${INNER_CONTAINER_CLASS} text-left`}>
          <p className="font-montserrat text-[10px] uppercase tracking-[0.28em] text-[#6a8090]">HOW IT WORKS</p>
          <h2 className="mt-4 max-w-3xl font-rozha text-[clamp(2.4rem,5vw,4.5rem)] leading-[1] text-[#e8ddd4]">Three steps.</h2>
          <div className="mt-12 grid gap-px bg-[rgba(232,216,200,0.1)] md:grid-cols-3">
            {STEP_COPY.map((step, index) => (
              <article
                key={step.numeral}
                className={`bg-[#1a0210] p-8 text-left transition-all duration-700 ${
                  stepsVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <p className="mb-6 font-rozha text-[48px] leading-none text-[rgba(122,28,40,0.35)]">{step.numeral}</p>
                <h3 className="mb-3 font-montserrat text-[11px] font-medium uppercase tracking-[0.15em] text-[#e8d8c8]">
                  {step.title}
                </h3>
                <p className="font-montserrat text-[13px] font-normal leading-[1.7] text-[rgba(232,216,200,0.6)]">{step.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 text-center font-montserrat text-[13px] text-[#e8ddd4]/60">
            Personalisation is complimentary on every order.
          </p>
        </div>
      </section>

      <section
        ref={quoteRef}
        className="closing-section relative z-50 -mt-6 flex h-auto min-h-0 items-center overflow-hidden rounded-t-[16px] text-center shadow-[0_-12px_40px_rgba(0,0,0,0.3)] md:-mt-10 md:sticky md:top-0 md:will-change-transform"
      >
        <div className={`${INNER_CONTAINER_CLASS} relative z-20`}>
          <div className="mx-auto max-w-[640px]">
            <p
              className={`text-center font-rozha text-[clamp(22px,3.5vw,44px)] italic leading-[1.3] tracking-[-0.01em] text-[#e8d8c8] transition-opacity duration-700 ${
                quoteVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {CLOSING_QUOTE}
            </p>
          </div>
          <div className="mx-auto my-6 h-px w-[60px] bg-[#e8ddd4]" />
          <p className="text-center font-montserrat text-[10px] uppercase tracking-[0.2em] text-[#7A1C28]/70">
            BINT SAEED · ABU DHABI
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <LocaleLink
              href="/shop"
              className="inline-flex items-center justify-center rounded-[4px] bg-[#7A1C28] px-8 py-[13px] font-montserrat text-[11px] uppercase tracking-[0.08em] text-[#e8d8c8] transition-colors hover:bg-[#821b2d]"
              data-cursor-hover
              data-analytics-event="click_collection_from_personalisation"
              data-analytics-section="personalisation-cta"
            >
              EXPLORE THE COLLECTION
            </LocaleLink>
            <LocaleLink
              href="/strands"
              className="inline-flex items-center justify-center rounded-[4px] border border-[#e8ddd4]/35 bg-transparent px-8 py-[13px] font-montserrat text-[11px] uppercase tracking-[0.08em] text-[#e8d8c8] transition-colors hover:border-[#e8ddd4]/70"
              data-cursor-hover
            >
              DISCOVER THE STRANDS
            </LocaleLink>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes personalisationMarquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .personalisation-marquee {
          animation: personalisationMarquee 95s linear infinite;
          will-change: transform;
        }

        .closing-section {
          position: relative;
        }

        .closing-section::before,
        .closing-section::after {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .closing-section {
          min-height: auto;
          height: auto;
          padding: 120px 40px 100px;
          background-image: url('/charms/charm-fabric-dark.webp');
          background-size: cover;
          background-position: center;
        }

        .closing-section::before {
          z-index: 0;
          background: rgba(15, 8, 10, 0.82);
        }

        .closing-section::after {
          z-index: 1;
          background: transparent;
        }

        @media (max-width: 767px) {
          .personalisation-marquee {
            animation-duration: 120s;
          }

          .closing-section {
            padding: 80px 24px 80px;
          }
        }
      `}</style>
    </main>
  )
}
