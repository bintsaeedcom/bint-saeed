import type { AppLocale } from '@/lib/i18n/routing'
import type { Accessory } from '@/data/accessories'
import type { ProductFaqItem } from '@/lib/products/productSchemaMeta'
import { getSignatureStrandFaq } from '@/lib/accessories/signatureStrandFaqI18n'

export type SignatureStrandSchemaFacts = {
  productType: string
  productCategory: string
  beadConstruction: string
  attachment: string
  designedFor: string
  madeIn: string
  care: string
  suitableFor: string
  faq: ProductFaqItem[]
}

type FactsWithoutFaq = Omit<SignatureStrandSchemaFacts, 'faq'>

const FACTS_EN: FactsWithoutFaq = {
  productType:
    'Detachable natural stone Signature Strand — abaya jewellery and garment jewellery with 18K gold-plated clip hardware, hand-assembled in Abu Dhabi for compatible Bint Saeed garments.',
  productCategory:
    'Signature Strands, Abaya Jewellery, Garment Jewellery, Garment Adornment, Interchangeable Abaya Strands, Natural Stone Bead Strands, Abaya Accessories, Modest Fashion Jewellery, Luxury Abaya Accessories, Al Ain Rosette Strands, Marylebone Abaya Strands, Cuff Strands, Clip-On Garment Jewellery',
  beadConstruction: 'Hand-strung natural stone beads with faceted hematite accents and 18K gold-plated clip',
  attachment: 'Concealed clip-on attachment for compatible Bint Saeed garment cuffs',
  designedFor:
    'Marylebone Abaya and compatible Bint Saeed garments with interchangeable strand attachment system',
  madeIn: 'Abu Dhabi, United Arab Emirates',
  care:
    'Remove before washing or dry cleaning. Avoid water, perfume on stones, and prolonged sunlight. Store in Bint Saeed presentation box.',
  suitableFor:
    'Women styling modest fashion worldwide, abaya wearers, luxury garment jewellery collectors, coordinated abaya and jewellery looks, GCC and international clients, gifts for wife or mother, evening and everyday abaya personalisation, and clients seeking interchangeable abaya jewellery without buying a new garment.',
}

const FACTS_AR: FactsWithoutFaq = {
  productType:
    'ستراند التوقيع القابل للفصل من أحجار طبيعية — مجوهرات عباءة ومجوهرات ملابس مع مشبك مطلي ذهباً عيار 18 قيراط، يُجمَّع يدوياً في أبوظبي لقطع Bint Saeed المتوافقة.',
  productCategory:
    'ستراندات التوقيع، مجوهرات العباءة، مجوهرات الملابس، زينة الملابس، سلاسل عباءة قابلة للتبديل، سلاسل خرز أحجار طبيعية، إكسسوارات العباءة، مجوهرات أزياء محتشمة، إكسسوارات عباءة فاخرة، ستراندات Al Ain Rosette، ستراندات Marylebone Abaya، ستراندات الأصفاد، مجوهرات ملابس قابلة للتثبيت',
  beadConstruction:
    'خرز أحجار طبيعية مُرَصَّع يدوياً مع لمسات هيماتيت مقطّع ومشبك مطلي ذهباً عيار 18 قيراط',
  attachment: 'تثبيت مخفي بطريقة المشبك لأساور قطع Bint Saeed المتوافقة',
  designedFor:
    'عباءة Marylebone Abaya وقطع Bint Saeed المتوافقة بنظام تثبيت ستراند قابل للتبديل',
  madeIn: 'أبوظبي، الإمارات العربية المتحدة',
  care:
    'أزيلي قبل الغسل أو التنظيف الجاف. تجنّبي الماء والعطر على الأحجار وأشعة الشمس المطوّلة. احفظي في علبة تقديم Bint Saeed.',
  suitableFor:
    'النساء اللواتي يرتدين أزياء محتشمة حول العالم، حاملات العباءات، جامعات مجوهرات الملابس الفاخرة، إطلالات عباءة ومجوهرات منسّقة، عميلات الخليج والأسواق الدولية، هدايا للزوجة أو الأم، تخصيص العباءة للمساء واليوم، ومن يبحثن عن مجوهرات عباءة قابلة للتبديل دون شراء قطعة جديدة.',
}

