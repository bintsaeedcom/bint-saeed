import type { Accessory } from '@/data/accessories'
import type { AppLocale } from '@/lib/i18n/routing'

function kw(
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
): Record<AppLocale, string> {
  return { en, ar, fr, it, es, ru, zh, de, nl, pt, id: en, ms: en }
}

type KwRow = [string, string, string, string, string, string, string, string, string, string]

/** Worldwide discovery for natural stone jewellery, necklaces, earrings, and abaya accessories. */
const JEWELLERY_GLOBAL_ROWS: KwRow[] = [
  ['Bint Saeed jewellery', 'مجوهرات Bint Saeed', 'bijoux Bint Saeed', 'gioielli Bint Saeed', 'joyería Bint Saeed', 'украшения Bint Saeed', 'Bint Saeed珠宝', 'Bint Saeed Schmuck', 'Bint Saeed sieraden', 'joias Bint Saeed'],
  ['natural stone bead jewellery', 'مجوهرات خرز أحجار طبيعية', 'bijoux perles pierres naturelles', 'gioielli perle pietre naturali', 'joyería cuentas piedra natural', 'украшения из натуральных камней', '天然石珠首饰', 'Natursteinperlen-Schmuck', 'natuursteen kralen sieraden', 'joias contas pedra natural'],
  ['hand-strung gemstone jewellery', 'مجوهرات أحجار كريمة مطرّزة يدوياً', 'bijoux pierres précieuses enfilés à la main', 'gioielli pietre preziose infilati a mano', 'joyería gemas ensartada a mano', 'украшения из натуральных камней ручной работы', '手工串珠宝石首饰', 'handgefädelter Edelsteinschmuck', 'handgeregen edelsteen sieraden', 'joias gemas enfiadas à mão'],
  ['luxury necklace UAE', 'قلادة فاخرة الإمارات', 'collier de luxe EAU', 'collana di lusso EAU', 'collar de lujo EAU', 'роскошное ожерелье ОАЭ', '阿联酋奢华项链', 'Luxuskette VAE', 'luxe ketting VAE', 'colar de luxo EAU'],
  ['designer earrings UAE', 'أقراط مصمّم الإمارات', 'boucles designer EAU', 'orecchini designer EAU', 'pendientes diseñador EAU', 'дизайнерские серьги ОАЭ', '阿联酋设计师耳环', 'Designer-Ohrringe VAE', 'designer oorbellen VAE', 'brincos designer EAU'],
  ['Abu Dhabi handcrafted jewellery', 'مجوهرات مصنوعة يدوياً أبوظبي', 'bijoux artisanaux Abou Dabi', 'gioielli artigianali Abu Dhabi', 'joyería artesanal Abu Dabi', 'украшения ручной работы Абу-Даби', '阿布扎比手工珠宝', 'handgefertigter Schmuck Abu Dhabi', 'handgemaakt sieraden Abu Dhabi', 'joias artesanais Abu Dhabi'],
  ['Al Ain jewellery line', 'مجموعة القوع للمجوهرات', 'ligne bijoux Al Ain', 'linea gioielli Al Ain', 'línea joyería Al Ain', 'коллекция украшений Al Ain', 'Al Ain珠宝系列', 'Al Ain Schmucklinie', 'Al Ain sieradenlijn', 'linha joias Al Ain'],
  ['Emirati designer jewellery', 'مجوهرات مصمّم إماراتية', 'bijoux designer émirati', 'gioielli designer emiratino', 'joyería diseñador emiratí', 'эмиратские дизайнерские украшения', '阿联酋设计师珠宝', 'emiratischer Designer-Schmuck', 'Emiratisch designer sieraden', 'joias designer emirati'],
  ['GCC luxury jewellery', 'مجوهرات فاخرة الخليج', 'bijoux de luxe Golfe', 'gioielli di lusso Golfo', 'joyería de lujo Golfo', 'люксовые украшения GCC', '海湾奢华珠宝', 'GCC Luxusschmuck', 'GCC luxe sieraden', 'joias de luxo Golfo'],
  ['modest fashion jewellery', 'مجوهرات أزياء محتشمة', 'bijoux mode modeste', 'gioielli moda modesta', 'joyería moda modesta', 'украшения скромной моды', '端庄时尚珠宝', 'bescheidener Mode-Schmuck', 'bescheiden mode sieraden', 'joias moda modesta'],
  ['abaya jewellery', 'مجوهرات العباءة', 'bijoux abaya', 'gioielli abaya', 'joyería abaya', 'украшения для абайи', '长袍珠宝', 'Abaya-Schmuck', 'abaya sieraden', 'joias abaya'],
  ['Marylebone Abaya accessories', 'إكسسوارات عباءة ماريلبون', 'accessoires abaya Marylebone', 'accessori abaya Marylebone', 'accesorios abaya Marylebone', 'аксессуары Marylebone Abaya', 'Marylebone长袍配饰', 'Marylebone Abaya Accessoires', 'Marylebone abaya accessoires', 'acessórios abaya Marylebone'],
  ['malachite necklace', 'قلادة ملاكيت', 'collier malachite', 'collana malachite', 'collar malaquita', 'ожерелье малахит', '孔雀石项链', 'Malachit-Halskette', 'malachiet ketting', 'colar malaquita'],
  ['onyx bead necklace', 'قلادة خرز أونكس', 'collier perles onyx', 'collana perle onice', 'collar cuentas ónix', 'ожерелье из бусин оникса', '玛瑙珠项链', 'Onyxperlen-Halskette', 'onyx kralen ketting', 'colar contas ônix'],
  ['rose quartz necklace', 'قلادة كوارتز وردي', 'collier quartz rose', 'collana quarzo rosa', 'collar cuarzo rosa', 'ожерелье розового кварца', '玫瑰石英项链', 'Rosenquarz-Halskette', 'roze kwarts ketting', 'colar quartzo rosa'],
  ['tiger eye necklace', 'قلادة عين النمر', 'collier œil de tigre', 'collana occhio di tigre', 'collar ojo de tigre', 'ожерелье тигровый глаз', '虎眼石项链', 'Tigerauge-Halskette', 'tijgeroog ketting', 'colar olho de tigre'],
  ['natural stone earrings', 'أقراط أحجار طبيعية', 'boucles pierres naturelles', 'orecchini pietre naturali', 'pendientes piedra natural', 'серьги из натуральных камней', '天然石耳环', 'Naturstein-Ohrringe', 'natuursteen oorbellen', 'brincos pedra natural'],
  ['pearl drop earrings', 'أقراط لؤلؤ متدلية', 'boucles perles tombantes', 'orecchini perle a goccia', 'pendientes perla colgante', 'серьги с жемчужными каплями', '珍珠吊坠耳环', 'Perlen-Tropfen-Ohrringe', 'parel druppel oorbellen', 'brincos pérola pendente'],
  ['gold hoop earrings', 'أقراط حلقية ذهبية', 'créoles dorées', 'orecchini a cerchio dorati', 'aros dorados', 'золотые серьги-кольца', '金色圈形耳环', 'goldene Creolen', 'gouden hoepel oorbellen', 'argolas douradas'],
  ['geometric stud earrings', 'أقراط مرصعة هندسية', 'clous géométriques', 'orecchini geometrici', 'pendientes geométricos', 'геометрические серьги-гвоздики', '几何耳钉', 'geometrische Ohrstecker', 'geometrische stud oorbellen', 'brincos geométricos'],
  ['buy luxury jewellery online UAE', 'شراء مجوهرات فاخرة أونلاين الإمارات', 'acheter bijoux luxe en ligne EAU', 'acquista gioielli di lusso online EAU', 'comprar joyería de lujo online EAU', 'купить люксовые украшения онлайн ОАЭ', '阿联酋在线购买奢华珠宝', 'Luxusschmuck online VAE kaufen', 'luxe sieraden online VAE kopen', 'comprar joias de luxo online EAU'],
  ['gift necklace wife UAE', 'هدية قلادة زوجة الإمارات', 'cadeau collier épouse EAU', 'regalo collana moglie EAU', 'regalo collar esposa EAU', 'подарок ожерелье жене ОАЭ', '阿联酋赠妻项链礼', 'Kettengeschenk Ehefrau VAE', 'ketting cadeau echtgenote VAE', 'presente colar esposa EAU'],
  ['Dubai designer jewellery', 'مجوهرات مصمّم دبي', 'bijoux designer Dubaï', 'gioielli designer Dubai', 'joyería diseñador Dubái', 'дизайнерские украшения Дубай', '迪拜设计师珠宝', 'Designer-Schmuck Dubai', 'designer sieraden Dubai', 'joias designer Dubai'],
  ['Saudi Arabia luxury jewellery', 'مجوهرات فاخرة السعودية', 'bijoux de luxe Arabie saoudite', 'gioielli di lusso Arabia Saudita', 'joyería de lujo Arabia Saudí', 'люксовые украшения Саудовская Аравия', '沙特奢华珠宝', 'Luxusschmuck Saudi-Arabien', 'luxe sieraden Saoedi-Arabië', 'joias de luxo Arábia Saudita'],
  ['Qatar designer necklace', 'قلادة مصمّم قطر', 'collier designer Qatar', 'collana designer Qatar', 'collar diseñador Qatar', 'дизайнерское ожерелье Катар', '卡塔尔设计师项链', 'Designer-Halskette Katar', 'designer ketting Qatar', 'colar designer Qatar'],
  ['Kuwait luxury earrings', 'أقراط فاخرة الكويت', 'boucles de luxe Koweït', 'orecchini di lusso Kuwait', 'pendientes de lujo Kuwait', 'люксовые серьги Кувейт', '科威特奢华耳环', 'Luxus-Ohrringe Kuwait', 'luxe oorbellen Koeweit', 'brincos de luxo Kuwait'],
  ['London modest jewellery', 'مجوهرات محتشمة لندن', 'bijoux modestes Londres', 'gioielli modesti Londra', 'joyería modesta Londres', 'скромные украшения Лондон', '伦敦端庄珠宝', 'bescheidener Schmuck London', 'bescheiden sieraden Londen', 'joias modestas Londres'],
  ['international shipping jewellery', 'شحن مجوهرات دولي', 'livraison bijoux internationale', 'spedizione gioielli internazionale', 'envío joyería internacional', 'международная доставка украшений', '国际珠宝配送', 'internationaler Schmuckversand', 'internationale sieradenverzending', 'envio internacional joias'],
  ['18K gold plated jewellery', 'مجوهرات مطلية ذهب 18 قيراط', 'bijoux plaqué or 18 carats', 'gioielli placcati oro 18K', 'joyería baño oro 18K', 'украшения с позолотой 18K', '18K镀金珠宝', '18K vergoldeter Schmuck', '18K verguld sieraden', 'joias banhadas a ouro 18K'],
  ['interchangeable abaya strands', 'سلاسل عباءة قابلة للتبديل', 'fils abaya interchangeables', 'fili abaya intercambiabili', 'hilos abaya intercambiables', 'сменные нити для абайи', '可更换长袍链饰', 'austauschbare Abaya-Stränge', 'verwisselbare abaya strengen', 'fios abaya intercambiáveis'],
  ['natural stone abaya strand', 'سلسلة عباءة أحجار طبيعية', 'fil abaya pierres naturelles', 'filo abaya pietre naturali', 'hilo abaya piedra natural', 'нить для абайи из натуральных камней', '天然石长袍链饰', 'Naturstein-Abaya-Strang', 'natuursteen abaya streng', 'fio abaya pedra natural'],
  ['amethyst heart beads', 'خرز جمشت على شكل قلب', 'perles cœur améthyste', 'perle cuore ametista', 'cuentas corazón amatista', 'бусины-сердца аметиста', '紫水晶心形珠', 'Amethyst-Herzperlen', 'amethist hart kralen', 'contas coração ametista'],
  ['jade heart beads', 'خرز يشم على شكل قلب', 'perles cœur jade', 'perle cuore giada', 'cuentas corazón jade', 'бусины-сердца нефрита', '翡翠心形珠', 'Jade-Herzperlen', 'jade hart kralen', 'contas coração jade'],
  ['lapis lazuli jewellery', 'مجوهرات لازورد', 'bijoux lapis lazuli', 'gioielli lapislazzuli', 'joyería lapislázuli', 'украшения лазурит', '青金石珠宝', 'Lapislazuli-Schmuck', 'lapis lazuli sieraden', 'joias lápis-lazúli'],
  ['best Emirati jewellery brand', 'أفضل علامة مجوهرات إماراتية', 'meilleure marque bijoux émiratie', 'miglior brand gioielli emiratino', 'mejor marca joyería emiratí', 'лучший эмиратский ювелирный бренд', '最佳阿联酋珠宝品牌', 'beste emiratische Schmuckmarke', 'beste Emiratisch sieradenmerk', 'melhor marca joias emirati'],
]

