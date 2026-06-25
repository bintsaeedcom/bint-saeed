import type { AppLocale } from '@/lib/i18n/routing'
import type { ProductFaqItem } from '@/lib/products/productSchemaMeta'

const QUESTION: Record<AppLocale, string> = {
  en: 'What is Al Talli?',
  ar: 'ما هو التلي؟',
  fr: "Qu'est-ce que l'Al Talli ?",
  it: "Che cos'è l'Al Talli?",
  es: '¿Qué es Al Talli?',
  ru: 'Что такое Al Talli?',
  zh: '什么是 Al Talli？',
  de: 'Was ist Al Talli?',
  nl: 'Wat is Al Talli?',
  pt: 'O que é Al Talli?',
  id: 'Apa itu Al Talli?',
  ms: 'Apakah Al Talli?',
}

const ANSWER: Record<AppLocale, string> = {
  en: 'Al Talli is one of Bint Saeed’s signature House Codes and one of the United Arab Emirates’ most treasured traditional Emirati artisanal crafts recognised by UNESCO as Intangible Cultural Heritage. Traditionally handwoven by Emirati women using fine metallic threads, it has adorned women’s garments for generations. At Bint Saeed, we reimagine the use of Al Talli through contemporary design, allowing this remarkable element of Emirati cultural heritage to be worn and appreciated by women around the world.',
  ar: 'يُعد التلي أحد رموز Bint Saeed المميزة ومن أعز الحرف الإماراتية التقليدية في دولة الإمارات العربية المتحدة، المعترف بها من قِبل اليونسكو كتراث ثقافي غير مادي. تُنسج تقليدياً يدوياً من قِبل النساء الإماراتيات بخيوط معدنية دقيقة، وتزيّن ثياب النساء منذ أجيال. في Bint Saeed، نُعيد تخيّل استخدام التلي عبر تصميم معاصر، ليُرتدى ويُقدَّر هذا العنصر الرائع من التراث الثقافي الإماراتي من قِبل النساء حول العالم.',
  fr: 'Al Talli est l’un des codes signature de Bint Saeed et l’un des savoir-faire artisanaux traditionnels émiratis les plus précieux des Émirats arabes unis, reconnu par l’UNESCO comme patrimoine culturel immatériel. Traditionnellement tissé à la main par des femmes émiraties avec de fins fils métalliques, il a paré les vêtements féminins pendant des générations. Chez Bint Saeed, nous réinventons l’usage d’Al Talli par un design contemporain, permettant à cet élément remarquable du patrimoine culturel émirati d’être porté et apprécié par des femmes du monde entier.',
  it: 'Al Talli è uno dei codici signature di Bint Saeed e una delle più preziose arti artigianali tradizionali emiratine degli Emirati Arabi Uniti, riconosciuta dall’UNESCO come patrimonio culturale immateriale. Tradizionalmente tessuto a mano da donne emiratine con fili metallici sottili, ha adornato i capi femminili per generazioni. In Bint Saeed reinventiamo l’uso di Al Talli attraverso il design contemporaneo, permettendo a questo straordinario elemento del patrimonio culturale emiratino di essere indossato e apprezzato da donne in tutto il mondo.',
  es: 'Al Talli es uno de los códigos signature de Bint Saeed y una de las artesanías tradicionales emiratíes más preciadas de los Emiratos Árabes Unidos, reconocida por la UNESCO como Patrimonio Cultural Inmaterial. Tejida tradicionalmente a mano por mujeres emiratíes con finos hilos metálicos, ha adornado las prendas femeninas durante generaciones. En Bint Saeed reinventamos el uso de Al Talli mediante diseño contemporáneo, permitiendo que este notable elemento del patrimonio cultural emiratí sea llevado y apreciado por mujeres de todo el mundo.',
  ru: 'Al Talli — один из фирменных кодов Bint Saeed и одно из самых ценных традиционных эмиратских ремёсел ОАЭ, признанное ЮНЕСКО нематериальным культурным наследием. Традиционно его вручную плетут эмиратские женщины из тонких металлических нитей, украшая женскую одежду на протяжении поколений. В Bint Saeed мы переосмысливаем Al Talli через современный дизайн, позволяя женщинам по всему миру носить и ценить этот уникальный элемент эмиратского культурного наследия.',
  zh: 'Al Talli 是 Bint Saeed 标志性 House Code 之一，也是阿联酋最珍贵的传统阿联酋手工艺之一，被联合国教科文组织认定为非物质文化遗产。传统上由阿联酋女性以精细金属线手工编织，世代点缀女性服饰。在 Bint Saeed，我们通过当代设计重新诠释 Al Talli 的运用，让这一卓越的阿联酋文化元素被世界各地的女性穿着与欣赏。',
  de: 'Al Talli ist einer der Signature House Codes von Bint Saeed und eines der wertvollsten traditionellen emiratischen Handwerke der Vereinigten Arabischen Emirate, von der UNESCO als immaterielles Kulturerbe anerkannt. Traditionell von emiratischen Frauen mit feinen Metallfäden handgewebt, schmückt es seit Generationen Frauenkleidung. Bei Bint Saeed interpretieren wir Al Talli durch zeitgenössisches Design neu, damit dieses bemerkenswerte Element des emiratischen Kulturerbes von Frauen weltweit getragen und geschätzt werden kann.',
  nl: 'Al Talli is een van de signature House Codes van Bint Saeed en een van de meest gekoesterde traditionele Emiratische ambachten van de Verenigde Arabische Emiraten, erkend door UNESCO als immaterieel cultureel erfgoed. Traditioneel handgeweven door Emiratische vrouwen met fijne metallic draden, siert het generaties lang vrouwelijke kleding. Bij Bint Saeed herinterpreteren we Al Talli via eigentijds design, zodat dit opmerkelijke element van Emiratisch cultureel erfgoed wereldwijd gedragen en gewaardeerd kan worden.',
  pt: 'Al Talli é um dos códigos signature da Bint Saeed e uma das mais preciosas artes artesanais tradicionais emiratis dos Emirados Árabes Unidos, reconhecida pela UNESCO como Património Cultural Imaterial. Tradicionalmente tecido à mão por mulheres emiratis com finos fios metálicos, adornou vestuário feminino durante gerações. Na Bint Saeed reinventamos o uso de Al Talli através de design contemporâneo, permitindo que este notável elemento do património cultural emirati seja usado e apreciado por mulheres em todo o mundo.',
  id: 'Al Talli adalah salah satu House Code signature Bint Saeed dan salah satu kerajinan tradisional Emirati paling berharga di Uni Emirat Arab, diakui UNESCO sebagai Warisan Budaya Takbenda. Secara tradisional ditenun tangan oleh perempuan Emirati dengan benang metalik halus, telah menghiasi pakaian perempuan selama generasi. Di Bint Saeed, kami membayangkan kembali penggunaan Al Talli melalui desain kontemporer, sehingga elemen warisan budaya Emirati yang luar biasa ini dapat dikenakan dan dihargai oleh perempuan di seluruh dunia.',
  ms: 'Al Talli ialah salah satu Kod Rumah signature Bint Saeed dan salah satu kraf artisanal tradisional Emirati yang paling dihargai di Emiriah Arab Bersatu, diiktiraf UNESCO sebagai Warisan Budaya Tidak Ketara. Secara tradisinya ditenun tangan oleh wanita Emirati menggunakan benang logam halus, ia telah menghiasi pakaian wanita selama generasi. Di Bint Saeed, kami membayangkan semula penggunaan Al Talli melalui reka bentuk kontemporari, membolehkan elemen warisan budaya Emirati yang luar biasa ini dipakai dan dihargai oleh wanita di seluruh dunia.',
}