const FACTS_FR: FactsWithoutFaq = {
  productType:
    "Signature Strand amovible en pierre naturelle — bijoux d'abaya et bijoux pour vêtements avec attache clip plaquée or 18K, assemblé à la main à Abu Dhabi pour les vêtements Bint Saeed compatibles.",
  productCategory:
    "Signature Strands, Bijoux d'abaya, Bijoux pour vêtements, Ornement de vêtement, Fils d'abaya interchangeables, Fils de perles en pierres naturelles, Accessoires abaya, Bijoux mode modeste, Accessoires abaya de luxe, Fils Al Ain Rosette, Fils Marylebone Abaya, Fils pour manchettes, Bijoux pour vêtements à clip",
  beadConstruction:
    'Perles en pierre naturelle enfilées à la main avec accents en hématite facettée et clip plaqué or 18K',
  attachment: 'Attache clip dissimulée pour manchettes de vêtements Bint Saeed compatibles',
  designedFor:
    "Abaya Marylebone et vêtements Bint Saeed compatibles avec système d'attache de fil interchangeable",
  madeIn: 'Abu Dhabi, Émirats arabes unis',
  care:
    "Retirez avant le lavage ou le nettoyage à sec. Évitez l'eau, le parfum sur les pierres et une exposition prolongée au soleil. Rangez dans l'écrin Bint Saeed.",
  suitableFor:
    "Femmes adoptant la mode modeste dans le monde entier, porteuses d'abaya, collectionneuses de bijoux pour vêtements de luxe, looks abaya et bijoux coordonnés, clientes du Golfe et internationales, cadeaux pour épouse ou mère, personnalisation d'abaya pour le soir et le quotidien, et clientes recherchant des bijoux d'abaya interchangeables sans acheter un nouveau vêtement.",
}

const FACTS_IT: FactsWithoutFaq = {
  productType:
    'Signature Strand staccabile in pietra naturale — gioielli abaya e gioielli per capi con clip placcato oro 18K, assemblato a mano ad Abu Dhabi per capi Bint Saeed compatibili.',
  productCategory:
    'Signature Strands, Gioielli abaya, Gioielli per capi, Ornamento per capi, Fili abaya intercambiabili, Fili perle pietre naturali, Accessori abaya, Gioielli moda modesta, Accessori abaya di lusso, Fili Al Ain Rosette, Fili Marylebone Abaya, Fili per polsini, Gioielli per capi a clip',
  beadConstruction:
    'Perle in pietra naturale infilate a mano con accenti in ematite sfaccettata e clip placcato oro 18K',
  attachment: 'Attacco a clip nascosto per polsini di capi Bint Saeed compatibili',
  designedFor:
    'Abaya Marylebone e capi Bint Saeed compatibili con sistema di attacco filo intercambiabile',
  madeIn: 'Abu Dhabi, Emirati Arabi Uniti',
  care:
    'Rimuovere prima del lavaggio o della pulitura a secco. Evitare acqua, profumo sulle pietre e prolungata esposizione al sole. Conservare nella confezione Bint Saeed.',
  suitableFor:
    'Donne che indossano moda modesta in tutto il mondo, portatrici di abaya, collezioniste di gioielli per capi di lusso, look abaya e gioielli coordinati, clienti GCC e internazionali, regali per moglie o madre, personalizzazione abaya per sera e quotidiano, e clienti che cercano gioielli abaya intercambiabili senza acquistare un nuovo capo.',
}