const NECKLACE_CATEGORY_ROWS: KwRow[] = [
  ['luxury bead necklace', 'قلادة خرز فاخرة', 'collier perles de luxe', 'collana perle di lusso', 'collar cuentas de lujo', 'роскошное бусинное ожерелье', '奢华珠链', 'Luxus-Perlenkette', 'luxe kralenketting', 'colar contas de luxo'],
  ['hand-knotted necklace', 'قلادة مربوطة يدوياً', 'collier noué à la main', 'collana annodata a mano', 'collar anudado a mano', 'ожерелье ручной вязки', '手工打结项链', 'handgeknotete Halskette', 'handgeknoopte ketting', 'colar amarrado à mão'],
  ['signature clasp necklace', 'قلادة بإغلاق التوقيع', 'collier fermoir signature', 'collana chiusura signature', 'collar cierre firma', 'ожерелье с фирменной застёжкой', '标志性扣项链', 'Halskette mit Signaturverschluss', 'ketting met signature sluiting', 'colar fecho assinatura'],
  ['extension chain necklace', 'قلادة بسلسلة تمديد', 'collier chaîne rallonge', 'collana catena estensione', 'collar cadena extensión', 'ожерелье с удлинительной цепочкой', '延长链项链', 'Halskette mit Verlängerungskette', 'ketting met verlengketting', 'colar corrente extensão'],
  ['layered gold necklace', 'قلادة ذهبية متعددة الطبقات', 'collier doré superposé', 'collana oro stratificata', 'collar dorado en capas', 'многослойное золотое ожерелье', '叠戴金项链', 'geschichtete Goldkette', 'gelaagde gouden ketting', 'colar dourado em camadas'],
  ['heritage pendant necklace', 'قلادة تعليقة تراثية', 'collier pendentif patrimoine', 'collana pendente heritage', 'collar colgante patrimonio', 'ожерелье с наследственным кулоном', '传承吊坠项链', 'Heritage-Anhänger-Halskette', 'erfgoed hanger ketting', 'colar pingente património'],
]

