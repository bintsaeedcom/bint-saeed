import type { StrandsPageCopy } from '@/lib/i18n/strandsPageCopyI18n'
import {
  shopAllStrandsCta as buildShopAllStrandsCta,
  shopStrandsCta as buildShopStrandsCta,
} from '@/lib/i18n/strandsBrandLock'

const DISCOVER_FR = 'Découvrir tous les Strands'
const DISCOVER_IT = 'Scopri tutti gli Strands'
const DISCOVER_DE = 'Alle Strands entdecken'
const DISCOVER_PT = 'Descobrir todos os Strands'

const COLORS = [
  '#1a1a1a',
  '#8B6914',
  '#E8833A',
  '#C2185B',
  '#7BA7C2',
  '#E8B4B8',
  '#2E7D32',
  '#1A237E',
  '#7B1FA2',
  '#4CAF82',
] as const

const NOTES_FR: Record<string, string> = {
  'Onyx Strands':
    'Noir profond à surface très brillante. Une pierre classique, trouvée au Brésil et en Inde. Celle que porte chaque abaya Marylebone à son arrivée.',
  'Tiger Eye Strands':
    'Brun doré chaleureux au reflet naturel qui bouge avec la lumière. Trouvée en Afrique du Sud. Aucune pièce ne la capture de la même façon.',
  'Al Ain Oasis Sunstone Strands':
    'Pierre de soleil pêche-orange chaude, finition lisse et lumineuse. Une teinte naturelle vive, douce dans la lumière.',
  'Fuchsia Jade Strands':
    'Jade naturel d’un rose saturé profond. Une couleur rare — peu courante à cette intensité.',
  'Blue Aventurine Strands':
    'Bleu poussiéreux et froid, avec un scintillement interne subtil. Sourcée en Inde et au Chili. Discrète de loin, détaillée de près.',
  'Al Ain Oasis Rose Quartz Strands':
    'Rose pâle, semi-translucide. La lumière la traverse plutôt qu’elle ne s’y reflète. Trouvée au Brésil et à Madagascar.',
  'Al Ain Oasis Malachite Strands':
    'Vert profond aux bandes naturelles — aucun motif ne se répète. Trouvée en Afrique centrale.',
  'Al Ain Oasis Lapis Lazuli Strands':
    'Bleu profond piqué d’or naturel, sourcé en Afghanistan. Utilisé en joaillerie et en art depuis des millénaires.',
  'Amethyst Hearts Strands':
    'Quartz violet taillé en cœurs et poli à facettes. Trouvé au Brésil et en Zambie.',
  'Jade Hearts Strands':
    'Jade vert frais, formé à la main en cœurs. Chacun légèrement différent. Chacun unique.',
  'Natural Jade Strands':
    'Jade naturel véritable non teinté, vert doux. Perles rondes polies, d’un calme minéral.',
}

