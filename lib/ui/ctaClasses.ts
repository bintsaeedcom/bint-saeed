/** Shared CTA tokens — editorial maroon, form submits, and PDP commerce buttons. */

export const CTA_BUTTON_RADIUS = 'rounded-[4px]'

/** Form / auth submit buttons */
export const CTA_FORM_TRACKING = 'tracking-[0.15em]'

/** Editorial link CTAs (about, strands, utility pages) */
export const CTA_EDITORIAL_TRACKING = 'tracking-[0.08em]'

/** Utility content pages (contact, careers, giving forward, FAQ-style) */
export const utilityPageH1 =
  'font-rozha text-5xl leading-[1.08] text-brand-darkRed md:text-6xl'

/** Filled maroon — primary editorial CTA */
export const ctaPrimary = [
  'inline-flex items-center justify-center',
  CTA_BUTTON_RADIUS,
  'bg-[#7A1C28] px-8 py-[13px] font-montserrat text-[11px] uppercase',
  CTA_EDITORIAL_TRACKING,
  'text-[#e8d8c8] transition-colors hover:bg-[#821b2d]',
].join(' ')

/** Primary with trailing icon gap */
export const ctaPrimaryWithGap = [
  'inline-flex items-center gap-2',
  CTA_BUTTON_RADIUS,
  'bg-[#7A1C28] px-8 py-[13px] font-montserrat text-[11px] uppercase',
  CTA_EDITORIAL_TRACKING,
  'text-[#e8d8c8] transition-colors hover:bg-[#821b2d]',
].join(' ')

/** Outline on dark hero backgrounds */
export const ctaSecondaryOnDark = [
  'inline-flex items-center justify-center',
  CTA_BUTTON_RADIUS,
  'border border-[#e8ddd4]/40 bg-[#1a0210]/35 px-8 py-[13px] font-montserrat text-[11px] uppercase',
  CTA_EDITORIAL_TRACKING,
  'text-[#e8d8c8] backdrop-blur-md transition-colors hover:border-[#e8ddd4]/70 hover:bg-[#1a0210]/55',
].join(' ')

/** Outline on light canvas */
export const ctaSecondaryOnLight = [
  'inline-flex items-center gap-2 border border-brand-darkRed/35 bg-white/80 px-7 py-3',
  'font-montserrat text-xs uppercase',
  CTA_FORM_TRACKING,
  'text-brand-darkRed transition-colors hover:border-brand-dustyBlue hover:text-brand-dustyBlue',
].join(' ')

/** Cream inverse on maroon bands */
export const ctaPrimarySoft = [
  'inline-flex items-center justify-center',
  CTA_BUTTON_RADIUS,
  'bg-[#e8ddd4] px-8 py-[13px] font-montserrat text-xs uppercase',
  CTA_EDITORIAL_TRACKING,
  'text-[#7A1C28] transition-colors hover:bg-[#faf8f5]',
].join(' ')

/** Transparent outline on dark footer bands */
export const ctaSecondaryOutlineOnDark = [
  'inline-flex items-center justify-center',
  CTA_BUTTON_RADIUS,
  'border border-[#e8ddd4]/35 bg-transparent px-8 py-[13px] font-montserrat text-[11px] uppercase',
  CTA_EDITORIAL_TRACKING,
  'text-[#e8d8c8] transition-colors hover:border-[#e8ddd4]/70',
].join(' ')

/** Standard form submit (contact, auth, checkout-adjacent forms) */
const ctaFormSubmitBase = [
  'inline-flex items-center justify-center gap-2',
  CTA_BUTTON_RADIUS,
  'bg-brand-darkRed font-montserrat uppercase',
  CTA_FORM_TRACKING,
  'text-white transition-colors hover:bg-brand-dustyBlue disabled:cursor-not-allowed disabled:opacity-50',
].join(' ')

export const ctaFormSubmit = `${ctaFormSubmitBase} w-full px-8 py-4 text-sm`

/** Inline-width form CTA (modals, success states) */
export const ctaFormSubmitInline = `${ctaFormSubmitBase} px-8 py-3 text-sm`

/** Compact form submit (auth cards) */
export const ctaFormSubmitCompact = `${ctaFormSubmitBase} w-full py-4 text-xs`

/** PDP / shop commerce primary */
export const pdpCtaPrimary = [
  'inline-flex min-h-[46px] items-center justify-center',
  CTA_BUTTON_RADIUS,
  'bg-brand-darkRed font-montserrat text-[11px] font-semibold uppercase tracking-[0.16em]',
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