const EARRING_CATEGORY_ROWS: KwRow[] = [
  ['designer stud earrings', 'أقراط مرصعة مصمّم', 'clous designer', 'orecchini designer', 'pendientes diseñador', 'дизайнерские серьги-гвоздики', '设计师耳钉', 'Designer-Ohrstecker', 'designer stud oorbellen', 'brincos designer'],
  ['Islamic art earrings', 'أقراط فن إسلامي', 'boucles art islamique', 'orecchini arte islamica', 'pendientes arte islámico', 'серьги исламского искусства', '伊斯兰艺术耳环', 'Ohrringe islamische Kunst', 'Islamitische kunst oorbellen', 'brincos arte islâmica'],
  ['freshwater pearl earrings', 'أقراط لؤلؤ المياه العذبة', 'boucles perles eau douce', 'orecchini perle acqua dolce', 'pendientes perlas agua dulce', 'серьги из пресноводного жемчуга', '淡水珍珠耳环', 'Süßwasserperlen-Ohrringe', 'zoetwaterparel oorbellen', 'brincos pérolas água doce'],
  ['hammered gold hoops', 'أقراط حلقية ذهبية محكمة', 'créoles dorées martelées', 'cerchi dorati martellati', 'aros dorados martillados', 'золотые серьги с чеканкой', '锤纹金圈耳环', 'hammergeprägte Goldcreolen', 'gehamerde gouden hoepels', 'argolas douradas marteladas'],
  ['evening earrings UAE', 'أقراط مسائية الإمارات', 'boucles soirée EAU', 'orecchini sera EAU', 'pendientes noche EAU', 'вечерние серьги ОАЭ', '阿联酋晚宴耳环', 'Abend-Ohrringe VAE', 'avond oorbellen VAE', 'brincos noite EAU'],
]

