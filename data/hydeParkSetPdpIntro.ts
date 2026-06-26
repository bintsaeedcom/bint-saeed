import type { PdpIntroParagraph } from '@/lib/products/pdpIntroRich'
import { THE_CODES_KNOTTED_LINES_HREF } from '@/lib/products/pdpIntroRich'

/** English PDP intro — Hyde Park Set (approved copy). */
export const HYDE_PARK_SET_INTRO_EN: PdpIntroParagraph[] = [
  [{ type: 'text', value: 'The set you’ll reach for more than any other.' }],
  [
    {
      type: 'text',
      value:
        'Some pieces are bought for a season. Others become part of the way you dress. The Hyde Park Set belongs to the latter.',
    },
  ],
  [
    {
      type: 'text',
      value:
        'Created for women with an evolving lifestyle, it brings together effortless comfort and contemporary tailoring in a silhouette that feels equally at home during travel as it does in everyday life. Relaxed enough for long days on the move yet refined enough for lunch, dinner or an unexpected meeting, it is the kind of set that naturally adapts to wherever the day takes you.',
    },
  ],
  [
    {
      type: 'text',
      value:
        'The oversized shirt falls effortlessly over the body, while the flowing palazzo trousers create elegant movement with every step. Wear the shirt loose for an effortless look, tuck it into the waistband for a more defined silhouette, or tie it at the waist for an entirely different expression. One set. Countless ways to wear it.',
    },
  ],
  [
    {
      type: 'text',
      value:
        'Available exclusively in Deep Black, every detail has been carefully considered. Functional chest pockets and hidden side seam pockets combine practicality with refined design, allowing you to carry your phone, lipstick or other daily essentials while keeping your hands free. Finished with Bint Saeed’s signature gold-tone ',
    },
    {
      type: 'codeLink',
      label: 'Knotted Line',
      href: THE_CODES_KNOTTED_LINES_HREF,
      bold: true,
    },
    {
      type: 'text',
      value:
        ' buttons, the Hyde Park Set celebrates the beauty of understated elegance.',
    },
  ],
  [
    {
      type: 'text',
      value:
        'From the Corniche in Abu Dhabi to the shores of Portofino, from London to the gardens of Rabat, from the streets of Singapore to the coastline of Miami, the boulevards of Los Angeles and the elegance of Brunei, the Hyde Park Set moves effortlessly with you. Created to travel beautifully and remain elegant across destinations, it is the kind of piece you’ll instinctively reach for, again and again.',
    },
  ],
]
