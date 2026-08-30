import type { AppLocale } from '@/lib/i18n/routing'

type CatalogFields = {
  description: string
  fabric: string
  measurements: string
}

const AR_CATALOG_COPY: Record<string, CatalogFields> = {
  'knightsbridge-abaya-jacket': {
    description: 'للنساء اللواتي يرسمن الخط لا يتبعنه — عباية جاكيت بتفاصيل مستوحاة من الخوص، وأكتاف مهيكلة، وأزرار Knotted Lines of Lineage. تُرتدى كملابس خارجية راقية فوق الفساتين أو وحدها كلباس إماراتي معاصر. صُنعت في أبوظبي؛ شحن عالمي.',
    fabric: 'الخارجي: 60% بوليستر، 40% قطن؛ الفستان الداخلي: 100% بوليستر',
    measurements:
      'طول العارضة: 160 سم / 63 بوصة. العارضة ترتدي مقاس XS. الطول: 143 سم / 56.3 بوصة. تتوفر أطوال مخصصة عند الطلب.',
  },
  'covent-garden-abaya': {
    description: 'عباية الكتان الخفيفة التي تلجئين إليها حين يطلب اليوم سهولة دون أن تفقدي أناقتك — حواف تلي تقليدية، وإغلاق أمامي مخفي نظيف، وتفصيل تراثي إماراتي يُقرأ بهدوء عن قرب. صُنعت في أبوظبي؛ شحن عالمي.',
    fabric: 'مزيج كتان أوروبي، بطانة قطنية',
    measurements: 'الطول: 138 سم (مقاس M). قصة مريحة عبر الجسم.',
  },
  'kensington-abaya': {
    description: 'ثقة مفصّلة في عباية بليزر مهيكلة — أكتاف نظيفة، وضفيرة مستوحاة من الخوص، وبساطة معمارية بالأسود العميق. صُممت للنساء اللواتي يردن حضوراً بلا ضجيج. صُنعت في أبوظبي؛ شحن عالمي.',
    fabric: 'كريب ياباني، خيوط تطريز بدرجة لونية متناسقة',
    measurements: 'الطول: 138 سم (مقاس M).',
  },
  'marylebone-abaya': {
    description: 'عباية بقصة A-line صُممت لتحمل المجوهرات — تفصيل أنيق مع خيوط أونكس قابلة للإزالة وتفاصيل Knotted Line المميزة التي تعيدين تنسيقها عبر الموسم. صُنعت في أبوظبي؛ شحن عالمي.',
    fabric: 'مزيج صوف-حرير، حواف ساتان مطفي',
    measurements: 'الطول: 135 سم (مقاس M).',
  },
  'belgravia-abaya': {
    description: 'عباية مستوحاة من البِشت بحواف منسوجة يدوياً من نسج الخوص — تراث في نسب معاصرة. صُنعت في أبوظبي للنساء اللواتي يلبسن بوضوح وأصالة؛ شحن عالمي.',
    fabric: 'الخارجي: مزيج كريب خفيف (80% بوليستر، 20% فيسكوز)؛ البطانة الداخلية: (70% بوليستر، 30% فيسكوز)',
    measurements: 'الطول: 138 سم (مقاس M). تتوفر أطوال مخصصة عند الطلب.',
  },
  'park-lane-abaya': {
    description: 'العباءة التي تهدّئ المكان قبل أن تتحدثي — قصة A-line أنيقة، ووشاح كتف مدمج، وتفاصيل Knotted Line ذهبية. من دبلوماسية النهار إلى راحة المساء، صُنعت في أبوظبي؛ شحن عالمي.',
    fabric: 'تركيبة القماش — سيتم اعتمادها نهائيًا مع الإنتاج.',
    measurements: 'الطول: 138 سم (مقاس M). تتوفر أطوال مخصصة عند الطلب.',
  },
  'hyde-park-set': {
    description: 'لباس السفر كما ينبغي — قميص كريب فاخر واسع مع بنطلون بالازو بأرجل عريضة وأزرار Knotted Line، بالأسود العميق حصراً. احزمي مرة؛ ارتديه من المغادرة إلى العشاء. شحن عالمي من أبوظبي.',
    fabric: 'تركيبة القماش — سيتم اعتمادها نهائيًا مع الإنتاج.',
    measurements: 'المقاسات — سيتم تأكيدها.',
  },
  'mayfair-kaftan': {
    description: 'كفتان كريب شيفون بياقة V وانسيابية ناعمة، مع فستان داخلي وتفصيل وشاح ودبوس المونوغرام الذهبي — سهولة مناسبة للمناسبات بذوق محسوب. صُنع في أبوظبي؛ شحن عالمي.',
    fabric: 'كريب شيفون (100% بوليستر)، الفستان الداخلي: 100% بوليستر',
    measurements: 'الطول الأقصى للقطعة: 165 سم.',
  },
  'nothing-hill-kaftan': {
    description: 'شيفون خوخي وردي ناعم بياقة bateau راقية وخط متدفق — يُختتم بشعار Bint Saeed الذهبي. الكفتان لأمسيات تطلب خفة. شحن عالمي من أبوظبي.',
    fabric: 'شيفون (100% بوليستر)، الفستان الداخلي: 100% بوليستر',
    measurements: 'الطول الأقصى للقطعة: 165 سم.',
  },
    'knightsbridge-dress': {
    description: 'فستان ماكسي أنثوي من مزيج قطن بتفاصيل halter منسوجة مستوحاة من الخوص — أناقة ترافقك عبر الأسبوع دون أن تطلب منكِ أن تكوني غير نفسك. صُنع في أبوظبي؛ شحن عالمي.',
    fabric: 'الخارجي: 60% قطن، 40% بوليستر',
    measurements: 'Length: 143 cm / 56.3 inches. Model height: 160 cm / 63 inches. Model wears size XS. Available in custom lengths upon request.',
  },
  'covent-garden-long-dress': {
    description: 'فستان تحت العباءة الذي يرافقك من العمل إلى الأمسيات الثقافية — قصة ناعمة، وجيوب جانبية مخفية، وبطانة كريب ناعمة تحافظ على الخط طوال اليوم. صُنع في أبوظبي؛ شحن عالمي.',
    fabric: 'كريب مطاطي، بطانة باور مش',
    measurements: 'طول حتى الأرض 148 سم (مقاس M).',
  },
  'hampstead-dress': {
    description: 'فستان الماكسي من الكريب الفاخر المبطّن بالكامل الذي كنتِ تبحثين عنه — خط عنق متدلٍّ، وانسيابية منحوتة بلطف، وحواف التلي عند الخصر المعترف بها من اليونسكو. ارتديه وحدكِ أو تحت العباءة؛ صُنع في أبوظبي ويُشحن عالمياً.',
    fabric: 'مزيج صوف بكر، بطانة حرير، أزرار أم اللؤلؤ',
    measurements: 'قصة مهيكلة. الطول: 118 سم (مقاس M). عرض الكتف: 42 سم.',
  },
  'covent-garden-signature-set': {
    description: 'ثقة التنسيق الكامل — فستان Covent Garden وجاكيت مفصّل بتفاصيل مستوحاة من الخوص، قُطعا ليكونا معاً أو كلّاً على حدة. صُنعا في أبوظبي؛ شحن عالمي.',
    fabric: 'مزيج قطن عضوي، لمسات كتان، أصباغ طبيعية',
    measurements: 'طول البلوزة: 70 سم، طول التنورة: 95 سم (مقاس M). قصة مريحة.',
  },
  'soho-set': {
    description: 'طقم منسّق من قميص واسع وبنطلون بالازو بأرجل عريضة بحواف التلي التقليدية — من النهار إلى المساء بأناقة تحتفي بالتراث الإماراتي بلا مبالغة. صُنع في أبوظبي؛ شحن عالمي.',
    fabric: 'تركيبة القماش — سيتم اعتمادها نهائيًا مع الإنتاج.',
    measurements: 'قصة متوازنة؛ يتم تأكيد أطوال القميص والبنطلون وفق جدول المقاسات.',
  },
  'grosvenor-set': {
    description:
      'طقم معاصر من قميص وتنورة ساتان بلون Champagne Cream — مع تفصيل التلي التوقيعي حول التنورة، وشريطين توقيعيين من العقيق مرفقين مع الطقم، وأزرار Knotted Line. صُمم في أبوظبي؛ شحن عالمي.',
    fabric: 'تركيبة القماش — سيتم اعتمادها نهائيًا مع الإنتاج.',
    measurements:
      'طول العارضة: 160 سم / 63 بوصة. العارضة ترتدي مقاس XS. تتوفر أطوال مخصصة عند الطلب.',
  },
}

