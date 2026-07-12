/**
 * Shared luxury form field tokens — readable on brand white (#faf8f5).
 * Never use brand-stone for borders/placeholders on white (too low contrast).
 */

/** Text input / textarea / select on light surfaces */
export const formFieldClass = [
  'w-full rounded-md border border-brand-darkRed/30 bg-white',
  'px-4 py-3.5 font-montserrat text-sm tracking-[0.02em] text-brand-darkRed',
  'placeholder:text-brand-muted',
  'shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]',
  'outline-none transition-[border-color,box-shadow,background-color] duration-200',
  'hover:border-brand-darkRed/45',
  'focus:border-brand-clayRed focus:ring-1 focus:ring-brand-clayRed/25',
].join(' ')

export const formFieldErrorClass =
  'border-brand-clayRed hover:border-brand-clayRed focus:border-brand-clayRed focus:ring-brand-clayRed/30'

/** Uppercase field labels */
export const formLabelClass =
  'mb-2 block font-montserrat text-[10px] font-medium uppercase tracking-[0.18em] text-brand-darkRed'

/** Helper / hint under fields */
export const formHintClass = 'mt-1.5 font-montserrat text-[11px] leading-relaxed text-brand-muted'

/** Inline field icons (leading) */
export const formIconClass =
  'pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-clayRed/75 rtl:left-auto rtl:right-3'

/** Password show/hide control */
export const formIconButtonClass =
  'absolute right-3 top-1/2 -translate-y-1/2 text-brand-clayRed/80 transition-colors hover:text-brand-darkRed rtl:left-3 rtl:right-auto'

/** White auth / contact card shell */
export const formCardClass = [
  'w-full rounded-2xl border border-brand-darkRed/15 bg-white',
  'p-8 shadow-[0_12px_40px_rgba(26,2,16,0.07)] ring-1 ring-brand-darkRed/5',
  'md:p-10',
].join(' ')

/** Divider “or” line */
export const formDividerLineClass = 'w-full border-t border-brand-darkRed/15'

export const formDividerLabelClass =
  'bg-white px-3 font-montserrat text-[10px] uppercase tracking-[0.2em] text-brand-muted'

/** Secondary link under forms */
export const formFooterTextClass = 'mt-6 text-center font-montserrat text-xs text-brand-muted'

export const formFooterLinkClass =
  'font-medium text-brand-dustyBlue underline decoration-brand-dustyBlue/40 underline-offset-2 transition-colors hover:text-brand-clayRed hover:decoration-brand-clayRed/50'
