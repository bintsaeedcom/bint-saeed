import type { AppLocale } from '@/lib/i18n/routing'
import type { AlAinOasisBagCharmId, BagCharmFaqItem } from '@/lib/accessories/bagCharmPdpContent'
import { getAlAinRosetteFaqAnswer } from '@/lib/the-codes/alAinRosetteFaqAnswer'

const CARE_A_EN =
  'Avoid contact with water, perfume and harsh chemicals. Natural gemstones may chip or break if dropped onto hard surfaces or subjected to impact. Wipe gently with a soft, dry cloth when needed. Do not soak the stones in water or cleansers. Store in a soft pouch or Bint Saeed gift box when not in use, away from sunlight, excessive heat and damp conditions.'

const NATURAL_A_EN =
  'Yes. Each Bint Saeed Natural Stone Bag Charm is hand-assembled using genuine natural gemstones. Variations in colour, pattern and inclusions are unique characteristics of each stone. The Fuchsia Jade beads are natural jade whose luminous colour has been carefully enhanced through traditional colour treatment — a long-established practice in fine stone jewellery that deepens the stone’s presence while preserving its natural character.'

const DIFFERENCE_A_EN =
  'Both Al Ain Oasis bag charms are hand-assembled in Abu Dhabi from Fuchsia Jade beads, hand-carved Carnelian Al Ain Rosettes and gold-plated faceted hematite. Al Ain Oasis I features two cascading strands — a lighter, more delicate silhouette. Al Ain Oasis II features three cascading strands — a fuller, more statement presence on the bag. Choose according to how much colour and movement you want on your favourite handbag.'

const ATTACH_A_EN =
  'Each Al Ain Oasis bag charm is finished with a gold-tone ring clasp — clip opening approximately 0.8 mm / 0.03 in — designed to secure to a zip pull, strap ring, D-ring or bag-charm loop so the cascading strands can move freely. It may also be used as a keyring; please handle with care. Natural stones are fragile and may chip or break if struck against hard surfaces or subjected to impact.'

type FaqLocalePack = {
  naturalQ: string
  naturalA: string
  rosetteQ: string
  differenceQ: string
  differenceA: string
  attachQ: string
  attachA: string
  careQ: string
  careA: string
}

