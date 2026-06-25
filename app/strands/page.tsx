'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import LocaleLink from '@/components/LocaleLink'
import AppPageWayfinding from '@/components/AppPageWayfinding'
import { accessories } from '@/data/accessories'
import { products } from '@/data/products'
import { getProductHref } from '@/lib/products/links'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { withBrandAlt } from '@/lib/products/imageAlt'
import { getStrandCarouselAlt } from '@/lib/accessories/accessoryJsonLd'
import {
  getJewelleryCategoryDiscoveryKeywords,
  mergeAccessorySchemaKeywords,
} from '@/lib/accessories/jewelleryDiscoveryI18n'
import { CODES_IMAGE_FILES, codesPageImagePath } from '@/lib/the-codes/codesPageContent'

/** Strands hero background — `public/collection-section/` (file is `.jpg`; use `/collection-section/45.png` if you add a PNG). */
const HERO_CAMPAIGN_IMAGE = '/collection-section/45.jpg'
/** Same six-strand flatlay as House Codes — `public/The Codes Page/`. */
const CONCEPT_FLATLAY_IMAGE = codesPageImagePath(CODES_IMAGE_FILES.naturalStoneBeads)
const STRAND_HERO_ALT = withBrandAlt(
  'Natural stone bead abaya strands collection — interchangeable onyx, jade, amethyst, malachite and rose quartz for Marylebone Abaya',
)
const STRAND_FLATLAY_ALT = withBrandAlt(
  'Six natural stone bead strands flatlay — Al Ain rosette abaya charms handcrafted in Abu Dhabi',
)
const MARYLEBONE_PAIRING_ALT = withBrandAlt(
  'Marylebone Abaya styled with interchangeable natural stone bead strand — pairs with Al Ain necklace and earrings',
)
const INNER_CONTAINER_CLASS = 'mx-auto max-w-[1280px] px-4 md:px-10'

const STONE_VISUAL_NOTES: Record<string, string> = {
  Onyx: 'Deep black with a high-gloss surface. A classic stone, found across Brazil and India. The one every Marylebone Abaya arrives wearing.',
  'Tiger Eye': 'Warm golden-brown with a natural moving sheen that shifts with the light. Found in South Africa. No two pieces catch it the same way.',
  'Orange Jade': 'A vivid coral jade with a smooth, opaque finish. One of the more striking colour expressions of natural jade.',
  'Fuchsia Jade': 'Natural jade in a deep saturated rose. An unusual colour — not commonly found at this intensity.',
  'Blue Aventurine': 'A cool dusty blue with a subtle internal shimmer. Sourced from India and Chile. Understated from a distance, detailed up close.',
  'Rose Quartz': 'Pale blush, semi-translucent. The light passes through it rather than reflecting off. Found across Brazil and Madagascar.',
  Malachite: 'Deep green with natural banded markings — no two pieces share the same pattern. Found in Central Africa.',
  'Lapis Lazuli': 'A deep blue flecked with natural gold, sourced from Afghanistan. Used in jewellery and art for thousands of years.',
  'Amethyst Hearts': 'Violet quartz shaped into hearts and polished to a faceted surface. Found across Brazil and Zambia.',
  'Jade Hearts': 'Cool green jade, hand-shaped into heart forms. Each one slightly different. Each one made once.',
}

const CONCEPT_STONE_SWATCHES = [
  { name: 'Onyx', color: '#1a1a1a' },
  { name: 'Tiger Eye', color: '#8B6914' },
  { name: 'Orange Jade', color: '#E8833A' },
  { name: 'Fuchsia Jade', color: '#C2185B' },
  { name: 'Blue Aventurine', color: '#7BA7C2' },
  { name: 'Rose Quartz', color: '#E8B4B8' },
  { name: 'Malachite', color: '#2E7D32' },
  { name: 'Lapis Lazuli', color: '#1A237E' },
  { name: 'Amethyst', color: '#7B1FA2' },
  { name: 'Jade', color: '#4CAF82' },
] as const