const FR_CATALOG_COPY: Record<string, CatalogFields> = {
  'knightsbridge-abaya-jacket': {
    description: "Pour celles qui tracent la ligne plutôt que de la suivre — une abaya veste aux détails inspirés d’Al Khous, épaules structurées et boutons Knotted Lines of Lineage. À porter en outerwear raffiné sur une robe ou seule, en tenue émiratie contemporaine. Créée à Abou Dabi ; livraison mondiale.",
    fabric: 'Exterieur: 60% polyester, 40% coton; robe interieure: 100% polyester',
    measurements:
      'Taille du mannequin: 160 cm / 63 pouces. Le mannequin porte la taille XS. Longueur: 143 cm / 56.3 pouces. Longueurs sur mesure disponibles sur demande.',
  },
  'covent-garden-abaya': {
    description: 'L’abaya en lin léger que vous choisissez quand la journée demande de la fluidité sans perdre le soin — bordure Al Talli traditionnelle, patte dissimulée et détail patrimonial émirati qui se lit de près. Créée à Abou Dabi ; livraison mondiale.',
    fabric: 'Melange de lin europeen, doublure coton',
    measurements: 'Longueur: 138 cm (taille M). Coupe decontractee sur le corps.',
  },
  'kensington-abaya': {
    description: 'La confiance taillée d’une abaya blazer structurée — épaules nettes, tresse inspirée d’Al Khous et simplicité architecturale en noir profond. Pour celles qui veulent de la présence sans bruit. Créée à Abou Dabi ; livraison mondiale.',
    fabric: 'Crepe japonais, fils de broderie ton sur ton',
    measurements: 'Longueur: 138 cm (taille M).',
  },
  'marylebone-abaya': {
    description: 'Une abaya A-line conçue pour porter la joaillerie — coupe gracieuse, fils Onyx amovibles et détails Knotted Line à recomposer au fil de la saison. Créée à Abou Dabi ; livraison mondiale.',
    fabric: 'Melange laine-soie, bordure satin mat',
    measurements: 'Longueur: 135 cm (taille M).',
  },
  'belgravia-abaya': {
    description: "Une abaya inspirée du bisht, finie d’une bordure tissée à la main issue du tissage Al Khous — le patrimoine dans une proportion contemporaine. Créée à Abou Dabi pour celles qui s’habillent avec lignée et clarté ; livraison mondiale.",
    fabric: 'Exterieur: melange crepe leger (80% polyester, 20% viscose); doublure interieure: (70% polyester, 30% viscose)',
    measurements: 'Longueur: 138 cm (taille M). Longueurs sur mesure disponibles sur demande.',
  },
  'park-lane-abaya': {
    description: 'L’abaya qui pose la pièce avant que vous ne parliez — coupe A-line gracieuse, écharpe d’épaule intégrée et détails Knotted Line dorés. De la journée au soir, créée à Abou Dabi ; livraison mondiale.',
    fabric: 'Composition du tissu - finalisation avec la production.',
    measurements: 'Longueur: 138 cm (taille M). Longueurs sur mesure disponibles sur demande.',
  },
  'hyde-park-set': {
    description: 'Le dressing de voyage comme il faut — chemise oversize en crêpe premium et pantalon palazzo à jambes larges, boutons Knotted Line, exclusivement en Deep Black. Une valise ; du départ au dîner. Livraison mondiale depuis Abou Dabi.',
    fabric: 'Composition du tissu - finalisation avec la production.',
    measurements: 'Mesures - a confirmer.',
  },
  'mayfair-kaftan': {
    description: 'Un caftan fluide en crêpe-chiffon à encolure V, robe intérieure, détail d’écharpe et épingle Monogram dorée — l’aisance d’une occasion encore soignée. Créé à Abou Dabi ; livraison mondiale.',
    fabric: 'Crepe Chiffon (100% polyester), robe interieure: 100% polyester',
    measurements: 'Longueur maximale du vetement: 165 cm.',
  },
  'nothing-hill-kaftan': {
    description: 'Chiffon rose pêche doux, encolure bateau raffinée et ligne fluide — terminé de l’emblème doré Bint Saeed. Le caftan des soirées qui demandent de la légèreté. Livraison mondiale depuis Abou Dabi.',
    fabric: 'Chiffon (100% polyester), robe interieure: 100% polyester',
    measurements: 'Longueur maximale du vetement: 165 cm.',
  },
    'knightsbridge-dress': {
    description: "Une maxi féminine en mélange coton, détail halter tissé inspiré d’Al Khous — une élégance qui traverse la semaine sans vous demander de changer qui vous êtes. Créée à Abou Dabi ; livraison mondiale.",
    fabric: 'Exterieur : 60 % coton, 40 % polyester',
    measurements: 'Longueur : 143 cm / 56,3 pouces. Taille du mannequin : 160 cm / 63 pouces. Le mannequin porte la taille XS. Longueurs sur mesure disponibles sur demande.',
  },
  'covent-garden-long-dress': {
    description: 'La robe sous-abaya qui vous accompagne du travail aux soirées culturelles — silhouette doucement ajustée, poches latérales dissimulées et doublure crêpe qui tient la ligne toute la journée. Créée à Abou Dabi ; livraison mondiale.',
    fabric: 'Crepe stretch, doublure power mesh',
    measurements: 'Longueur au sol 148 cm (taille M).',
  },
  'hampstead-dress': {
    description: 'La maxi en crêpe premium entièrement doublée que vous cherchiez — encolure drapée, évasement sculpté en douceur et garniture Al Talli à la taille reconnue par l’UNESCO. Seule ou sous une abaya ; créée à Abou Dabi, EAU, livraison mondiale.',
    fabric: 'Melange laine vierge, doublure soie, boutons nacre',
    measurements: 'Coupe structuree. Longueur: 118 cm (taille M). Largeur d epaule: 42 cm.',
  },
  'covent-garden-signature-set': {
    description: 'La confiance d’un dressing coordonné — robe Covent Garden et veste taillée aux détails inspirés d’Al Khous, coupées pour aller ensemble ou se porter à part. Créées à Abou Dabi ; livraison mondiale.',
    fabric: 'Melange coton biologique, accents lin, teintures naturelles',
    measurements: 'Longueur haut: 70 cm, longueur jupe: 95 cm (taille M). Coupe decontractee.',
  },
  'soho-set': {
    description: 'Ensemble coordonné — chemise oversize et pantalon palazzo à jambes larges, finition Al Talli traditionnelle — du jour au soir, un hommage au patrimoine émirati sans costume. Créé à Abou Dabi ; livraison mondiale.',
    fabric: 'Composition du tissu - finalisation avec la production.',
    measurements: 'Coupe equilibree; longueurs chemise et pantalon confirmees selon le guide des tailles.',
  },
  'grosvenor-set': {
    description:
      'Set contemporain chemise et jupe en satin Champagne Cream — avec détail Al Talli signature autour de la jupe, deux fils Onyx inclus, et boutons Knotted Line. Conçu à Abou Dabi ; livraison mondiale.',
    fabric: 'Composition du tissu — à finaliser avec la production.',
    measurements:
      'Taille du mannequin : 160 cm / 63 pouces. Le mannequin porte la taille XS. Longueurs sur mesure disponibles sur demande.',
  },
}

const DE_CATALOG_COPY: Record<string, CatalogFields> = {
  'knightsbridge-abaya-jacket': {
    description: 'Für Frauen, die die Linie setzen statt ihr zu folgen — eine Jackenabaya mit Al-Khous-inspirierten Details, strukturierten Schultern und Knotted-Lines-of-Lineage-Knöpfen. Als raffiniertes Outerwear über Kleider oder allein als zeitgenössische emiratische Garderobe. Geschaffen in Abu Dhabi; weltweiter Versand.',
    fabric: 'Aussen: 60% Polyester, 40% Baumwolle; Innenkleid: 100% Polyester',
    measurements:
      'Modelgroesse: 160 cm / 63 Zoll. Model traegt Groesse XS. Laenge: 143 cm / 56.3 Zoll. Individuelle Laengen auf Anfrage verfuegbar.',
  },
  'covent-garden-abaya': {
    description: 'Die leichte Leinenabaya, nach der Sie greifen, wenn der Tag Leichtigkeit ohne Verlust an Haltung verlangt — traditioneller Al-Talli-Besatz, verdeckte Knopfleiste und emiratisches Erbe, das aus der Nähe spricht. Geschaffen in Abu Dhabi; weltweiter Versand.',
    fabric: 'Europaeischer Leinenmix, Baumwollfutter',
    measurements: 'Laenge: 138 cm (Groesse M). Relaxte Passform am Koerper.',
  },
  'kensington-abaya': {
    description: 'Tailliertes Selbstbewusstsein in einer strukturierten Blazer-Abaya — klare Schultern, Al-Khous-inspirierte Borte und architektonische Schlichtheit in tiefem Schwarz. Für Frauen, die Präsenz ohne Lärm wollen. Geschaffen in Abu Dhabi; weltweiter Versand.',
    fabric: 'Japanischer Krepp, tonale Stickgarne',
    measurements: 'Laenge: 138 cm (Groesse M).',
  },
  'marylebone-abaya': {
    description: 'Eine A-Linien-Abaya für Schmuck — anmutige Schneiderkunst mit abnehmbaren Onyx Strands und Knotted-Line-Details, die Sie über die Saison neu stylen. Geschaffen in Abu Dhabi; weltweiter Versand.',
    fabric: 'Woll-Seiden-Mix, matter Satin-Besatz',
    measurements: 'Laenge: 135 cm (Groesse M).',
  },
  'belgravia-abaya': {
    description: 'Eine Bisht-inspirierte Abaya mit handgewebtem Besatz aus dem Al-Khous-Palmblattweben — Erbe in zeitgenössischer Proportion. Geschaffen in Abu Dhabi für Frauen, die mit Herkunft und Klarheit kleiden; weltweiter Versand.',
    fabric: 'Aussen: leichter Kreppmix (80% Polyester, 20% Viskose); Innenfutter: (70% Polyester, 30% Viskose)',
    measurements: 'Laenge: 138 cm (Groesse M). Individuelle Laengen auf Anfrage verfuegbar.',
  },
  'park-lane-abaya': {
    description: 'Die Abaya, die den Raum beruhigt, bevor Sie sprechen — anmutige A-Linie, integrierter Schulterschal und goldfarbene Knotted-Line-Details. Von Tagesdiplomatie bis Abendruhe, geschaffen in Abu Dhabi; weltweiter Versand.',
    fabric: 'Materialzusammensetzung - wird mit der Produktion finalisiert.',
    measurements: 'Laenge: 138 cm (Groesse M). Individuelle Laengen auf Anfrage verfuegbar.',
  },
  'hyde-park-set': {
    description: 'Reisegarderobe, wie sie sein soll — oversized Premium-Krepp-Hemd mit weiten Palazzo-Hosen und Knotted-Line-Knöpfen, ausschließlich in Deep Black. Einmal packen; vom Abflug bis zum Dinner. Weltweiter Versand aus Abu Dhabi.',
    fabric: 'Materialzusammensetzung - wird mit der Produktion finalisiert.',
    measurements: 'Masse - werden bestaetigt.',
  },
  'mayfair-kaftan': {
    description: 'Ein fließender Crêpe-Chiffon-Kaftan mit V-Ausschnitt, Innenkleid, Schaldetail und goldfarbener Monogram-Nadel — Anlassleichtigkeit mit Haltung. Geschaffen in Abu Dhabi; weltweiter Versand.',
    fabric: 'Crepe Chiffon (100% Polyester), Innenkleid: 100% Polyester',
    measurements: 'Maximale Kleidungslaenge: 165 cm.',
  },
  'nothing-hill-kaftan': {
    description: 'Weicher Pfirsichrosa-Chiffon mit raffiniertem Bateau-Ausschnitt und fließender Linie — abgeschlossen mit dem goldfarbenen Bint-Saeed-Emblem. Der Kaftan für Abende, die Leichtigkeit verlangen. Weltweiter Versand aus Abu Dhabi.',
    fabric: 'Chiffon (100% Polyester), Innenkleid: 100% Polyester',
    measurements: 'Maximale Kleidungslaenge: 165 cm.',
  },
    'knightsbridge-dress': {
    description: 'Ein feminines Baumwollmisch-Maxi mit Khous-inspiriertem gewebtem Halter-Detail — Eleganz, die durch die Woche trägt, ohne dass Sie jemand anderes sein müssen. Geschaffen in Abu Dhabi; weltweiter Versand.',
    fabric: 'Aussenmaterial: 60 % Baumwolle, 40 % Polyester',
    measurements: 'Length: 143 cm / 56.3 inches. Model height: 160 cm / 63 inches. Model wears size XS. Available in custom lengths upon request.',
  },
  'covent-garden-long-dress': {
    description: 'Das Under-Abaya-Kleid für Arbeit und kulturelle Abende — weich sitzende Silhouette, versteckte Seitentaschen und weiche Kreppfutter, das die Linie den ganzen Tag hält. Geschaffen in Abu Dhabi; weltweiter Versand.',
    fabric: 'Stretch-Krepp, Power-Mesh-Futter',
    measurements: 'Bodenlaenge 148 cm (Groesse M).',
  },
  'hampstead-dress': {
    description: 'Das vollgefütterte Premium-Krepp-Maxi, das Sie gesucht haben — drapierter Ausschnitt, sanft skulptierter Saum und UNESCO-anerkannter Al-Talli-Taillenbesatz. Allein oder unter einer Abaya; geschaffen in Abu Dhabi, VAE, weltweiter Versand.',
    fabric: 'Virgin-Wool-Mix, Seidenfutter, Perlmuttknoepfe',
    measurements: 'Strukturierte Passform. Laenge: 118 cm (Groesse M). Schulterbreite: 42 cm.',
  },
  'covent-garden-signature-set': {
    description: 'Die Sicherheit koordinierter Garderobe — Covent-Garden-Kleid und taillierte Jacke mit Al-Khous-Details, geschnitten, um zusammen oder einzeln zu wirken. Geschaffen in Abu Dhabi; weltweiter Versand.',
    fabric: 'Bio-Baumwollmix, Leinen-Akzente, natuerliche Faerbung',
    measurements: 'Oberteillaenge: 70 cm, Rocklaenge: 95 cm (Groesse M). Relaxte Passform.',
  },
  'soho-set': {
    description: 'Koordiniertes oversized Hemd und weite Palazzo-Hose mit traditionellem Al-Talli-Besatz — vom Tag in den Abend, emiratisches Erbe ohne Kostüm. Geschaffen in Abu Dhabi; weltweiter Versand.',
    fabric: 'Materialzusammensetzung - wird mit der Produktion finalisiert.',
    measurements: 'Ausgewogene Passform; Hemd- und Hosenlaengen gemaess Groessentabelle bestaetigt.',
  },
  'grosvenor-set': {
    description:
      'Zeitgenössisches Satin-Set aus Hemd und Rock in Champagne Cream — mit signature Al-Talli-Detailing am Rock, zwei inkludierten Onyx-Strängen und Knotted-Line-Knöpfen. Entworfen in Abu Dhabi; weltweiter Versand.',
    fabric: 'Stoffzusammensetzung — wird mit der Produktion finalisiert.',
    measurements:
      'Modelgroesse: 160 cm / 63 Zoll. Model traegt Groesse XS. Individuelle Laengen auf Anfrage verfuegbar.',
  },
}

