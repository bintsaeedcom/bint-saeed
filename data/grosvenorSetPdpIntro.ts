import type { PdpIntroParagraph } from '@/lib/products/pdpIntroRich'
import { THE_CODES_AL_TALLI_HREF } from '@/lib/products/pdpIntroRich'
import {
  ZH_GARMENT_JEWELLERY,
  ZH_GARMENT_JEWELLERY_HOOK,
  ZH_NATURAL_STONE_SHORT,
  zhOptionalStrandStonesList,
  zhStoneLabel,
} from '@/lib/i18n/chineseTerminology'

/** English PDP intro — Grosvenor Two-Piece Set (approved brand copy). */
export const GROSVENOR_SET_INTRO_EN: PdpIntroParagraph[] = [
  [
    {
      type: 'text',
      value:
        'An elegant two-piece set with interchangeable natural-stone garment jewellery and a touch of Abu Dhabi heritage.',
    },
  ],
  [
    {
      type: 'text',
      value:
        'The Grosvenor Set brings together a fluid long skirt and coordinating shirt in Champagne Cream satin — designed to be worn as a complete look or styled separately. One set. Two individual pieces.',
    },
  ],
  [
    {
      type: 'text',
      value:
        'Its signature detail is found at the cuffs: interchangeable natural-stone strands created as jewellery for the garment itself. The set includes genuine Onyx stone strands, adding depth and contrast to the soft champagne palette. The strands can be removed entirely or exchanged for other natural stones — Colored Jade, Rose Quartz, Lapis Lazuli, Malachite and more, available separately — allowing the shirt to change with your wardrobe, occasion or mood.',
    },
  ],
  [
    {
      type: 'text',
      value:
        'Wear the shirt with the coordinating skirt for the complete Grosvenor look, or style it independently with tailoring, denim or pieces already in your wardrobe. A shirt with jewellery of its own.',
    },
  ],
  [
    {
      type: 'text',
      value: 'Running through the skirt is another Bint Saeed signature: ',
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
        '-inspired detailing, connecting the contemporary silhouette to the cultural heritage of the United Arab Emirates.',
    },
  ],
  [
    {
      type: 'text',
      value:
        'Al Talli is a traditional Emirati craft in which threads are intricately woven to embellish women’s clothing — historically passed from mothers to daughters, carrying generations of knowledge. In 2022, Al Talli was inscribed by UNESCO on the Representative List of the Intangible Cultural Heritage of Humanity. For Bint Saeed, its significance goes beyond decoration: the Grosvenor Set brings this cultural reference into a contemporary wardrobe, creating an elegant expression of modern dressing with a distinctive connection to Abu Dhabi. From her hands, to her daughter’s hands, and forward.',
    },
  ],
  [
    {
      type: 'text',
      value:
        'The Grosvenor shirt was created to have more than one expression. Wear it with its genuine Onyx strands for a strong monochromatic contrast. Exchange them for Lapis Lazuli, Malachite, Rose Quartz or Colored Jade to introduce a different colour story. Remove the strands altogether for a more minimal interpretation. Change the stone. Change the mood. Style it your way.',
    },
  ],
  [
    {
      type: 'text',
      value:
        'Designed in Abu Dhabi, United Arab Emirates, the Grosvenor Set is created for women building wardrobes beyond borders — contemporary silhouettes, natural stones and cultural details brought together in pieces designed to be styled in your own way.',
    },
  ],
]

/** Chinese PDP intro — luxury-native; BINT SAEED 承悦 brand form in zh. */
export const GROSVENOR_SET_INTRO_ZH: PdpIntroParagraph[] = [
  [{ type: 'text', value: ZH_GARMENT_JEWELLERY_HOOK }],
  [
    {
      type: 'text',
      value:
        '一套优雅的两件式造型，配以可更换的天然石服装珠宝，并承袭阿布扎比的文化底蕴。',
    },
  ],
  [
    {
      type: 'text',
      value:
        'Grosvenor 两件套以香槟奶油色缎面，将飘逸长裙与协调衬衫融于一体——可成套穿着，亦可分开搭配。一套衣裳，两件单品。',
    },
  ],
  [
    {
      type: 'text',
      value: `标志性细节落于袖口：可更换的${ZH_NATURAL_STONE_SHORT}${ZH_GARMENT_JEWELLERY}链饰，是专为服饰而设计的珠宝。套装附赠${zhStoneLabel('onyx')}链两条，为柔和香槟色调增添层次与对比；链饰可完全取下，或更换为${zhOptionalStrandStonesList()}等其他${ZH_NATURAL_STONE_SHORT}（另购）——让衬衫随衣橱、场合与心情而变。`,
    },
  ],
  [
    {
      type: 'text',
      value:
        '衬衫可与同套半裙呈现完整 Grosvenor 造型，亦可与西裤、牛仔或衣橱既有单品独立穿着——一件自带珠宝的衬衫。',
    },
  ],
  [
    {
      type: 'text',
      value: '半裙上仍有 BINT SAEED 承悦另一项标志性表达：',
    },
    {
      type: 'codeLink',
      label: 'Al Talli',
      href: THE_CODES_AL_TALLI_HREF,
      bold: true,
    },
    {
      type: 'text',
      value: '灵感细节，将当代廓形与阿联酋文化渊源相连。',
    },
  ],
  [
    {
      type: 'text',
      value:
        'Al Talli 是阿联酋传统手工艺，以精巧织线点缀女装——世代由母亲传予女儿，承载深厚的家传技艺。2022 年，Al Talli 被联合国教科文组织列入《人类非物质文化遗产代表作名录》。对 BINT SAEED 承悦而言，其意义不止于装饰：Grosvenor 两件套将这一文化符号带入当代衣橱，呈现现代着装中优雅而富有阿布扎比品格的表达。由她的双手，传到女儿手中，再向前延伸。',
    },
  ],
  [
    {
      type: 'text',
      value:
        `Grosvenor 衬衫被赋予多种表情。搭配附赠的${zhStoneLabel('onyx')}链，呈现鲜明的同色对比；换上${zhStoneLabel('lapisLazuli')}、${zhStoneLabel('malachite')}、${zhStoneLabel('roseQuartz')}或${zhStoneLabel('coloredJade')}，则开启另一段色彩叙事；取下链饰，又是更为极简的诠释。换一颗石，换一种心境。按您的方式演绎。`,
    },
  ],
  [
    {
      type: 'text',
      value:
        '于阿联酋阿布扎比设计，Grosvenor 两件套献给跨越疆界的现代女性——当代廓形、天然宝石与文化细节融于一体，任您以自己的方式穿着搭配。',
    },
  ],
]
