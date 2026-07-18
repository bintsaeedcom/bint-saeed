import type { HomeEditorialCopy } from '@/lib/i18n/homeEditorialCopyI18n'

const HEX = [
  { hex: '#1a0210' },
  { hex: '#8b5a2b' },
  { hex: '#f4b8c5' },
  { hex: '#1f7a5e' },
] as const

const TITLES = [
  'The Monogram',
  'Al Khous',
  'Knotted Lines',
  'Al Ain Rosette',
  'Al Talli',
  'The Strands',
] as const

/** Overlay fields are overwritten by getHomeEditorialCopy — placeholders match EN structure. */
function pack(
  p: Omit<
    HomeEditorialCopy,
    | 'heroHeadline'
    | 'abayaStrandsEyebrow'
    | 'abayaStrandsHeading'
    | 'abayaStrandsBody'
    | 'shopStrandsCta'
    | 'carriedCloseEyebrow'
    | 'personalisationHeading'
    | 'personalisationBody'
    | 'personalisationCta'
    | 'shopNowCta'
  > &
    Partial<
      Pick<
        HomeEditorialCopy,
        | 'heroHeadline'
        | 'abayaStrandsEyebrow'
        | 'abayaStrandsHeading'
        | 'abayaStrandsBody'
        | 'shopStrandsCta'
        | 'carriedCloseEyebrow'
        | 'personalisationHeading'
        | 'personalisationBody'
        | 'personalisationCta'
        | 'shopNowCta'
      >
    >,
): HomeEditorialCopy {
  return {
    heroHeadline: '',
    abayaStrandsEyebrow: '',
    abayaStrandsHeading: '',
    abayaStrandsBody: '',
    shopStrandsCta: '',
    carriedCloseEyebrow: '',
    personalisationHeading: '',
    personalisationBody: '',
    personalisationCta: '',
    shopNowCta: '',
    ...p,
  }
}

