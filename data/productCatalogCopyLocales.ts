import type { AppLocale } from '@/lib/i18n/routing'

type CatalogFields = {
  description: string
  fabric: string
  measurements: string
}

const AR_CATALOG_COPY: Record<string, CatalogFields> = {
  'knightsbridge-abaya-jacket': {
    description:
      'عباية جاكيت خوص تجمع بين اللباس التقليدي والملابس الخارجية المعاصرة — بقصة مريحة، وتفاصيل مستوحاة من الخوص، وأكتاف مهيكلة، وأزرار Knotted Lines of Lineage المميزة. صُنعت في أبوظبي.',
    fabric: 'الخارجي: 60% بوليستر، 40% قطن؛ الفستان الداخلي: 100% بوليستر',
    measurements:
      'طول العارضة: 160 سم / 63 بوصة. العارضة ترتدي مقاس XS. الطول: 143 سم / 56.3 بوصة. تتوفر أطوال مخصصة عند الطلب.',
  },
  'covent-garden-abaya': {
    description: 'عباية كتان خفيفة مع حواف تقليدية من التلي، وإغلاق أمامي مخفي أنيق، وتفاصيل مستوحاة من التراث الإماراتي.',
    fabric: 'مزيج كتان أوروبي، بطانة قطنية',
    measurements: 'الطول: 138 سم (مقاس M). قصة مريحة عبر الجسم.',
  },
  'kensington-abaya': {
    description: 'عباية بليزر مهيكلة بأكتاف مفصلة وحواف مستوحاة من نسج الخوص التقليدي والتراث الإماراتي.',
    fabric: 'كريب ياباني، خيوط تطريز بدرجة لونية متناسقة',
    measurements: 'الطول: 138 سم (مقاس M).',
  },
  'marylebone-abaya': {
    description: 'عباية مميزة مفتوحة من الأمام بأكمام واسعة للارتداء فوق الفساتين أو الأطقم.',
    fabric: 'مزيج صوف-حرير، حواف ساتان مطفي',
    measurements: 'الطول: 135 سم (مقاس M).',
  },
  'belgravia-abaya': {
    description:
      'عباية مستوحاة من البِشت مع حواف منسوجة يدويًا مستوحاة من الخوص — تعبير معاصر عن التراث الإماراتي، صُنعت في أبوظبي.',
    fabric: 'الخارجي: مزيج كريب خفيف (80% بوليستر، 20% فيسكوز)؛ البطانة الداخلية: (70% بوليستر، 30% فيسكوز)',
    measurements: 'الطول: 138 سم (مقاس M). تتوفر أطوال مخصصة عند الطلب.',
  },
  'park-lane-abaya': {
    description: 'عباية يومية راقية بخطوط نظيفة وانسيابية ناعمة مصممة لحركة المدينة.',
    fabric: 'تركيبة القماش — سيتم اعتمادها نهائيًا مع الإنتاج.',
    measurements: 'الطول: 138 سم (مقاس M). تتوفر أطوال مخصصة عند الطلب.',
  },
  'hyde-park-set': {
    description: 'تصميم تمهيدي بانتظار تفاصيل المنتج الكاملة والصور.',
    fabric: 'تركيبة القماش — سيتم اعتمادها نهائيًا مع الإنتاج.',
    measurements: 'المقاسات — سيتم تأكيدها.',
  },
  'mayfair-kaftan': {
    description:
      'كفتان كريب شيفون بياقة V مع انسيابية ناعمة، وفستان داخلي، وتفصيل وشاح، ودبوس شعار ذهبي مميز.',
    fabric: 'كريب شيفون (100% بوليستر)، الفستان الداخلي: 100% بوليستر',
    measurements: 'الطول الأقصى للقطعة: 165 سم.',
  },
  'nothing-hill-kaftan': {
    description: 'كفتان شيفون بلون خوخي وردي ناعم بياقة bateau راقية، وانسيابية متدفقة، وشعار Bint Saeed الذهبي المميز.',
    fabric: 'شيفون (100% بوليستر)، الفستان الداخلي: 100% بوليستر',
    measurements: 'الطول الأقصى للقطعة: 165 سم.',
  },
    'knightsbridge-dress': {
    description: 'فستان ماكسي أنثوي من مزيج قطن مع تفاصيل halter منسوجة مستوحاة من الخوص — أناقة بلا جهد لحياة تتجاوز موسماً واحداً، صُنع في أبوظبي.',
    fabric: 'الخارجي: 60% قطن، 40% بوليستر',
    measurements: 'Length: 143 cm / 56.3 inches. Model height: 160 cm / 63 inches. Model wears size XS. Available in custom lengths upon request.',
  },
  'covent-garden-long-dress': {
    description: 'فستان عمودي انسيابي من كريب مطاطي مع فتحة خلفية عالية لسهولة الحركة.',
    fabric: 'كريب مطاطي، بطانة باور مش',
    measurements: 'طول حتى الأرض 148 سم (مقاس M).',
  },
  'hampstead-dress': {
    description: 'فستان بأكتاف مهيكلة وحواف تقليدية من التلي — للمساء أو المدينة بجذور من التراث الإماراتي.',
    fabric: 'مزيج صوف بكر، بطانة حرير، أزرار أم اللؤلؤ',
    measurements: 'قصة مهيكلة. الطول: 118 سم (مقاس M). عرض الكتف: 42 سم.',
  },
  'covent-garden-signature-set': {
    description: 'طقم خوص مميز من قطعتين — بلوزة وتنورة لإطلالة كاملة أو تنسيق منفصل.',
    fabric: 'مزيج قطن عضوي، لمسات كتان، أصباغ طبيعية',
    measurements: 'طول البلوزة: 70 سم، طول التنورة: 95 سم (مقاس M). قصة مريحة.',
  },
  'soho-set': {
    description: 'طقم منسّق من قميص واسع وبنطلون بالازو بأرجل عريضة مع حواف تقليدية من التلي — إطلالة نهارية إلى مسائية راقية تحتفي بالتراث الإماراتي.',
    fabric: 'تركيبة القماش — سيتم اعتمادها نهائيًا مع الإنتاج.',
    measurements: 'قصة متوازنة؛ يتم تأكيد أطوال القميص والبنطلون وفق جدول المقاسات.',
  },
}