export const STRANDS_FR: StrandsPageCopy = {
  heroEyebrow: 'LE STRAND ABAYA · BINT SAEED',
  heroHeadline: 'Votre abaya n’a jamais été terminée. Jusqu’à présent.',
  heroSubline1:
    'La première maison d’abayas à proposer des Strands en pierres naturelles interchangeables. Portés au poignet. Changés à volonté.',
  heroSubline2: 'Pierre naturelle. Fait main à Abu Dhabi. Conçu pour l’abaya Marylebone.',
  ctaShopStrands: buildShopStrandsCta('fr', 'upper'),
  ctaSeeMarylebone: 'VOIR LA MARYLEBONE',
  marquee: 'PIERRE NATURELLE · BINT SAEED · ABAYA STRANDS · ABU DHABI · FAIT SUR COMMANDE ·',
  conceptLabel: 'LE CONCEPT',
  conceptHeadingLine1: 'Une abaya.',
  conceptHeadingLine2: 'De nombreuses touches.',
  conceptP1:
    'Le strand abaya Bint Saeed est un détail en pierre naturelle porté au poignet de l’abaya Marylebone. Fait main à Abu Dhabi. Conçu pour être changé.',
  conceptP2:
    'Chaque abaya Marylebone arrive avec un strand onyx standard. Choisissez une autre pierre pour un autre jour. Accordez-la à votre sac, votre tenue, votre occasion. L’abaya reste la même. C’est vous qui décidez ce qu’elle exprime.',
  conceptStoneList:
    'Onyx · Œil de tigre · Pierre de soleil · Jade fuchsia · Aventurine bleue · Quartz rose · Malachite · Lapis-lazuli · Améthyste · Jade',
  conceptExploreStones: 'Explorer toutes les pierres →',
  conceptMarylebonePrompt: 'Vous n’avez pas encore l’abaya Marylebone ?',
  conceptMaryleboneLink: 'Voir l’abaya Marylebone →',
  howItWorksLabel: 'COMMENT ÇA FONCTIONNE',
  howItWorksHeading: 'Trois étapes.',
  steps: [
    { numeral: 'I', title: 'CHOISIR LA PIERRE', body: 'Choisissez un strand en pierre naturelle selon la couleur, la surface et le caractère.' },
    { numeral: 'II', title: 'LE PORTER À VOTRE FAÇON', body: 'L’abaya Marylebone est conçue pour le recevoir. Rien de plus n’est nécessaire.' },
    { numeral: 'III', title: 'CHANGER QUAND VOUS VOULEZ', body: 'Alternez les pierres selon les occasions. L’abaya reste la même.' },
  ],
  collectionLabel: 'LA COLLECTION',
  collectionHeading: 'Choisissez selon la couleur et le caractère.',
  collectionIntro: 'Chaque pierre est naturelle. Aucune n’est identique.',
  shopAllStrandsCta: buildShopAllStrandsCta('fr', 'title'),
  discoverAllStrandsCta: DISCOVER_FR,
  stoneVisualNotes: NOTES_FR,
  stoneVisualFallback: 'Pierre naturelle choisie pour la couleur, la surface et la texture visuelle.',
  limitedEdition: 'Édition limitée',
  limitedEditionShort: 'Limitée',
  viewStrandCta: 'Choisir cette pierre',
  viewStrandGridCta: 'Voir le strand',
  carouselPrevAria: 'Pierres précédentes',
  carouselNextAria: 'Pierres suivantes',
  carouselSwipeHint: 'Faites glisser les pierres ci-dessus ou tirez cette barre',
  carouselPositionAria: 'Position du carrousel de pierres',
  shopCollectionLabel: 'ACHETER LA COLLECTION',
  shopCollectionHeading: 'Tous les strands en pierres naturelles',
  shopCollectionIntro:
    'Dix strands interchangeables pour l’abaya Marylebone — choisissez selon la couleur, la surface et le caractère. Chaque strand a sa propre page produit.',
  alsoInPrefix: 'Aussi dans',
  alsoInLink: 'Accessoires — Abaya Strands',
  anchorLabel: 'LA PIÈCE D’ANCRAGE',
  anchorHeading: 'L’abaya Marylebone.',
  anchorBody: (price) => `Le strand se déploie depuis un poignet spécialement construit — un détail propre à la Marylebone. Fait sur commande à Abu Dhabi, à partir de ${price}.`,
  anchorCta: 'VOIR LA MARYLEBONE',
  conceptStoneSwatches: [
    { name: 'Onyx', color: COLORS[0] },
    { name: 'Œil de tigre', color: COLORS[1] },
    { name: 'Pierre de soleil', color: COLORS[2] },
    { name: 'Jade fuchsia', color: COLORS[3] },
    { name: 'Aventurine bleue', color: COLORS[4] },
    { name: 'Quartz rose', color: COLORS[5] },
    { name: 'Malachite', color: COLORS[6] },
    { name: 'Lapis-lazuli', color: COLORS[7] },
    { name: 'Améthyste', color: COLORS[8] },
    { name: 'Jade', color: COLORS[9] },
  ],
}

