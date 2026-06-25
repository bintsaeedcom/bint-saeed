import type { AppLocale } from '@/lib/i18n/routing'
import type { ProductFaqItem } from '@/lib/products/productSchemaMeta'
import { getAlTalliHeritageFaqItem } from '@/lib/products/alTalliHeritageFaqI18n'
import { COVENT_GARDEN_ABAYA_FAQ_EN } from '@/data/coventGardenAbayaPdpFaq'

export const COVENT_GARDEN_ABAYA_SLUG = 'covent-garden-abaya'

function abayaFaq(
  definingQ: string,
  definingA: string,
  differentQ: string,
  differentA: string,
  wearQ: string,
  wearA: string,
  personaliseQ: string,
  personaliseA: string,
  locale: AppLocale,
): ProductFaqItem[] {
  return [
    { question: definingQ, answer: definingA },
    { question: differentQ, answer: differentA },
    getAlTalliHeritageFaqItem(locale),
    { question: wearQ, answer: wearA },
    { question: personaliseQ, answer: personaliseA },
  ]
}

const ABAYA_FAQ: Record<AppLocale, ProductFaqItem[]> = {
  en: COVENT_GARDEN_ABAYA_FAQ_EN,
  ar: abayaFaq(
    'لماذا تُعد عباية Covent Garden من إبداعات Bint Saeed المُعرِّفة؟',
    'لكل دار أزياء القطعة التي تُعرّفها. بالنسبة إلى Bint Saeed، عباية Covent Garden إحدى تلك الإبداعات. تجمع بين التفصيل المعاصر والفن والحرفية الإماراتية، وصُنعت للنساء اللواتي يقدّرن التصميم الاستثنائي والتفاصيل ذات المعنى والأناقة الخالدة التي تبقى رائجة خارج مواسم الموضة.',
    'ما الذي يجعل عباية Covent Garden مختلفة عن العبايات الأخرى؟',
    'لم تُصمَّم عباية Covent Garden لتتبع الموضة. صُنعت لتصبح جزءاً دائماً من خزانة المرأة. من بنيتها الم refined وتفاصيل الكتف المميزة إلى إنهائها النظيف والجيوب الجانبية المخفية والوشاح القابل للفصل وأزرار Knotted Line الذهبية وأساور التلي المنسوجة — كل تفصيلة وُضعت بعناية. الفرق شيء ستشعرين به منذ اللحظة الأولى. طريقة سقوطها. طريقة حركتها. طريقة تغييرها لحضورك بشكل طبيعي. مثل كل عباية Bint Saeed، يمكن أيضاً تخصيصها بملصق داخلي مخفي مميز للدار، ليجعل كل قطعة فريدة لكِ.',
    'أين يمكنني ارتداء عباية Covent Garden؟',
    'صُنعت عباية Covent Garden للأعراس والمناسبات الرسمية والتجمعات الأنيقة والعشاءات الرسمية والفعاليات الثقافية واستقبالات السفارات والاحتفالات التي يهم فيها ترك انطباع دائم. تنتقل سيلويتها المعاصرة بسلاسة خارج الخليج، فتكون أنيقة بالقدر نفسه في أبوظبي ولندن وباريس وبروناي وتورنتو وحيثما تقدّر النساء الأناقة الخالدة والحرفية الاستثنائية والتصميم ذا المعنى.',
    'هل يمكنني تخصيص عباية Covent Garden؟',
    'نعم. مثل كل عباية Bint Saeed، تتضمن عباية Covent Garden الملصق الداخلي المخفي المميز للدار، حيث يمكنك إضافة اسم أو تاريخ أو رسالة ذات معنى. سواء لتمييز محطة شخصية أو الاحتفال بمناسبة خاصة أو إهداء عزيز، يصبح تفصيلاً خفياً يبقى قريباً منكِ في كل مرة ترتدينها.',
    'ar',
  ),
  fr: abayaFaq(
    'Pourquoi l’abaya Covent Garden est-elle l’une des créations définissantes de Bint Saeed ?',
    'Chaque maison de mode a la pièce qui la définit. Pour Bint Saeed, l’abaya Covent Garden en est une. Réunissant tailleur contemporain, art et artisanat émirati, elle a été créée pour les femmes qui apprécient un design exceptionnel, des détails porteurs de sens et une élégance intemporelle au-delà des saisons.',
    'Qu’est-ce qui distingue l’abaya Covent Garden des autres abayas ?',
    'L’abaya Covent Garden n’a jamais été conçue pour suivre les tendances. Elle a été créée pour devenir une pièce durable de la garde-robe. De sa structure raffinée et de ses épaulettes distinctives à ses finitions épurées, ses poches latérales dissimulées, son écharpe amovible, ses boutons dorés Knotted Line et ses poignets tissés Al Talli, chaque détail a été soigneusement pensé. La différence se ressent dès que vous la portez — la façon dont elle tombe, dont elle bouge, dont elle transforme naturellement votre port. Comme chaque abaya Bint Saeed, elle peut aussi être personnalisée avec l’étiquette intérieure cachée signature de la maison.',
    'Où porter l’abaya Covent Garden ?',
    'L’abaya Covent Garden a été créée pour les mariages, occasions officielles, réceptions élégantes, dîners formels, événements culturels, réceptions d’ambassades et célébrations où l’on souhaite marquer les esprits. Sa silhouette contemporaine voyage au-delà du Golfe avec la même élégance à Abou Dabi, Londres, Paris, Brunei, Toronto et partout où les femmes apprécient l’élégance intemporelle, l’artisanat exceptionnel et un design porteur de sens.',
    'Puis-je personnaliser l’abaya Covent Garden ?',
    'Oui. Comme chaque abaya Bint Saeed, l’abaya Covent Garden comporte l’étiquette intérieure cachée signature de la maison, où vous pouvez ajouter un nom, une date ou un message personnel. Pour marquer une étape, célébrer une occasion ou offrir un cadeau précieux, c’est un détail discret qui reste proche de vous à chaque port.',
    'fr',
  ),
  de: abayaFaq(
    'Warum ist die Covent Garden Abaya eine der prägenden Kreationen von Bint Saeed?',
    'Jedes Modehaus hat das Stück, das es definiert. Für Bint Saeed ist die Covent Garden Abaya eine davon. Sie vereint zeitgenössisches Schneiderhandwerk, Kunst und emiratisches Handwerk und wurde für Frauen geschaffen, die außergewöhnliches Design, bedeutungsvolle Details und zeitlose Eleganz jenseits der Saisons schätzen.',
    'Was unterscheidet die Covent Garden Abaya von anderen Abayas?',
    'Die Covent Garden Abaya wurde nie für Trends entworfen. Sie soll ein bleibender Teil der Garderobe werden. Von der raffinierten Struktur und den charakteristischen Schulterdetails bis zu sauberen Finishes, versteckten Seitentaschen, abnehmbarem Statement-Schal, goldfarbenen Knotted-Line-Knöpfen und Al-Talli-Webmanschetten — jedes Detail wurde sorgfältig bedacht. Den Unterschied spüren Sie beim Anziehen: wie sie fällt, sich bewegt und natürlich Ihre Haltung verändert. Wie jede Bint-Saeed-Abaya kann sie mit dem charakteristischen versteckten Innenetikett personalisiert werden.',
    'Wo kann ich die Covent Garden Abaya tragen?',
    'Die Covent Garden Abaya wurde für Hochzeiten, offizielle Anlässe, elegante Empfänge, formelle Dinners, Kulturveranstaltungen, Botschaftsempfänge und Feiern geschaffen, bei denen Eindruck zählt. Ihre zeitgenössische Silhouette wirkt über den Golf hinaus — in Abu Dhabi, London, Paris, Brunei, Toronto und überall, wo Frauen zeitlose Eleganz, außergewöhnliches Handwerk und bedeutungsvolles Design schätzen.',
    'Kann ich die Covent Garden Abaya personalisieren?',
    'Ja. Wie jede Bint-Saeed-Abaya verfügt die Covent Garden Abaya über das charakteristische versteckte Innenetikett, auf dem Sie einen Namen, ein Datum oder eine persönliche Botschaft hinzufügen können — ein diskretes Detail, das Ihnen bei jedem Tragen nahe bleibt.',
    'de',
  ),
  it: abayaFaq(
    'Perché l’abaya Covent Garden è una delle creazioni che definiscono Bint Saeed?',
    'Ogni maison ha il capo che la definisce. Per Bint Saeed, l’abaya Covent Garden è una di quelle creazioni. Unendo sartoria contemporanea, arte e artigianato emiratino, è stata creata per donne che apprezzano design eccezionale, dettagli significativi ed eleganza senza tempo oltre le stagioni.',
    'Cosa rende l’abaya Covent Garden diversa dalle altre abaya?',
    'L’abaya Covent Garden non è mai stata pensata per seguire le tendenze, ma per diventare un capo duraturo del guardaroba. Dalla struttura raffinata e dalle spalline distintive alle finiture pulite, tasche laterali nascoste, fascia statement removibile, bottoni dorati Knotted Line e polsini in Al Talli — ogni dettaglio è stato considerato con cura. La differenza si sente al primo indosso. Come ogni abaya Bint Saeed, può essere personalizzata con l’etichetta interna nascosta signature della maison.',
    'Dove posso indossare l’abaya Covent Garden?',
    'L’abaya Covent Garden è stata creata per matrimoni, occasioni ufficiali, ricevimenti eleganti, cene formali, eventi culturali, ricevimenti in ambasciata e celebrazioni in cui conta lasciare un’impressione duratura. La sua silhouette contemporanea è altrettanto elegante ad Abu Dhabi, Londra, Parigi, Brunei, Toronto e ovunque si apprezzino eleganza senza tempo, artigianato eccezionale e design significativo.',
    'Posso personalizzare l’abaya Covent Garden?',
    'Sì. Come ogni abaya Bint Saeed, presenta l’etichetta interna nascosta signature dove aggiungere nome, data o messaggio personale — un dettaglio discreto che resta vicino a voi ogni volta che la indossate.',
    'it',
  ),
  es: abayaFaq(
    '¿Por qué la abaya Covent Garden es una de las creaciones definitorias de Bint Saeed?',
    'Toda casa de moda tiene la pieza que la define. Para Bint Saeed, la abaya Covent Garden es una de esas creaciones. Reuniendo sastrería contemporánea, arte y artesanía emiratí, fue creada para mujeres que aprecian diseño excepcional, detalles con significado y elegancia atemporal más allá de las temporadas.',
    '¿Qué hace diferente a la abaya Covent Garden de otras abayas?',
    'La abaya Covent Garden nunca fue diseñada para seguir tendencias, sino para convertirse en parte duradera del armario. Desde su estructura refinada y hombreras distintivas hasta acabados limpios, bolsillos laterales ocultos, fajín statement desmontable, botones dorados Knotted Line y puños tejidos en Al Talli — cada detalle ha sido cuidadosamente considerado. La diferencia se siente al ponérsela. Como toda abaya Bint Saeed, puede personalizarse con la etiqueta interior oculta signature de la casa.',
    '¿Dónde puedo llevar la abaya Covent Garden?',
    'La abaya Covent Garden fue creada para bodas, ocasiones oficiales, reuniones elegantes, cenas formales, eventos culturales, recepciones en embajadas y celebraciones donde importa dejar huella. Su silueta contemporánea es igual de elegante en Abu Dabi, Londres, París, Brunei, Toronto y dondequiera que se valore la elegancia atemporal, la artesanía excepcional y el diseño con significado.',
    '¿Puedo personalizar la abaya Covent Garden?',
    'Sí. Como toda abaya Bint Saeed, incluye la etiqueta interior oculta signature donde añadir nombre, fecha o mensaje personal — un detalle discreto que permanece cerca cada vez que la lleva.',
    'es',
  ),
  ru: abayaFaq(
    'Почему абайя Covent Garden — одно из определяющих творений Bint Saeed?',
    'У каждого модного дома есть изделие, которое его определяет. Для Bint Saeed абайя Covent Garden — одно из таких творений. Объединяя современный крой, искусство и эмиратское мастерство, она создана для женщин, ценящих исключительный дизайн, значимые детали и вневременную элегантность.',
    'Чем абайя Covent Garden отличается от других абай?',
    'Абайя Covent Garden никогда не создавалась для трендов — она должна стать постоянной частью гардероба. От утончённой структуры и характерных погон до чистой отделки, скрытых боковых карманов, съёмной statement-ленты, золотистых пуговиц Knotted Line и манжет Al Talli — каждая деталь продумана. Разницу вы почувствуете с первого надевания. Как и каждая абайя Bint Saeed, её можно персонализировать скрытой внутренней биркой дома.',
    'Где можно носить абайю Covent Garden?',
    'Абайя Covent Garden создана для свадеб, официальных мероприятий, элегантных приёмов, формальных ужинов, культурных событий, приёмов в посольствах и праздников, где важно произвести впечатление. Её современный силуэт одинаково уместен в Абу-Даби, Лондоне, Париже, Брунее, Торонто и везде, где ценят вневременную элегантность и исключительное мастерство.',
    'Можно ли персонализировать абайю Covent Garden?',
    'Да. Как и каждая абайя Bint Saeed, она имеет фирменную скрытую внутреннюю бирку для имени, даты или личного послания — деликатная деталь, которая остаётся с вами при каждом надевании.',
    'ru',
  ),
  zh: abayaFaq(
    '为何 Covent Garden 长袍是 Bint Saeed 的标志性创作之一？',
    '每个时装屋都有定义品牌的作品。对 Bint Saeed 而言，Covent Garden 长袍正是其中之一。融合当代剪裁、艺术与阿联酋工艺，为欣赏卓越设计、有意义细节与超越季节的隽永优雅的女性而创。',
    'Covent Garden 长袍与其他长袍有何不同？',
    'Covent Garden 长袍并非追随潮流，而是成为衣橱中历久弥新的单品。从精致结构与标志性肩章，到利落收尾、隐藏侧袋、可拆卸 statement 饰带、Knotted Line 金色调纽扣与 Al Talli 编织袖口——每个细节都经过深思熟虑。穿上即可感受差异。与所有 Bint Saeed 长袍一样，可通过标志性隐藏内标个性化定制。',
    'Covent Garden 长袍适合哪些场合？',
    '适用于婚礼、正式场合、优雅聚会、正式晚宴、文化活动、使馆招待会与值得铭记的庆典。当代廓形轻松跨越海湾之外，在阿布扎比、伦敦、巴黎、文莱、多伦多及任何重视隽永优雅与卓越工艺之地同样得体。',
    '可以个性化定制 Covent Garden 长袍吗？',
    '可以。与所有 Bint Saeed 长袍一样，配有标志性隐藏内标，可添加姓名、日期或有意义的信息——每次穿着都贴近内心的低调细节。',
    'zh',
  ),
  nl: abayaFaq(
    'Waarom is de Covent Garden abaya een van de bepalende creaties van Bint Saeed?',
    'Elk modehuis heeft het stuk dat het definieert. Voor Bint Saeed is de Covent Garden abaya zo’n creatie. Met eigentijdse tailoring, kunst en Emiratisch vakmanschap, gemaakt voor vrouwen die uitzonderlijk design, betekenisvolle details en tijdloze elegantie waarderen.',
    'Wat maakt de Covent Garden abaya anders dan andere abaya’s?',
    'De Covent Garden abaya is nooit ontworpen om trends te volgen, maar om een blijvend deel van de garderobe te worden. Van verfijnde structuur en epauletten tot strakke afwerking, verborgen zijzakken, afneembare statement-sjaal, gouden Knotted Line-knopen en Al Talli-manchetten — elk detail is zorgvuldig overwogen. Het verschil voelt u meteen. Zoals elke Bint Saeed-abaya kan ze worden gepersonaliseerd met het kenmerkende verborgen binnenlabel.',
    'Waar kan ik de Covent Garden abaya dragen?',
    'Gemaakt voor bruiloften, officiële gelegenheden, elegante bijeenkomsten, formele diners, culturele evenementen, ambassade-recepties en vieringen waar indruk telt. Even elegant in Abu Dhabi, Londen, Parijs, Brunei, Toronto en overal waar tijdloze elegantie wordt gewaardeerd.',
    'Kan ik de Covent Garden abaya personaliseren?',
    'Ja. Met het kenmerkende verborgen binnenlabel kunt u een naam, datum of persoonlijke boodschap toevoegen — een discreet detail dat dicht bij u blijft bij elke wear.',
    'nl',
  ),
  pt: abayaFaq(
    'Porque é a abaya Covent Garden uma das criações definidoras da Bint Saeed?',
    'Toda a casa de moda tem a peça que a define. Para a Bint Saeed, a abaya Covent Garden é uma dessas criações. Reunindo alfaiataria contemporânea, arte e artesanato emirati, foi criada para mulheres que valorizam design excecional, detalhes com significado e elegância intemporal.',
    'O que torna a abaya Covent Garden diferente das outras abayas?',
    'A abaya Covent Garden nunca foi desenhada para seguir tendências, mas para se tornar parte duradoura do guarda-roupa. Da estrutura refinada às almofadas de ombro, acabamentos limpos, bolsos laterais ocultos, faixa statement destacável, botões dourados Knotted Line e punhos em Al Talli — cada detalhe foi cuidadosamente considerado. A diferença sente-se ao vestir. Como toda a abaya Bint Saeed, pode ser personalizada com a etiqueta interior oculta signature.',
    'Onde posso usar a abaya Covent Garden?',
    'Criada para casamentos, ocasiões oficiais, encontros elegantes, jantares formais, eventos culturais, receções em embaixadas e celebrações memoráveis. A silhueta contemporânea é igualmente elegante em Abu Dhabi, Londres, Paris, Brunei, Toronto e onde quer que se valorize elegância intemporal.',
    'Posso personalizar a abaya Covent Garden?',
    'Sim. Com a etiqueta interior oculta signature pode adicionar nome, data ou mensagem pessoal — um detalhe discreto que permanece próximo em cada uso.',
    'pt',
  ),
  id: abayaFaq(
    'Mengapa abaya Covent Garden adalah salah satu kreasi penentu Bint Saeed?',
    'Setiap rumah mode memiliki potongan yang mendefinisikannya. Bagi Bint Saeed, abaya Covent Garden adalah salah satunya. Menggabungkan tailoring kontemporer, seni, dan kerajinan Emirati, diciptakan untuk wanita yang menghargai desain luar biasa, detail bermakna, dan elegansi abadi.',
    'Apa yang membuat abaya Covent Garden berbeda dari abaya lain?',
    'Abaya Covent Garden tidak pernah dirancang mengikuti tren, melainkan menjadi bagian abadi lemari pakaian. Dari struktur halus dan epaulet khas hingga finishing bersih, saku samping tersembunyi, sash statement yang dapat dilepas, kancing Knotted Line emas, dan manset anyaman Al Talli — setiap detail dipertimbangkan dengan saksama. Perbedaannya terasa saat pertama kali dikenakan. Seperti setiap abaya Bint Saeed, dapat dipersonalisasi dengan label dalam tersembunyi signature.',
    'Di mana saya bisa mengenakan abaya Covent Garden?',
    'Diciptakan untuk pernikahan, acara resmi, pertemuan elegan, makan malam formal, acara budaya, resepsi kedutaan, dan perayaan penting. Siluet kontemporernya sama elegannya di Abu Dhabi, London, Paris, Brunei, Toronto, dan di mana pun elegansi abadi dihargai.',
    'Bisakah saya mempersonalisasi abaya Covent Garden?',
    'Ya. Dengan label dalam tersembunyi signature, Anda dapat menambahkan nama, tanggal, atau pesan bermakna — detail halus yang tetap dekat setiap kali dikenakan.',
    'id',
  ),
  ms: abayaFaq(
    'Mengapa abaya Covent Garden ialah salah satu ciptaan penentu Bint Saeed?',
    'Setiap rumah fesyen mempunyai kepingan yang mentakrifkannya. Bagi Bint Saeed, abaya Covent Garden ialah salah satunya. Menggabungkan jahitan kontemporari, seni, dan kraf Emirati, dicipta untuk wanita yang menghargai reka bentuk luar biasa, butiran bermakna, dan keanggunan abadi.',
    'Apakah yang membezakan abaya Covent Garden daripada abaya lain?',
    'Abaya Covent Garden tidak pernah direka untuk mengikuti trend, tetapi menjadi bahagian kekal almari pakaian. Dari struktur halus dan epaulet khas hingga kemasan bersih, poket sisi tersembunyi, sash statement boleh tanggal, butang Knotted Line emas, dan manset anyaman Al Talli — setiap butiran dipertimbangkan dengan teliti. Perbezaannya dirasai sebaik dipakai. Seperti setiap abaya Bint Saeed, ia boleh diperibadikan dengan label dalaman tersembunyi signature.',
    'Di manakah saya boleh memakai abaya Covent Garden?',
    'Dicipta untuk perkahwinan, majlis rasmi, perhimpunan elegan, majlis makan malam formal, acara budaya, resepsi kedutaan, dan perayaan penting. Siluet kontemporarinya sama anggun di Abu Dhabi, London, Paris, Brunei, Toronto, dan di mana sahaja keanggunan abadi dihargai.',
    'Bolehkah saya memperibadikan abaya Covent Garden?',
    'Ya. Dengan label dalaman tersembunyi signature, anda boleh menambah nama, tarikh, atau mesej bermakna — butiran halus yang kekal dekat setiap kali dipakai.',
    'ms',
  ),
}

export function isCoventGardenAbayaSlug(slug: string): boolean {
  return slug.toLowerCase() === COVENT_GARDEN_ABAYA_SLUG
}

export function getCoventGardenAbayaFaq(locale: AppLocale = 'en'): ProductFaqItem[] {
  return ABAYA_FAQ[locale] ?? ABAYA_FAQ.en
}

export function getLocalizedCoventGardenAbayaFaq(
  slug: string,
  locale: AppLocale = 'en',
): ProductFaqItem[] {
  if (!isCoventGardenAbayaSlug(slug)) return []
  return getCoventGardenAbayaFaq(locale)
}

export function getCoventGardenAbayaPdpFaq(locale: AppLocale = 'en'): ProductFaqItem[] {
  return getCoventGardenAbayaFaq(locale)
}