const FR_CATALOG_COPY: Record<string, CatalogFields> = {
  'knightsbridge-abaya-jacket': {
    description:
      "Abaya veste Khous entre tenue traditionnelle et outerwear contemporain — silhouette decontractee, details inspires d'Al Khous, epaules structurees et boutons signature Knotted Lines of Lineage. Creee a Abu Dhabi.",
    fabric: 'Exterieur: 60% polyester, 40% coton; robe interieure: 100% polyester',
    measurements:
      'Taille du mannequin: 160 cm / 63 pouces. Le mannequin porte la taille XS. Longueur: 143 cm / 56.3 pouces. Longueurs sur mesure disponibles sur demande.',
  },
  'covent-garden-abaya': {
    description:
      'Abaya en lin leger avec bordure traditionnelle Al Talli, patte de boutonnage dissimulee et details inspires du patrimoine emirati.',
    fabric: 'Melange de lin europeen, doublure coton',
    measurements: 'Longueur: 138 cm (taille M). Coupe decontractee sur le corps.',
  },
  'kensington-abaya': {
    description:
      'Abaya blazer structuree avec epaules tailleur et finitions inspirees du tressage Khous traditionnel et du patrimoine emirati.',
    fabric: 'Crepe japonais, fils de broderie ton sur ton',
    measurements: 'Longueur: 138 cm (taille M).',
  },
  'marylebone-abaya': {
    description: 'Abaya signature ouverte sur le devant avec manches larges a superposer sur robes ou ensembles.',
    fabric: 'Melange laine-soie, bordure satin mat',
    measurements: 'Longueur: 135 cm (taille M).',
  },
  'belgravia-abaya': {
    description:
      "Abaya inspiree du Bisht avec bordure tissee main inspiree d'Al Khous — expression contemporaine du patrimoine emirati, creee a Abu Dhabi.",
    fabric: 'Exterieur: melange crepe leger (80% polyester, 20% viscose); doublure interieure: (70% polyester, 30% viscose)',
    measurements: 'Longueur: 138 cm (taille M). Longueurs sur mesure disponibles sur demande.',
  },
  'park-lane-abaya': {
    description: 'Abaya quotidienne raffinee avec ligne epuree et drape fluide pense pour les mouvements en ville.',
    fabric: 'Composition du tissu - finalisation avec la production.',
    measurements: 'Longueur: 138 cm (taille M). Longueurs sur mesure disponibles sur demande.',
  },
  'hyde-park-set': {
    description: 'Style provisoire en attente des details produit complets et des visuels.',
    fabric: 'Composition du tissu - finalisation avec la production.',
    measurements: 'Mesures - a confirmer.',
  },
  'mayfair-kaftan': {
    description:
      'Kaftan crepe-chiffon a encolure V avec drape fluide, robe interieure, detail echarpe et epingle embleme doree signature.',
    fabric: 'Crepe Chiffon (100% polyester), robe interieure: 100% polyester',
    measurements: 'Longueur maximale du vetement: 165 cm.',
  },
  'nothing-hill-kaftan': {
    description:
      'Kaftan en chiffon rose peche doux avec encolure bateau raffinee, silhouette fluide et embleme dore signature Bint Saeed.',
    fabric: 'Chiffon (100% polyester), robe interieure: 100% polyester',
    measurements: 'Longueur maximale du vetement: 165 cm.',
  },
    'knightsbridge-dress': {
    description:
      "Robe maxi feminine en melange de coton avec finitions halter tissees inspirees du Khous — elegance naturelle pour une vie au-dela d'une seule saison, creee a Abu Dhabi.",
    fabric: 'Exterieur : 60 % coton, 40 % polyester',
    measurements: 'Longueur : 143 cm / 56,3 pouces. Taille du mannequin : 160 cm / 63 pouces. Le mannequin porte la taille XS. Longueurs sur mesure disponibles sur demande.',
  },
  'covent-garden-long-dress': {
    description: 'Colonne epuree en crepe stretch avec fente dos haute pour faciliter le mouvement.',
    fabric: 'Crepe stretch, doublure power mesh',
    measurements: 'Longueur au sol 148 cm (taille M).',
  },
  'hampstead-dress': {
    description:
      'Robe a epaules structurees avec finition Al Talli traditionnelle — pour la soiree ou la ville, ancree dans le patrimoine emirati.',
    fabric: 'Melange laine vierge, doublure soie, boutons nacre',
    measurements: 'Coupe structuree. Longueur: 118 cm (taille M). Largeur d epaule: 42 cm.',
  },
  'covent-garden-signature-set': {
    description: 'Ensemble signature Khous deux pieces — haut et jupe pour un total look ou un styling separe.',
    fabric: 'Melange coton biologique, accents lin, teintures naturelles',
    measurements: 'Longueur haut: 70 cm, longueur jupe: 95 cm (taille M). Coupe decontractee.',
  },
  'soho-set': {
    description:
      'Ensemble coordonne chemise oversize et pantalon palazzo a jambes larges avec finition Al Talli traditionnelle — silhouette jour-soir raffinee celebrant le patrimoine emirati.',
    fabric: 'Composition du tissu - finalisation avec la production.',
    measurements: 'Coupe equilibree; longueurs chemise et pantalon confirmees selon le guide des tailles.',
  },
}

const DE_CATALOG_COPY: Record<string, CatalogFields> = {
  'knightsbridge-abaya-jacket': {
    description:
      'Khous Jacket-Abaya zwischen traditioneller Kleidung und zeitgenoessischer Outerwear - relaxte Silhouette mit Al-Khous-inspirierten Details, strukturierten Schultern und Signature-Knoepfen Knotted Lines of Lineage. Entstanden in Abu Dhabi.',
    fabric: 'Aussen: 60% Polyester, 40% Baumwolle; Innenkleid: 100% Polyester',
    measurements:
      'Modelgroesse: 160 cm / 63 Zoll. Model traegt Groesse XS. Laenge: 143 cm / 56.3 Zoll. Individuelle Laengen auf Anfrage verfuegbar.',
  },
  'covent-garden-abaya': {
    description:
      'Leichte Leinen-Abaya mit traditioneller Al-Talli-Borte, verdeckter Knopfleiste und Details aus dem emiratischen Erbe.',
    fabric: 'Europaeischer Leinenmix, Baumwollfutter',
    measurements: 'Laenge: 138 cm (Groesse M). Relaxte Passform am Koerper.',
  },
  'kensington-abaya': {
    description:
      'Strukturierte Blazer-Abaya mit Tailoring-Schultern und Besatz inspiriert von traditionellem Khous-Geflecht und emiratischem Erbe.',
    fabric: 'Japanischer Krepp, tonale Stickgarne',
    measurements: 'Laenge: 138 cm (Groesse M).',
  },
  'marylebone-abaya': {
    description: 'Offene Signature-Abaya mit weiten Aermeln zum Layern ueber Kleider oder Sets.',
    fabric: 'Woll-Seiden-Mix, matter Satin-Besatz',
    measurements: 'Laenge: 135 cm (Groesse M).',
  },
  'belgravia-abaya': {
    description:
      'Vom Bisht inspirierte Abaya mit handgewebtem, Al-Khous-inspiriertem Besatz - zeitgenoessischer Ausdruck emiratischen Erbes, gefertigt in Abu Dhabi.',
    fabric: 'Aussen: leichter Kreppmix (80% Polyester, 20% Viskose); Innenfutter: (70% Polyester, 30% Viskose)',
    measurements: 'Laenge: 138 cm (Groesse M). Individuelle Laengen auf Anfrage verfuegbar.',
  },
  'park-lane-abaya': {
    description: 'Raffinierte Alltags-Abaya mit klarer Linie und fliessendem Fall, entworfen fuer Bewegung in der Stadt.',
    fabric: 'Materialzusammensetzung - wird mit der Produktion finalisiert.',
    measurements: 'Laenge: 138 cm (Groesse M). Individuelle Laengen auf Anfrage verfuegbar.',
  },
  'hyde-park-set': {
    description: 'Platzhalter-Style, bis vollstaendige Produktdetails und Bildmaterial vorliegen.',
    fabric: 'Materialzusammensetzung - wird mit der Produktion finalisiert.',
    measurements: 'Masse - werden bestaetigt.',
  },
  'mayfair-kaftan': {
    description:
      'Crepe-Chiffon-Kaftan mit V-Ausschnitt, fliessendem Fall, Innenkleid, Schal-Detail und Signature-Emblemnadel in Goldoptik.',
    fabric: 'Crepe Chiffon (100% Polyester), Innenkleid: 100% Polyester',
    measurements: 'Maximale Kleidungslaenge: 165 cm.',
  },
  'nothing-hill-kaftan': {
    description:
      'Weicher pfirsichrosa Chiffon-Kaftan mit raffiniertem Bateau-Ausschnitt, fliessender Silhouette und goldfarbenem Signature-Emblem von Bint Saeed.',
    fabric: 'Chiffon (100% Polyester), Innenkleid: 100% Polyester',
    measurements: 'Maximale Kleidungslaenge: 165 cm.',
  },
    'knightsbridge-dress': {
    description: 'Feminines Maxikleid aus Baumwollmischung mit Khous-inspirierten Webdetails am Halter-Ausschnitt — mühelose Eleganz für ein Leben jenseits einer Saison, gefertigt in Abu Dhabi.',
    fabric: 'Aussenmaterial: 60 % Baumwolle, 40 % Polyester',
    measurements: 'Length: 143 cm / 56.3 inches. Model height: 160 cm / 63 inches. Model wears size XS. Available in custom lengths upon request.',
  },
  'covent-garden-long-dress': {
    description: 'Schmale Saeule aus Stretch-Krepp mit hohem Rueckenschlitz fuer leichte Bewegung.',
    fabric: 'Stretch-Krepp, Power-Mesh-Futter',
    measurements: 'Bodenlaenge 148 cm (Groesse M).',
  },
  'hampstead-dress': {
    description:
      'Kleid mit strukturierten Schultern und traditioneller Al-Talli-Borte - fuer Abend oder Stadt, verwurzelt im emiratischen Erbe.',
    fabric: 'Virgin-Wool-Mix, Seidenfutter, Perlmuttknoepfe',
    measurements: 'Strukturierte Passform. Laenge: 118 cm (Groesse M). Schulterbreite: 42 cm.',
  },
  'covent-garden-signature-set': {
    description: 'Khous-Signature-Set aus zwei Teilen - Oberteil und Rock fuer Gesamtlook oder separates Styling.',
    fabric: 'Bio-Baumwollmix, Leinen-Akzente, natuerliche Faerbung',
    measurements: 'Oberteillaenge: 70 cm, Rocklaenge: 95 cm (Groesse M). Relaxte Passform.',
  },
  'soho-set': {
    description:
      'Koordiniertes Set aus Oversize-Hemd und weiter Palazzo-Hose mit traditioneller Al-Talli-Borte - gepflegter Day-to-Evening-Look mit emiratischer Heritage-Note.',
    fabric: 'Materialzusammensetzung - wird mit der Produktion finalisiert.',
    measurements: 'Ausgewogene Passform; Hemd- und Hosenlaengen gemaess Groessentabelle bestaetigt.',
  },
}