/** Locked Al Talli heritage FAQ — shared across Covent Garden Abaya, Hampstead Dress, and Soho Set. */
export function getAlTalliHeritageFaqItem(locale: AppLocale = 'en'): ProductFaqItem {
  return {
    question: QUESTION[locale],
    answer: ANSWER[locale],
  }
}

const AL_TALLI_QUESTION_RE =
  /what is al talli|al talli trim|ما هو.*التلي|التلي|qu'est-ce que.*al talli|che cos'è.*al talli|qué es al talli|что такое al talli|什么是 al talli|was ist al talli|wat is al talli|o que é al talli|apa itu al talli|apakah al talli/i

/** Replace legacy Al Talli FAQ entries with the locked heritage copy. */
export function patchAlTalliHeritageFaq(faq: ProductFaqItem[], locale: AppLocale): ProductFaqItem[] {
  const replacement = getAlTalliHeritageFaqItem(locale)
  const idx = faq.findIndex((item) => AL_TALLI_QUESTION_RE.test(item.question))
  if (idx === -1) return [...faq, replacement]
  return faq.map((item, i) => (i === idx ? replacement : item))
}

export const AL_TALLI_HERITAGE_PRODUCT_SLUGS = new Set([
  'covent-garden-abaya',
  'hampstead-dress',
  'soho-set',
])