const STEP_COPY = [
  {
    numeral: 'I',
    title: 'SELECT THE STONE',
    body: 'Choose a natural stone strand by colour, surface, and character.',
  },
  {
    numeral: 'II',
    title: 'WEAR IT YOUR WAY',
    body: 'The Marylebone Abaya is designed to hold it. Nothing more is needed.',
  },
  {
    numeral: 'III',
    title: 'CHANGE WHEN YOU CHOOSE',
    body: 'Rotate stones across occasions. The abaya stays the same.',
  },
] as const

const CLOSING_QUOTE = "The details you choose say everything you don't."

const COLLECTION_JSON_LD_BASE = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Natural Stone Abaya Strands — Bint Saeed Al Ain Jewellery',
  description:
    'Interchangeable natural stone bead abaya strands handcrafted in Abu Dhabi. Onyx, jade, amethyst hearts, tiger eye, malachite, lapis lazuli, rose quartz and blue aventurine — designed for the Bint Saeed Marylebone Abaya. Pairs with Al Ain necklaces, natural stone bead earrings and designer jewellery.',
  url: 'https://www.bintsaeed.com/strands',
  brand: {
    '@type': 'Brand',
    name: 'Bint Saeed',
    url: 'https://www.bintsaeed.com',
  },
  isPartOf: {
    '@type': 'Collection',
    name: 'Bint Saeed Accessories — Necklaces, Earrings & Abaya Strands',
    url: 'https://www.bintsaeed.com/accessories',
  },
  offers: {
    '@type': 'AggregateOffer',
    lowPrice: '400',
    highPrice: '750',
    priceCurrency: 'AED',
    offerCount: '10',
  },
} as const