export const HOME_FR = pack({
  heroSubline: 'Porter l’héritage plus loin.',
  heroBrandStoryCta: 'Notre histoire',
  manifestoLead: 'Bint Saeed',
  manifestoQuote: 'Un sens de soi qui ne change pas avec le lieu.',
  manifestoSnippets: [
    'Où que se vive la vie — d’Abu Dhabi à Londres, de Riyad à Paris, de Doha à Marbella — vous n’avez pas à changer la façon dont vous vous présentez. Chaque pièce porte votre élégance, votre manière d’être, avec la même constance, où que vous soyez.',
    'Bint Saeed existe au croisement de l’héritage et d’une vie contemporaine — portée au-delà des frontières, reconnue à sa constance.',
  ],
  manifestoImageEyebrow: 'D’Abu Dhabi au monde',
  manifestoLabel: 'MANIFESTE',
  manifestoReadStory: 'Lire notre histoire',
  chapterLabel: 'CHAPITRE I',
  collectionHeading: 'LA COLLECTION',
  pillars: [
    {
      title: 'Façonné à Abu Dhabi',
      copy: 'Chaque pièce est achevée en petites séries, avec une attention particulière à la coupe, au tombé et à la longévité.',
    },
    {
      title: 'Signatures en pierres naturelles',
      copy: 'Strands et détails sont choisis pour leur histoire, leur symbolique et leur portabilité dans le temps.',
    },
    {
      title: 'Personnalisation incluse',
      copy: 'Une note dans la poche secrète peut être ajoutée — pour offrir, pour une étape, pour un sens privé.',
    },
  ],
  strandSwatches: [
    { name: 'Onyx', hex: HEX[0].hex },
    { name: 'Œil de tigre', hex: HEX[1].hex },
    { name: 'Quartz rose', hex: HEX[2].hex },
    { name: 'Malachite', hex: HEX[3].hex },
  ],
  shopCta: 'BOUTIQUE',
  returnToShopCta: 'Retour à la boutique',
  categoryFocus: 'Focus catégorie',
  categoryNewIn: 'Nouveautés',
  categoryHiddenPocketGift: 'Cadeau poche secrète',
  pricePrefix: 'AED',
  houseCodesEyebrow: 'House Codes',
  houseCodesHeading: 'THE HOUSE CODES',
  discoverCodesCta: 'Découvrir The Codes',
  storyCodes: [
    { title: TITLES[0], subtitle: 'Signature de la maison', imageAlt: 'Monogramme de la maison Bint Saeed — house code' },
    { title: TITLES[1], subtitle: 'Savoir-faire du palmier', imageAlt: 'Tissage Al Khous en frondes de palmier — héritage émirati, house code' },
    { title: TITLES[2], subtitle: 'Ligne et continuité', imageAlt: 'Motif doré Knotted Lines of Lineage — house code' },
    { title: TITLES[3], subtitle: 'Motif régional', imageAlt: 'Motif Al Ain Rosette en cornaline — house code' },
    { title: TITLES[4], subtitle: 'Fil d’or', imageAlt: 'Broderie traditionnelle Al Talli émiratie — house code' },
    { title: TITLES[5], subtitle: 'Lignes de perles', imageAlt: 'Strands en pierres naturelles pour abaya — house code d’héritage émirati' },
  ],
  mediaAlts: {
    strandsCollection: 'Collection Strands Bint Saeed',
    personalisationLabel: 'Étiquette intérieure personnalisée Bint Saeed',
    campaignGazelles: 'Panorama de campagne Bint Saeed — gazelles d’Abu Dhabi',
    heroMobile: 'Abayas Bint Saeed bordeaux et noir, photographie éditoriale de groupe',
    heroDesktop: 'Abayas de luxe Bint Saeed, photographie éditoriale',
    manifestoPortrait: 'Bint Saeed — d’Abu Dhabi au monde',
    categoryPreview: (label) => `Aperçu ${label}`,
  },
  createdForYouEyebrow: 'Porté tout près',
  createdForYouHeading: 'PERSONNALISATION',
  createdForYouBody:
    'Chaque pièce comporte une poche secrète, personnalisable avec un prénom, une date ou un message privé. Idéale pour l’Aïd, les mariages et les étapes marquantes.',
  formatPriceRange: (min, max) => `AED ${min.toLocaleString('fr-FR')}-${max.toLocaleString('fr-FR')}`,
  formatPriceFrom: (min) => `AED ${min.toLocaleString('fr-FR')}+`,
  formatProductPrice: (price) => `AED ${price.toLocaleString('fr-FR')}`,
})

