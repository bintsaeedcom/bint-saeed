import type { ProductFaqItem } from '@/lib/products/productSchemaMeta'
import {
  ZH_GARMENT_JEWELLERY,
  ZH_NATURAL_STONE_SHORT,
  zhOptionalStrandStonesList,
  zhStoneLabel,
} from '@/lib/i18n/chineseTerminology'

export const GROSVENOR_SET_FAQ_EN: ProductFaqItem[] = [
  {
    question: 'Can I order the shirt and skirt in different sizes?',
    answer:
      'Yes. We understand that many women have different sizing for their upper and lower body. While the Grosvenor Two-Piece Set is sold as a complete coordinate, we are happy to accommodate different sizes whenever possible.\n\nSelect your preferred skirt size when placing your order. Then, in the Order Notes section during checkout, mention the size you would like for the shirt. Our Customer Care team will review your request, contact you if needed, and ensure your set is prepared according to your preferred sizing.',
  },
  {
    question: 'Can I wear the shirt and skirt separately?',
    answer:
      'Yes. The Grosvenor Set is a true two-piece coordinate — a coordinating satin shirt and fluid long skirt designed to be worn together or styled independently.\n\nWear the complete look for the full Grosvenor expression, or pair the shirt with tailoring, denim or pieces already in your wardrobe. The skirt works beautifully on its own with a fine knit or silk camisole when the occasion asks for a quieter line.',
  },
  {
    question: 'How does the interchangeable garment jewellery work?',
    answer:
      'Interchangeable natural-stone strands sit at the shirt cuffs, created as jewellery for the garment itself. The set includes genuine Onyx strands, which can be worn for strong monochromatic contrast against the Champagne Cream satin, removed entirely for a more minimal shirt, or exchanged for other natural stones.\n\nAdditional garment-jewellery strands are available separately — including Colored Jade, Rose Quartz, Lapis Lazuli, Malachite and more — allowing you to change the stone, change the mood, and style the shirt your way.',
  },
  {
    question: 'What is Al Talli and how does it feature on the Grosvenor Set?',
    answer:
      'Al Talli is a traditional Emirati craft in which threads are intricately woven to embellish women’s clothing — historically passed from mothers to daughters and part of the UAE’s cultural heritage. In 2022, Al Talli was inscribed by UNESCO on the Representative List of the Intangible Cultural Heritage of Humanity.\n\nOn the Grosvenor Set, Al Talli-inspired detailing runs through the satin skirt, connecting the contemporary silhouette to Abu Dhabi heritage while the shirt carries interchangeable natural-stone garment jewellery at the cuffs.',
  },
  {
    question: 'Are genuine Onyx strands included with the set?',
    answer:
      'Yes. The Grosvenor Two-Piece Set includes genuine natural Onyx garment-jewellery strands with the shirt. They attach at the cuffs, add depth and contrast to the soft champagne palette, and can be removed or exchanged for other natural stones purchased separately.',
  },
  {
    question: 'How should I care for the Grosvenor Set?',
    answer:
      'To preserve the satin, signature Knotted Line cuff buttons, and delicate Al Talli-inspired detailing, we recommend professional dry cleaning only. Handle the metallic woven trim with care to preserve its beauty for years to come.',
  },
  {
    question: 'Is custom length available for the maxi skirt?',
    answer:
      'Yes. Custom lengths can be requested for the long skirt to suit your height and preferred floor clearance. Mention your requirements in Order Notes at checkout, or contact Customer Care before ordering — our team will confirm feasibility and timing with you.',
  },
]

/** Chinese PDP FAQ — luxury-native, aligned with approved EN structure. */
export const GROSVENOR_SET_FAQ_ZH: ProductFaqItem[] = [
  {
    question: '衬衫与半裙可以选不同尺码吗？',
    answer:
      '可以。我们理解许多女性的上下身尺码并不相同。Grosvenor 两件套虽作为完整协调套装出售，我们仍会在能力范围内尽量满足分码需求。\n\n下单时请选择半裙尺码，并在结账「订单备注」中注明衬衫所需尺码。客服团队将审核您的需求，必要时与您联系，并按您的尺码备货。',
  },
  {
    question: '衬衫与半裙可以分开穿着吗？',
    answer:
      '可以。Grosvenor 两件套为真正意义上的两件式协调造型——香槟奶油色缎面衬衫与飘逸长裙，既可成套穿着，亦可各自独立搭配。\n\n成套呈现完整的 Grosvenor 气质；衬衫亦可与西裤、牛仔或衣橱单品单独穿着；半裙配细腻针织或真丝背心，亦能在克制场合中自成风景。',
  },
  {
    question: `可更换的${ZH_GARMENT_JEWELLERY}如何佩戴？`,
    answer:
      `${ZH_NATURAL_STONE_SHORT}链饰系于衬衫袖口，是专为服饰而设计的珠宝。套装附赠${zhStoneLabel('onyx')}链，与香槟奶油色缎面形成沉稳的单色对比；亦可完全取下，呈现更为利落的衬衫线条，或更换为其他${ZH_NATURAL_STONE_SHORT}。\n\n更多${ZH_GARMENT_JEWELLERY}链饰可另行选购——包括${zhOptionalStrandStonesList()}等——换一颗石，换一种心境，让衬衫随您的心意而变。`,
  },
  {
    question: '什么是 Al Talli？它如何体现在 Grosvenor 两件套上？',
    answer:
      'Al Talli 是阿联酋传统手工艺，以精巧织线点缀女装——历史上由母亲传予女儿，是阿联酋文化遗产的重要组成。2022 年，Al Talli 被联合国教科文组织列入《人类非物质文化遗产代表作名录》。\n\n在 Grosvenor 两件套上，Al Talli 灵感细节贯穿缎面半裙，将当代廓形与阿布扎比传承相连；衬衫袖口则配以可更换的天然石服饰珠宝。',
  },
  {
    question: `套装是否附赠${zhStoneLabel('onyx')}链？`,
    answer:
      `是的。Grosvenor 两件套附赠天然${zhStoneLabel('onyx')}${ZH_GARMENT_JEWELLERY}链，系于衬衫袖口，为柔和香槟色调增添层次与对比；可取下，亦可更换为其他${ZH_NATURAL_STONE_SHORT}（另购）。`,
  },
  {
    question: '如何护理 Grosvenor 两件套？',
    answer:
      '为保持缎面、Knotted Line 标志性袖扣及精致的 Al Talli 灵感细节，建议仅限专业干洗。金属编织腰饰请妥善保养，以长久留存其光泽。',
  },
  {
    question: '及地半裙可定制长度吗？',
    answer:
      '可以。可按您的身高与希望的裙摆离地距离，定制半裙长度。请于结账「订单备注」中说明，或购前联系客服——我们将与您确认可行性与周期。',
  },
]
