import type { AppLocale } from '@/lib/i18n/routing'
import type { ProductFaqItem } from '@/lib/products/productSchemaMeta'
import { SOHO_SET_FAQ_EN } from '@/data/sohoSetPdpFaq'

type FaqStrings = {
  sizesQ: string
  sizesA: string
  whereQ: string
  whereA: string
  separateQ: string
  separateA: string
  breathableQ: string
  breathableA: string
  alTalliQ: string
  alTalliA: string
  careQ: string
  careA: string
  travelQ: string
  travelA: string
}

function buildFaq(s: FaqStrings): ProductFaqItem[] {
  return [
    { question: s.sizesQ, answer: s.sizesA },
    { question: s.whereQ, answer: s.whereA },
    { question: s.separateQ, answer: s.separateA },
    { question: s.breathableQ, answer: s.breathableA },
    { question: s.alTalliQ, answer: s.alTalliA },
    { question: s.careQ, answer: s.careA },
    { question: s.travelQ, answer: s.travelA },
  ]
}

const FAQ_BY_LOCALE: Record<AppLocale, ProductFaqItem[]> = {
  en: SOHO_SET_FAQ_EN,
  ar: buildFaq({
    sizesQ: 'هل يمكنني طلب القميص والبنطال بمقاسات مختلفة؟',
    sizesA:
      'نعم. نتفهم أن كثيراً من النساء لديهن مقاسات مختلفة للجزء العلوي والسفلي من الجسم. رغم أن مجموعة Soho تُباع كطقم كامل، يسعدنا تلبية مقاسات مختلفة كلما أمكن ذلك.\n\nببساطة اختاري مقاس البنطال المفضل عند الطلب. ثم في قسم ملاحظات الطلب أثناء الدفع، اذكري المقاس الذي ترغبين به للقميص. سيراجع فريق خدمة العملاء طلبك، ويتواصل معك عند الحاجة، ويضمن تجهيز مجموعة Soho وفق مقاساتك المفضلة.',
    whereQ: 'أين يمكنني ارتداء مجموعة Soho؟',
    whereA:
      'صُنعت مجموعة Soho لنساء يتحركن بسهولة بين الوجهات والمناسبات. نسّقيها مع حذاء رياضي لقهوة الصباح، أو ارتديها أثناء السفر، أو مع حذاء مسطح ليوم في المدينة، أو أكملي الإطلالة بكعب عالٍ للغداء أو العشاء أو التجمعات المسائية.\n\nسواء في أبوظبي أو دبي أو الرياض أو الدوحة أو لندن أو باريس أو ميلانو أو نيويورك، تنتقل مجموعة Soho بسهولة طوال اليوم مع الحفاظ على طابعها الراقي.',
    separateQ: 'هل يمكنني ارتداء القميص والبنطال بشكل منفصل؟',
    separateA:
      'بالتأكيد. رغم تصميمها كطقم منسّق، صُنع كل قطعة لتعمل بجمال لوحدها. يُنسّق القميص الواسع بسهولة مع بنطال مفصّل أو دنيم أو تنورات، بينما يمكن تنسيق بنطال البالازو مع محبوك أو بلوزات أو توبات خفيفة، مما يتيح إطلالات متعددة من استثمار واحد.',
    breathableQ: 'هل مجموعة Soho قابلة للتنفس؟',
    breathableA:
      'نعم. صُنعت مجموعة Soho من كريب فاخر ناعم بسيلويت مريح يسمح للهواء بالتداول بشكل طبيعي حول الجسم. انسيابية القماش والقصة السخية توفران راحة دائمة طوال اليوم مع الحفاظ على مظهر أنيق.',
    alTalliQ: 'ما هو التلي؟',
    alTalliA:
      'يُعد التلي أحد رموز Bint Saeed المميزة ومن أعز الحرف التراثية الإماراتية في دولة الإمارات العربية المتحدة، المعترف بها من اليونسكو كتراث ثقافي غير مادي. يُنسج تقليدياً يدوياً بخيوط معدنية، وقد زيّن الثياب الإماراتية منذ أجيال.\n\nفي Bint Saeed، نُعيد تفسير هذه الحرفة الرائعة عبر التفصيل المعاصر، ليُقدَّر جزء مهم من التراث الثقافي الإماراتي من المرأة اليوم.',
    careQ: 'كيف أعتني على مجموعة Soho؟',
    careA:
      'للحفاظ على القماش وأزرار Knotted Line الذهبية المميزة وتفاصيل التلي الرقيقة، نوصي بالتنظيف الجاف الاحترافي فقط. وبما أن التلي زخرفة منسوجة معدنية تقليدية، فهي حرفة يدوية رقيقة ويجب التعامل معها بعناية للحفاظ على جمالها لسنوات قادمة.',
    travelQ: 'هل مجموعة Soho مناسبة للسفر؟',
    travelA:
      'نعم. صُممت مجموعة Soho مع مراعاة السفر. سيلويتها المريح وكريبها الفاخر الخفيف وتنسيقها المتعدد يجعلها رفيقة مثالية سواء عند الصعود إلى الطائرة أو استكشاف مدينة جديدة أو الانتقال مباشرة من المطار إلى الغداء أو العشاء. تُطوى بجمال وتنتقل بسهولة بين الوجهات، مما يجعلها من أكثر القطع تعدداً في خزانة Bint Saeed.',
  }),
  fr: buildFaq({
    sizesQ: 'Puis-je commander la chemise et le pantalon dans des tailles différentes ?',
    sizesA:
      'Oui. Nous comprenons que beaucoup de femmes ont des tailles différentes pour le haut et le bas du corps. Bien que le Soho Set soit vendu en ensemble complet, nous sommes heureux d’accommoder des tailles différentes lorsque cela est possible.\n\nSélectionnez simplement votre taille de pantalon préférée lors de la commande. Puis, dans la section Notes de commande au moment du paiement, indiquez la taille souhaitée pour la chemise. Notre équipe Service Client examinera votre demande, vous contactera si nécessaire et préparera votre Soho Set selon vos tailles préférées.',
    whereQ: 'Où puis-je porter le Soho Set ?',
    whereA:
      'Le Soho Set a été créé pour les femmes dont le style de vie passe naturellement d’une destination à l’autre. Portez-le avec des baskets pour un café du matin, en voyage, avec des ballerines pour une journée en ville, ou avec des talons pour un déjeuner, un dîner ou une soirée.\n\nQu’il s’agisse d’Abou Dabi, Dubaï, Riyad, Doha, Londres, Paris, Milan ou New York, le Soho Set s’adapte tout au long de la journée tout en conservant son caractère raffiné.',
    separateQ: 'Puis-je porter la chemise et le pantalon séparément ?',
    separateA:
      'Absolument. Bien que conçu comme un ensemble coordonné, chaque pièce a été créée pour fonctionner magnifiquement seule. La chemise oversize s’associe facilement à un pantalon tailleur, un jean ou une jupe, tandis que le pantalon palazzo peut être porté avec un pull, une blouse ou un top léger — plusieurs looks à partir d’un seul investissement.',
    breathableQ: 'Le Soho Set est-il respirant ?',
    breathableA:
      'Oui. Le Soho Set est confectionné dans un crêpe premium doux à la silhouette décontractée qui permet à l’air de circuler naturellement autour du corps. La fluidité du tissu et la coupe généreuse offrent un confort durable tout au long de la journée tout en conservant une allure élégante.',
    alTalliQ: "Qu'est-ce que l'Al Talli ?",
    alTalliA:
      'Al Talli est l’un des codes signature de Bint Saeed et l’un des savoir-faire traditionnels émiratis les plus précieux des Émirats arabes unis, reconnu par l’UNESCO comme patrimoine culturel immatériel. Traditionnellement tissé à la main avec des fils métalliques, il a paré les vêtements émiratis pendant des générations.\n\nChez Bint Saeed, nous réinterprétons ce savoir-faire remarquable par une tailleur contemporaine, permettant à une part importante du patrimoine culturel des Émirats d’être appréciée par la femme d’aujourd’hui.',
    careQ: 'Comment entretenir le Soho Set ?',
    careA:
      'Pour préserver le tissu, les boutons dorés signature Knotted Line et les délicats détails Al Talli, nous recommandons uniquement le nettoyage à sec professionnel. Al Talli étant une garniture tissée métallique traditionnelle, c’est un artisanat délicat qui doit être manipulé avec soin pour conserver sa beauté pendant des années.',
    travelQ: 'Le Soho Set convient-il aux voyages ?',
    travelA:
      'Oui. Le Soho Set a été conçu pour voyager. Sa silhouette décontractée, son crêpe premium léger et son style polyvalent en font un compagnon idéal en avion, en ville ou directement de l’aéroport au déjeuner ou au dîner. Il se plie magnifiquement et passe d’une destination à l’autre avec aisance — l’une des pièces les plus polyvalentes de la garde-robe Bint Saeed.',
  }),
  de: buildFaq({
    sizesQ: 'Kann ich Hemd und Hose in unterschiedlichen Größen bestellen?',
    sizesA:
      'Ja. Wir verstehen, dass viele Frauen unterschiedliche Größen für Ober- und Unterkörper haben. Obwohl das Soho Set als komplettes Set verkauft wird, passen wir uns gerne unterschiedlichen Größen an, wann immer es möglich ist.\n\nWählen Sie bei der Bestellung einfach Ihre bevorzugte Hosengröße. Geben Sie dann im Bereich Bestellhinweise beim Checkout die gewünschte Hemdgröße an. Unser Customer-Care-Team prüft Ihre Anfrage, kontaktiert Sie bei Bedarf und stellt sicher, dass Ihr Soho Set nach Ihren Größenwünschen vorbereitet wird.',
    whereQ: 'Wo kann ich das Soho Set tragen?',
    whereA:
      'Das Soho Set wurde für Frauen geschaffen, deren Lebensstil mühelos zwischen Destinationen und Anlässen wechselt. Stylen Sie es mit Sneakern zum Morgenkaffee, auf Reisen, mit Flats für einen Tag in der Stadt oder mit Heels für Lunch, Dinner oder Abendgesellschaften.\n\nOb in Abu Dhabi, Dubai, Riad, Doha, London, Paris, Mailand oder New York — das Soho Set begleitet Sie den ganzen Tag mit raffiniertem Charakter.',
    separateQ: 'Kann ich Hemd und Hose getrennt tragen?',
    separateA:
      'Absolut. Obwohl als koordiniertes Set konzipiert, wurde jedes Teil so gestaltet, dass es für sich allein wunderbar funktioniert. Das Oversize-Hemd passt mühelos zu Tailoring-Hosen, Denim oder Röcken, während die Palazzo-Hose mit Strick, Blusen oder leichten Tops getragen werden kann — viele Looks aus einer Investition.',
    breathableQ: 'Ist das Soho Set atmungsaktiv?',
    breathableA:
      'Ja. Das Soho Set ist aus weichem Premium-Krepp mit entspannter Silhouette gefertigt, die Luft natürlich um den Körper zirkulieren lässt. Der fließende Fall des Stoffs und die großzügige Passform bieten ganztägigen Komfort bei elegantem Erscheinungsbild.',
    alTalliQ: 'Was ist Al Talli?',
    alTalliA:
      'Al Talli ist einer der Signature House Codes von Bint Saeed und eines der wertvollsten traditionellen emiratischen Handwerke der Vereinigten Arabischen Emirate, von der UNESCO als immaterielles Kulturerbe anerkannt. Traditionell von Hand mit metallischen Fäden gewebt, schmückt es seit Generationen emiratische Kleidung.\n\nBei Bint Saeed interpretieren wir dieses bemerkenswerte Handwerk durch zeitgenössisches Schneiderhandwerk neu, damit ein wichtiger Teil des kulturellen Erbes der VAE von der Frau von heute geschätzt werden kann.',
    careQ: 'Wie pflege ich das Soho Set?',
    careA:
      'Um Stoff, goldfarbene Knotted-Line-Knöpfe und zarte Al-Talli-Details zu bewahren, empfehlen wir ausschließlich professionelle chemische Reinigung. Da Al Talli eine traditionelle metallische Webgarnitur ist, handelt es sich um ein empfindliches Handwerk, das behutsam behandelt werden sollte, um seine Schönheit über Jahre zu erhalten.',
    travelQ: 'Eignet sich das Soho Set für Reisen?',
    travelA:
      'Ja. Das Soho Set wurde für Reisen konzipiert. Seine entspannte Silhouette, der leichte Premium-Krepp und das vielseitige Styling machen es zum idealen Begleiter im Flugzeug, in einer neuen Stadt oder direkt vom Flughafen zum Lunch oder Dinner. Es lässt sich wunderbar packen und wechselt mühelos zwischen Destinationen — eines der vielseitigsten Stücke der Bint-Saeed-Garderobe.',
  }),
  it: buildFaq({
    sizesQ: 'Posso ordinare camicia e pantaloni in taglie diverse?',
    sizesA:
      'Sì. Comprendiamo che molte donne hanno taglie diverse per la parte superiore e inferiore del corpo. Sebbene il Soho Set sia venduto come set completo, siamo lieti di accomodare taglie diverse quando possibile.\n\nSeleziona la taglia preferita dei pantaloni al momento dell’ordine. Poi, nella sezione Note ordine al checkout, indica la taglia desiderata per la camicia. Il nostro team Customer Care esaminerà la richiesta, ti contatterà se necessario e preparerà il Soho Set secondo le tue taglie preferite.',
    whereQ: 'Dove posso indossare il Soho Set?',
    whereA:
      'Il Soho Set è stato creato per donne il cui stile di vita si muove con naturalezza tra destinazioni e occasioni. Indossalo con sneakers per un caffè mattutino, in viaggio, con ballerine per una giornata in città o con tacchi per pranzo, cena o serate.\n\nChe sia ad Abu Dhabi, Dubai, Riyadh, Doha, Londra, Parigi, Milano o New York, il Soho Set accompagna la giornata mantenendo il suo carattere raffinato.',
    separateQ: 'Posso indossare camicia e pantaloni separatamente?',
    separateA:
      'Assolutamente. Sebbene progettato come set coordinato, ogni capo è stato creato per funzionare magnificamente da solo. La camicia oversize si abbina facilmente a pantaloni sartoriali, denim o gonne, mentre i pantaloni palazzo possono essere abbinati a maglieria, bluse o top leggeri — molti look da un solo investimento.',
    breathableQ: 'Il Soho Set è traspirante?',
    breathableA:
      'Sì. Il Soho Set è realizzato in morbido crepe premium con silhouette rilassata che permette all’aria di circolare naturalmente intorno al corpo. Il drappeggio fluido del tessuto e la vestibilità generosa offrono comfort duraturo per tutta la giornata con un aspetto elegante.',
    alTalliQ: "Che cos'è l'Al Talli?",
    alTalliA:
      'Al Talli è uno dei codici signature di Bint Saeed e una delle arti tradizionali emiratine più preziose degli Emirati Arabi Uniti, riconosciuta dall’UNESCO come patrimonio culturale immateriale. Tradizionalmente tessuto a mano con fili metallici, ha adornato abiti emiratini per generazioni.\n\nIn Bint Saeed reinterpretiamo questa straordinaria arte attraverso la sartoria contemporanea, permettendo a una parte importante del patrimonio culturale degli Emirati di essere apprezzata dalla donna di oggi.',
    careQ: 'Come devo curare il Soho Set?',
    careA:
      'Per preservare il tessuto, i bottoni dorati signature Knotted Line e i delicati dettagli Al Talli, consigliamo solo lavaggio a secco professionale. Poiché Al Talli è una finitura tessuta metallica tradizionale, è un artigianato delicato da trattare con cura per mantenerne la bellezza per anni.',
    travelQ: 'Il Soho Set è adatto ai viaggi?',
    travelA:
      'Sì. Il Soho Set è stato progettato pensando ai viaggi. La silhouette rilassata, il crepe premium leggero e lo styling versatile lo rendono un compagno ideale in aereo, in una nuova città o direttamente dall’aeroporto a pranzo o cena. Si piega magnificamente e passa con facilità tra destinazioni — uno dei capi più versatili del guardaroba Bint Saeed.',
  }),
  es: buildFaq({
    sizesQ: '¿Puedo pedir la camisa y los pantalones en tallas diferentes?',
    sizesA:
      'Sí. Entendemos que muchas mujeres tienen tallas distintas para la parte superior e inferior del cuerpo. Aunque el Soho Set se vende como conjunto completo, estamos encantados de adaptar tallas diferentes siempre que sea posible.\n\nSimplemente seleccione su talla de pantalón preferida al hacer el pedido. Luego, en la sección Notas del pedido durante el pago, indique la talla deseada para la camisa. Nuestro equipo de Atención al Cliente revisará su solicitud, le contactará si es necesario y preparará su Soho Set según sus tallas preferidas.',
    whereQ: '¿Dónde puedo llevar el Soho Set?',
    whereA:
      'El Soho Set fue creado para mujeres cuyo estilo de vida se mueve con naturalidad entre destinos y ocasiones. Estílelo con zapatillas para un café matutino, en viajes, con bailarinas para un día en la ciudad o con tacones para almuerzo, cena o reuniones nocturnas.\n\nYa sea en Abu Dabi, Dubái, Riad, Doha, Londres, París, Milán o Nueva York, el Soho Set transita el día con facilidad manteniendo su carácter refinado.',
    separateQ: '¿Puedo llevar la camisa y los pantalones por separado?',
    separateA:
      'Por supuesto. Aunque diseñado como conjunto coordinado, cada pieza fue creada para funcionar maravillosamente por sí sola. La camisa oversize combina fácilmente con pantalones de sastrería, denim o faldas, mientras que los pantalones palazzo pueden estilizarse con punto, blusas o tops ligeros — múltiples looks de una sola inversión.',
    breathableQ: '¿Es transpirable el Soho Set?',
    breathableA:
      'Sí. El Soho Set está confeccionado en crepe premium suave con silueta relajada que permite que el aire circule naturalmente alrededor del cuerpo. La caída fluida del tejido y el ajuste generoso ofrecen comodidad duradera durante todo el día con apariencia elegante.',
    alTalliQ: '¿Qué es Al Talli?',
    alTalliA:
      'Al Talli es uno de los códigos signature de Bint Saeed y una de las artesanías tradicionales emiratíes más preciadas de los Emiratos Árabes Unidos, reconocida por la UNESCO como Patrimonio Cultural Inmaterial. Tejida tradicionalmente a mano con hilo metálico, ha adornado prendas emiratíes durante generaciones.\n\nEn Bint Saeed reinterpretamos esta notable artesanía a través de la sastrería contemporánea, permitiendo que una parte importante del patrimonio cultural de los EAU sea apreciada por la mujer de hoy.',
    careQ: '¿Cómo debo cuidar el Soho Set?',
    careA:
      'Para preservar el tejido, los botones dorados signature Knotted Line y los delicados detalles Al Talli, recomendamos únicamente limpieza en seco profesional. Como Al Talli es un ribete tejido metálico tradicional, es una artesanía delicada que debe manejarse con cuidado para preservar su belleza durante años.',
    travelQ: '¿Es el Soho Set adecuado para viajar?',
    travelA:
      'Sí. El Soho Set fue diseñado pensando en los viajes. Su silueta relajada, crepe premium ligero y estilo versátil lo convierten en un compañero ideal en vuelo, explorando una nueva ciudad o yendo directamente del aeropuerto a almuerzo o cena. Se pliega maravillosamente y transita entre destinos con facilidad — una de las piezas más versátiles del armario Bint Saeed.',
  }),
  ru: buildFaq({
    sizesQ: 'Можно ли заказать рубашку и брюки разных размеров?',
    sizesA:
      'Да. Мы понимаем, что у многих женщин разные размеры верхней и нижней части тела. Хотя Soho Set продаётся как полный комплект, мы с радостью подберём разные размеры, когда это возможно.\n\nПросто выберите предпочтительный размер брюк при заказе. Затем в разделе «Примечания к заказу» при оформлении укажите желаемый размер рубашки. Наша команда Customer Care рассмотрит запрос, свяжется с вами при необходимости и подготовит Soho Set согласно вашим размерам.',
    whereQ: 'Где можно носить Soho Set?',
    whereA:
      'Soho Set создан для женщин, чей образ жизни легко переключается между направлениями и случаями. Носите с кроссовками на утренний кофе, в путешествии, с балетками на день в городе или с каблуками на обед, ужин или вечерние встречи.\n\nБудь то Абу-Даби, Дубай, Эр-Рияд, Доха, Лондон, Париж, Милан или Нью-Йорк — Soho Set сопровождает вас весь день, сохраняя утончённый характер.',
    separateQ: 'Можно ли носить рубашку и брюки отдельно?',
    separateA:
      'Конечно. Хотя комплект задуман как координированный, каждая деталь создана, чтобы прекрасно работать самостоятельно. Оверсайз-рубашка легко сочетается с классическими брюками, денимом или юбками, а брюки-палazzo — с трикотажем, блузами или лёгкими топами — множество образов из одной покупки.',
    breathableQ: 'Дышащий ли Soho Set?',
    breathableA:
      'Да. Soho Set выполнен из мягкого премиального крепа со свободным силуэтом, позволяющим воздуху естественно циркулировать вокруг тела. Плавная драпировка ткани и свободная посадка обеспечивают комфорт весь день при элегантном виде.',
    alTalliQ: 'Что такое Al Talli?',
    alTalliA:
      'Al Talli — один из фирменных House Codes Bint Saeed и одно из самых ценных традиционных эмиратских ремёсел ОАЭ, признанное ЮНЕСКО нематериальным культурным наследием. Традиционно плетётся вручную металлической нитью и украшает эмиратскую одежду на протяжении поколений.\n\nВ Bint Saeed мы переосмысливаем это замечательное ремесло через современный крой, позволяя женщине сегодняшнего дня ценить важную часть культурного наследия ОАЭ.',
    careQ: 'Как ухаживать за Soho Set?',
    careA:
      'Чтобы сохранить ткань, фирменные золотистые пуговицы Knotted Line и нежную отделку Al Talli, мы рекомендуем только профессиональную химчистку. Al Talli — традиционная металлическая тканая отделка, деликатное ремесло, которое следует беречь для сохранения красоты на долгие годы.',
    travelQ: 'Подходит ли Soho Set для путешествий?',
    travelA:
      'Да. Soho Set создан с учётом путешествий. Свободный силуэт, лёгкий премиальный креп и универсальный стиль делают его идеальным спутником в самолёте, в новом городе или сразу из аэропорта на обед или ужин. Он прекрасно складывается и легко переходит между направлениями — одна из самых универсальных вещей гардероба Bint Saeed.',
  }),
  zh: buildFaq({
    sizesQ: '衬衫和长裤可以选不同尺码吗？',
    sizesA:
      '可以。我们理解许多女性上下身尺码不同。Soho 套装虽作为完整套装出售，我们尽可能满足不同尺码需求。\n\n下单时选择您偏好的长裤尺码，然后在结账的订单备注中注明衬衫所需尺码。客服团队将审核您的请求，必要时与您联系，并按您偏好的尺码准备 Soho 套装。',
    whereQ: 'Soho 套装适合在哪些场合穿着？',
    whereA:
      'Soho 套装为生活方式自如穿梭于不同目的地与场合的女性而设计。搭配运动鞋晨间咖啡、旅行穿着、平底鞋城市漫步，或高跟鞋出席午餐、晚餐与晚间聚会。\n\n无论在阿布扎比、迪拜、利雅得、多哈、伦敦、巴黎、米兰或纽约，Soho 套装全天自如转换，保持精致气质。',
    separateQ: '衬衫和长裤可以分开穿着吗？',
    separateA:
      '当然可以。虽为协调套装设计，每件单品均可独立出色穿着。宽松衬衫可轻松搭配西裤、牛仔或半裙，阔腿长裤可搭配针织、衬衫或轻薄上衣——一次投资，多种造型。',
    breathableQ: 'Soho 套装透气吗？',
    breathableA:
      '是的。Soho 套装采用柔软高端绉绸，宽松廓形让空气自然流通。面料垂坠流畅、版型宽松，全天舒适且保持优雅外观。',
    alTalliQ: '什么是 Al Talli？',
    alTalliA:
      'Al Talli 是 Bint Saeed 标志性 House Code 之一，也是阿联酋最珍贵的传统阿联酋工艺之一，被联合国教科文组织认定为非物质文化遗产。传统上以金属线手工编织，世代点缀阿联酋服饰。\n\n在 Bint Saeed，我们通过当代剪裁重新诠释这一卓越工艺，让今日女性欣赏阿联酋文化遗产的重要部分。',
    careQ: '如何护理 Soho 套装？',
    careA:
      '为保持面料、标志性金色调 Knotted Line 纽扣及精致 Al Talli 细节，我们建议仅限专业干洗。Al Talli 为传统金属编织饰边，属精致手工艺，应悉心护理以长久保持美感。',
    travelQ: 'Soho 套装适合旅行吗？',
    travelA:
      '适合。Soho 套装专为旅行而设计。宽松廓形、轻盈高端绉绸与多样穿搭使其成为登机、探索新城市或从机场直接赴午餐或晚餐的理想伴侣。易于收纳，目的地间自如转换——Bint Saeed 衣橱中最百搭的单品之一。',
  }),
  nl: buildFaq({
    sizesQ: 'Kan ik het overhemd en de broek in verschillende maten bestellen?',
    sizesA:
      'Ja. We begrijpen dat veel vrouwen verschillende maten hebben voor boven- en onderlichaam. Hoewel de Soho Set als compleet set wordt verkocht, passen we graag verschillende maten aan wanneer mogelijk.\n\nSelecteer bij het bestellen uw voorkeursbroekmaat. Vermeld vervolgens in het gedeelte Bestelnotities tijdens het afrekenen de gewenste overhemdmaat. Ons Customer Care-team beoordeelt uw verzoek, neemt indien nodig contact op en zorgt dat uw Soho Set volgens uw voorkeursmaten wordt voorbereid.',
    whereQ: 'Waar kan ik de Soho Set dragen?',
    whereA:
      'De Soho Set is gemaakt voor vrouwen wier levensstijl moeiteloos tussen bestemmingen en gelegenheden beweegt. Draag hem met sneakers voor een ochtendkoffie, op reis, met flats voor een dag in de stad of met hakken voor lunch, diner of avondbijeenkomsten.\n\nOf u nu in Abu Dhabi, Dubai, Riyad, Doha, Londen, Parijs, Milaan of New York bent — de Soho Set begeleidt u de hele dag met verfijnd karakter.',
    separateQ: 'Kan ik het overhemd en de broek apart dragen?',
    separateA:
      'Absoluut. Hoewel ontworpen als gecoördineerde set, is elk stuk gemaakt om prachtig op zichzelf te werken. Het oversized overhemd past moeiteloos bij pantalons, denim of rokken, terwijl de palazzo-broek kan worden gestyled met knitwear, blouses of lichte tops — meerdere looks uit één investering.',
    breathableQ: 'Is de Soho Set ademend?',
    breathableA:
      'Ja. De Soho Set is vervaardigd uit zacht premium crêpe met een ontspannen silhouet waardoor lucht natuurlijk rond het lichaam kan circuleren. De vloeiende drape en royale pasvorm bieden de hele dag comfort met een elegante uitstraling.',
    alTalliQ: 'Wat is Al Talli?',
    alTalliA:
      'Al Talli is een van de signature House Codes van Bint Saeed en een van de meest gekoesterde traditionele Emiratische ambachten van de VAE, erkend door UNESCO als immaterieel cultureel erfgoed. Traditioneel met de hand geweven met metallic draad, siert het generaties lang Emiratische kleding.\n\nBij Bint Saeed herinterpreteren we dit opmerkelijke ambacht via eigentijdse kleermakerij, zodat een belangrijk deel van het culturele erfgoed van de VAE gewaardeerd wordt door de vrouw van vandaag.',
    careQ: 'Hoe verzorg ik de Soho Set?',
    careA:
      'Om de stof, goudkleurige Knotted Line-knopen en delicate Al Talli-details te behouden, raden wij alleen professionele stomerij aan. Al Talli is een traditionele metallic geweven afwerking — een delicaat ambacht dat zorgvuldig behandeld moet worden om de schoonheid jarenlang te bewaren.',
    travelQ: 'Is de Soho Set geschikt voor reizen?',
    travelA:
      'Ja. De Soho Set is ontworpen met reizen in gedachten. Het ontspannen silhouet, lichte premium crêpe en veelzijdige styling maken het een ideale metgezel in het vliegtuig, in een nieuwe stad of direct van het vliegveld naar lunch of diner. Het pakt prachtig en beweegt moeiteloos tussen bestemmingen — een van de meest veelzijdige stukken in de Bint Saeed-garderobe.',
  }),
  pt: buildFaq({
    sizesQ: 'Posso encomendar a camisa e as calças em tamanhos diferentes?',
    sizesA:
      'Sim. Compreendemos que muitas mulheres têm tamanhos diferentes para a parte superior e inferior do corpo. Embora o Soho Set seja vendido como conjunto completo, temos todo o gosto em acomodar tamanhos diferentes sempre que possível.\n\nSelecione o tamanho de calça preferido ao fazer o pedido. Depois, na secção Notas do pedido durante o checkout, indique o tamanho desejado para a camisa. A nossa equipa de Apoio ao Cliente analisará o pedido, contactá-la-á se necessário e preparará o Soho Set de acordo com os seus tamanhos preferidos.',
    whereQ: 'Onde posso usar o Soho Set?',
    whereA:
      'O Soho Set foi criado para mulheres cujo estilo de vida se move naturalmente entre destinos e ocasiões. Use com ténis para um café matinal, em viagem, com sabrinas para um dia na cidade ou com saltos para almoço, jantar ou encontros noturnos.\n\nSeja em Abu Dhabi, Dubai, Riade, Doha, Londres, Paris, Milão ou Nova Iorque, o Soho Set acompanha o dia com facilidade mantendo o seu caráter refinado.',
    separateQ: 'Posso usar a camisa e as calças separadamente?',
    separateA:
      'Com certeza. Embora concebido como conjunto coordenado, cada peça foi criada para funcionar lindamente sozinha. A camisa oversized combina facilmente com calças de alfaiataria, denim ou saias, enquanto as calças palazzo podem ser usadas com malha, blusas ou tops leves — vários looks a partir de um investimento.',
    breathableQ: 'O Soho Set é respirável?',
    breathableA:
      'Sim. O Soho Set é confeccionado em crepe premium suave com silhueta relaxada que permite ao ar circular naturalmente em redor do corpo. A queda fluida do tecido e o corte generoso oferecem conforto duradouro ao longo do dia com aparência elegante.',
    alTalliQ: 'O que é Al Talli?',
    alTalliA:
      'Al Talli é um dos códigos signature da Bint Saeed e uma das artes tradicionais emiratis mais preciosas dos Emirados Árabes Unidos, reconhecida pela UNESCO como Património Cultural Imaterial. Tradicionalmente tecido à mão com fio metálico, adornou vestuário emirati durante gerações.\n\nNa Bint Saeed reinterpretamos esta notável arte através de alfaiataria contemporânea, permitindo que uma parte importante do património cultural dos EAU seja apreciada pela mulher de hoje.',
    careQ: 'Como devo cuidar do Soho Set?',
    careA:
      'Para preservar o tecido, os botões dourados signature Knotted Line e os delicados detalhes Al Talli, recomendamos apenas limpeza a seco profissional. Como Al Talli é um acabamento tecido metálico tradicional, é um artesanato delicado que deve ser manuseado com cuidado para preservar a sua beleza durante anos.',
    travelQ: 'O Soho Set é adequado para viagens?',
    travelA:
      'Sim. O Soho Set foi concebido a pensar em viagens. A silhueta relaxada, o crepe premium leve e o styling versátil tornam-no um companheiro ideal no avião, numa nova cidade ou diretamente do aeroporto para almoço ou jantar. Dobra-se lindamente e transita facilmente entre destinos — uma das peças mais versáteis do guarda-roupa Bint Saeed.',
  }),
  id: buildFaq({
    sizesQ: 'Bisakah saya memesan kemeja dan celana dalam ukuran berbeda?',
    sizesA:
      'Ya. Kami memahami bahwa banyak wanita memiliki ukuran berbeda untuk bagian atas dan bawah tubuh. Meskipun Soho Set dijual sebagai set lengkap, kami dengan senang hati mengakomodasi ukuran berbeda jika memungkinkan.\n\nPilih ukuran celana pilihan Anda saat memesan. Kemudian di bagian Catatan Pesanan saat checkout, sebutkan ukuran yang Anda inginkan untuk kemeja. Tim Customer Care kami akan meninjau permintaan Anda, menghubungi jika diperlukan, dan memastikan Soho Set disiapkan sesuai ukuran pilihan Anda.',
    whereQ: 'Di mana saya bisa memakai Soho Set?',
    whereA:
      'Soho Set dibuat untuk wanita yang gaya hidupnya bergerak dengan mudah antara destinasi dan kesempatan. Kenakan dengan sneakers untuk kopi pagi, saat bepergian, dengan flats untuk hari di kota, atau dengan heels untuk makan siang, malam, atau pertemuan malam.\n\nBaik di Abu Dhabi, Dubai, Riyadh, Doha, London, Paris, Milan, atau New York, Soho Set menemani hari Anda dengan karakter yang tetap halus.',
    separateQ: 'Bisakah saya memakai kemeja dan celana secara terpisah?',
    separateA:
      'Tentu saja. Meskipun dirancang sebagai set yang selaras, setiap potong dibuat untuk berfungsi indah sendiri. Kemeja oversized mudah dipadukan dengan celana tailored, denim, atau rok, sementara celana palazzo dapat digaya dengan knitwear, blus, atau top ringan — banyak look dari satu investasi.',
    breathableQ: 'Apakah Soho Set breathable?',
    breathableA:
      'Ya. Soho Set dibuat dari krepe premium lembut dengan siluet santai yang memungkinkan udara beredar secara alami di sekitar tubuh. Jatuhnya kain yang fluid dan potongan yang longgar memberikan kenyamanan sepanjang hari sambil tetap tampak elegan.',
    alTalliQ: 'Apa itu Al Talli?',
    alTalliA:
      'Al Talli adalah salah satu House Code signature Bint Saeed dan salah satu kerajinan tradisional Emirati paling berharga di Uni Emirat Arab, diakui UNESCO sebagai Warisan Budaya Takbenda. Secara tradisional ditenun tangan dengan benang metalik, telah menghiasi pakaian Emirati selama generasi.\n\nDi Bint Saeed, kami menafsirkan kembali kerajinan luar biasa ini melalui tailoring kontemporer, memungkinkan bagian penting warisan budaya UEA dihargai oleh wanita masa kini.',
    careQ: 'Bagaimana cara merawat Soho Set?',
    careA:
      'Untuk menjaga kain, kancing emas signature Knotted Line, dan detail Al Talli yang halus, kami merekomendasikan dry clean profesional saja. Karena Al Talli adalah trim tenun metalik tradisional, ini adalah kerajinan halus yang harus ditangani dengan hati-hati untuk mempertahankan keindahannya selama bertahun-tahun.',
    travelQ: 'Apakah Soho Set cocok untuk bepergian?',
    travelA:
      'Ya. Soho Set dirancang dengan perjalanan dalam pikiran. Siluet santai, krepe premium ringan, dan styling serbaguna menjadikannya pendamping ideal di pesawat, menjelajahi kota baru, atau langsung dari bandara ke makan siang atau malam. Mudah dilipat dan bertransisi dengan mudah antar destinasi — salah satu potong paling serbaguna di garderobe Bint Saeed.',
  }),
  ms: buildFaq({
    sizesQ: 'Bolehkah saya memesan kemeja dan seluar dalam saiz berbeza?',
    sizesA:
      'Ya. Kami memahami bahawa ramai wanita mempunyai saiz berbeza untuk bahagian atas dan bawah badan. Walaupun Soho Set dijual sebagai set lengkap, kami gembira menampung saiz berbeza apabila boleh.\n\nPilih saiz seluar pilihan anda semasa membuat pesanan. Kemudian dalam bahagian Nota Pesanan semasa checkout, nyatakan saiz yang anda mahukan untuk kemeja. Pasukan Khidmat Pelanggan kami akan menyemak permintaan anda, menghubungi jika perlu, dan memastikan Soho Set disediakan mengikut saiz pilihan anda.',
    whereQ: 'Di manakah saya boleh memakai Soho Set?',
    whereA:
      'Soho Set dicipta untuk wanita yang gaya hidupnya bergerak dengan mudah antara destinasi dan majlis. Gayakannya dengan sneakers untuk kopi pagi, semasa melancong, dengan flats untuk hari di bandar, atau dengan heels untuk makan tengah hari, malam, atau perhimpunan petang.\n\nSama ada di Abu Dhabi, Dubai, Riyadh, Doha, London, Paris, Milan atau New York, Soho Set menemani hari anda dengan watak yang kekal halus.',
    separateQ: 'Bolehkah saya memakai kemeja dan seluar secara berasingan?',
    separateA:
      'Sudah tentu. Walaupun direka sebagai set yang selaras, setiap potongan dicipta untuk berfungsi dengan indah sendiri. Kemeja oversized mudah digayakan dengan seluar tailored, denim atau skirt, manakala seluar palazzo boleh digayakan dengan knitwear, blaus atau top ringan — pelbagai gaya daripada satu pelaburan.',
    breathableQ: 'Adakah Soho Set bernafas?',
    breathableA:
      'Ya. Soho Set diperbuat daripada krepe premium lembut dengan siluet santai yang membolehkan udara beredar secara semula jadi di sekeliling badan. Jatuh kain yang mengalir dan potongan yang longgar memberikan keselesaan sepanjang hari sambil mengekalkan penampilan elegan.',
    alTalliQ: 'Apakah Al Talli?',
    alTalliA:
      'Al Talli ialah salah satu Kod Rumah signature Bint Saeed dan salah satu kraf tradisional Emirati paling dihargai di Emiriah Arab Bersatu, diiktiraf UNESCO sebagai Warisan Budaya Tidak Ketara. Secara tradisinya ditenun tangan menggunakan benang logam, ia telah menghiasi pakaian Emirati selama generasi.\n\nDi Bint Saeed, kami mentafsir semula kraf luar biasa ini melalui jahitan kontemporari, membolehkan bahagian penting warisan budaya UAE dihargai oleh wanita hari ini.',
    careQ: 'Bagaimana saya menjaga Soho Set?',
    careA:
      'Untuk mengekalkan kain, butang emas signature Knotted Line, dan perincian Al Talli yang halus, kami mengesyorkan dry clean profesional sahaja. Memandangkan Al Talli ialah hiasan tenunan logam tradisional, ia adalah kraf halus yang harus ditangani dengan berhati-hati untuk mengekalkan keindahannya selama bertahun-tahun.',
    travelQ: 'Adakah Soho Set sesuai untuk melancong?',
    travelA:
      'Ya. Soho Set direka dengan perjalanan dalam fikiran. Siluet santai, krepe premium ringan, dan penggayaan serba guna menjadikannya teman ideal sama ada menaiki penerbangan, meneroka bandar baharu, atau terus dari lapangan terbang ke makan tengah hari atau malam. Ia dilipat dengan indah dan bergerak dengan mudah antara destinasi — salah satu potongan paling serba guna dalam almari Bint Saeed.',
  }),
}

export function getSohoSetPdpFaq(locale: AppLocale = 'en'): ProductFaqItem[] {
  return FAQ_BY_LOCALE[locale] ?? SOHO_SET_FAQ_EN
}
