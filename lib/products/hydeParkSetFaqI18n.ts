import type { AppLocale } from '@/lib/i18n/routing'
import type { ProductFaqItem } from '@/lib/products/productSchemaMeta'
import { HYDE_PARK_SET_FAQ_EN } from '@/data/hydeParkSetPdpFaq'

type FaqStrings = {
  sizesQ: string
  sizesA: string
  whereQ: string
  whereA: string
  separateQ: string
  separateA: string
  breathableQ: string
  breathableA: string
  pocketsQ: string
  pocketsA: string
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
    { question: s.pocketsQ, answer: s.pocketsA },
    { question: s.careQ, answer: s.careA },
    { question: s.travelQ, answer: s.travelA },
  ]
}

const FAQ_BY_LOCALE: Record<AppLocale, ProductFaqItem[]> = {
  en: HYDE_PARK_SET_FAQ_EN,
  ar: buildFaq({
    sizesQ: 'هل يمكنني طلب القميص والبنطال بمقاسات مختلفة؟',
    sizesA:
      'نعم. نتفهم أن كثيراً من النساء لديهن مقاسات مختلفة للجزء العلوي والسفلي من الجسم. رغم أن مجموعة Hyde Park تُباع كطقم كامل، يسعدنا تلبية مقاسات مختلفة كلما أمكن ذلك.\n\nببساطة اختاري مقاس البنطال المفضل عند الطلب. ثم في قسم ملاحظات الطلب أثناء الدفع، اذكري المقاس الذي ترغبين به للقميص. سيراجع فريق خدمة العملاء طلبك، ويتواصل معك عند الحاجة، ويضمن تجهيز مجموعة Hyde Park وفق مقاساتك المفضلة.',
    whereQ: 'أين يمكنني ارتداء مجموعة Hyde Park؟',
    whereA:
      'صُنعت مجموعة Hyde Park لنساء يتحركن بسهولة بين الوجهات والمناسبات. نسّقيها مع حذاء رياضي لقهوة الصباح، أو ارتديها أثناء السفر، أو مع حذاء لوفر ليوم في المدينة، أو أكملي الإطلالة بكعب عالٍ للغداء أو العشاء أو التجمعات المسائية.\n\nمن كورنيش أبوظبي إلى شواطئ بورتوفينو، من لندن إلى حدائق الرباط، من شوارع سنغافورة إلى سواحل ميامي، ومن شوارع لوس أنجلوس إلى أناقة بروناي — صُممت مجموعة Hyde Park لتتحرك بسهولة معك.',
    separateQ: 'هل يمكنني ارتداء القميص والبنطال بشكل منفصل؟',
    separateA:
      'بالتأكيد. رغم تصميمها كطقم منسّق، صُنع كل قطعة لتعمل بجمال لوحدها. يُنسّق القميص الواسع بسهولة مع بنطال مفصّل أو دنيم أو تنورات، بينما يمكن تنسيق بنطال البالازو مع محبوك أو بلوزات أو توبات خفيفة، مما يتيح إطلالات متعددة من طقم واحد.',
    breathableQ: 'هل مجموعة Hyde Park قابلة للتنفس؟',
    breathableA:
      'نعم. صُممت مجموعة Hyde Park مع مراعاة الراحة. سيلويتها المريح يسمح للهواء بالتداول بشكل طبيعي حول الجسم، مما يجعلها مريحة للارتداء طوال اليوم مع الحفاظ على مظهر أنيق.',
    pocketsQ: 'هل تحتوي مجموعة Hyde Park على جيوب؟',
    pocketsA:
      'نعم. يتضمن القميص الواسع جيبين وظيفيين على الصدر، بينما يتضمن بنطال البالازو جيبين جانبيين مخفيين على طول اللحام الجانبي. مدمجة بعناية في التصميم، تتيح لك حمل هاتفك وأحمر الشفاه أو ضرورياتك اليومية مع إبقاء يديك حرتين، لتتحركي براحة طوال يومك دون اللجوء دائماً إلى حقيبتك.',
    careQ: 'كيف أعتني على مجموعة Hyde Park؟',
    careA:
      'يمكن غسل مجموعة Hyde Park في الغسالة على برنامج لطيف عند 30°م. نوصي بالغسل مع ألوان مماثلة وترك القطعة لتجف في الهواء بشكل طبيعي للحفاظ على شكلها ولمستها النهائية.',
    travelQ: 'هل مجموعة Hyde Park مناسبة للسفر؟',
    travelA:
      'بالتأكيد. رغم أن مجموعة Hyde Park صُممت لتسافر بأناقة، فقد أُنشئت لأكثر من ذلك بكثير. سيلويتها المريح وتنسيقها بلا جهد وراحتها اليومية تجعلها مناسبة للحياة اليومية بقدر ما هي مناسبة لعطلات نهاية الأسبوع أو الرحلات الدولية.\n\nسواء كنتِ تلحقين برحلة طيران، أو تلتقين بالأصدقاء للقهوة، أو تقومين بمهام يومية، أو تخرجين للعشاء — تتكيف بسهولة مع اللحظة. إنها من القطع التي تصبح مفضلة لديك بهدوء، التي ستعودين إليها بغريزة مراراً وتكراراً.',
  }),
  fr: buildFaq({
    sizesQ: 'Puis-je commander la chemise et le pantalon dans des tailles différentes ?',
    sizesA:
      'Oui. Nous comprenons que beaucoup de femmes ont des tailles différentes pour le haut et le bas du corps. Bien que le Hyde Park Set soit vendu en ensemble complet, nous sommes heureux d’accommoder des tailles différentes lorsque cela est possible.\n\nSélectionnez simplement votre taille de pantalon préférée lors de la commande. Puis, dans la section Notes de commande au moment du paiement, indiquez la taille souhaitée pour la chemise. Notre équipe Service Client examinera votre demande, vous contactera si nécessaire et préparera votre Hyde Park Set selon vos tailles préférées.',
    whereQ: 'Où puis-je porter le Hyde Park Set ?',
    whereA:
      'Le Hyde Park Set a été créé pour les femmes dont le style de vie passe naturellement d’une destination à l’autre. Portez-le avec des baskets pour un café du matin, en voyage, avec des mocassins pour une journée en ville, ou avec des talons pour un déjeuner, un dîner ou une soirée.\n\nDe la Corniche à Abou Dabi aux rivages de Portofino, de Londres aux jardins de Rabat, des rues de Singapour au littoral de Miami, des boulevards de Los Angeles à l’élégance du Brunei — le Hyde Park Set a été conçu pour vous accompagner sans effort.',
    separateQ: 'Puis-je porter la chemise et le pantalon séparément ?',
    separateA:
      'Absolument. Bien que conçu comme un ensemble coordonné, chaque pièce a été créée pour fonctionner magnifiquement seule. La chemise oversize s’associe facilement à un pantalon tailleur, un jean ou une jupe, tandis que le pantalon palazzo peut être porté avec un pull, une blouse ou un top léger — plusieurs looks à partir d’un seul set.',
    breathableQ: 'Le Hyde Park Set est-il respirant ?',
    breathableA:
      'Oui. Le Hyde Park Set a été conçu en pensant au confort. Sa silhouette décontractée permet à l’air de circuler naturellement autour du corps, pour un port agréable toute la journée tout en conservant une allure élégante.',
    pocketsQ: 'Le Hyde Park Set a-t-il des poches ?',
    pocketsA:
      'Oui. La chemise oversize comporte deux poches poitrine fonctionnelles, tandis que le pantalon palazzo inclut deux poches latérales discrètes sur la couture latérale. Intégrées avec soin au design, elles vous permettent de garder téléphone, rouge à lèvres ou autres essentiels du quotidien tout en gardant les mains libres, pour vous déplacer confortablement sans toujours avoir besoin de votre sac.',
    careQ: 'Comment entretenir le Hyde Park Set ?',
    careA:
      'Le Hyde Park Set peut être lavé en machine à laver délicatement à 30 °C. Nous recommandons de laver avec des couleurs similaires et de laisser sécher à l’air libre pour préserver sa forme et sa finition.',
    travelQ: 'Le Hyde Park Set convient-il aux voyages ?',
    travelA:
      'Absolument. Bien que le Hyde Park Set ait été conçu pour voyager avec élégance, il a été créé pour bien plus encore. Sa silhouette décontractée, son style effortless et son confort quotidien le rendent aussi adapté à la vie de tous les jours qu’aux week-ends ou aux voyages internationaux.\n\nQue vous preniez l’avion, rencontriez des amis pour un café, fassiez des courses ou sortiez dîner — il s’adapte sans effort au moment. C’est le genre de tenue qui devient discrètement votre favorite, celle que vous choisirez instinctivement, encore et encore.',
  }),
  de: buildFaq({
    sizesQ: 'Kann ich Hemd und Hose in unterschiedlichen Größen bestellen?',
    sizesA:
      'Ja. Wir verstehen, dass viele Frauen unterschiedliche Größen für Ober- und Unterkörper haben. Obwohl das Hyde Park Set als komplettes Set verkauft wird, passen wir uns gerne unterschiedlichen Größen an, wann immer es möglich ist.\n\nWählen Sie bei der Bestellung einfach Ihre bevorzugte Hosengröße. Geben Sie dann im Bereich Bestellhinweise beim Checkout die gewünschte Hemdgröße an. Unser Customer-Care-Team prüft Ihre Anfrage, kontaktiert Sie bei Bedarf und stellt sicher, dass Ihr Hyde Park Set nach Ihren Größenwünschen vorbereitet wird.',
    whereQ: 'Wo kann ich das Hyde Park Set tragen?',
    whereA:
      'Das Hyde Park Set wurde für Frauen geschaffen, deren Lebensstil mühelos zwischen Destinationen und Anlässen wechselt. Stylen Sie es mit Sneakern zum Morgenkaffee, auf Reisen, mit Loafers für einen Tag in der Stadt oder mit Heels für Lunch, Dinner oder Abendgesellschaften.\n\nVon der Corniche in Abu Dhabi bis zu den Ufern von Portofino, von London zu den Gärten von Rabat, von den Straßen Singapurs bis zur Küste von Miami, den Boulevards von Los Angeles und der Eleganz Bruneis — das Hyde Park Set wurde konzipiert, um sich mühelos mit Ihnen zu bewegen.',
    separateQ: 'Kann ich Hemd und Hose getrennt tragen?',
    separateA:
      'Absolut. Obwohl als koordiniertes Set konzipiert, wurde jedes Teil so gestaltet, dass es für sich allein wunderbar funktioniert. Das Oversize-Hemd passt mühelos zu Tailoring-Hosen, Denim oder Röcken, während die Palazzo-Hose mit Strick, Blusen oder leichten Tops getragen werden kann — viele Looks aus einem einzigen Set.',
    breathableQ: 'Ist das Hyde Park Set atmungsaktiv?',
    breathableA:
      'Ja. Das Hyde Park Set wurde mit Blick auf Komfort entwickelt. Seine entspannte Silhouette lässt Luft natürlich um den Körper zirkulieren und macht es den ganzen Tag angenehm zu tragen bei elegantem Erscheinungsbild.',
    pocketsQ: 'Hat das Hyde Park Set Taschen?',
    pocketsA:
      'Ja. Das Oversize-Hemd verfügt über zwei funktionale Brusttaschen, die Palazzo-Hose über zwei dezente Seitennaht-Taschen. Durchdacht in das Design integriert, ermöglichen sie es, Telefon, Lippenstift oder andere tägliche Essentials mitzuführen und die Hände frei zu halten — bequem durch den Tag, ohne ständig zur Handtasche zu greifen.',
    careQ: 'Wie pflege ich das Hyde Park Set?',
    careA:
      'Das Hyde Park Set kann schonend bei 30 °C in der Maschine gewaschen werden. Wir empfehlen, mit ähnlichen Farben zu waschen und das Kleidungsstück natürlich an der Luft trocknen zu lassen, um Form und Finish zu bewahren.',
    travelQ: 'Eignet sich das Hyde Park Set für Reisen?',
    travelA:
      'Absolut. Während das Hyde Park Set für schöne Reisen konzipiert wurde, ist es für weit mehr geschaffen. Seine entspannte Silhouette, müheloses Styling und Alltagskomfort machen es ebenso geeignet für den täglichen Leben wie für Wochenendausflüge oder internationale Reisen.\n\nOb Sie einen Flug nehmen, Freunde zum Kaffee treffen, Besorgungen erledigen oder zum Dinner gehen — es passt sich mühelos dem Moment an. Es ist die Art von Outfit, die leise zu Ihrem Favorit wird, zu dem Sie instinktiv immer wieder greifen.',
  }),
  it: buildFaq({
    sizesQ: 'Posso ordinare camicia e pantaloni in taglie diverse?',
    sizesA:
      'Sì. Comprendiamo che molte donne hanno taglie diverse per la parte superiore e inferiore del corpo. Sebbene l’Hyde Park Set sia venduto come set completo, siamo lieti di accomodare taglie diverse quando possibile.\n\nSeleziona la taglia preferita dei pantaloni al momento dell’ordine. Poi, nella sezione Note ordine al checkout, indica la taglia desiderata per la camicia. Il nostro team Customer Care esaminerà la richiesta, ti contatterà se necessario e preparerà l’Hyde Park Set secondo le tue taglie preferite.',
    whereQ: 'Dove posso indossare l’Hyde Park Set?',
    whereA:
      'L’Hyde Park Set è stato creato per donne il cui stile di vita si muove con naturalezza tra destinazioni e occasioni. Indossalo con sneakers per un caffè mattutino, in viaggio, con mocassini per una giornata in città o con tacchi per pranzo, cena o serate.\n\nDalla Corniche di Abu Dhabi alle rive di Portofino, da Londra ai giardini di Rabat, dalle strade di Singapore alla costa di Miami, dai boulevard di Los Angeles all’eleganza del Brunei — l’Hyde Park Set è stato progettato per muoversi con te senza sforzo.',
    separateQ: 'Posso indossare camicia e pantaloni separatamente?',
    separateA:
      'Assolutamente. Sebbene progettato come set coordinato, ogni capo è stato creato per funzionare magnificamente da solo. La camicia oversize si abbina facilmente a pantaloni sartoriali, denim o gonne, mentre i pantaloni palazzo possono essere abbinati a maglieria, bluse o top leggeri — molti look da un singolo set.',
    breathableQ: 'L’Hyde Park Set è traspirante?',
    breathableA:
      'Sì. L’Hyde Park Set è stato progettato pensando al comfort. La silhouette rilassata permette all’aria di circolare naturalmente intorno al corpo, rendendolo confortevole da indossare tutto il giorno mantenendo un aspetto elegante.',
    pocketsQ: 'L’Hyde Park Set ha tasche?',
    pocketsA:
      'Sì. La camicia oversize presenta due tasche petto funzionali, mentre i pantaloni palazzo includono due tasche laterali discrete sulla cucitura laterale. Integrate con cura nel design, permettono di portare telefono, rossetto o altri essenziali quotidiani tenendo le mani libere, per muoversi comodamente senza dover sempre ricorrere alla borsa.',
    careQ: 'Come devo curare l’Hyde Park Set?',
    careA:
      'L’Hyde Park Set può essere lavato in lavatrice delicatamente a 30 °C. Consigliamo di lavare con colori simili e di far asciugare all’aria per preservare forma e finitura.',
    travelQ: 'L’Hyde Park Set è adatto ai viaggi?',
    travelA:
      'Assolutamente. Sebbene l’Hyde Park Set sia stato progettato per viaggiare con eleganza, è stato creato per molto di più. La silhouette rilassata, lo styling effortless e il comfort quotidiano lo rendono adatto alla vita di tutti i giorni quanto a weekend fuori porta o viaggi internazionali.\n\nChe tu stia prendendo un volo, incontrando amici per un caffè, facendo commissioni o uscendo a cena — si adatta senza sforzo al momento. È il tipo di outfit che diventa silenziosamente il tuo preferito, quello che sceglierai istintivamente, ancora e ancora.',
  }),
  es: buildFaq({
    sizesQ: '¿Puedo pedir la camisa y los pantalones en tallas diferentes?',
    sizesA:
      'Sí. Entendemos que muchas mujeres tienen tallas distintas para la parte superior e inferior del cuerpo. Aunque el Hyde Park Set se vende como conjunto completo, estamos encantados de adaptar tallas diferentes siempre que sea posible.\n\nSimplemente seleccione su talla de pantalón preferida al hacer el pedido. Luego, en la sección Notas del pedido durante el pago, indique la talla deseada para la camisa. Nuestro equipo de Atención al Cliente revisará su solicitud, le contactará si es necesario y preparará su Hyde Park Set según sus tallas preferidas.',
    whereQ: '¿Dónde puedo llevar el Hyde Park Set?',
    whereA:
      'El Hyde Park Set fue creado para mujeres cuyo estilo de vida se mueve con naturalidad entre destinos y ocasiones. Estílelo con zapatillas para un café matutino, en viajes, con mocasines para un día en la ciudad o con tacones para almuerzo, cena o reuniones nocturnas.\n\nDesde la Corniche de Abu Dabi hasta las orillas de Portofino, de Londres a los jardines de Rabat, de las calles de Singapur a la costa de Miami, los bulevares de Los Ángeles y la elegancia de Brunéi — el Hyde Park Set fue diseñado para moverse contigo sin esfuerzo.',
    separateQ: '¿Puedo llevar la camisa y los pantalones por separado?',
    separateA:
      'Por supuesto. Aunque diseñado como conjunto coordinado, cada pieza fue creada para funcionar maravillosamente por sí sola. La camisa oversize combina fácilmente con pantalones de sastrería, denim o faldas, mientras que los pantalones palazzo pueden estilizarse con punto, blusas o tops ligeros — múltiples looks de un solo set.',
    breathableQ: '¿Es transpirable el Hyde Park Set?',
    breathableA:
      'Sí. El Hyde Park Set ha sido diseñado pensando en la comodidad. Su silueta relajada permite que el aire circule naturalmente alrededor del cuerpo, haciéndolo cómodo de llevar todo el día manteniendo una apariencia elegante.',
    pocketsQ: '¿Tiene bolsillos el Hyde Park Set?',
    pocketsA:
      'Sí. La camisa oversize cuenta con dos bolsillos de pecho funcionales, mientras que los pantalones palazzo incluyen dos bolsillos laterales discretos en la costura lateral. Integrados con cuidado en el diseño, permiten llevar teléfono, lápiz labial u otros esenciales diarios con las manos libres, para moverse cómodamente sin recurrir siempre al bolso.',
    careQ: '¿Cómo debo cuidar el Hyde Park Set?',
    careA:
      'El Hyde Park Set puede lavarse en lavadora suavemente a 30 °C. Recomendamos lavar con colores similares y dejar secar al aire de forma natural para preservar su forma y acabado.',
    travelQ: '¿Es el Hyde Park Set adecuado para viajar?',
    travelA:
      'Por supuesto. Aunque el Hyde Park Set fue diseñado para viajar con elegancia, fue creado para mucho más. Su silueta relajada, estilo effortless y comodidad cotidiana lo hacen tan adecuado para la vida diaria como para escapadas de fin de semana o viajes internacionales.\n\nYa sea que tome un vuelo, se reúna con amigos para un café, haga recados o salga a cenar — se adapta sin esfuerzo al momento. Es el tipo de outfit que silenciosamente se convierte en su favorito, al que volverá instintivamente una y otra vez.',
  }),
  ru: buildFaq({
    sizesQ: 'Можно ли заказать рубашку и брюки разных размеров?',
    sizesA:
      'Да. Мы понимаем, что у многих женщин разные размеры верхней и нижней части тела. Хотя Hyde Park Set продаётся как полный комплект, мы с радостью подберём разные размеры, когда это возможно.\n\nПросто выберите предпочтительный размер брюк при заказе. Затем в разделе «Примечания к заказу» при оформлении укажите желаемый размер рубашки. Наша команда Customer Care рассмотрит запрос, свяжется с вами при необходимости и подготовит Hyde Park Set согласно вашим размерам.',
    whereQ: 'Где можно носить Hyde Park Set?',
    whereA:
      'Hyde Park Set создан для женщин, чей образ жизни легко переключается между направлениями и случаями. Носите с кроссовками на утренний кофе, в путешествии, с лоферами на день в городе или с каблуками на обед, ужин или вечерние встречи.\n\nОт набережной Корниш в Абу-Даби до берегов Портофино, от Лондона до садов Рабата, от улиц Сингапура до побережья Майами, бульваров Лос-Анджелеса и элегантности Брунея — Hyde Park Set создан, чтобы двигаться с вами без усилий.',
    separateQ: 'Можно ли носить рубашку и брюки отдельно?',
    separateA:
      'Конечно. Хотя комплект задуман как координированный, каждая деталь создана, чтобы прекрасно работать самостоятельно. Оверсайз-рубашка легко сочетается с классическими брюками, денимом или юбками, а брюки palazzo — с трикотажем, блузами или лёгкими топами — множество образов из одного комплекта.',
    breathableQ: 'Дышащий ли Hyde Park Set?',
    breathableA:
      'Да. Hyde Park Set разработан с учётом комфорта. Свободный силуэт позволяет воздуху естественно циркулировать вокруг тела, обеспечивая комфорт весь день при элегантном виде.',
    pocketsQ: 'Есть ли у Hyde Park Set карманы?',
    pocketsA:
      'Да. Оверсайз-рубашка имеет два функциональных нагрудных кармана, а брюки palazzo — два скрытых боковых кармана на боковом шве. Продуманно интегрированные в дизайн, они позволяют носить телефон, помаду или другие ежедневные мелочи, оставляя руки свободными — удобно весь день без постоянного обращения к сумке.',
    careQ: 'Как ухаживать за Hyde Park Set?',
    careA:
      'Hyde Park Set можно стирать в машине в деликатном режиме при 30 °C. Рекомендуем стирать с похожими цветами и сушить на воздухе для сохранения формы и отделки.',
    travelQ: 'Подходит ли Hyde Park Set для путешествий?',
    travelA:
      'Безусловно. Хотя Hyde Park Set создан для красивых путешествий, он предназначен для гораздо большего. Свободный силуэт, лёгкий стиль и повседневный комфорт делают его столь же подходящим для повседневной жизни, как для выходных или международных поездок.\n\nБудь то перелёт, встреча с друзьями за кофе, дела или ужин — он легко адаптируется к моменту. Это тот образ, который незаметно становится любимым, к которому вы будете инстинктивно возвращаться снова и снова.',
  }),
  zh: buildFaq({
    sizesQ: '衬衫和长裤可以选不同尺码吗？',
    sizesA:
      '可以。我们理解许多女性上下身尺码不同。Hyde Park 套装虽作为完整套装出售，我们尽可能满足不同尺码需求。\n\n下单时选择您偏好的长裤尺码，然后在结账的订单备注中注明衬衫所需尺码。客服团队将审核您的请求，必要时与您联系，并按您偏好的尺码准备 Hyde Park 套装。',
    whereQ: 'Hyde Park 套装适合在哪些场合穿着？',
    whereA:
      'Hyde Park 套装为生活方式自如穿梭于不同目的地与场合的女性而设计。搭配运动鞋晨间咖啡、旅行穿着、乐福鞋城市漫步，或高跟鞋出席午餐、晚餐与晚间聚会。\n\n从阿布扎比滨海大道到波托菲诺海岸，从伦敦到拉巴特花园，从新加坡街头到迈阿密海岸线，洛杉矶林荫大道与文莱的典雅——Hyde Park 套装为轻松随行而设计。',
    separateQ: '衬衫和长裤可以分开穿着吗？',
    separateA:
      '当然可以。虽为协调套装设计，每件单品均可独立出色穿着。宽松衬衫可轻松搭配西裤、牛仔或半裙，阔腿长裤可搭配针织、衬衫或轻薄上衣——一套单品，多种造型。',
    breathableQ: 'Hyde Park 套装透气吗？',
    breathableA:
      '是的。Hyde Park 套装以舒适为设计考量。宽松廓形让空气自然流通，全天舒适穿着且保持优雅外观。',
    pocketsQ: 'Hyde Park 套装有口袋吗？',
    pocketsA:
      '有的。宽松衬衫设有两个实用胸袋，阔腿长裤配有两个侧缝隐藏口袋。巧妙融入设计，可随身携带手机、口红或其他日常必需品，双手依然自由，全天舒适活动而无需总伸手拿包。',
    careQ: '如何护理 Hyde Park 套装？',
    careA:
      'Hyde Park 套装可在 30°C 轻柔机洗。建议与同色系衣物一起洗涤，自然晾干以保持廓形与质感。',
    travelQ: 'Hyde Park 套装适合旅行吗？',
    travelA:
      '非常适合。Hyde Park 套装虽为优雅旅行而设计，用途远不止于此。宽松廓形、轻松穿搭与日常舒适使其同样适合日常生活、周末短途或国际旅程。\n\n无论是赶航班、与朋友咖啡小聚、处理日常事务或外出晚餐——都能轻松适应当下。它是会悄然成为心头好的那一套，你会本能地一再选择它。',
  }),
  nl: buildFaq({
    sizesQ: 'Kan ik het overhemd en de broek in verschillende maten bestellen?',
    sizesA:
      'Ja. We begrijpen dat veel vrouwen verschillende maten hebben voor boven- en onderlichaam. Hoewel de Hyde Park Set als compleet set wordt verkocht, passen we graag verschillende maten aan wanneer mogelijk.\n\nSelecteer bij het bestellen uw voorkeursbroekmaat. Vermeld vervolgens in het gedeelte Bestelnotities tijdens het afrekenen de gewenste overhemdmaat. Ons Customer Care-team beoordeelt uw verzoek, neemt indien nodig contact op en zorgt dat uw Hyde Park Set volgens uw voorkeursmaten wordt voorbereid.',
    whereQ: 'Waar kan ik de Hyde Park Set dragen?',
    whereA:
      'De Hyde Park Set is gemaakt voor vrouwen wier levensstijl moeiteloos tussen bestemmingen en gelegenheden beweegt. Draag hem met sneakers voor een ochtendkoffie, op reis, met loafers voor een dag in de stad of met hakken voor lunch, diner of avondbijeenkomsten.\n\nVan de Corniche in Abu Dhabi tot de oevers van Portofino, van Londen tot de tuinen van Rabat, van de straten van Singapore tot de kustlijn van Miami, de boulevards van Los Angeles en de elegantie van Brunei — de Hyde Park Set is ontworpen om moeiteloos met u mee te bewegen.',
    separateQ: 'Kan ik het overhemd en de broek apart dragen?',
    separateA:
      'Absoluut. Hoewel ontworpen als gecoördineerde set, is elk stuk gemaakt om prachtig op zichzelf te werken. Het oversized overhemd past moeiteloos bij pantalons, denim of rokken, terwijl de palazzo-broek kan worden gestyled met knitwear, blouses of lichte tops — meerdere looks uit één set.',
    breathableQ: 'Is de Hyde Park Set ademend?',
    breathableA:
      'Ja. De Hyde Park Set is ontworpen met comfort in gedachten. Het ontspannen silhouet laat lucht natuurlijk rond het lichaam circuleren, waardoor het de hele dag comfortabel is om te dragen met een elegante uitstraling.',
    pocketsQ: 'Heeft de Hyde Park Set zakken?',
    pocketsA:
      'Ja. Het oversized overhemd heeft twee functionele borstzakken, de palazzo-broek twee discrete zijnaadzakken. Doordacht geïntegreerd in het design, zodat u telefoon, lippenstift of andere dagelijkse essentials kunt meenemen met vrije handen — comfortabel de dag door zonder steeds naar uw tas te grijpen.',
    careQ: 'Hoe verzorg ik de Hyde Park Set?',
    careA:
      'De Hyde Park Set kan voorzichtig worden gewassen in de machine op 30 °C. We raden aan te wassen met vergelijkbare kleuren en natuurlijk aan de lucht te laten drogen om vorm en afwerking te behouden.',
    travelQ: 'Is de Hyde Park Set geschikt voor reizen?',
    travelA:
      'Absoluut. Hoewel de Hyde Park Set is ontworpen om mooi te reizen, is hij geschapen voor veel meer. Het ontspannen silhouet, effortless styling en dagelijks comfort maken hem even geschikt voor het dagelijks leven als voor weekenden weg of internationale reizen.\n\nOf u nu een vlucht neemt, vrienden ontmoet voor koffie, boodschappen doet of uit eten gaat — hij past zich moeiteloos aan het moment aan. Het is het soort outfit dat stilletjes uw favoriet wordt, waar u instinctief steeds weer naar grijpt.',
  }),
  pt: buildFaq({
    sizesQ: 'Posso encomendar a camisa e as calças em tamanhos diferentes?',
    sizesA:
      'Sim. Compreendemos que muitas mulheres têm tamanhos diferentes para a parte superior e inferior do corpo. Embora o Hyde Park Set seja vendido como conjunto completo, temos todo o gosto em acomodar tamanhos diferentes sempre que possível.\n\nSelecione o tamanho de calça preferido ao fazer o pedido. Depois, na secção Notas do pedido durante o checkout, indique o tamanho desejado para a camisa. A nossa equipa de Apoio ao Cliente analisará o pedido, contactá-la-á se necessário e preparará o Hyde Park Set de acordo com os seus tamanhos preferidos.',
    whereQ: 'Onde posso usar o Hyde Park Set?',
    whereA:
      'O Hyde Park Set foi criado para mulheres cujo estilo de vida se move naturalmente entre destinos e ocasiões. Use com ténis para um café matinal, em viagem, com mocassins para um dia na cidade ou com saltos para almoço, jantar ou encontros noturnos.\n\nDa Corniche em Abu Dhabi às margens de Portofino, de Londres aos jardins de Rabat, das ruas de Singapura à costa de Miami, aos boulevards de Los Angeles e à elegância do Brunei — o Hyde Park Set foi concebido para se mover consigo sem esforço.',
    separateQ: 'Posso usar a camisa e as calças separadamente?',
    separateA:
      'Com certeza. Embora concebido como conjunto coordenado, cada peça foi criada para funcionar lindamente sozinha. A camisa oversized combina facilmente com calças de alfaiataria, denim ou saias, enquanto as calças palazzo podem ser usadas com malha, blusas ou tops leves — vários looks a partir de um único set.',
    breathableQ: 'O Hyde Park Set é respirável?',
    breathableA:
      'Sim. O Hyde Park Set foi concebido com o conforto em mente. A silhueta relaxada permite que o ar circule naturalmente em redor do corpo, tornando-o confortável de usar ao longo do dia com aparência elegante.',
    pocketsQ: 'O Hyde Park Set tem bolsos?',
    pocketsA:
      'Sim. A camisa oversized apresenta dois bolsos de peito funcionais, enquanto as calças palazzo incluem dois bolsos laterais discretos na costura lateral. Integrados com cuidado no design, permitem levar telemóvel, batom ou outros essenciais diários com as mãos livres, para se mover confortavelmente sem recorrer sempre à mala.',
    careQ: 'Como devo cuidar do Hyde Park Set?',
    careA:
      'O Hyde Park Set pode ser lavado na máquina suavemente a 30 °C. Recomendamos lavar com cores semelhantes e deixar secar ao ar naturalmente para preservar a forma e o acabamento.',
    travelQ: 'O Hyde Park Set é adequado para viagens?',
    travelA:
      'Com certeza. Embora o Hyde Park Set tenha sido concebido para viajar com elegância, foi criado para muito mais. A silhueta relaxada, styling effortless e conforto quotidiano tornam-no tão adequado para a vida diária como para fins de semana fora ou viagens internacionais.\n\nQuer esteja a apanhar um voo, a encontrar amigos para um café, a fazer recados ou a sair para jantar — adapta-se sem esforço ao momento. É o tipo de outfit que silenciosamente se torna o seu favorito, aquele a que voltará instintivamente, vez após vez.',
  }),
  id: buildFaq({
    sizesQ: 'Bisakah saya memesan kemeja dan celana dalam ukuran berbeda?',
    sizesA:
      'Ya. Kami memahami bahwa banyak wanita memiliki ukuran berbeda untuk bagian atas dan bawah tubuh. Meskipun Hyde Park Set dijual sebagai set lengkap, kami dengan senang hati mengakomodasi ukuran berbeda jika memungkinkan.\n\nPilih ukuran celana pilihan Anda saat memesan. Kemudian di bagian Catatan Pesanan saat checkout, sebutkan ukuran yang Anda inginkan untuk kemeja. Tim Customer Care kami akan meninjau permintaan Anda, menghubungi jika diperlukan, dan memastikan Hyde Park Set disiapkan sesuai ukuran pilihan Anda.',
    whereQ: 'Di mana saya bisa memakai Hyde Park Set?',
    whereA:
      'Hyde Park Set dibuat untuk wanita yang gaya hidupnya bergerak dengan mudah antara destinasi dan kesempatan. Kenakan dengan sneakers untuk kopi pagi, saat bepergian, dengan loafers untuk hari di kota, atau dengan heels untuk makan siang, malam, atau pertemuan malam.\n\nDari Corniche di Abu Dhabi hingga pantai Portofino, dari London ke taman Rabat, dari jalan-jalan Singapura ke garis pantai Miami, boulevard Los Angeles dan keanggunan Brunei — Hyde Park Set dirancang untuk bergerak dengan mudah bersama Anda.',
    separateQ: 'Bisakah saya memakai kemeja dan celana secara terpisah?',
    separateA:
      'Tentu saja. Meskipun dirancang sebagai set yang selaras, setiap potong dibuat untuk berfungsi indah sendiri. Kemeja oversized mudah dipadukan dengan celana tailored, denim, atau rok, sementara celana palazzo dapat digaya dengan knitwear, blus, atau top ringan — banyak look dari satu set.',
    breathableQ: 'Apakah Hyde Park Set breathable?',
    breathableA:
      'Ya. Hyde Park Set dirancang dengan kenyamanan dalam pikiran. Siluet santai memungkinkan udara beredar secara alami di sekitar tubuh, nyaman dipakai sepanjang hari sambil tetap tampak elegan.',
    pocketsQ: 'Apakah Hyde Park Set memiliki saku?',
    pocketsA:
      'Ya. Kemeja oversized memiliki dua saku dada fungsional, sementara celana palazzo mencakup dua saku sisi tersembunyi pada jahitan samping. Terintegrasi dengan cermat dalam desain, memungkinkan Anda membawa ponsel, lipstik, atau kebutuhan harian lainnya dengan tangan tetap bebas, bergerak nyaman sepanjang hari tanpa selalu meraih tas.',
    careQ: 'Bagaimana cara merawat Hyde Park Set?',
    careA:
      'Hyde Park Set dapat dicuci mesin dengan lembut pada 30°C. Kami merekomendasikan mencuci dengan warna serupa dan mengeringkan secara alami di udara untuk menjaga bentuk dan finish.',
    travelQ: 'Apakah Hyde Park Set cocok untuk bepergian?',
    travelA:
      'Tentu saja. Meskipun Hyde Park Set dirancang untuk bepergian dengan indah, ia diciptakan untuk jauh lebih dari itu. Siluet santai, styling effortless, dan kenyamanan sehari-hari membuatnya sama cocoknya untuk kehidupan harian maupun akhir pekan atau perjalanan internasional.\n\nBaik mengejar penerbangan, bertemu teman untuk kopi, menjalankan tugas, atau keluar makan malam — beradaptasi tanpa usaha pada momen itu. Ini jenis outfit yang diam-diam menjadi favorit Anda, yang akan Anda pilih secara insting, lagi dan lagi.',
  }),
  ms: buildFaq({
    sizesQ: 'Bolehkah saya memesan kemeja dan seluar dalam saiz berbeza?',
    sizesA:
      'Ya. Kami memahami bahawa ramai wanita mempunyai saiz berbeza untuk bahagian atas dan bawah badan. Walaupun Hyde Park Set dijual sebagai set lengkap, kami gembira menampung saiz berbeza apabila boleh.\n\nPilih saiz seluar pilihan anda semasa membuat pesanan. Kemudian dalam bahagian Nota Pesanan semasa checkout, nyatakan saiz yang anda mahukan untuk kemeja. Pasukan Khidmat Pelanggan kami akan menyemak permintaan anda, menghubungi jika perlu, dan memastikan Hyde Park Set disediakan mengikut saiz pilihan anda.',
    whereQ: 'Di manakah saya boleh memakai Hyde Park Set?',
    whereA:
      'Hyde Park Set dicipta untuk wanita yang gaya hidupnya bergerak dengan mudah antara destinasi dan majlis. Gayakannya dengan sneakers untuk kopi pagi, semasa melancong, dengan loafers untuk hari di bandar, atau dengan heels untuk makan tengah hari, malam, atau perhimpunan petang.\n\nDari Corniche di Abu Dhabi ke pantai Portofino, dari London ke taman Rabat, dari jalan-jalan Singapura ke garis pantai Miami, boulevard Los Angeles dan keanggunan Brunei — Hyde Park Set direka untuk bergerak dengan mudah bersama anda.',
    separateQ: 'Bolehkah saya memakai kemeja dan seluar secara berasingan?',
    separateA:
      'Sudah tentu. Walaupun direka sebagai set yang selaras, setiap potongan dicipta untuk berfungsi dengan indah sendiri. Kemeja oversized mudah digayakan dengan seluar tailored, denim atau skirt, manakala seluar palazzo boleh digayakan dengan knitwear, blaus atau top ringan — pelbagai gaya daripada satu set.',
    breathableQ: 'Adakah Hyde Park Set bernafas?',
    breathableA:
      'Ya. Hyde Park Set direka dengan keselesaan dalam fikiran. Siluet santai membolehkan udara beredar secara semula jadi di sekeliling badan, selesa dipakai sepanjang hari sambil mengekalkan penampilan elegan.',
    pocketsQ: 'Adakah Hyde Park Set mempunyai poket?',
    pocketsA:
      'Ya. Kemeja oversized mempunyai dua poket dada fungsian, manakala seluar palazzo termasuk dua poket sisi tersembunyi pada jahitan sisi. Disepadukan dengan teliti dalam reka bentuk, membolehkan anda membawa telefon, gincu atau keperluan harian lain sambil tangan kekal bebas, bergerak dengan selesa tanpa sentiasa meraih beg tangan.',
    careQ: 'Bagaimana saya menjaga Hyde Park Set?',
    careA:
      'Hyde Park Set boleh dicuci mesin dengan lembut pada 30°C. Kami mengesyorkan mencuci dengan warna serupa dan mengeringkan secara semula jadi di udara untuk mengekalkan bentuk dan kemasan.',
    travelQ: 'Adakah Hyde Park Set sesuai untuk melancong?',
    travelA:
      'Sudah tentu. Walaupun Hyde Park Set direka untuk melancong dengan anggun, ia dicipta untuk jauh lebih daripada itu. Siluet santai, penggayaan effortless dan keselesaan harian menjadikannya sesuai untuk kehidupan harian sama seperti hujung minggu atau perjalanan antarabangsa.\n\nSama ada mengejar penerbangan, bertemu rakan untuk kopi, menjalankan urusan atau keluar untuk makan malam — ia menyesuaikan diri dengan mudah pada saat itu. Ia jenis pakaian yang secara senyap menjadi kegemaran anda, yang akan anda pilih secara naluri, berulang kali.',
  }),
}

export function getHydeParkSetPdpFaq(locale: AppLocale = 'en'): ProductFaqItem[] {
  return FAQ_BY_LOCALE[locale] ?? HYDE_PARK_SET_FAQ_EN
}