export const HOME_IT = pack({
  heroSubline: 'Portare avanti l’eredità.',
  heroBrandStoryCta: 'La nostra storia',
  manifestoLead: 'Bint Saeed',
  manifestoQuote: 'Un senso di sé che non cambia con il luogo.',
  manifestoSnippets: [
    'Ovunque si viva la vita — da Abu Dhabi a Londra, da Riyadh a Parigi, da Doha a Marbella — non occorre cambiare il modo in cui vi presentate. Ogni pezzo porta la vostra eleganza, il vostro modo di essere, con la stessa costanza, ovunque siate.',
    'Bint Saeed esiste all’incrocio tra heritage e una vita contemporanea — portata oltre i confini, riconosciuta per la sua costanza.',
  ],
  manifestoImageEyebrow: 'Da Abu Dhabi al mondo',
  manifestoLabel: 'MANIFESTO',
  manifestoReadStory: 'Leggi la nostra storia',
  chapterLabel: 'CAPITOLO I',
  collectionHeading: 'LA COLLEZIONE',
  pillars: [
    {
      title: 'Realizzato ad Abu Dhabi',
      copy: 'Ogni pezzo è finito in piccole serie, con attenzione al taglio, al drappeggio e alla longevità.',
    },
    {
      title: 'Firme in pietra naturale',
      copy: 'Strands e dettagli sono scelti per storia, simbolismo e portabilità nel tempo.',
    },
    {
      title: 'Personalizzazione inclusa',
      copy: 'Una nota nella tasca nascosta può essere aggiunta — per un dono, un traguardo, un significato privato.',
    },
  ],
  strandSwatches: [
    { name: 'Onice', hex: HEX[0].hex },
    { name: 'Occhio di tigre', hex: HEX[1].hex },
    { name: 'Quarzo rosa', hex: HEX[2].hex },
    { name: 'Malachite', hex: HEX[3].hex },
  ],
  shopCta: 'SHOP',
  returnToShopCta: 'Torna allo shop',
  categoryFocus: 'Focus categoria',
  categoryNewIn: 'Novità',
  categoryHiddenPocketGift: 'Regalo tasca nascosta',
  pricePrefix: 'AED',
  houseCodesEyebrow: 'House Codes',
  houseCodesHeading: 'THE HOUSE CODES',
  discoverCodesCta: 'Scopri The Codes',
  storyCodes: [
    { title: TITLES[0], subtitle: 'Marchio della maison', imageAlt: 'Monogramma della maison Bint Saeed — house code' },
    { title: TITLES[1], subtitle: 'Artigianato della palma', imageAlt: 'Tessitura Al Khous in foglie di palma — heritage emiratino, house code' },
    { title: TITLES[2], subtitle: 'Linea e continuità', imageAlt: 'Motivo dorato Knotted Lines of Lineage — house code' },
    { title: TITLES[3], subtitle: 'Motivo regionale', imageAlt: 'Motivo Al Ain Rosette in corniola — house code' },
    { title: TITLES[4], subtitle: 'Filo d’oro', imageAlt: 'Ricamo tradizionale Al Talli emiratino — house code' },
    { title: TITLES[5], subtitle: 'Linee di perle', imageAlt: 'Strands in pietre naturali per abaya — house code di heritage emiratino' },
  ],
  mediaAlts: {
    strandsCollection: 'Collezione Strands Bint Saeed',
    personalisationLabel: 'Etichetta interna personalizzata Bint Saeed',
    campaignGazelles: 'Panorama campagna Bint Saeed — gazzelle di Abu Dhabi',
    heroMobile: 'Abaya Bint Saeed bordeaux e nero, fotografia editoriale di gruppo',
    heroDesktop: 'Abaya di lusso Bint Saeed, fotografia editoriale',
    manifestoPortrait: 'Bint Saeed — da Abu Dhabi al mondo',
    categoryPreview: (label) => `Anteprima ${label}`,
  },
  createdForYouEyebrow: 'Portato vicino',
  createdForYouHeading: 'PERSONALIZZAZIONE',
  createdForYouBody:
    'Ogni pezzo include una tasca nascosta, personalizzabile con un nome, una data o un messaggio privato. Ideale per l’Eid, i matrimoni e i traguardi.',
  formatPriceRange: (min, max) => `AED ${min.toLocaleString('it-IT')}-${max.toLocaleString('it-IT')}`,
  formatPriceFrom: (min) => `AED ${min.toLocaleString('it-IT')}+`,
  formatProductPrice: (price) => `AED ${price.toLocaleString('it-IT')}`,
})