const FACTS_ES: FactsWithoutFaq = {
  productType:
    'Signature Strand desmontable de piedra natural — joyería abaya y joyería para prendas con clip chapado en oro de 18K, ensamblado a mano en Abu Dabi para prendas Bint Saeed compatibles.',
  productCategory:
    'Signature Strands, Joyería abaya, Joyería para prendas, Adorno de prenda, Hilos abaya intercambiables, Hilos de cuentas de piedra natural, Accesorios abaya, Joyería moda modesta, Accesorios abaya de lujo, Hilos Al Ain Rosette, Hilos Marylebone Abaya, Hilos para puños, Joyería para prendas con clip',
  beadConstruction:
    'Cuentas de piedra natural ensartadas a mano con acentos de hematita facetada y clip chapado en oro de 18K',
  attachment: 'Fijación oculta con clip para puños de prendas Bint Saeed compatibles',
  designedFor:
    'Abaya Marylebone y prendas Bint Saeed compatibles con sistema de fijación de hilo intercambiable',
  madeIn: 'Abu Dabi, Emiratos Árabes Unidos',
  care:
    'Retire antes de lavar o limpiar en seco. Evite el agua, el perfume sobre las piedras y la exposición prolongada al sol. Guarde en la caja de presentación Bint Saeed.',
  suitableFor:
    'Mujeres que visten moda modesta en todo el mundo, portadoras de abaya, coleccionistas de joyería para prendas de lujo, looks abaya y joyería coordinados, clientas del GCC e internacionales, regalos para esposa o madre, personalización de abaya para noche y día a día, y clientas que buscan joyería abaya intercambiable sin comprar una prenda nueva.',
}

const FACTS_RU: FactsWithoutFaq = {
  productType:
    'Съёмный Signature Strand из натурального камня — украшения для абайи и одежды с застёжкой-клипсой с позолотой 18K, собранные вручную в Абу-Даби для совместимых изделий Bint Saeed.',
  productCategory:
    'Signature Strands, Украшения для абайи, Украшения для одежды, Украшение для одежды, Сменные нити для абайи, Нити из бусин натурального камня, Аксессуары для абайи, Украшения скромной моды, Люксовые аксессуары для абайи, Нити Al Ain Rosette, Нити Marylebone Abaya, Нити для манжет, Украшения для одежды на клипсе',
  beadConstruction:
    'Бусины из натурального камня, нанизанные вручную, с фасетированными акцентами из гематита и клипсой с позолотой 18K',
  attachment: 'Скрытое крепление на клипсе для манжет совместимых изделий Bint Saeed',
  designedFor:
    'Абайя Marylebone и совместимые изделия Bint Saeed со сменной системой крепления нити',
  madeIn: 'Абу-Даби, Объединённые Арабские Эмираты',
  care:
    'Снимайте перед стиркой или химчисткой. Избегайте воды, духов на камнях и длительного солнечного света. Храните в фирменной коробке Bint Saeed.',
  suitableFor:
    'Женщины, выбирающие скромную моду по всему миру, носительницы абайи, коллекционерки украшений для одежды класса люкс, согласованные образы абайи и украшений, клиентки из стран Персидского залива и международные покупательницы, подарки жене или матери, персонализация абайи для вечера и повседневности, и те, кто ищет сменные украшения для абайи без покупки нового изделия.',
}

const FACTS_ZH: FactsWithoutFaq = {
  productType:
    '可拆卸天然石 Signature Strand — 长袍珠宝与服装珠宝，配18K镀金夹扣五金，在阿布扎比手工组装，适用于兼容的 Bint Saeed 服装。',
  productCategory:
    'Signature Strands、长袍珠宝、服装珠宝、服装装饰、可更换长袍链饰、天然石珠链饰、长袍配饰、端庄时尚珠宝、奢华长袍配饰、Al Ain Rosette 链饰、Marylebone Abaya 链饰、袖口链饰、夹扣式服装珠宝',
  beadConstruction: '手工串制天然石珠，配刻面赤铁矿点缀与18K镀金夹扣',
  attachment: '适用于兼容 Bint Saeed 服装袖口的隐藏式夹扣固定',
  designedFor: 'Marylebone Abaya 及配备可更换链饰固定系统的兼容 Bint Saeed 服装',
  madeIn: '阿布扎比，阿拉伯联合酋长国',
  care: '洗涤或干洗前请取下。避免水、香水接触宝石及长时间日晒。存放于 Bint Saeed 礼盒中。',
  suitableFor:
    '全球穿着端庄时尚的女性、长袍穿着者、奢华服装珠宝收藏者、协调的长袍与珠宝造型、海湾及国际客户、赠予妻子或母亲的礼物、晚间与日常长袍个性化，以及希望无需购买新服装即可获得可更换长袍珠宝的客户。',
}

