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

/** Compact banner height — dvh avoids mobile browser chrome jumps */
export const EDITORIAL_HERO_HEIGHT = 'h-[min(38dvh,380px)] md:h-[min(42dvh,420px)]'

/** Taller brand-dark heroes with marquee strip (Our Story, Personalisation) */
export const EDITORIAL_BRAND_HERO_HEIGHT = 'h-[min(44dvh,440px)] sm:h-[min(48dvh,480px)]'

export const editorialHeroEyebrowLight =
  'bs-editorial-eyebrow mb-2.5 block max-w-full font-montserrat text-[10px] font-medium uppercase leading-[1.45] tracking-[0.18em] text-white/60 sm:mb-3 sm:tracking-[0.26em] md:tracking-[0.32em]'

export const editorialHeroEyebrowDusty =
  'bs-editorial-eyebrow mb-2.5 block max-w-full font-montserrat text-[10px] font-medium uppercase leading-[1.45] tracking-[0.18em] text-[#6a8090] sm:mb-3 sm:tracking-[0.26em] md:tracking-[0.32em]'

export const editorialHeroTitleLight =
  'bs-editorial-hero-title mb-2 max-w-[20rem] font-rozha text-[clamp(1.625rem,3.6vw,2.875rem)] leading-[1.02] tracking-[0.01em] text-white sm:max-w-xl'

export const editorialHeroTitleOnDarkBrand =
  'bs-editorial-hero-title mb-2 max-w-[20rem] font-rozha text-[clamp(1.625rem,3.6vw,2.875rem)] leading-[1.02] tracking-[0.01em] text-[#e8ddd4] sm:max-w-2xl'

export const editorialHeroDescLight =
  'max-w-md font-montserrat text-[11px] font-normal leading-[1.85] tracking-[0.05em] text-white/55 sm:text-xs'

export const editorialHeroDescOnDarkBrand =
  'mt-2 max-w-lg font-montserrat text-[11px] font-normal leading-[1.85] tracking-[0.05em] text-[rgba(232,216,200,0.75)] sm:text-xs'

export const editorialIntroStripText =
  'max-w-lg font-montserrat text-[12px] font-normal leading-[1.9] tracking-[0.06em] text-brand-clayRed/72'

export const editorialHeroContentShell = 'relative z-10 flex h-full min-h-0 flex-col justify-end pb-6 md:pb-8'

export const editorialBrandHeroContentShell =
  'relative z-10 flex h-full min-h-0 flex-col justify-end pb-[4.25rem] sm:pb-[4.5rem] md:pb-[4.75rem]'