const IT_CATALOG_COPY: Record<string, CatalogFields> = {
  'knightsbridge-abaya-jacket': {
    description:
      "Abaya giacca Khous tra vestizione tradizionale e outerwear contemporaneo - silhouette rilassata con dettagli ispirati ad Al Khous, spalle strutturate e bottoni signature Knotted Lines of Lineage. Creata ad Abu Dhabi.",
    fabric: 'Esterno: 60% poliestere, 40% cotone; abito interno: 100% poliestere',
    measurements:
      'Altezza modella: 160 cm / 63 pollici. La modella indossa la taglia XS. Lunghezza: 143 cm / 56.3 pollici. Lunghezze personalizzate disponibili su richiesta.',
  },
  'covent-garden-abaya': {
    description:
      'Abaya in lino leggero con bordatura tradizionale Al Talli, patta frontale nascosta pulita e dettagli di eredita emiratina.',
    fabric: 'Misto lino europeo, fodera in cotone',
    measurements: 'Lunghezza: 138 cm (taglia M). Vestibilita rilassata sul corpo.',
  },
  'kensington-abaya': {
    description:
      'Abaya blazer strutturata con spalle sartoriali e finiture ispirate all intreccio Khous tradizionale e all eredita emiratina.',
    fabric: 'Crepe giapponese, filati da ricamo tono su tono',
    measurements: 'Lunghezza: 138 cm (taglia M).',
  },
  'marylebone-abaya': {
    description: 'Abaya signature aperta sul davanti con maniche ampie da sovrapporre ad abiti o set.',
    fabric: 'Misto lana-seta, bordatura in raso opaco',
    measurements: 'Lunghezza: 135 cm (taglia M).',
  },
  'belgravia-abaya': {
    description:
      "Abaya ispirata al Bisht con finitura intrecciata a mano ispirata ad Al Khous - espressione contemporanea dell eredita emiratina, creata ad Abu Dhabi.",
    fabric: 'Esterno: misto crepe leggero (80% poliestere, 20% viscosa); fodera interna: (70% poliestere, 30% viscosa)',
    measurements: 'Lunghezza: 138 cm (taglia M). Lunghezze personalizzate disponibili su richiesta.',
  },
  'park-lane-abaya': {
    description: 'Abaya quotidiana raffinata con linea pulita e drappeggio fluido pensato per il movimento urbano.',
    fabric: 'Composizione tessuto - da finalizzare con la produzione.',
    measurements: 'Lunghezza: 138 cm (taglia M). Lunghezze personalizzate disponibili su richiesta.',
  },
  'hyde-park-set': {
    description: 'Stile placeholder in attesa di dettagli prodotto completi e immagini.',
    fabric: 'Composizione tessuto - da finalizzare con la produzione.',
    measurements: 'Misure - da confermare.',
  },
  'mayfair-kaftan': {
    description:
      'Kaftan in crepe-chiffon con scollo a V, drappeggio fluido, abito interno, dettaglio foulard e spilla emblema dorata signature.',
    fabric: 'Crepe Chiffon (100% poliestere), abito interno: 100% poliestere',
    measurements: 'Lunghezza massima capo: 165 cm.',
  },
  'nothing-hill-kaftan': {
    description:
      'Kaftan in chiffon peach pink morbido con raffinato scollo bateau, silhouette fluida ed emblema dorato signature Bint Saeed.',
    fabric: 'Chiffon (100% poliestere), abito interno: 100% poliestere',
    measurements: 'Lunghezza massima capo: 165 cm.',
  },
    'knightsbridge-dress': {
    description: 'Abito maxi femminile in misto cotone con dettagli tessuti halter ispirati al Khous — eleganza naturale per una vita oltre una singola stagione, creato ad Abu Dhabi.',
    fabric: 'Esterno: 60% cotone, 40% poliestere',
    measurements: 'Length: 143 cm / 56.3 inches. Model height: 160 cm / 63 inches. Model wears size XS. Available in custom lengths upon request.',
  },
  'covent-garden-long-dress': {
    description: 'Colonna slanciata in crepe stretch con spaccco posteriore alto per facilita di movimento.',
    fabric: 'Crepe stretch, fodera power mesh',
    measurements: 'Lunghezza a terra 148 cm (taglia M).',
  },
  'hampstead-dress': {
    description:
      'Abito con spalle strutturate e finitura tradizionale Al Talli - per sera o citta con radici nell eredita emiratina.',
    fabric: 'Misto lana vergine, fodera in seta, bottoni in madreperla',
    measurements: 'Vestibilita strutturata. Lunghezza: 118 cm (taglia M). Larghezza spalle: 42 cm.',
  },
  'covent-garden-signature-set': {
    description: 'Set signature Khous in due pezzi - top e gonna per look completo o styling separato.',
    fabric: 'Misto cotone biologico, accenti in lino, tinture naturali',
    measurements: 'Lunghezza top: 70 cm, lunghezza gonna: 95 cm (taglia M). Vestibilita rilassata.',
  },
  'soho-set': {
    description:
      'Set coordinato camicia oversize e pantaloni palazzo a gamba larga con finitura tradizionale Al Talli - look raffinato giorno-sera che celebra l eredita emiratina.',
    fabric: 'Composizione tessuto - da finalizzare con la produzione.',
    measurements: 'Vestibilita bilanciata; lunghezze camicia e pantaloni confermate secondo tabella taglie.',
  },
}