export const HOME_DE = pack({
  heroSubline: 'Erbe, das weitergetragen wird.',
  heroBrandStoryCta: 'Unsere Geschichte',
  manifestoLead: 'Bint Saeed',
  manifestoQuote: 'Ein Gefühl für sich selbst, das sich mit dem Ort nicht verändert.',
  manifestoSnippets: [
    'Wo immer das Leben gelebt wird — von Abu Dhabi bis London, von Riad bis Paris, von Doha bis Marbella — müssen Sie nicht ändern, wie Sie sich zeigen. Jedes Stück trägt Ihre Eleganz, Ihre Haltung, mit derselben Ruhe, wo auch immer Sie sind.',
    'Bint Saeed entsteht am Schnittpunkt von Erbe und einem zeitgenössischen Leben — über Grenzen getragen, an seiner Beständigkeit erkannt.',
  ],
  manifestoImageEyebrow: 'Von Abu Dhabi in die Welt',
  manifestoLabel: 'MANIFEST',
  manifestoReadStory: 'Unsere Geschichte lesen',
  chapterLabel: 'KAPITEL I',
  collectionHeading: 'DIE KOLLEKTION',
  pillars: [
    {
      title: 'Gefertigt in Abu Dhabi',
      copy: 'Jedes Stück wird in kleinen Auflagen fertiggestellt — mit Blick auf Schnitt, Fall und Langlebigkeit.',
    },
    {
      title: 'Naturstein als Signatur',
      copy: 'Strands und Details werden nach Geschichte, Symbolik und zeitloser Tragbarkeit gewählt.',
    },
    {
      title: 'Personalisierung inklusive',
      copy: 'Eine Notiz in der versteckten Tasche kann hinzugefügt werden — für Geschenke, Meilensteine und private Bedeutung.',
    },
  ],
  strandSwatches: [
    { name: 'Onyx', hex: HEX[0].hex },
    { name: 'Tigerauge', hex: HEX[1].hex },
    { name: 'Rosenquarz', hex: HEX[2].hex },
    { name: 'Malachit', hex: HEX[3].hex },
  ],
  shopCta: 'SHOP',
  returnToShopCta: 'Zurück zum Shop',
  categoryFocus: 'Kategorie im Fokus',
  categoryNewIn: 'Neuheiten',
  categoryHiddenPocketGift: 'Geschenk mit versteckter Tasche',
  pricePrefix: 'AED',
  houseCodesEyebrow: 'House Codes',
  houseCodesHeading: 'THE HOUSE CODES',
  discoverCodesCta: 'The Codes entdecken',
  storyCodes: [
    { title: TITLES[0], subtitle: 'Zeichen des Hauses', imageAlt: 'Bint Saeed Luxus-Hausmonogramm — house code' },
    { title: TITLES[1], subtitle: 'Palmen-Handwerk', imageAlt: 'Al Khous Palmblattweberei — emiratisches Erbe, house code' },
    { title: TITLES[2], subtitle: 'Linie und Kontinuität', imageAlt: 'Goldmotiv Knotted Lines of Lineage — house code' },
    { title: TITLES[3], subtitle: 'Regionales Motiv', imageAlt: 'Al Ain Rosette Karneol-Motiv — house code' },
    { title: TITLES[4], subtitle: 'Goldfadenarbeit', imageAlt: 'Traditionelle Al Talli Stickerei — emiratisches Erbe, house code' },
    { title: TITLES[5], subtitle: 'Perlenlinien', imageAlt: 'Naturstein-Abaya-Strands — emiratisches Erbe, house code' },
  ],
  mediaAlts: {
    strandsCollection: 'Bint Saeed Strands-Kollektion',
    personalisationLabel: 'Personalisiertes verstecktes Innenetikett Bint Saeed',
    campaignGazelles: 'Bint Saeed Kampagnenpanorama — Gazellen von Abu Dhabi',
    heroMobile: 'Bint Saeed Luxus-Abayas in Bordeaux und Schwarz, editoriale Gruppenfotografie',
    heroDesktop: 'Bint Saeed Luxus-Abayas, editoriale Fotografie',
    manifestoPortrait: 'Bint Saeed — von Abu Dhabi in die Welt',
    categoryPreview: (label) => `Vorschau ${label}`,
  },
  createdForYouEyebrow: 'Nah getragen',
  createdForYouHeading: 'PERSONALISIERUNG',
  createdForYouBody:
    'Jedes Stück enthält eine versteckte Tasche — personalisierbar mit Name, Datum oder privater Nachricht. Passend für Eid, Hochzeiten und Meilensteine.',
  formatPriceRange: (min, max) => `AED ${min.toLocaleString('de-DE')}-${max.toLocaleString('de-DE')}`,
  formatPriceFrom: (min) => `AED ${min.toLocaleString('de-DE')}+`,
  formatProductPrice: (price) => `AED ${price.toLocaleString('de-DE')}`,
})