const IT_CATALOG_COPY: Record<string, CatalogFields> = {
  'knightsbridge-abaya-jacket': {
    description: "Per chi traccia la linea invece di seguirla — abaya giacca con dettagli ispirati ad Al Khous, spalle strutturate e bottoni Knotted Lines of Lineage. Da indossare come outerwear raffinato sopra abiti o da sola, in un vestire emiratino contemporaneo. Creata ad Abu Dhabi; spedizione mondiale.",
    fabric: 'Esterno: 60% poliestere, 40% cotone; abito interno: 100% poliestere',
    measurements:
      'Altezza modella: 160 cm / 63 pollici. La modella indossa la taglia XS. Lunghezza: 143 cm / 56.3 pollici. Lunghezze personalizzate disponibili su richiesta.',
  },
  'covent-garden-abaya': {
    description: 'L’abaya in lino leggero a cui ricorrete quando la giornata chiede facilità senza perdere cura — bordo Al Talli tradizionale, patta nascosta e dettaglio patrimoniale emiratino che si legge da vicino. Creata ad Abu Dhabi; spedizione mondiale.',
    fabric: 'Misto lino europeo, fodera in cotone',
    measurements: 'Lunghezza: 138 cm (taglia M). Vestibilita rilassata sul corpo.',
  },
  'kensington-abaya': {
    description: 'Fiducia sartoriale in un’abaya blazer strutturata — spalle nette, treccia ispirata ad Al Khous e semplicità architettonica in nero intenso. Per chi vuole presenza senza rumore. Creata ad Abu Dhabi; spedizione mondiale.',
    fabric: 'Crepe giapponese, filati da ricamo tono su tono',
    measurements: 'Lunghezza: 138 cm (taglia M).',
  },
  'marylebone-abaya': {
    description: 'Un’abaya A-line pensata per portare gioielli — taglio aggraziato, fili Onyx removibili e dettagli Knotted Line da restilizzare nella stagione. Creata ad Abu Dhabi; spedizione mondiale.',
    fabric: 'Misto lana-seta, bordatura in raso opaco',
    measurements: 'Lunghezza: 135 cm (taglia M).',
  },
  'belgravia-abaya': {
    description: "Un’abaya ispirata al bisht, finita con bordo tessuto a mano dal telaio Al Khous — patrimonio in proporzione contemporanea. Creata ad Abu Dhabi per chi veste con lignaggio e chiarezza; spedizione mondiale.",
    fabric: 'Esterno: misto crepe leggero (80% poliestere, 20% viscosa); fodera interna: (70% poliestere, 30% viscosa)',
    measurements: 'Lunghezza: 138 cm (taglia M). Lunghezze personalizzate disponibili su richiesta.',
  },
  'park-lane-abaya': {
    description: 'L’abaya che assesta la stanza prima che parliate — taglio A-line aggraziato, sciarpa spalla integrata e dettagli Knotted Line dorati. Dalla diplomazia diurna alla sera, creata ad Abu Dhabi; spedizione mondiale.',
    fabric: 'Composizione tessuto - da finalizzare con la produzione.',
    measurements: 'Lunghezza: 138 cm (taglia M). Lunghezze personalizzate disponibili su richiesta.',
  },
  'hyde-park-set': {
    description: 'Il travel dressing come si deve — camicia oversize in crepe premium e pantaloni palazzo a gamba ampia con bottoni Knotted Line, esclusivamente in Deep Black. Una valigia; dalla partenza alla cena. Spedizione mondiale da Abu Dhabi.',
    fabric: 'Composizione tessuto - da finalizzare con la produzione.',
    measurements: 'Misure - da confermare.',
  },
  'mayfair-kaftan': {
    description: 'Un caftano fluido in crepe-chiffon scollo a V, abito interno, dettaglio foulard e spilla Monogram dorata — facilità da occasione ancora ponderata. Creato ad Abu Dhabi; spedizione mondiale.',
    fabric: 'Crepe Chiffon (100% poliestere), abito interno: 100% poliestere',
    measurements: 'Lunghezza massima capo: 165 cm.',
  },
  'nothing-hill-kaftan': {
    description: 'Chiffon rosa pesca morbido, scollo bateau raffinato e linea fluida — chiuso dall’emblema dorato Bint Saeed. Il caftano per le sere che chiedono leggerezza. Spedizione mondiale da Abu Dhabi.',
    fabric: 'Chiffon (100% poliestere), abito interno: 100% poliestere',
    measurements: 'Lunghezza massima capo: 165 cm.',
  },
    'knightsbridge-dress': {
    description: 'Un maxi femminile in misto cotone con dettaglio halter tessuto ispirato ad Al Khous — eleganza che accompagna la settimana senza chiedervi di essere altre. Creato ad Abu Dhabi; spedizione mondiale.',
    fabric: 'Esterno: 60% cotone, 40% poliestere',
    measurements: 'Length: 143 cm / 56.3 inches. Model height: 160 cm / 63 inches. Model wears size XS. Available in custom lengths upon request.',
  },
  'covent-garden-long-dress': {
    description: 'L’abito sotto-abaya che vi porta dal lavoro alle serate culturali — silhouette morbida, tasche laterali nascoste e fodera crepe che tiene la linea tutto il giorno. Creato ad Abu Dhabi; spedizione mondiale.',
    fabric: 'Crepe stretch, fodera power mesh',
    measurements: 'Lunghezza a terra 148 cm (taglia M).',
  },
  'hampstead-dress': {
    description: 'Il maxi in crepe premium completamente foderato che stavate cercando — scollo drappeggiato, svasatura scolpita con delicatezza e trim Al Talli in vita riconosciuto dall’UNESCO. Solo o sotto un’abaya; creato ad Abu Dhabi, EAU, spedizione mondiale.',
    fabric: 'Misto lana vergine, fodera in seta, bottoni in madreperla',
    measurements: 'Vestibilita strutturata. Lunghezza: 118 cm (taglia M). Larghezza spalle: 42 cm.',
  },
  'covent-garden-signature-set': {
    description: 'La fiducia del dressing coordinato — abito Covent Garden e giacca sartoriale con dettagli ispirati ad Al Khous, tagliati per stare insieme o separati. Creati ad Abu Dhabi; spedizione mondiale.',
    fabric: 'Misto cotone biologico, accenti in lino, tinture naturali',
    measurements: 'Lunghezza top: 70 cm, lunghezza gonna: 95 cm (taglia M). Vestibilita rilassata.',
  },
  'soho-set': {
    description: 'Set coordinato — camicia oversize e pantaloni palazzo a gamba ampia con trim Al Talli tradizionale — dal giorno alla sera, patrimonio emiratino senza costume. Creato ad Abu Dhabi; spedizione mondiale.',
    fabric: 'Composizione tessuto - da finalizzare con la produzione.',
    measurements: 'Vestibilita bilanciata; lunghezze camicia e pantaloni confermate secondo tabella taglie.',
  },
  'grosvenor-set': {
    description:
      'Set contemporaneo camicia e gonna in raso Champagne Cream — con dettaglio Al Talli signature attorno alla gonna, due fili in onice inclusi e bottoni Knotted Line. Progettato ad Abu Dhabi; spedizione mondiale.',
    fabric: 'Composizione del tessuto — da finalizzare con la produzione.',
    measurements:
      'Altezza modella: 160 cm / 63 pollici. La modella indossa la taglia XS. Lunghezze personalizzate disponibili su richiesta.',
  },
}

