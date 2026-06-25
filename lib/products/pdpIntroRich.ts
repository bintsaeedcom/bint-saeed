/** Structured PDP intro segments — rendered in shop PDP with optional bold house-code links. */
export type PdpIntroPart =
  | { type: 'text'; value: string }
  | { type: 'codeLink'; label: string; href: string; bold?: boolean }

export type PdpIntroParagraph = PdpIntroPart[]

export type PdpDetailGroup = {
  title: string
  items: string[]
}

export const THE_CODES_KHOUS_HREF = '/the-codes#khous'
export const THE_CODES_KNOTTED_LINES_HREF = '/the-codes#knotted-lines-of-lineage'

export function pdpIntroPartsToPlainText(parts: PdpIntroPart[]): string {
  return parts.map((part) => (part.type === 'text' ? part.value : part.label)).join('')
}

export function pdpIntroParagraphsToPlainText(paragraphs: PdpIntroParagraph[]): string[] {
  return paragraphs.map(pdpIntroPartsToPlainText)
}
