import type { AppLocale } from '@/lib/i18n/routing'
import type { ProductFaqItem } from '@/lib/products/productSchemaMeta'
import { GROSVENOR_SET_FAQ_EN } from '@/data/grosvenorSetPdpFaq'

type FaqStrings = {
  sizesQ: string
  sizesA: string
  whereQ: string
  whereA: string
  stylingQ: string
  stylingA: string
  alTalliQ: string
  alTalliA: string
  jewelleryQ: string
  jewelleryA: string
  careQ: string
  careA: string
  customQ: string
  customA: string
}

function buildFaq(s: FaqStrings): ProductFaqItem[] {
  return [
    { question: s.sizesQ, answer: s.sizesA },
    { question: s.whereQ, answer: s.whereA },
    { question: s.stylingQ, answer: s.stylingA },
    { question: s.alTalliQ, answer: s.alTalliA },
    { question: s.jewelleryQ, answer: s.jewelleryA },
    { question: s.careQ, answer: s.careA },
    { question: s.customQ, answer: s.customA },
  ]
}

const FAQ_BY_LOCALE: Record<AppLocale, ProductFaqItem[]> = {
  en: GROSVENOR_SET_FAQ_EN,
  ar: buildFaq({
    sizesQ: 'هل يمكنني طلب القميص والتنورة بمقاسات مختلفة؟',
    sizesA:
      'نعم. نتفهم أن كثيراً من النساء لديهن مقاسات مختلفة للجزء العلوي والسفلي. رغم أن Grosvenor Set يُباع كطقم منسّق كامل، يسعدنا تلبية مقاسات مختلفة كلما أمكن.\n\nاختاري مقاس التنورة المفضل عند الطلب، ثم في ملاحظات الطلب أثناء الدفع اذكري مقاس القميص. سيراجع فريق خدمة العملاء طلبك ويضمن تجهيز الطقم وفق مقاساتك.',
    whereQ: 'أين يمكنني ارتداء Grosvenor Set؟',
    whereA:
      'صُمم Grosvenor Set للمناسبات الرسمية والمسائية — حفلات الزفاف، والسهرات، وتجمعات العيد، واستقبالات السفارات، والعشاء حيث تهم نسب الساتن المنسّقة وتفاصيل التراث الإماراتي.\n\nنسّقيه مع الكعب وحقيبة منظمة لإطلالة مسائية كاملة. من أبوظبي إلى لندن وباريس وميلانو والرياض، يحمل نفس الأناقة الهادئة.',
    stylingQ: 'كيف يمكنني تنسيق القميص والتنورة؟',
    stylingA:
      'ارتدي القميص داخل التنورة الساتان الماكسي لخط محدّد، أو اربطيه عند الخصر لإطلالة أنعم، أو اتركيه منسدلاً فوق السيلويت لمساء بلا عناء. رغم تصميمهما كطقم منسّق، تعمل كل قطعة بجمال لوحدها — القميص مع بنطال مفصّل أو التنورة مع محبوك رقيق حين يطلب الموقف هدوءاً أكثر.',
    alTalliQ: 'ما هو التلي؟',
    alTalliA:
      'يُعد التلي أحد رموز Bint Saeed المميزة ومن أعز الحرف التراثية الإماراتية في دولة الإمارات العربية المتحدة، المعترف بها من اليونسكو كتراث ثقافي غير مادي. يُنسج تقليدياً يدوياً بخيوط معدنية، وقد زيّن الثياب الإماراتية منذ أجيال.\n\nفي Bint Saeed، نُعيد تفسير هذه الحرفة الرائعة عبر التفصيل المعاصر، ليُقدَّر جزء مهم من التراث الثقافي الإماراتي من المرأة اليوم.',
    jewelleryQ: 'هل مجوهرات العقيق المرفقة بالقطعة مشمولة؟',
    jewelleryA:
      'نعم. يشمل Grosvenor Set شريطين توقيعيين من العقيق يتصلان مباشرة بالقميص، ليصبحا جزءاً من القطعة نفسها. يمكن شراء خيوط أحجار طبيعية إضافية بشكل منفصل من مجموعة Signature Strands، لتغيير مجوهرات Grosvenor حسب مزاجك أو المناسبة.',
    careQ: 'كيف أعتني على Grosvenor Set؟',
    careA:
      'للحفاظ على الساتان وأزرار Knotted Line الذهبية المميزة وتفاصيل التلي الرقيقة، نوصي بالتنظيف الجاف الاحترافي فقط. وبما أن التلي زخرفة منسوجة معدنية تقليدية، فهي حرفة يدوية رقيقة ويجب التعامل معها بعناية للحفاظ على جمالها لسنوات قادمة.',
    customQ: 'هل يتوفر طول مخصص للتنورة الماكسي؟',
    customA:
      'نعم. يمكن طلب أطوال مخصصة للتنورة لتناسب طولك ومسافة الأرض المفضلة. اذكري ذلك في ملاحظات الطلب أو تواصلي مع خدمة العملاء قبل الشراء.',
  }),
  fr: buildFaq({
    sizesQ: 'Puis-je commander la chemise et la jupe dans des tailles différentes ?',
    sizesA:
      'Oui. Nous comprenons que beaucoup de femmes ont des tailles différentes pour le haut et le bas. Bien que le Grosvenor Set soit vendu en ensemble coordonné complet, nous pouvons accommoder des tailles différentes lorsque c’est possible.\n\nSélectionnez votre taille de jupe préférée, puis indiquez la taille de chemise souhaitée dans les Notes de commande. Notre équipe Service Client préparera votre set selon vos tailles.',
    whereQ: 'Où puis-je porter le Grosvenor Set ?',
    whereA:
      'Le Grosvenor Set a été créé pour les occasions formelles et du soir — mariages, galas, réceptions d’Eid, réceptions d’ambassade et dîners où la proportion satin coordonnée et le détail patrimonial émirati comptent.\n\nPortez-le avec talons et pochette structurée pour une allure de soirée complète. D’Abou Dabi à Londres, Paris, Milan et Riyad, il garde la même élégance posée.',
    stylingQ: 'Comment puis-je styliser la chemise et la jupe ?',
    stylingA:
      'Portez la chemise rentrée dans la jupe maxi en satin pour une ligne définie, nouée à la taille pour un registre plus doux, ou loose sur la silhouette pour un soir sans effort. Chaque styling se lit différemment ; tous restent indiscutablement Bint Saeed. Chaque pièce fonctionne aussi magnifiquement seule.',
    alTalliQ: "Qu'est-ce que l'Al Talli ?",
    alTalliA:
      'Al Talli est l’un des codes signature de Bint Saeed et l’un des savoir-faire traditionnels émiratis les plus précieux des Émirats arabes unis, reconnu par l’UNESCO comme patrimoine culturel immatériel. Traditionnellement tissé à la main avec des fils métalliques, il a paré les vêtements émiratis pendant des générations.\n\nChez Bint Saeed, nous réinterprétons ce savoir-faire remarquable par une tailleur contemporaine, permettant à une part importante du patrimoine culturel des Émirats d’être appréciée par la femme d’aujourd’hui.',
    jewelleryQ: 'La bijouterie-garment en onyx est-elle incluse ?',
    jewelleryA:
      'Oui. Le Grosvenor Set comprend deux fils Onyx signature qui s’attachent directement à la chemise, devenant partie intégrante du vêtement. Des fils en pierre naturelle supplémentaires peuvent être achetés séparément dans la collection Signature Strands, pour changer la bijouterie de Grosvenor selon votre humeur ou l’occasion.',
    careQ: 'Comment entretenir le Grosvenor Set ?',
    careA:
      'Pour préserver le satin, les boutons dorés signature Knotted Line et les délicats détails Al Talli, nous recommandons uniquement le nettoyage à sec professionnel. Al Talli étant une garniture tissée métallique traditionnelle, c’est un artisanat délicat qui doit être manipulé avec soin.',
    customQ: 'Une longueur sur mesure est-elle disponible pour la jupe maxi ?',
    customA:
      'Oui. Des longueurs sur mesure peuvent être demandées pour la jupe maxi. Précisez-le dans les Notes de commande ou contactez le Service Client avant l’achat.',
  }),
  de: buildFaq({
    sizesQ: 'Kann ich Hemd und Rock in unterschiedlichen Größen bestellen?',
    sizesA:
      'Ja. Viele Frauen haben unterschiedliche Größen für Ober- und Unterkörper. Das Grosvenor Set wird als koordinierter Komplett-Look verkauft; wir passen uns gerne an, wenn möglich.\n\nWählen Sie Ihre Rockgröße und geben Sie die gewünschte Hemdgröße in den Bestellhinweisen an. Unser Customer-Care-Team bereitet Ihr Set nach Ihren Größen vor.',
    whereQ: 'Wo kann ich das Grosvenor Set tragen?',
    whereA:
      'Das Grosvenor Set wurde für formelle und Abendanlässe geschaffen — Hochzeiten, Galas, Eid-Feiern, Botschaftsempfänge und Dinners, bei denen koordinierte Satin-Proportion und emiratisches Erbe zählen.\n\nMit Heels und strukturierter Clutch wird der Abendlook komplett. Von Abu Dhabi bis London, Paris, Mailand und Riad — dieselbe unhurried Eleganz.',
    stylingQ: 'Wie kann ich Hemd und Rock stylen?',
    stylingA:
      'Tragen Sie das Hemd in den Satin-Maxirock gesteckt für eine definierte Linie, an der Taille gebunden für einen weicheren Register, oder lose über der Silhouette für mühelosen Abend. Jedes Styling liest sich anders; alle bleiben unverkennbar Bint Saeed. Jedes Teil funktioniert auch wunderbar allein.',
    alTalliQ: 'Was ist Al Talli?',
    alTalliA:
      'Al Talli ist einer der Signature House Codes von Bint Saeed und eines der wertvollsten traditionellen emiratischen Handwerke der VAE, von der UNESCO als immaterielles Kulturerbe anerkannt. Traditionell von Hand mit metallischen Fäden gewebt, schmückt es seit Generationen emiratische Kleidung.\n\nBei Bint Saeed interpretieren wir dieses bemerkenswerte Handwerk durch zeitgenössisches Schneiderhandwerk neu.',
    jewelleryQ: 'Ist die Onyx-Garment Jewellery enthalten?',
    jewelleryA:
      'Ja. Das Grosvenor Set umfasst zwei signature Onyx-Stränge, die direkt am Hemd befestigt werden und Teil des Kleidungsstücks werden. Weitere Naturstein-Stränge sind separat in der Signature-Strands-Kollektion erhältlich.',
    careQ: 'Wie pflege ich das Grosvenor Set?',
    careA:
      'Um Satin, goldfarbene Knotted-Line-Knöpfe und zarte Al-Talli-Details zu bewahren, empfehlen wir ausschließlich professionelle chemische Reinigung. Al Talli ist ein empfindliches Handwerk — behutsam behandeln.',
    customQ: 'Ist Sonderlänge für den Maxirock möglich?',
    customA:
      'Ja. Sonderlängen für den Maxirock können angefragt werden — in Bestellhinweisen oder vor dem Kauf beim Customer Care.',
  }),
  it: buildFaq({
    sizesQ: 'Posso ordinare camicia e gonna in taglie diverse?',
    sizesA:
      'Sì. Comprendiamo che molte donne hanno taglie diverse per la parte superiore e inferiore. Sebbene il Grosvenor Set sia venduto come coordinate completo, possiamo accomodare taglie diverse quando possibile.\n\nSeleziona la taglia della gonna preferita e indica la taglia della camicia nelle Note ordine al checkout.',
    whereQ: 'Dove posso indossare il Grosvenor Set?',
    whereA:
      'Il Grosvenor Set è stato creato per occasioni formali e serali — matrimoni, galà, raduni di Eid, ricevimenti in ambasciata e cene dove contano la proporzione satin coordinata e il dettaglio patrimoniale emiratino.\n\nCon tacchi e pochette strutturata per un look serale completo. Da Abu Dhabi a Londra, Parigi, Milano e Riyadh — la stessa eleganza posata.',
    stylingQ: 'Come posso abbinare camicia e gonna?',
    stylingA:
      'Indossa la camicia infilata nella gonna maxi in raso per una linea definita, annodata in vita per un registro più morbido, o loose sulla silhouette per una sera senza sforzo. Ogni styling si legge diversamente; tutti restano inconfondibilmente Bint Saeed. Ogni capo funziona magnificamente anche da solo.',
    alTalliQ: "Che cos'è l'Al Talli?",
    alTalliA:
      'Al Talli è uno dei codici signature di Bint Saeed e una delle arti tradizionali emiratine più preziose degli Emirati Arabi Uniti, riconosciuta dall’UNESCO come patrimonio culturale immateriale. Tradizionalmente tessuto a mano con fili metallici, ha adornato abiti emiratini per generazioni.\n\nIn Bint Saeed reinterpretiamo questa straordinaria arte attraverso la sartoria contemporanea.',
    jewelleryQ: 'I gioielli-garment in onice sono inclusi?',
    jewelleryA:
      'Sì. Il Grosvenor Set include due fili in onice signature che si agganciano direttamente alla camicia, diventando parte del capo. Fili in pietra naturale aggiuntivi sono disponibili separatamente nella collezione Signature Strands.',
    careQ: 'Come devo curare il Grosvenor Set?',
    careA:
      'Per preservare il raso, i bottoni dorati signature Knotted Line e i delicati dettagli Al Talli, consigliamo solo lavaggio a secco professionale. Al Talli è un artigianato delicato — trattare con cura.',
    customQ: 'È disponibile una lunghezza su misura per la gonna maxi?',
    customA:
      'Sì. Lunghezze su misura possono essere richieste per la gonna maxi. Indicalo nelle Note ordine o contatta il Customer Care prima dell’acquisto.',
  }),
  es: buildFaq({
    sizesQ: '¿Puedo pedir la camisa y la falda en tallas diferentes?',
    sizesA:
      'Sí. Entendemos que muchas mujeres tienen tallas distintas arriba y abajo. Aunque el Grosvenor Set se vende como conjunto coordinado completo, podemos adaptar tallas cuando sea posible.\n\nSeleccione la talla de falda preferida e indique la talla de camisa en Notas del pedido.',
    whereQ: '¿Dónde puedo llevar el Grosvenor Set?',
    whereA:
      'El Grosvenor Set fue creado para ocasiones formales y nocturnas — bodas, galas, reuniones de Eid, recepciones en embajada y cenas donde importa la proporción satin coordinada y el detalle patrimonial emiratí.',
    stylingQ: '¿Cómo puedo estilizar la camisa y la falda?',
    stylingA:
      'Lleve la camisa metida en la falda maxi de satén para una línea definida, anudada en la cintura para un registro más suave, o suelta sobre la silueta para una noche sin esfuerzo. Cada styling se lee distinto; todos permanecen inconfundiblemente Bint Saeed. Cada pieza funciona maravillosamente por separado.',
    alTalliQ: '¿Qué es Al Talli?',
    alTalliA:
      'Al Talli es uno de los códigos signature de Bint Saeed y una de las artesanías tradicionales emiratíes más preciadas de los Emiratos Árabes Unidos, reconocida por la UNESCO como Patrimonio Cultural Inmaterial. Tejida tradicionalmente a mano con hilo metálico, ha adornado prendas emiratíes durante generaciones.\n\nEn Bint Saeed reinterpretamos esta notable artesanía a través de la sastrería contemporánea.',
    jewelleryQ: '¿Está incluida la joyería-garment de ónice?',
    jewelleryA:
      'Sí. El Grosvenor Set incluye dos hebras de ónice signature que se fijan directamente a la camisa, formando parte del propio capo. Hebras de piedra natural adicionales pueden comprarse por separado en la colección Signature Strands.',
    careQ: '¿Cómo cuidar el Grosvenor Set?',
    careA:
      'Para preservar el satén, los botones dorados signature Knotted Line y el delicado detalle Al Talli, recomendamos únicamente limpieza en seco profesional. Al Talli es una artesanía delicada — manejar con cuidado.',
    customQ: '¿Hay largo a medida para la falda maxi?',
    customA:
      'Sí. Se pueden solicitar largos a medida para la falda maxi. Indíquelo en Notas del pedido o contacte Atención al Cliente antes de comprar.',
  }),
  ru: buildFaq({
    sizesQ: 'Можно ли заказать рубашку и юбку разных размеров?',
    sizesA:
      'Да. Мы понимаем, что у многих женщин разные размеры верха и низа. Grosvenor Set продаётся как координированный комплект, но мы с радостью подберём разные размеры, когда это возможно.\n\nВыберите размер юбки и укажите размер рубашки в примечаниях к заказу.',
    whereQ: 'Где можно носить Grosvenor Set?',
    whereA:
      'Grosvenor Set создан для формальных и вечерних случаев — свадьбы, гала, праздники Eid, приёмы в посольствах и ужины, где важна согласованная атласная пропорция и эмиратское наследие.',
    stylingQ: 'Как стилизовать рубашку и юбку?',
    stylingA:
      'Заправьте рубашку в атласную юбку макси для чёткой линии, завяжите на талии для более мягкого образа или носите свободно поверх силуэта. Каждый способ читается по-разному; все остаются безошибочно Bint Saeed. Каждая деталь прекрасно работает отдельно.',
    alTalliQ: 'Что такое Al Talli?',
    alTalliA:
      'Al Talli — один из фирменных House Codes Bint Saeed и одно из самых ценных традиционных эмиратских ремёсел ОАЭ, признанное ЮНЕСКО нематериальным культурным наследием. Традиционно плетётся вручную металлической нитью и украшает эмиратскую одежду на протяжении поколений.\n\nВ Bint Saeed мы переосмысливаем это замечательное ремесло через современный крой.',
    jewelleryQ: 'Включены ли ониксовые garment jewellery?',
    jewelleryA:
      'Да. Grosvenor Set включает две фирменные нити из оникса, которые крепятся непосредственно к рубашке и становятся частью изделия. Дополнительные нити из натурального камня можно приобрести отдельно в коллекции Signature Strands.',
    careQ: 'Как ухаживать за Grosvenor Set?',
    careA:
      'Чтобы сохранить атлас, фирменные золотистые пуговицы Knotted Line и нежную отделку Al Talli, мы рекомендуем только профессиональную химчистку. Al Talli — деликатное ремесло, требующее бережного обращения.',
    customQ: 'Доступна ли индивидуальная длина юбки макси?',
    customA:
      'Да. Индивидуальная длина может быть запрошена. Укажите в примечаниях к заказу или свяжитесь с Customer Care.',
  }),
  zh: buildFaq({
    sizesQ: '衬衫和半裙可以选不同尺码吗？',
    sizesA:
      '可以。我们理解许多女性上下身尺码不同。Grosvenor 套装虽作为完整协调套装出售，我们尽可能满足不同尺码需求。下单时选择半裙尺码，并在订单备注中注明衬衫尺码。',
    whereQ: 'Grosvenor 套装适合哪些场合？',
    whereA:
      'Grosvenor 套装为正式与晚宴场合而创——婚礼、晚宴、开斋聚会、使馆接待与需要缎面协调比例及阿联酋传承细节的晚餐。搭配高跟鞋与结构感手包，完成晚间造型。',
    stylingQ: '衬衫与半裙如何搭配？',
    stylingA:
      '衬衫束入缎面及地半裙以勾勒线条，系于腰间呈现更柔和气质，或 loose 覆于廓形之上营造 effortless 晚间感。每种穿法各有韵味，皆 unmistakably Bint Saeed。两件单品亦可独立出色穿着。',
    alTalliQ: '什么是 Al Talli？',
    alTalliA:
      'Al Talli 是 Bint Saeed 标志性 House Code 之一，也是阿联酋最珍贵的传统阿联酋工艺之一，被联合国教科文组织认定为非物质文化遗产。传统上以金属线手工编织，世代点缀阿联酋服饰。\n\n在 Bint Saeed，我们通过当代剪裁重新诠释这一卓越工艺。',
    jewelleryQ: '玛瑙服饰珠宝是否包含在内？',
    jewelleryA:
      '包含。Grosvenor 套装附赠两条标志性玛瑙链，直接系于衬衫，成为服饰本身的一部分。更多天然石链饰可于 Signature Strands 系列单独选购，随心情与场合更换 Grosvenor 的珠宝表达。',
    careQ: '如何护理 Grosvenor 套装？',
    careA:
      '为保持缎面、标志性金色调 Knotted Line 纽扣及精致 Al Talli 细节，我们建议仅限专业干洗。Al Talli 为传统金属编织饰边，属精致手工艺，应悉心护理。',
    customQ: '及地半裙可定制长度吗？',
    customA:
      '可以。可请求定制半裙长度。请在订单备注中说明，或购前联系客服。',
  }),
  nl: buildFaq({
    sizesQ: 'Kan ik het overhemd en de rok in verschillende maten bestellen?',
    sizesA:
      'Ja. Veel vrouwen hebben verschillende maten boven en onder. Het Grosvenor Set wordt als compleet coördinatieset verkocht; we passen graag aan wanneer mogelijk. Selecteer uw rokmaat en vermeld de gewenste overhemdmaat in Bestelnotities.',
    whereQ: 'Waar kan ik de Grosvenor Set dragen?',
    whereA:
      'De Grosvenor Set is gemaakt voor formele en avondgelegenheden — bruiloften, galas, Eid-bijeenkomsten, ambassade-recepties en diners waar gecoördineerde satijn-proportie en Emirati erfgoed tellen.',
    stylingQ: 'Hoe style ik het overhemd en de rok?',
    stylingA:
      'Draag het overhemd in de satijnen maxirok voor een gedefinieerde lijn, geknoopt aan de taille voor een zachter register, of los over het silhouet. Elk styling leest anders; alle blijven onmiskenbaar Bint Saeed. Elk stuk werkt prachtig apart.',
    alTalliQ: 'Wat is Al Talli?',
    alTalliA:
      'Al Talli is een van de signature House Codes van Bint Saeed en een van de meest gekoesterde traditionele Emiratische ambachten van de VAE, erkend door UNESCO als immaterieel cultureel erfgoed. Traditioneel met de hand geweven met metallic draad, siert het generaties lang Emiratische kleding.\n\nBij Bint Saeed herinterpreteren we dit ambacht via eigentijdse kleermakerij.',
    jewelleryQ: 'Is de onyx garment jewellery inbegrepen?',
    jewelleryA:
      'Ja. Het Grosvenor Set omvat twee signature onyx strands die direct aan het overhemd bevestigen en deel van het kledingstuk worden. Extra natural stone strands zijn apart via Signature Strands.',
    careQ: 'Hoe verzorg ik de Grosvenor Set?',
    careA:
      'Om satijn, goudkleurige Knotted Line-knopen en delicate Al Talli-details te behouden, raden wij alleen professionele stomerij aan. Al Talli is een delicaat ambacht.',
    customQ: 'Is maatwerk lengte beschikbaar voor de maxirok?',
    customA:
      'Ja. Vraag dit aan in bestelnotities of contacteer Customer Care voor aankoop.',
  }),
  pt: buildFaq({
    sizesQ: 'Posso encomendar a camisa e a saia em tamanhos diferentes?',
    sizesA:
      'Sim. Compreendemos tamanhos diferentes entre parte superior e inferior. O Grosvenor Set é vendido como conjunto coordenado completo; acomodamos tamanhos diferentes quando possível. Selecione o tamanho da saia e indique o da camisa nas Notas do pedido.',
    whereQ: 'Onde posso usar o Grosvenor Set?',
    whereA:
      'O Grosvenor Set foi criado para ocasiões formais e noturnas — casamentos, galas, encontros de Eid, receções em embaixada e jantares onde a proporção cetim coordenada e o detalhe patrimonial emirati importam.',
    stylingQ: 'Como posso estilizar a camisa e a saia?',
    stylingA:
      'Use a camisa dentro da saia maxi em cetim para uma linha definida, amarrada na cintura para um registo mais suave, ou solta sobre a silhueta. Cada styling lê-se de forma diferente; todos permanecem inconfundivelmente Bint Saeed. Cada peça funciona lindamente sozinha.',
    alTalliQ: 'O que é Al Talli?',
    alTalliA:
      'Al Talli é um dos códigos signature da Bint Saeed e uma das artes tradicionais emiratis mais preciosas dos Emirados Árabes Unidos, reconhecida pela UNESCO como Património Cultural Imaterial. Tradicionalmente tecido à mão com fio metálico, adornou vestuário emirati durante gerações.\n\nNa Bint Saeed reinterpretamos esta arte através de alfaiataria contemporânea.',
    jewelleryQ: 'A joalharia-garment em ónix está incluída?',
    jewelleryA:
      'Sim. O Grosvenor Set inclui duas strands de ónix signature que se prendem diretamente à camisa, tornando-se parte da peça. Strands de pedra natural adicionais podem ser adquiridas separadamente na coleção Signature Strands.',
    careQ: 'Como cuidar do Grosvenor Set?',
    careA:
      'Para preservar o cetim, botões dourados signature Knotted Line e detalhes Al Talli delicados, recomendamos apenas limpeza a seco profissional. Al Talli é um artesanato delicado.',
    customQ: 'Há comprimento à medida para a saia maxi?',
    customA:
      'Sim. Solicite nas Notas do pedido ou contacte Apoio ao Cliente antes de comprar.',
  }),
  id: buildFaq({
    sizesQ: 'Bisakah saya memesan kemeja dan rok dalam ukuran berbeda?',
    sizesA:
      'Ya. Grosvenor Set dijual sebagai set koordinat lengkap; kami mengakomodasi ukuran berbeda jika memungkinkan. Pilih ukuran rok, lalu sebutkan ukuran kemeja di Catatan Pesanan.',
    whereQ: 'Di mana saya bisa memakai Grosvenor Set?',
    whereA:
      'Grosvenor Set dibuat untuk acara formal dan malam — pernikahan, gala, pertemuan Eid, resepsi kedutaan, dan makan malam di mana proporsi satin koordinat dan detail warisan Emirati penting.',
    stylingQ: 'Bagaimana cara menata kemeja dan rok?',
    stylingA:
      'Kenakan kemeja dimasukkan ke rok maxi satin untuk garis yang tegas, diikat di pinggang untuk register lebih lembut, atau longgar di atas siluet. Setiap gaya terbaca berbeda; semua tetap unmistakably Bint Saeed. Setiap potong juga indah dipakai sendiri.',
    alTalliQ: 'Apa itu Al Talli?',
    alTalliA:
      'Al Talli adalah salah satu House Code signature Bint Saeed dan salah satu kerajinan tradisional Emirati paling berharga di Uni Emirat Arab, diakui UNESCO sebagai Warisan Budaya Takbenda. Secara tradisional ditenun tangan dengan benang metalik, telah menghiasi pakaian Emirati selama generasi.\n\nDi Bint Saeed, kami menafsirkan kembali kerajinan ini melalui tailoring kontemporer.',
    jewelleryQ: 'Apakah garment jewellery onyx termasuk?',
    jewelleryA:
      'Ya. Grosvenor Set termasuk dua strand onyx signature yang dipasang langsung ke kemeja, menjadi bagian dari garment. Strand batu alami tambahan tersedia terpisah di koleksi Signature Strands.',
    careQ: 'Bagaimana merawat Grosvenor Set?',
    careA:
      'Untuk menjaga satin, kancing emas signature Knotted Line, dan detail Al Talli halus, kami merekomendasikan dry clean profesional saja. Al Talli adalah kerajinan halus — tangani dengan hati-hati.',
    customQ: 'Apakah panjang custom tersedia untuk rok maxi?',
    customA:
      'Ya. Sebutkan di Catatan Pesanan atau hubungi Customer Care sebelum membeli.',
  }),
  ms: buildFaq({
    sizesQ: 'Bolehkah saya memesan kemeja dan skirt dalam saiz berbeza?',
    sizesA:
      'Ya. Grosvenor Set dijual sebagai set koordinat lengkap; kami menampung saiz berbeza apabila boleh. Pilih saiz skirt, nyatakan saiz kemeja dalam Nota Pesanan.',
    whereQ: 'Di manakah saya boleh memakai Grosvenor Set?',
    whereA:
      'Grosvenor Set dicipta untuk majlis formal dan malam — perkahwinan, gala, perhimpunan Eid, resepsi kedutaan, dan makan malam di mana proporsi satin koordinat dan butiran warisan Emirati penting.',
    stylingQ: 'Bagaimana saya menggayakan kemeja dan skirt?',
    stylingA:
      'Pakai kemeja dimasukkan ke skirt maxi satin untuk garis yang jelas, diikat di pinggang untuk register lebih lembut, atau longgar atas siluet. Setiap gaya dibaca berbeza; semua kekal unmistakably Bint Saeed. Setiap potongan juga indah dipakai sendiri.',
    alTalliQ: 'Apakah Al Talli?',
    alTalliA:
      'Al Talli ialah salah satu Kod Rumah signature Bint Saeed dan salah satu kraf tradisional Emirati paling dihargai di Emiriah Arab Bersatu, diiktiraf UNESCO sebagai Warisan Budaya Tidak Ketara. Secara tradisinya ditenun tangan menggunakan benang logam, ia telah menghiasi pakaian Emirati selama generasi.\n\nDi Bint Saeed, kami mentafsir semula kraf ini melalui jahitan kontemporari.',
    jewelleryQ: 'Adakah garment jewellery onyx disertakan?',
    jewelleryA:
      'Ya. Grosvenor Set termasuk dua strand onyx signature yang dipasang terus ke kemeja, menjadi sebahagian daripada garment. Strand batu semula jadi tambahan tersedia berasingan di koleksi Signature Strands.',
    careQ: 'Bagaimana menjaga Grosvenor Set?',
    careA:
      'Untuk mengekalkan satin, butang emas signature Knotted Line, dan butiran Al Talli halus, kami mengesyorkan dry clean profesional sahaja. Al Talli ialah kraf halus — tangani dengan berhati-hati.',
    customQ: 'Adakah panjang tersuai tersedia untuk skirt maxi?',
    customA:
      'Ya. Nyatakan dalam Nota Pesanan atau hubungi Khidmat Pelanggan sebelum membeli.',
  }),
}

export function getGrosvenorSetPdpFaq(locale: AppLocale = 'en'): ProductFaqItem[] {
  return FAQ_BY_LOCALE[locale] ?? GROSVENOR_SET_FAQ_EN
}