const ES_CATALOG_COPY: Record<string, CatalogFields> = {
  'knightsbridge-abaya-jacket': {
    description: 'Para quienes marcan la línea en lugar de seguirla — abaya chaqueta con detalles inspirados en Al Khous, hombros estructurados y botones Knotted Lines of Lineage. Como outerwear refinado sobre vestidos o sola, en un vestir emiratí contemporáneo. Creada en Abu Dabi; envío mundial.',
    fabric: 'Exterior: 60% poliester, 40% algodon; vestido interior: 100% poliester',
    measurements:
      'Altura de la modelo: 160 cm / 63 pulgadas. La modelo lleva talla XS. Largo: 143 cm / 56.3 pulgadas. Largo personalizado disponible bajo solicitud.',
  },
  'covent-garden-abaya': {
    description: 'La abaya de lino ligero a la que acudes cuando el día pide facilidad sin perder pulcritud — ribete Al Talli tradicional, plaqueta oculta y detalle patrimonial emiratí que se lee de cerca. Creada en Abu Dabi; envío mundial.',
    fabric: 'Mezcla de lino europeo, forro de algodon',
    measurements: 'Largo: 138 cm (talla M). Corte relajado en el cuerpo.',
  },
  'kensington-abaya': {
    description: 'Confianza de sastrería en una abaya blazer estructurada — hombros limpios, trenza inspirada en Al Khous y simplicidad arquitectónica en negro profundo. Para quien quiere presencia sin ruido. Creada en Abu Dabi; envío mundial.',
    fabric: 'Crepe japones, hilos de bordado tonales',
    measurements: 'Largo: 138 cm (talla M).',
  },
  'marylebone-abaya': {
    description: 'Una abaya A-line pensada para llevar joyería — talla graciosa, hebras Onyx extraíbles y detalles Knotted Line que reestilas a lo largo de la temporada. Creada en Abu Dabi; envío mundial.',
    fabric: 'Mezcla de lana y seda, ribete de satin mate',
    measurements: 'Largo: 135 cm (talla M).',
  },
  'belgravia-abaya': {
    description: 'Una abaya inspirada en el bisht, terminada con ribete tejido a mano del tejido Al Khous — patrimonio en proporción contemporánea. Creada en Abu Dabi para quien viste con linaje y claridad; envío mundial.',
    fabric: 'Exterior: mezcla ligera de crepe (80% poliester, 20% viscosa); forro interior: (70% poliester, 30% viscosa)',
    measurements: 'Largo: 138 cm (talla M). Largo personalizado disponible bajo solicitud.',
  },
  'park-lane-abaya': {
    description: 'La abaya que asienta la sala antes de que hables — talla A-line graciosa, bufanda de hombro integrada y detalles Knotted Line dorados. De la diplomacia diurna al reposo nocturno, creada en Abu Dabi; envío mundial.',
    fabric: 'Composicion del tejido - por finalizar con produccion.',
    measurements: 'Largo: 138 cm (talla M). Largo personalizado disponible bajo solicitud.',
  },
  'hyde-park-set': {
    description: 'El vestir de viaje bien hecho — camisa oversized de crepé premium y pantalón palazzo de pierna ancha con botones Knotted Line, exclusivamente en Deep Black. Empaca una vez; del embarque a la cena. Envío mundial desde Abu Dabi.',
    fabric: 'Composicion del tejido - por finalizar con produccion.',
    measurements: 'Medidas - por confirmar.',
  },
  'mayfair-kaftan': {
    description: 'Un caftán fluido de crepé-chiffon con escote en V, vestido interior, detalle de pañuelo y alfiler Monogram dorado — facilidad de ocasión aún considerada. Creado en Abu Dabi; envío mundial.',
    fabric: 'Crepe Chiffon (100% poliester), vestido interior: 100% poliester',
    measurements: 'Largo maximo de la prenda: 165 cm.',
  },
  'nothing-hill-kaftan': {
    description: 'Chiffon rosa melocotón suave, escote bateau refinado y línea fluida — rematado con el emblema dorado Bint Saeed. El caftán para noches que piden ligereza. Envío mundial desde Abu Dabi.',
    fabric: 'Chiffon (100% poliester), vestido interior: 100% poliester',
    measurements: 'Largo maximo de la prenda: 165 cm.',
  },
    'knightsbridge-dress': {
    description: 'Un maxi femenino de mezcla de algodón con detalle halter tejido inspirado en Al Khous — elegancia que acompaña la semana sin pedirte ser otra. Creado en Abu Dabi; envío mundial.',
    fabric: 'Exterior: 60% algodon, 40% poliester',
    measurements: 'Length: 143 cm / 56.3 inches. Model height: 160 cm / 63 inches. Model wears size XS. Available in custom lengths upon request.',
  },
  'covent-garden-long-dress': {
    description: 'El vestido bajo-abaya que te lleva del trabajo a las veladas culturales — silueta suave, bolsillos laterales ocultos y forro de crepé que mantiene la línea todo el día. Creado en Abu Dabi; envío mundial.',
    fabric: 'Crepe elastico, forro power mesh',
    measurements: 'Largo al suelo 148 cm (talla M).',
  },
  'hampstead-dress': {
    description: 'El maxi de crepé premium totalmente forrado que has estado buscando — escote drapeado, evasé suavemente esculpido y ribete Al Talli en la cintura reconocido por la UNESCO. Solo o bajo una abaya; creado en Abu Dabi, EAU, envío mundial.',
    fabric: 'Mezcla de lana virgen, forro de seda, botones de nacar',
    measurements: 'Corte estructurado. Largo: 118 cm (talla M). Ancho de hombros: 42 cm.',
  },
  'covent-garden-signature-set': {
    description: 'La confianza del vestir coordinado — vestido Covent Garden y chaqueta de sastrería con detalles inspirados en Al Khous, cortados para ir juntos o por separado. Creados en Abu Dabi; envío mundial.',
    fabric: 'Mezcla de algodon organico, acentos de lino, tintes naturales',
    measurements: 'Largo del top: 70 cm, largo de la falda: 95 cm (talla M). Corte relajado.',
  },
  'soho-set': {
    description: 'Conjunto coordinado — camisa oversized y pantalón palazzo de pierna ancha con ribete Al Talli tradicional — del día a la noche, patrimonio emiratí sin disfraz. Creado en Abu Dabi; envío mundial.',
    fabric: 'Composicion del tejido - por finalizar con produccion.',
    measurements: 'Corte equilibrado; largos de camisa y pantalon confirmados segun tabla de tallas.',
  },
  'grosvenor-set': {
    description:
      'Set contemporáneo de camisa y falda en satén Champagne Cream — con detalle Al Talli signature alrededor de la falda, dos hebras de ónice incluidas y botones Knotted Line. Diseñado en Abu Dabi; envío mundial.',
    fabric: 'Composición de la tela — por finalizar con producción.',
    measurements:
      'Altura de la modelo: 160 cm / 63 pulgadas. La modelo lleva talla XS. Largo personalizado disponible bajo solicitud.',
  },
}

