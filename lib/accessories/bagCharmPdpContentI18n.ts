import type { AppLocale } from '@/lib/i18n/routing'
import type { AlAinOasisBagCharmId, BagCharmPdpContentPack } from '@/lib/accessories/bagCharmPdpContent'

const PACKS: Record<AppLocale, Record<AlAinOasisBagCharmId, BagCharmPdpContentPack>> = {
  en: {
    'al-ain-oasis-i-bag-charm-fuchsia-jade': {
      headline: 'Al Ain Oasis I Bag Charm',
      introParagraphs: [
        'A little colour can change the feeling of everything.',
        'The Al Ain Oasis I is a natural stone bag charm designed to bring colour, happiness and a personal touch to the handbags you already love.',
        'Hand-assembled in Abu Dhabi, United Arab Emirates, two cascading strands combine Fuchsia Jade beads with hand-carved natural stone Al Ain Rosettes. A Bint Saeed house motif, the Al Ain Rosette draws from the desert tones and flora found across the UAE landscape.',
        'Between each stone, gold-plated faceted hematite catches and reflects the light as the charm moves, creating small flashes of gold.',
        'Designed to personalise a favourite handbag, the Al Ain Oasis I also makes a thoughtful luxury gift for a daughter, sister, friend or someone you simply want to make smile.',
        'As natural stones vary in colour and markings, every piece is individually unique.',
      ],
    },
    'al-ain-oasis-ii-bag-charm-fuchsia-jade': {
      headline: 'Al Ain Oasis II Bag Charm',
      introParagraphs: [
        'For the bag she loves, and the woman you thought of when you saw it.',
        'The Al Ain Oasis II is a handcrafted natural stone bag charm featuring three cascading strands of Fuchsia Jade beads and hand-carved Al Ain Rosettes.',
        'Inspired by the desert tones and natural flora of the United Arab Emirates, the Al Ain Rosette is one of Bint Saeed’s signature house motifs. Each carved stone brings colour and character to the design, while gold-plated faceted hematite reflects the light between the beads as the strands move.',
        'Hand-assembled in Abu Dhabi, United Arab Emirates, the Al Ain Oasis II transforms a favourite handbag through colour, movement and personal identity.',
        'A thoughtful luxury gift for a daughter, sister, friend or yourself. A little happiness, made to be carried every day.',
        'As natural stones vary in colour and markings, every piece is individually unique.',
      ],
    },
  },
  ar: {
    'al-ain-oasis-i-bag-charm-fuchsia-jade': {
      headline: 'تعليقة حقيبة واحة العين الأولى الفاخرة',
      introParagraphs: [
        'لمسة لون صغيرة قد تغيّر إحساس كل شيء.',
        'واحة العين الأولى تعليقة حقيبة فاخرة من الأحجار الطبيعية، صُممت لتضفي لوناً وبهجة ولمسة شخصية على الحقائب التي تحبينها بالفعل.',
        'تُجمَّع يدوياً في أبوظبي، الإمارات العربية المتحدة، حيث يجمع خيطان متدفقان خرز اليشم الفوشي مع روزيت العين المنحوتة يدوياً من الحجر الطبيعي. وكرمز من رموز منزل Bint Saeed، تستوحي روزيت العين ألوان الصحراء ونباتاتها عبر المشهد الإماراتي.',
        'وبين كل حجر وآخر، يلتقط الهيمايت المطلي بالذهب ذو الوجوه الضوء ويعكسه مع حركة التعليقة، فيخلق ومضات ذهبية صغيرة.',
        'صُممت لتمنح حقيبتك المفضلة طابعاً شخصياً، كما تصلح واحة العين الأولى هدية فاخرة مدروسة لابنة أو أخت أو صديقة، أو لمن تريدين أن تُسعديها.',
        'ولأن الأحجار الطبيعية تتباين في اللون والعلامات، فكل قطعة فريدة بذاتها.',
      ],
    },
    'al-ain-oasis-ii-bag-charm-fuchsia-jade': {
      headline: 'تعليقة حقيبة واحة العين الثانية الفاخرة',
      introParagraphs: [
        'للحقيبة التي تحبها، وللمرأة التي خطرت ببالك حين رأيتها.',
        'واحة العين الثانية تعليقة حقيبة فاخرة مصنوعة يدوياً من الأحجار الطبيعية، بثلاثة خيوط متدفقة من خرز اليشم الفوشي وروزيت العين المنحوتة يدوياً.',
        'مستوحاة من ألوان الصحراء ونباتاتها في الإمارات العربية المتحدة، روزيت العين أحد رموز منزل Bint Saeed التوقيعية. يضفي كل حجر منحوت لوناً وحضوراً على التصميم، بينما يعكس الهيمايت المطلي بالذهب ذو الوجوه الضوء بين الخرز مع حركة الخيوط.',
        'تُجمَّع يدوياً في أبوظبي، الإمارات العربية المتحدة، فتحوّل واحة العين الثانية الحقيبة المفضلة عبر اللون والحركة والهوية الشخصية.',
        'هدية فاخرة مدروسة لابنة أو أخت أو صديقة، أو لنفسك. سعادة صغيرة تُحمل كل يوم.',
        'ولأن الأحجار الطبيعية تتباين في اللون والعلامات، فكل قطعة فريدة بذاتها.',
      ],
    },
  },
  fr: {
    'al-ain-oasis-i-bag-charm-fuchsia-jade': {
      headline: 'Breloque de sac de luxe Al Ain Oasis I',
      introParagraphs: [
        'Un peu de couleur peut tout transformer.',
        'L’Al Ain Oasis I est une breloque de sac de luxe en pierres naturelles, conçue pour apporter couleur, bonheur et une touche personnelle aux sacs que vous aimez déjà.',
        'Assemblée à la main à Abou Dabi, Émirats arabes unis, deux brins en cascade associent des perles de jade fuchsia à des rosettes d’Al Ain en pierre naturelle sculptées à la main. Motif de la Maison Bint Saeed, la rosette d’Al Ain s’inspire des tons désertiques et de la flore du paysage émirati.',
        'Entre chaque pierre, l’hématite facettée plaquée or capte et renvoie la lumière au gré du mouvement, dessinant de petits éclats d’or.',
        'Conçue pour personnaliser un sac préféré, l’Al Ain Oasis I est aussi un cadeau de luxe attentionné pour une fille, une sœur, une amie, ou quelqu’un que l’on souhaite simplement faire sourire.',
        'Comme les pierres naturelles varient en couleur et en marques, chaque pièce est unique.',
      ],
    },
    'al-ain-oasis-ii-bag-charm-fuchsia-jade': {
      headline: 'Breloque de sac de luxe Al Ain Oasis II',
      introParagraphs: [
        'Pour le sac qu’elle aime, et pour la femme à qui vous avez pensé en le voyant.',
        'L’Al Ain Oasis II est une breloque de sac de luxe artisanale en pierres naturelles, composée de trois brins en cascade de perles de jade fuchsia et de rosettes d’Al Ain sculptées à la main.',
        'Inspirée des tons désertiques et de la flore naturelle des Émirats arabes unis, la rosette d’Al Ain est l’un des motifs signature de la Maison Bint Saeed. Chaque pierre sculptée apporte couleur et caractère, tandis que l’hématite facettée plaquée or reflète la lumière entre les perles au mouvement des brins.',
        'Assemblée à la main à Abou Dabi, Émirats arabes unis, l’Al Ain Oasis II transforme un sac préféré par la couleur, le mouvement et l’identité personnelle.',
        'Un cadeau de luxe attentionné pour une fille, une sœur, une amie, ou pour soi-même. Un peu de bonheur à porter chaque jour.',
        'Comme les pierres naturelles varient en couleur et en marques, chaque pièce est unique.',
      ],
    },
  },
  it: {
    'al-ain-oasis-i-bag-charm-fuchsia-jade': {
      headline: 'Ciondolo di lusso per borsa Al Ain Oasis I',
      introParagraphs: [
        'Un poco di colore può cambiare la sensazione di ogni cosa.',
        'L’Al Ain Oasis I è un ciondolo di lusso per borsa in pietra naturale pensato per portare colore, gioia e un tocco personale alle borse che già amate.',
        'Assemblato a mano ad Abu Dhabi, Emirati Arabi Uniti, due fili a cascata uniscono perle di giada fucsia a Rosette di Al Ain in pietra naturale intagliate a mano. Motivo della Maison Bint Saeed, la Rosetta di Al Ain trae ispirazione dai toni del deserto e dalla flora del paesaggio emiratino.',
        'Tra ogni pietra, l’ematite sfaccettata placcata oro cattura e riflette la luce mentre il ciondolo si muove, disegnando piccoli bagliori d’oro.',
        'Pensato per personalizzare una borsa preferita, l’Al Ain Oasis I è anche un regalo di lusso attento per una figlia, una sorella, un’amica, o qualcuno che volete semplicemente far sorridere.',
        'Poiché le pietre naturali variano in colore e segni, ogni pezzo è unico.',
      ],
    },
    'al-ain-oasis-ii-bag-charm-fuchsia-jade': {
      headline: 'Ciondolo di lusso per borsa Al Ain Oasis II',
      introParagraphs: [
        'Per la borsa che ama, e per la donna a cui avete pensato vedendola.',
        'L’Al Ain Oasis II è un ciondolo di lusso per borsa artigianale in pietra naturale, con tre fili a cascata di perle di giada fucsia e Rosette di Al Ain intagliate a mano.',
        'Ispirata ai toni del deserto e alla flora naturale degli Emirati Arabi Uniti, la Rosetta di Al Ain è uno dei motivi signature della Maison Bint Saeed. Ogni pietra intagliata porta colore e carattere, mentre l’ematite sfaccettata placcata oro riflette la luce tra le perle al movimento dei fili.',
        'Assemblato a mano ad Abu Dhabi, Emirati Arabi Uniti, l’Al Ain Oasis II trasforma una borsa preferita attraverso colore, movimento e identità personale.',
        'Un regalo di lusso attento per una figlia, una sorella, un’amica, o per voi stesse. Una piccola felicità da portare ogni giorno.',
        'Poiché le pietre naturali variano in colore e segni, ogni pezzo è unico.',
      ],
    },
  },
  es: {
    'al-ain-oasis-i-bag-charm-fuchsia-jade': {
      headline: 'Colgante de lujo para bolso Al Ain Oasis I',
      introParagraphs: [
        'Un poco de color puede cambiar la sensación de todo.',
        'El Al Ain Oasis I es un colgante de lujo para bolso de piedra natural, diseñado para aportar color, felicidad y un toque personal a los bolsos que ya ama.',
        'Ensamblado a mano en Abu Dhabi, Emiratos Árabes Unidos, dos hebras en cascada combinan cuentas de jade fucsia con Rosetas de Al Ain en piedra natural talladas a mano. Motivo de la Maison Bint Saeed, la Roseta de Al Ain se inspira en los tonos del desierto y la flora del paisaje emiratí.',
        'Entre cada piedra, la hematita facetada bañada en oro capta y refleja la luz al moverse el colgante, creando pequeños destellos de oro.',
        'Diseñado para personalizar un bolso favorito, el Al Ain Oasis I es también un regalo de lujo pensado para una hija, una hermana, una amiga, o alguien a quien simplemente desee hacer sonreír.',
        'Como las piedras naturales varían en color y marcas, cada pieza es única.',
      ],
    },
    'al-ain-oasis-ii-bag-charm-fuchsia-jade': {
      headline: 'Colgante de lujo para bolso Al Ain Oasis II',
      introParagraphs: [
        'Para el bolso que ella ama, y la mujer en quien pensó al verlo.',
        'El Al Ain Oasis II es un colgante de lujo para bolso artesanal de piedra natural, con tres hebras en cascada de cuentas de jade fucsia y Rosetas de Al Ain talladas a mano.',
        'Inspirada en los tonos del desierto y la flora natural de los Emiratos Árabes Unidos, la Roseta de Al Ain es uno de los motivos signature de la Maison Bint Saeed. Cada piedra tallada aporta color y carácter, mientras la hematita facetada bañada en oro refleja la luz entre las cuentas al moverse las hebras.',
        'Ensamblado a mano en Abu Dhabi, Emiratos Árabes Unidos, el Al Ain Oasis II transforma un bolso favorito a través del color, el movimiento y la identidad personal.',
        'Un regalo de lujo pensado para una hija, una hermana, una amiga, o para usted. Una pequeña felicidad para llevar cada día.',
        'Como las piedras naturales varían en color y marcas, cada pieza es única.',
      ],
    },
  },
  ru: {
    'al-ain-oasis-i-bag-charm-fuchsia-jade': {
      headline: 'Роскошная подвеска для сумки Al Ain Oasis I',
      introParagraphs: [
        'Немного цвета может изменить ощущение от всего.',
        'Al Ain Oasis I — роскошная подвеска для сумки из натурального камня, созданная чтобы привнести цвет, радость и личную ноту в сумки, которые вы уже любите.',
        'Собрана вручную в Абу-Даби, Объединённые Арабские Эмираты: две каскадные нити сочетают бусины фуксиевого нефрита с вручную вырезанными розетками Al Ain из натурального камня. Мотив Дома Bint Saeed, розетка Al Ain вдохновлена пустынными оттенками и флорой пейзажа ОАЭ.',
        'Между камнями золочёный гранёный гематит ловит и отражает свет при движении подвески, создавая маленькие золотые вспышки.',
        'Создана чтобы персонализировать любимую сумку, Al Ain Oasis I также станет продуманным роскошным подарком для дочери, сестры, подруги или того, кого вы просто хотите порадовать.',
        'Поскольку натуральные камни различаются по цвету и отметинам, каждое изделие уникально.',
      ],
    },
    'al-ain-oasis-ii-bag-charm-fuchsia-jade': {
      headline: 'Роскошная подвеска для сумки Al Ain Oasis II',
      introParagraphs: [
        'Для сумки, которую она любит, и для женщины, о которой вы подумали, увидев её.',
        'Al Ain Oasis II — роскошная рукотворная подвеска для сумки из натурального камня с тремя каскадными нитями бусин фуксиевого нефрита и вручную вырезанными розетками Al Ain.',
        'Вдохновлённая пустынными тонами и природной флорой Объединённых Арабских Эмиратов, розетка Al Ain — один из фирменных мотивов Дома Bint Saeed. Каждый вырезанный камень приносит цвет и характер, а золочёный гранёный гематит отражает свет между бусинами при движении нитей.',
        'Собрана вручную в Абу-Даби, Объединённые Арабские Эмираты, Al Ain Oasis II преображает любимую сумку через цвет, движение и личную идентичность.',
        'Продуманный роскошный подарок для дочери, сестры, подруги или для себя. Маленькая радость, которую можно носить каждый день.',
        'Поскольку натуральные камни различаются по цвету и отметинам, каждое изделие уникально.',
      ],
    },
  },
  zh: {
    'al-ain-oasis-i-bag-charm-fuchsia-jade': {
      headline: 'Al Ain Oasis I 奢华包挂',
      introParagraphs: [
        '一点点色彩，就能改变一切的感觉。',
        'Al Ain Oasis I 是一款天然石奢华包挂，为你已然心爱的手袋带来色彩、愉悦与个人气息。',
        '于阿拉伯联合酋长国阿布扎比手工组装，两条垂坠串链将紫红玉珠与手工雕刻的天然石 Al Ain 玫瑰花饰结合。作为 Bint Saeed 的家徽纹样，Al Ain 玫瑰花饰汲取阿联酋景观中的沙漠色调与植物意象。',
        '每颗石材之间，镀金切面赤铁矿随包挂晃动捕捉并反射光线，闪出细小的金色光点。',
        '为个性化心爱手袋而设计，Al Ain Oasis I 也是一份体贴的奢华礼物，适合女儿、姐妹、朋友，或任何你想让她展露微笑的人。',
        '天然石各有色彩与纹记差异，每一件都独一无二。',
      ],
    },
    'al-ain-oasis-ii-bag-charm-fuchsia-jade': {
      headline: 'Al Ain Oasis II 奢华包挂',
      introParagraphs: [
        '为她心爱的包，也为你看见它时想到的那个人。',
        'Al Ain Oasis II 是手工制作的天然石奢华包挂，以三条垂坠串链串起紫红玉珠与手工雕刻的 Al Ain 玫瑰花饰。',
        '灵感来自阿联酋的沙漠色调与自然植物，Al Ain 玫瑰花饰是 Bint Saeed 的标志性家徽之一。每颗雕刻石带来色彩与个性，镀金切面赤铁矿则在串链晃动时于珠间反射光线。',
        '于阿布扎比手工组装，Al Ain Oasis II 以色彩、动态与个人身份，改变一只心爱手袋。',
        '一份体贴的奢华礼物，送给女儿、姐妹、朋友，或你自己。一点快乐，适合每日随身。',
        '天然石各有色彩与纹记差异，每一件都独一无二。',
      ],
    },
  },
  de: {
    'al-ain-oasis-i-bag-charm-fuchsia-jade': {
      headline: 'Al Ain Oasis I Luxus-Taschenanhänger',
      introParagraphs: [
        'Ein wenig Farbe kann das Gefühl von allem verändern.',
        'Der Al Ain Oasis I ist ein Luxus-Taschenanhänger aus Naturstein, der Farbe, Freude und eine persönliche Note in die Handtaschen bringt, die Sie bereits lieben.',
        'Handmontiert in Abu Dhabi, Vereinigte Arabische Emirate, verbinden zwei kaskadierende Stränge Fuchsia-Jade-Perlen mit handgeschnitzten Al-Ain-Rosetten aus Naturstein. Als Hausmotiv von Bint Saeed schöpft die Al-Ain-Rosette aus den Wüstenfärbungen und der Flora der emiratischen Landschaft.',
        'Zwischen jedem Stein fängt goldplattierter facettierter Hämatit das Licht ein und wirft es zurück, während der Anhänger sich bewegt — kleine goldene Blitze.',
        'Gedacht, um eine Lieblingshandtasche zu personalisieren, ist der Al Ain Oasis I auch ein durchdachtes Luxusgeschenk für eine Tochter, Schwester, Freundin oder jemanden, den Sie einfach zum Lächeln bringen möchten.',
        'Da Natursteine in Farbe und Zeichnung variieren, ist jedes Stück individuell einzigartig.',
      ],
    },
    'al-ain-oasis-ii-bag-charm-fuchsia-jade': {
      headline: 'Al Ain Oasis II Luxus-Taschenanhänger',
      introParagraphs: [
        'Für die Tasche, die sie liebt, und die Frau, an die Sie dachten, als Sie sie sahen.',
        'Der Al Ain Oasis II ist ein handgefertigter Luxus-Taschenanhänger aus Naturstein mit drei kaskadierenden Strängen aus Fuchsia-Jade-Perlen und handgeschnitzten Al-Ain-Rosetten.',
        'Inspiriert von den Wüstentönen und der natürlichen Flora der Vereinigten Arabischen Emirate ist die Al-Ain-Rosette eines der Signatur-Motive von Bint Saeed. Jeder geschnitzte Stein bringt Farbe und Charakter, während goldplattierter facettierter Hämatit das Licht zwischen den Perlen reflektiert, wenn sich die Stränge bewegen.',
        'Handmontiert in Abu Dhabi, Vereinigte Arabische Emirate, verwandelt der Al Ain Oasis II eine Lieblingshandtasche durch Farbe, Bewegung und persönliche Identität.',
        'Ein durchdachtes Luxusgeschenk für eine Tochter, Schwester, Freundin oder für Sie selbst. Ein wenig Glück für jeden Tag.',
        'Da Natursteine in Farbe und Zeichnung variieren, ist jedes Stück individuell einzigartig.',
      ],
    },
  },
  nl: {
    'al-ain-oasis-i-bag-charm-fuchsia-jade': {
      headline: 'Al Ain Oasis I Luxe Tashanger',
      introParagraphs: [
        'Een beetje kleur kan het gevoel van alles veranderen.',
        'De Al Ain Oasis I is een luxe tashanger van natuursteen, ontworpen om kleur, blijdschap en een persoonlijk accent te brengen aan de tassen die u al liefhebt.',
        'Met de hand gemonteerd in Abu Dhabi, Verenigde Arabische Emiraten, combineren twee cascade-strengen fuchsia-jadekralen met handgesneden Al Ain Rosettes van natuursteen. Als huis-motief van Bint Saeed put de Al Ain Rosette uit de woestijntinten en flora van het Emiratische landschap.',
        'Tussen elke steen vangt goudgeplatte gefacetteerde hematiet het licht en weerkaatst het terwijl de hanger beweegt — kleine gouden flitsen.',
        'Ontworpen om een favoriete handtas te personaliseren, is de Al Ain Oasis I ook een doordacht luxe cadeau voor een dochter, zus, vriendin of iemand die u gewoon wilt laten glimlachen.',
        'Omdat natuurstenen variëren in kleur en tekening, is elk stuk uniek.',
      ],
    },
    'al-ain-oasis-ii-bag-charm-fuchsia-jade': {
      headline: 'Al Ain Oasis II Luxe Tashanger',
      introParagraphs: [
        'Voor de tas die zij liefheeft, en de vrouw aan wie u dacht toen u haar zag.',
        'De Al Ain Oasis II is een handgemaakte luxe tashanger van natuursteen met drie cascade-strengen fuchsia-jadekralen en handgesneden Al Ain Rosettes.',
        'Geïnspireerd door de woestijntinten en natuurlijke flora van de Verenigde Arabische Emiraten is de Al Ain Rosette een van Bint Saeeds signature huis-motieven. Elke gesneden steen brengt kleur en karakter, terwijl goudgeplatte gefacetteerde hematiet het licht tussen de kralen weerkaatst als de strengen bewegen.',
        'Met de hand gemonteerd in Abu Dhabi, Verenigde Arabische Emiraten, transformeert de Al Ain Oasis II een favoriete handtas door kleur, beweging en persoonlijke identiteit.',
        'Een doordacht luxe cadeau voor een dochter, zus, vriendin of uzelf. Een beetje geluk om elke dag te dragen.',
        'Omdat natuurstenen variëren in kleur en tekening, is elk stuk uniek.',
      ],
    },
  },
  pt: {
    'al-ain-oasis-i-bag-charm-fuchsia-jade': {
      headline: 'Pingente de luxo para mala Al Ain Oasis I',
      introParagraphs: [
        'Um pouco de cor pode mudar a sensação de tudo.',
        'O Al Ain Oasis I é um pingente de luxo para mala em pedra natural, pensado para trazer cor, felicidade e um toque pessoal às malas que já ama.',
        'Montado à mão em Abu Dhabi, Emirados Árabes Unidos, dois fios em cascata combinam contas de jade fúcsia com Rosetas de Al Ain em pedra natural esculpidas à mão. Motivo da Maison Bint Saeed, a Roseta de Al Ain inspira-se nos tons do deserto e na flora da paisagem emirati.',
        'Entre cada pedra, a hematita facetada banhada a ouro capta e reflecte a luz enquanto o pingente se move, criando pequenos flashes de ouro.',
        'Concebido para personalizar uma mala favorita, o Al Ain Oasis I é também uma oferta de luxo cuidada para uma filha, irmã, amiga, ou alguém a quem simplesmente queira fazer sorrir.',
        'Como as pedras naturais variam em cor e marcas, cada peça é única.',
      ],
    },
    'al-ain-oasis-ii-bag-charm-fuchsia-jade': {
      headline: 'Pingente de luxo para mala Al Ain Oasis II',
      introParagraphs: [
        'Para a mala que ela ama, e a mulher em quem pensou quando a viu.',
        'O Al Ain Oasis II é um pingente de luxo para mala artesanal em pedra natural, com três fios em cascata de contas de jade fúcsia e Rosetas de Al Ain esculpidas à mão.',
        'Inspirada nos tons do deserto e na flora natural dos Emirados Árabes Unidos, a Roseta de Al Ain é um dos motivos signature da Maison Bint Saeed. Cada pedra esculpida traz cor e carácter, enquanto a hematita facetada banhada a ouro reflecte a luz entre as contas ao movimento dos fios.',
        'Montado à mão em Abu Dhabi, Emirados Árabes Unidos, o Al Ain Oasis II transforma uma mala favorita através da cor, do movimento e da identidade pessoal.',
        'Uma oferta de luxo cuidada para uma filha, irmã, amiga, ou para si. Um pouco de felicidade para levar todos os dias.',
        'Como as pedras naturais variam em cor e marcas, cada peça é única.',
      ],
    },
  },
  id: {
    'al-ain-oasis-i-bag-charm-fuchsia-jade': {
      headline: 'Liontin tas mewah Al Ain Oasis I',
      introParagraphs: [
        'Sedikit warna bisa mengubah perasaan segalanya.',
        'Al Ain Oasis I adalah liontin tas mewah batu alam yang dirancang untuk membawa warna, kebahagiaan, dan sentuhan pribadi ke tas yang sudah Anda cintai.',
        'Dirakit tangan di Abu Dhabi, Uni Emirat Arab, dua untaian menjuntai menggabungkan manik giok fuchsia dengan Rosette Al Ain batu alam yang diukir tangan. Sebagai motif rumah Bint Saeed, Rosette Al Ain mengambil inspirasi dari nada gurun dan flora di lanskap Emirat.',
        'Di antara setiap batu, hematit berfaset berlapis emas menangkap dan memantulkan cahaya saat liontin bergerak, menciptakan kilauan emas kecil.',
        'Dirancang untuk mempersonalisasi tas favorit, Al Ain Oasis I juga menjadi hadiah mewah yang penuh perhatian untuk putri, saudara perempuan, teman, atau seseorang yang ingin Anda buat tersenyum.',
        'Karena batu alam bervariasi dalam warna dan tanda, setiap karya unik.',
      ],
    },
    'al-ain-oasis-ii-bag-charm-fuchsia-jade': {
      headline: 'Liontin tas mewah Al Ain Oasis II',
      introParagraphs: [
        'Untuk tas yang dia cintai, dan wanita yang Anda pikirkan saat melihatnya.',
        'Al Ain Oasis II adalah liontin tas mewah batu alam buatan tangan dengan tiga untaian menjuntai manik giok fuchsia dan Rosette Al Ain yang diukir tangan.',
        'Terinspirasi nada gurun dan flora alami Uni Emirat Arab, Rosette Al Ain adalah salah satu motif signature rumah Bint Saeed. Setiap batu ukir membawa warna dan karakter, sementara hematit berfaset berlapis emas memantulkan cahaya di antara manik saat untaian bergerak.',
        'Dirakit tangan di Abu Dhabi, Uni Emirat Arab, Al Ain Oasis II mengubah tas favorit melalui warna, gerakan, dan identitas pribadi.',
        'Hadiah mewah penuh perhatian untuk putri, saudara perempuan, teman, atau diri sendiri. Sedikit kebahagiaan untuk dibawa setiap hari.',
        'Karena batu alam bervariasi dalam warna dan tanda, setiap karya unik.',
      ],
    },
  },
  ms: {
    'al-ain-oasis-i-bag-charm-fuchsia-jade': {
      headline: 'Liontin beg mewah Al Ain Oasis I',
      introParagraphs: [
        'Sedikit warna boleh mengubah perasaan segala-galanya.',
        'Al Ain Oasis I ialah liontin beg mewah batu semula jadi yang direka untuk membawa warna, kebahagiaan dan sentuhan peribadi kepada beg yang sudah anda sayangi.',
        'Dipasang tangan di Abu Dhabi, Emiriah Arab Bersatu, dua untai menjuntai menggabungkan manik jed fuchsia dengan Rosette Al Ain batu semula jadi yang diukir tangan. Sebagai motif rumah Bint Saeed, Rosette Al Ain mengambil inspirasi daripada nada padang pasir dan flora landskap Emirat.',
        'Antara setiap batu, hematit berfaset bersalut emas menangkap dan memantulkan cahaya apabila liontin bergerak, mencipta kilauan emas kecil.',
        'Direka untuk memperibadikan beg kegemaran, Al Ain Oasis I juga merupakan hadiah mewah yang penuh perhatian untuk anak perempuan, kakak/adik, rakan atau seseorang yang ingin anda buat tersenyum.',
        'Memandangkan batu semula jadi berbeza dari segi warna dan tanda, setiap karya adalah unik.',
      ],
    },
    'al-ain-oasis-ii-bag-charm-fuchsia-jade': {
      headline: 'Liontin beg mewah Al Ain Oasis II',
      introParagraphs: [
        'Untuk beg yang dia sayangi, dan wanita yang anda fikirkan apabila melihatnya.',
        'Al Ain Oasis II ialah liontin beg mewah batu semula jadi buatan tangan dengan tiga untai menjuntai manik jed fuchsia dan Rosette Al Ain yang diukir tangan.',
        'Diilhamkan oleh nada padang pasir dan flora semula jadi Emiriah Arab Bersatu, Rosette Al Ain ialah salah satu motif signature rumah Bint Saeed. Setiap batu ukir membawa warna dan watak, manakala hematit berfaset bersalut emas memantulkan cahaya antara manik apabila untai bergerak.',
        'Dipasang tangan di Abu Dhabi, Emiriah Arab Bersatu, Al Ain Oasis II mengubah beg kegemaran melalui warna, gerakan dan identiti peribadi.',
        'Hadiah mewah penuh perhatian untuk anak perempuan, kakak/adik, rakan atau diri sendiri. Sedikit kebahagiaan untuk dibawa setiap hari.',
        'Memandangkan batu semula jadi berbeza dari segi warna dan tanda, setiap karya adalah unik.',
      ],
    },
  },
}

export function getBagCharmPdpPack(
  id: AlAinOasisBagCharmId,
  locale: AppLocale,
): BagCharmPdpContentPack {
  return PACKS[locale]?.[id] ?? PACKS.en[id]
}
