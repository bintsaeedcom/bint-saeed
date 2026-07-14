/** Shared selectable colour swatches on PDPs / Quick Buy (matches accessories). */

export const PDP_COLOUR_SWATCH =
  'h-5 w-5 shrink-0 rounded-full border transition-all sm:h-6 sm:w-6'

export function pdpColourSwatchState(selected: boolean): string {
  return selected
    ? 'border-brand-darkRed ring-1 ring-brand-darkRed/25 ring-offset-1'
    : 'border-brand-stone/40 hover:border-brand-dustyBlue'
}