const ES_CATALOG_COPY: Record<string, CatalogFields> = {
  'knightsbridge-abaya-jacket': {
    description:
      'Abaya chaqueta Khous entre vestimenta tradicional y outerwear contemporaneo - silueta relajada con detalles inspirados en Al Khous, hombros estructurados y botones signature Knotted Lines of Lineage. Creada en Abu Dhabi.',
    fabric: 'Exterior: 60% poliester, 40% algodon; vestido interior: 100% poliester',
    measurements:
      'Altura de la modelo: 160 cm / 63 pulgadas. La modelo lleva talla XS. Largo: 143 cm / 56.3 pulgadas. Largo personalizado disponible bajo solicitud.',
  },
  'covent-garden-abaya': {
    description:
      'Abaya de lino ligero con ribete tradicional Al Talli, tapeta oculta limpia y detalles de herencia emirati.',
    fabric: 'Mezcla de lino europeo, forro de algodon',
    measurements: 'Largo: 138 cm (talla M). Corte relajado en el cuerpo.',
  },
  'kensington-abaya': {
    description:
      'Abaya blazer estructurada con hombros de sastreria y acabado inspirado en el trenzado Khous tradicional y la herencia emirati.',
    fabric: 'Crepe japones, hilos de bordado tonales',
    measurements: 'Largo: 138 cm (talla M).',
  },
  'marylebone-abaya': {
    description: 'Abaya signature abierta al frente con mangas amplias para llevar sobre vestidos o sets.',
    fabric: 'Mezcla de lana y seda, ribete de satin mate',
    measurements: 'Largo: 135 cm (talla M).',
  },
  'belgravia-abaya': {
    description:
      'Abaya inspirada en el Bisht con ribete tejido a mano inspirado en Al Khous - expresion contemporanea de la herencia emirati, creada en Abu Dhabi.',
    fabric: 'Exterior: mezcla ligera de crepe (80% poliester, 20% viscosa); forro interior: (70% poliester, 30% viscosa)',
    measurements: 'Largo: 138 cm (talla M). Largo personalizado disponible bajo solicitud.',
  },
  'park-lane-abaya': {
    description: 'Abaya diaria refinada con linea limpia y caida fluida disenada para el movimiento urbano.',
    fabric: 'Composicion del tejido - por finalizar con produccion.',
    measurements: 'Largo: 138 cm (talla M). Largo personalizado disponible bajo solicitud.',
  },
  'hyde-park-set': {
    description: 'Estilo placeholder en espera de detalles completos de producto e imagenes.',
    fabric: 'Composicion del tejido - por finalizar con produccion.',
    measurements: 'Medidas - por confirmar.',
  },
  'mayfair-kaftan': {
    description:
      'Kaftan de crepe chiffon con escote en V, caida fluida, vestido interior, detalle de panuelo y alfiler emblema dorado signature.',
    fabric: 'Crepe Chiffon (100% poliester), vestido interior: 100% poliester',
    measurements: 'Largo maximo de la prenda: 165 cm.',
  },
  'nothing-hill-kaftan': {
    description:
      'Kaftan de chiffon peach pink suave con refinado escote bateau, silueta fluida y emblema dorado signature de Bint Saeed.',
    fabric: 'Chiffon (100% poliester), vestido interior: 100% poliester',
    measurements: 'Largo maximo de la prenda: 165 cm.',
  },
    'knightsbridge-dress': {
    description: 'Vestido maxi femenino en mezcla de algodon con detalles tejidos halter inspirados en Khous — elegancia natural para una vida mas alla de una temporada, creado en Abu Dhabi.',
    fabric: 'Exterior: 60% algodon, 40% poliester',
    measurements: 'Length: 143 cm / 56.3 inches. Model height: 160 cm / 63 inches. Model wears size XS. Available in custom lengths upon request.',
  },
  'covent-garden-long-dress': {
    description: 'Columna estilizada en crepe elastico con abertura trasera alta para mayor libertad de movimiento.',
    fabric: 'Crepe elastico, forro power mesh',
    measurements: 'Largo al suelo 148 cm (talla M).',
  },
  'hampstead-dress': {
    description:
      'Vestido con hombros estructurados y ribete tradicional Al Talli - para noche o ciudad con raices de herencia emirati.',
    fabric: 'Mezcla de lana virgen, forro de seda, botones de nacar',
    measurements: 'Corte estructurado. Largo: 118 cm (talla M). Ancho de hombros: 42 cm.',
  },
  'covent-garden-signature-set': {
    description: 'Set signature Khous de dos piezas - top y falda para look completo o estilizado por separado.',
    fabric: 'Mezcla de algodon organico, acentos de lino, tintes naturales',
    measurements: 'Largo del top: 70 cm, largo de la falda: 95 cm (talla M). Corte relajado.',
  },
  'soho-set': {
    description:
      'Set coordinado de camisa oversize y pantalones palazzo de pierna ancha con ribete tradicional Al Talli - look dia-noche pulido que celebra la herencia emirati.',
    fabric: 'Composicion del tejido - por finalizar con produccion.',
    measurements: 'Corte equilibrado; largos de camisa y pantalon confirmados segun tabla de tallas.',
  },
}

