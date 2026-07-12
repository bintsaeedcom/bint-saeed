import type { AppLocale } from '@/lib/i18n/routing'

type AltParams = { stone: string; necklace: string; earrings: string }

type AltTemplate = {
  carousel: (p: AltParams) => string
  strand: (p: { stone: string; necklace: string }) => string
  necklace: (p: AltParams) => string
  earrings: (p: AltParams) => string
}

/**
 * Locale templates for Signature Strand gallery alts.
 * Product / House Code names in pairing labels stay English; descriptive prose is localized.
 * English curated strings in strandPdpSeo remain the EN source of truth.
 */
const TEMPLATES: Record<AppLocale, AltTemplate> = {
  en: {
    carousel: ({ stone, necklace, earrings }) =>
      `${stone} natural stone bead abaya strand — pairs with ${necklace} and ${earrings} for Marylebone Abaya`,
    strand: ({ stone, necklace }) =>
      `${stone} natural stone bead abaya strand with 18K gold-plated clip — interchangeable for Bint Saeed Marylebone Abaya, pairs with ${necklace}`,
    necklace: ({ necklace, stone, earrings }) =>
      `${necklace} with hand-strung natural ${stone} beads — pairs with ${stone} abaya strand and ${earrings}`,
    earrings: ({ earrings, stone, necklace }) =>
      `${earrings} — pairs with ${stone} abaya strand and ${necklace}`,
  },
  ar: {
    carousel: ({ stone, necklace, earrings }) =>
      `ستراند عباءة من خرز أحجار ${stone} الطبيعية — يُنسّق مع ${necklace} و${earrings} لعباية Marylebone`,
    strand: ({ stone, necklace }) =>
      `ستراند عباءة من خرز أحجار ${stone} الطبيعية بمشبك مطلي ذهب 18 قيراط — قابل للتبديل لعباية Marylebone من Bint Saeed، يُنسّق مع ${necklace}`,
    necklace: ({ necklace, stone, earrings }) =>
      `${necklace} بخرز ${stone} طبيعي مطرّز يدوياً — يُنسّق مع ستراند عباءة ${stone} و${earrings}`,
    earrings: ({ earrings, stone, necklace }) =>
      `${earrings} — تُنسّق مع ستراند عباءة ${stone} و${necklace}`,
  },
  fr: {
    carousel: ({ stone, necklace, earrings }) =>
      `Fil d'abaya en perles de pierre naturelle ${stone} — s'associe à ${necklace} et ${earrings} pour l'abaya Marylebone`,
    strand: ({ stone, necklace }) =>
      `Fil d'abaya en perles de pierre naturelle ${stone} avec clip plaqué or 18 carats — interchangeable pour l'abaya Marylebone Bint Saeed, s'associe à ${necklace}`,
    necklace: ({ necklace, stone, earrings }) =>
      `${necklace} avec perles naturelles ${stone} enfilées à la main — s'associe au fil d'abaya ${stone} et à ${earrings}`,
    earrings: ({ earrings, stone, necklace }) =>
      `${earrings} — s'associent au fil d'abaya ${stone} et à ${necklace}`,
  },
  it: {
    carousel: ({ stone, necklace, earrings }) =>
      `Filo abaya in perle di pietra naturale ${stone} — si abbina a ${necklace} e ${earrings} per Marylebone Abaya`,
    strand: ({ stone, necklace }) =>
      `Filo abaya in perle di pietra naturale ${stone} con clip placcato oro 18K — intercambiabile per Marylebone Abaya Bint Saeed, si abbina a ${necklace}`,
    necklace: ({ necklace, stone, earrings }) =>
      `${necklace} con perle naturali ${stone} infilate a mano — si abbina al filo abaya ${stone} e a ${earrings}`,
    earrings: ({ earrings, stone, necklace }) =>
      `${earrings} — si abbinano al filo abaya ${stone} e a ${necklace}`,
  },
  es: {
    carousel: ({ stone, necklace, earrings }) =>
      `Hilo abaya de cuentas de piedra natural ${stone} — combina con ${necklace} y ${earrings} para Marylebone Abaya`,
    strand: ({ stone, necklace }) =>
      `Hilo abaya de cuentas de piedra natural ${stone} con clip baño oro 18K — intercambiable para Marylebone Abaya Bint Saeed, combina con ${necklace}`,
    necklace: ({ necklace, stone, earrings }) =>
      `${necklace} con cuentas naturales ${stone} ensartadas a mano — combina con hilo abaya ${stone} y ${earrings}`,
    earrings: ({ earrings, stone, necklace }) =>
      `${earrings} — combinan con hilo abaya ${stone} y ${necklace}`,
  },
  ru: {
    carousel: ({ stone, necklace, earrings }) =>
      `Нить для абайи из бусин натурального камня ${stone} — сочетается с ${necklace} и ${earrings} для Marylebone Abaya`,
    strand: ({ stone, necklace }) =>
      `Нить для абайи из бусин натурального камня ${stone} с зажимом с позолотой 18K — сменная для Marylebone Abaya Bint Saeed, сочетается с ${necklace}`,
    necklace: ({ necklace, stone, earrings }) =>
      `${necklace} с вручную нанизанными натуральными бусинами ${stone} — сочетается с нитью для абайи ${stone} и ${earrings}`,
    earrings: ({ earrings, stone, necklace }) =>
      `${earrings} — сочетаются с нитью для абайи ${stone} и ${necklace}`,
  },
  zh: {
    carousel: ({ stone, necklace, earrings }) =>
      `${stone}天然石珠长袍链饰——可与${necklace}及${earrings}搭配，用于Marylebone Abaya`,
    strand: ({ stone, necklace }) =>
      `${stone}天然石珠长袍链饰，配18K镀金夹扣——适用于Bint Saeed Marylebone Abaya可更换链饰，搭配${necklace}`,
    necklace: ({ necklace, stone, earrings }) =>
      `${necklace}，手工串制天然${stone}珠——搭配${stone}长袍链饰与${earrings}`,
    earrings: ({ earrings, stone, necklace }) =>
      `${earrings}——搭配${stone}长袍链饰与${necklace}`,
  },
  de: {
    carousel: ({ stone, necklace, earrings }) =>
      `Abaya-Strang aus Natursteinperlen ${stone} — passt zu ${necklace} und ${earrings} für die Marylebone Abaya`,
    strand: ({ stone, necklace }) =>
      `Abaya-Strang aus Natursteinperlen ${stone} mit 18K vergoldetem Clip — austauschbar für Bint Saeed Marylebone Abaya, passt zu ${necklace}`,
    necklace: ({ necklace, stone, earrings }) =>
      `${necklace} mit handgefädelten natürlichen ${stone}-Perlen — passt zum ${stone}-Abaya-Strang und ${earrings}`,
    earrings: ({ earrings, stone, necklace }) =>
      `${earrings} — passen zum ${stone}-Abaya-Strang und ${necklace}`,
  },
  nl: {
    carousel: ({ stone, necklace, earrings }) =>
      `Abaya-streng van natuursteen kralen ${stone} — combineert met ${necklace} en ${earrings} voor Marylebone Abaya`,
    strand: ({ stone, necklace }) =>
      `Abaya-streng van natuursteen kralen ${stone} met 18K vergulde clip — verwisselbaar voor Bint Saeed Marylebone Abaya, combineert met ${necklace}`,
    necklace: ({ necklace, stone, earrings }) =>
      `${necklace} met handgeregen natuurlijke ${stone}-kralen — combineert met ${stone} abaya-streng en ${earrings}`,
    earrings: ({ earrings, stone, necklace }) =>
      `${earrings} — combineren met ${stone} abaya-streng en ${necklace}`,
  },
  pt: {
    carousel: ({ stone, necklace, earrings }) =>
      `Fio abaya de contas de pedra natural ${stone} — combina com ${necklace} e ${earrings} para Marylebone Abaya`,
    strand: ({ stone, necklace }) =>
      `Fio abaya de contas de pedra natural ${stone} com clip banhado a ouro 18K — intercambiável para Marylebone Abaya Bint Saeed, combina com ${necklace}`,
    necklace: ({ necklace, stone, earrings }) =>
      `${necklace} com contas naturais ${stone} enfiadas à mão — combina com fio abaya ${stone} e ${earrings}`,
    earrings: ({ earrings, stone, necklace }) =>
      `${earrings} — combinam com fio abaya ${stone} e ${necklace}`,
  },
  id: {
    carousel: ({ stone, necklace, earrings }) =>
      `Strand abaya manik batu alami ${stone} — dipadukan dengan ${necklace} dan ${earrings} untuk Marylebone Abaya`,
    strand: ({ stone, necklace }) =>
      `Strand abaya manik batu alami ${stone} dengan clip berlapis emas 18K — dapat ditukar untuk Marylebone Abaya Bint Saeed, dipadukan dengan ${necklace}`,
    necklace: ({ necklace, stone, earrings }) =>
      `${necklace} dengan manik ${stone} alami dirangkai tangan — dipadukan dengan strand abaya ${stone} dan ${earrings}`,
    earrings: ({ earrings, stone, necklace }) =>
      `${earrings} — dipadukan dengan strand abaya ${stone} dan ${necklace}`,
  },
  ms: {
    carousel: ({ stone, necklace, earrings }) =>
      `Strand abaya manik batu semula jadi ${stone} — dipadankan dengan ${necklace} dan ${earrings} untuk Marylebone Abaya`,
    strand: ({ stone, necklace }) =>
      `Strand abaya manik batu semula jadi ${stone} dengan clip bersalut emas 18K — boleh ditukar untuk Marylebone Abaya Bint Saeed, dipadankan dengan ${necklace}`,
    necklace: ({ necklace, stone, earrings }) =>
      `${necklace} dengan manik ${stone} semula jadi dirangkai tangan — dipadankan dengan strand abaya ${stone} dan ${earrings}`,
    earrings: ({ earrings, stone, necklace }) =>
      `${earrings} — dipadankan dengan strand abaya ${stone} dan ${necklace}`,
  },
}

export type StrandAltRole = 'carousel' | 'strand' | 'necklace' | 'earrings'

export function buildLocalizedStrandAltBody(
  locale: AppLocale,
  role: StrandAltRole,
  params: AltParams,
): string {
  const t = TEMPLATES[locale] ?? TEMPLATES.en
  if (role === 'carousel') return t.carousel(params)
  if (role === 'strand') return t.strand({ stone: params.stone, necklace: params.necklace })
  if (role === 'necklace') return t.necklace(params)
  return t.earrings(params)
}
