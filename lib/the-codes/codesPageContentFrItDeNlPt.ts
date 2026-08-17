import { withBrandAlt } from '@/lib/products/imageAlt'
import type { CodesSectionContent } from '@/lib/the-codes/codesPageContent'

const IMG = {
  monogram: 'bint-saeed-abu-dhabi-monogram-luxury-house.webp',
  alTalli: 'bint-saeed-abu-dhabi-al-talli-emirati-heritage.webp',
  khous: 'bint-saeed-abu-dhabi-khous-emirati-heritage.webp',
  alAinRosette: 'bint-saeed-abu-dhabi-al-ain-rosette-emirati-heritage.webp',
  knottedLines: 'bint-saeed-abu-dhabi-knotted-lines-of-lineage.webp',
  strands: 'bint-saeed-abu-dhabi-natural-stone-beads-emirati-heritage.webp',
} as const

type Row = {
  id: string
  eyebrow: string
  title: string
  /** Prefer `paragraphs` when a code needs more than one block. */
  paragraph?: string
  paragraphs?: string[]
  imageFile: string
  imageAlt: string
}

function pack(rows: Row[]): CodesSectionContent[] {
  return rows.map((r) => ({
    id: r.id,
    eyebrow: r.eyebrow,
    title: r.title,
    paragraphs: r.paragraphs ?? [r.paragraph!],
    imageFile: r.imageFile,
    imageAlt: withBrandAlt(r.imageAlt),
  }))
}

export const THE_CODES_SECTIONS_FR = pack([
  {
    id: 'the-monogram',
    eyebrow: 'Marque de la maison',
    title: 'The monogram',
    paragraph:
      'Le monogramme Bint Saeed est plus qu’une marque — c’est une structure d’identité. Sa forme entrelacée reflète la continuité, où les lignes reviennent vers elles-mêmes plutôt que de se briser. Il apparaît avec intention à travers les pièces, parfois subtil, parfois présent, toujours partie du tout.',
    imageFile: IMG.monogram,
    imageAlt:
      'Monogramme de la maison Bint Saeed — marque entrelacée d’identité et code de design d’Abu Dhabi',
  },
  {
    id: 'al-talli',
    eyebrow: 'Fil d’héritage',
    title: 'Al Talli',
    paragraph:
      'Al Talli est un artisanat émirati traditionnel, tissé de fins fils métalliques et reconnu comme partie du patrimoine culturel des Émirats arabes unis. Il reflète précision, patience et une tradition d’ornementation profondément ancrée. Chez Bint Saeed, il est traduit dans des formes qui circulent naturellement au-delà des frontières.',
    imageFile: IMG.alTalli,
    imageAlt: 'Broderie traditionnelle Al Talli en fil d’or — héritage émirati, house code Bint Saeed',
  },
  {
    id: 'khous',
    eyebrow: 'Tissage & structure',
    title: 'Al Khous',
    paragraph:
      'Le tissage Al Khous s’ancre dans l’usage des frondes de palmier, façonné par structure et répétition, et reconnu parmi les artisanats traditionnels de la région. Il reflète une manière de faire à la fois fonctionnelle et raffinée. Sa logique entre dans les lignes et la construction de chaque pièce.',
    imageFile: IMG.khous,
    imageAlt: 'Texture de tissage Al Khous en frondes de palmier — héritage émirati, house code Bint Saeed',
  },
  {
    id: 'al-ain-rosette',
    eyebrow: 'Motif',
    title: 'Al Ain Rosette',
    paragraphs: [
      'La Rosette d’Al Ain est une pierre de cornaline sculptée, développée comme motif distinctif de la maison Bint Saeed.',
      'Sa teinte chaude puise dans le paysage changeant des Émirats arabes unis. Des sables pâles le long de la côte d’Abou Dabi aux rouges plus profonds autour d’Al Ain, le désert se déplace en couleur. La cornaline retient naturellement ce spectre, de l’ambre chaud à la terre cuite riche.',
      'Sa forme arrondie s’inspire de la flore désertique d’Al Ain, rappelant la jacinthe du désert et la douce fleur aux pétales souples de Tribulus omanense, fleur nationale des Émirats.',
      'La Rosette d’Al Ain apparaît aujourd’hui dans une sélection de bijoux, de strands téléphone et de petits objets, où elle commence à établir un house code reconnaissable, destiné à évoluer au sein de Bint Saeed.',
    ],
    imageFile: IMG.alAinRosette,
    imageAlt: 'Motif Al Ain Rosette en cornaline — house code d’héritage émirati d’Abu Dhabi',
  },
  {
    id: 'knotted-lines-of-lineage',
    eyebrow: 'Ligne & continuité',
    title: 'Knotted Lines',
    paragraph:
      'Les lignes nouées apparaissent dans la maison comme un élément récurrent, formées en boutons et strands à travers les pièces. Chaque nœud reflète une connexion à travers le temps, reliant ce qui est hérité à ce qui est vécu. Placées près de celle qui les porte, elles rappellent avec discrétion une histoire qui continue.',
    imageFile: IMG.knottedLines,
    imageAlt: 'Motif doré Knotted Lines of Lineage sur tissu — house code de continuité, Bint Saeed',
  },
  {
    id: 'the-strands',
    eyebrow: 'Pierre & fil',
    title: 'The Strands',
    paragraph:
      'The Strands sont composés de pierres naturelles, disposées en séquence le long de l’épaule et à travers la pièce. Au sein de la maison, ils prolongent la ligne nouée en un fil continu — mesuré dans le placement, délibéré dans le poids, tenu près de celle qui les porte. Ni ornement ni après-coup, ils équilibrent la silhouette tout en portant le lien entre origine et présence comme code fondateur de la maison.',
    imageFile: IMG.strands,
    imageAlt:
      'Strands en pierres naturelles pour abaya — house code portable de fil et d’équilibre, Bint Saeed Abu Dhabi',
  },
])

