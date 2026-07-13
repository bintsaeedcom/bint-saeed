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
  throughTheHouse: 'Continuez a travers la maison et decouvrez ce qui vient ensuite.',
  anotherDetail: 'Il y a toujours un autre detail a decouvrir.',
  storyForward: 'Explorez les pieces qui portent l’histoire de Bint Saeed plus loin.',
  nextPieceWaiting: 'Votre prochaine piece Bint Saeed vous attend peut-etre deja.',
  worldOfBintSaeed: 'Continuez a explorer l’univers Bint Saeed.',
}

export function getKeepExploringLine(
  locale: AppLocale | string,
  id: KeepExploringLineId,
): string {
  if (locale === 'ar') return AR[id]
  if (locale === 'fr') return FR[id]
  return EN[id]
}