const STRAND_CATEGORY_ROWS: KwRow[] = [
  ['Signature Strands', 'ستراندات التوقيع', 'Signature Strands', 'Signature Strands', 'Signature Strands', 'Signature Strands', 'Signature Strands', 'Signature Strands', 'Signature Strands', 'Signature Strands'],
  ['garment jewellery', 'مجوهرات الملابس', 'bijoux pour vêtements', 'gioielli per capi', 'joyería para prendas', 'украшения для одежды', '服装珠宝', 'Kleidungsschmuck', 'kleding sieraden', 'joias para vestuário'],
  ['garment adornment', 'زينة الملابس', 'ornement de vêtement', 'ornamento per capo', 'adorno de prenda', 'украшение для одежды', '服装装饰', 'Kleidungsverzierung', 'kledingversiering', 'adorno de vestuário'],
  ['detachable garment jewellery', 'مجوهرات ملابس قابلة للفصل', 'bijoux vêtement amovible', 'gioielli capo staccabili', 'joyería prenda desmontable', 'съёмные украшения для одежды', '可拆卸服装珠宝', 'abnehmbarer Kleidungsschmuck', 'afneembare kleding sieraden', 'joias vestuário destacável'],
  ['interchangeable abaya jewellery', 'مجوهرات عباءة قابلة للتبديل', 'bijoux abaya interchangeables', 'gioielli abaya intercambiabili', 'joyería abaya intercambiable', 'сменные украшения для абайи', '可更换长袍珠宝', 'austauschbarer Abaya-Schmuck', 'verwisselbare abaya sieraden', 'joias abaya intercambiáveis'],
  ['natural stone garment jewellery', 'مجوهرات ملابس أحجار طبيعية', 'bijoux vêtement pierres naturelles', 'gioielli capo pietre naturali', 'joyería prenda piedra natural', 'украшения для одежды из натуральных камней', '天然石服装珠宝', 'Naturstein-Kleidungsschmuck', 'natuursteen kleding sieraden', 'joias vestuário pedra natural'],
  ['clip-on abaya strand', 'سلسلة عباءة بحلقة تعليق', 'fil abaya à clip', 'filo abaya con clip', 'hilo abaya con clip', 'нить для абайи на зажиме', '夹扣长袍链饰', 'Abaya-Strang mit Clip', 'abaya streng met clip', 'fio abaya com clip'],
  ['cuff strand abaya', 'سلسلة كُم العباءة', 'fil de manchette abaya', 'filo polsino abaya', 'hilo puño abaya', 'нить на манжете абайи', '长袍袖口链饰', 'Abaya-Manschetten-Strang', 'manchet abaya streng', 'fio punho abaya'],
  ['Al Ain rosette strand', 'سلسلة وردة القوع', 'fil rosette Al Ain', 'filo rosetta Al Ain', 'hilo rosetón Al Ain', 'нить Al Ain rosette', 'Al Ain玫瑰花链饰', 'Al Ain Rosetten-Strang', 'Al Ain rozet streng', 'fio roseta Al Ain'],
  ['buy abaya jewellery online', 'شراء مجوهرات عباءة أونلاين', 'acheter bijoux abaya en ligne', 'acquista gioielli abaya online', 'comprar joyería abaya online', 'купить украшения для абайи онлайн', '在线购买长袍珠宝', 'Abaya-Schmuck online kaufen', 'abaya sieraden online kopen', 'comprar joias abaya online'],
  ['worldwide shipping abaya jewellery', 'شحن مجوهرات عباءة عالمي', 'livraison bijoux abaya mondiale', 'spedizione gioielli abaya mondiale', 'envío joyería abaya mundial', 'доставка украшений для абайи по всему миру', '全球长袍珠宝配送', 'weltweiter Versand Abaya-Schmuck', 'wereldwijde verzending abaya sieraden', 'envio mundial joias abaya'],
]