export default function StrandsPage() {
  const { isRTL, language } = useLanguage()
  const collectionJsonLd = useMemo(
    () => ({
      ...COLLECTION_JSON_LD_BASE,
      keywords: mergeAccessorySchemaKeywords(
        getJewelleryCategoryDiscoveryKeywords('abaya-charms', language),
        [
          'malachite necklace pairs with strand',
          'onyx jade amethyst earrings UAE',
          'natural stone bead jewellery Abu Dhabi',
        ],
      ),
    }),
    [language],
  )
  const strandProducts = useMemo(() => accessories.filter((item) => item.category === 'abaya-charms'), [])
  const marylebone = useMemo(() => products.find((product) => product.slug === 'marylebone-abaya'), [])
  const maryleboneHref = marylebone ? getProductHref(marylebone) : '/shop/marylebone-abaya'
  const maryleboneImage = marylebone?.images[0] || '/Webshop pictures/Abayas/Marylebone Abaya/bint-saeed-marylebone-abaya-black-front.webp'
  const heroCanvasRef = useRef<HTMLCanvasElement | null>(null)
  const heroWebglInitializedRef = useRef(false)
  const heroMouseRef = useRef({ x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 })
  const carouselRef = useRef<HTMLDivElement | null>(null)
  const stepsRef = useRef<HTMLElement | null>(null)
  const quoteRef = useRef<HTMLElement | null>(null)
  const dragStateRef = useRef({ active: false, startX: 0, scrollLeft: 0 })
  const [heroOffset, setHeroOffset] = useState(0)
  const [stepsVisible, setStepsVisible] = useState(false)
  const [quoteVisible, setQuoteVisible] = useState(false)
  const [carouselScroll, setCarouselScroll] = useState({ thumbWidthPct: 100, thumbLeftPct: 0 })
  const [carouselEdges, setCarouselEdges] = useState({ atStart: true, atEnd: false })

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
    const canvas = heroCanvasRef.current
    if (!canvas) return
    if (heroWebglInitializedRef.current) return
    heroWebglInitializedRef.current = true

    const media = window.matchMedia('(min-width: 768px)')
    if (!media.matches) {
      heroWebglInitializedRef.current = false
      return
    }

    const gl = canvas.getContext('webgl', { alpha: true, antialias: false })
    if (!gl) {
      heroWebglInitializedRef.current = false
      return
    }

    const vertexShader = gl.createShader(gl.VERTEX_SHADER)
    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)
    const program = gl.createProgram()
    if (!vertexShader || !fragmentShader || !program) {
      heroWebglInitializedRef.current = false
      return
    }

    gl.shaderSource(
      vertexShader,
      `
        attribute vec2 a_position;
        varying vec2 v_uv;
        void main() {
          v_uv = (a_position + 1.0) * 0.5;
          gl_Position = vec4(a_position, 0.0, 1.0);
        }
      `,
    )
    gl.shaderSource(
      fragmentShader,
      `
        precision mediump float;
        uniform sampler2D u_image;
        uniform float u_time;
        uniform vec2 u_resolution;
        uniform vec2 u_mouse;
        varying vec2 v_uv;

        void main() {
          vec2 uv = v_uv;
          float cover = max(u_resolution.x / u_resolution.y / (4.0 / 5.0), 1.0);
          uv.x = (uv.x - 0.5) / cover + 0.5;
          vec2 fromMouse = uv - u_mouse;
          float mouseDistance = max(length(fromMouse), 0.001);
          float repulsion = smoothstep(0.18, 0.0, mouseDistance) * 0.004;
          uv += normalize(fromMouse) * repulsion;
          uv.x += sin((uv.y + u_time * 0.006) * 10.0) * 0.0012;
          uv.y += sin((uv.x + u_time * 0.005) * 8.0) * 0.0016;
          vec4 color = texture2D(u_image, uv);
          float grain = sin((uv.x + u_time * 0.012) * 90.0) * sin((uv.y - u_time * 0.009) * 70.0);
          color.rgb *= vec3(0.9, 0.86, 0.88) + grain * 0.0025;
          gl_FragColor = color;
        }
      `,
    )
    gl.compileShader(vertexShader)
    gl.compileShader(fragmentShader)
    gl.attachShader(program, vertexShader)
    gl.attachShader(program, fragmentShader)
    gl.linkProgram(program)
    gl.useProgram(program)

    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW)

    const position = gl.getAttribLocation(program, 'a_position')
    gl.enableVertexAttribArray(position)
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0)

    const resolution = gl.getUniformLocation(program, 'u_resolution')
    const time = gl.getUniformLocation(program, 'u_time')
    const mouse = gl.getUniformLocation(program, 'u_mouse')
    const texture = gl.createTexture()
    gl.bindTexture(gl.TEXTURE_2D, texture)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)

    let animation = 0
    let disposed = false
    const handlePointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      if (!rect.width || !rect.height) return
      heroMouseRef.current.targetX = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width))
      heroMouseRef.current.targetY = Math.min(1, Math.max(0, 1 - (event.clientY - rect.top) / rect.height))
    }
    const image = new window.Image()
    image.onload = () => {
      if (disposed) return
      gl.bindTexture(gl.TEXTURE_2D, texture)
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image)

      const draw = (now: number) => {
        const width = canvas.clientWidth * window.devicePixelRatio
        const height = canvas.clientHeight * window.devicePixelRatio
        if (canvas.width !== width || canvas.height !== height) {
          canvas.width = width
          canvas.height = height
          gl.viewport(0, 0, width, height)
        }
        const currentMouse = heroMouseRef.current
        currentMouse.x += (currentMouse.targetX - currentMouse.x) * 0.008
        currentMouse.y += (currentMouse.targetY - currentMouse.y) * 0.008
        gl.uniform2f(resolution, width, height)
        gl.uniform1f(time, now * 0.001)
        gl.uniform2f(mouse, currentMouse.x, currentMouse.y)
        gl.drawArrays(gl.TRIANGLES, 0, 6)
        animation = window.requestAnimationFrame(draw)
      }
      animation = window.requestAnimationFrame(draw)
    }
    image.src = HERO_CAMPAIGN_IMAGE
    window.addEventListener('pointermove', handlePointerMove, { passive: true })

    return () => {
      disposed = true
      window.cancelAnimationFrame(animation)
      window.removeEventListener('pointermove', handlePointerMove)
      gl.deleteTexture(texture)
      gl.deleteBuffer(buffer)
      gl.deleteProgram(program)
      gl.deleteShader(vertexShader)
      gl.deleteShader(fragmentShader)
      heroWebglInitializedRef.current = false
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

  const updateCarouselProgress = useCallback(() => {
    const el = carouselRef.current
    if (!el) return
    const { scrollLeft, scrollWidth, clientWidth } = el
    const max = scrollWidth - clientWidth
    if (max <= 0) {
      setCarouselScroll({ thumbWidthPct: 100, thumbLeftPct: 0 })
      setCarouselEdges({ atStart: true, atEnd: true })
      return
    }
    const thumbWidthPct = Math.max(14, Math.min(100, (clientWidth / scrollWidth) * 100))
    const thumbLeftPct = (scrollLeft / max) * (100 - thumbWidthPct)
    setCarouselScroll({
      thumbWidthPct,
      thumbLeftPct: Math.min(100 - thumbWidthPct, Math.max(0, thumbLeftPct)),
    })
    setCarouselEdges({ atStart: scrollLeft <= 8, atEnd: scrollLeft >= max - 8 })
  }, [])

  const scrollCarousel = (direction: 'prev' | 'next') => {
    const el = carouselRef.current
    if (!el) return
    const step = Math.max(el.clientWidth * 0.82, 280)
    el.scrollBy({ left: direction === 'next' ? step : -step, behavior: 'smooth' })
  }

  const startDrag = (clientX: number) => {
    const el = carouselRef.current
    if (!el) return
    dragStateRef.current = { active: true, startX: clientX, scrollLeft: el.scrollLeft }
  }

  const moveDrag = (clientX: number) => {
    const el = carouselRef.current
    const drag = dragStateRef.current
    if (!el || !drag.active) return
    el.scrollLeft = drag.scrollLeft - (clientX - drag.startX)
    updateCarouselProgress()
  }

  const endDrag = () => {
    dragStateRef.current.active = false
  }

  useEffect(() => {
    const el = carouselRef.current
    if (!el) return
    const ro = new ResizeObserver(() => {
      updateCarouselProgress()
    })
    ro.observe(el)
    const onResize = () => updateCarouselProgress()
    window.addEventListener('resize', onResize)
    requestAnimationFrame(() => updateCarouselProgress())
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', onResize)
    }
  }, [strandProducts.length, updateCarouselProgress])

  return (
    <main className={`min-h-screen overflow-x-clip bg-[#1a0210] ${isRTL ? 'rtl' : 'ltr'}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <section className="relative z-0 h-[85vh] max-h-[85vh] overflow-hidden bg-[#1a0210] text-[#e8ddd4] md:sticky md:top-0 md:will-change-transform">
        <div
          className="absolute inset-0 opacity-65"
          style={{ transform: `translateY(${heroOffset}px)` }}
          aria-hidden
        >
          <div className="absolute inset-0">
            <Image
              src={HERO_CAMPAIGN_IMAGE}
              alt={STRAND_HERO_ALT}
              fill
              priority={true}
              sizes="100vw"
              className="object-cover object-center"
            />
            <canvas ref={heroCanvasRef} className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full md:block" aria-hidden />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(26,2,16,0.92)_0%,rgba(26,2,16,0.62)_46%,rgba(26,2,16,0.22)_100%)]" />
        </div>

        <div className={`absolute top-28 z-20 px-6 md:left-[60px] ${isRTL ? 'right-6 md:right-[60px] left-auto' : 'left-6'}`}>
          <AppPageWayfinding
            rtl={isRTL}
            variant="light"
            segments={[
              { label: isRTL ? 'الرئيسية' : 'Home', href: '/home' },
              { label: isRTL ? 'الخيوط' : 'Strands' },
            ]}
            backLink={{
              href: '/home',
              label: isRTL ? 'العودة للرئيسية' : 'Back to Home',
            }}
          />
        </div>

        <div className="absolute bottom-10 left-6 right-6 z-10 max-w-[600px] text-left md:bottom-[60px] md:left-[60px] md:right-auto">
            <p className="mb-4 font-montserrat text-[10px] uppercase tracking-[0.28em] text-[#6a8090] sm:tracking-[0.34em]">
              THE ABAYA STRAND · BINT SAEED
            </p>
            <h1
              data-document-h1="true"
              className="max-w-[760px] font-rozha text-[clamp(36px,6vw,72px)] leading-[0.98] tracking-[0.01em]"
              style={{ color: '#e8ddd4' }}
            >
              Your abaya has never been finished. Until now.
            </h1>
            <p className="mt-3 max-w-[480px] font-montserrat text-[14px] font-normal leading-[1.7] tracking-[0.02em] text-[rgba(232,216,200,0.75)]">
              The first abaya house to offer interchangeable natural stone strands. Worn on the cuff. Changed by choice.
            </p>
            <p className="mt-3 max-w-[480px] font-montserrat text-[14px] font-normal leading-[1.7] tracking-[0.02em] text-[rgba(232,216,200,0.75)]">
              Natural stone. Handcrafted in Abu Dhabi. Made for the Marylebone Abaya.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LocaleLink
                href="#stone-showcase"
                className="inline-flex items-center justify-center rounded-[4px] bg-[#7A1C28] px-8 py-[13px] font-montserrat text-[11px] uppercase tracking-[0.08em] text-[#e8d8c8] transition-colors hover:bg-[#821b2d]"
                data-cursor-hover
              >
                SHOP STRANDS
              </LocaleLink>
              <LocaleLink
                href={maryleboneHref}
                className="inline-flex items-center justify-center rounded-[4px] border border-[#e8ddd4]/40 bg-[#1a0210]/35 px-8 py-[13px] font-montserrat text-[11px] uppercase tracking-[0.08em] text-[#e8d8c8] backdrop-blur-md transition-colors hover:border-[#e8ddd4]/70 hover:bg-[#1a0210]/55"
                data-cursor-hover
              >
                SEE THE MARYLEBONE
              </LocaleLink>
            </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-20 overflow-hidden border-t border-[#2a0a14] bg-[#1a0210]/80 py-4">
          <div className="strands-marquee flex w-max font-montserrat text-[11px] uppercase tracking-[0.2em] text-[#6a8090]/65">
            {Array.from({ length: 8 }).map((_, index) => (
              <span key={index} className="px-4">
                NATURAL STONE · BINT SAEED · ABAYA STRANDS · ABU DHABI · CRAFTED TO ORDER ·
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-6 rounded-t-[16px] bg-[#e8ddd4] py-20 shadow-[0_-12px_40px_rgba(0,0,0,0.3)] md:-mt-10 md:sticky md:top-0 md:will-change-transform">
        <div className={`${INNER_CONTAINER_CLASS} grid gap-12 text-left md:grid-cols-[1.1fr_0.9fr] md:items-center`}>
          <div>
            <p className="font-montserrat text-[10px] uppercase tracking-[0.28em] text-[#7A1C28]">THE CONCEPT</p>
            <h2 className="mt-4 font-rozha text-[clamp(2.5rem,5vw,4.75rem)] leading-[1] text-[#1a0210]">
              One Abaya.
              <br />
              Many Accents.
            </h2>
            <p className="mt-6 max-w-2xl font-montserrat text-[15px] leading-[1.9] tracking-wide text-[#1a0210]/72">
              The Bint Saeed abaya strand is a natural stone detail worn on the cuff of the Marylebone Abaya. Handcrafted in Abu Dhabi. Made to be changed.
            </p>
            <p className="mt-4 max-w-2xl font-montserrat text-[15px] leading-[1.9] tracking-wide text-[#1a0210]/72">
              Every Marylebone Abaya arrives with a standard onyx strand. Choose a different stone for a different day. Match it to your bag, your outfit, your occasion. The abaya stays the same. You decide what it says.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:flex-nowrap md:justify-between md:gap-4">
              {CONCEPT_STONE_SWATCHES.map((stone) => (
                <div key={stone.name} className="group relative text-center">
                  <div
                    className="mx-auto h-6 w-6 rounded-full border border-[#1a0210]/15 shadow-sm"
                    style={{ backgroundColor: stone.color }}
                  />
                  <div className="pointer-events-none absolute bottom-[calc(100%+8px)] left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-[3px] bg-[#1a0210] px-2 py-1 font-montserrat text-[10px] uppercase tracking-[0.08em] text-[#e8d8c8] opacity-0 transition-opacity group-hover:opacity-100">
                    {stone.name}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-[10px] max-w-2xl hyphens-none font-montserrat text-[11px] tracking-[0.06em] text-[#8a7a70] [word-break:keep-all]">
              Onyx · Tiger Eye · Orange Jade · Fuchsia Jade · Blue Aventurine · Rose Quartz · Malachite · Lapis Lazuli · Amethyst · Jade
            </p>
            <LocaleLink
              href="#stone-showcase"
              className="mt-[6px] block font-montserrat text-[11px] font-medium tracking-[0.06em] text-[#7A1C28] no-underline transition-opacity duration-200 hover:opacity-75"
              data-cursor-hover
            >
              Explore all stones →
            </LocaleLink>

            <div className="mt-6">
              <div className="mb-4 h-[0.5px] w-full bg-[#e8ddd4]" aria-hidden />
              <p className="flex flex-wrap items-center gap-2 font-montserrat text-[14px] font-medium tracking-[0.02em] text-[#6f5f56]">
                Don't have the Marylebone Abaya yet?{' '}
                <LocaleLink href={maryleboneHref} className="font-semibold tracking-[0.02em] text-[#7A1C28] no-underline transition-opacity duration-200 hover:opacity-75" data-cursor-hover>
                  View the Marylebone Abaya →
                </LocaleLink>
              </p>
            </div>
          </div>

          <LocaleLink
            href={maryleboneHref}
            className="group block overflow-hidden rounded-[4px] bg-[#faf8f5]"
            data-cursor-hover
          >
            <div className="overflow-hidden rounded-[4px] bg-[#e8ddd4]">
              <Image
                src={CONCEPT_FLATLAY_IMAGE}
                alt={STRAND_FLATLAY_ALT}
                width={480}
                height={600}
                sizes="(max-width: 768px) 90vw, 42vw"
                className="h-auto w-full object-cover"
              />
            </div>
          </LocaleLink>
        </div>
      </section>

      <section ref={stepsRef} className="relative z-20 -mt-6 rounded-t-[16px] bg-[#1a0210] py-20 shadow-[0_-12px_40px_rgba(0,0,0,0.3)] md:-mt-10 md:sticky md:top-0 md:will-change-transform">
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
                <h3 className="mb-3 font-montserrat text-[11px] font-medium uppercase tracking-[0.15em] text-[#e8d8c8]">{step.title}</h3>
                <p className="font-montserrat text-[13px] font-normal leading-[1.7] text-[rgba(232,216,200,0.6)]">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="stone-showcase"
        className="relative z-30 -mt-6 rounded-t-[16px] bg-[#faf8f5] py-28 pb-48 shadow-[0_-12px_40px_rgba(0,0,0,0.3)] md:-mt-10 md:sticky md:top-0 md:min-h-[100vh] md:py-36 md:pb-56 md:will-change-transform"
      >
        <div className={`${INNER_CONTAINER_CLASS} text-left`}>
          <p className="font-montserrat text-[10px] uppercase tracking-[0.28em] text-[#7A1C28]">THE COLLECTION</p>
          <h2 className="mt-4 max-w-3xl font-rozha text-[clamp(2.4rem,5vw,4.5rem)] leading-[1] text-[#1a0210]">Choose by colour and character.</h2>
          <p className="mt-5 max-w-2xl font-montserrat text-[15px] leading-[1.85] tracking-wide text-[#1a0210]/70">
            Each stone is natural. No two are identical.
          </p>
        </div>

        <div className="relative mx-auto mt-12 max-w-[1280px]">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#faf8f5] via-[#faf8f5]/80 to-transparent md:w-16"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#faf8f5] via-[#faf8f5]/80 to-transparent md:w-16"
            aria-hidden
          />
          <button
            type="button"
            onClick={() => scrollCarousel('prev')}
            disabled={carouselEdges.atStart}
            aria-label="Previous stones"
            className="absolute left-2 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#7A1C28]/25 bg-[#faf8f5]/95 text-[#7A1C28] shadow-[0_4px_20px_rgba(26,2,16,0.12)] transition-opacity hover:border-[#7A1C28]/50 hover:bg-white disabled:pointer-events-none disabled:opacity-30 md:flex"
            data-cursor-hover
          >
            <FiChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollCarousel('next')}
            disabled={carouselEdges.atEnd}
            aria-label="Next stones"
            className="absolute right-2 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#7A1C28]/25 bg-[#faf8f5]/95 text-[#7A1C28] shadow-[0_4px_20px_rgba(26,2,16,0.12)] transition-opacity hover:border-[#7A1C28]/50 hover:bg-white disabled:pointer-events-none disabled:opacity-30 md:flex"
            data-cursor-hover
          >
            <FiChevronRight className="h-5 w-5" />
          </button>
          <div
            ref={carouselRef}
            dir="ltr"
            onScroll={updateCarouselProgress}
            onMouseDown={(event) => startDrag(event.clientX)}
            onMouseMove={(event) => moveDrag(event.clientX)}
            onMouseUp={endDrag}
            onMouseLeave={endDrag}
            onTouchStart={(event) => startDrag(event.touches[0]?.clientX || 0)}
            onTouchMove={(event) => moveDrag(event.touches[0]?.clientX || 0)}
            onTouchEnd={endDrag}
            className="flex cursor-grab snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-2 active:cursor-grabbing md:px-14 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
          {strandProducts.map((product) => {
            const color = product.colors[0]
            return (
              <article
                key={product.id}
                className="flex h-[560px] w-[280px] shrink-0 snap-start flex-col overflow-hidden rounded-[6px] border border-[#e8ddd4] bg-[#faf8f5] shadow-[0_8px_32px_rgba(26,2,16,0.08)] md:w-[360px]"
              >
                <div className="relative h-[288px] shrink-0" style={{ backgroundColor: color?.hex || '#e8ddd4' }}>
                  {product.images[0] ? (
                    <Image
                      src={product.images[0]}
                      alt={getStrandCarouselAlt(product.id)}
                      fill
                      sizes="(max-width: 768px) 280px, 360px"
                      className="object-cover object-top"
                    />
                  ) : null}
                </div>
                <div className="flex flex-1 flex-col p-5 text-left">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-rozha text-xl leading-tight text-[#2a1e18]">
                      {isRTL ? product.nameAr : product.name}
                    </h3>
                  </div>
                  <p className="mt-3 font-montserrat text-[13px] leading-relaxed text-[#8a7a70]">
                    {STONE_VISUAL_NOTES[product.name] || 'Natural stone selected for colour, surface, and visual texture.'}
                  </p>
                  <p className="mt-4 font-montserrat text-sm font-medium text-[#7A1C28]">
                    AED {product.price.toLocaleString()}
                  </p>
                  {product.isLimitedEdition ? (
                    <span className="mt-3 inline-flex rounded-full border border-[#c9a96b] bg-[#f6f0e4] px-3 py-1 font-montserrat text-[10px] uppercase tracking-[0.08em] text-[#8a6020]">
                      Limited Edition
                    </span>
                  ) : null}
                  <LocaleLink
                    href={`/accessories/${product.id}`}
                    className="mt-auto flex w-full items-center justify-center rounded-[3px] bg-[#7A1C28] p-3 font-montserrat text-[11px] uppercase tracking-[0.08em] text-[#e8d8c8] transition-colors hover:bg-[#821b2d]"
                    data-cursor-hover
                  >
                    VIEW STRAND
                  </LocaleLink>
                </div>
              </article>
            )
          })}
          </div>
        </div>
        <div className={`${INNER_CONTAINER_CLASS} mt-8 pb-20 md:pb-28`}>
          <div className="flex items-center justify-center gap-4 md:gap-6">
            <button
              type="button"
              onClick={() => scrollCarousel('prev')}
              disabled={carouselEdges.atStart}
              aria-label="Previous stones"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#7A1C28]/25 bg-[#faf8f5] text-[#7A1C28] shadow-[0_4px_16px_rgba(26,2,16,0.08)] transition-opacity hover:border-[#7A1C28]/50 hover:bg-white disabled:pointer-events-none disabled:opacity-30 md:hidden"
              data-cursor-hover
            >
              <FiChevronLeft className="h-5 w-5" />
            </button>
            <div className="min-w-0 flex-1">
              <p className="mb-4 text-center font-montserrat text-[10px] font-medium uppercase tracking-[0.22em] text-[#8a7a70]">
                Swipe or use arrows to explore every stone
              </p>
              <div
                className="relative h-3 w-full overflow-hidden rounded-full bg-[#e8ddd4] ring-1 ring-[#7A1C28]/10"
                role="scrollbar"
                aria-valuenow={Math.round(carouselScroll.thumbLeftPct)}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Stone carousel position"
              >
                <div
                  className="absolute top-0 h-3 rounded-full bg-[#7A1C28] shadow-sm transition-[left,width] duration-150 ease-out"
                  style={{
                    width: `${carouselScroll.thumbWidthPct}%`,
                    left: `${carouselScroll.thumbLeftPct}%`,
                  }}
                />
              </div>
            </div>
            <button
              type="button"
              onClick={() => scrollCarousel('next')}
              disabled={carouselEdges.atEnd}
              aria-label="Next stones"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#7A1C28]/25 bg-[#faf8f5] text-[#7A1C28] shadow-[0_4px_16px_rgba(26,2,16,0.08)] transition-opacity hover:border-[#7A1C28]/50 hover:bg-white disabled:pointer-events-none disabled:opacity-30 md:hidden"
              data-cursor-hover
            >
              <FiChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      <section className="strands-fabric-light relative z-40 -mt-6 overflow-hidden rounded-t-[16px] bg-[#7A1C28] py-20 shadow-[0_-12px_40px_rgba(0,0,0,0.3)] md:-mt-10 md:sticky md:top-0 md:will-change-transform">
        <div className={`${INNER_CONTAINER_CLASS} relative z-20 grid gap-10 text-left md:grid-cols-2 md:items-center`}>
          <div className="relative min-h-[52vh] overflow-hidden rounded-[4px] md:min-h-[620px]">
            <Image src={maryleboneImage} alt={MARYLEBONE_PAIRING_ALT} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-top" />
          </div>
          <div className="flex items-center">
            <div className="max-w-xl">
              <p className="font-montserrat text-[10px] uppercase tracking-[0.28em] text-[#e8d8c8]/55">THE ANCHOR PIECE</p>
              <h2 className="mt-5 font-rozha text-[clamp(2rem,3vw,2.5rem)] leading-tight text-[#e8ddd4]">The Marylebone Abaya.</h2>
              <p className="mt-5 max-w-xl font-montserrat text-sm leading-[1.85] tracking-wide text-[#e8ddd4]/72">
                The strand drapes from a specially constructed cuff — a detail found only on the Marylebone. Made to order in Abu Dhabi, from AED{' '}
                {marylebone ? marylebone.price.toLocaleString() : '500'}.
              </p>
              <LocaleLink
                href={maryleboneHref}
                className="mt-8 inline-flex items-center justify-center rounded-[4px] bg-[#e8ddd4] px-8 py-[13px] font-montserrat text-xs uppercase tracking-[0.08em] text-[#7A1C28] transition-colors hover:bg-[#faf8f5]"
                data-cursor-hover
              >
                VIEW THE MARYLEBONE
              </LocaleLink>
            </div>
          </div>
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
              href="#stone-showcase"
              className="inline-flex items-center justify-center rounded-[4px] bg-[#7A1C28] px-8 py-[13px] font-montserrat text-[11px] uppercase tracking-[0.08em] text-[#e8d8c8] transition-colors hover:bg-[#821b2d]"
              data-cursor-hover
            >
              SHOP ALL STRANDS
            </LocaleLink>
            <LocaleLink
              href="/personalisation"
              className="inline-flex items-center justify-center rounded-[4px] border border-[#e8ddd4]/35 bg-transparent px-8 py-[13px] font-montserrat text-[11px] uppercase tracking-[0.08em] text-[#e8d8c8] transition-colors hover:border-[#e8ddd4]/70"
              data-cursor-hover
            >
              PERSONALISE YOUR ABAYA
            </LocaleLink>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes strandsMarquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .strands-marquee {
          animation: strandsMarquee 95s linear infinite;
          will-change: transform;
        }

        .strands-fabric-light,
        .closing-section {
          position: relative;
        }

        .strands-fabric-light::before,
        .closing-section::before,
        .strands-fabric-light::after,
        .closing-section::after {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .strands-fabric-light::before {
          z-index: 0;
          background-image: url('/charms/charm-fabric-light.webp');
          background-position: center;
          background-size: cover;
        }

        .strands-fabric-light::after {
          z-index: 1;
          background: rgba(26, 2, 16, 0.75);
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
          .strands-marquee {
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

