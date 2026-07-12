import type { PdpIntroParagraph } from '@/lib/products/pdpIntroRich'
import {
  THE_CODES_AL_TALLI_HREF,
  THE_CODES_KNOTTED_LINES_HREF,
} from '@/lib/products/pdpIntroRich'

/** English PDP intro — Covent Garden Abaya. */
export const COVENT_GARDEN_ABAYA_INTRO_EN: PdpIntroParagraph[] = [
  [
    {
      type: 'text',
      value:
        'Every fashion house has the piece that defines it. For Bint Saeed, the Covent Garden Abaya is one of those creations.',
    },
  ],
  [
    {
      type: 'text',
      value:
        'Bringing together contemporary tailoring, art, and one of the United Arab Emirates’ most treasured traditional crafts, the Covent Garden Abaya was created for women who appreciate timeless elegance expressed through exceptional design. Fully lined with a soft crepe lining, its elegant A-line silhouette moves beautifully with every step, creating a refined presence for weddings, official occasions, elegant gatherings, and moments where making a lasting impression matters. The moment it is worn, the silhouette encourages a slower step, a straighter posture, and a confidence that naturally draws attention.',
    },
  ],
  [
    {
      type: 'text',
      value:
        'Available in Burgundy, Deep Black, and Navy Blue, every detail has been carefully considered. The shoulder epaulettes are finished with Bint Saeed’s signature gold-tone ',
    },
    {
      type: 'codeLink',
      label: 'Knotted Line',
      href: THE_CODES_KNOTTED_LINES_HREF,
      bold: true,
    },
    {
      type: 'text',
      value: ' buttons, while the wide cuffs feature ',
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
        ' woven trim. Recognised by UNESCO as Intangible Cultural Heritage, Al Talli is one of the United Arab Emirates’ most treasured traditional Emirati artisanal crafts. At Bint Saeed, we reimagine the use of Al Talli through contemporary design, allowing this remarkable element of Emirati cultural heritage to be worn and appreciated by women around the world.',
    },
  ],
  [
    {
      type: 'text',
      value:
        'Completing the design is a detachable statement sash, finished with Al Talli trim and Bint Saeed signature gold-tone Monogram pin. Worn draped naturally from the shoulder or styled diagonally across the body, it transforms the silhouette with a sense of ceremony, distinction, and timeless elegance.',
    },
  ],
  [
    {
      type: 'text',
      value:
        'Like every Bint Saeed abaya, the Covent Garden Abaya can be personalised with the house’s signature hidden inner label, allowing you to add a name, date, or meaningful message that remains close to you every time you wear it.',
    },
  ],
  [
    {
      type: 'text',
      value: 'The Covent Garden Abaya pairs beautifully with the ',
    },
    {
      type: 'codeLink',
      label: 'Covent Garden Dress',
      href: '/shop/covent-garden-long-dress',
      bold: true,
    },
    { type: 'text', value: ' or the ' },
    {
      type: 'codeLink',
      label: 'Hampstead Dress',
      href: '/shop/hampstead-dress',
      bold: true,
    },
    {
      type: 'text',
      value:
        ', creating refined layered silhouettes where every detail has been thoughtfully considered from the inside out.',
    },
  ],
]