const FACTS_DE: FactsWithoutFaq = {
  productType:
    'Abnehmbarer Signature Strand aus Naturstein — Abaya-Schmuck und Kleidungsschmuck mit 18K vergoldeter Clip-Befestigung, handmontiert in Abu Dhabi für kompatible Bint Saeed Kleidungsstücke.',
  productCategory:
    'Signature Strands, Abaya-Schmuck, Kleidungsschmuck, Kleidungsverzierung, Austauschbare Abaya-Stränge, Natursteinperlen-Stränge, Abaya-Accessoires, Bescheidene Mode-Schmuck, Luxus-Abaya-Accessoires, Al Ain Rosette Stränge, Marylebone Abaya Stränge, Manschetten-Stränge, Clip-On Kleidungsschmuck',
  beadConstruction:
    'Handaufgefädelte Natursteinperlen mit facettierten Hämatit-Akzenten und 18K vergoldetem Clip',
  attachment: 'Verdeckte Clip-Befestigung für Manschetten kompatibler Bint Saeed Kleidungsstücke',
  designedFor:
    'Marylebone Abaya und kompatible Bint Saeed Kleidungsstücke mit austauschbarem Strang-Befestigungssystem',
  madeIn: 'Abu Dhabi, Vereinigte Arabische Emirate',
  care:
    'Vor dem Waschen oder chemischen Reinigen entfernen. Wasser, Parfum auf Steinen und längere Sonneneinstrahlung vermeiden. In der Bint Saeed Präsentationsbox aufbewahren.',
  suitableFor:
    'Frauen weltweit, die bescheidene Mode tragen, Abaya-Trägerinnen, Sammlerinnen von Luxus-Kleidungsschmuck, abgestimmte Abaya- und Schmuck-Looks, GCC- und internationale Kundinnen, Geschenke für Ehefrau oder Mutter, Abaya-Personalisierung für Abend und Alltag, und Kundinnen, die austauschbaren Abaya-Schmuck ohne Neukauf eines Kleidungsstücks suchen.',
}

const FACTS_NL: FactsWithoutFaq = {
  productType:
    'Afneembare Signature Strand van natuursteen — abaya sieraden en kleding sieraden met 18K vergulde clip-hardware, handmatig geassembleerd in Abu Dhabi voor compatibele Bint Saeed kledingstukken.',
  productCategory:
    'Signature Strands, Abaya sieraden, Kleding sieraden, Kledingversiering, Verwisselbare abaya strengen, Natuursteen kralen strengen, Abaya accessoires, Bescheiden mode sieraden, Luxe abaya accessoires, Al Ain Rosette strengen, Marylebone Abaya strengen, Manchet strengen, Clip-on kleding sieraden',
  beadConstruction:
    'Hand geregen natuursteen kralen met gefacetteerde hematiet accenten en 18K vergulde clip',
  attachment: 'Verborgen clip-bevestiging voor manchetten van compatibele Bint Saeed kledingstukken',
  designedFor:
    'Marylebone Abaya en compatibele Bint Saeed kledingstukken met verwisselbaar streng-bevestigingssysteem',
  madeIn: 'Abu Dhabi, Verenigde Arabische Emiraten',
  care:
    'Verwijder voor het wassen of chemisch reinigen. Vermijd water, parfum op stenen en langdurige zonlicht. Bewaar in de Bint Saeed presentatiedoos.',
  suitableFor:
    'Vrouwen wereldwijd die bescheiden mode dragen, abaya-draagsters, verzamelaars van luxe kleding sieraden, gecoördineerde abaya- en sieradenlooks, GCC- en internationale klanten, cadeaus voor echtgenote of moeder, abaya-personalisatie voor avond en dagelijks gebruik, en klanten die verwisselbare abaya sieraden zoeken zonder een nieuw kledingstuk te kopen.',
}

