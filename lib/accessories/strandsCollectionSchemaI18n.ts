import type { AppLocale } from '@/lib/i18n/routing'
import { localizedPath } from '@/lib/i18n/routing'
import { accessories } from '@/data/accessories'
import { sortAccessoriesByPriceAsc } from '@/lib/accessories/filterAccessories'
import {
  mergeAccessorySchemaKeywords,
  getJewelleryCategoryDiscoveryKeywords,
  getGlobalJewelleryDiscoveryKeywords,
} from '@/lib/accessories/jewelleryDiscoveryI18n'
import { getSignatureStrandSharedKeywords } from '@/lib/accessories/signatureStrandSchemaKeywordsI18n'
import { getStrandPdpContent } from '@/lib/accessories/strandPdp/resolveStrandPdpContent'
import { buildFaqPageJsonLd } from '@/lib/products/productSchemaMeta'
import { schemaInLanguageForLocale } from '@/lib/i18n/bcp47'
import { accessoryCanonicalUrl } from '@/lib/accessories/accessoryPageUrl'
import { getStrandSchemaSemanticLabels } from '@/lib/accessories/signatureStrandSchemaSemanticI18n'
import { getAccessorySku } from '@/lib/accessories/accessorySku'
import {
  absoluteSchemaAssetUrl,
  withMerchantListingOfferFields,
} from '@/lib/seo/merchantOfferSchema'

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.bintsaeed.com').replace(/\/$/, '')

type CollectionCopy = {
  name: string
  description: string
  itemListName: string
  faq: { question: string; answer: string }[]
}