export const HOME_PT = pack({
  heroSubline: 'Levar a herança mais longe.',
  heroBrandStoryCta: 'A nossa história',
  manifestoLead: 'Bint Saeed',
  manifestoQuote: 'Um sentido de si que não muda com o lugar.',
  manifestoSnippets: [
    'Onde quer que a vida se viva — de Abu Dhabi a Londres, de Riade a Paris, de Doha a Marbella — não precisa de mudar a forma como se apresenta. Cada peça leva a sua elegância, a sua maneira de ser, com a mesma constância, onde quer que esteja.',
    'Bint Saeed existe na interseção entre herança e uma vida contemporânea — levada além das fronteiras, reconhecida pela sua constância.',
  ],
  manifestoImageEyebrow: 'De Abu Dhabi para o mundo',
  manifestoLabel: 'MANIFESTO',
  manifestoReadStory: 'Ler a nossa história',
  chapterLabel: 'CAPÍTULO I',
  collectionHeading: 'A COLEÇÃO',
  pillars: [
    {
      title: 'Feito em Abu Dhabi',
      copy: 'Cada peça é acabada em séries limitadas, com atenção ao corte, ao caimento e à longevidade.',
    },
    {
      title: 'Assinaturas em pedra natural',
      copy: 'Strands e detalhes são escolhidos pela história, pelo simbolismo e pela usabilidade no tempo.',
    },
    {
      title: 'Personalização incluída',
      copy: 'Uma nota no bolso secreto pode ser adicionada — para oferecer, para um marco, para um sentido privado.',
    },
  ],
  strandSwatches: [
    { name: 'Ónix', hex: HEX[0].hex },
    { name: 'Olho de tigre', hex: HEX[1].hex },
    { name: 'Quartzo rosa', hex: HEX[2].hex },
    { name: 'Malaquite', hex: HEX[3].hex },
  ],
  shopCta: 'LOJA',
  returnToShopCta: 'Voltar à loja',
  categoryFocus: 'Foco de categoria',
  categoryNewIn: 'Novidades',
  categoryHiddenPocketGift: 'Presente bolso secreto',
  pricePrefix: 'AED',
  houseCodesEyebrow: 'House Codes',
  houseCodesHeading: 'THE HOUSE CODES',
  discoverCodesCta: 'Descobrir The Codes',
  storyCodes: [
    { title: TITLES[0], subtitle: 'Marca da maison', imageAlt: 'Monograma da maison Bint Saeed — house code' },
    { title: TITLES[1], subtitle: 'Artesanato da palmeira', imageAlt: 'Tecelagem Al Khous em folhas de palmeira — herança emiradense, house code' },
    { title: TITLES[2], subtitle: 'Linha e continuidade', imageAlt: 'Motivo dourado Knotted Lines of Lineage — house code' },
    { title: TITLES[3], subtitle: 'Motivo regional', imageAlt: 'Motivo Al Ain Rosette em cornalina — house code' },
    { title: TITLES[4], subtitle: 'Fio de ouro', imageAlt: 'Bordado tradicional Al Talli emiradense — house code' },
    { title: TITLES[5], subtitle: 'Linhas de contas', imageAlt: 'Strands de pedras naturais para abaya — house code de herança emiradense' },
  ],
  mediaAlts: {
    strandsCollection: 'Coleção Strands Bint Saeed',
    personalisationLabel: 'Etiqueta interior personalizada Bint Saeed',
    campaignGazelles: 'Panorama de campanha Bint Saeed — gazelas de Abu Dhabi',
    heroMobile: 'Abayas Bint Saeed bordeaux e preto, fotografia editorial de grupo',
    heroDesktop: 'Abayas de luxo Bint Saeed, fotografia editorial',
    manifestoPortrait: 'Bint Saeed — de Abu Dhabi para o mundo',
    categoryPreview: (label) => `Pré-visualização ${label}`,
  },
  createdForYouEyebrow: 'Levado perto',
  createdForYouHeading: 'PERSONALIZAÇÃO',
  createdForYouBody:
    'Cada peça inclui um bolso secreto, personalizável com um nome, uma data ou uma mensagem privada. Ideal para o Eid, casamentos e marcos.',
  formatPriceRange: (min, max) => `AED ${min.toLocaleString('pt-PT')}-${max.toLocaleString('pt-PT')}`,
  formatPriceFrom: (min) => `AED ${min.toLocaleString('pt-PT')}+`,
  formatProductPrice: (price) => `AED ${price.toLocaleString('pt-PT')}`,
})