const NOTES_IT: Record<string, string> = {
  'Onyx Strands':
    'Nero profondo a superficie lucida. Una pietra classica, presente in Brasile e India. Quella con cui arriva ogni abaya Marylebone.',
  'Tiger Eye Strands':
    'Marrone dorato caldo con un riflesso naturale che si muove con la luce. Trovata in Sudafrica. Nessun pezzo la cattura allo stesso modo.',
  'Al Ain Oasis Sunstone Strands':
    'Pietra di sole pesca-arancio calda, finitura liscia e luminosa. Un tono naturale vivido, morbido nella luce.',
  'Fuchsia Jade Strands':
    'Giada naturale in un rosa saturo e profondo. Un colore insolito — raro a questa intensità.',
  'Blue Aventurine Strands':
    'Un blu freddo e polveroso con un sottile scintillio interno. Proveniente da India e Cile. Discreta da lontano, dettagliata da vicino.',
  'Al Ain Oasis Rose Quartz Strands':
    'Rosa pallido, semi-traslucido. La luce lo attraversa invece di riflettersi. Trovato in Brasile e Madagascar.',
  'Al Ain Oasis Malachite Strands':
    'Verde profondo con bande naturali — nessun pezzo condivide lo stesso disegno. Trovata in Africa centrale.',
  'Al Ain Oasis Lapis Lazuli Strands':
    'Blu profondo screziato d’oro naturale, proveniente dall’Afghanistan. Usato in gioielleria e arte da millenni.',
  'Amethyst Hearts Strands':
    'Quarzo violetto sagomato a cuore e lucidato a facce. Trovato in Brasile e Zambia.',
  'Jade Hearts Strands':
    'Giada verde fresca, sagomata a mano a forma di cuore. Ognuna leggermente diversa. Ognuna unica.',
  'Natural Jade Strands':
    'Giada naturale genuina non tinta, verde tenue. Perle rotonde lucidate, di quiete minerale.',
}

export const STRANDS_IT: StrandsPageCopy = {
  heroEyebrow: 'L’ABAYA STRAND · BINT SAEED',
  heroHeadline: 'La tua abaya non è mai stata completa. Fino ad ora.',
  heroSubline1:
    'La prima maison di abaya con Strands in pietre naturali intercambiabili. Indossati sul polsino. Cambiati a piacere.',
  heroSubline2: 'Pietra naturale. Realizzati a mano ad Abu Dhabi. Per l’abaya Marylebone.',
  ctaShopStrands: buildShopStrandsCta('it', 'upper'),
  ctaSeeMarylebone: 'SCOPRI LA MARYLEBONE',
  marquee: 'PIETRA NATURALE · BINT SAEED · ABAYA STRANDS · ABU DHABI · SU ORDINAZIONE ·',
  conceptLabel: 'IL CONCETTO',
  conceptHeadingLine1: 'Un’abaya.',
  conceptHeadingLine2: 'Molti accenti.',
  conceptP1:
    'Lo strand abaya Bint Saeed è un dettaglio in pietra naturale indossato sul polsino dell’abaya Marylebone. Realizzato a mano ad Abu Dhabi. Pensato per essere cambiato.',
  conceptP2:
    'Ogni abaya Marylebone arriva con uno strand onice standard. Scegliete una pietra diversa per un giorno diverso. Abbinatela alla borsa, all’outfit, all’occasione. L’abaya resta la stessa. Decidete voi cosa comunica.',
  conceptStoneList:
    'Onice · Occhio di tigre · Pietra di sole · Giada fucsia · Avventurina blu · Quarzo rosa · Malachite · Lapislazzuli · Ametista · Giada',
  conceptExploreStones: 'Esplora tutte le pietre →',
  conceptMarylebonePrompt: 'Non avete ancora l’abaya Marylebone?',
  conceptMaryleboneLink: 'Vedi l’abaya Marylebone →',
  howItWorksLabel: 'COME FUNZIONA',
  howItWorksHeading: 'Tre passaggi.',
  steps: [
    { numeral: 'I', title: 'SCEGLI LA PIETRA', body: 'Scegliete uno strand in pietra naturale per colore, superficie e carattere.' },
    { numeral: 'II', title: 'INDOSSALO A MODO VOSTRO', body: 'L’abaya Marylebone è progettata per tenerlo. Non serve altro.' },
    { numeral: 'III', title: 'CAMBIA QUANDO VOLETE', body: 'Ruotate le pietre tra le occasioni. L’abaya resta la stessa.' },
  ],
  collectionLabel: 'LA COLLEZIONE',
  collectionHeading: 'Scegliete per colore e carattere.',
  collectionIntro: 'Ogni pietra è naturale. Nessuna è identica.',
  shopAllStrandsCta: buildShopAllStrandsCta('it', 'title'),
  discoverAllStrandsCta: DISCOVER_IT,
  stoneVisualNotes: NOTES_IT,
  stoneVisualFallback: 'Pietra naturale scelta per colore, superficie e texture visiva.',
  limitedEdition: 'Edizione limitata',
  limitedEditionShort: 'Limitata',
  viewStrandCta: 'Scegli questa pietra',
  viewStrandGridCta: 'Vedi lo strand',
  carouselPrevAria: 'Pietre precedenti',
  carouselNextAria: 'Pietre successive',
  carouselSwipeHint: 'Scorri le pietre sopra o trascina questa barra',
  carouselPositionAria: 'Posizione del carosello pietre',
  shopCollectionLabel: 'ACQUISTA LA COLLEZIONE',
  shopCollectionHeading: 'Tutti gli strand in pietra naturale',
  shopCollectionIntro:
    'Dieci strand intercambiabili per l’abaya Marylebone — selezionate per colore, superficie e carattere. Ogni strand ha la propria pagina prodotto.',
  alsoInPrefix: 'Anche in',
  alsoInLink: 'Accessori — Abaya Strands',
  anchorLabel: 'IL PEZZO ANCORA',
  anchorHeading: 'L’abaya Marylebone.',
  anchorBody: (price) => `Lo strand scende da un polsino costruito appositamente — un dettaglio esclusivo della Marylebone. Su ordinazione ad Abu Dhabi, da ${price}.`,
  anchorCta: 'VEDI LA MARYLEBONE',
  conceptStoneSwatches: [
    { name: 'Onice', color: COLORS[0] },
    { name: 'Occhio di tigre', color: COLORS[1] },
    { name: 'Pietra di sole', color: COLORS[2] },
    { name: 'Giada fucsia', color: COLORS[3] },
    { name: 'Avventurina blu', color: COLORS[4] },
    { name: 'Quarzo rosa', color: COLORS[5] },
    { name: 'Malachite', color: COLORS[6] },
    { name: 'Lapislazzuli', color: COLORS[7] },
    { name: 'Ametista', color: COLORS[8] },
    { name: 'Giada', color: COLORS[9] },
  ],
}