const FAQ_BY_LOCALE: Record<AppLocale, FaqLocalePack> = {
  en: {
    naturalQ: 'Are the gemstones natural?',
    naturalA: NATURAL_A_EN,
    rosetteQ: 'What is the Al Ain Rosette?',
    differenceQ: 'What is the difference between Al Ain Oasis I and Al Ain Oasis II?',
    differenceA: DIFFERENCE_A_EN,
    attachQ: 'How do I attach the bag charm — and can I use it as a keyring?',
    attachA: ATTACH_A_EN,
    careQ: 'How should I care for my Natural Stone Bag Charm?',
    careA: CARE_A_EN,
  },
  ar: {
    naturalQ: 'هل الأحجار طبيعية؟',
    naturalA:
      'نعم. كل تعليقة حقيبة من الأحجار الطبيعية لدى Bint Saeed تُجمَّع يدوياً من أحجار كريمة طبيعية أصيلة. وتباينات اللون والنمط والشوائب خصائص فريدة لكل حجر. خرز اليشم الفوشي من اليشم الطبيعي وقد عُزّز لونه المضيء بعناية عبر معالجة لونية تقليدية — ممارسة عريقة في مجوهرات الأحجار الراقية تعمّق حضور الحجر مع الحفاظ على طابعه الطبيعي.',
    rosetteQ: 'ما هي روزيت العين؟',
    differenceQ: 'ما الفرق بين واحة العين الأولى وواحة العين الثانية؟',
    differenceA:
      'كلا تعليقتي حقيبة واحة العين تُجمَّعان يدوياً في أبوظبي من خرز اليشم الفوشي وروزيت العين من العقيق المنحوتة وهيمايت مطلي بالذهب ذو وجوه. واحة العين الأولى بخيطين متدفقين — حضوراً أخف وأرقّ. واحة العين الثانية بثلاثة خيوط متدفقة — حضوراً أوفر وأكثر بروزاً على الحقيبة. اختاري حسب مقدار اللون والحركة الذي تريدينه على حقيبتك المفضلة.',
    attachQ: 'كيف أثبّت تعليقة الحقيبة — وهل يمكن استخدامها كتعليقة مفاتيح؟',
    attachA:
      'تُنهى كل تعليقة حقيبة واحة العين بمشبك حلقي بلون الذهب — فتحة المشبك تقريباً 0.8 مم / 0.03 إنش — لتُثبَّت على سحّاب أو حلقة حزام أو حلقة D أو حلقة تعليقة الحقيبة بحيث تتحرّك الخيوط بحرية. يمكن استخدامها أيضاً كتعليقة مفاتيح؛ يُرجى الحذر. الأحجار الطبيعية هشّة وقد تتشقّق أو تنكسر إذا اصطدمت بسطح صلب أو تعرّضت لصدمة.',
    careQ: 'كيف أعتني بتعليقة الحقيبة من الأحجار الطبيعية؟',
    careA:
      'تجنّبي ملامسة الماء والعطور والمواد الكيميائية القاسية. قد تتشقّق الأحجار الطبيعية أو تنكسر إذا سقطت على سطح صلب أو تعرّضت لصدمة. امسحي بلطف بقطعة قماش ناعمة وجافة عند الحاجة. لا تغمري الأحجار في الماء أو المنظفات. احفظيها في جراب ناعم أو علبة هدايا Bint Saeed عند عدم الاستخدام، بعيداً عن الشمس والحرارة الزائدة والرطوبة.',
  },
  fr: {
    naturalQ: 'Les pierres sont-elles naturelles ?',
    naturalA:
      'Oui. Chaque breloque de sac en pierres naturelles Bint Saeed est assemblée à la main avec de véritables gemmes naturelles. Les variations de couleur, de motif et d’inclusions sont des caractéristiques uniques de chaque pierre. Les perles de jade fuchsia sont du jade naturel dont la couleur lumineuse a été soigneusement intensifiée par un traitement chromatique traditionnel — une pratique établie en joaillerie de pierres fines qui approfondit la présence de la pierre tout en préservant son caractère naturel.',
    rosetteQ: 'Qu’est-ce que la Rosette d’Al Ain ?',
    differenceQ: 'Quelle est la différence entre Al Ain Oasis I et Al Ain Oasis II ?',
    differenceA:
      'Les deux breloques de sac Al Ain Oasis sont assemblées à la main à Abou Dabi à partir de perles de jade fuchsia, de rosettes d’Al Ain en cornaline sculptées et d’hématite facettée plaquée or. Al Ain Oasis I compte deux brins en cascade — une silhouette plus légère et délicate. Al Ain Oasis II en compte trois — une présence plus ample et plus affirmée sur le sac. Choisissez selon la quantité de couleur et de mouvement souhaitée sur votre sac préféré.',
    attachQ: 'Comment fixer la breloque — et puis-je l’utiliser en porte-clés ?',
    attachA:
      'Chaque breloque Al Ain Oasis est finie d’un fermoir anneau ton or — ouverture du clip d’environ 0,8 mm / 0,03 in — conçu pour se fixer à un tirette, anneau de bandoulière, anneau en D ou boucle de breloque afin que les brins bougent librement. Elle peut aussi servir de porte-clés ; manipulez-la avec soin. Les pierres naturelles sont fragiles et peuvent s’ébrécher ou se briser au contact d’une surface dure ou sous un choc.',
    careQ: 'Comment entretenir ma breloque de sac en pierres naturelles ?',
    careA:
      'Évitez le contact avec l’eau, le parfum et les produits chimiques agressifs. Les gemmes naturelles peuvent s’ébrécher ou se briser en cas de chute ou de choc. Essuyez délicatement avec un chiffon doux et sec si nécessaire. N’immergez pas les pierres. Rangez dans une pochette douce ou un écrin Bint Saeed, à l’abri du soleil, de la chaleur excessive et de l’humidité.',
  },
  it: {
    naturalQ: 'Le gemme sono naturali?',
    naturalA:
      'Sì. Ogni ciondolo per borsa in pietra naturale Bint Saeed è assemblato a mano con vere gemme naturali. Variazioni di colore, pattern e inclusioni sono caratteristiche uniche di ogni pietra. Le perle di giada fucsia sono giada naturale il cui colore luminoso è stato accuratamente intensificato con un trattamento cromatico tradizionale — pratica consolidata nella gioielleria di pietre fini che approfondisce la presenza della pietra preservandone il carattere naturale.',
    rosetteQ: 'Cos’è la Rosetta di Al Ain?',
    differenceQ: 'Qual è la differenza tra Al Ain Oasis I e Al Ain Oasis II?',
    differenceA:
      'Entrambi i ciondoli per borsa Al Ain Oasis sono assemblati a mano ad Abu Dhabi con perle di giada fucsia, Rosette di Al Ain in corniola intagliate ed ematite sfaccettata placcata oro. Al Ain Oasis I ha due fili a cascata — una silhouette più leggera e delicata. Al Ain Oasis II ne ha tre — una presenza più piena e statement sulla borsa. Scegliete in base a quanto colore e movimento desiderate sulla borsa preferita.',
    attachQ: 'Come si fissano — e posso usarli come portachiavi?',
    attachA:
      'Ogni ciondolo Al Ain Oasis è finito con un fermaglio ad anello tono oro — apertura del clip circa 0,8 mm / 0,03 in — pensato per fissarsi a un tiretto, anello di tracolla, anello a D o asola per ciondolo così che i fili possano muoversi liberamente. Può anche essere usato come portachiavi; maneggiatelo con cura. Le pietre naturali sono fragili e possono scheggiarsi o rompersi se colpite contro superfici dure o sottoposte a urti.',
    careQ: 'Come curo il mio ciondolo per borsa in pietra naturale?',
    careA:
      'Evitate il contatto con acqua, profumo e prodotti chimici aggressivi. Le gemme naturali possono scheggiarsi o rompersi se cadono o subiscono urti. Pulite delicatamente con un panno morbido e asciutto. Non immergete le pietre. Conservate in una custodia morbida o in uno scrigno Bint Saeed, lontano da sole, calore eccessivo e umidità.',
  },
  es: {
    naturalQ: '¿Las gemas son naturales?',
    naturalA:
      'Sí. Cada colgante para bolso de piedra natural Bint Saeed se ensambla a mano con gemas naturales auténticas. Las variaciones de color, patrón e inclusiones son características únicas de cada piedra. Las cuentas de jade fucsia son jade natural cuyo color luminoso se ha intensificado cuidadosamente con un tratamiento cromático tradicional — práctica consolidada en joyería de piedras finas que profundiza la presencia de la piedra preservando su carácter natural.',
    rosetteQ: '¿Qué es la Roseta de Al Ain?',
    differenceQ: '¿Cuál es la diferencia entre Al Ain Oasis I y Al Ain Oasis II?',
    differenceA:
      'Ambos colgantes para bolso Al Ain Oasis se ensamblan a mano en Abu Dabi con cuentas de jade fucsia, Rosetas de Al Ain en cornalina talladas y hematita facetada baño de oro. Al Ain Oasis I tiene dos hebras en cascada — una silueta más ligera y delicada. Al Ain Oasis II tiene tres — una presencia más plena y statement en el bolso. Elija según cuánto color y movimiento desee en su bolso favorito.',
    attachQ: '¿Cómo se fija — y puedo usarlo como llavero?',
    attachA:
      'Cada colgante Al Ain Oasis termina en un cierre de anillo tono oro — apertura del clip aproximadamente 0,8 mm / 0,03 in — pensado para fijarse a un tirador, anilla de asa, anilla en D o asa de colgante para que las hebras se muevan con libertad. También puede usarse como llavero; manéjelo con cuidado. Las piedras naturales son frágiles y pueden astillarse o romperse si golpean superficies duras o sufren impacto.',
    careQ: '¿Cómo cuido mi colgante para bolso de piedra natural?',
    careA:
      'Evite el contacto con agua, perfume y químicos agresivos. Las gemas naturales pueden astillarse o romperse si caen o sufren impacto. Limpie suavemente con un paño suave y seco. No sumerja las piedras. Guarde en una funda suave o estuche Bint Saeed, lejos del sol, el calor excesivo y la humedad.',
  },
  ru: {
    naturalQ: 'Камни натуральные?',
    naturalA:
      'Да. Каждая подвеска для сумки из натурального камня Bint Saeed собирается вручную из настоящих природных самоцветов. Вариации цвета, узора и включений — уникальные черты каждого камня. Бусины фуксиевого нефрита — натуральный нефрит, чей светящийся цвет аккуратно усилен традиционной цветовой обработкой — устоявшейся практикой в ювелирном деле с камнями, которая углубляет присутствие камня, сохраняя его природный характер.',
    rosetteQ: 'Что такое розетка Al Ain?',
    differenceQ: 'В чём разница между Al Ain Oasis I и Al Ain Oasis II?',
    differenceA:
      'Обе подвески для сумки Al Ain Oasis собраны вручную в Абу-Даби из бусин фуксиевого нефрита, резных сердоликовых розеток Al Ain и позолоченного гранёного гематита. Al Ain Oasis I — две каскадные нити, более лёгкий и изящный силуэт. Al Ain Oasis II — три каскадные нити, более полное, акцентное присутствие на сумке. Выбирайте по тому, сколько цвета и движения хотите на любимой сумке.',
    attachQ: 'Как крепить подвеску — и можно ли использовать как брелок?',
    attachA:
      'Каждая подвеска Al Ain Oasis завершена золотистым кольцевым карабином — раскрытие клипа примерно 0,8 мм / 0,03 дюйма — для крепления к бегунку молнии, кольцу ремня, D-кольцу или петле для подвески, чтобы нити свободно двигались. Также может использоваться как брелок; обращайтесь бережно. Натуральные камни хрупки и могут сколоться или разбиться при ударе о твёрдую поверхность.',
    careQ: 'Как ухаживать за подвеской для сумки из натурального камня?',
    careA:
      'Избегайте контакта с водой, духами и агрессивной химией. Натуральные камни могут сколоться или разбиться при падении или ударе. Протирайте мягкой сухой тканью. Не замачивайте камни. Храните в мягком чехле или подарочной коробке Bint Saeed, вдали от солнца, жары и влаги.',
  },
  zh: {
    naturalQ: '宝石是天然的吗？',
    naturalA:
      '是的。每件 Bint Saeed 天然石手袋挂饰均以真正的天然宝石手工组装。颜色、纹理与内含物的差异是每颗石头的独特特征。紫红玉珠为天然玉，其明亮色彩经传统上色工艺精心加强——这是精细石材首饰中的既定做法，能加深宝石存在感，同时保留其天然特质。',
    rosetteQ: '什么是 Al Ain 玫瑰花饰？',
    differenceQ: 'Al Ain Oasis I 与 Al Ain Oasis II 有何区别？',
    differenceA:
      '两款 Al Ain Oasis 手袋挂饰均在阿布扎比手工组装，使用紫红玉珠、手工雕刻红玉髓 Al Ain 玫瑰花饰与镀金切面赤铁矿。Oasis I 为两股垂坠链——更轻盈细腻。Oasis II 为三股垂坠链——在手袋上更饱满、更有存在感。请按您希望在爱包上呈现的色彩与动态程度选择。',
    attachQ: '如何佩戴挂饰——能否当作钥匙扣？',
    attachA:
      '每件 Al Ain Oasis 挂饰配金色环形扣夹——夹口约 0.8 毫米 / 0.03 英寸——可固定于拉链头、肩带环、D 环或挂饰环，使垂坠链自由摆动。亦可作钥匙扣使用；请小心拿放。天然石材脆弱，撞击硬面或受力可能崩裂。',
    careQ: '如何护理天然石手袋挂饰？',
    careA:
      '避免接触水、香水和刺激性化学品。天然宝石若跌落硬面或受撞击可能崩裂。需要时用柔软干布轻拭。勿浸泡宝石。不用时置于柔软袋或 Bint Saeed 礼盒中，远离阳光、过热与潮湿。',
  },
  de: {
    naturalQ: 'Sind die Edelsteine natürlich?',
    naturalA:
      'Ja. Jeder Bint-Saeed-Naturstein-Taschenanhänger wird von Hand aus echten natürlichen Edelsteinen montiert. Variationen in Farbe, Muster und Einschlüssen sind einzigartige Merkmale jedes Steins. Die Fuchsia-Jade-Perlen sind natürliche Jade, deren leuchtende Farbe durch traditionelle Farbbehandlung sorgfältig verstärkt wurde — eine etablierte Praxis in der Feinschmuckstein-Arbeit, die die Präsenz des Steins vertieft und seinen natürlichen Charakter bewahrt.',
    rosetteQ: 'Was ist die Al-Ain-Rosette?',
    differenceQ: 'Was ist der Unterschied zwischen Al Ain Oasis I und Al Ain Oasis II?',
    differenceA:
      'Beide Al-Ain-Oasis-Taschenanhänger werden in Abu Dhabi von Hand aus Fuchsia-Jade-Perlen, handgeschnitzten Karneol-Al-Ain-Rosetten und vergoldetem facettiertem Hämatit montiert. Oasis I hat zwei Kaskadenstränge — eine leichtere, zartere Silhouette. Oasis II hat drei — eine vollere, statement-starke Präsenz an der Tasche. Wählen Sie nach dem gewünschten Maß an Farbe und Bewegung an Ihrer Lieblingstasche.',
    attachQ: 'Wie befestige ich den Anhänger — und kann ich ihn als Schlüsselanhänger nutzen?',
    attachA:
      'Jeder Al-Ain-Oasis-Taschenanhänger ist mit einem goldfarbenen Ringverschluss versehen — Clip-Öffnung ca. 0,8 mm / 0,03 in — zum Befestigen an Reißverschlusszipper, Tragering, D-Ring oder Charm-Schlaufe, damit die Stränge frei schwingen. Er kann auch als Schlüsselanhänger genutzt werden; bitte vorsichtig handhaben. Natursteine sind empfindlich und können bei Aufprall auf harte Oberflächen oder Stoß absplittern oder brechen.',
    careQ: 'Wie pflege ich meinen Naturstein-Taschenanhänger?',
    careA:
      'Vermeiden Sie Kontakt mit Wasser, Parfum und aggressiven Chemikalien. Natursteine können bei Sturz oder Stoß absplittern oder brechen. Bei Bedarf sanft mit einem weichen, trockenen Tuch abwischen. Steine nicht einweichen. In einem weichen Beutel oder Bint-Saeed-Geschenketui aufbewahren, fern von Sonne, Hitze und Feuchtigkeit.',
  },
  nl: {
    naturalQ: 'Zijn de edelstenen natuurlijk?',
    naturalA:
      'Ja. Elke Bint Saeed natuursteen-tashanger wordt met de hand gemonteerd uit echte natuurlijke edelstenen. Variaties in kleur, patroon en insluitsels zijn unieke kenmerken van elke steen. De fuchsia-jadekralen zijn natuurlijke jade waarvan de lichtende kleur zorgvuldig is verdiept door traditionele kleurbehandeling — een gevestigde praktijk in fijne steensieraden die de aanwezigheid van de steen versterkt en zijn natuurlijke karakter bewaart.',
    rosetteQ: 'Wat is de Al Ain Rosette?',
    differenceQ: 'Wat is het verschil tussen Al Ain Oasis I en Al Ain Oasis II?',
    differenceA:
      'Beide Al Ain Oasis tashangers worden met de hand gemonteerd in Abu Dhabi uit fuchsia-jadekralen, handgesneden Al Ain Rosettes van carneool en verguld gefacetteerd hematiet. Oasis I heeft twee cascade-strengen — een lichtere, delicate silhouet. Oasis II heeft er drie — een vollere, statement-achtige aanwezigheid op de tas. Kies naar hoeveel kleur en beweging u op uw favoriete tas wilt.',
    attachQ: 'Hoe bevestig ik de tashanger — en kan ik hem als sleutelhanger gebruiken?',
    attachA:
      'Elke Al Ain Oasis tashanger is afgewerkt met een goudkleurige ringsluiting — clipopening ongeveer 0,8 mm / 0,03 in — om te bevestigen aan een ritslipje, riemring, D-ring of charm-lus zodat de strengen vrij kunnen bewegen. Hij kan ook als sleutelhanger worden gebruikt; behandel hem voorzichtig. Natuursteen is kwetsbaar en kan splinteren of breken bij stoot tegen harde oppervlakken of impact.',
    careQ: 'Hoe verzorg ik mijn natuursteen-tashanger?',
    careA:
      'Vermijd contact met water, parfum en agressieve chemicaliën. Natuurlijke edelstenen kunnen splinteren of breken bij val of stoot. Veeg indien nodig zachtjes af met een zachte, droge doek. Week de stenen niet. Bewaar in een zacht zakje of Bint Saeed cadeaudoosje, uit de buurt van zon, hitte en vocht.',
  },
  pt: {
    naturalQ: 'As gemas são naturais?',
    naturalA:
      'Sim. Cada pingente para mala de pedra natural Bint Saeed é montado à mão com gemas naturais genuínas. Variações de cor, padrão e inclusões são características únicas de cada pedra. As contas de jade fúcsia são jade natural cuja cor luminosa foi cuidadosamente intensificada por tratamento cromático tradicional — prática consolidada em joalharia de pedras finas que aprofunda a presença da pedra preservando o seu carácter natural.',
    rosetteQ: 'O que é a Roseta de Al Ain?',
    differenceQ: 'Qual é a diferença entre Al Ain Oasis I e Al Ain Oasis II?',
    differenceA:
      'Ambos os pingentes para mala Al Ain Oasis são montados à mão em Abu Dhabi com contas de jade fúcsia, Rosetas de Al Ain em cornalina esculpidas e hematite facetada banho de ouro. Oasis I tem duas correntes em cascata — silhueta mais leve e delicada. Oasis II tem três — presença mais plena e statement na mala. Escolha conforme a quantidade de cor e movimento que deseja na mala favorita.',
    attachQ: 'Como prendo o pingente — e posso usá-lo como porta-chaves?',
    attachA:
      'Cada pingente Al Ain Oasis termina com um fecho de anel tom ouro — abertura do clip aproximadamente 0,8 mm / 0,03 in — pensado para fixar a um cursor, anel de alça, anel em D ou asa de pingente para que as correntes se movam livremente. Também pode ser usado como porta-chaves; manuseie com cuidado. Pedras naturais são frágeis e podem lascar ou partir se baterem em superfícies duras ou sofrerem impacto.',
    careQ: 'Como cuido do meu pingente para mala de pedra natural?',
    careA:
      'Evite contacto com água, perfume e químicos agressivos. Gemas naturais podem lascar ou partir se cair ou sofrer impacto. Limpe suavemente com pano macio e seco. Não mergulhe as pedras. Guarde em bolsa macia ou caixa de presente Bint Saeed, longe do sol, calor excessivo e humidade.',
  },
  id: {
    naturalQ: 'Apakah batu permata alami?',
    naturalA:
      'Ya. Setiap liontin tas batu alam Bint Saeed dirakit tangan menggunakan batu permata alami asli. Variasi warna, pola, dan inklusi adalah ciri unik setiap batu. Manik jade fuchsia adalah jade alami yang warnanya yang bercahaya telah diperkuat secara hati-hati melalui perlakuan warna tradisional — praktik mapan dalam perhiasan batu halus yang memperdalam kehadiran batu sambil menjaga karakter alaminya.',
    rosetteQ: 'Apa itu Rosette Al Ain?',
    differenceQ: 'Apa perbedaan Al Ain Oasis I dan Al Ain Oasis II?',
    differenceA:
      'Kedua liontin tas Al Ain Oasis dirakit tangan di Abu Dhabi dari manik jade fuchsia, Rosette Al Ain karnelian ukiran tangan, dan hematit berfaset berlapis emas. Oasis I memiliki dua untaian menjuntai — siluet lebih ringan dan halus. Oasis II memiliki tiga — kehadiran lebih penuh dan statement pada tas. Pilih sesuai seberapa banyak warna dan gerakan yang Anda inginkan pada tas favorit.',
    attachQ: 'Bagaimana memasang liontin — dan bisakah dipakai sebagai gantungan kunci?',
    attachA:
      'Setiap liontin Al Ain Oasis diselesaikan dengan kait cincin warna emas — bukaan klip sekitar 0,8 mm / 0,03 in — untuk dipasang pada tarikan ritsleting, cincin tali, cincin D, atau loop liontin agar untaian bergerak bebas. Juga dapat digunakan sebagai gantungan kunci; tangani dengan hati-hati. Batu alam rapuh dan dapat retak atau patah jika terbentur permukaan keras atau terkena benturan.',
    careQ: 'Bagaimana merawat liontin tas batu alam saya?',
    careA:
      'Hindari kontak dengan air, parfum, dan bahan kimia keras. Batu alam dapat retak atau patah jika jatuh atau terkena benturan. Lap lembut dengan kain lembut kering bila perlu. Jangan rendam batu. Simpan dalam kantong lembut atau kotak hadiah Bint Saeed, jauh dari sinar matahari, panas berlebih, dan kelembapan.',
  },
  ms: {
    naturalQ: 'Adakah batu permata semula jadi?',
    naturalA:
      'Ya. Setiap liontin beg batu semula jadi Bint Saeed dipasang tangan menggunakan batu permata semula jadi tulen. Variasi warna, corak dan inklusi ialah ciri unik setiap batu. Manik jed fuchsia ialah jed semula jadi yang warnanya bercahaya telah diperkuat dengan teliti melalui rawatan warna tradisional — amalan mantap dalam barang kemas batu halus yang memperdalam kehadiran batu sambil mengekalkan watak semula jadinya.',
    rosetteQ: 'Apakah Rosette Al Ain?',
    differenceQ: 'Apakah perbezaan Al Ain Oasis I dan Al Ain Oasis II?',
    differenceA:
      'Kedua-dua liontin beg Al Ain Oasis dipasang tangan di Abu Dhabi daripada manik jed fuchsia, Rosette Al Ain karnelian ukiran tangan dan hematit berfaset bersalut emas. Oasis I mempunyai dua untai menjuntai — siluet lebih ringan dan halus. Oasis II mempunyai tiga — kehadiran lebih penuh dan statement pada beg. Pilih mengikut berapa banyak warna dan gerakan yang anda mahu pada beg kegemaran.',
    attachQ: 'Bagaimana memasang liontin — dan bolehkah digunakan sebagai gantungan kunci?',
    attachA:
      'Setiap liontin Al Ain Oasis diselesaikan dengan kait cincin nada emas — bukaan klip lebih kurang 0.8 mm / 0.03 in — untuk dipasang pada penarik zip, gelang tali, gelang D atau gelung liontin supaya untai bergerak bebas. Boleh juga digunakan sebagai gantungan kunci; kendalikan dengan berhati-hati. Batu semula jadi rapuh dan boleh retak atau pecah jika terlanggar permukaan keras atau terkena hentaman.',
    careQ: 'Bagaimana saya menjaga liontin beg batu semula jadi?',
    careA:
      'Elakkan sentuhan dengan air, minyak wangi dan bahan kimia keras. Batu semula jadi boleh retak atau pecah jika jatuh atau terkena hentaman. Lap lembut dengan kain lembut kering bila perlu. Jangan rendam batu. Simpan dalam pouch lembut atau kotak hadiah Bint Saeed, jauh dari matahari, haba berlebihan dan kelembapan.',
  },
}

export function getBagCharmFaqItems(
  id: AlAinOasisBagCharmId,
  locale: AppLocale = 'en',
): BagCharmFaqItem[] {
  void id
  const pack = FAQ_BY_LOCALE[locale] ?? FAQ_BY_LOCALE.en
  return [
    { question: pack.naturalQ, answer: pack.naturalA },
    { question: pack.rosetteQ, answer: getAlAinRosetteFaqAnswer(locale) },
    { question: pack.differenceQ, answer: pack.differenceA },
    { question: pack.attachQ, answer: pack.attachA },
    { question: pack.careQ, answer: pack.careA },
  ]
}