const RU_CATALOG_COPY: Record<string, CatalogFields> = {
  'knightsbridge-abaya-jacket': {
    description:
      'Жакет-абайя Khous между традиционным образом и современным outerwear — свободный силуэт, детали в духе Al Khous, структурные плечи и фирменные пуговицы Knotted Lines of Lineage. Создана в Абу-Даби.',
    fabric: 'Верх: 60% полиэстер, 40% хлопок; внутреннее платье: 100% полиэстер',
    measurements:
      'Рост модели: 160 см / 63 дюйма. Модель носит размер XS. Длина: 143 см / 56.3 дюйма. Индивидуальная длина доступна по запросу.',
  },
  'covent-garden-abaya': {
    description:
      'Легкая льняная абайя с традиционной отделкой Al Talli, аккуратной скрытой планкой и деталями эмиратского наследия.',
    fabric: 'Европейский льняной микс, хлопковая подкладка',
    measurements: 'Длина: 138 см (размер M). Свободная посадка по фигуре.',
  },
  'kensington-abaya': {
    description:
      'Структурная абайя-блейзер с портновскими плечами и отделкой, вдохновленной традиционным плетением Khous и эмиратским наследием.',
    fabric: 'Японский креп, тональные нити вышивки',
    measurements: 'Длина: 138 см (размер M).',
  },
  'marylebone-abaya': {
    description: 'Фирменная абайя с открытым передом и широкими рукавами для многослойных образов с платьями или комплектами.',
    fabric: 'Смесь шерсти и шелка, матовая атласная окантовка',
    measurements: 'Длина: 135 см (размер M).',
  },
  'belgravia-abaya': {
    description:
      'Абайя в стиле Bisht с ручной отделкой, вдохновленной Al Khous — современное прочтение эмиратского наследия, создано в Абу-Даби.',
    fabric: 'Верх: легкий креповый микс (80% полиэстер, 20% вискоза); внутренняя подкладка: (70% полиэстер, 30% вискоза)',
    measurements: 'Длина: 138 см (размер M). Индивидуальная длина доступна по запросу.',
  },
  'park-lane-abaya': {
    description: 'Утонченная повседневная абайя с чистой линией и плавным драпированием для городского ритма.',
    fabric: 'Состав ткани — будет финализирован с производством.',
    measurements: 'Длина: 138 см (размер M). Индивидуальная длина доступна по запросу.',
  },
  'hyde-park-set': {
    description: 'Временный стиль до появления полных деталей продукта и изображений.',
    fabric: 'Состав ткани — будет финализирован с производством.',
    measurements: 'Параметры — будут подтверждены.',
  },
  'mayfair-kaftan': {
    description:
      'Кафтан из креп-шифона с V-образным вырезом, струящимся драпированием, внутренним платьем, деталью шарфа и фирменной золотистой булавкой-эмблемой.',
    fabric: 'Crepe Chiffon (100% полиэстер), внутреннее платье: 100% полиэстер',
    measurements: 'Максимальная длина изделия: 165 см.',
  },
  'nothing-hill-kaftan': {
    description:
      'Мягкий персиково-розовый шифоновый кафтан с утонченным вырезом bateau, струящимся силуэтом и фирменной золотистой эмблемой Bint Saeed.',
    fabric: 'Chiffon (100% полиэстер), внутреннее платье: 100% полиэстер',
    measurements: 'Максимальная длина изделия: 165 см.',
  },
    'knightsbridge-dress': {
    description: 'Женственное платье макси из хлопковой смеси с отделкой halter, вдохновлённой Khous — естественная элегантность для жизни за пределами одного сезона, создано в Абу-Даби.',
    fabric: 'Верх: 60% хлопок, 40% полиэстер',
    measurements: 'Length: 143 cm / 56.3 inches. Model height: 160 cm / 63 inches. Model wears size XS. Available in custom lengths upon request.',
  },
  'covent-garden-long-dress': {
    description: 'Стройный силуэт-колонна из эластичного крепа с высоким задним разрезом для легкости движений.',
    fabric: 'Эластичный креп, подкладка power mesh',
    measurements: 'Длина в пол 148 см (размер M).',
  },
  'hampstead-dress': {
    description:
      'Платье со структурными плечами и традиционной отделкой Al Talli — для вечера или города с корнями в эмиратском наследии.',
    fabric: 'Смесь virgin wool, шелковая подкладка, перламутровые пуговицы',
    measurements: 'Структурная посадка. Длина: 118 см (размер M). Ширина плеч: 42 см.',
  },
  'covent-garden-signature-set': {
    description: 'Фирменный комплект Khous из двух частей — топ и юбка для цельного образа или раздельной стилизации.',
    fabric: 'Смесь organic cotton, акценты льна, натуральные красители',
    measurements: 'Длина топа: 70 см, длина юбки: 95 см (размер M). Свободная посадка.',
  },
  'soho-set': {
    description:
      'Координированный комплект из оверсайз-рубашки и широких брюк-palazzo с традиционной отделкой Al Talli — утонченный образ day-to-evening, отражающий эмиратское наследие.',
    fabric: 'Состав ткани — будет финализирован с производством.',
    measurements: 'Сбалансированная посадка; длины рубашки и брюк подтверждаются по размерной сетке.',
  },
}

const ZH_CATALOG_COPY: Record<string, CatalogFields> = {
  'knightsbridge-abaya-jacket': {
    description:
      'Khous 夹克式 abaya 融合传统着装与当代外套风格——宽松廓形、Al Khous 灵感细节、结构肩线，以及标志性 Knotted Lines of Lineage 纽扣。创作于阿布扎比。',
    fabric: '外层：60% 聚酯纤维，40% 棉；内搭连衣裙：100% 聚酯纤维',
    measurements:
      '模特身高：160 厘米 / 63 英寸。模特穿着 XS。衣长：143 厘米 / 56.3 英寸。支持按需定制长度。',
  },
  'covent-garden-abaya': {
    description: '轻盈亚麻 abaya，配传统 Al Talli 饰边、利落隐藏式门襟，以及阿联酋传承细节。',
    fabric: '欧洲亚麻混纺，棉质里衬',
    measurements: '衣长：138 厘米（M 码）。身体部位为宽松版型。',
  },
  'kensington-abaya': {
    description: '结构感 blazer abaya，配精裁肩部与受传统 Khous 编织及阿联酋传承启发的饰边。',
    fabric: '日本绉纱，同色系刺绣线',
    measurements: '衣长：138 厘米（M 码）。',
  },
  'marylebone-abaya': {
    description: '标志性前开式 abaya，宽袖设计，可叠穿于连衣裙或套装外。',
    fabric: '羊毛真丝混纺，哑光缎面包边',
    measurements: '衣长：135 厘米（M 码）。',
  },
  'belgravia-abaya': {
    description:
      '受 Bisht 启发的 abaya，配手工编织 Al Khous 灵感饰边——当代演绎阿联酋传统，于阿布扎比打造。',
    fabric: '外层：轻盈绉纱混纺（80% 聚酯纤维，20% 粘胶纤维）；内里： （70% 聚酯纤维，30% 粘胶纤维）',
    measurements: '衣长：138 厘米（M 码）。支持按需定制长度。',
  },
  'park-lane-abaya': {
    description: '日常精致 abaya，线条利落、垂坠流畅，为都市行动而设计。',
    fabric: '面料成分——将与生产环节最终确认。',
    measurements: '衣长：138 厘米（M 码）。支持按需定制长度。',
  },
  'hyde-park-set': {
    description: '占位款式，待补充完整产品信息与图像。',
    fabric: '面料成分——将与生产环节最终确认。',
    measurements: '尺码信息——待确认。',
  },
  'mayfair-kaftan': {
    description: 'V 领绉纱雪纺 kaftan，流动垂感，含内搭连衣裙、围巾细节与标志性金色徽章别针。',
    fabric: 'Crepe Chiffon（100% 聚酯纤维），内搭连衣裙：100% 聚酯纤维',
    measurements: '成衣最大长度：165 厘米。',
  },
  'nothing-hill-kaftan': {
    description:
      '柔和蜜桃粉雪纺 kaftan，精致 bateau 领口，流动廓形，搭配 Bint Saeed 标志性金色徽章。',
    fabric: 'Chiffon（100% 聚酯纤维），内搭连衣裙：100% 聚酯纤维',
    measurements: '成衣最大长度：165 厘米。',
  },
    'knightsbridge-dress': {
    description: '棉混纺女性长款连衣裙，配 Khous 灵感 halter 编织细节——为超越单一季节的生活而打造的毫不费力优雅，于阿布扎比制作。',
    fabric: '外层：60% 棉，40% 聚酯纤维',
    measurements: 'Length: 143 cm / 56.3 inches. Model height: 160 cm / 63 inches. Model wears size XS. Available in custom lengths upon request.',
  },
  'covent-garden-long-dress': {
    description: '修长弹力绉纱柱形长裙，配高位后开衩，行动更自如。',
    fabric: '弹力绉纱，power mesh 里衬',
    measurements: '及地长度 148 厘米（M 码）。',
  },
  'hampstead-dress': {
    description: '结构肩连衣裙配传统 Al Talli 饰边——适合晚间与都市场景，并植根于阿联酋传承。',
    fabric: '初剪羊毛混纺，真丝里衬，珍珠母纽扣',
    measurements: '结构化版型。衣长：118 厘米（M 码）。肩宽：42 厘米。',
  },
  'covent-garden-signature-set': {
    description: '标志性 Khous 双件套——上衣与半裙，可成套穿着或拆分搭配。',
    fabric: '有机棉混纺，亚麻点缀，天然染料',
    measurements: '上衣长度：70 厘米，半裙长度：95 厘米（M 码）。宽松版型。',
  },
  'soho-set': {
    description:
      '宽松衬衫与阔腿 palazzo 长裤协调套装，配传统 Al Talli 饰边——从日间到夜间的精致造型，礼赞阿联酋传承。',
    fabric: '面料成分——将与生产环节最终确认。',
    measurements: '平衡版型；衬衫与长裤长度将按尺码表确认。',
  },
}

