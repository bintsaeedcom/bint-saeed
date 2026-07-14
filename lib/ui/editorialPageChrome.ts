/**
 * Shared horizontal rhythm and hero typography for About/editorial pages.
 * Use the same container class on heroes, topic nav, intro strips, and body content.
 */

/** Prevents flex children from forcing horizontal page scroll */
export const EDITORIAL_PAGE_SHELL = 'w-full min-w-0 max-w-full overflow-x-clip'

/** One alignment grid from mobile → desktop (1280px max) */
export const EDITORIAL_PAGE_CONTAINER =
  'mx-auto w-full min-w-0 max-w-[1280px] px-4 sm:px-6 lg:px-12'

export function editorialHeroAlign(rtl: boolean): string {
  return rtl ? 'text-right' : 'text-left'
}

/**
 * Clears the fixed site header on `<main>` (and flush heroes).
 * Uses live `--site-header-height` from Header (ResizeObserver) so breadcrumbs sit
 * consistently under the real bar — never guess with rem stacks that drift per breakpoint.
 * Fallback matches `:root` in globals.css (safe before hydrate; never clip crumbs).
 */
export const SITE_HEADER_OFFSET = 'pt-[var(--site-header-height,6.75rem)]'

/**
 * About/editorial banner only — header clear + a whisper of air so breadcrumbs
 * don’t sit flush under the bar. Keep in sync across every AboutSectionHero page.
 */
export const EDITORIAL_HERO_HEADER_CLEARANCE =
  'pt-[calc(var(--site-header-height,6.75rem)+0.5rem)]'

/**
 * Sticky bars (About topic nav, FAQ TOC, shop/accessories toolbars) sit flush under the live header.
 */
export const SITE_HEADER_STICKY_TOP = 'top-[var(--site-header-height,6.75rem)]'

/**
 * Breathing room *below* LayoutWrapper’s header clearance — NOT a second header clear.
 * Use on content pages (shop, FAQ, cart, PDPs, wayfinding bars, etc.).
 * Do NOT also add pt-24/pt-28/pt-[8.75rem] — that double-clears and creates jumpy white space.
 */
export const SITE_CONTENT_TOP_PAD = 'pt-2 sm:pt-2.5 md:pt-3'

/** One banner height for every About sub-page — visible, never clipped */
export const EDITORIAL_HERO_HEIGHT = 'h-[min(46dvh,420px)] min-h-[360px] max-h-[420px]'

/** @deprecated Use EDITORIAL_HERO_HEIGHT — kept for any legacy imports */
export const EDITORIAL_BRAND_HERO_HEIGHT = EDITORIAL_HERO_HEIGHT

export const editorialHeroEyebrowLight =
  'bs-editorial-eyebrow mb-2.5 block max-w-full font-montserrat text-[10px] font-medium uppercase leading-[1.45] tracking-[0.18em] text-brand-dustyBlue sm:mb-3 sm:tracking-[0.26em] md:tracking-[0.32em]'

export const editorialHeroEyebrowDusty =
  'bs-editorial-eyebrow mb-2.5 block max-w-full font-montserrat text-[10px] font-medium uppercase leading-[1.45] tracking-[0.18em] text-[#6a8090] sm:mb-3 sm:tracking-[0.26em] md:tracking-[0.32em]'

export const editorialHeroTitleLight =
  'bs-editorial-hero-title mb-2 max-w-none whitespace-nowrap font-rozha text-[clamp(1.125rem,calc(0.5rem+3.6vw),2.875rem)] leading-[1.02] tracking-[0.01em] text-white'

export const editorialHeroTitleOnDarkBrand =
  'bs-editorial-hero-title mb-2 max-w-none whitespace-nowrap font-rozha text-[clamp(1.125rem,calc(0.5rem+3.6vw),2.875rem)] leading-[1.02] tracking-[0.01em] text-[#e8ddd4]'

export const editorialHeroDescLight =
  'max-w-md font-montserrat text-[11px] font-normal leading-[1.85] tracking-[0.05em] text-white/55 sm:text-xs'

export const editorialHeroDescOnDarkBrand =
  'mt-2 max-w-lg font-montserrat text-[11px] font-normal leading-[1.85] tracking-[0.05em] text-[rgba(232,216,200,0.75)] sm:text-xs'

export const editorialIntroStripText =
  'max-w-lg font-montserrat text-[12px] font-normal leading-[1.9] tracking-[0.06em] text-brand-clayRed/72'

/** Inner flex column: clears fixed header, anchors copy block toward banner bottom */
export const editorialHeroContentShell = `relative z-10 flex h-full min-h-0 flex-col ${EDITORIAL_HERO_HEADER_CLEARANCE}`

export const editorialHeroCopyBlock = 'mt-auto w-full min-w-0 pb-6 md:pb-7'

/** Locks breadcrumb → eyebrow → title → copy to the same vertical band as Our Story */
export const editorialHeroCopyStack =
  'flex min-h-[11.75rem] flex-col justify-end sm:min-h-[12.5rem] md:min-h-[13.25rem]'

/** Reserved CTA row height on banners without hero buttons (Our Story reference) */
export const editorialHeroCtaReservedSpace = 'pointer-events-none mt-5 min-h-[3.25rem] shrink-0'

/**
 * Stacked editorial cards (About / Personalisation pattern).
 * Sticky on mobile + desktop; bottom padding keeps copy clear of the next overlapping card.
 */
export const EDITORIAL_STACK_CARD =
  'sticky top-0 -mt-8 will-change-transform rounded-t-[16px] shadow-[0_-14px_42px_rgba(0,0,0,0.28)] sm:-mt-10'

/** Outer vertical rhythm — enough air so the next card covers padding, not prose */
export const EDITORIAL_STACK_PAD = 'pt-16 pb-36 sm:pt-20 sm:pb-44 md:pt-24 md:pb-52'

/** Extra buffer under the last readable block inside a stacked card */
export const EDITORIAL_STACK_CONTENT_PAD = 'pb-16 sm:pb-24 md:pb-32'

/** Closing / short CTA card — tall enough to feel intentional, not a tiny stub */
export const EDITORIAL_STACK_CLOSING_PAD = 'pt-16 pb-28 sm:pt-20 sm:pb-36 md:pt-24 md:pb-44'

/** @deprecated Use editorialHeroContentShell + editorialHeroCopyBlock */
export const editorialBrandHeroContentShell = editorialHeroContentShell