export const THE_CODES_SECTIONS_IT = pack([
  {
    id: 'the-monogram',
    eyebrow: 'Marchio della maison',
    title: 'The monogram',
    paragraph:
      'Il monogramma Bint Saeed è più di un segno — è una struttura di identità. La sua forma intrecciata riflette la continuità, dove le linee ritornano su se stesse invece di spezzarsi. Compare con intenzione attraverso i pezzi, a volte sottile, a volte presente, sempre parte del tutto.',
    imageFile: IMG.monogram,
    imageAlt:
      'Monogramma della maison Bint Saeed — segno intrecciato di identità e codice di design di Abu Dhabi',
  },
  {
    id: 'al-talli',
    eyebrow: 'Filo di heritage',
    title: 'Al Talli',
    paragraph:
      'Al Talli è un artigianato tradizionale emiratino, tessuto con fini fili metallici e riconosciuto come parte del patrimonio culturale degli Emirati Arabi Uniti. Riflette precisione, pazienza e una tradizione di ornamento profondamente radicata. In Bint Saeed è tradotto in forme che si muovono naturalmente oltre i confini.',
    imageFile: IMG.alTalli,
    imageAlt: 'Ricamo tradizionale Al Talli in filo d’oro — heritage emiratino, house code Bint Saeed',
  },
  {
    id: 'khous',
    eyebrow: 'Tessitura e struttura',
    title: 'Al Khous',
    paragraph:
      'La tessitura Al Khous affonda le radici nell’uso delle foglie di palma, plasmata da struttura e ripetizione, e riconosciuta tra gli artigianati tradizionali della regione. Riflette un modo di fare insieme funzionale e raffinato. La sua logica entra nelle linee e nella costruzione di ogni pezzo.',
    imageFile: IMG.khous,
    imageAlt: 'Texture di tessitura Al Khous in foglie di palma — heritage emiratino, house code Bint Saeed',
  },
  {
    id: 'al-ain-rosette',
    eyebrow: 'Motivo',
    title: 'Al Ain Rosette',
    paragraphs: [
      'L’Al Ain Rosette è una pietra di corniola scolpita, sviluppata come motivo distintivo della maison Bint Saeed.',
      'Il suo colore caldo attinge al paesaggio mutevole degli Emirati Arabi Uniti. Dalle sabbie chiare lungo la costa di Abu Dhabi ai rossi più profondi intorno ad Al Ain, il deserto cambia tono. La corniola cattura naturalmente questo spettro, dall’ambra calda alla terracotta ricca.',
      'La forma arrotondata richiama la flora desertica di Al Ain — il giacinto del deserto e il soffice fiore dai petali morbidi di Tribulus omanense, fiore nazionale degli Emirati.',
      'L’Al Ain Rosette compare oggi in una selezione di gioielli, strand per telefono e piccoli oggetti, dove inizia a stabilire un house code riconoscibile, destinato a evolversi entro Bint Saeed.',
    ],
    imageFile: IMG.alAinRosette,
    imageAlt: 'Motivo Al Ain Rosette in corniola — house code di heritage emiratino da Abu Dhabi',
  },
  {
    id: 'knotted-lines-of-lineage',
    eyebrow: 'Linea e continuità',
    title: 'Knotted Lines',
    paragraph:
      'Le linee annodate compaiono nella maison come elemento ricorrente, formate come bottoni e strands attraverso i capi. Ogni nodo riflette una connessione nel tempo, collegando ciò che è ereditato a ciò che è vissuto. Collocate vicino a chi le indossa, sono un ricordo sottile di una storia che continua.',
    imageFile: IMG.knottedLines,
    imageAlt: 'Motivo dorato Knotted Lines of Lineage su tessuto — house code di continuità, Bint Saeed',
  },
  {
    id: 'the-strands',
    eyebrow: 'Pietra e filo',
    title: 'The Strands',
    paragraph:
      'The Strands sono composti di pietre naturali, disposte in sequenza lungo la spalla e attraverso il capo. Nella maison prolungano la linea annodata in un filo continuo — misurato nel posizionamento, deliberato nel peso, tenuto vicino a chi li indossa. Né ornamento né ripensamento, bilanciano la silhouette portando il legame tra origine e presenza come codice fondante della maison.',
    imageFile: IMG.strands,
    imageAlt:
      'Strands in pietre naturali per abaya — house code indossabile di filo ed equilibrio, Bint Saeed Abu Dhabi',
  },
])

