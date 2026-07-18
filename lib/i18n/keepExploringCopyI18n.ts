import type { AppLocale } from '@/lib/i18n/routing'

/**
 * House lines for keep-browsing / dead-end surfaces.
 * Pick by context — never reuse the old “pieces that speak to you” pattern.
 */
export type KeepExploringLineId =
  | 'throughTheHouse'
  | 'anotherDetail'
  | 'storyForward'
  | 'nextPieceWaiting'
  | 'worldOfBintSaeed'

const EN: Record<KeepExploringLineId, string> = {
  throughTheHouse: 'Continue through the house and discover what comes next.',
  anotherDetail: 'There is always another detail waiting to be discovered.',
  storyForward: 'Explore the pieces that carry the Bint Saeed story forward.',
  nextPieceWaiting: 'Your next Bint Saeed piece may already be waiting.',
  worldOfBintSaeed: 'Continue exploring the world of Bint Saeed.',
}

const AR: Record<KeepExploringLineId, string> = {
  throughTheHouse: 'واصلي التجوّل في الدار واكتشفي ما ينتظرك بعد ذلك.',
  anotherDetail: 'هناك دائماً تفصيل آخر بانتظار أن يُكتشف.',
  storyForward: 'استكشفي القطع التي تواصل قصة Bint Saeed.',
  nextPieceWaiting: 'قطعتك التالية من Bint Saeed قد تكون بانتظارك الآن.',
  worldOfBintSaeed: 'واصلي استكشاف عالم Bint Saeed.',
}

const FR: Record<KeepExploringLineId, string> = {
  throughTheHouse: 'Continuez à travers la maison et découvrez ce qui vient ensuite.',
  anotherDetail: 'Il y a toujours un autre détail à découvrir.',
  storyForward: 'Explorez les pièces qui portent l’histoire de Bint Saeed plus loin.',
  nextPieceWaiting: 'Votre prochaine pièce Bint Saeed vous attend peut-être déjà.',
  worldOfBintSaeed: 'Continuez à explorer l’univers Bint Saeed.',
}

const IT: Record<KeepExploringLineId, string> = {
  throughTheHouse: 'Continua attraverso la maison e scopri ciò che viene dopo.',
  anotherDetail: 'C’è sempre un altro dettaglio in attesa di essere scoperto.',
  storyForward: 'Esplora i pezzi che portano avanti la storia di Bint Saeed.',
  nextPieceWaiting: 'Il tuo prossimo pezzo Bint Saeed potrebbe già attenderti.',
  worldOfBintSaeed: 'Continua a esplorare il mondo di Bint Saeed.',
}

const DE: Record<KeepExploringLineId, string> = {
  throughTheHouse: 'Gehen Sie weiter durch das Haus und entdecken Sie, was als Nächstes kommt.',
  anotherDetail: 'Es wartet immer ein weiteres Detail darauf, entdeckt zu werden.',
  storyForward: 'Entdecken Sie die Stücke, die die Geschichte von Bint Saeed weitertragen.',
  nextPieceWaiting: 'Ihr nächstes Bint Saeed Stück wartet vielleicht schon.',
  worldOfBintSaeed: 'Entdecken Sie weiter die Welt von Bint Saeed.',
}

const NL: Record<KeepExploringLineId, string> = {
  throughTheHouse: 'Ga verder door het Huis en ontdek wat hierna komt.',
  anotherDetail: 'Er wacht altijd nog een detail om ontdekt te worden.',
  storyForward: 'Ontdek de stukken die het verhaal van Bint Saeed voortzetten.',
  nextPieceWaiting: 'Uw volgende Bint Saeed-stuk wacht misschien al.',
  worldOfBintSaeed: 'Blijf de wereld van Bint Saeed verkennen.',
}

const PT: Record<KeepExploringLineId, string> = {
  throughTheHouse: 'Continue pela maison e descubra o que vem a seguir.',
  anotherDetail: 'Há sempre outro detalhe à espera de ser descoberto.',
  storyForward: 'Explore as peças que levam a história da Bint Saeed mais longe.',
  nextPieceWaiting: 'A sua próxima peça Bint Saeed pode já estar à espera.',
  worldOfBintSaeed: 'Continue a explorar o universo Bint Saeed.',
}

const ES: Record<KeepExploringLineId, string> = {
  throughTheHouse: 'Sigue por la maison y descubre lo que viene después.',
  anotherDetail: 'Siempre hay otro detalle esperando ser descubierto.',
  storyForward: 'Explora las piezas que llevan adelante la historia de Bint Saeed.',
  nextPieceWaiting: 'Tu próxima pieza Bint Saeed puede estar ya esperándote.',
  worldOfBintSaeed: 'Sigue explorando el universo Bint Saeed.',
}

const RU: Record<KeepExploringLineId, string> = {
  throughTheHouse: 'Продолжайте путь по дому и откройте, что ждёт дальше.',
  anotherDetail: 'Всегда есть ещё одна деталь, ожидающая открытия.',
  storyForward: 'Откройте вещи, которые продолжают историю Bint Saeed.',
  nextPieceWaiting: 'Ваша следующая вещь Bint Saeed, возможно, уже ждёт вас.',
  worldOfBintSaeed: 'Продолжайте открывать мир Bint Saeed.',
}

const ZH: Record<KeepExploringLineId, string> = {
  throughTheHouse: '继续穿行品牌之境，发现接下来的篇章。',
  anotherDetail: '总有另一处细节等待被发现。',
  storyForward: '探索承载 Bint Saeed 故事的单品。',
  nextPieceWaiting: '您的下一件 Bint Saeed 单品或许已在等待。',
  worldOfBintSaeed: '继续探索 Bint Saeed 的世界。',
}

const ID: Record<KeepExploringLineId, string> = {
  throughTheHouse: 'Lanjutkan menjelajahi maison dan temukan apa yang menyusul.',
  anotherDetail: 'Selalu ada detail lain yang menunggu untuk ditemukan.',
  storyForward: 'Jelajahi potongan yang membawa kisah Bint Saeed terus maju.',
  nextPieceWaiting: 'Potongan Bint Saeed berikutnya mungkin sudah menunggu Anda.',
  worldOfBintSaeed: 'Terus jelajahi dunia Bint Saeed.',
}

const MS: Record<KeepExploringLineId, string> = {
  throughTheHouse: 'Teruskan menerusi maison dan temui apa yang menyusul.',
  anotherDetail: 'Sentiasa ada perincian lain yang menunggu untuk ditemui.',
  storyForward: 'Terokai potongan yang membawa kisah Bint Saeed terus maju.',
  nextPieceWaiting: 'Potongan Bint Saeed seterusnya mungkin sudah menanti anda.',
  worldOfBintSaeed: 'Teruskan meneroka dunia Bint Saeed.',
}

export function getKeepExploringLine(
  locale: AppLocale | string,
  id: KeepExploringLineId,
): string {
  if (locale === 'ar') return AR[id]
  if (locale === 'fr') return FR[id]
  if (locale === 'it') return IT[id]
  if (locale === 'de') return DE[id]
  if (locale === 'nl') return NL[id]
  if (locale === 'pt') return PT[id]
  if (locale === 'es') return ES[id]
  if (locale === 'ru') return RU[id]
  if (locale === 'zh') return ZH[id]
  if (locale === 'id') return ID[id]
  if (locale === 'ms') return MS[id]
  return EN[id]
}