const FACTS_PT: FactsWithoutFaq = {
  productType:
    'Signature Strand destacável em pedra natural — joias abaya e joias para vestuário com fecho clip folheado a ouro 18K, montado à mão em Abu Dhabi para peças Bint Saeed compatíveis.',
  productCategory:
    'Signature Strands, Joias abaya, Joias para vestuário, Adorno de peça, Fios abaya intercambiáveis, Fios de contas de pedra natural, Acessórios abaya, Joias moda modesta, Acessórios abaya de luxo, Fios Al Ain Rosette, Fios Marylebone Abaya, Fios para punhos, Joias para vestuário com clip',
  beadConstruction:
    'Contas de pedra natural enfiadas à mão com acentos de hematite facetada e clip folheado a ouro 18K',
  attachment: 'Fixação oculta com clip para punhos de peças Bint Saeed compatíveis',
  designedFor:
    'Abaya Marylebone e peças Bint Saeed compatíveis com sistema de fixação de fio intercambiável',
  madeIn: 'Abu Dhabi, Emirados Árabes Unidos',
  care:
    'Remova antes de lavar ou limpar a seco. Evite água, perfume sobre as pedras e exposição prolongada ao sol. Guarde na caixa de apresentação Bint Saeed.',
  suitableFor:
    'Mulheres que vestem moda modesta em todo o mundo, portadoras de abaya, colecionadoras de joias para vestuário de luxo, looks abaya e joias coordenados, clientes do GCC e internacionais, presentes para esposa ou mãe, personalização de abaya para noite e dia a dia, e clientes que procuram joias abaya intercambiáveis sem comprar uma peça nova.',
}

const FACTS_ID: FactsWithoutFaq = {
  productType:
    'Signature Strand batu alami yang dapat dilepas — perhiasan abaya dan perhiasan pakaian dengan klip berlapis emas 18K, dirakit tangan di Abu Dhabi untuk pakaian Bint Saeed yang kompatibel.',
  productCategory:
    'Signature Strands, Perhiasan Abaya, Perhiasan Pakaian, Hiasan Pakaian, Strand Abaya yang Dapat Ditukar, Strand Manik Batu Alam, Aksesori Abaya, Perhiasan Mode Modest, Aksesori Abaya Mewah, Strand Al Ain Rosette, Strand Marylebone Abaya, Strand Manset, Perhiasan Pakaian Clip-On',
  beadConstruction:
    'Manik batu alami yang dirangkai tangan dengan aksen hematite berfaset dan klip berlapis emas 18K',
  attachment: 'Pemasangan clip tersembunyi untuk manset pakaian Bint Saeed yang kompatibel',
  designedFor:
    'Marylebone Abaya dan pakaian Bint Saeed yang kompatibel dengan sistem pemasangan strand yang dapat ditukar',
  madeIn: 'Abu Dhabi, Uni Emirat Arab',
  care:
    'Lepaskan sebelum mencuci atau dry clean. Hindari air, parfum pada batu, dan paparan sinar matahari berkepanjangan. Simpan di kotak presentasi Bint Saeed.',
  suitableFor:
    'Perempuan yang mengenakan mode modest di seluruh dunia, pemakai abaya, kolektor perhiasan pakaian mewah, tampilan abaya dan perhiasan yang selaras, klien GCC dan internasional, hadiah untuk istri atau ibu, personalisasi abaya untuk malam dan sehari-hari, serta klien yang mencari perhiasan abaya yang dapat ditukar tanpa membeli pakaian baru.',
}

const FACTS_MS: FactsWithoutFaq = {
  productType:
    'Signature Strand batu semula jadi boleh tanggal — barang kemas abaya dan barang kemas pakaian dengan klip bersalut emas 18K, dipasang tangan di Abu Dhabi untuk pakaian Bint Saeed yang serasi.',
  productCategory:
    'Signature Strands, Barang Kemas Abaya, Barang Kemas Pakaian, Hiasan Pakaian, Strand Abaya Boleh Ditukar, Strand Manik Batu Semula Jadi, Aksesori Abaya, Barang Kemas Fesyen Modest, Aksesori Abaya Mewah, Strand Al Ain Rosette, Strand Marylebone Abaya, Strand Cuff, Barang Kemas Pakaian Clip-On',
  beadConstruction:
    'Manik batu semula jadi yang dirangkai tangan dengan aksen hematite berfaset dan klip bersalut emas 18K',
  attachment: 'Pemasangan clip tersembunyi untuk cuff pakaian Bint Saeed yang serasi',
  designedFor:
    'Marylebone Abaya dan pakaian Bint Saeed yang serasi dengan sistem pemasangan strand boleh ditukar',
  madeIn: 'Abu Dhabi, Emiriah Arab Bersatu',
  care:
    'Tanggalkan sebelum mencuci atau mencuci kering. Elakkan air, minyak wangi pada batu, dan pendedahan cahaya matahari berpanjangan. Simpan di kotak pembentangan Bint Saeed.',
  suitableFor:
    'Wanita yang mengenakan fesyen modest di seluruh dunia, pemakai abaya, pengumpul barang kemas pakaian mewah, penampilan abaya dan barang kemas yang selaras, pelanggan GCC dan antarabangsa, hadiah untuk isteri atau ibu, pemeribadian abaya untuk malam dan harian, serta pelanggan yang mencari barang kemas abaya boleh ditukar tanpa membeli pakaian baharu.',
}

