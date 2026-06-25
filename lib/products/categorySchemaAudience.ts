import type { AppLocale } from '@/lib/i18n/routing'
import { getSchemaAudienceType } from '@/lib/brand/brandPositioning'

/** Rich discovery audience for non-hero dress PDPs (Covent Garden Long, Hampstead). */
export const DRESS_SCHEMA_AUDIENCE: Record<AppLocale, string> = {
  en: 'Women seeking designer dresses, luxury dresses, elegant dresses, evening dresses, occasion dresses, travel dresses, contemporary womenswear, luxury modest fashion, women in the GCC and UAE, international travellers, business women, creative professionals, luxury buyers, and women interested in Emirati heritage and timeless wardrobes. Men seeking luxury gifts for their wife, daughter, mother, fiancée, girlfriend, or sister.',
  ar: 'النساء الباحثات عن فساتين مصمّمة، فساتين فاخرة، فساتين أنيقة، فساتين مسائية، فساتين مناسبات، فساتين سفر، أزياء نسائية معاصرة، أزياء محتشمة فاخرة، النساء في دول مجلس التعاون والإمارات، المسافرات الدوليات، سيدات الأعمال، المبدعات، مشتريات الفاخر، والمهتمات بالتراث الإماراتي والخزائن الخالدة. الرجال الباحثون عن هدايا فاخرة للزوجة أو الابنة أو الأم أو الخطيبة أو الصديقة أو الأخت.',
  fr: 'Femmes en quête de robes de créateur, robes de luxe, robes élégantes, robes de soirée, robes de cérémonie, robes de voyage, prêt-à-porter féminin contemporain, mode modeste de luxe, femmes du Golfe et des EAU, voyageuses internationales, femmes d’affaires, professionnelles créatives, acheteuses de luxe, et femmes intéressées par le patrimoine émirati et des garde-robes intemporelles. Hommes en quête de cadeaux de luxe pour leur épouse, fille, mère, fiancée, amie ou sœur.',
  it: 'Donne in cerca di abiti designer, abiti di lusso, abiti eleganti, abiti da sera, abiti da occasione, abiti da viaggio, abbigliamento femminile contemporaneo, moda modesta di lusso, donne nel Golfo e negli EAU, viaggiatrici internazionali, donne d’affari, professioniste creative, acquirenti di lusso, e donne interessate al patrimonio emiratino e guardaroba senza tempo. Uomini in cerca di regali di lusso per moglie, figlia, madre, fidanzata, partner o sorella.',
  es: 'Mujeres que buscan vestidos de diseñador, vestidos de lujo, vestidos elegantes, vestidos de noche, vestidos de ocasión, vestidos de viaje, moda femenina contemporánea, moda modesta de lujo, mujeres en el Golfo y los EAU, viajeras internacionales, mujeres de negocios, profesionales creativas, compradoras de lujo, y mujeres interesadas en el patrimonio emiratí y armarios atemporales. Hombres que buscan regalos de lujo para esposa, hija, madre, prometida, novia o hermana.',
  ru: 'Женщины, ищущие дизайнерские, роскошные, элегантные, вечерние и повседневные платья, платья для путешествий, современную женскую моду, роскошную скромную моду, женщин в странах Залива и ОАЭ, международных путешественниц, деловых женщин, творческих профессионалок, покупательниц люкса, интересующихся эмиратским наследием и вневременным гардеробом. Мужчины, ищущие роскошные подарки для жены, дочери, матери, невесты, девушки или сестры.',
  zh: '寻求设计师、奢华、优雅、晚宴、场合与旅行连衣裙及当代女装、奢华端庄时尚的海湾与阿联酋女性、国际旅行者、职业女性、创意专业人士、奢侈品买家，以及对阿联酋传统与隽永衣橱感兴趣的女性。为妻子、女儿、母亲、未婚妻、女友或姐妹寻找奢华礼品的男性。',
  de: 'Frauen, die Designer-, Luxus-, elegante, Abend-, Anlass- und Reisekleider, zeitgenössische Damenmode und luxuriöse bescheidene Mode suchen — Frauen im Golf und in den VAE, internationale Reisende, Geschäftsfrauen, Kreativprofis, Luxuskäuferinnen und Frauen mit Interesse am emiratischen Erbe und zeitlosen Garderoben. Männer, die Luxusgeschenke für Ehefrau, Tochter, Mutter, Verlobte, Freundin oder Schwester suchen.',
  nl: 'Vrouwen die designerjurken, luxe jurken, elegante jurken, avondjurken, gelegenheidsjurken, reisjurken, eigentijdse damesmode en luxe bescheiden mode zoeken — vrouwen in de Golfstaten en VAE, internationale reizigers, zakenvrouwen, creatieve professionals, luxe kopers, en vrouwen geïnteresseerd in Emiratisch erfgoed en tijdloze garderobes. Mannen die luxe cadeaus zoeken voor echtgenote, dochter, moeder, verloofde, vriendin of zus.',
  pt: 'Mulheres que procuram vestidos de designer, vestidos de luxo, vestidos elegantes, vestidos de noite, vestidos de ocasião, vestidos de viagem, moda feminina contemporânea, moda modesta de luxo, mulheres no Golfo e nos EAU, viajantes internacionais, mulheres de negócios, profissionais criativas, compradoras de luxo, e mulheres interessadas no património emirati e guarda-roupas intemporais. Homens que procuram presentes de luxo para esposa, filha, mãe, noiva, namorada ou irmã.',
  id: 'Wanita yang mencari gaun desainer, gaun mewah, gaun elegan, gaun malam, gaun acara, gaun perjalanan, busana wanita kontemporer, busana modest mewah, wanita di GCC dan UEA, pelancong internasional, wanita karier, profesional kreatif, pembeli barang mewah, dan wanita tertarik warisan Emirati serta lemari abadi. Pria yang mencari hadiah mewah untuk istri, putri, ibu, tunangan, pacar, atau saudara perempuan.',
  ms: 'Wanita yang mencari gaun pereka, gaun mewah, gaun anggun, gaun malam, gaun majlis, gaun perjalanan, fesyen wanita kontemporari, fesyen sopan mewah, wanita di GCC dan UAE, pelancong antarabangsa, wanita profesional, profesional kreatif, pembeli barangan mewah, dan wanita berminat warisan Emirati serta almari abadi. Lelaki yang mencari hadiah mewah untuk isteri, anak perempuan, ibu, tunang, teman wanita, atau kakak.',
}