const RU_CATALOG_COPY: Record<string, CatalogFields> = {
  'knightsbridge-abaya-jacket': {
    description: 'Для тех, кто задаёт линию, а не следует ей — абайя-жакет с деталями в духе Al Khous, структурированными плечами и пуговицами Knotted Lines of Lineage. Как изысканный outerwear поверх платьев или сама по себе — современный эмиратский гардероб. Создана в Абу-Даби; доставка по миру.',
    fabric: 'Верх: 60% полиэстер, 40% хлопок; внутреннее платье: 100% полиэстер',
    measurements:
      'Рост модели: 160 см / 63 дюйма. Модель носит размер XS. Длина: 143 см / 56.3 дюйма. Индивидуальная длина доступна по запросу.',
  },
  'covent-garden-abaya': {
    description: 'Лёгкая льняная абайя, к которой вы тянетесь, когда день просит лёгкости без потери ухоженности — традиционная отделка Al Talli, скрытая планка и эмиратское наследие, читаемое вблизи. Создана в Абу-Даби; доставка по миру.',
    fabric: 'Европейский льняной микс, хлопковая подкладка',
    measurements: 'Длина: 138 см (размер M). Свободная посадка по фигуре.',
  },
  'kensington-abaya': {
    description: 'Уверенность кроя в структурированной абайе-блейзере — чистые плечи, плетёнка в духе Al Khous и архитектурная простота глубокого чёрного. Для тех, кто хочет присутствия без шума. Создана в Абу-Даби; доставка по миру.',
    fabric: 'Японский креп, тональные нити вышивки',
    measurements: 'Длина: 138 см (размер M).',
  },
  'marylebone-abaya': {
    description: 'Абайя A-line, созданная носить украшения — изящный крой, съёмные нити Onyx и детали Knotted Line, которые вы пересобираете в течение сезона. Создана в Абу-Даби; доставка по миру.',
    fabric: 'Смесь шерсти и шелка, матовая атласная окантовка',
    measurements: 'Длина: 135 см (размер M).',
  },
  'belgravia-abaya': {
    description: 'Абайя в духе бишта с ручным тканым кантом из плетения Al Khous — наследие в современной пропорции. Создана в Абу-Даби для тех, кто одевается с родословием и ясностью; доставка по миру.',
    fabric: 'Верх: легкий креповый микс (80% полиэстер, 20% вискоза); внутренняя подкладка: (70% полиэстер, 30% вискоза)',
    measurements: 'Длина: 138 см (размер M). Индивидуальная длина доступна по запросу.',
  },
  'park-lane-abaya': {
    description: 'Абайя, которая успокаивает зал до ваших слов — изящный A-line, встроенный плечевой шарф и золотистые детали Knotted Line. От дневной дипломатии к вечерней лёгкости, создана в Абу-Даби; доставка по миру.',
    fabric: 'Состав ткани — будет финализирован с производством.',
    measurements: 'Длина: 138 см (размер M). Индивидуальная длина доступна по запросу.',
  },
  'hyde-park-set': {
    description: 'Дорожный гардероб как следует — oversized рубашка из премиального крепа и широкие палаццо с пуговицами Knotted Line, только Deep Black. Упаковать раз; от вылета до ужина. Доставка по миру из Абу-Даби.',
    fabric: 'Состав ткани — будет финализирован с производством.',
    measurements: 'Параметры — будут подтверждены.',
  },
  'mayfair-kaftan': {
    description: 'Текучий кафтан из креп-шифона с V-вырезом, внутренним платьем, деталью шарфа и золотистой булавкой Monogram — лёгкость случая, всё ещё продуманная. Создан в Абу-Даби; доставка по миру.',
    fabric: 'Crepe Chiffon (100% полиэстер), внутреннее платье: 100% полиэстер',
    measurements: 'Максимальная длина изделия: 165 см.',
  },
  'nothing-hill-kaftan': {
    description: 'Мягкий персиково-розовый шифон, изысканный вырез bateau и текучая линия — с золотистым эмблемой Bint Saeed. Кафтан для вечеров, просящих лёгкости. Доставка по миру из Абу-Даби.',
    fabric: 'Chiffon (100% полиэстер), внутреннее платье: 100% полиэстер',
    measurements: 'Максимальная длина изделия: 165 см.',
  },
    'knightsbridge-dress': {
    description: 'Женственное макси из хлопковой смеси с плетёной halter-деталью в духе Khous — элегантность, которая ведёт неделю, не требуя быть кем-то иным. Создано в Абу-Даби; доставка по миру.',
    fabric: 'Верх: 60% хлопок, 40% полиэстер',
    measurements: 'Length: 143 cm / 56.3 inches. Model height: 160 cm / 63 inches. Model wears size XS. Available in custom lengths upon request.',
  },
  'covent-garden-long-dress': {
    description: 'Платье под абайю от работы к культурным вечерам — мягко облегающий силуэт, скрытые боковые карманы и креповая подкладка, держащая линию весь день. Создано в Абу-Даби; доставка по миру.',
    fabric: 'Эластичный креп, подкладка power mesh',
    measurements: 'Длина в пол 148 см (размер M).',
  },
  'hampstead-dress': {
    description: 'Полностью подбитое премиальное креповое макси, которое вы искали — драпированный вырез, мягко скульптурный клёш и отделка Al Talli на талии, признанная ЮНЕСКО. Само по себе или под абайю; создано в Абу-Даби, ОАЭ, доставка по миру.',
    fabric: 'Смесь virgin wool, шелковая подкладка, перламутровые пуговицы',
    measurements: 'Структурная посадка. Длина: 118 см (размер M). Ширина плеч: 42 см.',
  },
  'covent-garden-signature-set': {
    description: 'Уверенность согласованного гардероба — платье Covent Garden и приталенный жакет с деталями Al Khous, кроенные вместе или порознь. Созданы в Абу-Даби; доставка по миру.',
    fabric: 'Смесь organic cotton, акценты льна, натуральные красители',
    measurements: 'Длина топа: 70 см, длина юбки: 95 см (размер M). Свободная посадка.',
  },
  'soho-set': {
    description: 'Согласованный комплект — oversized рубашка и широкие палаццо с традиционной отделкой Al Talli — от дня к вечеру, эмиратское наследие без костюма. Создан в Абу-Даби; доставка по миру.',
    fabric: 'Состав ткани — будет финализирован с производством.',
    measurements: 'Сбалансированная посадка; длины рубашки и брюк подтверждаются по размерной сетке.',
  },
  'grosvenor-set': {
    description:
      'Современный комплект из атласной рубашки и юбки Champagne Cream — с фирменной отделкой Al Talli вокруг юбки, двумя включёнными нитями из оникса и пуговицами Knotted Line. Создан в Абу-Даби; доставка по миру.',
    fabric: 'Состав ткани — будет уточнён при производстве.',
    measurements:
      'Рост модели: 160 см / 63 дюйма. На модели размер XS. Индивидуальная длина доступна по запросу.',
  },
}

const ZH_CATALOG_COPY: Record<string, CatalogFields> = {
  'knightsbridge-abaya-jacket': {
    description: '为引领而非追随的女性而作——以 Al Khous 为灵感的夹克长袍，结构肩线与 Knotted Lines of Lineage 纽扣。可作精致外套覆于裙装之上，亦可单独作为当代阿联酋着装。阿布扎比创作；全球配送。',
    fabric: '外层：60% 聚酯纤维，40% 棉；内搭连衣裙：100% 聚酯纤维',
    measurements:
      '模特身高：160 厘米 / 63 英寸。模特穿着 XS。衣长：143 厘米 / 56.3 英寸。支持按需定制长度。',
  },
  'covent-garden-abaya': {
    description: '当一日需要从容又不失考究时，你会伸手取用的轻盈亚麻长袍——传统 Al Talli 饰边、干净的暗门襟，以及近看才读得见的阿联酋遗产细节。阿布扎比创作；全球配送。',
    fabric: '欧洲亚麻混纺，棉质里衬',
    measurements: '衣长：138 厘米（M 码）。身体部位为宽松版型。',
  },
  'kensington-abaya': {
    description: '结构西装式长袍中的剪裁自信——利落肩线、Al Khous 灵感编织饰边，深黑色的建筑式简约。为希望静默有力的女性而作。阿布扎比创作；全球配送。',
    fabric: '日本绉纱，同色系刺绣线',
    measurements: '衣长：138 厘米（M 码）。',
  },
  'marylebone-abaya': {
    description: '为佩戴珠宝而设计的 A 字长袍——优雅剪裁，可拆卸玛瑙串与可随季节重配的 Knotted Line 细节。阿布扎比创作；全球配送。',
    fabric: '羊毛真丝混纺，哑光缎面包边',
    measurements: '衣长：135 厘米（M 码）。',
  },
  'belgravia-abaya': {
    description: '灵感取自 Bisht 的长袍，饰以源自 Al Khous 棕榈叶编织的手工织边——当代比例中的遗产。为以脉络与清晰着装的女性，于阿布扎比创作；全球配送。',
    fabric: '外层：轻盈绉纱混纺（80% 聚酯纤维，20% 粘胶纤维）；内里： （70% 聚酯纤维，30% 粘胶纤维）',
    measurements: '衣长：138 厘米（M 码）。支持按需定制长度。',
  },
  'park-lane-abaya': {
    description: '在你开口之前便安定全场的长袍——优雅 A 字剪裁、一体式肩巾与金色 Knotted Line 细节。自日间礼仪至晚间从容，阿布扎比创作；全球配送。',
    fabric: '面料成分——将与生产环节最终确认。',
    measurements: '衣长：138 厘米（M 码）。支持按需定制长度。',
  },
  'hyde-park-set': {
    description: '妥善的旅行着装——宽松高端绉纱衬衫搭配阔腿 Palazzo 裤与 Knotted Line 纽扣，仅限 Deep Black。一次收纳，自出发到晚宴。自阿布扎比全球配送。',
    fabric: '面料成分——将与生产环节最终确认。',
    measurements: '尺码信息——待确认。',
  },
  'mayfair-kaftan': {
    description: '流畅绉纱雪纺 V 领长袍，内裙、围巾细节与金色 Monogram 别针——场合的轻松仍显考究。阿布扎比创作；全球配送。',
    fabric: 'Crepe Chiffon（100% 聚酯纤维），内搭连衣裙：100% 聚酯纤维',
    measurements: '成衣最大长度：165 厘米。',
  },
  'nothing-hill-kaftan': {
    description: '柔和桃粉色雪纺，精致船领与流畅线条——收以金色 Bint Saeed 徽记。适合需要轻盈的夜晚。自阿布扎比全球配送。',
    fabric: 'Chiffon（100% 聚酯纤维），内搭连衣裙：100% 聚酯纤维',
    measurements: '成衣最大长度：165 厘米。',
  },
    'knightsbridge-dress': {
    description: '女性气质棉混纺长裙，Khous 灵感编织挂脖细节——贯穿一周的优雅，无需你成为别人。阿布扎比创作；全球配送。',
    fabric: '外层：60% 棉，40% 聚酯纤维',
    measurements: 'Length: 143 cm / 56.3 inches. Model height: 160 cm / 63 inches. Model wears size XS. Available in custom lengths upon request.',
  },
  'covent-garden-long-dress': {
    description: '自工作到文化场合皆可相伴的袍内裙——柔和贴身轮廓、隐藏侧袋与全日保持线条的柔软绉纱里衬。阿布扎比创作；全球配送。',
    fabric: '弹力绉纱，power mesh 里衬',
    measurements: '及地长度 148 厘米（M 码）。',
  },
  'hampstead-dress': {
    description: '你一直在寻找的全里衬高端绉绸长裙——垂坠领口、轻柔雕琢的裙摆，以及联合国教科文组织认可的 Al Talli 腰饰。可独穿或衬于长袍之下；阿联酋阿布扎比创作，全球配送。',
    fabric: '初剪羊毛混纺，真丝里衬，珍珠母纽扣',
    measurements: '结构化版型。衣长：118 厘米（M 码）。肩宽：42 厘米。',
  },
  'covent-garden-signature-set': {
    description: '协调着装的从容——Covent Garden 裙装与剪裁外套，Al Khous 灵感细节，可成套亦可分穿。阿布扎比创作；全球配送。',
    fabric: '有机棉混纺，亚麻点缀，天然染料',
    measurements: '上衣长度：70 厘米，半裙长度：95 厘米（M 码）。宽松版型。',
  },
  'soho-set': {
    description: '宽松衬衫与阔腿 Palazzo 裤的协调套装，传统 Al Talli 饰边——自日到夜，致敬阿联酋遗产而无戏服感。阿布扎比创作；全球配送。',
    fabric: '面料成分——将与生产环节最终确认。',
    measurements: '平衡版型；衬衫与长裤长度将按尺码表确认。',
  },
  'grosvenor-set': {
    description:
      '承悦当代 Champagne Cream 缎面衬衫与半裙套装——半裙饰以标志性 Al Talli 细节，附赠两条玛瑙链，Knotted Line 纽扣。阿布扎比设计；全球配送。',
    fabric: '面料成分 — 将与生产最终确认。',
    measurements: '模特身高：160 厘米 / 63 英寸。模特穿着 XS 码。可按需定制长度。',
  },
}