const FACTS_BY_LOCALE: Record<AppLocale, FactsWithoutFaq> = {
  en: FACTS_EN,
  ar: FACTS_AR,
  fr: FACTS_FR,
  it: FACTS_IT,
  es: FACTS_ES,
  ru: FACTS_RU,
  zh: FACTS_ZH,
  de: FACTS_DE,
  nl: FACTS_NL,
  pt: FACTS_PT,
  id: FACTS_ID,
  ms: FACTS_MS,
}

const AUDIENCE: Record<AppLocale, string> = {
  en: 'Women worldwide seeking abaya jewellery, garment jewellery, interchangeable abaya strands, natural stone bead strands, modest fashion jewellery, luxury abaya accessories, coordinated Al Ain jewellery sets, Marylebone Abaya styling, Emirati designer accessories, international shipping from Abu Dhabi, GCC clients, expatriates, and gift buyers across the UAE, Saudi Arabia, Qatar, Kuwait, UK, Europe, North America, Asia-Pacific, and beyond.',
  ar: 'النساء حول العالم الباحثات عن مجوهرات العباءة، مجوهرات الملابس، سلاسل عباءة قابلة للتبديل، سلاسل خرز أحجار طبيعية، مجوهرات أزياء محتشمة، إكسسوارات عباءة فاخرة، تنسيق مجوهرات القوع، إطلالات ماريلبون، إكسسوارات مصمّم إماراتية، شحن دولي من أبوظبي، عملاء الخليج والمغتربات والهدايا في الإمارات والسعودية وقطر والكويت وبريطانيا وأوروبا وأمريكا وآسيا والمحيط الهادئ وما بعدها.',
  fr: "Femmes du monde entier recherchant bijoux d'abaya, bijoux pour vêtements, fils d'abaya interchangeables, fils de perles en pierres naturelles, bijoux mode modeste, accessoires abaya de luxe, sets Al Ain coordonnés, style Marylebone Abaya, accessoires designer émiratis, livraison internationale depuis Abou Dabi, clientes du Golfe, expatriées et acheteuses de cadeaux aux Émirats, en Arabie saoudite, au Qatar, au Koweït, au Royaume-Uni, en Europe, en Amérique du Nord, en Asie-Pacifique et au-delà.",
  it: 'Donne in tutto il mondo alla ricerca di gioielli abaya, gioielli per capi, fili abaya intercambiabili, fili perle pietre naturali, gioielli moda modesta, accessori abaya di lusso, set Al Ain coordinati, styling Marylebone Abaya, accessori designer emiratini, spedizione internazionale da Abu Dhabi, clienti GCC, espatriate e acquirenti di regali negli Emirati, Arabia Saudita, Qatar, Kuwait, Regno Unito, Europa, Nord America, Asia-Pacifico e oltre.',
  es: 'Mujeres en todo el mundo que buscan joyería abaya, joyería para prendas, hilos abaya intercambiables, hilos de cuentas de piedra natural, joyería moda modesta, accesorios abaya de lujo, sets Al Ain coordinados, estilo Marylebone Abaya, accesorios diseñador emiratí, envío internacional desde Abu Dabi, clientas del GCC, expatriadas y compradoras de regalos en los EAU, Arabia Saudita, Catar, Kuwait, Reino Unido, Europa, Norteamérica, Asia-Pacífico y más allá.',
  ru: 'Женщины по всему миру, ищущие украшения для абайи, украшения для одежды, сменные нити для абайи, нити из натуральных камней, украшения скромной моды, люксовые аксессуары для абайи, координированные наборы Al Ain, стилизацию Marylebone Abaya, дизайнерские аксессуары ОАЭ, международную доставку из Абу-Даби, клиенток из стран Персидского залива, экспатрианток и покупательниц подарков в ОАЭ, Саудовской Аравии, Катаре, Кувейте, Великобритании, Европе, Северной Америке, Азиатско-Тихоокеанском регионе и за их пределами.',
  zh: '全球寻求长袍珠宝、服装珠宝、可更换长袍链饰、天然石珠链饰、端庄时尚珠宝、奢华长袍配饰、Al Ain协调套装、Marylebone长袍造型、阿联酋设计师配饰及阿布扎比国际配送的女性客户，涵盖海湾客户、侨居女性及在阿联酋、沙特阿拉伯、卡塔尔、科威特、英国、欧洲、北美、亚太及其他地区的礼品购买者。',
  de: 'Frauen weltweit auf der Suche nach Abaya-Schmuck, Kleidungsschmuck, austauschbaren Abaya-Strängen, Natursteinperlen-Strängen, bescheidener Mode-Schmuck, Luxus-Abaya-Accessoires, koordinierten Al-Ain-Sets, Marylebone-Abaya-Styling, emiratischen Designer-Accessoires und internationalem Versand aus Abu Dhabi, GCC-Kundinnen, Expatriates und Geschenkkäuferinnen in den VAE, Saudi-Arabien, Katar, Kuwait, Großbritannien, Europa, Nordamerika, Asien-Pazifik und darüber hinaus.',
  nl: 'Vrouwen wereldwijd die abaya sieraden, kleding sieraden, verwisselbare abaya strengen, natuursteen kralen strengen, bescheiden mode sieraden, luxe abaya accessoires, gecoördineerde Al Ain sets, Marylebone abaya styling, emiratische designer accessoires en internationale verzending vanuit Abu Dhabi zoeken, GCC-klanten, expats en cadeaukopers in de VAE, Saoedi-Arabië, Qatar, Koeweit, het VK, Europa, Noord-Amerika, Azië-Pacific en daarbuiten.',
  pt: 'Mulheres em todo o mundo que procuram joias abaya, joias para vestuário, fios abaya intercambiáveis, fios de contas de pedra natural, joias moda modesta, acessórios abaya de luxo, sets Al Ain coordenados, styling Marylebone Abaya, acessórios designer emiratí, envio internacional de Abu Dhabi, clientes do GCC, expatriadas e compradoras de presentes nos EAU, Arábia Saudita, Catar, Kuwait, Reino Unido, Europa, América do Norte, Ásia-Pacífico e além.',
  id: 'Perempuan di seluruh dunia yang mencari perhiasan abaya, perhiasan pakaian, strand abaya yang dapat ditukar, strand manik batu alami, perhiasan mode modest, aksesori abaya mewah, set perhiasan Al Ain yang selaras, gaya Marylebone Abaya, aksesori desainer Emirati, pengiriman internasional dari Abu Dhabi, klien GCC, ekspatriat, dan pembeli hadiah di UEA, Arab Saudi, Qatar, Kuwait, Inggris, Eropa, Amerika Utara, Asia-Pasifik, dan seterusnya.',
  ms: 'Wanita di seluruh dunia yang mencari barang kemas abaya, barang kemas pakaian, strand abaya boleh ditukar, strand manik batu semula jadi, barang kemas fesyen modest, aksesori abaya mewah, set barang kemas Al Ain yang selaras, gaya Marylebone Abaya, aksesori pereka Emirati, penghantaran antarabangsa dari Abu Dhabi, pelanggan GCC, ekspatriat, dan pembeli hadiah di UAE, Arab Saudi, Qatar, Kuwait, UK, Eropah, Amerika Utara, Asia-Pasifik, dan seterusnya.',
}

export function getSignatureStrandSchemaAudience(locale: AppLocale = 'en'): string {
  return AUDIENCE[locale]
}

export function getSignatureStrandSchemaFacts(
  accessory: Accessory,
  locale: AppLocale = 'en',
): SignatureStrandSchemaFacts {
  const faq = getSignatureStrandFaq(accessory.id, locale)
  return { ...FACTS_BY_LOCALE[locale], faq }
}
