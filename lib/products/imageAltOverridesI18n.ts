import type { AppLocale } from '@/lib/i18n/routing'
import { indonesiaImageAltFromEn } from '@/lib/i18n/indonesiaImageAltFromEn'
import { malaysiaImageAltFromEn } from '@/lib/i18n/malaysiaImageAltFromEn'

/** Build a full locale map for one catalogue image alt (en + 10 prefix locales). */
export function altLoc(
  en: string,
  ar: string,
  fr: string,
  it: string,
  es: string,
  ru: string,
  zh: string,
  de: string,
  nl: string,
  pt: string,
  id?: string,
  ms?: string,
): Record<AppLocale, string> {
  return { en, ar, fr, it, es, ru, zh, de, nl, pt, id: id ?? indonesiaImageAltFromEn(en), ms: ms ?? malaysiaImageAltFromEn(en) }
}

type AltEntry = { filename: string; alts: Record<AppLocale, string> }

/**
 * Curated per-file product image alts — add new shoots here with all 10 locales.
 * English is the editorial source; other locales follow the same structure and tone.
 */
const ALT_ENTRIES: AltEntry[] = [
  {
    filename: 'bint-saeed-mayfair-kaftan-marroon-front.webp',
    alts: altLoc(
      "Mayfair Kaftan in Deep Maroon crepe chiffon, front view. Luxury women's occasion kaftan by Bint Saeed Abu Dhabi, United Arab Emirates, featuring a V-neckline, flowing silhouette, attached scarf detail and signature gold-tone emblem.",
      'قفطان Mayfair بشيفون كريب عنابي غامق، منظر أمامي. قفطان نسائي فاخر للمناسبات من Bint Saeed أبوظبي، الإمارات العربية المتحدة، بخط عنق V، وقصّة انسيابية، ووشاح مرفق، وشعار ذهبي مميز.',
      'Kaftan Mayfair en mousseline crêpe bordeaux profond, vue de face. Kaftan de cérémonie féminin de luxe par Bint Saeed Abou Dabi, Émirats arabes unis, avec encolure en V, silhouette fluide, écharpe intégrée et emblème doré signature.',
      'Kaftan Mayfair in chiffon crepe bordeaux profondo, vista frontale. Kaftan da cerimonia femminile di lusso di Bint Saeed Abu Dhabi, Emirati Arabi Uniti, con scollatura a V, silhouette fluida, sciarpa integrata ed emblema dorato signature.',
      'Caftán Mayfair en chiffon crepe burdeos profundo, vista frontal. Caftán de ocasión femenino de lujo de Bint Saeed Abu Dabi, Emiratos Árabes Unidos, con escote en V, silueta fluida, bufanda integrada y emblema dorado distintivo.',
      'Кафтан Mayfair из креп-шифона глубокого бордового, вид спереди. Роскошный женский кафтан для особых случаев от Bint Saeed Абу-Даби, Объединённые Арабские Эмираты, с V-образным вырезом, плавным силуэтом, прикреплённым шарфом и фирменной золотой эмблемой.',
      'Mayfair长袍，深酒红绉雪纺，正面视图。Bint Saeed阿布扎比、阿拉伯联合酋长国奢华女士场合长袍，V领、流畅廓形、附带围巾细节与标志性金色徽章。',
      'Mayfair-Kaftan in tiefbordeauxfarbenem Krepp-Chiffon, Frontansicht. Luxuriöser Damen-Anlasskaftan von Bint Saeed Abu Dhabi, Vereinigte Arabische Emirate, mit V-Ausschnitt, fließender Silhouette, integriertem Schaldetail und charakteristischem goldfarbenem Emblem.',
      'Mayfair kaftan in diep bordeauxrood crêpe chiffon, vooraanzicht. Luxe damesgelegenheidskaftan van Bint Saeed Abu Dhabi, Verenigde Arabische Emiraten, met V-hals, vloeiende silhouet, bijgevoegd sjaaldetail en kenmerkend goudkleurig embleem.',
      'Kaftan Mayfair em chiffon crepe bordeaux profundo, vista frontal. Kaftan de ocasião feminino de luxo da Bint Saeed Abu Dhabi, Emirados Árabes Unidos, com decote em V, silhueta fluida, lenço integrado e emblema dourado distintivo.',
    ),
  },
  {
    filename: 'bint-saeed-mayfair-kaftan-marroon-side.webp',
    alts: altLoc(
      'Mayfair Kaftan in Deep Maroon crepe chiffon, side view. Designer chiffon kaftan by Bint Saeed Abu Dhabi, United Arab Emirates, showcasing fluid draping, layered construction and elegant occasionwear styling.',
      'قفطان Mayfair بشيفون كريب عنابي غامق، منظر جانبي. قفطان شيفون مصمّم من Bint Saeed أبوظبي، الإمارات العربية المتحدة، يبرز التدلّي الانسيابي والبناء الطبقي وأناقة أزياء المناسبات.',
      'Kaftan Mayfair en mousseline crêpe bordeaux profond, vue de profil. Kaftan en mousseline de créateur par Bint Saeed Abou Dabi, Émirats arabes unis, mettant en valeur un drapé fluide, une construction superposée et un style de cérémonie élégant.',
      'Kaftan Mayfair in chiffon crepe bordeaux profondo, vista laterale. Kaftan in chiffon designer di Bint Saeed Abu Dhabi, Emirati Arabi Uniti, che mette in risalto drappeggio fluido, costruzione stratificata ed elegante styling da cerimonia.',
      'Caftán Mayfair en chiffon crepe burdeos profundo, vista lateral. Caftán de chiffon de diseñador de Bint Saeed Abu Dabi, Emiratos Árabes Unidos, que muestra caída fluida, construcción en capas y un estilo elegante para ocasiones.',
      'Кафтан Mayfair из креп-шифона глубокого бордового, вид сбоку. Дизайнерский шифоновый кафтан от Bint Saeed Абу-Даби, Объединённые Арабские Эмираты, демонстрирующий плавную драпировку, многослойную конструкцию и элегантный стиль для особых случаев.',
      'Mayfair长袍，深酒红绉雪纺，侧面视图。Bint Saeed阿布扎比、阿拉伯联合酋长国设计师雪纺长袍，展现流畅垂坠、层叠结构与优雅场合造型。',
      'Mayfair-Kaftan in tiefbordeauxfarbenem Krepp-Chiffon, Seitenansicht. Designer-Chiffonkaftan von Bint Saeed Abu Dhabi, Vereinigte Arabische Emirate, mit fließendem Fall, geschichteter Konstruktion und eleganter Anlassmode.',
      'Mayfair kaftan in diep bordeauxrood crêpe chiffon, zijaanzicht. Designer chiffon kaftan van Bint Saeed Abu Dhabi, Verenigde Arabische Emiraten, met vloeiende drapering, gelaagde constructie en elegante gelegenheidsstyling.',
      'Kaftan Mayfair em chiffon crepe bordeaux profundo, vista lateral. Kaftan de chiffon de designer da Bint Saeed Abu Dhabi, Emirados Árabes Unidos, com caimento fluido, construção em camadas e styling elegante para ocasiões.',
    ),
  },
  {
    filename: 'bint-saeed-mayfair-kaftan-marroon-back.webp',
    alts: altLoc(
      'Mayfair Kaftan in Deep Maroon crepe chiffon, back view. Contemporary luxury kaftan by Bint Saeed Abu Dhabi, United Arab Emirates, highlighting graceful movement, lightweight layered chiffon and refined eveningwear design.',
      'قفطان Mayfair بشيفون كريب عنابي غامق، منظر خلفي. قفطان فاخر معاصر من Bint Saeed أبوظبي، الإمارات العربية المتحدة، يبرز الحركة الرشيقة وشيفون الطبقات الخفيف وتصميم أزياء المساء الراقي.',
      'Kaftan Mayfair en mousseline crêpe bordeaux profond, vue de dos. Kaftan de luxe contemporain par Bint Saeed Abou Dabi, Émirats arabes unis, soulignant un mouvement gracieux, une mousseline superposée légère et un design de soirée raffiné.',
      'Kaftan Mayfair in chiffon crepe bordeaux profondo, vista posteriore. Kaftan di lusso contemporaneo di Bint Saeed Abu Dhabi, Emirati Arabi Uniti, che evidenzia movimento aggraziato, chiffon stratificato leggero e design da sera raffinato.',
      'Caftán Mayfair en chiffon crepe burdeos profundo, vista trasera. Caftán de lujo contemporáneo de Bint Saeed Abu Dabi, Emiratos Árabes Unidos, que destaca movimiento elegante, chiffon en capas ligero y diseño refinado para la noche.',
      'Кафтан Mayfair из креп-шифона глубокого бордового, вид сзади. Современный роскошный кафтан от Bint Saeed Абу-Даби, Объединённые Арабские Эмираты, подчёркивающий грациозное движение, лёгкий многослойный шифон и утончённый вечерний дизайн.',
      'Mayfair长袍，深酒红绉雪纺，背面视图。Bint Saeed阿布扎比、阿拉伯联合酋长国当代奢华长袍，凸显优雅动感、轻盈层叠雪纺与精致晚装设计。',
      'Mayfair-Kaftan in tiefbordeauxfarbenem Krepp-Chiffon, Rückansicht. Zeitgenössischer Luxuskaftan von Bint Saeed Abu Dhabi, Vereinigte Arabische Emirate, mit anmutiger Bewegung, leichtem geschichtetem Chiffon und raffiniertem Abenddesign.',
      'Mayfair kaftan in diep bordeauxrood crêpe chiffon, achteraanzicht. Eigentijds luxe kaftan van Bint Saeed Abu Dhabi, Verenigde Arabische Emiraten, met sierlijke beweging, licht gelaagd chiffon en verfijnd avonddesign.',
      'Kaftan Mayfair em chiffon crepe bordeaux profundo, vista traseira. Kaftan de luxo contemporâneo da Bint Saeed Abu Dhabi, Emirados Árabes Unidos, destacando movimento gracioso, chiffon em camadas leve e design refinado para a noite.',
    ),
  },
  {
    filename: 'bint-saeed-nothing-hill-kaftan-peach-pink-front.webp',
    alts: altLoc(
      "Nothing Hill Kaftan in Peach Pink chiffon, front view. Luxury women's occasion kaftan by Bint Saeed Abu Dhabi, United Arab Emirates, featuring a bateau neckline, flowing silhouette and signature gold-tone emblem.",
      'قفطان Nothing Hill بشيفون وردي خوخي، منظر أمامي. قفطان نسائي فاخر للمناسبات من Bint Saeed أبوظبي، الإمارات العربية المتحدة، بخط عنق بوتيه، وقصّة انسيابية، وشعار ذهبي مميز.',
      'Kaftan Nothing Hill en mousseline rose pêche, vue de face. Kaftan de cérémonie féminin de luxe par Bint Saeed Abou Dabi, Émirats arabes unis, avec encolure bateau, silhouette fluide et emblème doré signature.',
      'Kaftan Nothing Hill in chiffon rosa pesca, vista frontale. Kaftan da cerimonia femminile di lusso di Bint Saeed Abu Dhabi, Emirati Arabi Uniti, con scollatura a barca, silhouette fluida ed emblema dorato signature.',
      'Caftán Nothing Hill en chiffon rosa melocotón, vista frontal. Caftán de ocasión femenino de lujo de Bint Saeed Abu Dabi, Emiratos Árabes Unidos, con escote barco, silueta fluida y emblema dorado distintivo.',
      'Кафтан Nothing Hill из персиково-розового шифона, вид спереди. Роскошный женский кафтан для особых случаев от Bint Saeed Абу-Даби, Объединённые Арабские Эмираты, с вырезом лодочкой, плавным силуэтом и фирменной золотой эмблемой.',
      'Nothing Hill长袍，蜜桃粉雪纺，正面视图。Bint Saeed阿布扎比、阿拉伯联合酋长国奢华女士场合长袍，船型领、流畅廓形与标志性金色徽章。',
      'Nothing Hill-Kaftan in pfirsichrosa Chiffon, Frontansicht. Luxuriöser Damen-Anlasskaftan von Bint Saeed Abu Dhabi, Vereinigte Arabische Emirate, mit Boot-Ausschnitt, fließender Silhouette und charakteristischem goldfarbenem Emblem.',
      'Nothing Hill kaftan in perzikroze chiffon, vooraanzicht. Luxe damesgelegenheidskaftan van Bint Saeed Abu Dhabi, Verenigde Arabische Emiraten, met bootnekaanzicht, vloeiende silhouet en kenmerkend goudkleurig embleem.',
      'Kaftan Nothing Hill em chiffon rosa pêssego, vista frontal. Kaftan de ocasião feminino de luxo da Bint Saeed Abu Dhabi, Emirados Árabes Unidos, com decote barco, silhueta fluida e emblema dourado distintivo.',
    ),
  },
  {
    filename: 'bint-saeed-nothing-hill-kaftan-peach-pink-side.webp',
    alts: altLoc(
      'Nothing Hill Kaftan in Peach Pink chiffon, side view. Designer chiffon kaftan by Bint Saeed Abu Dhabi, United Arab Emirates, showcasing fluid draping, layered construction and graceful movement.',
      'قفطان Nothing Hill بشيفون وردي خوخي، منظر جانبي. قفطان شيفون مصمّم من Bint Saeed أبوظبي، الإمارات العربية المتحدة، يبرز التدلّي الانسيابي والبناء الطبقي والحركة الرشيقة.',
      'Kaftan Nothing Hill en mousseline rose pêche, vue de profil. Kaftan en mousseline de créateur par Bint Saeed Abou Dabi, Émirats arabes unis, mettant en valeur un drapé fluide, une construction superposée et un mouvement gracieux.',
      'Kaftan Nothing Hill in chiffon rosa pesca, vista laterale. Kaftan in chiffon designer di Bint Saeed Abu Dhabi, Emirati Arabi Uniti, che mette in risalto drappeggio fluido, costruzione stratificata e movimento aggraziato.',
      'Caftán Nothing Hill en chiffon rosa melocotón, vista lateral. Caftán de chiffon de diseñador de Bint Saeed Abu Dabi, Emiratos Árabes Unidos, que muestra caída fluida, construcción en capas y movimiento elegante.',
      'Кафтан Nothing Hill из персиково-розового шифона, вид сбоку. Дизайнерский шифоновый кафтан от Bint Saeed Абу-Даби, Объединённые Арабские Эмираты, демонстрирующий плавную драпировку, многослойную конструкцию и грациозное движение.',
      'Nothing Hill长袍，蜜桃粉雪纺，侧面视图。Bint Saeed阿布扎比、阿拉伯联合酋长国设计师雪纺长袍，展现流畅垂坠、层叠结构与优雅动感。',
      'Nothing Hill-Kaftan in pfirsichrosa Chiffon, Seitenansicht. Designer-Chiffonkaftan von Bint Saeed Abu Dhabi, Vereinigte Arabische Emirate, mit fließendem Fall, geschichteter Konstruktion und anmutiger Bewegung.',
      'Nothing Hill kaftan in perzikroze chiffon, zijaanzicht. Designer chiffon kaftan van Bint Saeed Abu Dhabi, Verenigde Arabische Emiraten, met vloeiende drapering, gelaagde constructie en sierlijke beweging.',
      'Kaftan Nothing Hill em chiffon rosa pêssego, vista lateral. Kaftan de chiffon de designer da Bint Saeed Abu Dhabi, Emirados Árabes Unidos, com caimento fluido, construção em camadas e movimento gracioso.',
    ),
  },
  {
    filename: 'bint-saeed-nothing-hill-kaftan-peach-pink-back.webp',
    alts: altLoc(
      'Nothing Hill Kaftan in Peach Pink chiffon, back view. Contemporary luxury kaftan by Bint Saeed Abu Dhabi, United Arab Emirates, highlighting its flowing silhouette, lightweight layered chiffon and refined occasionwear design.',
      'قفطان Nothing Hill بشيفون وردي خوخي، منظر خلفي. قفطان فاخر معاصر من Bint Saeed أبوظبي، الإمارات العربية المتحدة، يبرز قصّته الانسيابية وشيفون الطبقات الخفيف وتصميم أزياء المناسبات الراقي.',
      'Kaftan Nothing Hill en mousseline rose pêche, vue de dos. Kaftan de luxe contemporain par Bint Saeed Abou Dabi, Émirats arabes unis, soulignant sa silhouette fluide, sa mousseline superposée légère et son design de cérémonie raffiné.',
      'Kaftan Nothing Hill in chiffon rosa pesca, vista posteriore. Kaftan di lusso contemporaneo di Bint Saeed Abu Dhabi, Emirati Arabi Uniti, che evidenzia la silhouette fluida, il chiffon stratificato leggero e il design da cerimonia raffinato.',
      'Caftán Nothing Hill en chiffon rosa melocotón, vista trasera. Caftán de lujo contemporáneo de Bint Saeed Abu Dabi, Emiratos Árabes Unidos, que destaca su silueta fluida, chiffon en capas ligero y diseño refinado para ocasiones.',
      'Кафтан Nothing Hill из персиково-розового шифона, вид сзади. Современный роскошный кафтан от Bint Saeed Абу-Даби, Объединённые Арабские Эмираты, подчёркивающий плавный силуэт, лёгкий многослойный шифон и утончённый дизайн для особых случаев.',
      'Nothing Hill长袍，蜜桃粉雪纺，背面视图。Bint Saeed阿布扎比、阿拉伯联合酋长国当代奢华长袍，凸显流畅廓形、轻盈层叠雪纺与精致场合设计。',
      'Nothing Hill-Kaftan in pfirsichrosa Chiffon, Rückansicht. Zeitgenössischer Luxuskaftan von Bint Saeed Abu Dhabi, Vereinigte Arabische Emirate, mit fließender Silhouette, leichtem geschichtetem Chiffon und raffiniertem Anlassdesign.',
      'Nothing Hill kaftan in perzikroze chiffon, achteraanzicht. Eigentijds luxe kaftan van Bint Saeed Abu Dhabi, Verenigde Arabische Emiraten, met vloeiende silhouet, licht gelaagd chiffon en verfijnd gelegenheidsdesign.',
      'Kaftan Nothing Hill em chiffon rosa pêssego, vista traseira. Kaftan de luxo contemporâneo da Bint Saeed Abu Dhabi, Emirados Árabes Unidos, destacando silhueta fluida, chiffon em camadas leve e design refinado para ocasiões.',
    ),
  },
  {
    filename: 'bint-saeed-nothing-hill-kaftan-gold-tone-signature-emblem-close-up.webp',
    alts: altLoc(
      'Nothing Hill Kaftan in Peach Pink chiffon, close-up view. Designer chiffon kaftan by Bint Saeed Abu Dhabi, United Arab Emirates, showcasing soft peach pink chiffon fabric, delicate layered texture and the signature gold-tone Bint Saeed emblem pin.',
      'قفطان Nothing Hill بشيفون وردي خوخي، منظر مقرّب. قفطان شيفون مصمّم من Bint Saeed أبوظبي، الإمارات العربية المتحدة، يبرز نسيج الشيفون الوردي الخوخي الناعم والملمس الطبقي الرقيق ودبوس الشعار الذهبي المميز من Bint Saeed.',
      'Kaftan Nothing Hill en mousseline rose pêche, vue rapprochée. Kaftan en mousseline de créateur par Bint Saeed Abou Dabi, Émirats arabes unis, mettant en valeur le tissu rose pêche doux, la texture superposée délicate et l’épingle emblème dorée signature Bint Saeed.',
      'Kaftan Nothing Hill in chiffon rosa pesca, vista ravvicinata. Kaftan in chiffon designer di Bint Saeed Abu Dhabi, Emirati Arabi Uniti, che mette in risalto il morbido chiffon rosa pesca, la delicata texture stratificata e la spilla emblema dorata signature Bint Saeed.',
      'Caftán Nothing Hill en chiffon rosa melocotón, vista de primer plano. Caftán de chiffon de diseñador de Bint Saeed Abu Dabi, Emiratos Árabes Unidos, que muestra el suave chiffon rosa melocotón, la delicada textura en capas y el pin de emblema dorado distintivo de Bint Saeed.',
      'Кафтан Nothing Hill из персиково-розового шифона, крупный план. Дизайнерский шифоновый кафтан от Bint Saeed Абу-Даби, Объединённые Арабские Эмираты, демонстрирующий мягкий персиково-розовый шифон, нежную многослойную фактуру и фирменную золотую булавку-эмблему Bint Saeed.',
      'Nothing Hill长袍，蜜桃粉雪纺，特写视图。Bint Saeed阿布扎比、阿拉伯联合酋长国设计师雪纺长袍，展现柔和蜜桃粉雪纺面料、细腻层叠质感与标志性Bint Saeed金色徽章胸针。',
      'Nothing Hill-Kaftan in pfirsichrosa Chiffon, Nahaufnahme. Designer-Chiffonkaftan von Bint Saeed Abu Dhabi, Vereinigte Arabische Emirate, mit weichem pfirsichrosa Chiffon, zarter geschichteter Textur und charakteristischer goldfarbener Bint Saeed-Emblempin.',
      'Nothing Hill kaftan in perzikroze chiffon, close-up. Designer chiffon kaftan van Bint Saeed Abu Dhabi, Verenigde Arabische Emiraten, met zacht perzikroze chiffon, delicate gelaagde textuur en de kenmerkende goudkleurige Bint Saeed-emblempin.',
      'Kaftan Nothing Hill em chiffon rosa pêssego, vista em close-up. Kaftan de chiffon de designer da Bint Saeed Abu Dhabi, Emirados Árabes Unidos, com suave chiffon rosa pêssego, textura delicada em camadas e o alfinete de emblema dourado distintivo Bint Saeed.',
    ),
  },
  {
    filename: 'bint-saeed-belgravia-abaya-black-front.webp',
    alts: altLoc(
      'Belgravia Abaya in Deep Black, front view. Luxury Bisht-inspired abaya by Bint Saeed Abu Dhabi, United Arab Emirates, featuring a handwoven trim inspired by the Emirati tradition of Khous weaving and an elegant open-front silhouette.',
      'عباءة Belgravia بالأسود العميق، منظر أمامي. عباءة فاخرة مستوحاة من البشت من Bint Saeed أبوظبي، الإمارات العربية المتحدة، بزخرفة منسوجة يدوياً مستوحاة من تقاليد الحياكة الإماراتية الخوص وقصّة أمامية مفتوحة أنيقة.',
      'Abaya Belgravia en noir profond, vue de face. Abaya de luxe inspirée du bisht par Bint Saeed Abou Dabi, Émirats arabes unis, avec une garniture tissée à la main inspirée de la tradition émiratie du tissage Khous et une silhouette ouverte élégante.',
      'Abaya Belgravia in nero profondo, vista frontale. Abaya di lusso ispirata al bisht di Bint Saeed Abu Dhabi, Emirati Arabi Uniti, con finitura tessuta a mano ispirata alla tradizione emiratina della tessitura Khous e silhouette frontale aperta elegante.',
      'Abaya Belgravia en negro profundo, vista frontal. Abaya de lujo inspirada en el bisht de Bint Saeed Abu Dabi, Emiratos Árabes Unidos, con ribete tejido a mano inspirado en la tradición emiratí del tejido Khous y silueta frontal abierta elegante.',
      'Абая Belgravia глубокого чёрного цвета, вид спереди. Роскошная абая в стиле бишт от Bint Saeed Абу-Даби, Объединённые Арабские Эмираты, с ручной отделкой, вдохновлённой эмиратской традицией плетения Khous, и элегантным открытым силуэтом спереди.',
      'Belgravia长袍，深黑色，正面视图。Bint Saeed阿布扎比、阿拉伯联合酋长国奢华Bisht风格长袍，手工编织饰边灵感源自阿联酋Khous编织传统，优雅开襟廓形。',
      'Belgravia-Abaya in tiefem Schwarz, Frontansicht. Luxuriöse Bisht-inspirierte Abaya von Bint Saeed Abu Dhabi, Vereinigte Arabische Emirate, mit handgewebter Verzierung inspiriert von der emiratischen Khous-Webtradition und eleganter offener Frontsilhouette.',
      'Belgravia abaya in diep zwart, vooraanzicht. Luxe bisht-geïnspireerde abaya van Bint Saeed Abu Dhabi, Verenigde Arabische Emiraten, met handgeweven afwerking geïnspireerd op de Emiratische Khous-weeftraditie en een elegant open voor silhouet.',
      'Abaya Belgravia em preto profundo, vista frontal. Abaya de luxo inspirada no bisht da Bint Saeed Abu Dhabi, Emirados Árabes Unidos, com acabamento tecido à mão inspirado na tradição emirati de tecelagem Khous e silhueta frontal aberta elegante.',
    ),
  },
  {
    filename: 'bint-saeed-belgravia-abaya-black-side.webp',
    alts: altLoc(
      'Belgravia Abaya in Deep Black, side view. Contemporary luxury abaya by Bint Saeed Abu Dhabi, United Arab Emirates, showcasing graceful movement, a handwoven trim inspired by the Emirati tradition of Khous weaving, and a flowing Bisht-inspired silhouette.',
      'عباءة Belgravia بالأسود العميق، منظر جانبي. عباءة فاخرة معاصرة من Bint Saeed أبوظبي، الإمارات العربية المتحدة، تبرز الحركة الرشيقة، وزخرفة منسوجة يدوياً مستوحاة من تقاليد الحياكة الإماراتية الخوص، وقصّة انسيابية مستوحاة من البشت.',
      'Abaya Belgravia en noir profond, vue de profil. Abaya de luxe contemporaine par Bint Saeed Abou Dabi, Émirats arabes unis, mettant en valeur un mouvement gracieux, une garniture tissée à la main inspirée de la tradition émiratie du tissage Khous et une silhouette fluide inspirée du bisht.',
      'Abaya Belgravia in nero profondo, vista laterale. Abaya di lusso contemporanea di Bint Saeed Abu Dhabi, Emirati Arabi Uniti, che mette in risalto movimento aggraziato, finitura tessuta a mano ispirata alla tradizione emiratina della tessitura Khous e silhouette fluida ispirata al bisht.',
      'Abaya Belgravia en negro profundo, vista lateral. Abaya de lujo contemporánea de Bint Saeed Abu Dabi, Emiratos Árabes Unidos, que muestra movimiento elegante, ribete tejido a mano inspirado en la tradición emiratí del tejido Khous y silueta fluida inspirada en el bisht.',
      'Абая Belgravia глубокого чёрного цвета, вид сбоку. Современная роскошная абая от Bint Saeed Абу-Даби, Объединённые Арабские Эмираты, демонстрирующая грациозное движение, ручную отделку, вдохновлённую эмиратской традицией плетения Khous, и плавный силуэт в стиле бишт.',
      'Belgravia长袍，深黑色，侧面视图。Bint Saeed阿布扎比、阿拉伯联合酋长国当代奢华长袍，展现优雅动感、灵感源自阿联酋Khous编织传统的手工编织饰边与流畅Bisht风格廓形。',
      'Belgravia-Abaya in tiefem Schwarz, Seitenansicht. Zeitgenössische Luxusabaya von Bint Saeed Abu Dhabi, Vereinigte Arabische Emirate, mit anmutiger Bewegung, handgewebter Verzierung inspiriert von der emiratischen Khous-Webtradition und fließender Bisht-inspirierter Silhouette.',
      'Belgravia abaya in diep zwart, zijaanzicht. Eigentijdse luxe abaya van Bint Saeed Abu Dhabi, Verenigde Arabische Emiraten, met sierlijke beweging, handgeweven afwerking geïnspireerd op de Emiratische Khous-weeftraditie en een vloeiend bisht-geïnspireerd silhouet.',
      'Abaya Belgravia em preto profundo, vista lateral. Abaya de luxo contemporânea da Bint Saeed Abu Dhabi, Emirados Árabes Unidos, com movimento gracioso, acabamento tecido à mão inspirado na tradição emirati de tecelagem Khous e silhueta fluida inspirada no bisht.',
    ),
  },
  {
    filename: 'bint-saeed-belgravia-abaya-black-back.webp',
    alts: altLoc(
      'Belgravia Abaya in Deep Black, back view. Designer abaya by Bint Saeed Abu Dhabi, United Arab Emirates, highlighting clean lines, full-length drape, and a handwoven trim inspired by the Emirati tradition of Khous weaving.',
      'عباءة Belgravia بالأسود العميق، منظر خلفي. عباءة مصمّمة من Bint Saeed أبوظبي، الإمارات العربية المتحدة، تبرز الخطوط النظيفة والتدلّي الكامل، وزخرفة منسوجة يدوياً مستوحاة من تقاليد الحياكة الإماراتية الخوص.',
      'Abaya Belgravia en noir profond, vue de dos. Abaya de créateur par Bint Saeed Abou Dabi, Émirats arabes unis, soulignant des lignes épurées, une tombée pleine longueur et une garniture tissée à la main inspirée de la tradition émiratie du tissage Khous.',
      'Abaya Belgravia in nero profondo, vista posteriore. Abaya designer di Bint Saeed Abu Dhabi, Emirati Arabi Uniti, che evidenzia linee pulite, drappeggio a tutta lunghezza e finitura tessuta a mano ispirata alla tradizione emiratina della tessitura Khous.',
      'Abaya Belgravia en negro profundo, vista trasera. Abaya de diseñador de Bint Saeed Abu Dabi, Emiratos Árabes Unidos, que destaca líneas limpias, caída de largo completo y ribete tejido a mano inspirado en la tradición emiratí del tejido Khous.',
      'Абая Belgravia глубокого чёрного цвета, вид сзади. Дизайнерская абая от Bint Saeed Абу-Даби, Объединённые Арабские Эмираты, подчёркивающая чистые линии, драпировку во всю длину и ручную отделку, вдохновлённую эмиратской традицией плетения Khous.',
      'Belgravia长袍，深黑色，背面视图。Bint Saeed阿布扎比、阿拉伯联合酋长国设计师长袍，凸显利落线条、全长垂坠与灵感源自阿联酋Khous编织传统的手工编织饰边。',
      'Belgravia-Abaya in tiefem Schwarz, Rückansicht. Designer-Abaya von Bint Saeed Abu Dhabi, Vereinigte Arabische Emirate, mit klaren Linien, ganzkörperlichem Fall und handgewebter Verzierung inspiriert von der emiratischen Khous-Webtradition.',
      'Belgravia abaya in diep zwart, achteraanzicht. Designer abaya van Bint Saeed Abu Dhabi, Verenigde Arabische Emiraten, met strakke lijnen, volledige lengte drapering en handgeweven afwerking geïnspireerd op de Emiratische Khous-weeftraditie.',
      'Abaya Belgravia em preto profundo, vista traseira. Abaya de designer da Bint Saeed Abu Dhabi, Emirados Árabes Unidos, destacando linhas limpas, caimento de comprimento total e acabamento tecido à mão inspirado na tradição emirati de tecelagem Khous.',
    ),
  },
  {
    filename: 'bint-saeed-belgravia-abaya-black-lifestyle-1.webp',
    alts: altLoc(
      'Belgravia Abaya in Deep Black, lifestyle view. Luxury handcrafted abaya by Bint Saeed Abu Dhabi, United Arab Emirates, combining a contemporary Bisht-inspired silhouette with a handwoven trim inspired by the Emirati tradition of Khous weaving.',
      'عباءة Belgravia بالأسود العميق، منظر لِلحياة اليومية. عباءة فاخرة مصنوعة يدوياً من Bint Saeed أبوظبي، الإمارات العربية المتحدة، تجمع بين قصّة معاصرة مستوحاة من البشت وزخرفة منسوجة يدوياً مستوحاة من تقاليد الحياكة الإماراتية الخوص.',
      'Abaya Belgravia en noir profond, vue lifestyle. Abaya de luxe artisanale par Bint Saeed Abou Dabi, Émirats arabes unis, alliant une silhouette contemporaine inspirée du bisht à une garniture tissée à la main inspirée de la tradition émiratie du tissage Khous.',
      'Abaya Belgravia in nero profondo, vista lifestyle. Abaya di lusso artigianale di Bint Saeed Abu Dhabi, Emirati Arabi Uniti, che unisce una silhouette contemporanea ispirata al bisht a una finitura tessuta a mano ispirata alla tradizione emiratina della tessitura Khous.',
      'Abaya Belgravia en negro profundo, vista lifestyle. Abaya de lujo artesanal de Bint Saeed Abu Dabi, Emiratos Árabes Unidos, que combina una silueta contemporánea inspirada en el bisht con un ribete tejido a mano inspirado en la tradición emiratí del tejido Khous.',
      'Абая Belgravia глубокого чёрного цвета, lifestyle-кадр. Роскошная абая ручной работы от Bint Saeed Абу-Даби, Объединённые Арабские Эмираты, сочетающая современный силуэт в стиле бишт с ручной отделкой, вдохновлённой эмиратской традицией плетения Khous.',
      'Belgravia长袍，深黑色，生活方式视图。Bint Saeed阿布扎比、阿拉伯联合酋长国奢华手工长袍，将当代Bisht风格廓形与灵感源自阿联酋Khous编织传统的手工编织饰边融为一体。',
      'Belgravia-Abaya in tiefem Schwarz, Lifestyle-Ansicht. Luxuriöse handgefertigte Abaya von Bint Saeed Abu Dhabi, Vereinigte Arabische Emirate, die eine zeitgenössische Bisht-inspirierte Silhouette mit handgewebter Verzierung inspiriert von der emiratischen Khous-Webtradition verbindet.',
      'Belgravia abaya in diep zwart, lifestyle-weergave. Luxe handgemaakte abaya van Bint Saeed Abu Dhabi, Verenigde Arabische Emiraten, die een eigentijds bisht-geïnspireerd silhouet combineert met handgeweven afwerking geïnspireerd op de Emiratische Khous-weeftraditie.',
      'Abaya Belgravia em preto profundo, vista lifestyle. Abaya de luxo artesanal da Bint Saeed Abu Dhabi, Emirados Árabes Unidos, combinando silhueta contemporânea inspirada no bisht com acabamento tecido à mão inspirado na tradição emirati de tecelagem Khous.',
    ),
  },
  {
    filename: 'bint-saeed-belgravia-abaya-black-lifestyle-2.webp',
    alts: altLoc(
      'Belgravia Abaya in Deep Black, lifestyle view. Contemporary luxury outerwear by Bint Saeed Abu Dhabi, United Arab Emirates, featuring a handwoven trim inspired by the Emirati tradition of Khous weaving and designed for elegant dressing across the Gulf, Europe, and beyond.',
      'عباءة Belgravia بالأسود العميق، منظر لِلحياة اليومية. ملابس خارجية فاخرة معاصرة من Bint Saeed أبوظبي، الإمارات العربية المتحدة، بزخرفة منسوجة يدوياً مستوحاة من تقاليد الحياكة الإماراتية الخوص، وصُممت لأناقة التأنق في الخليج وأوروبا وما بعدهما.',
      'Abaya Belgravia en noir profond, vue lifestyle. Vêtement d’extérieur de luxe contemporain par Bint Saeed Abou Dabi, Émirats arabes unis, avec une garniture tissée à la main inspirée de la tradition émiratie du tissage Khous, conçu pour une élégance raffinée dans le Golfe, en Europe et au-delà.',
      'Abaya Belgravia in nero profondo, vista lifestyle. Capospalla di lusso contemporaneo di Bint Saeed Abu Dhabi, Emirati Arabi Uniti, con finitura tessuta a mano ispirata alla tradizione emiratina della tessitura Khous, pensato per un dressing elegante nel Golfo, in Europa e oltre.',
      'Abaya Belgravia en negro profundo, vista lifestyle. Prenda exterior de lujo contemporánea de Bint Saeed Abu Dabi, Emiratos Árabes Unidos, con ribete tejido a mano inspirado en la tradición emiratí del tejido Khous, diseñada para un vestir elegante en el Golfo, Europa y más allá.',
      'Абая Belgravia глубокого чёрного цвета, lifestyle-кадр. Современная роскошная верхняя одежда от Bint Saeed Абу-Даби, Объединённые Арабские Эмираты, с ручной отделкой, вдохновлённой эмиратской традицией плетения Khous, созданная для элегантного образа в странах Залива, Европе и за их пределами.',
      'Belgravia长袍，深黑色，生活方式视图。Bint Saeed阿布扎比、阿拉伯联合酋长国当代奢华外衣，手工编织饰边灵感源自阿联酋Khous编织传统，为海湾、欧洲及更远地区的优雅着装而设计。',
      'Belgravia-Abaya in tiefem Schwarz, Lifestyle-Ansicht. Zeitgenössische Luxus-Oberbekleidung von Bint Saeed Abu Dhabi, Vereinigte Arabische Emirate, mit handgewebter Verzierung inspiriert von der emiratischen Khous-Webtradition, konzipiert für elegantes Dressing im Golf, in Europa und darüber hinaus.',
      'Belgravia abaya in diep zwart, lifestyle-weergave. Eigentijdse luxe outerwear van Bint Saeed Abu Dhabi, Verenigde Arabische Emiraten, met handgeweven afwerking geïnspireerd op de Emiratische Khous-weeftraditie, ontworpen voor elegant gekleed zijn in de Golf, Europa en daarbuiten.',
      'Abaya Belgravia em preto profundo, vista lifestyle. Outerwear de luxo contemporânea da Bint Saeed Abu Dhabi, Emirados Árabes Unidos, com acabamento tecido à mão inspirado na tradição emirati de tecelagem Khous, concebida para um vestir elegante no Golfo, na Europa e além.',
    ),
  },
  {
    filename: 'bint-saeed-belgravia-abaya-navy-blue-front.webp',
    alts: altLoc(
      'Belgravia Abaya in Navy Blue, front view. Luxury Bisht-inspired abaya by Bint Saeed Abu Dhabi, United Arab Emirates, featuring a handwoven trim inspired by the Emirati tradition of Khous weaving and an elegant open-front silhouette.',
      'عباءة Belgravia بالأزرق الكحلي، منظر أمامي. عباءة فاخرة مستوحاة من البشت من Bint Saeed أبوظبي، الإمارات العربية المتحدة، بزخرفة منسوجة يدوياً مستوحاة من تقاليد الحياكة الإماراتية الخوص وقصّة أمامية مفتوحة أنيقة.',
      'Abaya Belgravia en bleu marine, vue de face. Abaya de luxe inspirée du bisht par Bint Saeed Abou Dabi, Émirats arabes unis, avec une garniture tissée à la main inspirée de la tradition émiratie du tissage Khous et une silhouette ouverte élégante.',
      'Abaya Belgravia in blu navy, vista frontale. Abaya di lusso ispirata al bisht di Bint Saeed Abu Dhabi, Emirati Arabi Uniti, con finitura tessuta a mano ispirata alla tradizione emiratina della tessitura Khous e silhouette frontale aperta elegante.',
      'Abaya Belgravia en azul marino, vista frontal. Abaya de lujo inspirada en el bisht de Bint Saeed Abu Dabi, Emiratos Árabes Unidos, con ribete tejido a mano inspirado en la tradición emiratí del tejido Khous y silueta frontal abierta elegante.',
      'Абая Belgravia тёмно-синего цвета, вид спереди. Роскошная абая в стиле бишт от Bint Saeed Абу-Даби, Объединённые Арабские Эмираты, с ручной отделкой, вдохновлённой эмиратской традицией плетения Khous, и элегантным открытым силуэтом спереди.',
      'Belgravia长袍，海军蓝，正面视图。Bint Saeed阿布扎比、阿拉伯联合酋长国奢华Bisht风格长袍，手工编织饰边灵感源自阿联酋Khous编织传统，优雅开襟廓形。',
      'Belgravia-Abaya in Marineblau, Frontansicht. Luxuriöse Bisht-inspirierte Abaya von Bint Saeed Abu Dhabi, Vereinigte Arabische Emirate, mit handgewebter Verzierung inspiriert von der emiratischen Khous-Webtradition und eleganter offener Frontsilhouette.',
      'Belgravia abaya in marineblauw, vooraanzicht. Luxe bisht-geïnspireerde abaya van Bint Saeed Abu Dhabi, Verenigde Arabische Emiraten, met handgeweven afwerking geïnspireerd op de Emiratische Khous-weeftraditie en een elegant open voor silhouet.',
      'Abaya Belgravia em azul-marinho, vista frontal. Abaya de luxo inspirada no bisht da Bint Saeed Abu Dhabi, Emirados Árabes Unidos, com acabamento tecido à mão inspirado na tradição emirati de tecelagem Khous e silhueta frontal aberta elegante.',
    ),
  },
  {
    filename: 'bint-saeed-belgravia-abaya-navy-blue-side.webp',
    alts: altLoc(
      'Belgravia Abaya in Navy Blue, side view. Contemporary luxury abaya by Bint Saeed Abu Dhabi, United Arab Emirates, showcasing graceful movement, a handwoven trim inspired by the Emirati tradition of Khous weaving, and a flowing Bisht-inspired silhouette.',
      'عباءة Belgravia بالأزرق الكحلي، منظر جانبي. عباءة فاخرة معاصرة من Bint Saeed أبوظبي، الإمارات العربية المتحدة، تبرز الحركة الرشيقة، وزخرفة منسوجة يدوياً مستوحاة من تقاليد الحياكة الإماراتية الخوص، وقصّة انسيابية مستوحاة من البشت.',
      'Abaya Belgravia en bleu marine, vue de profil. Abaya de luxe contemporaine par Bint Saeed Abou Dabi, Émirats arabes unis, mettant en valeur un mouvement gracieux, une garniture tissée à la main inspirée de la tradition émiratie du tissage Khous et une silhouette fluide inspirée du bisht.',
      'Abaya Belgravia in blu navy, vista laterale. Abaya di lusso contemporanea di Bint Saeed Abu Dhabi, Emirati Arabi Uniti, che mette in risalto movimento aggraziato, finitura tessuta a mano ispirata alla tradizione emiratina della tessitura Khous e silhouette fluida ispirata al bisht.',
      'Abaya Belgravia en azul marino, vista lateral. Abaya de lujo contemporánea de Bint Saeed Abu Dabi, Emiratos Árabes Unidos, que muestra movimiento elegante, ribete tejido a mano inspirado en la tradición emiratí del tejido Khous y silueta fluida inspirada en el bisht.',
      'Абая Belgravia тёмно-синего цвета, вид сбоку. Современная роскошная абая от Bint Saeed Абу-Даби, Объединённые Арабские Эмираты, демонстрирующая грациозное движение, ручную отделку, вдохновлённую эмиратской традицией плетения Khous, и плавный силуэт в стиле бишт.',
      'Belgravia长袍，海军蓝，侧面视图。Bint Saeed阿布扎比、阿拉伯联合酋长国当代奢华长袍，展现优雅动感、灵感源自阿联酋Khous编织传统的手工编织饰边与流畅Bisht风格廓形。',
      'Belgravia-Abaya in Marineblau, Seitenansicht. Zeitgenössische Luxusabaya von Bint Saeed Abu Dhabi, Vereinigte Arabische Emirate, mit anmutiger Bewegung, handgewebter Verzierung inspiriert von der emiratischen Khous-Webtradition und fließender Bisht-inspirierter Silhouette.',
      'Belgravia abaya in marineblauw, zijaanzicht. Eigentijdse luxe abaya van Bint Saeed Abu Dhabi, Verenigde Arabische Emiraten, met sierlijke beweging, handgeweven afwerking geïnspireerd op de Emiratische Khous-weeftraditie en een vloeiend bisht-geïnspireerd silhouet.',
      'Abaya Belgravia em azul-marinho, vista lateral. Abaya de luxo contemporânea da Bint Saeed Abu Dhabi, Emirados Árabes Unidos, com movimento gracioso, acabamento tecido à mão inspirado na tradição emirati de tecelagem Khous e silhueta fluida inspirada no bisht.',
    ),
  },
  {
    filename: 'bint-saeed-belgravia-abaya-navy-blue-back.webp',
    alts: altLoc(
      'Belgravia Abaya in Navy Blue, back view. Designer abaya by Bint Saeed Abu Dhabi, United Arab Emirates, highlighting clean lines, full-length drape, and a handwoven trim inspired by the Emirati tradition of Khous weaving.',
      'عباءة Belgravia بالأزرق الكحلي، منظر خلفي. عباءة مصمّمة من Bint Saeed أبوظبي، الإمارات العربية المتحدة، تبرز الخطوط النظيفة والتدلّي الكامل، وزخرفة منسوجة يدوياً مستوحاة من تقاليد الحياكة الإماراتية الخوص.',
      'Abaya Belgravia en bleu marine, vue de dos. Abaya de créateur par Bint Saeed Abou Dabi, Émirats arabes unis, soulignant des lignes épurées, une tombée pleine longueur et une garniture tissée à la main inspirée de la tradition émiratie du tissage Khous.',
      'Abaya Belgravia in blu navy, vista posteriore. Abaya designer di Bint Saeed Abu Dhabi, Emirati Arabi Uniti, che evidenzia linee pulite, drappeggio a tutta lunghezza e finitura tessuta a mano ispirata alla tradizione emiratina della tessitura Khous.',
      'Abaya Belgravia en azul marino, vista trasera. Abaya de diseñador de Bint Saeed Abu Dabi, Emiratos Árabes Unidos, que destaca líneas limpias, caída de largo completo y ribete tejido a mano inspirado en la tradición emiratí del tejido Khous.',
      'Абая Belgravia тёмно-синего цвета, вид сзади. Дизайнерская абая от Bint Saeed Абу-Даби, Объединённые Арабские Эмираты, подчёркивающая чистые линии, драпировку во всю длину и ручную отделку, вдохновлённую эмиратской традицией плетения Khous.',
      'Belgravia长袍，海军蓝，背面视图。Bint Saeed阿布扎比、阿拉伯联合酋长国设计师长袍，凸显利落线条、全长垂坠与灵感源自阿联酋Khous编织传统的手工编织饰边。',
      'Belgravia-Abaya in Marineblau, Rückansicht. Designer-Abaya von Bint Saeed Abu Dhabi, Vereinigte Arabische Emirate, mit klaren Linien, ganzkörperlichem Fall und handgewebter Verzierung inspiriert von der emiratischen Khous-Webtradition.',
      'Belgravia abaya in marineblauw, achteraanzicht. Designer abaya van Bint Saeed Abu Dhabi, Verenigde Arabische Emiraten, met strakke lijnen, volledige lengte drapering en handgeweven afwerking geïnspireerd op de Emiratische Khous-weeftraditie.',
      'Abaya Belgravia em azul-marinho, vista traseira. Abaya de designer da Bint Saeed Abu Dhabi, Emirados Árabes Unidos, destacando linhas limpas, caimento de comprimento total e acabamento tecido à mão inspirado na tradição emirati de tecelagem Khous.',
    ),
  },
]

export const PRODUCT_IMAGE_ALT_I18N: Record<string, Record<AppLocale, string>> = Object.fromEntries(
  ALT_ENTRIES.map(({ filename, alts }) => [filename, alts]),
)

export function getLocalizedProductImageAltOverride(
  filename: string,
  locale: AppLocale = 'en',
): string | undefined {
  const row = PRODUCT_IMAGE_ALT_I18N[filename]
  if (!row) return undefined
  return row[locale] ?? row.en
}

export function hasProductImageAltOverride(filename: string): boolean {
  return filename in PRODUCT_IMAGE_ALT_I18N
}