const NL_CATALOG_COPY: Record<string, CatalogFields> = {
  'knightsbridge-abaya-jacket': {
    description: 'Voor wie de lijn zet in plaats van volgt — een jas-abaya met Al Khous-geïnspireerde details, gestructureerde schouders en Knotted Lines of Lineage knopen. Als verfijnd outerwear over jurken of alleen, als hedendaagse Emiratische kleding. Gemaakt in Abu Dhabi; wereldwijde verzending.',
    fabric: 'Buitenkant: 60% polyester, 40% katoen; binnenjurk: 100% polyester',
    measurements:
      'Lengte model: 160 cm / 63 inch. Model draagt maat XS. Lengte: 143 cm / 56.3 inch. Maatwerk lengtes beschikbaar op aanvraag.',
  },
  'covent-garden-abaya': {
    description: 'De lichte linnen abaya waar u naar grijpt wanneer de dag gemak vraagt zonder polish te verliezen — traditionele Al Talli afwerking, verborgen placket en Emiratisch erfgoeddetail dat van dichtbij spreekt. Gemaakt in Abu Dhabi; wereldwijde verzending.',
    fabric: 'Europese linnenmix, katoenen voering',
    measurements: 'Lengte: 138 cm (maat M). Relaxte pasvorm over het lichaam.',
  },
  'kensington-abaya': {
    description: 'Getailleerd zelfvertrouwen in een gestructureerde blazer-abaya — strakke schouders, Al Khous-geïnspireerde vlecht en architecturale eenvoud in diep zwart. Voor wie aanwezigheid zonder lawaai wil. Gemaakt in Abu Dhabi; wereldwijde verzending.',
    fabric: 'Japanse crêpe, tonale borduurgarens',
    measurements: 'Lengte: 138 cm (maat M).',
  },
  'marylebone-abaya': {
    description: 'Een A-line abaya ontworpen om sieraden te dragen — sierlijke snit, verwijderbare Onyx Strands en Knotted Line details die u door het seizoen opnieuw stijlt. Gemaakt in Abu Dhabi; wereldwijde verzending.',
    fabric: 'Wol-zijde mix, matte satijnen afwerking',
    measurements: 'Lengte: 135 cm (maat M).',
  },
  'belgravia-abaya': {
    description: 'Een bisht-geïnspireerde abaya met handgeweven afwerking uit Al Khous-palmbladweven — erfgoed in hedendaagse proportie. Gemaakt in Abu Dhabi voor wie kleedt met afkomst en helderheid; wereldwijde verzending.',
    fabric: 'Buitenkant: lichte crêpemix (80% polyester, 20% viscose); binnenvoering: (70% polyester, 30% viscose)',
    measurements: 'Lengte: 138 cm (maat M). Maatwerk lengtes beschikbaar op aanvraag.',
  },
  'park-lane-abaya': {
    description: 'De abaya die de ruimte tot rust brengt voordat u spreekt — sierlijke A-line, geïntegreerde schoudersjaal en goudkleurige Knotted Line details. Van dagdiplomatie tot avondrust, gemaakt in Abu Dhabi; wereldwijde verzending.',
    fabric: 'Stofsamenstelling - wordt met productie afgerond.',
    measurements: 'Lengte: 138 cm (maat M). Maatwerk lengtes beschikbaar op aanvraag.',
  },
  'hyde-park-set': {
    description: 'Reisgarderobe zoals het hoort — oversized premium crêpe overhemd met wijde palazzo-broek en Knotted Line knopen, uitsluitend in Deep Black. Eén keer inpakken; van vertrek tot diner. Wereldwijde verzending vanuit Abu Dhabi.',
    fabric: 'Stofsamenstelling - wordt met productie afgerond.',
    measurements: 'Maten - worden bevestigd.',
  },
  'mayfair-kaftan': {
    description: 'Een vloeiende crêpe-chiffon V-hals kaftan met binnenjurk, sjaaldetail en goudkleurige Monogram-speld — gelegenheidsgemak dat nog doordacht voelt. Gemaakt in Abu Dhabi; wereldwijde verzending.',
    fabric: 'Crepe Chiffon (100% polyester), binnenjurk: 100% polyester',
    measurements: 'Maximale kledinglengte: 165 cm.',
  },
  'nothing-hill-kaftan': {
    description: 'Zachte perzikroze chiffon met verfijnde bateau-hals en vloeiende lijn — afgesloten met het goudkleurige Bint Saeed-embleem. De kaftan voor avonden die lichtheid vragen. Wereldwijde verzending vanuit Abu Dhabi.',
    fabric: 'Chiffon (100% polyester), binnenjurk: 100% polyester',
    measurements: 'Maximale kledinglengte: 165 cm.',
  },
    'knightsbridge-dress': {
    description: 'Een feminien katoenmix maxi met Khous-geïnspireerd geweven halterdetail — elegantie die de week meedraagt zonder te vragen dat u iemand anders bent. Gemaakt in Abu Dhabi; wereldwijde verzending.',
    fabric: 'Buitenkant: 60% katoen, 40% polyester',
    measurements: 'Length: 143 cm / 56.3 inches. Model height: 160 cm / 63 inches. Model wears size XS. Available in custom lengths upon request.',
  },
  'covent-garden-long-dress': {
    description: 'De under-abaya jurk die u van werk naar culturele avonden draagt — zacht zittende silhouette, verborgen zijzakken en zachte crêpe voering die de lijn de hele dag houdt. Gemaakt in Abu Dhabi; wereldwijde verzending.',
    fabric: 'Stretchcrêpe, power mesh voering',
    measurements: 'Vloerlengte 148 cm (maat M).',
  },
  'hampstead-dress': {
    description: 'Het volledig gevoerde premium crêpe maxi dat u zocht — gedrapeerde halslijn, zacht gesculpteerd uitwaarts model en UNESCO-erkende Al Talli tailleafwerking. Alleen of onder een abaya; gemaakt in Abu Dhabi, VAE, wereldwijde verzending.',
    fabric: 'Virgin-wolmix, zijden voering, parelmoer knopen',
    measurements: 'Gestructureerde pasvorm. Lengte: 118 cm (maat M). Schouderbreedte: 42 cm.',
  },
  'covent-garden-signature-set': {
    description: 'Het zelfvertrouwen van gecoördineerd aankleden — Covent Garden jurk en getailleerd jasje met Al Khous-details, gesneden om samen of apart te dragen. Gemaakt in Abu Dhabi; wereldwijde verzending.',
    fabric: 'Organic cotton mix, linnen accenten, natuurlijke kleurstoffen',
    measurements: 'Toplengte: 70 cm, roklengte: 95 cm (maat M). Relaxte pasvorm.',
  },
  'soho-set': {
    description: 'Gecoördineerd oversized overhemd en wijde palazzo-broek met traditionele Al Talli afwerking — van dag naar avond, Emiratisch erfgoed zonder kostuum. Gemaakt in Abu Dhabi; wereldwijde verzending.',
    fabric: 'Stofsamenstelling - wordt met productie afgerond.',
    measurements: 'Gebalanceerde pasvorm; overhemd- en broeklengtes bevestigd volgens maattabel.',
  },
  'grosvenor-set': {
    description:
      'Hedendaags satijnen set overhemd en rok in Champagne Cream — met signature Al Talli-detailing rond de rok, twee inbegrepen onyx strands en Knotted Line-knopen. Ontworpen in Abu Dhabi; wereldwijde verzending.',
    fabric: 'Stofsamenstelling — wordt definitief vastgesteld met productie.',
    measurements:
      'Model lengte: 160 cm / 63 inch. Model draagt maat XS. Maatwerk lengtes beschikbaar op aanvraag.',
  },
}