const COLLECTION_COPY: Record<AppLocale, CollectionCopy> = {
  en: {
    name: 'Bint Saeed Signature Strands — Abaya Jewellery & Garment Jewellery',
    description:
      'Interchangeable natural stone Signature Strands handcrafted in Abu Dhabi — abaya jewellery and garment jewellery for the Marylebone Abaya. Onyx, tiger eye, sunstone, malachite, lapis lazuli, rose quartz, jade, amethyst and Al Ain Rosette strands. Pairs with Al Ain necklaces and natural stone earrings. Ships worldwide.',
    itemListName: 'Bint Saeed Signature Strands Collection',
    faq: [
      {
        question: 'What are Bint Saeed Signature Strands?',
        answer:
          'Signature Strands are detachable natural stone lines with 18K gold-plated hardware — abaya jewellery and garment jewellery that attach to compatible Bint Saeed garments such as the Marylebone Abaya.',
      },
      {
        question: 'What is abaya jewellery or garment jewellery?',
        answer:
          'Abaya jewellery and garment jewellery are adornments made for clothing, not worn as necklaces or bracelets. Signature Strands personalise your abaya without buying a new garment.',
      },
      {
        question: 'Does Bint Saeed ship Signature Strands worldwide?',
        answer:
          'Yes. Bint Saeed ships internationally to clients across the GCC, Europe, North America, Asia-Pacific and beyond.',
      },
    ],
  },
  ar: {
    name: 'ستراندات التوقيع من Bint Saeed — مجوهرات العباءة والملابس',
    description:
      'ستراندات التوقيع القابلة للتبديل من أحجار طبيعية، مصنوعة يدوياً في أبوظبي — مجوهرات عباءة ومجوهرات ملابس لعباءة ماريلبون. أونكس، عين النمر، حجر الشمس، ملاكيت، لازورد، كوارتز وردي، يشم، جمشت وستراندات وردة القوع. تنسّق مع قلائد القوع والأقراط. شحن عالمي.',
    itemListName: 'مجموعة ستراندات التوقيع من Bint Saeed',
    faq: [
      {
        question: 'ما هي ستراندات التوقيع من Bint Saeed؟',
        answer:
          'ستراندات التوقيع هي سلاسل أحجار طبيعية قابلة للفصل مع تفاصيل مطلية ذهباً — مجوهرات عباءة وملابس تُثبَّت على قطع Bint Saeed المتوافقة مثل عباءة ماريلبون.',
      },
      {
        question: 'ما هي مجوهرات العباءة أو مجوهرات الملابس؟',
        answer:
          'هي زينة مخصّصة للملابس وليست قلائد أو أساور. تتيح ستراندات التوقيع تخصيص العباءة دون شراء قطعة جديدة.',
      },
      {
        question: 'هل تُشحن ستراندات التوقيع عالمياً؟',
        answer:
          'نعم. تُشحن Bint Saeed دولياً إلى عملاء في الخليج وأوروبا وأمريكا الشمالية وآسيا والمحيط الهادئ وغيرها.',
      },
    ],
  },
  fr: {
    name: 'Signature Strands Bint Saeed — Bijoux d\'abaya et pour vêtements',
    description:
      'Signature Strands interchangeables en pierres naturelles, assemblés à la main à Abu Dhabi — bijoux d\'abaya et pour vêtements pour la Marylebone Abaya. Onyx, œil de tigre, sunstone, malachite, lapis lazuli, quartz rose, jade, améthyste et fils Rosette Al Ain. S\'associent aux colliers Al Ain. Livraison mondiale.',
    itemListName: 'Collection Signature Strands Bint Saeed',
    faq: [
      {
        question: "Qu'est-ce qu'un Signature Strand Bint Saeed ?",
        answer:
          "Un fil de pierres naturelles amovible avec finitions plaquées or 18 carats — bijou d'abaya et pour vêtement, conçu pour la Marylebone Abaya et les pièces compatibles.",
      },
      {
        question: "Qu'est-ce que les bijoux d'abaya ou pour vêtements ?",
        answer:
          "Des ornements pour vêtements, pas des colliers ou bracelets. Les Signature Strands personnalisent l'abaya sans acheter une nouvelle pièce.",
      },
      {
        question: 'Livrez-vous les Signature Strands dans le monde entier ?',
        answer:
          'Oui. Bint Saeed expédie internationalement vers le Golfe, l\'Europe, l\'Amérique du Nord, l\'Asie-Pacifique et au-delà.',
      },
    ],
  },
  it: {
    name: 'Signature Strands Bint Saeed — Gioielli abaya e per capi',
    description:
      'Signature Strands intercambiabili in pietre naturali, assemblati a mano ad Abu Dhabi — gioielli abaya e per capi per la Marylebone Abaya. Onice, occhio di tigre, sunstone, malachite, lapislazzuli, quarzo rosa, giada, ametista e fili Rosetta Al Ain. Si abbinano alle collane Al Ain. Spedizione mondiale.',
    itemListName: 'Collezione Signature Strands Bint Saeed',
    faq: [
      {
        question: 'Cosa sono i Signature Strands Bint Saeed?',
        answer:
          'Fili di pietre naturali staccabili con finiture placcate oro 18K — gioielli abaya e per capi per la Marylebone Abaya e capi compatibili.',
      },
      {
        question: 'Cosa sono i gioielli abaya o per capi?',
        answer:
          'Ornamenti per abbigliamento, non collane o bracciali. I Signature Strands personalizzano l\'abaya senza acquistare un nuovo capo.',
      },
      {
        question: 'Spedite i Signature Strands in tutto il mondo?',
        answer:
          'Sì. Bint Saeed spedisce internazionalmente nel Golfo, Europa, Nord America, Asia-Pacifico e oltre.',
      },
    ],
  },
  es: {
    name: 'Signature Strands Bint Saeed — Joyería abaya y para prendas',
    description:
      'Signature Strands intercambiables en piedra natural, ensamblados a mano en Abu Dhabi — joyería abaya y para prendas para la Marylebone Abaya. Ónix, ojo de tigre, sunstone, malaquita, lapislázuli, cuarzo rosa, jade, amatista y hilos Rosette Al Ain. Combina con collares Al Ain. Envío mundial.',
    itemListName: 'Colección Signature Strands Bint Saeed',
    faq: [
      {
        question: '¿Qué son los Signature Strands Bint Saeed?',
        answer:
          'Hilos de piedra natural desmontables con acabados bañados en oro de 18K — joyería abaya y para prendas para la Marylebone Abaya.',
      },
      {
        question: '¿Qué es la joyería abaya o para prendas?',
        answer:
          'Adornos para ropa, no collares ni pulseras. Los Signature Strands personalizan la abaya sin comprar una prenda nueva.',
      },
      {
        question: '¿Envían Signature Strands a todo el mundo?',
        answer:
          'Sí. Bint Saeed envía internacionalmente al Golfo, Europa, Norteamérica, Asia-Pacífico y más allá.',
      },
    ],
  },
  ru: {
    name: 'Signature Strands Bint Saeed — Украшения для абайи и одежды',
    description:
      'Сменные Signature Strands из натуральных камней, ручная сборка в Абу-Даби — украшения для абайи и одежды для Marylebone Abaya. Оникс, тигровый глаз, sunstone, малахит, лазурит, розовый кварц, нефрит, аметист и нити Al Ain Rosette. Сочетаются с ожерельями Al Ain. Доставка по всему миру.',
    itemListName: 'Коллекция Signature Strands Bint Saeed',
    faq: [
      {
        question: 'Что такое Signature Strands Bint Saeed?',
        answer:
          'Съёмные нити из натуральных камней с позолотой 18K — украшения для абайи и одежды для Marylebone Abaya.',
      },
      {
        question: 'Что такое украшения для абайи или одежды?',
        answer:
          'Украшения для одежды, а не ожерелья или браслеты. Signature Strands персонализируют абайю без покупки новой вещи.',
      },
      {
        question: 'Доставляете ли Signature Strands по всему миру?',
        answer:
          'Да. Bint Saeed доставляет международно в страны Залива, Европу, Северную Америку, Азиатско-Тихоокеанский регион и другие регионы.',
      },
    ],
  },
  zh: {
    name: 'Bint Saeed Signature Strands — 长袍珠宝与服装珠宝',
    description:
      '阿布扎比手工可更换天然石 Signature Strands — 适用于 Marylebone Abaya 的长袍与服装珠宝。玛瑙、虎眼石、日光石、孔雀石、青金石、玫瑰石英、翡翠、紫水晶及 Al Ain Rosette 链饰。可搭配 Al Ain 项链。全球配送。',
    itemListName: 'Bint Saeed Signature Strands 系列',
    faq: [
      {
        question: '什么是 Bint Saeed Signature Strands？',
        answer:
          '可拆卸天然石链饰，18K镀金配件 — 适用于 Marylebone Abaya 等兼容服装的长袍与服装珠宝。',
      },
      {
        question: '什么是长袍珠宝或服装珠宝？',
        answer:
          '专为服装设计的装饰，而非项链或手链。Signature Strands 无需购买新衣即可个性化长袍。',
      },
      {
        question: 'Bint Saeed 是否全球配送 Signature Strands？',
        answer:
          '是的。Bint Saeed 向海湾、欧洲、北美、亚太及全球客户配送。',
      },
    ],
  },
  de: {
    name: 'Bint Saeed Signature Strands — Abaya- & Kleidungsschmuck',
    description:
      'Austauschbare Signature Strands aus Natursteinen, handgefertigt in Abu Dhabi — Abaya- und Kleidungsschmuck für die Marylebone Abaya. Onyx, Tigerauge, Sunstone, Malachit, Lapislazuli, Rosenquarz, Jade, Amethyst und Al Ain Rosette Stränge. Passt zu Al Ain Halsketten. Weltweiter Versand.',
    itemListName: 'Bint Saeed Signature Strands Kollektion',
    faq: [
      {
        question: 'Was sind Bint Saeed Signature Strands?',
        answer:
          'Abnehmbare Naturstein-Stränge mit 18K vergoldeten Details — Abaya- und Kleidungsschmuck für die Marylebone Abaya.',
      },
      {
        question: 'Was ist Abaya- oder Kleidungsschmuck?',
        answer:
          'Schmuck für Kleidung, keine Halsketten oder Armbänder. Signature Strands personalisieren die Abaya ohne neues Kleidungsstück.',
      },
      {
        question: 'Versendet Bint Saeed Signature Strands weltweit?',
        answer:
          'Ja. Bint Saeed liefert international in den Golf, nach Europa, Nordamerika, Asien-Pazifik und darüber hinaus.',
      },
    ],
  },
  nl: {
    name: 'Bint Saeed Signature Strands — Abaya- & kleding sieraden',
    description:
      'Verwisselbare Signature Strands van natuursteen, handgemaakt in Abu Dhabi — abaya- en kleding sieraden voor de Marylebone Abaya. Onyx, tijgeroog, sunstone, malachiet, lapis lazuli, roze kwarts, jade, amethist en Al Ain Rosette strengen. Combineert met Al Ain kettingen. Wereldwijde verzending.',
    itemListName: 'Bint Saeed Signature Strands collectie',
    faq: [
      {
        question: 'Wat zijn Bint Saeed Signature Strands?',
        answer:
          'Afneembare natuursteen strengen met 18K vergulde details — abaya- en kleding sieraden voor de Marylebone Abaya.',
      },
      {
        question: 'Wat zijn abaya- of kleding sieraden?',
        answer:
          'Sieraden voor kleding, geen kettingen of armbanden. Signature Strands personaliseren uw abaya zonder nieuw kledingstuk.',
      },
      {
        question: 'Verzendt Bint Saeed Signature Strands wereldwijd?',
        answer:
          'Ja. Bint Saeed verzendt internationaal naar de Golf, Europa, Noord-Amerika, Azië-Pacific en verder.',
      },
    ],
  },
  pt: {
    name: 'Signature Strands Bint Saeed — Joias abaya e para vestuário',
    description:
      'Signature Strands intercambiáveis em pedra natural, feitos à mão em Abu Dhabi — joias abaya e para vestuário para a Marylebone Abaya. Ónix, olho de tigre, sunstone, malaquita, lápis-lazúli, quartzo rosa, jade, ametista e fios Roseta Al Ain. Combina com colares Al Ain. Envio mundial.',
    itemListName: 'Coleção Signature Strands Bint Saeed',
    faq: [
      {
        question: 'O que são os Signature Strands Bint Saeed?',
        answer:
          'Fios de pedra natural destacáveis com detalhes banhados a ouro 18K — joias abaya e para vestuário para a Marylebone Abaya.',
      },
      {
        question: 'O que são joias abaya ou para vestuário?',
        answer:
          'Adornos para roupa, não colares ou pulseiras. Os Signature Strands personalizam a abaya sem comprar nova peça.',
      },
      {
        question: 'A Bint Saeed envia Signature Strands para todo o mundo?',
        answer:
          'Sim. A Bint Saeed envia internacionalmente para o Golfo, Europa, América do Norte, Ásia-Pacífico e além.',
      },
    ],
  },
  id: {
    name: 'Signature Strands Bint Saeed — Perhiasan Abaya & Pakaian',
    description:
      'Signature Strands batu alami yang dapat ditukar, dibuat tangan di Abu Dhabi — perhiasan abaya dan pakaian untuk Marylebone Abaya. Onyx, tiger eye, sunstone, malachite, lapis lazuli, rose quartz, jade, amethyst dan strand Al Ain Rosette. Selaras dengan kalung Al Ain. Pengiriman dunia.',
    itemListName: 'Koleksi Signature Strands Bint Saeed',
    faq: [
      {
        question: 'Apa itu Signature Strands Bint Saeed?',
        answer:
          'Strand batu alami yang dapat dilepas dengan detail berlapis emas 18K — perhiasan abaya dan pakaian untuk Marylebone Abaya.',
      },
      {
        question: 'Apa itu perhiasan abaya atau pakaian?',
        answer:
          'Hiasan untuk pakaian, bukan kalung atau gelang. Signature Strands mempersonalisasi abaya tanpa membeli garment baru.',
      },
      {
        question: 'Apakah Bint Saeed mengirim Signature Strands ke seluruh dunia?',
        answer:
          'Ya. Bint Saeed mengirim internasional ke GCC, Eropa, Amerika Utara, Asia-Pasifik dan seterusnya.',
      },
    ],
  },
  ms: {
    name: 'Signature Strands Bint Saeed — Barang Kemas Abaya & Pakaian',
    description:
      'Signature Strands batu semula jadi boleh ditukar, dibuat tangan di Abu Dhabi — barang kemas abaya dan pakaian untuk Marylebone Abaya. Onyx, tiger eye, sunstone, malachite, lapis lazuli, rose quartz, jade, amethyst dan strand Al Ain Rosette. Serasi dengan rantai Al Ain. Penghantaran dunia.',
    itemListName: 'Koleksi Signature Strands Bint Saeed',
    faq: [
      {
        question: 'Apakah Signature Strands Bint Saeed?',
        answer:
          'Strand batu semula jadi boleh tanggal dengan detail bersalut emas 18K — barang kemas abaya dan pakaian untuk Marylebone Abaya.',
      },
      {
        question: 'Apakah barang kemas abaya atau pakaian?',
        answer:
          'Hiasan untuk pakaian, bukan rantai atau gelang. Signature Strands memperibadikan abaya tanpa membeli garment baharu.',
      },
      {
        question: 'Adakah Bint Saeed menghantar Signature Strands ke seluruh dunia?',
        answer:
          'Ya. Bint Saeed menghantar antarabangsa ke GCC, Eropah, Amerika Utara, Asia-Pasifik dan seterusnya.',
      },
    ],
  },
}

