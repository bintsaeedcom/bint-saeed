import type { AppLocale } from '@/lib/i18n/routing'

/** Product schema manufacturer — all catalogue items. */
export const SCHEMA_MANUFACTURER = 'Bint Saeed, Abu Dhabi, United Arab Emirates'

/**
 * Shared abaya schema audience per locale (Belgravia, Kensington, and future hero abayas).
 * Luxury and premium terms are both retained for GCC search discovery; product-specific lines may extend this.
 */
export const SHARED_ABAYA_AUDIENCE_EN =
  'Women seeking luxury abayas, designer abayas, modest fashion, luxury modest fashion, premium modest fashion, contemporary outerwear, elegant daily dressing, refined occasionwear, personalised abayas, luxury buyers, premium buyers, abaya buyers, luxury abaya buyers, luxury abaya brand, contemporary premium brand, contemporary fashion house, business women, women in the GCC, business women in the GCC, expats in the GCC, international clients, and pieces designed in Abu Dhabi, United Arab Emirates.'

const SHARED_ABAYA_AUDIENCE: Record<AppLocale, string> = {
  en: SHARED_ABAYA_AUDIENCE_EN,

  ar: 'النساء الباحثات عن عبايات فاخرة، عبايات مصمّمة، أزياء محتشمة، أزياء محتشمة فاخرة، أزياء محتشمة راقية، ملابس خارجية معاصرة، إطلالات يومية أنيقة، ملابس مناسبات راقية، عبايات مخصّصة، مشتريات منتجات الفاخرية، مشتريات العلامات الراقية، مشتريات العبايات، علامة عبايات فاخرة، علامة معاصرة راقية، دار أزياء معاصرة، سيدات الأعمال، المرأة في دول مجلس التعاون الخليجي، سيدات الأعمال في دول مجلس التعاون الخليجي، المغتربات في دول مجلس التعاون الخليجي، العملاء الدوليون، وقطع صُمِّمت في أبوظبي، الإمارات العربية المتحدة.',

  fr: "Femmes à la recherche d'abayas de luxe, d'abayas de créateur, de mode modeste, de mode modeste de luxe, de mode modeste premium, de vêtements d'extérieur contemporains, d'une élégance au quotidien, de tenues d'occasion raffinées, d'abayas personnalisées, acheteuses de luxe, acheteuses premium, acheteuses d'abayas, marque d'abayas de luxe, marque contemporaine premium, maison de mode contemporaine, femmes d'affaires, femmes dans le Golfe, femmes d'affaires dans le Golfe, expatriées dans le Golfe, clientes internationales, et des pièces conçues à Abou Dabi, Émirats arabes unis.",

  it: "Donne alla ricerca di abaya di lusso, abaya di designer, moda modesta, moda modesta di lusso, moda modesta premium, capispalla contemporanei, eleganza quotidiana, abiti da cerimonia raffinati, abaya personalizzate, acquirenti di lusso, acquirenti premium, acquirenti di abaya, brand di abaya di lusso, brand contemporaneo premium, casa di moda contemporanea, donne d'affari, donne nel Golfo, donne d'affari nel Golfo, espatriate nel Golfo, clienti internazionali, e capi disegnati ad Abu Dhabi, Emirati Arabi Uniti.",

  es: 'Mujeres en busca de abayas de lujo, abayas de diseñador, moda modesta, moda modesta de lujo, moda modesta premium, ropa exterior contemporánea, elegancia en el vestir diario, ropa de ocasión refinada, abayas personalizadas, compradoras de lujo, compradoras premium, compradoras de abayas, marca de abayas de lujo, marca contemporánea premium, casa de moda contemporánea, mujeres de negocios, mujeres en el Golfo, mujeres de negocios en el Golfo, expatriadas en el Golfo, clientas internacionales, y prendas diseñadas en Abu Dabi, Emiratos Árabes Unidos.',

  ru: 'Женщины, ищущие роскошные абайи, дизайнерские абайи, скромную моду, роскошную скромную моду, премиальную скромную моду, современную верхнюю одежду, элегантный повседневный стиль, изысканные наряды для особых случаев, персонализированные абайи, покупательниц роскоши, покупательниц премиальных брендов, покупательниц абай, бренд роскошных абай, современный премиальный бренд, современный модный дом, деловых женщин, женщин стран Залива, деловых женщин стран Залива, экспаток стран Залива, международных клиентов, а также изделия, созданные в Абу-Даби, Объединённых Арабских Эмиратах.',

  zh: '寻求奢华阿巴亚、设计师阿巴亚、端庄时尚、奢华端庄时尚、高端端庄时尚、现代外套、优雅日常装扮、精致晚宴装、个性化阿巴亚的女性，以及奢侈品买家、高端品牌买家、阿巴亚购买者、奢华阿巴亚品牌、当代高端品牌、当代时装屋、职业女性、海湾地区女性、海湾地区职业女性、海湾外籍人士、国际客户，以及在阿联酋阿布扎比设计的服饰。',

  de: 'Frauen auf der Suche nach luxuriösen Abayas, Designer-Abayas, bescheidener Mode, luxuriöser bescheidener Mode, Premium-bescheidener Mode, zeitgenössischer Oberbekleidung, eleganter Alltagskleidung, raffinierter Anlasskleidung, personalisierten Abayas, Luxuskäuferinnen, Premium-Käuferinnen, Abaya-Käuferinnen, Luxus-Abaya-Marke, zeitgenössische Premium-Marke, zeitgenössisches Modehaus, Geschäftsfrauen, Frauen in der Golfregion, Geschäftsfrauen in der Golfregion, Expatriates in der Golfregion, internationalen Kundinnen sowie Stücken, entworfen in Abu Dhabi, Vereinigte Arabische Emirate.',

  nl: 'Vrouwen die op zoek zijn naar luxe abayas, designer abayas, bescheiden mode, luxe bescheiden mode, premium bescheiden mode, eigentijdse bovenkleding, elegante dagelijkse uitstraling, verfijnde gelegenheidskleding, gepersonaliseerde abayas, luxe kopers, premium kopers, abaya-kopers, luxe abaya merk, eigentijds premium merk, eigentijds modehuis, zakenvrouwen, vrouwen in de Golfstaten, zakenvrouwen in de Golfstaten, expats in de Golfstaten, internationale klanten en stukken ontworpen in Abu Dhabi, Verenigde Arabische Emiraten.',

  pt: 'Mulheres em busca de abayas de luxo, abayas de designer, moda modesta, moda modesta de luxo, moda modesta premium, roupa exterior contemporânea, elegância no vestir diário, trajes de ocasião refinados, abayas personalizadas, compradoras de luxo, compradoras premium, compradoras de abayas, marca de abayas de luxo, marca contemporânea premium, casa de moda contemporânea, mulheres de negócios, mulheres no Golfo, mulheres de negócios no Golfo, expatriadas no Golfo, clientes internacionais, e peças desenhadas em Abu Dhabi, Emirados Árabes Unidos.',

  id: 'Wanita yang mencari abaya mewah, abaya desainer, busana modest, busana modest mewah, busana modest premium, pakaian luar kontemporer, penampilan harian yang elegan, busana acara yang halus, abaya yang dipersonalisasi, pembeli barang mewah, pembeli merek premium, pembeli abaya, merek abaya mewah, merek kontemporer premium, rumah mode kontemporer, wanita karier, wanita di kawasan GCC, wanita karier di kawasan GCC, ekspatriat di kawasan GCC, klien internasional, dan busana yang dirancang di Abu Dhabi, Uni Emirat Arab.',

  ms: 'Wanita yang mencari abaya mewah, abaya pereka, fesyen sopan, fesyen sopan mewah, fesyen sopan premium, pakaian luar kontemporari, pemakaian harian yang anggun, pakaian majlis yang halus, abaya diperibadikan, pembeli produk mewah, pembeli jenama premium, pembeli abaya, jenama abaya mewah, jenama kontemporari premium, rumah fesyen kontemporari, wanita profesional, wanita di kawasan GCC, wanita profesional di kawasan GCC, ekspatriat di kawasan GCC, pelanggan antarabangsa, dan busana yang direka di Abu Dhabi, Emiriah Arab Bersatu.',
}

export function getSharedAbayaSchemaAudience(locale: AppLocale = 'en'): string {
  return SHARED_ABAYA_AUDIENCE[locale] ?? SHARED_ABAYA_AUDIENCE_EN
}
