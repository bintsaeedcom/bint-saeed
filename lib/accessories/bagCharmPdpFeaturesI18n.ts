import type { AppLocale } from '@/lib/i18n/routing'
import type { AlAinOasisBagCharmId } from '@/lib/accessories/bagCharmPdpContent'
import { getPhoneCharmSectionLabels } from '@/lib/accessories/phoneCharmPdpSectionLabelsI18n'
import { getJewelleryCareCopy } from '@/lib/accessories/jewelleryCareCopyI18n'

type StrandKey = 'oasis-i' | 'oasis-ii'

const ID_TO_STRAND: Record<AlAinOasisBagCharmId, StrandKey> = {
  'al-ain-oasis-i-bag-charm-fuchsia-jade': 'oasis-i',
  'al-ain-oasis-ii-bag-charm-fuchsia-jade': 'oasis-ii',
}

type FeatureTemplate = {
  houseCode: string
  craftedIn: string
  handAssembled: string
  length: string
  strands: Record<StrandKey, string>
  decorative: string
  clip: string
  beadLine: string
  rosetteLine: string
  hematite: string
  keyring: string
  variation: string
  colourLine: string
  giftBox: string
  care: string[]
  stoneLabel: string
}

/** Same measurements as Al Quaa phone charms; gold-tone ring clasp + keyring caution. */
const FEATURES_BY_LOCALE: Record<AppLocale, FeatureTemplate> = {
  en: {
    stoneLabel: 'Fuchsia Jade',
    houseCode: 'Bint Saeed Signature House Codes: Al Ain Rosette',
    craftedIn: 'Handcrafted in Abu Dhabi, United Arab Emirates',
    handAssembled: 'Hand-assembled natural stone bag charm',
    length: 'Approximate length: 15 cm / 5.9 in',
    strands: {
      'oasis-i': 'Two cascading strands of Fuchsia Jade',
      'oasis-ii': 'Three cascading strands of Fuchsia Jade',
    },
    decorative: 'Designed as a decorative accessory for handbags and evening bags',
    clip: 'Finished with a gold-tone ring clasp — clip opening approximately 0.8 mm / 0.03 in',
    beadLine: 'Genuine Fuchsia Jade round beads, approximately 7 mm',
    rosetteLine: 'Hand-carved Carnelian Al Ain Rosette, approximately 15 mm',
    hematite: 'Faceted gold-plated hematite spacer beads that catch and reflect the light',
    keyring:
      'May also be used as a keyring — handle with care; natural stones are fragile and may chip or break if struck against hard surfaces',
    variation: 'Natural variations in colour and pattern make each bag charm unique',
    colourLine: 'Colour: Fuchsia Jade',
    giftBox: 'Presented in a signature Bint Saeed gift box',
    care: [
      'Natural gemstones should last a lifetime when treated with the respect they deserve. Handle each bag charm gently; stones may chip or break if struck, dropped onto hard surfaces, or subjected to force.',
      'Avoid contact with water, perfumes, hair spray, nail polish remover and harsh chemicals, especially chlorine.',
      'Wipe gently with a soft, dry cloth when needed. Do not soak natural stones in water or cleansers.',
      'Store in a soft pouch or Bint Saeed gift box when not in use, away from sunlight, excessive heat and damp conditions.',
    ],
  },
  ar: {
    stoneLabel: 'يشم فوشي',
    houseCode: 'رموز الدار التوقيعية من Bint Saeed: روزيت العين',
    craftedIn: 'مصنوعة يدوياً في أبوظبي، الإمارات العربية المتحدة',
    handAssembled: 'تعليقة حقيبة من الأحجار الطبيعية مجمّعة يدوياً',
    length: 'الطول التقريبي: 15 سم / 5.9 إنش',
    strands: {
      'oasis-i': 'خيطان متدفقان من اليشم الفوشي',
      'oasis-ii': 'ثلاثة خيوط متدفقة من اليشم الفوشي',
    },
    decorative: 'مصممة كإكسسوار زخرفي للحقائب وحقائب المساء',
    clip: 'مُنهية بمشبك حلقي بلون الذهب — فتحة المشبك تقريباً 0.8 مم / 0.03 إنش',
    beadLine: 'خرز دائري أصيل من اليشم الفوشي، قطره تقريباً 7 مم',
    rosetteLine: 'روزيت العين من العقيق المنحوت يدوياً، قطرها تقريباً 15 مم',
    hematite: 'خرز هيمايت فاصل مطلي بالذهب ذو وجوه يلتقط الضوء ويعكسه',
    keyring:
      'يمكن استخدامها أيضاً كتعليقة مفاتيح — بحذر؛ الأحجار الطبيعية هشّة وقد تتشقّق أو تنكسر إذا اصطدمت بسطح صلب',
    variation: 'التباينات الطبيعية في اللون والنمط تجعل كل تعليقة حقيبة فريدة',
    colourLine: 'اللون: يشم فوشي',
    giftBox: 'تُقدَّم في علبة هدايا توقيعية من Bint Saeed',
    care: [
      'الأحجار الطبيعية تدوم عمراً كاملاً حين تُعامل بما تستحقه من احترام. تعاملي مع كل تعليقة حقيبة بلطف؛ فقد تتشقّق الأحجار أو تنكسر إذا ضُربت أو سقطت على سطح صلب أو تعرّضت لقوة.',
      'تجنّبي ملامسة الماء والعطور ومثبت الشعر ومزيل طلاء الأظافر والمواد الكيميائية القاسية، ولا سيّما الكلور.',
      'امسحي بلطف بقطعة قماش ناعمة وجافة عند الحاجة. لا تغمري الأحجار الطبيعية في الماء أو المنظفات.',
      'احفظيها في جراب ناعم أو علبة هدايا Bint Saeed عند عدم الاستخدام، بعيداً عن الشمس والحرارة الزائدة والرطوبة.',
    ],
  },
  fr: {
    stoneLabel: 'Jade fuchsia',
    houseCode: 'Bint Saeed Signature House Codes: Al Ain Rosette',
    craftedIn: 'Façonnée à la main à Abou Dabi, Émirats arabes unis',
    handAssembled: 'Breloque de sac en pierres naturelles assemblée à la main',
    length: 'Longueur approximative : 15 cm / 5,9 in',
    strands: {
      'oasis-i': 'Deux brins en cascade de jade fuchsia',
      'oasis-ii': 'Trois brins en cascade de jade fuchsia',
    },
    decorative: 'Conçue comme accessoire décoratif pour sacs à main et sacs de soirée',
    clip: 'Finie d’un fermoir anneau ton or — ouverture du clip d’environ 0,8 mm / 0,03 in',
    beadLine: 'Perles rondes authentiques en jade fuchsia, environ 7 mm',
    rosetteLine: 'Rosette d’Al Ain en cornaline sculptée à la main, environ 15 mm',
    hematite: 'Perles d’espacement en hématite facettée plaquée or qui captent et reflètent la lumière',
    keyring:
      'Peut aussi servir de porte-clés — avec précaution ; les pierres naturelles sont fragiles et peuvent s’ébrécher ou se briser au contact d’une surface dure',
    variation: 'Les variations naturelles de couleur et de motif rendent chaque breloque unique',
    colourLine: 'Couleur : Jade fuchsia',
    giftBox: 'Présentée dans un écrin cadeau signature Bint Saeed',
    care: [
      'Les pierres naturelles peuvent durer toute une vie lorsqu’elles sont traitées avec le respect qu’elles méritent. Manipulez chaque breloque avec délicatesse ; les pierres peuvent s’ébrécher ou se briser si elles sont heurtées, tombées ou soumises à une force.',
      'Évitez le contact avec l’eau, les parfums, la laque, le dissolvant et les produits chimiques agressifs, en particulier le chlore.',
      'Essuyez délicatement avec un chiffon doux et sec si nécessaire. N’immergez pas les pierres naturelles.',
      'Rangez dans une pochette douce ou un écrin Bint Saeed lorsqu’elle n’est pas portée, à l’abri du soleil, de la chaleur excessive et de l’humidité.',
    ],
  },
  it: {
    stoneLabel: 'Giada fucsia',
    houseCode: 'Codice della Maison: Rosetta di Al Ain',
    craftedIn: 'Realizzato a mano ad Abu Dhabi, Emirati Arabi Uniti',
    handAssembled: 'Ciondolo per borsa in pietra naturale assemblato a mano',
    length: 'Lunghezza approssimativa: 15 cm / 5,9 in',
    strands: {
      'oasis-i': 'Due fili a cascata di giada fucsia',
      'oasis-ii': 'Tre fili a cascata di giada fucsia',
    },
    decorative: 'Pensato come accessorio decorativo per borse e clutch da sera',
    clip: 'Finito con un fermaglio ad anello tono oro — apertura del clip circa 0,8 mm / 0,03 in',
    beadLine: 'Perle rotonde autentiche in giada fucsia, circa 7 mm',
    rosetteLine: 'Rosetta di Al Ain in corniola intagliata a mano, circa 15 mm',
    hematite: 'Perle distanziali in ematite sfaccettata placcata oro che catturano e riflettono la luce',
    keyring:
      'Può essere usato anche come portachiavi — con cautela; le pietre naturali sono fragili e possono scheggiarsi o rompersi se colpite contro superfici dure',
    variation: 'Le variazioni naturali di colore e pattern rendono unico ogni ciondolo',
    colourLine: 'Colore: Giada fucsia',
    giftBox: 'Presentato in un cofanetto regalo firma Bint Saeed',
    care: [
      'Le gemme naturali possono durare una vita intera se trattate con il rispetto che meritano. Maneggiate ogni ciondolo con delicatezza; le pietre possono scheggiarsi o rompersi se urtate, fatte cadere o sottoposte a forza.',
      'Evitate il contatto con acqua, profumi, lacca, solvente e prodotti chimici aggressivi, in particolare il cloro.',
      'Pulite delicatamente con un panno morbido e asciutto. Non immergete le pietre naturali.',
      'Conservate in una custodia morbida o in uno scrigno Bint Saeed quando non indossato, lontano da sole, calore eccessivo e umidità.',
    ],
  },
  es: {
    stoneLabel: 'Jade fucsia',
    houseCode: 'Código de la Maison: Roseta de Al Ain',
    craftedIn: 'Hecho a mano en Abu Dabi, Emiratos Árabes Unidos',
    handAssembled: 'Colgante para bolso de piedra natural ensamblado a mano',
    length: 'Longitud aproximada: 15 cm / 5,9 in',
    strands: {
      'oasis-i': 'Dos hebras en cascada de jade fucsia',
      'oasis-ii': 'Tres hebras en cascata de jade fucsia',
    },
    decorative: 'Diseñado como accesorio decorativo para bolsos y clutches de noche',
    clip: 'Acabado con un cierre de anillo tono oro — apertura del clip aproximadamente 0,8 mm / 0,03 in',
    beadLine: 'Cuentas redondas auténticas de jade fucsia, aproximadamente 7 mm',
    rosetteLine: 'Roseta de Al Ain en cornalina tallada a mano, aproximadamente 15 mm',
    hematite: 'Cuentas espaciadoras de hematita facetada baño de oro que captan y reflejan la luz',
    keyring:
      'También puede usarse como llavero — con cuidado; las piedras naturales son frágiles y pueden astillarse o romperse si golpean superficies duras',
    variation: 'Las variaciones naturales de color y patrón hacen único cada colgante',
    colourLine: 'Color: Jade fucsia',
    giftBox: 'Presentado en un estuche de regalo firma Bint Saeed',
    care: [
      'Las gemas naturales pueden durar toda una vida si se tratan con el respeto que merecen. Manipule cada colgante con delicadeza; las piedras pueden astillarse o romperse si se golpean, caen o se someten a fuerza.',
      'Evite el contacto con agua, perfumes, laca, quitaesmalte y químicos agresivos, especialmente el cloro.',
      'Limpie suavemente con un paño suave y seco. No sumerja las piedras naturales.',
      'Guarde en una funda suave o estuche Bint Saeed cuando no se use, lejos del sol, el calor excesivo y la humedad.',
    ],
  },
  ru: {
    stoneLabel: 'Фуксиевый нефрит',
    houseCode: 'Код дома: розетка Al Ain',
    craftedIn: 'Сделано вручную в Абу-Даби, ОАЭ',
    handAssembled: 'Подвеска для сумки из натурального камня, собранная вручную',
    length: 'Примерная длина: 15 см / 5,9 дюйма',
    strands: {
      'oasis-i': 'Две каскадные нити из фуксиевого нефрита',
      'oasis-ii': 'Три каскадные нити из фуксиевого нефрита',
    },
    decorative: 'Создана как декоративный аксессуар для сумок и вечерних клатчей',
    clip: 'Завершена золотистым кольцевым карабином — раскрытие клипа примерно 0,8 мм / 0,03 дюйма',
    beadLine: 'Настоящие круглые бусины из фуксиевого нефрита, примерно 7 мм',
    rosetteLine: 'Резная сердоликовая розетка Al Ain, примерно 15 мм',
    hematite: 'Позолоченные гранёные бусины-разделители из гематита, ловящие и отражающие свет',
    keyring:
      'Также может использоваться как брелок — осторожно; натуральные камни хрупки и могут сколоться или разбиться при ударе о твёрдую поверхность',
    variation: 'Природные вариации цвета и узора делают каждую подвеску уникальной',
    colourLine: 'Цвет: фуксиевый нефрит',
    giftBox: 'Подаётся в фирменной подарочной коробке Bint Saeed',
    care: [
      'Натуральные камни служат всю жизнь, если относиться к ним с уважением. Обращайтесь с подвеской бережно; камни могут сколоться или разбиться при ударе, падении или силе.',
      'Избегайте контакта с водой, духами, лаком, жидкостью для снятия лака и агрессивной химией, особенно хлором.',
      'Протирайте мягкой сухой тканью. Не замачивайте натуральные камни.',
      'Храните в мягком чехле или подарочной коробке Bint Saeed, вдали от солнца, жары и влаги.',
    ],
  },
  zh: {
    stoneLabel: '紫红玉',
    houseCode: '品牌符号：Al Ain 玫瑰花饰',
    craftedIn: '阿联酋阿布扎比手工制作',
    handAssembled: '手工组装的天然石手袋挂饰',
    length: '大约长度：15 厘米 / 5.9 英寸',
    strands: {
      'oasis-i': '两股紫红玉垂坠链',
      'oasis-ii': '三股紫红玉垂坠链',
    },
    decorative: '专为手袋与晚宴包设计的装饰配饰',
    clip: '配金色环形扣夹 — 夹口约 0.8 毫米 / 0.03 英寸',
    beadLine: '正宗紫红玉圆珠，约 7 毫米',
    rosetteLine: '手工雕刻红玉髓 Al Ain 玫瑰花饰，约 15 毫米',
    hematite: '镀金切面赤铁矿间隔珠，捕捉并反射光线',
    keyring:
      '亦可作钥匙扣使用 — 请小心；天然石材脆弱，撞击硬面可能崩裂',
    variation: '天然颜色与纹理差异使每件挂饰独一无二',
    colourLine: '颜色：紫红玉',
    giftBox: '置于 Bint Saeed 签名礼盒中呈献',
    care: [
      '天然宝石若得到应有的尊重护理，可伴随一生。请轻拿轻放；撞击、跌落硬面或受力可能导致崩裂。',
      '避免接触水、香水、定型喷雾、卸甲水及刺激性化学品，尤其是氯。',
      '需要时用柔软干布轻拭。勿浸泡天然石。',
      '不用时置于柔软袋或 Bint Saeed 礼盒中，远离阳光、过热与潮湿。',
    ],
  },
  de: {
    stoneLabel: 'Fuchsia-Jade',
    houseCode: 'Bint Saeed Signature House Codes: Al Ain Rosette',
    craftedIn: 'Handgefertigt in Abu Dhabi, Vereinigte Arabische Emirate',
    handAssembled: 'Handmontierter Naturstein-Taschenanhänger',
    length: 'Ungefähre Länge: 15 cm / 5,9 in',
    strands: {
      'oasis-i': 'Zwei Kaskadenstränge aus Fuchsia-Jade',
      'oasis-ii': 'Drei Kaskadenstränge aus Fuchsia-Jade',
    },
    decorative: 'Als dekoratives Accessoire für Handtaschen und Abendtaschen gestaltet',
    clip: 'Mit goldfarbenem Ringverschluss — Clip-Öffnung ca. 0,8 mm / 0,03 in',
    beadLine: 'Echte runde Fuchsia-Jade-Perlen, ca. 7 mm',
    rosetteLine: 'Handgeschnitzte Karneol-Al-Ain-Rosette, ca. 15 mm',
    hematite: 'Facettierte vergoldete Hämatit-Abstandsperlen, die Licht einfangen und reflektieren',
    keyring:
      'Auch als Schlüsselanhänger nutzbar — vorsichtig; Natursteine sind empfindlich und können bei Aufprall auf harte Oberflächen absplittern oder brechen',
    variation: 'Natürliche Variationen in Farbe und Muster machen jeden Anhänger einzigartig',
    colourLine: 'Farbe: Fuchsia-Jade',
    giftBox: 'Präsentiert in einer signature Bint Saeed Geschenkbox',
    care: [
      'Natursteine halten ein Leben lang, wenn sie mit dem gebührenden Respekt behandelt werden. Behandeln Sie jeden Anhänger behutsam; Steine können bei Stoß, Sturz oder Krafteinwirkung absplittern oder brechen.',
      'Vermeiden Sie Kontakt mit Wasser, Parfum, Haarspray, Nagellackentferner und aggressiven Chemikalien, insbesondere Chlor.',
      'Bei Bedarf sanft mit einem weichen, trockenen Tuch abwischen. Natursteine nicht einweichen.',
      'In einem weichen Beutel oder Bint-Saeed-Geschenketui aufbewahren, fern von Sonne, Hitze und Feuchtigkeit.',
    ],
  },
  nl: {
    stoneLabel: 'Fuchsia-jade',
    houseCode: 'Bint Saeed Signature House Codes: Al Ain Rosette',
    craftedIn: 'Handgemaakt in Abu Dhabi, Verenigde Arabische Emiraten',
    handAssembled: 'Met de hand gemonteerde natuursteen-tashanger',
    length: 'Geschatte lengte: 15 cm / 5,9 in',
    strands: {
      'oasis-i': 'Twee cascade-strengen van fuchsia-jade',
      'oasis-ii': 'Drie cascade-strengen van fuchsia-jade',
    },
    decorative: 'Ontworpen als decoratief accessoire voor handtassen en avondtassen',
    clip: 'Afgewerkt met een goudkleurige ringsluiting — clipopening ongeveer 0,8 mm / 0,03 in',
    beadLine: 'Echte ronde fuchsia-jadekralen, ongeveer 7 mm',
    rosetteLine: 'Handgesneden Al Ain Rosette van carneool, ongeveer 15 mm',
    hematite: 'Gefacetteerde verguld hematiet-tussenkralen die licht vangen en weerkaatsen',
    keyring:
      'Kan ook als sleutelhanger worden gebruikt — voorzichtig; natuursteen is kwetsbaar en kan splinteren of breken bij stoot tegen harde oppervlakken',
    variation: 'Natuurlijke variaties in kleur en patroon maken elke tashanger uniek',
    colourLine: 'Kleur: Fuchsia-jade',
    giftBox: 'Gepresenteerd in een signature Bint Saeed cadeauverpakking',
    care: [
      'Natuurlijke edelstenen gaan een leven mee wanneer ze met gepast respect worden behandeld. Behandel elke tashanger voorzichtig; stenen kunnen splinteren of breken bij stoot, val of kracht.',
      'Vermijd contact met water, parfum, haarlak, nagellakremover en agressieve chemicaliën, vooral chloor.',
      'Veeg indien nodig zachtjes af met een zachte, droge doek. Week natuursteen niet.',
      'Bewaar in een zacht zakje of Bint Saeed cadeaudoosje, uit de buurt van zon, hitte en vocht.',
    ],
  },
  pt: {
    stoneLabel: 'Jade fúcsia',
    houseCode: 'Código da Maison: Roseta de Al Ain',
    craftedIn: 'Feito à mão em Abu Dhabi, Emirados Árabes Unidos',
    handAssembled: 'Pingente para mala de pedra natural montado à mão',
    length: 'Comprimento aproximado: 15 cm / 5,9 in',
    strands: {
      'oasis-i': 'Duas correntes em cascata de jade fúcsia',
      'oasis-ii': 'Três correntes em cascata de jade fúcsia',
    },
    decorative: 'Desenhado como acessório decorativo para malas e clutches de noite',
    clip: 'Acabado com fecho de anel tom ouro — abertura do clip aproximadamente 0,8 mm / 0,03 in',
    beadLine: 'Contas redondas genuínas de jade fúcsia, aproximadamente 7 mm',
    rosetteLine: 'Roseta de Al Ain em cornalina esculpida à mão, aproximadamente 15 mm',
    hematite: 'Contas espaçadoras de hematite facetada banho de ouro que captam e reflectem a luz',
    keyring:
      'Também pode ser usado como porta-chaves — com cuidado; pedras naturais são frágeis e podem lascar ou partir se baterem em superfícies duras',
    variation: 'Variações naturais de cor e padrão tornam cada pingente único',
    colourLine: 'Cor: Jade fúcsia',
    giftBox: 'Apresentado numa caixa de presente signature Bint Saeed',
    care: [
      'Gemas naturais podem durar uma vida quando tratadas com o respeito que merecem. Manuseie cada pingente com cuidado; as pedras podem lascar ou partir se forem atingidas, caírem ou sofrerem força.',
      'Evite contacto com água, perfumes, lacas, removedor de verniz e químicos agressivos, especialmente cloro.',
      'Limpe suavemente com pano macio e seco. Não mergulhe pedras naturais.',
      'Guarde em bolsa macia ou caixa de presente Bint Saeed quando não estiver a usar, longe do sol, calor excessivo e humidade.',
    ],
  },
  id: {
    stoneLabel: 'Jade fuchsia',
    houseCode: 'Kode Rumah: Rosette Al Ain',
    craftedIn: 'Dibuat tangan di Abu Dhabi, Uni Emirat Arab',
    handAssembled: 'Liontin tas batu alam dirakit tangan',
    length: 'Panjang perkiraan: 15 cm / 5,9 in',
    strands: {
      'oasis-i': 'Dua untaian menjuntai jade fuchsia',
      'oasis-ii': 'Tiga untaian menjuntai jade fuchsia',
    },
    decorative: 'Dirancang sebagai aksesori dekoratif untuk tas tangan dan tas malam',
    clip: 'Diselesaikan dengan kait cincin warna emas — bukaan klip sekitar 0,8 mm / 0,03 in',
    beadLine: 'Manik bulat jade fuchsia asli, sekitar 7 mm',
    rosetteLine: 'Rosette Al Ain karnelian ukiran tangan, sekitar 15 mm',
    hematite: 'Manik spacer hematit berfaset berlapis emas yang menangkap dan memantulkan cahaya',
    keyring:
      'Juga dapat digunakan sebagai gantungan kunci — hati-hati; batu alam rapuh dan dapat retak atau patah jika terbentur permukaan keras',
    variation: 'Variasi alami warna dan pola membuat setiap liontin unik',
    colourLine: 'Warna: Jade fuchsia',
    giftBox: 'Disajikan dalam kotak hadiah signature Bint Saeed',
    care: [
      'Batu alam dapat bertahan seumur hidup jika diperlakukan dengan hormat. Tangani setiap liontin dengan lembut; batu dapat retak atau patah jika terbentur, jatuh, atau terkena gaya.',
      'Hindari kontak dengan air, parfum, hairspray, penghapus kuteks, dan bahan kimia keras, terutama klorin.',
      'Lap lembut dengan kain lembut kering bila perlu. Jangan rendam batu alam.',
      'Simpan dalam kantong lembut atau kotak hadiah Bint Saeed saat tidak digunakan, jauh dari sinar matahari, panas berlebih, dan kelembapan.',
    ],
  },
  ms: {
    stoneLabel: 'Jed fuchsia',
    houseCode: 'Kod Rumah: Rosette Al Ain',
    craftedIn: 'Dibuat tangan di Abu Dhabi, Emiriah Arab Bersatu',
    handAssembled: 'Liontin beg batu semula jadi dipasang tangan',
    length: 'Panjang anggaran: 15 cm / 5.9 in',
    strands: {
      'oasis-i': 'Dua untai menjuntai jed fuchsia',
      'oasis-ii': 'Tiga untai menjuntai jed fuchsia',
    },
    decorative: 'Direka sebagai aksesori hiasan untuk beg tangan dan beg malam',
    clip: 'Diselesaikan dengan kait cincin nada emas — bukaan klip lebih kurang 0.8 mm / 0.03 in',
    beadLine: 'Manik bulat jed fuchsia tulen, lebih kurang 7 mm',
    rosetteLine: 'Rosette Al Ain karnelian ukiran tangan, lebih kurang 15 mm',
    hematite: 'Manik spacer hematit berfaset bersalut emas yang menangkap dan memantulkan cahaya',
    keyring:
      'Boleh juga digunakan sebagai gantungan kunci — berhati-hati; batu semula jadi rapuh dan boleh retak atau pecah jika terlanggar permukaan keras',
    variation: 'Variasi semula jadi warna dan corak menjadikan setiap liontin unik',
    colourLine: 'Warna: Jed fuchsia',
    giftBox: 'Dihidangkan dalam kotak hadiah signature Bint Saeed',
    care: [
      'Batu semula jadi boleh bertahan seumur hidup jika dilayan dengan hormat. Kendalikan setiap liontin dengan lembut; batu boleh retak atau pecah jika terlanggar, jatuh atau dikenakan daya.',
      'Elakkan sentuhan dengan air, minyak wangi, hairspray, penanggal cat kuku dan bahan kimia keras, terutamanya klorin.',
      'Lap lembut dengan kain lembut kering bila perlu. Jangan rendam batu semula jadi.',
      'Simpan dalam pouch lembut atau kotak hadiah Bint Saeed apabila tidak digunakan, jauh dari matahari, haba berlebihan dan kelembapan.',
    ],
  },
}

export function buildBagCharmFeatures(
  id: AlAinOasisBagCharmId,
  locale: AppLocale,
): { featuresTitle: string; features: string[]; careLead: string; care: string[]; colour: string } {
  const t = FEATURES_BY_LOCALE[locale]
  if (!t) {
    throw new Error(`Missing bag charm features for locale: ${locale}`)
  }
  const strand = ID_TO_STRAND[id]
  const labels = getPhoneCharmSectionLabels(locale)
  const jewelleryCare = getJewelleryCareCopy(locale)

  return {
    featuresTitle: labels.featuresTitle,
    features: [
      t.houseCode,
      t.craftedIn,
      t.handAssembled,
      t.length,
      t.strands[strand],
      t.decorative,
      t.clip,
      t.beadLine,
      t.rosetteLine,
      t.hematite,
      t.keyring,
      t.variation,
      t.giftBox,
      t.colourLine,
    ],
    careLead: jewelleryCare.lead,
    care: [...jewelleryCare.bullets],
    colour: t.stoneLabel,
  }
}
