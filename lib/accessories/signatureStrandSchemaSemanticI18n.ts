import type { AppLocale } from '@/lib/i18n/routing'

export type StrandSchemaSemanticLabels = {
  aboutName: string
  aboutDescription: string
  collectionName: string
  strandsCollectionName: string
  alAinCollectionName: string
  subjectOfPageName: string
}

const SEMANTIC: Record<AppLocale, StrandSchemaSemanticLabels> = {
  en: {
    aboutName: 'Abaya jewellery and garment jewellery',
    aboutDescription:
      'Detachable natural stone strands that attach to compatible Bint Saeed garments — the first interchangeable abaya strand system from a luxury abaya house.',
    collectionName: 'Bint Saeed Signature Strands — Abaya Jewellery & Garment Jewellery',
    strandsCollectionName: 'Bint Saeed Signature Strands',
    alAinCollectionName: 'Bint Saeed Al Ain Jewellery',
    subjectOfPageName: 'Signature Strands — Abaya Jewellery | Bint Saeed',
  },
  ar: {
    aboutName: 'مجوهرات العباءة ومجوهرات الملابس',
    aboutDescription:
      'سلاسل أحجار طبيعية قابلة للفصل تُثبَّت على قطع Bint Saeed المتوافقة — أول نظام ستراندات عباءة قابلة للتبديل من دار عباءات فاخرة.',
    collectionName: 'ستراندات التوقيع من Bint Saeed — مجوهرات العباءة ومجوهرات الملابس',
    strandsCollectionName: 'ستراندات التوقيع من Bint Saeed',
    alAinCollectionName: 'مجوهرات القوع من Bint Saeed',
    subjectOfPageName: 'ستراندات التوقيع — مجوهرات العباءة | Bint Saeed',
  },
  fr: {
    aboutName: "Bijoux d'abaya et bijoux pour vêtements",
    aboutDescription:
      "Fils de pierres naturelles amovibles qui s'attachent aux pièces Bint Saeed compatibles — le premier système de fils d'abaya interchangeables d'une maison d'abayas de luxe.",
    collectionName: "Signature Strands Bint Saeed — Bijoux d'abaya et bijoux pour vêtements",
    strandsCollectionName: 'Signature Strands Bint Saeed',
    alAinCollectionName: 'Bijoux Al Ain Bint Saeed',
    subjectOfPageName: "Signature Strands — Bijoux d'abaya | Bint Saeed",
  },
  it: {
    aboutName: 'Gioielli abaya e gioielli per capi',
    aboutDescription:
      'Fili di pietre naturali staccabili che si agganciano ai capi Bint Saeed compatibili — il primo sistema di fili abaya intercambiabili di una maison di abaya di lusso.',
    collectionName: 'Signature Strands Bint Saeed — Gioielli abaya e gioielli per capi',
    strandsCollectionName: 'Signature Strands Bint Saeed',
    alAinCollectionName: 'Gioielli Al Ain Bint Saeed',
    subjectOfPageName: 'Signature Strands — Gioielli abaya | Bint Saeed',
  },
  es: {
    aboutName: 'Joyería abaya y joyería para prendas',
    aboutDescription:
      'Hilos de piedra natural desmontables que se fijan a prendas Bint Saeed compatibles — el primer sistema de hilos abaya intercambiables de una casa de abayas de lujo.',
    collectionName: 'Signature Strands Bint Saeed — Joyería abaya y joyería para prendas',
    strandsCollectionName: 'Signature Strands Bint Saeed',
    alAinCollectionName: 'Joyería Al Ain Bint Saeed',
    subjectOfPageName: 'Signature Strands — Joyería abaya | Bint Saeed',
  },
  ru: {
    aboutName: 'Украшения для абайи и украшения для одежды',
    aboutDescription:
      'Съёмные нити из натуральных камней для совместимых изделий Bint Saeed — первая система сменных нитей для абайи от люксового абайя-дома.',
    collectionName: 'Signature Strands Bint Saeed — украшения для абайи и одежды',
    strandsCollectionName: 'Signature Strands Bint Saeed',
    alAinCollectionName: 'Украшения Al Ain Bint Saeed',
    subjectOfPageName: 'Signature Strands — украшения для абайи | Bint Saeed',
  },
  zh: {
    aboutName: '长袍珠宝与服装珠宝',
    aboutDescription:
      '可拆卸天然石链饰，适用于兼容的 Bint Saeed 服装——首家奢华长袍品牌推出的可更换长袍链饰系统。',
    collectionName: 'Bint Saeed Signature Strands — 长袍珠宝与服装珠宝',
    strandsCollectionName: 'Bint Saeed Signature Strands',
    alAinCollectionName: 'Bint Saeed Al Ain 珠宝',
    subjectOfPageName: 'Signature Strands — 长袍珠宝 | Bint Saeed',
  },
  de: {
    aboutName: 'Abaya-Schmuck und Kleidungsschmuck',
    aboutDescription:
      'Abnehmbare Naturstein-Stränge für kompatible Bint Saeed-Garments — das erste austauschbare Abaya-Strang-System eines Luxus-Abaya-Hauses.',
    collectionName: 'Bint Saeed Signature Strands — Abaya-Schmuck & Kleidungsschmuck',
    strandsCollectionName: 'Bint Saeed Signature Strands',
    alAinCollectionName: 'Bint Saeed Al Ain Schmuck',
    subjectOfPageName: 'Signature Strands — Abaya-Schmuck | Bint Saeed',
  },
  nl: {
    aboutName: 'Abaya sieraden en kleding sieraden',
    aboutDescription:
      'Afneembare natuursteen strengen voor compatibele Bint Saeed-garments — het eerste verwisselbare abaya-strengsysteem van een luxe abaya-huis.',
    collectionName: 'Bint Saeed Signature Strands — Abaya sieraden & kleding sieraden',
    strandsCollectionName: 'Bint Saeed Signature Strands',
    alAinCollectionName: 'Bint Saeed Al Ain sieraden',
    subjectOfPageName: 'Signature Strands — Abaya sieraden | Bint Saeed',
  },
  pt: {
    aboutName: 'Joias abaya e joias para vestuário',
    aboutDescription:
      'Fios de pedra natural destacáveis que se fixam a peças Bint Saeed compatíveis — o primeiro sistema de fios abaya intercambiáveis de uma casa de abayas de luxo.',
    collectionName: 'Signature Strands Bint Saeed — Joias abaya e joias para vestuário',
    strandsCollectionName: 'Signature Strands Bint Saeed',
    alAinCollectionName: 'Joias Al Ain Bint Saeed',
    subjectOfPageName: 'Signature Strands — Joias abaya | Bint Saeed',
  },
  id: {
    aboutName: 'Perhiasan abaya dan perhiasan pakaian',
    aboutDescription:
      'Strand batu alami yang dapat dilepas dan dipasang pada garment Bint Saeed yang kompatibel — sistem strand abaya pertama yang dapat ditukar dari rumah abaya mewah.',
    collectionName: 'Signature Strands Bint Saeed — Perhiasan Abaya & Perhiasan Pakaian',
    strandsCollectionName: 'Signature Strands Bint Saeed',
    alAinCollectionName: 'Perhiasan Al Ain Bint Saeed',
    subjectOfPageName: 'Signature Strands — Perhiasan Abaya | Bint Saeed',
  },
  ms: {
    aboutName: 'Barang kemas abaya dan barang kemas pakaian',
    aboutDescription:
      'Strand batu semula jadi boleh tanggal yang dipasang pada garment Bint Saeed yang serasi — sistem strand abaya boleh ditukar pertama daripada rumah abaya mewah.',
    collectionName: 'Signature Strands Bint Saeed — Barang Kemas Abaya & Barang Kemas Pakaian',
    strandsCollectionName: 'Signature Strands Bint Saeed',
    alAinCollectionName: 'Barang Kemas Al Ain Bint Saeed',
    subjectOfPageName: 'Signature Strands — Barang Kemas Abaya | Bint Saeed',
  },
}

export function getStrandSchemaSemanticLabels(locale: AppLocale = 'en'): StrandSchemaSemanticLabels {
  return SEMANTIC[locale]
}