const NOTES_DE: Record<string, string> = {
  'Onyx Strands':
    'Tiefschwarz mit hochglänzender Oberfläche. Ein klassischer Stein aus Brasilien und Indien. Der Stein, mit dem jede Marylebone Abaya ankommt.',
  'Tiger Eye Strands':
    'Warm goldbraun mit natürlichem Schimmer, der mit dem Licht wandert. Aus Südafrika. Kein Stück fängt es gleich ein.',
  'Al Ain Oasis Sunstone Strands':
    'Warmer pfirsichoranger Sonnenstein mit glatter, leuchtender Oberfläche. Ein lebendiger Naturtone mit sanfter Wärme im Licht.',
  'Fuchsia Jade Strands':
    'Naturjade in tiefem, gesättigtem Rosa. Eine ungewöhnliche Farbe — selten in dieser Intensität.',
  'Blue Aventurine Strands':
    'Ein kühles, staubiges Blau mit feinem inneren Schimmer. Aus Indien und Chile. Zurückhaltend aus der Ferne, detailliert aus der Nähe.',
  'Al Ain Oasis Rose Quartz Strands':
    'Blasses Blush, halbtransparent. Das Licht geht hindurch statt sich zu spiegeln. Aus Brasilien und Madagaskar.',
  'Al Ain Oasis Malachite Strands':
    'Tiefgrün mit natürlichen Bänderungen — kein Muster wiederholt sich. Aus Zentralafrika.',
  'Al Ain Oasis Lapis Lazuli Strands':
    'Tiefblau mit natürlichem Goldflitter, aus Afghanistan. Seit Jahrtausenden in Schmuck und Kunst verwendet.',
  'Amethyst Hearts Strands':
    'Violetter Quarz zu Herzen geformt und facettenpoliert. Aus Brasilien und Sambia.',
  'Jade Hearts Strands':
    'Kühles Grünjade, handgeformt zu Herzen. Jedes etwas anders. Jedes einmalig.',
  'Natural Jade Strands':
    'Echte, ungefärbte Naturjade in weichem Grün. Runde polierte Perlen mit stiller, mineralischer Ruhe.',
}