export const THE_CODES_SECTIONS_DE = pack([
  {
    id: 'the-monogram',
    eyebrow: 'Zeichen des Hauses',
    title: 'The monogram',
    paragraph:
      'Das Bint Saeed Monogramm ist mehr als ein Zeichen — es ist eine Struktur der Identität. Seine verwobene Form spiegelt Kontinuität, in der Linien zu sich zurückkehren, statt zu brechen. Es erscheint mit Absicht über die Stücke hinweg, manchmal subtil, manchmal präsent, stets Teil des Ganzen.',
    imageFile: IMG.monogram,
    imageAlt: 'Bint Saeed Luxus-Hausmonogramm — verwobenes Identitätszeichen und Abu Dhabi Designcode',
  },
  {
    id: 'al-talli',
    eyebrow: 'Erbfaden',
    title: 'Al Talli',
    paragraph:
      'Al Talli ist ein traditionelles emiratisches Handwerk, mit feinen metallischen Fäden gewebt und als Teil des kulturellen Erbes der Vereinigten Arabischen Emirate anerkannt. Es spiegelt Präzision, Geduld und eine tief verwurzelte Tradition der Verzierung. Bei Bint Saeed wird es in Formen übersetzt, die sich natürlich über Grenzen hinweg bewegen.',
    imageFile: IMG.alTalli,
    imageAlt: 'Traditionelle Al Talli Goldfadenstickerei — emiratisches Erbe, house code Bint Saeed',
  },
  {
    id: 'khous',
    eyebrow: 'Weben & Struktur',
    title: 'Al Khous',
    paragraph:
      'Al Khous Weberei wurzelt in der Nutzung von Palmblättern, geformt durch Struktur und Wiederholung, und ist als traditionelles Handwerk der Region anerkannt. Sie spiegelt eine Art des Machens, die funktional und raffiniert zugleich ist. Ihre Logik geht in Linien und Konstruktion jedes Stücks ein.',
    imageFile: IMG.khous,
    imageAlt: 'Al Khous Palmblattweberei-Textur — emiratisches Erbe, house code Bint Saeed',
  },
  {
    id: 'al-ain-rosette',
    eyebrow: 'Motiv',
    title: 'Al Ain Rosette',
    paragraphs: [
      'Die Al Ain Rosette ist ein geschnittener Karneolstein, entwickelt als charakteristisches Hausmotiv von Bint Saeed.',
      'Ihre warme Farbe schöpft aus der wechselnden Landschaft der Vereinigten Arabischen Emirate. Von den hellen Sanden an der Küste Abu Dhabis bis zu den tieferen Rottönen um Al Ain verschiebt sich die Wüste in der Farbe. Karneol hält dieses Spektrum natürlich fest — von warmem Bernstein bis zu reichem Terrakotta.',
      'Ihre gerundete Form greift die Wüstenflora Al Ains auf und erinnert an die Wüstenhyazinthe und die weichblättrige Blüte von Tribulus omanense, der Nationalblume der VAE.',
      'Die Al Ain Rosette findet sich derzeit in ausgewähltem Schmuck, Telefon-Strands und kleinen Objekten, wo sie beginnt, einen erkennbaren House Code zu setzen — der sich über Bint Saeed hinweg weiterentwickeln kann.',
    ],
    imageFile: IMG.alAinRosette,
    imageAlt: 'Al Ain Rosette Karneolmotiv — emiratisches Erbe house code aus Abu Dhabi',
  },
  {
    id: 'knotted-lines-of-lineage',
    eyebrow: 'Linie & Kontinuität',
    title: 'Knotted Lines',
    paragraph:
      'Geknotete Linien erscheinen im Haus als wiederkehrendes Element — als Knöpfe und Strands über die Stücke hinweg. Jeder Knoten spiegelt Verbindung über die Zeit, verbindet Ererbtes mit Gelebtem. Nah am Körper getragen, erinnern sie diskret an eine Geschichte, die weitergeht.',
    imageFile: IMG.knottedLines,
    imageAlt: 'Goldmotiv Knotted Lines of Lineage auf Stoff — Kontinuitäts-house code, Bint Saeed',
  },
  {
    id: 'the-strands',
    eyebrow: 'Stein & Faden',
    title: 'The Strands',
    paragraph:
      'The Strands bestehen aus Natursteinen, in Sequenz entlang der Schulter und über das Stück gesetzt. Im Haus verlängern sie die geknotete Linie zu einem kontinuierlichen Faden — gemessen in der Platzierung, bewusst im Gewicht, nah an der Trägerin. Weder Ornament noch Nachgedanke: Sie balancieren die Silhouette und tragen die Verbindung zwischen Ursprung und Gegenwart als prägenden house code.',
    imageFile: IMG.strands,
    imageAlt:
      'Naturstein-Abaya-Strands — tragbarer house code aus Faden und Balance, Bint Saeed Abu Dhabi',
  },
])

