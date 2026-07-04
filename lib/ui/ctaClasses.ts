/** Shared CTA tokens — editorial maroon, form submits, and PDP commerce buttons. */

export const CTA_BUTTON_RADIUS = 'rounded-[4px]'

/** Form / auth submit buttons */
export const CTA_FORM_TRACKING = 'tracking-[0.15em]'

/** Editorial link CTAs (about, strands, utility pages) */
export const CTA_EDITORIAL_TRACKING = 'tracking-[0.08em]'

/**
 * Keeps button labels inside the box on every viewport and language.
 * Pair with inline-flex + justify-center on the control.
 */
export const CTA_LABEL_SAFE =
  'max-w-full min-w-0 box-border text-center whitespace-normal break-words leading-snug [overflow-wrap:anywhere]'

/** Standard horizontal padding — tighter on narrow screens so labels can wrap */
export const CTA_BUTTON_X = 'px-4 sm:px-6 md:px-8'

/** Use on `<button>` / `<a>` CTAs sitewide (also sets data-bs-cta for global CSS) */
export const CTA_BUTTON_SHELL = `inline-flex items-center justify-center ${CTA_LABEL_SAFE}`

/** Flex row of CTAs — prefer wrap so paired labels never clip */
export const ctaButtonRow = 'flex flex-col gap-3 sm:flex-row sm:flex-wrap'

/** Child in a ctaButtonRow */
export const ctaInButtonRow = 'w-full min-w-0 sm:w-auto sm:flex-1 sm:basis-[min(100%,12rem)]'

/** Utility content pages (contact, careers, giving forward, FAQ-style) */
export const utilityPageH1 =
  'font-rozha text-5xl leading-[1.08] text-brand-darkRed md:text-6xl'

/** Filled maroon — primary editorial CTA */
export const ctaPrimary = [
  CTA_BUTTON_SHELL,
  CTA_BUTTON_RADIUS,
  CTA_BUTTON_X,
  'py-[13px] font-montserrat text-[10px] uppercase sm:text-[11px]',
  CTA_EDITORIAL_TRACKING,
  'bg-[#7A1C28] text-[#e8d8c8] transition-colors hover:bg-[#821b2d]',
].join(' ')

/** Primary with trailing icon gap */
export const ctaPrimaryWithGap = [
  CTA_BUTTON_SHELL,
  'gap-2',
  CTA_BUTTON_RADIUS,
  CTA_BUTTON_X,
  'py-[13px] font-montserrat text-[10px] uppercase sm:text-[11px]',
  CTA_EDITORIAL_TRACKING,
  'bg-[#7A1C28] text-[#e8d8c8] transition-colors hover:bg-[#821b2d]',
].join(' ')

/** Outline on dark hero backgrounds */
export const ctaSecondaryOnDark = [
  CTA_BUTTON_SHELL,
  CTA_BUTTON_RADIUS,
  CTA_BUTTON_X,
  'border border-[#e8ddd4]/40 bg-[#1a0210]/35 py-[13px] font-montserrat text-[10px] uppercase sm:text-[11px]',
  CTA_EDITORIAL_TRACKING,
  'text-[#e8d8c8] backdrop-blur-md transition-colors hover:border-[#e8ddd4]/70 hover:bg-[#1a0210]/55',
].join(' ')

/** Outline on light canvas */
export const ctaSecondaryOnLight = [
  CTA_BUTTON_SHELL,
  'gap-2 border border-brand-darkRed/35 bg-white/80',
  CTA_BUTTON_X,
  'py-3 font-montserrat text-xs uppercase',
  CTA_FORM_TRACKING,
  'text-brand-darkRed transition-colors hover:border-brand-dustyBlue hover:text-brand-dustyBlue',
].join(' ')

/** Cream inverse on maroon bands */
export const ctaPrimarySoft = [
  CTA_BUTTON_SHELL,
  CTA_BUTTON_RADIUS,
  CTA_BUTTON_X,
  'py-[13px] font-montserrat text-xs uppercase',
  CTA_EDITORIAL_TRACKING,
  'bg-[#e8ddd4] text-[#7A1C28] transition-colors hover:bg-[#faf8f5]',
].join(' ')

/** Transparent outline on dark footer bands */
export const ctaSecondaryOutlineOnDark = [
  CTA_BUTTON_SHELL,
  CTA_BUTTON_RADIUS,
  CTA_BUTTON_X,
  'border border-[#e8ddd4]/35 bg-transparent py-[13px] font-montserrat text-[10px] uppercase sm:text-[11px]',
  CTA_EDITORIAL_TRACKING,
  'text-[#e8d8c8] transition-colors hover:border-[#e8ddd4]/70',
].join(' ')

/** Modal / popup filled CTA (regional experience, consent) */
export const ctaPopupPrimary = [
  CTA_BUTTON_SHELL,
  CTA_BUTTON_X,
  'w-full min-h-[46px] border border-brand-darkRed bg-brand-darkRed py-3.5 font-montserrat text-[10px] uppercase sm:text-[11px]',
  CTA_FORM_TRACKING,
  'text-white transition-colors hover:bg-brand-darkMagenta',
].join(' ')

/** Modal / popup outline CTA */
export const ctaPopupSecondary = [
  CTA_BUTTON_SHELL,
  CTA_BUTTON_X,
  'w-full min-h-[46px] border border-brand-darkRed/20 bg-transparent py-3.5 font-montserrat text-[11px] sm:text-[12px]',
  'tracking-[0.02em] text-brand-darkRed transition-colors hover:border-brand-darkRed/35 hover:bg-brand-stone/10',
].join(' ')

/** Standard form submit (contact, auth, checkout-adjacent forms) */
const ctaFormSubmitBase = [
  CTA_BUTTON_SHELL,
  'gap-2',
  CTA_BUTTON_RADIUS,
  'bg-brand-darkRed font-montserrat uppercase',
  CTA_FORM_TRACKING,
  'text-white transition-colors hover:bg-brand-dustyBlue disabled:cursor-not-allowed disabled:opacity-50',
].join(' ')

export const ctaFormSubmit = `${ctaFormSubmitBase} w-full px-4 py-4 text-sm sm:px-8`

/** Inline-width form CTA (modals, success states) */
export const ctaFormSubmitInline = `${ctaFormSubmitBase} px-4 py-3 text-sm sm:px-8`

/** Compact form submit (auth cards) */
export const ctaFormSubmitCompact = `${ctaFormSubmitBase} w-full px-4 py-4 text-xs sm:px-6`

/** PDP / shop commerce primary */
export const pdpCtaPrimary = [
  CTA_BUTTON_SHELL,
  'min-h-[46px]',
  CTA_BUTTON_RADIUS,
  CTA_BUTTON_X,
  'bg-brand-darkRed font-montserrat text-[10px] font-semibold uppercase tracking-[0.16em] sm:text-[11px]',
  'text-white transition-colors hover:bg-brand-dustyBlue',
].join(' ')

export const PDP_FILLED_PLUM = 'bg-brand-darkRed text-white border-brand-darkRed'

export const pdpSizeButtonBase = [
  'min-w-[94px] border px-3 py-2.5 font-montserrat text-[11px] uppercase',
  CTA_EDITORIAL_TRACKING,
  'transition-all',
  CTA_BUTTON_RADIUS,
].join(' ')

/** Legal policy numbered section headings */
export const policySectionH2 = 'mb-4 font-rozha text-2xl text-neutral-900'

export const policySectionH2Plain = 'font-rozha text-2xl text-neutral-900'