export const STRANDS_DE: StrandsPageCopy = {
  heroEyebrow: 'DER ABAYA STRAND · BINT SAEED',
  heroHeadline: 'Ihre Abaya war nie fertig. Bis jetzt.',
  heroSubline1:
    'Das erste Abaya-Haus mit austauschbaren Naturstein-Strands. Am Manschettenrand getragen. Nach Wunsch gewechselt.',
  heroSubline2: 'Naturstein. Handgefertigt in Abu Dhabi. Für die Marylebone Abaya.',
  ctaShopStrands: buildShopStrandsCta('de', 'upper'),
  ctaSeeMarylebone: 'DIE MARYLEBONE ANSEHEN',
  marquee: 'NATURSTEIN · BINT SAEED · ABAYA STRANDS · ABU DHABI · AUF BESTELLUNG ·',
  conceptLabel: 'DAS KONZEPT',
  conceptHeadingLine1: 'Eine Abaya.',
  conceptHeadingLine2: 'Viele Akzente.',
  conceptP1:
    'Der Bint Saeed Abaya-Strand ist ein Natursteindetail am Manschettenrand der Marylebone Abaya. Handgefertigt in Abu Dhabi. Zum Wechseln gemacht.',
  conceptP2:
    'Jede Marylebone Abaya kommt mit einem Standard-Onyx-Strand. Wählen Sie einen anderen Stein für einen anderen Tag. Passen Sie ihn zu Tasche, Outfit, Anlass. Die Abaya bleibt dieselbe. Sie entscheiden, was sie sagt.',
  conceptStoneList:
    'Onyx · Tigerauge · Sonnenstein · Fuchsia-Jade · Blauer Aventurin · Rosenquarz · Malachit · Lapislazuli · Amethyst · Jade',
  conceptExploreStones: 'Alle Steine entdecken →',
  conceptMarylebonePrompt: 'Noch keine Marylebone Abaya?',
  conceptMaryleboneLink: 'Marylebone Abaya ansehen →',
  howItWorksLabel: 'SO FUNKTIONIERT ES',
  howItWorksHeading: 'Drei Schritte.',
  steps: [
    { numeral: 'I', title: 'STEIN WÄHLEN', body: 'Wählen Sie einen Naturstein-Strand nach Farbe, Oberfläche und Charakter.' },
    { numeral: 'II', title: 'NACH IHRER ART TRAGEN', body: 'Die Marylebone Abaya ist dafür gemacht, ihn zu halten. Mehr ist nicht nötig.' },
    { numeral: 'III', title: 'WECHSELN, WENN SIE MÖCHTEN', body: 'Rotieren Sie Steine über Anlässe hinweg. Die Abaya bleibt dieselbe.' },
  ],
  collectionLabel: 'DIE KOLLEKTION',
  collectionHeading: 'Nach Farbe und Charakter wählen.',
  collectionIntro: 'Jeder Stein ist natürlich. Keiner ist identisch.',
  shopAllStrandsCta: buildShopAllStrandsCta('de', 'title'),
  discoverAllStrandsCta: DISCOVER_DE,
  stoneVisualNotes: NOTES_DE,
  stoneVisualFallback: 'Naturstein gewählt nach Farbe, Oberfläche und visueller Textur.',
  limitedEdition: 'Limitierte Edition',
  limitedEditionShort: 'Limitiert',
  viewStrandCta: 'Diesen Stein wählen',
  viewStrandGridCta: 'Strand ansehen',
  carouselPrevAria: 'Vorherige Steine',
  carouselNextAria: 'Nächste Steine',
  carouselSwipeHint: 'Streichen Sie über die Steine oben oder ziehen Sie diese Leiste',
  carouselPositionAria: 'Position des Steinkarussells',
  shopCollectionLabel: 'DIE KOLLEKTION SHOPPEN',
  shopCollectionHeading: 'Alle Naturstein-Strands',
  shopCollectionIntro:
    'Zehn austauschbare Steinstränge für die Marylebone Abaya — nach Farbe, Oberfläche und Charakter. Jeder Strand hat eine eigene Produktseite.',
  alsoInPrefix: 'Auch in',
  alsoInLink: 'Accessoires — Abaya Strands',
  anchorLabel: 'DAS ANKERSTÜCK',
  anchorHeading: 'Die Marylebone Abaya.',
  anchorBody: (price) => `Der Strand fällt von einer eigens konstruierten Manschette — ein Detail nur an der Marylebone. Auf Bestellung in Abu Dhabi, ab ${price}.`,
  anchorCta: 'DIE MARYLEBONE ANSEHEN',
  conceptStoneSwatches: [
    { name: 'Onyx', color: COLORS[0] },
    { name: 'Tigerauge', color: COLORS[1] },
    { name: 'Sonnenstein', color: COLORS[2] },
    { name: 'Fuchsia-Jade', color: COLORS[3] },
    { name: 'Blauer Aventurin', color: COLORS[4] },
    { name: 'Rosenquarz', color: COLORS[5] },
    { name: 'Malachit', color: COLORS[6] },
    { name: 'Lapislazuli', color: COLORS[7] },
    { name: 'Amethyst', color: COLORS[8] },
    { name: 'Jade', color: COLORS[9] },
  ],
}

