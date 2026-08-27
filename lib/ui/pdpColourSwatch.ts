/**
 * Selectable colour swatches on PDPs / Quick Buy / accessories.
 * Match collection-grid gemstone beads: small, specular, not flat discs.
 */

/** Visual bead — ~10–12px; outer hit target stays finger-friendly. */
export const PDP_COLOUR_SWATCH =
  'h-2.5 w-2.5 shrink-0 rounded-full border border-black/20 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.7),inset_0_-1.5px_2.5px_rgba(0,0,0,0.4),0_0.5px_1.5px_rgba(0,0,0,0.18)] transition-all sm:h-[11px] sm:w-[11px]'

/** Hit area wrapper so beads stay small without hurting mobile taps. */
export const PDP_COLOUR_SWATCH_HIT =
  'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full sm:h-7 sm:w-7'

export function pdpColourSwatchState(selected: boolean): string {
  return selected
    ? 'outline outline-[1.5px] outline-offset-[3px] outline-brand-darkRed'
    : 'outline-none hover:border-brand-dustyBlue/70'
}

/**
 * Soft specular bead fill for selectable PDP swatches.
 * Keeps the catalog hex (unlike grid chips that soften neon stones).
 * Strong top-left highlight so dark colours (black / navy) still read as 3D.
 */
export function pdpColourSwatchBeadStyle(hex: string): {
  backgroundColor: string
  backgroundImage: string
} {
  const c = hex.trim()
  return {
    backgroundColor: c,
    backgroundImage: [
      'radial-gradient(circle at 30% 24%, rgba(255,255,255,0.78) 0%, rgba(255,255,255,0.28) 18%, transparent 44%)',
      'radial-gradient(circle at 72% 80%, rgba(0,0,0,0.38) 0%, transparent 48%)',
      'linear-gradient(145deg, rgba(255,255,255,0.14) 0%, transparent 42%, rgba(0,0,0,0.12) 100%)',
    ].join(', '),
  }
}