/** Rich discovery audience for set PDPs. */
export const SET_SCHEMA_AUDIENCE: Record<AppLocale, string> = {
  en: 'Women seeking luxury coordinate sets, designer two-piece sets, occasion sets, modest fashion sets, contemporary womenswear, women in the GCC and UAE, international travellers, luxury buyers, and women interested in Emirati heritage craftsmanship. Men seeking luxury gifts for their wife, daughter, mother, fiancée, girlfriend, or sister.',
  ar: 'النساء الباحثات عن أطقم منسّقة فاخرة، أطقم ثنائية مصمّمة، أطقم مناسبات، أطقم أزياء محتشمة، أزياء نسائية معاصرة، النساء في دول مجلس التعاون والإمارات، المسافرات الدوليات، مشتريات الفاخر، والمهتمات بحرفية التراث الإماراتي. الرجال الباحثون عن هدايا فاخرة للزوجة أو الابنة أو الأم أو الخطيبة أو الصديقة أو الأخت.',
  fr: 'Femmes en quête de ensembles coordonnés de luxe, ensembles deux pièces de créateur, ensembles de cérémonie, ensembles mode modeste, prêt-à-porter féminin contemporain, femmes du Golfe et des EAU, voyageuses internationales, acheteuses de luxe, et femmes intéressées par l’artisanat du patrimoine émirati. Hommes en quête de cadeaux de luxe pour leur épouse, fille, mère, fiancée, amie ou sœur.',
  it: 'Donne in cerca di set coordinati di lusso, set due pezzi designer, set da occasione, set moda modesta, abbigliamento femminile contemporaneo, donne nel Golfo e negli EAU, viaggiatrici internazionali, acquirenti di lusso, e donne interessate all’artigianato del patrimonio emiratino. Uomini in cerca di regali di lusso per moglie, figlia, madre, fidanzata, partner o sorella.',
  es: 'Mujeres que buscan conjuntos coordinados de lujo, conjuntos de dos piezas de diseñador, conjuntos de ocasión, conjuntos de moda modesta, moda femenina contemporánea, mujeres en el Golfo y los EAU, viajeras internacionales, compradoras de lujo, y mujeres interesadas en la artesanía del patrimonio emiratí. Hombres que buscan regalos de lujo para esposa, hija, madre, prometida, novia o hermana.',
  ru: 'Женщины, ищущие роскошные координированные комплекты, дизайнерские двухчастные комплекты, комплекты для особых случаев, скромные комплекты, современную женскую моду, женщин в странах Залива и ОАЭ, международных путешественниц, покупательниц люкса, интересующихся эмиратским ремесленным наследием. Мужчины, ищущие роскошные подарки для жены, дочери, матери, невесты, девушки или сестры.',
  zh: '寻求奢华套装、设计师两件套、场合套装、端庄时尚套装与当代女装的海湾与阿联酋女性、国际旅行者、奢侈品买家，以及对阿联酋传统工艺感兴趣的女性。为妻子、女儿、母亲、未婚妻、女友或姐妹寻找奢华礼品的男性。',
  de: 'Frauen, die luxuriöse Koordinaten-Sets, Designer-Zweiteiler, Anlass-Sets, bescheidene Mode-Sets und zeitgenössische Damenmode suchen — Frauen im Golf und in den VAE, internationale Reisende, Luxuskäuferinnen und Frauen mit Interesse an emiratischem Handwerks-erbe. Männer, die Luxusgeschenke für Ehefrau, Tochter, Mutter, Verlobte, Freundin oder Schwester suchen.',
  nl: 'Vrouwen die luxe coördinatiesets, designer tweedelige sets, gelegenheidssets, bescheiden modesets en eigentijdse damesmode zoeken — vrouwen in de Golfstaten en VAE, internationale reizigers, luxe kopers, en vrouwen geïnteresseerd in Emiratisch erfgoedambacht. Mannen die luxe cadeaus zoeken voor echtgenote, dochter, moeder, verloofde, vriendin of zus.',
  pt: 'Mulheres que procuram conjuntos coordenados de luxo, conjuntos de duas peças de designer, conjuntos de ocasião, conjuntos de moda modesta e moda feminina contemporânea, mulheres no Golfo e nos EAU, viajantes internacionais, compradoras de luxo, e mulheres interessadas no artesanato do património emirati. Homens que procuram presentes de luxo para esposa, filha, mãe, noiva, namorada ou irmã.',
  id: 'Wanita yang mencari set koordinat mewah, set dua potong desainer, set acara, set busana modest, busana wanita kontemporer, wanita di GCC dan UEA, pelancong internasional, pembeli barang mewah, dan wanita tertarik kerajinan warisan Emirati. Pria yang mencari hadiah mewah untuk istri, putri, ibu, tunangan, pacar, atau saudara perempuan.',
  ms: 'Wanita yang mencari set selaras mewah, set dua keping pereka, set majlis, set fesyen sopan, fesyen wanita kontemporari, wanita di GCC dan UAE, pelancong antarabangsa, pembeli barangan mewah, dan wanita berminat kraf warisan Emirati. Lelaki yang mencari hadiah mewah untuk isteri, anak perempuan, ibu, tunang, teman wanita, atau kakak.',
}

export function getDressSchemaAudience(locale: AppLocale = 'en'): string {
  return DRESS_SCHEMA_AUDIENCE[locale] ?? DRESS_SCHEMA_AUDIENCE.en
}

export function getSetSchemaAudience(locale: AppLocale = 'en'): string {
  return SET_SCHEMA_AUDIENCE[locale] ?? SET_SCHEMA_AUDIENCE.en
}

export function getCategorySchemaAudience(
  category: string,
  locale: AppLocale = 'en',
): string | null {
  if (category === 'Dresses') return getDressSchemaAudience(locale)
  if (category === 'Sets') return getSetSchemaAudience(locale)
  return null
}

export function getFallbackSchemaAudience(category: string, locale: AppLocale = 'en'): string {
  return getCategorySchemaAudience(category, locale) ?? getSchemaAudienceType(locale)
}