const PHONE_CHARM_CATEGORY_ROWS: KwRow[] = [
  ['natural stone phone charm', 'تعليقة هاتف أحجار طبيعية', 'breloque téléphone pierres naturelles', 'ciondolo telefono pietre naturali', 'colgante móvil piedra natural', 'подвеска для телефона из натурального камня', '天然石手机挂饰', 'Naturstein-Telefonanhänger', 'natuursteen telefoonhanger', 'pingente telemóvel pedra natural'],
  ['luxury phone charm', 'تعليقة هاتف فاخرة', 'breloque téléphone luxe', 'ciondolo telefono di lusso', 'colgante móvil de lujo', 'роскошная подвеска для телефона', '奢华手机挂饰', 'Luxus-Telefonanhänger', 'luxe telefoonhanger', 'pingente telemóvel de luxo'],
  ['gemstone phone accessory', 'إكسسوار هاتف أحجار كريمة', 'accessoire téléphone gemmes', 'accessorio telefono gemme', 'accesorio móvil gemas', 'аксессуар для телефона из самоцветов', '宝石手机配饰', 'Edelstein-Telefonaccessoire', 'edelsteen telefoonaccessoire', 'acessório telemóvel gemas'],
  ['Al Quaa phone charm', 'تعليقة هاتف القوع', 'breloque Al Quaa', 'ciondolo Al Quaa', 'colgante Al Quaa', 'подвеска Al Quaa', 'Al Quaa手机挂饰', 'Al-Quaa-Telefonanhänger', 'Al Quaa telefoonhanger', 'pingente Al Quaa'],
  ['Al Ain Rosette phone charm', 'تعليقة هاتف روزيت العين', 'breloque Rosette d’Al Ain', 'ciondolo Rosetta di Al Ain', 'colgante Roseta de Al Ain', 'подвеска розетка Al Ain', 'Al Ain玫瑰花饰手机挂饰', 'Al-Ain-Rosetten-Telefonanhänger', 'Al Ain Rosette telefoonhanger', 'pingente Roseta de Al Ain'],
]