const PT_CATALOG_COPY: Record<string, CatalogFields> = {
  'knightsbridge-abaya-jacket': {
    description: 'Para quem traça a linha em vez de a seguir — abaya casaco com detalhes inspirados em Al Khous, ombros estruturados e botões Knotted Lines of Lineage. Como outerwear refinado sobre vestidos ou sozinha, num vestir emirati contemporâneo. Criada em Abu Dhabi; envio mundial.',
    fabric: 'Exterior: 60% poliester, 40% algodao; vestido interior: 100% poliester',
    measurements:
      'Altura da modelo: 160 cm / 63 polegadas. A modelo veste tamanho XS. Comprimento: 143 cm / 56.3 polegadas. Comprimentos personalizados disponiveis sob pedido.',
  },
  'covent-garden-abaya': {
    description: 'A abaya de linho leve a que recorre quando o dia pede facilidade sem perder cuidado — acabamento Al Talli tradicional, patilha oculta e detalhe patrimonial emirati que se lê de perto. Criada em Abu Dhabi; envio mundial.',
    fabric: 'Mistura de linho europeu, forro de algodao',
    measurements: 'Comprimento: 138 cm (tamanho M). Caimento descontraido no corpo.',
  },
  'kensington-abaya': {
    description: 'Confiança de alfaiataria numa abaya blazer estruturada — ombros limpos, trança inspirada em Al Khous e simplicidade arquitectónica em preto profundo. Para quem quer presença sem ruído. Criada em Abu Dhabi; envio mundial.',
    fabric: 'Crepe japones, fios de bordado tonais',
    measurements: 'Comprimento: 138 cm (tamanho M).',
  },
  'marylebone-abaya': {
    description: 'Uma abaya A-line pensada para levar joalharia — corte gracioso, fios Onyx removíveis e detalhes Knotted Line que reestiliza ao longo da estação. Criada em Abu Dhabi; envio mundial.',
    fabric: 'Mistura de la e seda, acabamento em cetim mate',
    measurements: 'Comprimento: 135 cm (tamanho M).',
  },
  'belgravia-abaya': {
    description: 'Uma abaya inspirada no bisht, acabada com bordo tecido à mão do tear Al Khous — património em proporção contemporânea. Criada em Abu Dhabi para quem veste com linhagem e clareza; envio mundial.',
    fabric: 'Exterior: mistura leve de crepe (80% poliester, 20% viscose); forro interior: (70% poliester, 30% viscose)',
    measurements: 'Comprimento: 138 cm (tamanho M). Comprimentos personalizados disponiveis sob pedido.',
  },
  'park-lane-abaya': {
    description: 'A abaya que assenta a sala antes de falar — corte A-line gracioso, lenço de ombro integrado e detalhes Knotted Line dourados. Da diplomacia diurna ao descanso nocturno, criada em Abu Dhabi; envio mundial.',
    fabric: 'Composicao do tecido - a finalizar com a producao.',
    measurements: 'Comprimento: 138 cm (tamanho M). Comprimentos personalizados disponiveis sob pedido.',
  },
  'hyde-park-set': {
    description: 'O vestir de viagem como deve ser — camisa oversized em crepe premium e calças palazzo de perna larga com botões Knotted Line, exclusivamente em Deep Black. Empacote uma vez; da partida ao jantar. Envio mundial a partir de Abu Dhabi.',
    fabric: 'Composicao do tecido - a finalizar com a producao.',
    measurements: 'Medidas - por confirmar.',
  },
  'mayfair-kaftan': {
    description: 'Um caftan fluido em crepe-chiffon com decote em V, vestido interior, detalhe de cachecol e alfinete Monogram dourado — facilidade de ocasião ainda ponderada. Criado em Abu Dhabi; envio mundial.',
    fabric: 'Crepe Chiffon (100% poliester), vestido interior: 100% poliester',
    measurements: 'Comprimento maximo da peca: 165 cm.',
  },
  'nothing-hill-kaftan': {
    description: 'Chiffon rosa pêssego suave, decote bateau refinado e linha fluida — rematado com o emblema dourado Bint Saeed. O caftan para noites que pedem leveza. Envio mundial a partir de Abu Dhabi.',
    fabric: 'Chiffon (100% poliester), vestido interior: 100% poliester',
    measurements: 'Comprimento maximo da peca: 165 cm.',
  },
    'knightsbridge-dress': {
    description: 'Um maxi feminino em mistura de algodão com detalhe halter tecido inspirado em Al Khous — elegância que acompanha a semana sem pedir que seja outra. Criado em Abu Dhabi; envio mundial.',
    fabric: 'Exterior: 60% algodao, 40% poliester',
    measurements: 'Length: 143 cm / 56.3 inches. Model height: 160 cm / 63 inches. Model wears size XS. Available in custom lengths upon request.',
  },
  'covent-garden-long-dress': {
    description: 'O vestido sob-abaya que a acompanha do trabalho às noites culturais — silhueta suave, bolsos laterais ocultos e forro de crepe que mantém a linha todo o dia. Criado em Abu Dhabi; envio mundial.',
    fabric: 'Crepe elastico, forro power mesh',
    measurements: 'Comprimento ate ao chao 148 cm (tamanho M).',
  },
  'hampstead-dress': {
    description: 'O maxi em crepe premium totalmente forrado que você procurava — decote drapeado, evasé suavemente esculpido e acabamento Al Talli na cintura reconhecido pela UNESCO. Sozinho ou sob uma abaya; criado em Abu Dhabi, EAU, envio mundial.',
    fabric: 'Mistura de la virgem, forro de seda, botoes mother-of-pearl',
    measurements: 'Caimento estruturado. Comprimento: 118 cm (tamanho M). Largura dos ombros: 42 cm.',
  },
  'covent-garden-signature-set': {
    description: 'A confiança do vestir coordenado — vestido Covent Garden e casaco de alfaiataria com detalhes inspirados em Al Khous, cortados para ir juntos ou separados. Criados em Abu Dhabi; envio mundial.',
    fabric: 'Mistura de algodao organico, acentos de linho, tingimentos naturais',
    measurements: 'Comprimento do top: 70 cm, comprimento da saia: 95 cm (tamanho M). Caimento descontraido.',
  },
  'soho-set': {
    description: 'Conjunto coordenado — camisa oversized e calças palazzo de perna larga com acabamento Al Talli tradicional — do dia à noite, património emirati sem fantasia. Criado em Abu Dhabi; envio mundial.',
    fabric: 'Composicao do tecido - a finalizar com a producao.',
    measurements: 'Caimento equilibrado; comprimentos de camisa e calcas confirmados com a tabela de tamanhos.',
  },
  'grosvenor-set': {
    description:
      'Set contemporâneo camisa e saia em cetim Champagne Cream — com detalhe Al Talli signature em redor da saia, duas strands de ónix incluídas e botões Knotted Line. Desenhado em Abu Dhabi; envio mundial.',
    fabric: 'Composição do tecido — a finalizar com a produção.',
    measurements:
      'Altura da modelo: 160 cm / 63 polegadas. A modelo veste tamanho XS. Comprimentos personalizados disponiveis sob pedido.',
  },
}

const ID_CATALOG_COPY: Record<string, CatalogFields> = {
  'knightsbridge-abaya-jacket': {
    description: 'Bagi perempuan yang menetapkan garis, bukan mengikutinya — abaya jaket dengan detail inspirasi Al Khous, bahu terstruktur, dan kancing Knotted Lines of Lineage. Sebagai outerwear halus di atas gaun atau sendiri sebagai busana Emirati kontemporer. Dibuat di Abu Dhabi; pengiriman dunia.',
    fabric: 'Luar: 60% Polyester, 40% Katun; gaun dalam: 100% Polyester',
    measurements:
      'Tinggi model: 160 cm / 63 inci. Model mengenakan ukuran XS. Panjang: 143 cm / 56,3 inci. Panjang kustom tersedia atas permintaan.',
  },
  'covent-garden-abaya': {
    description: 'Abaya linen ringan yang Anda ambil saat hari meminta kemudahan tanpa kehilangan ketelitian — trim Al Talli tradisional, placket tersembunyi, dan detail warisan Emirati yang terbaca dari dekat. Dibuat di Abu Dhabi; pengiriman dunia.',
    fabric: 'Campuran linen Eropa, lapisan katun',
    measurements: 'Panjang: 138 cm (ukuran M). Pas santai di bagian tubuh.',
  },
  'kensington-abaya': {
    description: 'Kepercayaan tailored dalam abaya blazer terstruktur — bahu bersih, kepang inspirasi Al Khous, dan kesederhanaan arsitektural hitam dalam. Untuk yang menginginkan kehadiran tanpa kebisingan. Dibuat di Abu Dhabi; pengiriman dunia.',
    fabric: 'Crepe Jepang, benang bordir tonal',
    measurements: 'Panjang: 138 cm (ukuran M).',
  },
  'marylebone-abaya': {
    description: 'Abaya A-line dirancang membawa perhiasan — potongan anggun, Onyx Strands lepas, dan detail Knotted Line yang Anda restyle sepanjang musim. Dibuat di Abu Dhabi; pengiriman dunia.',
    fabric: 'Campuran wool-sutra, binding satin matte',
    measurements: 'Panjang: 135 cm (ukuran M).',
  },
  'belgravia-abaya': {
    description: 'Abaya inspirasi bisht dengan trim tenun tangan dari anyaman Al Khous — warisan dalam proporsi kontemporer. Dibuat di Abu Dhabi bagi yang berbusana dengan garis keturunan dan kejelasan; pengiriman dunia.',
    fabric: 'Luar: Campuran crepe ringan (80% polyester, 20% viscose); lapisan dalam (70% polyester, 30% viscose)',
    measurements: 'Panjang: 138 cm (ukuran M). Panjang kustom tersedia atas permintaan.',
  },
  'park-lane-abaya': {
    description: 'Abaya yang menenangkan ruangan sebelum Anda berbicara — potongan A-line anggun, scarf bahu terintegrasi, dan detail Knotted Line bernada emas. Dari diplomasi siang ke kelembutan malam, dibuat di Abu Dhabi; pengiriman dunia.',
    fabric: 'Komposisi kain — akan difinalisasi bersama produksi.',
    measurements: 'Panjang: 138 cm (ukuran M). Panjang kustom tersedia atas permintaan.',
  },
  'hyde-park-set': {
    description: 'Busana perjalanan yang semestinya — kemeja crêpe premium oversized dengan celana palazzo kaki lebar dan kancing Knotted Line, khusus Deep Black. Kemas sekali; dari keberangkatan hingga makan malam. Pengiriman dunia dari Abu Dhabi.',
    fabric: 'Komposisi kain — akan difinalisasi bersama produksi.',
    measurements: 'Ukuran — akan dikonfirmasi.',
  },
  'mayfair-kaftan': {
    description: 'Kaftan crêpe-chiffon V-neck yang mengalir dengan inner dress, detail scarf, dan pin Monogram bernada emas — kemudahan acara yang tetap dipertimbangkan. Dibuat di Abu Dhabi; pengiriman dunia.',
    fabric: 'Crepe Chiffon (100% Polyester), Gaun dalam: 100% Polyester',
    measurements: 'Panjang maksimum garment: 165 cm.',
  },
  'nothing-hill-kaftan': {
    description: 'Chiffon peach pink lembut, leher bateau halus, dan garis mengalir — ditutup emblem emas Bint Saeed. Kaftan untuk malam yang meminta keringanan. Pengiriman dunia dari Abu Dhabi.',
    fabric: 'Chiffon (100% Polyester), Gaun dalam: 100% Polyester',
    measurements: 'Panjang maksimum garment: 165 cm.',
  },
  'knightsbridge-dress': {
    description: 'Maxi feminin campuran katun dengan detail halter tenun inspirasi Khous — elegan sepanjang minggu tanpa meminta Anda menjadi orang lain. Dibuat di Abu Dhabi; pengiriman dunia.',
    fabric: 'Luar: 60% Katun, 40% Polyester',
    measurements:
      'Siluet maxi feminin dengan lipatan kotak lembut terstruktur. Panjang kustom tersedia atas permintaan.',
  },
  'covent-garden-long-dress': {
    description: 'Gaun under-abaya yang membawa Anda dari kerja ke malam budaya — siluet lembut, saku samping tersembunyi, dan lining crêpe yang menjaga garis sepanjang hari. Dibuat di Abu Dhabi; pengiriman dunia.',
    fabric: 'Stretch crepe, lapisan power mesh',
    measurements: 'Length: 143 cm / 56.3 inches. Model height: 160 cm / 63 inches. Model wears size XS. Available in custom lengths upon request.',
  },
  'hampstead-dress': {
    description: 'Maxi crêpe premium berlapis penuh yang Anda cari — leher drapery, flare yang diukir lembut, dan trim Al Talli di pinggang yang diakui UNESCO. Dipakai sendiri atau di bawah abaya; dibuat di Abu Dhabi, UEA, pengiriman dunia.',
    fabric: 'Campuran Virgin Wool, lapisan sutra, kancing mother-of-pearl',
    measurements:
      'Pas terstruktur. Panjang: 118 cm (ukuran M). Lebar bahu: 42 cm.',
  },
  'covent-garden-signature-set': {
    description: 'Kepercayaan berbusana terkoordinasi — gaun Covent Garden dan jaket tailored dengan detail Al Khous, dipotong untuk bersama atau terpisah. Dibuat di Abu Dhabi; pengiriman dunia.',
    fabric: 'Campuran Organic Cotton, aksen linen, pewarna alami',
    measurements: 'Panjang atasan: 70 cm, panjang rok: 95 cm (ukuran M). Pas santai.',
  },
  'soho-set': {
    description: 'Set terkoordinasi — kemeja oversized dan celana palazzo kaki lebar dengan trim Al Talli tradisional — dari siang ke malam, warisan Emirati tanpa kostum. Dibuat di Abu Dhabi; pengiriman dunia.',
    fabric: 'Komposisi kain — akan difinalisasi bersama produksi.',
    measurements: 'Pas chapter; panjang kemeja dan celana dikonfirmasi sesuai size chart.',
  },
  'grosvenor-set': {
    description:
      'Set kontemporer kemeja dan rok satin Champagne Cream — dengan detail Al Talli signature di sekitar rok, dua strand onyx disertakan, dan kancing Knotted Line. Dirancang di Abu Dhabi; pengiriman dunia.',
    fabric: 'Komposisi kain — akan difinalisasi bersama produksi.',
    measurements:
      'Tinggi model: 160 cm / 63 inci. Model memakai ukuran XS. Panjang kustom tersedia atas permintaan.',
  },
}

