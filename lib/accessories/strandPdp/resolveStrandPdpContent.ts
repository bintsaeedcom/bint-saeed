import type { AppLocale } from '@/lib/i18n/routing'
import { resolveAccessoryId } from '@/lib/accessories/accessoryRouteAliases'
import type { StrandPdpContent } from '@/lib/accessories/strandPdp/types'
import {
  buildStrandFaqFromTemplates,
  resolveStrandCare,
  STRAND_PDP_LOCALE_TEMPLATES,
} from '@/lib/accessories/strandPdp/localeTemplatesI18n'
import {
  STONE_VARIANTS_I18N,
  type StoneVariantId,
} from '@/lib/accessories/strandPdp/stoneVariantsI18n'
import { isAlAinRosetteStrandId } from '@/lib/accessories/strandPdp/alAinRosetteStrandIds'
import { getAlAinRosetteStrandPdp } from '@/lib/accessories/strandPdp/alAinRosetteStrandPdpI18n'

const STRAND_IDS = new Set<string>(Object.keys(STONE_VARIANTS_I18N))

function isStoneVariantId(id: string): id is StoneVariantId {
  return STRAND_IDS.has(id)
}

export function getStrandPdpContent(
  accessoryId: string,
  locale: AppLocale = 'en',
): StrandPdpContent | undefined {
  const id = resolveAccessoryId(accessoryId)
  if (isAlAinRosetteStrandId(id)) {
    return getAlAinRosetteStrandPdp(id, locale)
  }
  if (!isStoneVariantId(id)) return undefined

  const stone = STONE_VARIANTS_I18N[id][locale]
  const templates = STRAND_PDP_LOCALE_TEMPLATES[locale]

  const introP2 =
    stone.introP2Style === 'mood' ? templates.introP2Mood : templates.introP2Evening

  const strandPairName = stone.stoneLabel

  return {
    headline: stone.headline,
    introParagraphs: [
      stone.introP1,
      introP2,
      templates.introP3,
      stone.introP4,
      templates.introClosing,
    ],
    productDetails: [
      stone.limitedEdition
        ? templates.pairOfLimited(strandPairName)
        : templates.pairOf(strandPairName),
      templates.detailDesignedFor,
      templates.detailHandAssembled,
      stone.beadDetail,
      templates.detailHematite,
      templates.detailKnottedLine,
      templates.detailLength,
      templates.detailAttach,
      templates.detailPersonalise,
      templates.detailNotJewellery,
      templates.detailGiftBox,
    ],
    materials: [
      stone.materialStone,
      templates.materialHematite,
      templates.materialKnottedLine,
    ],
    stoneOrigin: stone.stoneOrigin,
    naturalStone: templates.naturalStoneBody,
    care: [...resolveStrandCare(locale)],
    faq: buildStrandFaqFromTemplates(
      templates,
      stone.strandLabel,
      stone.stoneLabel,
      stone.variationNote,
      locale,
    ),
  }
}

export function getStrandPdpSectionTitles(locale: AppLocale = 'en') {
  const templates = STRAND_PDP_LOCALE_TEMPLATES[locale]
  return {
    stoneOrigin: templates.stoneOriginTitle,
    naturalStone: templates.naturalStoneTitle,
  }
}