export const THE_CODES_SECTIONS_NL = pack([
  {
    id: 'the-monogram',
    eyebrow: 'Teken van het huis',
    title: 'The monogram',
    paragraph:
      'Het Bint Saeed-monogram is meer dan een teken — het is een structuur van identiteit. Zijn verweven vorm weerspiegelt continuïteit, waarin lijnen naar zichzelf terugkeren in plaats van te breken. Het verschijnt met intentie doorheen de stukken, soms subtiel, soms aanwezig, altijd deel van het geheel.',
    imageFile: IMG.monogram,
    imageAlt: 'Bint Saeed luxe huis-monogram — verweven identiteitsteken en Abu Dhabi-designcode',
  },
  {
    id: 'al-talli',
    eyebrow: 'Erfgoed draad',
    title: 'Al Talli',
    paragraph:
      'Al Talli is een traditioneel Emiratisch ambacht, geweven met fijne metalen draden en erkend als deel van het culturele erfgoed van de Verenigde Arabische Emiraten. Het weerspiegelt precisie, geduld en een diepgewortelde traditie van versiering. Bij Bint Saeed wordt het vertaald naar vormen die zich natuurlijk over grenzen bewegen.',
    imageFile: IMG.alTalli,
    imageAlt: 'Traditioneel Al Talli gouddraadborduurwerk — Emiratisch erfgoed, house code Bint Saeed',
  },
  {
    id: 'khous',
    eyebrow: 'Weefsel & structuur',
    title: 'Al Khous',
    paragraph:
      'Al Khous-weven wortelt in het gebruik van palmbladeren, gevormd door structuur en herhaling, en erkend als traditioneel ambacht van de regio. Het weerspiegelt een manier van maken die zowel functioneel als verfijnd is. Zijn logica gaat over in de lijnen en constructie van elk stuk.',
    imageFile: IMG.khous,
    imageAlt: 'Al Khous palmbladweefseltextuur — Emiratisch erfgoed, house code Bint Saeed',
  },
  {
    id: 'al-ain-rosette',
    eyebrow: 'Motief',
    title: 'Al Ain Rosette',
    paragraphs: [
      'De Al Ain Rosette is een gesneden carneoolsteen, ontwikkeld als kenmerkend huis-motief van Bint Saeed.',
      'Haar warme kleur put uit het wisselende landschap van de Verenigde Arabische Emiraten. Van de bleke zanden langs de kust van Abu Dhabi tot de diepere rode tonen rond Al Ain verschuift de woestijn in kleur. Carneool vangt dit spectrum van nature — van warme amber tot rijke terracotta.',
      'Haar ronde vorm grijpt naar de woestijnflora van Al Ain en herinnert aan de woestijnhyacint en de zachtgebladerde bloem van Tribulus omanense, de nationale bloem van de VAE.',
      'De Al Ain Rosette verschijnt momenteel in geselecteerde sieraden, telefoonstrands en kleine objecten, waar zij begint een herkenbare House Code te vestigen die zich binnen Bint Saeed kan ontwikkelen.',
    ],
    imageFile: IMG.alAinRosette,
    imageAlt: 'Al Ain Rosette carneoolmotief — Emiratisch erfgoed house code uit Abu Dhabi',
  },
  {
    id: 'knotted-lines-of-lineage',
    eyebrow: 'Lijn & continuïteit',
    title: 'Knotted Lines',
    paragraph:
      'Geknoopte lijnen verschijnen in het huis als terugkerend element — gevormd als knopen en Strands over de stukken. Elke knoop weerspiegelt verbinding door de tijd, verbindt wat geërfd is met wat geleefd wordt. Dicht bij de draagster geplaatst, herinneren zij discreet aan een verhaal dat doorgaat.',
    imageFile: IMG.knottedLines,
    imageAlt: 'Gouden motief Knotted Lines of Lineage op stof — continuïteits-house code, Bint Saeed',
  },
  {
    id: 'the-strands',
    eyebrow: 'Steen & draad',
    title: 'The Strands',
    paragraph:
      'The Strands bestaan uit natuursteen, in sequentie geplaatst langs de schouder en over het stuk. Binnen het huis verlengen zij de geknoopte lijn tot een doorlopende draad — gemeten in plaatsing, bewust in gewicht, dicht bij de draagster gehouden. Noch ornament noch bijzaak: zij balanceren het silhouet en dragen de verbinding tussen oorsprong en aanwezigheid als bepalende house code.',
    imageFile: IMG.strands,
    imageAlt:
      'Natuursteen abaya Strands — draagbare house code van draad en balans, Bint Saeed Abu Dhabi',
  },
])

