import type { PdpIntroParagraph } from '@/lib/products/pdpIntroRich'
import {
  THE_CODES_KHOUS_HREF,
  THE_CODES_KNOTTED_LINES_HREF,
} from '@/lib/products/pdpIntroRich'

/** English PDP intro — Covent Garden Signature Set (rich segments with house-code links). */
export const COVENT_GARDEN_SIGNATURE_SET_INTRO_EN: PdpIntroParagraph[] = [
  [
    {
      type: 'text',
      value:
        "The best wardrobes aren't built by buying more. They're built by choosing pieces that create more possibilities every time you open your wardrobe.",
    },
  ],
  [
    {
      type: 'text',
      value:
        'The Covent Garden Signature Set is a contemporary two-piece set comprising the Covent Garden Dress and a matching short-sleeve tailored jacket. Designed for the moments that shape everyday life, from work and elegant lunches to afternoon tea, dinners, and cultural events, it offers a refined silhouette that feels polished without ever feeling overdressed.',
    },
  ],
  [
    {
      type: 'text',
      value:
        "Available in Burgundy, Deep Black, and Navy Blue, the tailored jacket is distinguished by two front pockets featuring Bint Saeed's signature woven detailing inspired by ",
    },
    { type: 'codeLink', label: 'Al Khous', href: THE_CODES_KHOUS_HREF, bold: true },
    {
      type: 'text',
      value:
        ", one of the United Arab Emirates' oldest traditional crafts. For generations, Emiratis wove the leaves of the date palm into functional and decorative objects, making Al Khous an enduring expression of the country's cultural heritage. Reinterpreted through contemporary tailoring, this distinctive detail introduces texture and craftsmanship while maintaining the clean, elegant lines of the jacket. Fully lined for a soft touch and lasting comfort, it reflects Bint Saeed's commitment to carrying elements of Emirati heritage into contemporary womenswear.",
    },
  ],
  [
    {
      type: 'text',
      value: "Finished with Bint Saeed's signature gold-tone ",
    },
    {
      type: 'codeLink',
      label: 'Knotted Lines',
      href: THE_CODES_KNOTTED_LINES_HREF,
      bold: true,
    },
    {
      type: 'text',
      value:
        " buttons, the jacket carries one of the house's enduring design codes. Inspired by the connections that unite generations, each button represents the stories, values, and traditions that continue to be carried forward.",
    },
  ],
  [
    {
      type: 'text',
      value:
        'The coordinating Covent Garden Dress completes the silhouette with graceful proportions and understated elegance. Fully lined for a soft touch and lasting comfort, it features hidden side seam pockets and allows the length to be altered for a more personalised fit. Designed to create a beautifully coordinated look with the jacket, the dress can equally be worn on its own, bringing even more styling possibilities to an already versatile wardrobe.',
    },
  ],
  [
    {
      type: 'text',
      value:
        "Created in Abu Dhabi, the Covent Garden Signature Set reflects Bint Saeed's vision of carrying elements of Emirati heritage into contemporary womenswear for women around the world. It is created for women who appreciate refined tailoring, meaningful craftsmanship, and clothing that moves effortlessly between occasions while remaining true to their personal style.",
    },
  ],
  [
    {
      type: 'text',
      value:
        'Designed to remain relevant beyond seasons, the Covent Garden Signature Set is a contemporary expression of coordinated dressing for women who understand that the best wardrobes are built not by owning more, but by choosing better.',
    },
  ],
]