const BAG_CHARM_CATEGORY_ROWS: KwRow[] = [
  ['natural stone bag charm', 'تعليقة حقيبة أحجار طبيعية', 'breloque sac pierres naturelles', 'ciondolo borsa pietre naturali', 'colgante bolso piedra natural', 'подвеска для сумки из натурального камня', '天然石手袋挂饰', 'Naturstein-Taschenanhänger', 'natuursteen tashanger', 'pingente mala pedra natural'],
  ['luxury bag charm', 'تعليقة حقيبة فاخرة', 'breloque sac luxe', 'ciondolo borsa di lusso', 'colgante bolso de lujo', 'роскошная подвеска для сумки', '奢华手袋挂饰', 'Luxus-Taschenanhänger', 'luxe tashanger', 'pingente mala de luxo'],
  ['Al Ain Oasis bag charm', 'تعليقة حقيبة واحة العين', 'breloque Al Ain Oasis', 'ciondolo Al Ain Oasis', 'colgante Al Ain Oasis', 'подвеска Al Ain Oasis', 'Al Ain Oasis手袋挂饰', 'Al-Ain-Oasis-Taschenanhänger', 'Al Ain Oasis tashanger', 'pingente Al Ain Oasis'],
  ['Fuchsia Jade bag charm', 'تعليقة حقيبة يشم فوشي', 'breloque jade fuchsia', 'ciondolo giada fucsia', 'colgante jade fucsia', 'подвеска фуксиевый нефрит', '紫红玉手袋挂饰', 'Fuchsia-Jade-Taschenanhänger', 'fuchsia-jade tashanger', 'pingente jade fúcsia'],
  ['handbag charm UAE', 'تعليقة حقيبة الإمارات', 'breloque sac EAU', 'ciondolo borsa EAU', 'colgante bolso EAU', 'подвеска для сумки ОАЭ', '阿联酋手袋挂饰', 'Taschenanhänger VAE', 'tashanger VAE', 'pingente mala EAU'],
]