const MS_CATALOG_COPY: Record<string, CatalogFields> = {
  'knightsbridge-abaya-jacket': {
    description: 'Untuk wanita yang menetapkan garis, bukan mengikutinya — abaya jaket dengan butiran inspirasi Al Khous, bahu berstruktur, dan butang Knotted Lines of Lineage. Sebagai outerwear halus atas gaun atau sendiri sebagai busana Emirati kontemporari. Dihasilkan di Abu Dhabi; penghantaran seluruh dunia.',
    fabric: 'Luar: 60% Polyester, 40% Kapas; gaun dalaman: 100% Polyester',
    measurements:
      'Tinggi model: 160 cm / 63 inci. Model memakai saiz XS. Panjang: 143 cm / 56.3 inci. Panjang tersuai tersedia atas permintaan.',
  },
  'covent-garden-abaya': {
    description: 'Abaya linen ringan yang anda ambil apabila hari meminta kemudahan tanpa hilang ketelitian — trim Al Talli tradisional, placket tersembunyi, dan butiran warisan Emirati yang terbaca dekat. Dihasilkan di Abu Dhabi; penghantaran seluruh dunia.',
    fabric: 'Campuran linen Eropah, lapisan kapas',
    measurements: 'Panjang: 138 cm (saiz M). Potongan santai di bahagian badan.',
  },
  'kensington-abaya': {
    description: 'Keyakinan terjahit dalam abaya blazer berstruktur — bahu bersih, kepang inspirasi Al Khous, dan kesederhanaan seni bina hitam dalam. Untuk yang mahukan kehadiran tanpa hingar. Dihasilkan di Abu Dhabi; penghantaran seluruh dunia.',
    fabric:
      'Luar: 80% polyester, 20% viscose; lapisan: 70% polyester, 30% viscose; simpai tenunan organza glitter hitam',
    measurements: 'Panjang: 138 cm (saiz M).',
  },
  'marylebone-abaya': {
    description: 'Abaya A-line direka untuk membawa barang kemas — potongan anggun, Onyx Strands boleh tanggal, dan butiran Knotted Line yang anda restyle sepanjang musim. Dihasilkan di Abu Dhabi; penghantaran seluruh dunia.',
    fabric: 'Campuran wool-sutera, binding satin matte',
    measurements: 'Panjang: 135 cm (saiz M).',
  },
  'belgravia-abaya': {
    description: 'Abaya inspirasi bisht dengan trim tenunan tangan daripada anyaman Al Khous — warisan dalam proporsi kontemporari. Dihasilkan di Abu Dhabi untuk yang berbusana dengan keturunan dan kejelasan; penghantaran seluruh dunia.',
    fabric: 'Luar: Campuran crepe ringan (80% polyester, 20% viscose); lapisan dalam (70% polyester, 30% viscose)',
    measurements: 'Panjang: 138 cm (saiz M). Panjang tersuai tersedia atas permintaan.',
  },
  'park-lane-abaya': {
    description: 'Abaya yang menenangkan bilik sebelum anda bercakap — potongan A-line anggun, skarf bahu bersepadu, dan butiran Knotted Line bernada emas. Dari diplomasi siang ke ketenangan malam, dihasilkan di Abu Dhabi; penghantaran seluruh dunia.',
    fabric: 'Komposisi kain — akan dimuktamadkan bersama pengeluaran.',
    measurements: 'Panjang: 138 cm (saiz M). Panjang tersuai tersedia atas permintaan.',
  },
  'hyde-park-set': {
    description: 'Busana perjalanan yang sepatutnya — baju crêpe premium oversized dengan seluar palazzo kaki lebar dan butang Knotted Line, khas Deep Black. Kemas sekali; dari berlepas hingga makan malam. Penghantaran seluruh dunia dari Abu Dhabi.',
    fabric: 'Komposisi kain — akan dimuktamadkan bersama pengeluaran.',
    measurements: 'Saiz — akan disahkan.',
  },
  'mayfair-kaftan': {
    description: 'Kaftan crêpe-chiffon leher V yang mengalir dengan inner dress, butiran skarf, dan pin Monogram bernada emas — kemudahan majlis yang masih dipertimbangkan. Dihasilkan di Abu Dhabi; penghantaran seluruh dunia.',
    fabric: 'Crepe Chiffon (100% Polyester), Gaun dalam: 100% Polyester',
    measurements: 'Panjang maksimum pakaian: 165 cm.',
  },
  'nothing-hill-kaftan': {
    description: 'Chiffon peach pink lembut, leher bateau halus, dan garis mengalir — ditutup emblem emas Bint Saeed. Kaftan untuk malam yang meminta keringanan. Penghantaran seluruh dunia dari Abu Dhabi.',
    fabric: 'Chiffon (100% Polyester), Gaun dalam: 100% Polyester',
    measurements: 'Panjang maksimum pakaian: 165 cm.',
  },
  'knightsbridge-dress': {
    description: 'Maxi feminin campuran kapas dengan butiran halter tenunan inspirasi Khous — keanggunan sepanjang minggu tanpa meminta anda menjadi orang lain. Dihasilkan di Abu Dhabi; penghantaran seluruh dunia.',
    fabric: 'Luar: 60% Kapas, 40% Poliester',
    measurements:
      'Siluet maxi feminin dengan lipatan kotak lembut berstruktur. Panjang tersuai tersedia atas permintaan.',
  },
  'covent-garden-long-dress': {
    description: 'Gaun under-abaya yang membawa anda dari kerja ke malam budaya — siluet lembut, poket sisi tersembunyi, dan lining crêpe yang mengekalkan garis sepanjang hari. Dihasilkan di Abu Dhabi; penghantaran seluruh dunia.',
    fabric: 'Stretch crepe, lapisan power mesh',
    measurements: 'Length: 143 cm / 56.3 inches. Model height: 160 cm / 63 inches. Model wears size XS. Available in custom lengths upon request.',
  },
  'hampstead-dress': {
    description: 'Maxi crêpe premium berlapik penuh yang anda cari — leher draperi, flare diukir lembut, dan trim Al Talli di pinggang yang diiktiraf UNESCO. Dipakai sendiri atau di bawah abaya; dihasilkan di Abu Dhabi, UAE, penghantaran seluruh dunia.',
    fabric: 'Campuran Virgin Wool, lapisan sutera, butang mother-of-pearl',
    measurements:
      'Potongan berstruktur. Panjang: 118 cm (saiz M). Lebar bahu: 42 cm.',
  },
  'covent-garden-signature-set': {
    description: 'Keyakinan berbusana terselaras — gaun Covent Garden dan jaket terjahit dengan butiran Al Khous, dipotong untuk bersama atau berasingan. Dihasilkan di Abu Dhabi; penghantaran seluruh dunia.',
    fabric: 'Campuran Organic Cotton, aksen linen, pewarna semula jadi',
    measurements: 'Panjang atasan: 70 cm, panjang rok: 95 cm (saiz M). Potongan santai.',
  },
  'soho-set': {
    description: 'Set terselaras — baju oversized dan seluar palazzo kaki lebar dengan trim Al Talli tradisional — dari siang ke malam, warisan Emirati tanpa kostum. Dihasilkan di Abu Dhabi; penghantaran seluruh dunia.',
    fabric: 'Komposisi kain — akan dimuktamadkan bersama pengeluaran.',
    measurements: 'Potongan mengikut bab; panjang kemeja dan seluar disahkan mengikut carta saiz.',
  },
  'grosvenor-set': {
    description:
      'Set kontemporari kemeja dan skirt satin Champagne Cream — dengan butiran Al Talli signature di sekitar skirt, dua strand onyx disertakan, dan butang Knotted Line. Direka di Abu Dhabi; penghantaran seluruh dunia.',
    fabric: 'Komposisi kain — akan dimuktamadkan bersama pengeluaran.',
    measurements:
      'Tinggi model: 160 cm / 63 inci. Model memakai saiz XS. Panjang tersuai tersedia atas permintaan.',
  },
}

export const CATALOG_COPY_BY_LOCALE: Partial<Record<AppLocale, Record<string, CatalogFields>>> = {
  ar: AR_CATALOG_COPY,
  fr: FR_CATALOG_COPY,
  de: DE_CATALOG_COPY,
  it: IT_CATALOG_COPY,
  es: ES_CATALOG_COPY,
  ru: RU_CATALOG_COPY,
  zh: ZH_CATALOG_COPY,
  nl: NL_CATALOG_COPY,
  pt: PT_CATALOG_COPY,
  id: ID_CATALOG_COPY,
  ms: MS_CATALOG_COPY,
}