const NOTES_PT: Record<string, string> = {
  'Onyx Strands':
    'Preto profundo com superfície de alto brilho. Uma pedra clássica, encontrada no Brasil e na Índia. A que acompanha cada abaya Marylebone à chegada.',
  'Tiger Eye Strands':
    'Castanho dourado quente com um brilho natural que se move com a luz. Encontrada na África do Sul. Nenhuma peça a captura da mesma forma.',
  'Al Ain Oasis Sunstone Strands':
    'Pedra do sol pêssego-laranja quente, acabamento liso e luminoso. Um tom natural vivo, suave na luz.',
  'Fuchsia Jade Strands':
    'Jade natural num rosa saturado e profundo. Uma cor invulgar — rara nesta intensidade.',
  'Blue Aventurine Strands':
    'Um azul fresco e empobrecido com um brilho interno subtil. Proveniente da Índia e do Chile. Discreta à distância, detalhada de perto.',
  'Al Ain Oasis Rose Quartz Strands':
    'Rosa pálido, semi-translúcido. A luz passa através dele em vez de se reflectir. Encontrado no Brasil e em Madagáscar.',
  'Al Ain Oasis Malachite Strands':
    'Verde profundo com bandas naturais — nenhum padrão se repete. Encontrada na África Central.',
  'Al Ain Oasis Lapis Lazuli Strands':
    'Azul profundo com flecks de ouro natural, proveniente do Afeganistão. Usado em joalharia e arte há milhares de anos.',
  'Amethyst Hearts Strands':
    'Quartzo violeta moldado em corações e polido a facetas. Encontrado no Brasil e na Zâmbia.',
  'Jade Hearts Strands':
    'Jade verde fresco, moldado à mão em corações. Cada um ligeiramente diferente. Cada um único.',
  'Natural Jade Strands':
    'Jade natural genuíno sem tingimento, verde suave. Contas redondas polidas, de calma mineral.',
}

