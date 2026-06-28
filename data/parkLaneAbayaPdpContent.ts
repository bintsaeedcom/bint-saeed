import type { ProductPdpContent } from '@/data/productPdpContent'
import type { AppLocale } from '@/lib/i18n/routing'
import {
  buildParkLaneAbayaDetailGroups,
  PARK_LANE_CARE,
  PARK_LANE_COMPOSITION,
  PARK_LANE_FIT_AND_SIZE,
  PARK_LANE_ORIGIN,
} from '@/data/parkLaneAbayaPdpDetails'
import { PARK_LANE_ABAYA_FAQ_EN } from '@/data/parkLaneAbayaPdpFaq'

export const PARK_LANE_ABAYA_INTRO_EN = [
  'The abaya that speaks before you do.',
  'Some garments rely on embellishment to be noticed. The Park Lane Abaya proves that exceptional tailoring is enough.',
  'Designed with a graceful A-line silhouette, this contemporary designer abaya creates effortless movement while maintaining a beautifully balanced shape. Crafted from a softly textured crepe with a refined grain, it drapes naturally from the shoulders, allowing every step to feel poised, confident and elegant.',
  'Inspired by the precision of contemporary tailoring, the shoulders are finished with Bint Saeed’s signature gold-tone Knotted Line buttons. More than a design detail, they create subtle structure through the upper silhouette, encouraging a confident posture from the moment the abaya is worn.',
  'Flowing from the left shoulder is an integrated scarf that moves naturally with the wearer, adding softness and graceful movement without interrupting the clean architectural lines of the silhouette. Finished with signature gold-tone Bint Saeed emblem cufflinks, the wide cuffs introduce a discreet touch of distinction while remaining elegantly understated.',
  'Available in Deep Black, Dark Maroon and Navy Blue, every detail of the Park Lane Abaya has been thoughtfully considered. This modern abaya is defined by its refined silhouette, integrated shoulder scarf and subtle gold-tone accents, creating a harmonious balance between movement and structure. Hidden side seam pockets provide everyday practicality, while the clean tailoring allows the woman wearing it to remain the focal point. Rather than relying on embellishment, the Park Lane Abaya celebrates proportion, craftsmanship and timeless elegance, making it an abaya that remains relevant season after season.',
  'The Park Lane Abaya belongs as naturally in London’s business districts and Parisian cafés as it does in Abu Dhabi, Riyadh and Doha. Created for women who move effortlessly between cultures and occasions, it can be worn as a refined contemporary layer or embraced as a timeless abaya, adapting beautifully to every setting.',
] as const

export function buildParkLaneAbayaPdpContent(
  _color?: string,
  locale: AppLocale = 'en',
): ProductPdpContent {
  return {
    introParagraphs: [...PARK_LANE_ABAYA_INTRO_EN],
    productDetails: [],
    productDetailGroups: buildParkLaneAbayaDetailGroups(locale),
    compositionDetails: [...PARK_LANE_COMPOSITION],
    careDetails: [...PARK_LANE_CARE],
    fitAndSizeDetails: [...PARK_LANE_FIT_AND_SIZE],
    originDetails: [...PARK_LANE_ORIGIN],
    faq: PARK_LANE_ABAYA_FAQ_EN,
  }
}