export const THE_CODES_SECTIONS_PT = pack([
  {
    id: 'the-monogram',
    eyebrow: 'Marca da maison',
    title: 'The monogram',
    paragraph:
      'O monograma Bint Saeed é mais do que uma marca — é uma estrutura de identidade. A sua forma entrelaçada reflecte continuidade, em que as linhas regressam a si mesmas em vez de se quebrarem. Aparece com intenção através das peças, por vezes subtil, por vezes presente, sempre parte do todo.',
    imageFile: IMG.monogram,
    imageAlt:
      'Monograma da maison Bint Saeed — marca entrelaçada de identidade e código de design de Abu Dhabi',
  },
  {
    id: 'al-talli',
    eyebrow: 'Fio de herança',
    title: 'Al Talli',
    paragraph:
      'Al Talli é um ofício tradicional emiradense, tecido com fios metálicos finos e reconhecido como parte do património cultural dos Emirados Árabes Unidos. Reflecte precisão, paciência e uma tradição de ornamentação profundamente enraizada. Na Bint Saeed, é traduzido em formas que se movem naturalmente além das fronteiras.',
    imageFile: IMG.alTalli,
    imageAlt: 'Bordado tradicional Al Talli em fio de ouro — herança emiradense, house code Bint Saeed',
  },
  {
    id: 'khous',
    eyebrow: 'Tecelagem e estrutura',
    title: 'Al Khous',
    paragraph:
      'A tecelagem Al Khous tem raízes no uso de folhas de palmeira, moldada por estrutura e repetição, e reconhecida entre os ofícios tradicionais da região. Reflecte uma forma de fazer simultaneamente funcional e refinada. A sua lógica entra nas linhas e na construção de cada peça.',
    imageFile: IMG.khous,
    imageAlt: 'Textura de tecelagem Al Khous em folhas de palmeira — herança emiradense, house code Bint Saeed',
  },
  {
    id: 'al-ain-rosette',
    eyebrow: 'Motivo',
    title: 'Al Ain Rosette',
    paragraphs: [
      'A Al Ain Rosette é uma pedra de cornalina esculpida, desenvolvida como motivo distintivo da maison Bint Saeed.',
      'A sua cor quente bebe da paisagem em mudança dos Emirados Árabes Unidos. Das areias pálidas ao longo da costa de Abu Dhabi aos vermelhos mais profundos em torno de Al Ain, o deserto desloca-se em cor. A cornalina captura naturalmente este espectro — do âmbar quente ao terracota rico.',
      'A forma arredondada remete à flora desértica de Al Ain, evocando o jacinto do deserto e a suave flor de pétalas macias de Tribulus omanense, flor nacional dos Emirados.',
      'A Al Ain Rosette encontra-se actualmente numa selecção de joalharia, strands de telemóvel e pequenos objectos, onde começa a estabelecer um house code reconhecível, destinado a evoluir no seio de Bint Saeed.',
    ],
    imageFile: IMG.alAinRosette,
    imageAlt: 'Motivo Al Ain Rosette em cornalina — house code de herança emiradense de Abu Dhabi',
  },
  {
    id: 'knotted-lines-of-lineage',
    eyebrow: 'Linha e continuidade',
    title: 'Knotted Lines',
    paragraph:
      'As linhas com nós aparecem na maison como elemento recorrente, formadas como botões e strands através das peças. Cada nó reflecte ligação através do tempo, unindo o que é herdado ao que é vivido. Colocadas perto de quem as usa, são um lembrete discreto de uma história que continua.',
    imageFile: IMG.knottedLines,
    imageAlt: 'Motivo dourado Knotted Lines of Lineage em tecido — house code de continuidade, Bint Saeed',
  },
  {
    id: 'the-strands',
    eyebrow: 'Pedra e fio',
    title: 'The Strands',
    paragraph:
      'The Strands são compostos de pedras naturais, dispostos em sequência ao longo do ombro e através da peça. Dentro da maison, prolongam a linha com nós num fio contínuo — medido na colocação, deliberado no peso, mantido perto de quem os usa. Nem ornamento nem reflexão tardia: equilibram a silhueta e levam a ligação entre origem e presença como código fundador da maison.',
    imageFile: IMG.strands,
    imageAlt:
      'Strands de pedras naturais para abaya — house code portátil de fio e equilíbrio, Bint Saeed Abu Dhabi',
  },
])