export const STRANDS_PT: StrandsPageCopy = {
  heroEyebrow: 'O STRAND ABAYA · BINT SAEED',
  heroHeadline: 'A sua abaya nunca esteve completa. Até agora.',
  heroSubline1:
    'A primeira casa de abayas com Strands de pedras naturais intercambiáveis. Usados no punho. Trocados à escolha.',
  heroSubline2: 'Pedra natural. Feito à mão em Abu Dhabi. Para a abaya Marylebone.',
  ctaShopStrands: buildShopStrandsCta('pt', 'upper'),
  ctaSeeMarylebone: 'VER A MARYLEBONE',
  marquee: 'PEDRA NATURAL · BINT SAEED · ABAYA STRANDS · ABU DHABI · FEITO POR ENCOMENDA ·',
  conceptLabel: 'O CONCEITO',
  conceptHeadingLine1: 'Uma abaya.',
  conceptHeadingLine2: 'Muitos acentos.',
  conceptP1:
    'O strand abaya Bint Saeed é um detalhe de pedra natural usado no punho da abaya Marylebone. Feito à mão em Abu Dhabi. Feito para ser trocado.',
  conceptP2:
    'Cada abaya Marylebone chega com um strand ónix padrão. Escolha uma pedra diferente para um dia diferente. Combine-a com a mala, o look, a ocasião. A abaya mantém-se. É você quem decide o que expressa.',
  conceptStoneList:
    'Ónix · Olho de tigre · Pedra do sol · Jade fúcsia · Aventurina azul · Quartzo rosa · Malaquite · Lápis-lazúli · Ametista · Jade',
  conceptExploreStones: 'Explorar todas as pedras →',
  conceptMarylebonePrompt: 'Ainda não tem a abaya Marylebone?',
  conceptMaryleboneLink: 'Ver a abaya Marylebone →',
  howItWorksLabel: 'COMO FUNCIONA',
  howItWorksHeading: 'Três passos.',
  steps: [
    { numeral: 'I', title: 'ESCOLHER A PEDRA', body: 'Escolha um strand de pedra natural por cor, superfície e carácter.' },
    { numeral: 'II', title: 'USAR À SUA MANEIRA', body: 'A abaya Marylebone foi concebida para o receber. Nada mais é necessário.' },
    { numeral: 'III', title: 'TROCAR QUANDO QUISER', body: 'Alterne pedras entre ocasiões. A abaya mantém-se.' },
  ],
  collectionLabel: 'A COLEÇÃO',
  collectionHeading: 'Escolha por cor e carácter.',
  collectionIntro: 'Cada pedra é natural. Nenhuma é idêntica.',
  shopAllStrandsCta: buildShopAllStrandsCta('pt', 'title'),
  discoverAllStrandsCta: DISCOVER_PT,
  stoneVisualNotes: NOTES_PT,
  stoneVisualFallback: 'Pedra natural escolhida pela cor, superfície e textura visual.',
  limitedEdition: 'Edição limitada',
  limitedEditionShort: 'Limitada',
  viewStrandCta: 'Escolher esta pedra',
  viewStrandGridCta: 'Ver o strand',
  carouselPrevAria: 'Pedras anteriores',
  carouselNextAria: 'Pedras seguintes',
  carouselSwipeHint: 'Deslize as pedras acima ou arraste esta barra',
  carouselPositionAria: 'Posição do carrossel de pedras',
  shopCollectionLabel: 'COMPRAR A COLEÇÃO',
  shopCollectionHeading: 'Todos os strands de pedra natural',
  shopCollectionIntro:
    'Dez strands intercambiáveis para a abaya Marylebone — selecione por cor, superfície e carácter. Cada strand tem a sua página de produto.',
  alsoInPrefix: 'Também em',
  alsoInLink: 'Acessórios — Abaya Strands',
  anchorLabel: 'A PEÇA ÂNCORA',
  anchorHeading: 'A abaya Marylebone.',
  anchorBody: (price) => `O strand cai de um punho especialmente construído — um detalhe exclusivo da Marylebone. Feito por encomenda em Abu Dhabi, a partir de ${price}.`,
  anchorCta: 'VER A MARYLEBONE',
  conceptStoneSwatches: [
    { name: 'Ónix', color: COLORS[0] },
    { name: 'Olho de tigre', color: COLORS[1] },
    { name: 'Pedra do sol', color: COLORS[2] },
    { name: 'Jade fúcsia', color: COLORS[3] },
    { name: 'Aventurina azul', color: COLORS[4] },
    { name: 'Quartzo rosa', color: COLORS[5] },
    { name: 'Malaquite', color: COLORS[6] },
    { name: 'Lápis-lazúli', color: COLORS[7] },
    { name: 'Ametista', color: COLORS[8] },
    { name: 'Jade', color: COLORS[9] },
  ],
}