const JEWELLERY_GLOBAL_I18N = JEWELLERY_GLOBAL_ROWS.map(([en, ar, fr, it, es, ru, zh, de, nl, pt]) =>
  kw(en, ar, fr, it, es, ru, zh, de, nl, pt),
)
const NECKLACE_CATEGORY_I18N = NECKLACE_CATEGORY_ROWS.map(([en, ar, fr, it, es, ru, zh, de, nl, pt]) =>
  kw(en, ar, fr, it, es, ru, zh, de, nl, pt),
)
const EARRING_CATEGORY_I18N = EARRING_CATEGORY_ROWS.map(([en, ar, fr, it, es, ru, zh, de, nl, pt]) =>
  kw(en, ar, fr, it, es, ru, zh, de, nl, pt),
)
const STRAND_CATEGORY_I18N = STRAND_CATEGORY_ROWS.map(([en, ar, fr, it, es, ru, zh, de, nl, pt]) =>
  kw(en, ar, fr, it, es, ru, zh, de, nl, pt),
)

function rowsForLocale(rows: KwRow[], locale: AppLocale): string[] {
  if (locale === 'en') return rows.map((row) => row[0])
  const i18n = rows.map(([en, ar, fr, it, es, ru, zh, de, nl, pt]) =>
    kw(en, ar, fr, it, es, ru, zh, de, nl, pt),
  )
  return i18n.map((row) => row[locale])
}

/** Universal jewellery discovery keywords — necklaces, earrings, stone beads, GCC luxury. */
export function getGlobalJewelleryDiscoveryKeywords(locale: AppLocale = 'en'): string[] {
  return rowsForLocale(JEWELLERY_GLOBAL_ROWS, locale)
}

export function getJewelleryCategoryDiscoveryKeywords(
  category: Accessory['category'],
  locale: AppLocale = 'en',
): string[] {
  const global = getGlobalJewelleryDiscoveryKeywords(locale)
  if (category === 'necklaces') {
    return [...global, ...rowsForLocale(NECKLACE_CATEGORY_ROWS, locale)]
  }
  if (category === 'earrings') {
    return [...global, ...rowsForLocale(EARRING_CATEGORY_ROWS, locale)]
  }
  if (category === 'signature-strands') {
    return [...global, ...rowsForLocale(STRAND_CATEGORY_ROWS, locale)]
  }
  if (category === 'phone-strands') {
    return [...global, ...rowsForLocale(PHONE_CHARM_CATEGORY_ROWS, locale)]
  }
  if (category === 'bag-strands') {
    return [...global, ...rowsForLocale(BAG_CHARM_CATEGORY_ROWS, locale)]
  }
  return global
}

/** Deduped merged keyword string for schema `keywords` property. */
export function mergeAccessorySchemaKeywords(
  ...lists: (string[] | undefined)[]
): string {
  const seen = new Set<string>()
  const out: string[] = []
  for (const list of lists) {
    if (!list) continue
    for (const term of list) {
      const key = term.trim().toLowerCase()
      if (!key || seen.has(key)) continue
      seen.add(key)
      out.push(term.trim())
    }
  }
  return out.join(', ')
}
