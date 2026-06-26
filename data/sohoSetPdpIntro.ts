import type { PdpIntroParagraph } from '@/lib/products/pdpIntroRich'
import {
  THE_CODES_AL_TALLI_HREF,
  THE_CODES_KNOTTED_LINES_HREF,
} from '@/lib/products/pdpIntroRich'

/** English PDP intro — Soho Set (approved copy). */
export const SOHO_SET_INTRO_EN: PdpIntroParagraph[] = [
  [{ type: 'text', value: 'The set that earns its place in your wardrobe.' }],
  [
    {
      type: 'text',
      value:
        'Some pieces are designed for a single occasion. Others become part of the way you live. The Soho Set belongs to the latter.',
    },
  ],
  [
    {
      type: 'text',
      value:
        'Created for women with an evolving lifestyle, the Soho Set combines the relaxed ease of luxury travelwear with the refinement of contemporary tailoring. It feels almost sporty in its comfort, yet unmistakably elegant in its appearance. Whether paired with trainers for a morning coffee in Dubai, worn during a journey between cities, or styled with heels for dinner in London, it adapts effortlessly to wherever the day leads.',
    },
  ],
  [
    {
      type: 'text',
      value:
        'Cut from a beautifully fluid premium crepe, the oversized shirt drapes naturally over the body while the wide-leg palazzo trousers create graceful movement with every step. Wear the shirt loose for an effortless silhouette, tuck it into the waistband for a more tailored appearance, or tie it at the waist to create an entirely different look. One set. Endless possibilities.',
    },
  ],
  [
    {
      type: 'text',
      value:
        'Available in Deep Black and Navy Blue, every detail has been thoughtfully considered. Two functional chest pockets and two hidden side seam pockets in the trousers combine everyday practicality with refined design, allowing you to carry your phone, lipstick or other small essentials while keeping your hands free. Finished with Bint Saeed’s signature gold-tone ',
    },
    {
      type: 'codeLink',
      label: 'Knotted Line',
      href: THE_CODES_KNOTTED_LINES_HREF,
      bold: true,
    },
    {
      type: 'text',
      value: ' buttons and the house’s distinctive ',
    },
    {
      type: 'codeLink',
      label: 'Al Talli',
      href: THE_CODES_AL_TALLI_HREF,
      bold: true,
    },
    {
      type: 'text',
      value:
        ' trim running elegantly along both trouser side seams, the Soho Set carries one of the United Arab Emirates’ most treasured traditional crafts into contemporary womenswear.',
    },
  ],
  [
    {
      type: 'text',
      value:
        'Recognised by UNESCO as Intangible Cultural Heritage, Al Talli is one of the United Arab Emirates’ most celebrated traditional Emirati artisanal crafts. At Bint Saeed, we reinterpret this remarkable heritage through contemporary design, allowing an important part of Emirati culture to be appreciated by the woman of today.',
    },
  ],
  [
    {
      type: 'text',
      value:
        'Whether worn in Abu Dhabi, Dubai, Doha, Riyadh, Kuwait City, Muscat, London, Paris, Milan, Toronto or Singapore, the Soho Set reflects Bint Saeed’s philosophy of carrying heritage forward through timeless design. It is a set created to travel effortlessly with the woman who wears it, remaining elegant wherever life takes her.',
    },
  ],
]
