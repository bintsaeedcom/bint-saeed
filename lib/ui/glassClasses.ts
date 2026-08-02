/**
 * Readable frosted glass — blur for depth, enough opacity that dark hero imagery
 * never washes text out. Prefer light glass + dark type on this site.
 * Note: do not include `relative` here — overlays often need `fixed`/`absolute`
 * and a later `relative` in the class string can break viewport positioning.
 */
export const glassPanel =
  'overflow-hidden border border-white/55 bg-white/78 shadow-[0_18px_48px_-18px_rgba(26,2,16,0.35)] backdrop-blur-2xl backdrop-saturate-150 supports-[backdrop-filter]:bg-white/68'

/** Soft ivory wash under glass so body copy stays crisp on dark photos */
export const glassPanelWash =
  'pointer-events-none absolute inset-0 bg-gradient-to-b from-[#faf8f5]/92 via-[#faf8f5]/86 to-[#f7f2ec]/90'

export const glassDrawer =
  'overflow-hidden border-white/45 bg-white/80 shadow-[0_24px_60px_-20px_rgba(26,2,16,0.4)] backdrop-blur-2xl backdrop-saturate-150 supports-[backdrop-filter]:bg-white/70'

export const glassDrawerWash =
  'pointer-events-none absolute inset-0 bg-gradient-to-br from-[#faf8f5]/94 via-[#faf8f5]/88 to-[#eef6f4]/55'

export const glassTextTitle = 'relative text-brand-darkRed'
export const glassTextBody = 'relative text-[#2c2426]'
export const glassTextMuted = 'relative text-[#5c5356]'
export const glassTextLink = 'relative text-brand-darkRed underline decoration-brand-darkRed/35 underline-offset-2'

/**
 * Overlay glass (cookie / regional) over dark heroes — wine frosted panel + light type.
 */
export const glassOverlayPanel =
  'overflow-hidden border border-white/20 bg-black/80 shadow-[0_18px_48px_-18px_rgba(0,0,0,0.55)] backdrop-blur-2xl backdrop-saturate-150 supports-[backdrop-filter]:bg-black/75'

export const glassOverlayWash =
  'pointer-events-none absolute inset-0 bg-gradient-to-b from-[#2d141e]/55 via-[#1a0210]/35 to-[#12080b]/70'

export const glassTextTitleOnDark = 'relative text-white'
export const glassTextBodyOnDark = 'relative text-[#e8d8c8]/90'
export const glassTextMutedOnDark = 'relative text-[#e8d8c8]/65'
export const glassTextLinkOnDark =
  'relative text-[#e8d8c8] underline decoration-[#e8d8c8]/40 underline-offset-2'

export const glassPrimaryBtn =
  'relative min-h-[42px] w-full rounded border border-brand-darkRed bg-brand-darkRed px-3 py-2.5 font-montserrat text-[10px] uppercase tracking-[0.12em] text-white transition-colors hover:bg-brand-darkMagenta sm:flex-1'

export const glassSecondaryBtn =
  'relative min-h-[42px] w-full rounded border border-brand-darkRed/35 bg-white/70 px-3 py-2.5 font-montserrat text-[10px] uppercase tracking-[0.1em] text-brand-darkRed transition-colors hover:border-brand-darkRed/55 hover:bg-white/90 sm:flex-1'

/** Secondary CTA on dark overlay glass */
export const glassSecondaryBtnOnDark =
  'relative min-h-[42px] w-full rounded border border-[#e8d8c8]/35 bg-white/12 px-3 py-2.5 font-montserrat text-[10px] uppercase tracking-[0.1em] text-[#e8d8c8] transition-colors hover:border-[#e8d8c8]/55 hover:bg-white/18 sm:flex-1'