const NL_CATALOG_COPY: Record<string, CatalogFields> = {
  'knightsbridge-abaya-jacket': {
    description:
      'Khous jacket-abaya tussen traditionele kleding en eigentijdse outerwear - relaxed silhouet met Al Khous-geinspireerde details, gestructureerde schouders en signature Knotted Lines of Lineage-knopen. Gemaakt in Abu Dhabi.',
    fabric: 'Buitenkant: 60% polyester, 40% katoen; binnenjurk: 100% polyester',
    measurements:
      'Lengte model: 160 cm / 63 inch. Model draagt maat XS. Lengte: 143 cm / 56.3 inch. Maatwerk lengtes beschikbaar op aanvraag.',
  },
  'covent-garden-abaya': {
    description:
      'Lichte linnen abaya met traditionele Al Talli-afwerking, een strakke verborgen sluiting en details uit Emirati erfgoed.',
    fabric: 'Europese linnenmix, katoenen voering',
    measurements: 'Lengte: 138 cm (maat M). Relaxte pasvorm over het lichaam.',
  },
  'kensington-abaya': {
    description:
      'Gestructureerde blazer-abaya met getailleerde schouders en afwerking geinspireerd op traditioneel Khous-vlechtwerk en Emirati erfgoed.',
    fabric: 'Japanse crêpe, tonale borduurgarens',
    measurements: 'Lengte: 138 cm (maat M).',
  },
  'marylebone-abaya': {
    description: 'Openvallende signature-abaya met wijde mouwen om over jurken of sets te layeren.',
    fabric: 'Wol-zijde mix, matte satijnen afwerking',
    measurements: 'Lengte: 135 cm (maat M).',
  },
  'belgravia-abaya': {
    description:
      'Op de Bisht geinspireerde abaya met handgeweven Al Khous-geinspireerde afwerking - een eigentijdse expressie van Emirati erfgoed, gemaakt in Abu Dhabi.',
    fabric: 'Buitenkant: lichte crêpemix (80% polyester, 20% viscose); binnenvoering: (70% polyester, 30% viscose)',
    measurements: 'Lengte: 138 cm (maat M). Maatwerk lengtes beschikbaar op aanvraag.',
  },
  'park-lane-abaya': {
    description: 'Verfijnde dagelijkse abaya met een strakke lijn en vloeiende drape voor beweging in de stad.',
    fabric: 'Stofsamenstelling - wordt met productie afgerond.',
    measurements: 'Lengte: 138 cm (maat M). Maatwerk lengtes beschikbaar op aanvraag.',
  },
  'hyde-park-set': {
    description: 'Placeholder-stijl in afwachting van volledige productdetails en beeldmateriaal.',
    fabric: 'Stofsamenstelling - wordt met productie afgerond.',
    measurements: 'Maten - worden bevestigd.',
  },
  'mayfair-kaftan': {
    description:
      'Crêpe-chiffon V-hals kaftan met vloeiende drape, binnenjurk, sjaaldetail en signature goudkleurige embleemspeld.',
    fabric: 'Crepe Chiffon (100% polyester), binnenjurk: 100% polyester',
    measurements: 'Maximale kledinglengte: 165 cm.',
  },
  'nothing-hill-kaftan': {
    description:
      'Zachte peach-pink chiffon kaftan met verfijnde bateau-hals, vloeiend silhouet en signature goudkleurig Bint Saeed-embleem.',
    fabric: 'Chiffon (100% polyester), binnenjurk: 100% polyester',
    measurements: 'Maximale kledinglengte: 165 cm.',
  },
    'knightsbridge-dress': {
    description: 'Feminine maxi-jurk in katoenmix met Khous-geinspireerde geweven halterdetails — moeiteloze elegantie voor een leven voorbij een enkel seizoen, gemaakt in Abu Dhabi.',
    fabric: 'Buitenkant: 60% katoen, 40% polyester',
    measurements: 'Length: 143 cm / 56.3 inches. Model height: 160 cm / 63 inches. Model wears size XS. Available in custom lengths upon request.',
  },
  'covent-garden-long-dress': {
    description: 'Slank kolomsilhouet in stretchcrêpe met hoge rugsplit voor bewegingsgemak.',
    fabric: 'Stretchcrêpe, power mesh voering',
    measurements: 'Vloerlengte 148 cm (maat M).',
  },
  'hampstead-dress': {
    description:
      'Jurk met gestructureerde schouders en traditionele Al Talli-afwerking - voor avond of stad, met wortels in Emirati erfgoed.',
    fabric: 'Virgin-wolmix, zijden voering, parelmoer knopen',
    measurements: 'Gestructureerde pasvorm. Lengte: 118 cm (maat M). Schouderbreedte: 42 cm.',
  },
  'covent-garden-signature-set': {
    description: 'Khous signature tweedelige set - top en rok voor een complete look of los te stylen.',
    fabric: 'Organic cotton mix, linnen accenten, natuurlijke kleurstoffen',
    measurements: 'Toplengte: 70 cm, roklengte: 95 cm (maat M). Relaxte pasvorm.',
  },
  'soho-set': {
    description:
      'Gecoordineerde set met oversized overhemd en wide-leg palazzo-broek met traditionele Al Talli-afwerking - verzorgde dag-tot-avond looks die Emirati erfgoed vieren.',
    fabric: 'Stofsamenstelling - wordt met productie afgerond.',
    measurements: 'Gebalanceerde pasvorm; overhemd- en broeklengtes bevestigd volgens maattabel.',
  },
}