function strandDisplayName(productId: string, locale: AppLocale): string {
  return getStrandPdpContent(productId, locale)?.headline ?? productId
}

/** Localized CollectionPage + FAQPage JSON-LD for /strands. */
export function buildStrandsCollectionJsonLd(locale: AppLocale = 'en'): Record<string, unknown> {
  const copy = COLLECTION_COPY[locale]
  const semantic = getStrandSchemaSemanticLabels(locale)
  const lang = schemaInLanguageForLocale(locale)
  const pageUrl = `${SITE_URL}${localizedPath(locale, '/strands')}`

  const strands = sortAccessoriesByPriceAsc(
    accessories.filter((item) => item.category === 'signature-strands'),
  )

  const collectionNode: Record<string, unknown> = {
    '@type': 'CollectionPage',
    '@id': `${pageUrl}#collection`,
    name: copy.name,
    description: copy.description,
    url: pageUrl,
    inLanguage: lang,
    keywords: mergeAccessorySchemaKeywords(
      getGlobalJewelleryDiscoveryKeywords(locale),
      getJewelleryCategoryDiscoveryKeywords('signature-strands', locale),
      getSignatureStrandSharedKeywords(locale),
    ),
    brand: {
      '@type': 'Brand',
      name: 'Bint Saeed',
      url: SITE_URL,
    },
    about: {
      '@type': 'Thing',
      name: semantic.aboutName,
      description: semantic.aboutDescription,
    },
    isPartOf: {
      '@type': 'Collection',
      name: semantic.alAinCollectionName,
      url: `${SITE_URL}${localizedPath(locale, '/accessories')}`,
    },
    offers: withMerchantListingOfferFields(
      {
        '@type': 'AggregateOffer',
        lowPrice: String(Math.min(...strands.map((s) => s.price))),
        highPrice: String(Math.max(...strands.map((s) => s.price))),
        priceCurrency: 'AED',
        offerCount: String(strands.length),
        availability: 'https://schema.org/InStock',
      },
      {
        price: Math.min(...strands.map((s) => s.price)),
        currency: 'AED',
      },
    ),
    mainEntity: {
      '@type': 'ItemList',
      name: copy.itemListName,
      numberOfItems: strands.length,
      itemListElement: strands.map((product, index) => {
        const pageUrl = accessoryCanonicalUrl(locale, product.id)
        const sku = getAccessorySku(product) ?? product.id
        const primaryImage = product.images[0]
        return {
          '@type': 'ListItem',
          position: index + 1,
          url: pageUrl,
          item: {
            '@type': 'Product',
            name: strandDisplayName(product.id, locale),
            description: product.description,
            url: pageUrl,
            sku,
            mpn: sku,
            image: primaryImage ? absoluteSchemaAssetUrl(primaryImage, SITE_URL) : undefined,
            brand: {
              '@type': 'Brand',
              name: 'Bint Saeed',
              url: SITE_URL,
            },
            category: 'Signature Strands',
            offers: withMerchantListingOfferFields(
              {
                '@type': 'Offer',
                priceCurrency: 'AED',
                price: String(product.price),
                availability: product.inStock
                  ? 'https://schema.org/InStock'
                  : 'https://schema.org/OutOfStock',
                url: pageUrl,
                itemCondition: 'https://schema.org/NewCondition',
                seller: {
                  '@type': 'Organization',
                  name: 'Bint Saeed',
                },
              },
              { price: product.price, currency: 'AED' },
            ),
          },
        }
      }),
    },
  }

  const faqNode = buildFaqPageJsonLd(pageUrl, copy.faq, lang)
  const graph: Record<string, unknown>[] = [collectionNode]
  if (faqNode) graph.push(faqNode)

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  }
}