const PT_CATALOG_COPY: Record<string, CatalogFields> = {
  'knightsbridge-abaya-jacket': {
    description:
      'Abaya casaco Khous entre o vestir tradicional e a outerwear contemporanea - silhueta descontraida com detalhes inspirados em Al Khous, ombros estruturados e botoes signature Knotted Lines of Lineage. Criada em Abu Dhabi.',
    fabric: 'Exterior: 60% poliester, 40% algodao; vestido interior: 100% poliester',
    measurements:
      'Altura da modelo: 160 cm / 63 polegadas. A modelo veste tamanho XS. Comprimento: 143 cm / 56.3 polegadas. Comprimentos personalizados disponiveis sob pedido.',
  },
  'covent-garden-abaya': {
    description:
      'Abaya de linho leve com acabamento tradicional Al Talli, carcela oculta limpa e detalhes de heranca Emirati.',
    fabric: 'Mistura de linho europeu, forro de algodao',
    measurements: 'Comprimento: 138 cm (tamanho M). Caimento descontraido no corpo.',
  },
  'kensington-abaya': {
    description:
      'Abaya blazer estruturada com ombros de alfaiataria e acabamento inspirado na tecelagem tradicional Khous e na heranca Emirati.',
    fabric: 'Crepe japones, fios de bordado tonais',
    measurements: 'Comprimento: 138 cm (tamanho M).',
  },
  'marylebone-abaya': {
    description: 'Abaya signature aberta na frente com mangas amplas para sobrepor a vestidos ou conjuntos.',
    fabric: 'Mistura de la e seda, acabamento em cetim mate',
    measurements: 'Comprimento: 135 cm (tamanho M).',
  },
  'belgravia-abaya': {
    description:
      'Abaya inspirada no Bisht com acabamento tecido a mao inspirado em Al Khous - expressao contemporanea da heranca Emirati, criada em Abu Dhabi.',
    fabric: 'Exterior: mistura leve de crepe (80% poliester, 20% viscose); forro interior: (70% poliester, 30% viscose)',
    measurements: 'Comprimento: 138 cm (tamanho M). Comprimentos personalizados disponiveis sob pedido.',
  },
  'park-lane-abaya': {
    description: 'Abaya diaria refinada com linha limpa e drapeado fluido desenhado para movimento urbano.',
    fabric: 'Composicao do tecido - a finalizar com a producao.',
    measurements: 'Comprimento: 138 cm (tamanho M). Comprimentos personalizados disponiveis sob pedido.',
  },
  'hyde-park-set': {
    description: 'Estilo placeholder aguardando detalhes completos do produto e imagem.',
    fabric: 'Composicao do tecido - a finalizar com a producao.',
    measurements: 'Medidas - por confirmar.',
  },
  'mayfair-kaftan': {
    description:
      'Kaftan de crepe-chiffon com decote em V, drapeado fluido, vestido interior, detalhe de echarpe e alfinete emblema dourado signature.',
    fabric: 'Crepe Chiffon (100% poliester), vestido interior: 100% poliester',
    measurements: 'Comprimento maximo da peca: 165 cm.',
  },
  'nothing-hill-kaftan': {
    description:
      'Kaftan em chiffon peach pink suave com refinado decote bateau, silhueta fluida e emblema dourado signature Bint Saeed.',
    fabric: 'Chiffon (100% poliester), vestido interior: 100% poliester',
    measurements: 'Comprimento maximo da peca: 165 cm.',
  },
    'knightsbridge-dress': {
    description: 'Vestido maxi feminino em mistura de algodao com detalhes tecidos halter inspirados no Khous — elegancia natural para uma vida alem de uma estacao, criado em Abu Dhabi.',
    fabric: 'Exterior: 60% algodao, 40% poliester',
    measurements: 'Length: 143 cm / 56.3 inches. Model height: 160 cm / 63 inches. Model wears size XS. Available in custom lengths upon request.',
  },
  'covent-garden-long-dress': {
    description: 'Coluna esguia em crepe elastico com abertura alta nas costas para facilitar o movimento.',
    fabric: 'Crepe elastico, forro power mesh',
    measurements: 'Comprimento ate ao chao 148 cm (tamanho M).',
  },
  'hampstead-dress': {
    description:
      'Vestido com ombros estruturados e acabamento tradicional Al Talli - para noite ou cidade com raizes na heranca Emirati.',
    fabric: 'Mistura de la virgem, forro de seda, botoes mother-of-pearl',
    measurements: 'Caimento estruturado. Comprimento: 118 cm (tamanho M). Largura dos ombros: 42 cm.',
  },
  'covent-garden-signature-set': {
    description: 'Conjunto signature Khous de duas pecas - top e saia para look completo ou styling separado.',
    fabric: 'Mistura de algodao organico, acentos de linho, tingimentos naturais',
    measurements: 'Comprimento do top: 70 cm, comprimento da saia: 95 cm (tamanho M). Caimento descontraido.',
  },
  'soho-set': {
    description:
      'Conjunto coordenado de camisa oversized e calcas palazzo de perna larga com acabamento tradicional Al Talli - look polido de dia para noite que celebra a heranca Emirati.',
    fabric: 'Composicao do tecido - a finalizar com a producao.',
    measurements: 'Caimento equilibrado; comprimentos de camisa e calcas confirmados com a tabela de tamanhos.',
  },
}

const ID_CATALOG_COPY: Record<string, CatalogFields> = {
  'knightsbridge-abaya-jacket': {
    description:
      'Abaya jaket Khous antara berpakaian tradisional dan pakaian luar kontemporer — siluet santai dengan detail terinspirasi Al Khous, bahu terstruktur, dan kancing Knotted Lines of Lineage khas. Dibuat di Abu Dhabi.',
    fabric: 'Luar: 60% Polyester, 40% Katun; gaun dalam: 100% Polyester',
    measurements:
      'Tinggi model: 160 cm / 63 inci. Model mengenakan ukuran XS. Panjang: 143 cm / 56,3 inci. Panjang kustom tersedia atas permintaan.',
  },
  'covent-garden-abaya': {
    description:
      'Abaya linen ringan dengan trim Al Talli tradisional, placket tersembunyi yang bersih, dan detail warisan Emirati.',
    fabric: 'Campuran linen Eropa, lapisan katun',
    measurements: 'Panjang: 138 cm (ukuran M). Pas santai di bagian tubuh.',
  },
  'kensington-abaya': {
    description:
      'Abaya blazer terstruktur dengan bahu tailored dan trim terinspirasi anyaman Khous tradisional serta warisan Emirati.',
    fabric: 'Crepe Jepang, benang bordir tonal',
    measurements: 'Panjang: 138 cm (ukuran M).',
  },
  'marylebone-abaya': {
    description: 'Abaya signature depan terbuka dengan lengan lebar untuk dilapisi di atas gaun atau set.',
    fabric: 'Campuran wool-sutra, binding satin matte',
    measurements: 'Panjang: 135 cm (ukuran M).',
  },
  'belgravia-abaya': {
    description:
      'Abaya terinspirasi Bisht dengan trim anyaman tangan terinspirasi Al Khous — ekspresi kontemporer warisan Emirati, dibuat di Abu Dhabi.',
    fabric: 'Luar: Campuran crepe ringan (80% polyester, 20% viscose); lapisan dalam (70% polyester, 30% viscose)',
    measurements: 'Panjang: 138 cm (ukuran M). Panjang kustom tersedia atas permintaan.',
  },
  'park-lane-abaya': {
    description:
      'Abaya sehari-hari yang halus dengan garis bersih dan drape fluid yang dirancang untuk pergerakan di kota.',
    fabric: 'Komposisi kain — akan difinalisasi bersama produksi.',
    measurements: 'Panjang: 138 cm (ukuran M). Panjang kustom tersedia atas permintaan.',
  },
  'hyde-park-set': {
    description: 'Gaya placeholder menunggu detail produk dan citra lengkap.',
    fabric: 'Komposisi kain — akan difinalisasi bersama produksi.',
    measurements: 'Ukuran — akan dikonfirmasi.',
  },
  'mayfair-kaftan': {
    description:
      'Kaftan crepe-chiffon garis leher V dengan drape mengalir, gaun dalam, detail scarf, dan pin emblem emas khas.',
    fabric: 'Crepe Chiffon (100% Polyester), Gaun dalam: 100% Polyester',
    measurements: 'Panjang maksimum garment: 165 cm.',
  },
  'nothing-hill-kaftan': {
    description:
      'Kaftan chiffon peach pink lembut dengan garis leher bateau halus, siluet mengalir, dan emblem emas khas Bint Saeed.',
    fabric: 'Chiffon (100% Polyester), Gaun dalam: 100% Polyester',
    measurements: 'Panjang maksimum garment: 165 cm.',
  },
  'knightsbridge-dress': {
    description:
      'Gaun maxi feminin dari campuran katun dengan detail anyaman halter terinspirasi Khous — keanggunan effortless untuk kehidupan di luar satu musim, dibuat di Abu Dhabi.',
    fabric: 'Luar: 60% Katun, 40% Polyester',
    measurements:
      'Siluet maxi feminin dengan lipatan kotak lembut terstruktur. Panjang kustom tersedia atas permintaan.',
  },
  'covent-garden-long-dress': {
    description: 'Kolom ramping dari stretch crepe dengan vent belakang tinggi untuk kemudahan bergerak.',
    fabric: 'Stretch crepe, lapisan power mesh',
    measurements: 'Length: 143 cm / 56.3 inches. Model height: 160 cm / 63 inches. Model wears size XS. Available in custom lengths upon request.',
  },
  'hampstead-dress': {
    description:
      'Gaun dengan bahu terstruktur dan trim Al Talli tradisional — untuk malam atau kota dengan akar warisan Emirati.',
    fabric: 'Campuran Virgin Wool, lapisan sutra, kancing mother-of-pearl',
    measurements:
      'Pas terstruktur. Panjang: 118 cm (ukuran M). Lebar bahu: 42 cm.',
  },
  'covent-garden-signature-set': {
    description:
      'Set dua bagian signature Khous — atasan dan rok untuk tampilan lengkap atau styling terpisah.',
    fabric: 'Campuran Organic Cotton, aksen linen, pewarna alami',
    measurements: 'Panjang atasan: 70 cm, panjang rok: 95 cm (ukuran M). Pas santai.',
  },
  'soho-set': {
    description:
      'Set kemeja oversized dan celana palazzo kaki lebar yang selaras dengan trim Al Talli tradisional — tampilan siang hingga malam yang halus merayakan warisan Emirati.',
    fabric: 'Komposisi kain — akan difinalisasi bersama produksi.',
    measurements: 'Pas chapter; panjang kemeja dan celana dikonfirmasi sesuai size chart.',
  },
}

const MS_CATALOG_COPY: Record<string, CatalogFields> = {
  'knightsbridge-abaya-jacket': {
    description:
      'Abaya jaket Khous antara pemakaian tradisional dan pakaian luar kontemporari — siluet santai dengan perincian terinspirasi Al Khous, bahu berstruktur, dan butang Knotted Lines of Lineage khas. Dihasilkan di Abu Dhabi.',
    fabric: 'Luar: 60% Polyester, 40% Kapas; gaun dalaman: 100% Polyester',
    measurements:
      'Tinggi model: 160 cm / 63 inci. Model memakai saiz XS. Panjang: 143 cm / 56.3 inci. Panjang tersuai tersedia atas permintaan.',
  },
  'covent-garden-abaya': {
    description:
      'Abaya linen ringan dengan hiasan Al Talli tradisional, placket tersembunyi yang kemas, dan butiran warisan Emirati.',
    fabric: 'Campuran linen Eropah, lapisan kapas',
    measurements: 'Panjang: 138 cm (saiz M). Potongan santai di bahagian badan.',
  },
  'kensington-abaya': {
    description:
      'Abaya blazer berstruktur dalam hitam pekat dengan bahu tailored dan hiasan simpai terinspirasi Al Khous — keyakinan melalui kesederhanaan, dihasilkan di Abu Dhabi.',
    fabric:
      'Luar: 80% polyester, 20% viscose; lapisan: 70% polyester, 30% viscose; simpai tenunan organza glitter hitam',
    measurements: 'Panjang: 138 cm (saiz M).',
  },
  'marylebone-abaya': {
    description: 'Abaya signature depan terbuka dengan lengan lebar untuk dilapisi di atas gaun atau set.',
    fabric: 'Campuran wool-sutera, binding satin matte',
    measurements: 'Panjang: 135 cm (saiz M).',
  },
  'belgravia-abaya': {
    description:
      'Abaya berinspirasikan Bisht dengan hiasan tenunan tangan terinspirasi Al Khous — ekspresi kontemporari warisan Emirati, dihasilkan di Abu Dhabi.',
    fabric: 'Luar: Campuran crepe ringan (80% polyester, 20% viscose); lapisan dalam (70% polyester, 30% viscose)',
    measurements: 'Panjang: 138 cm (saiz M). Panjang tersuai tersedia atas permintaan.',
  },
  'park-lane-abaya': {
    description:
      'Abaya harian yang halus dengan garisan bersih dan jatuh mengalir, direka untuk pergerakan bandar.',
    fabric: 'Komposisi kain — akan dimuktamadkan bersama pengeluaran.',
    measurements: 'Panjang: 138 cm (saiz M). Panjang tersuai tersedia atas permintaan.',
  },
  'hyde-park-set': {
    description: 'Gaya placeholder menunggu butiran produk dan imej lengkap.',
    fabric: 'Komposisi kain — akan dimuktamadkan bersama pengeluaran.',
    measurements: 'Saiz — akan disahkan.',
  },
  'mayfair-kaftan': {
    description:
      'Kaftan crepe-chiffon garis leher V dengan jatuh mengalir, gaun dalam, butiran scarf, dan pin emblem emas khas.',
    fabric: 'Crepe Chiffon (100% Polyester), Gaun dalam: 100% Polyester',
    measurements: 'Panjang maksimum pakaian: 165 cm.',
  },
  'nothing-hill-kaftan': {
    description:
      'Kaftan chiffon peach pink lembut dengan garis leher bateau halus, siluet mengalir, dan emblem emas khas Bint Saeed.',
    fabric: 'Chiffon (100% Polyester), Gaun dalam: 100% Polyester',
    measurements: 'Panjang maksimum pakaian: 165 cm.',
  },
  'knightsbridge-dress': {
    description:
      'Gaun maxi feminin daripada campuran kapas dengan perincian tenunan halter terinspirasi Khous — keanggunan effortless untuk kehidupan melangkaui satu musim, dihasilkan di Abu Dhabi.',
    fabric: 'Luar: 60% Kapas, 40% Poliester',
    measurements:
      'Siluet maxi feminin dengan lipatan kotak lembut berstruktur. Panjang tersuai tersedia atas permintaan.',
  },
  'covent-garden-long-dress': {
    description: 'Kolum ramping daripada stretch crepe dengan vent belakang tinggi untuk kemudahan bergerak.',
    fabric: 'Stretch crepe, lapisan power mesh',
    measurements: 'Length: 143 cm / 56.3 inches. Model height: 160 cm / 63 inches. Model wears size XS. Available in custom lengths upon request.',
  },
  'hampstead-dress': {
    description:
      'Gaun dengan bahu berstruktur dan hiasan Al Talli tradisional — untuk malam atau bandar dengan akar warisan Emirati.',
    fabric: 'Campuran Virgin Wool, lapisan sutera, butang mother-of-pearl',
    measurements:
      'Potongan berstruktur. Panjang: 118 cm (saiz M). Lebar bahu: 42 cm.',
  },
  'covent-garden-signature-set': {
    description:
      'Set dua bahagian signature Khous — atasan dan rok untuk penampilan lengkap atau gaya berasingan.',
    fabric: 'Campuran Organic Cotton, aksen linen, pewarna semula jadi',
    measurements: 'Panjang atasan: 70 cm, panjang rok: 95 cm (saiz M). Potongan santai.',
  },
  'soho-set': {
    description:
      'Set kemeja oversized dan seluar palazzo kaki lebar yang selaras dengan hiasan Al Talli tradisional — penampilan siang hingga malam yang halus meraikan warisan Emirati.',
    fabric: 'Komposisi kain — akan dimuktamadkan bersama pengeluaran.',
    measurements: 'Potongan mengikut bab; panjang kemeja dan seluar disahkan mengikut carta saiz.',
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
