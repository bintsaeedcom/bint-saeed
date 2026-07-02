# Bint Saeed — Stripe price reference

Fixed international retail prices (not live FX). Personalisation on abayas is **complimentary**.

Last synced from codebase: 2026-07-02

**Stripe `unit_amount`** = minor units (fils / pence / cents). KWD, BHD, OMR use 3 decimal places (×1000).

**Ready-to-wear:** AED / GBP / EUR are catalogue anchors; all other currencies use the Belgravia + Kaftan luxury calibration (psychological rounding, close to reference FX).

**Accessories:** AED not confirmed for strands, charms, or necklaces — **do not create Stripe prices yet**. Placeholder AED in the shop is for layout only.

## Ready-to-wear (shop) — enter in Stripe

| Name | Slug | AED | SAR | QAR | OMR | BHD | KWD | GBP | EUR | USD | CHF | RUB | CNY | CAD | SGD | BND | MYR | MAD | NGN | IDR | KZT | AZN | UZS | HKD |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Knightsbridge Abaya Jacket | `knightsbridge-abaya-jacket` | 3299 | 3395 | 3299 | 349 | 339 | 279 | 675 | 795 | 949 | 749 | 69900 | 6398 | 1295 | 1195 | 1195 | 3795 | 8290 | 1249000 | 16195000 | 439000 | 1549 | 10750000 | 7198 |
| Covent Garden Abaya | `covent-garden-abaya` | 2799 | 2895 | 2799 | 299 | 289 | 239 | 575 | 695 | 799 | 639 | 59900 | 5398 | 1095 | 999 | 999 | 3195 | 7290 | 1059000 | 13795000 | 369000 | 1319 | 9145000 | 6098 |
| Kensington Abaya | `kensington-abaya` | 2899 | 2995 | 2899 | 309 | 299 | 249 | 599 | 719 | 829 | 659 | 61900 | 5598 | 1145 | 1045 | 1045 | 3295 | 7490 | 1099000 | 14300000 | 379000 | 1369 | 9495000 | 6298 |
| Marylebone Abaya | `marylebone-abaya` | 2499 | 2595 | 2499 | 269 | 259 | 219 | 525 | 619 | 729 | 559 | 52900 | 4898 | 995 | 899 | 899 | 2845 | 6490 | 949000 | 12350000 | 329000 | 1179 | 8950000 | 5398 |
| Belgravia Abaya | `belgravia-abaya` | 3199 | 3295 | 3199 | 339 | 329 | 279 | 649 | 779 | 919 | 719 | 67900 | 6198 | 1295 | 1145 | 1145 | 3695 | 8290 | 1219000 | 15790000 | 419000 | 1499 | 8195000 | 6898 |
| Park Lane Abaya | `park-lane-abaya` | 2199 | 2295 | 2199 | 239 | 229 | 189 | 449 | 549 | 649 | 499 | 46900 | 4298 | 899 | 799 | 799 | 2495 | 5690 | 829000 | 10895000 | 289000 | 1029 | 7195000 | 4798 |
| Hyde Park Set | `hyde-park-set` | 1399 | 1495 | 1399 | 149 | 149 | 119 | 285 | 349 | 419 | 339 | 29900 | 2698 | 549 | 499 | 499 | 1595 | 3690 | 529000 | 6895000 | 185000 | 659 | 4595000 | 3098 |
| Mayfair Kaftan | `mayfair-kaftan` | 975 | 1045 | 975 | 109 | 99 | 89 | 199 | 249 | 299 | 239 | 20900 | 1998 | 399 | 349 | 349 | 1145 | 2595 | 379000 | 4950000 | 129000 | 469 | 3295000 | 2198 |
| Nothing Hill Kaftan | `nothing-hill-kaftan` | 975 | 1045 | 975 | 109 | 99 | 89 | 199 | 249 | 299 | 239 | 20900 | 1998 | 399 | 349 | 349 | 1145 | 2595 | 379000 | 4950000 | 129000 | 469 | 3295000 | 2198 |
| Knightsbridge Dress | `knightsbridge-dress` | 2199 | 2295 | 2199 | 239 | 229 | 189 | 449 | 549 | 649 | 499 | 46900 | 4298 | 899 | 799 | 799 | 2495 | 5690 | 829000 | 10895000 | 289000 | 1029 | 7195000 | 4798 |
| Covent Garden Long Dress | `covent-garden-long-dress` | 1699 | 1745 | 1699 | 179 | 179 | 149 | 349 | 429 | 519 | 389 | 35900 | 3398 | 699 | 599 | 599 | 1945 | 4390 | 649000 | 8395000 | 225000 | 799 | 5595000 | 3698 |
| Hampstead Dress | `hampstead-dress` | 1799 | 1845 | 1799 | 189 | 189 | 149 | 369 | 449 | 549 | 409 | 37900 | 3598 | 719 | 649 | 649 | 2095 | 4690 | 689000 | 8895000 | 239000 | 849 | 5895000 | 3898 |
| Covent Garden Signature Set | `covent-garden-signature-set` | 3199 | 3295 | 3199 | 339 | 329 | 279 | 649 | 779 | 919 | 719 | 67900 | 6198 | 1295 | 1145 | 1145 | 3695 | 8290 | 1219000 | 15790000 | 419000 | 1499 | 10450000 | 6898 |
| Soho Set | `soho-set` | 1499 | 1545 | 1499 | 159 | 159 | 129 | 299 | 379 | 449 | 349 | 31900 | 2998 | 599 | 529 | 529 | 1695 | 3890 | 569000 | 7395000 | 199000 | 709 | 4895000 | 3298 |

## Stripe minor units — ready-to-wear

| Name | Slug | AED unit_amount | SAR unit_amount | QAR unit_amount | OMR unit_amount | BHD unit_amount | KWD unit_amount | GBP unit_amount | EUR unit_amount | USD unit_amount | CHF unit_amount | RUB unit_amount | CNY unit_amount | CAD unit_amount | SGD unit_amount | BND unit_amount | MYR unit_amount | MAD unit_amount | NGN unit_amount | IDR unit_amount | KZT unit_amount | AZN unit_amount | UZS unit_amount | HKD unit_amount |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Knightsbridge Abaya Jacket | `knightsbridge-abaya-jacket` | 329900 | 339500 | 329900 | 349000 | 339000 | 279000 | 67500 | 79500 | 94900 | 74900 | 6990000 | 639800 | 129500 | 119500 | 119500 | 379500 | 829000 | 50000000 | 50000000 | 43900000 | 154900 | 50000000 | 719800 |
| Covent Garden Abaya | `covent-garden-abaya` | 279900 | 289500 | 279900 | 299000 | 289000 | 239000 | 57500 | 69500 | 79900 | 63900 | 5990000 | 539800 | 109500 | 99900 | 99900 | 319500 | 729000 | 50000000 | 50000000 | 36900000 | 131900 | 50000000 | 609800 |
| Kensington Abaya | `kensington-abaya` | 289900 | 299500 | 289900 | 309000 | 299000 | 249000 | 59900 | 71900 | 82900 | 65900 | 6190000 | 559800 | 114500 | 104500 | 104500 | 329500 | 749000 | 50000000 | 50000000 | 37900000 | 136900 | 50000000 | 629800 |
| Marylebone Abaya | `marylebone-abaya` | 249900 | 259500 | 249900 | 269000 | 259000 | 219000 | 52500 | 61900 | 72900 | 55900 | 5290000 | 489800 | 99500 | 89900 | 89900 | 284500 | 649000 | 50000000 | 50000000 | 32900000 | 117900 | 50000000 | 539800 |
| Belgravia Abaya | `belgravia-abaya` | 319900 | 329500 | 319900 | 339000 | 329000 | 279000 | 64900 | 77900 | 91900 | 71900 | 6790000 | 619800 | 129500 | 114500 | 114500 | 369500 | 829000 | 50000000 | 50000000 | 41900000 | 149900 | 50000000 | 689800 |
| Park Lane Abaya | `park-lane-abaya` | 219900 | 229500 | 219900 | 239000 | 229000 | 189000 | 44900 | 54900 | 64900 | 49900 | 4690000 | 429800 | 89900 | 79900 | 79900 | 249500 | 569000 | 50000000 | 50000000 | 28900000 | 102900 | 50000000 | 479800 |
| Hyde Park Set | `hyde-park-set` | 139900 | 149500 | 139900 | 149000 | 149000 | 119000 | 28500 | 34900 | 41900 | 33900 | 2990000 | 269800 | 54900 | 49900 | 49900 | 159500 | 369000 | 50000000 | 50000000 | 18500000 | 65900 | 50000000 | 309800 |
| Mayfair Kaftan | `mayfair-kaftan` | 97500 | 104500 | 97500 | 109000 | 99000 | 89000 | 19900 | 24900 | 29900 | 23900 | 2090000 | 199800 | 39900 | 34900 | 34900 | 114500 | 259500 | 37900000 | 50000000 | 12900000 | 46900 | 50000000 | 219800 |
| Nothing Hill Kaftan | `nothing-hill-kaftan` | 97500 | 104500 | 97500 | 109000 | 99000 | 89000 | 19900 | 24900 | 29900 | 23900 | 2090000 | 199800 | 39900 | 34900 | 34900 | 114500 | 259500 | 37900000 | 50000000 | 12900000 | 46900 | 50000000 | 219800 |
| Knightsbridge Dress | `knightsbridge-dress` | 219900 | 229500 | 219900 | 239000 | 229000 | 189000 | 44900 | 54900 | 64900 | 49900 | 4690000 | 429800 | 89900 | 79900 | 79900 | 249500 | 569000 | 50000000 | 50000000 | 28900000 | 102900 | 50000000 | 479800 |
| Covent Garden Long Dress | `covent-garden-long-dress` | 169900 | 174500 | 169900 | 179000 | 179000 | 149000 | 34900 | 42900 | 51900 | 38900 | 3590000 | 339800 | 69900 | 59900 | 59900 | 194500 | 439000 | 50000000 | 50000000 | 22500000 | 79900 | 50000000 | 369800 |
| Hampstead Dress | `hampstead-dress` | 179900 | 184500 | 179900 | 189000 | 189000 | 149000 | 36900 | 44900 | 54900 | 40900 | 3790000 | 359800 | 71900 | 64900 | 64900 | 209500 | 469000 | 50000000 | 50000000 | 23900000 | 84900 | 50000000 | 389800 |
| Covent Garden Signature Set | `covent-garden-signature-set` | 319900 | 329500 | 319900 | 339000 | 329000 | 279000 | 64900 | 77900 | 91900 | 71900 | 6790000 | 619800 | 129500 | 114500 | 114500 | 369500 | 829000 | 50000000 | 50000000 | 41900000 | 149900 | 50000000 | 689800 |
| Soho Set | `soho-set` | 149900 | 154500 | 149900 | 159000 | 159000 | 129000 | 29900 | 37900 | 44900 | 34900 | 3190000 | 299800 | 59900 | 52900 | 52900 | 169500 | 389000 | 50000000 | 50000000 | 19900000 | 70900 | 50000000 | 329800 |

## Accessories — AED pending (not for Stripe yet)

| Name | ID | Category | Placeholder AED | Status |
| --- | --- | --- | ---: | --- |
| Al Ain Rosette Necklace — Malachite | `al-ain-rosette-necklace-malachite` | necklaces | 1650 | pending AED confirmation |
| Al Ain Rosette Necklace — Tiger Eye | `al-ain-rosette-necklace-tiger-eye` | necklaces | 1480 | pending AED confirmation |
| Al Ain Rosette Necklace — Onyx | `al-ain-rosette-necklace-onyx` | necklaces | 1590 | pending AED confirmation |
| Al Ain Rosette Necklace — Rose Quartz | `al-ain-rosette-necklace-rose-quartz` | necklaces | 1740 | pending AED confirmation |
| Al Ain Rosette Necklace — Sunstone | `al-ain-rosette-necklace-sunstone` | necklaces | 380 | pending AED confirmation |
| Al Ain Rosette Necklace — Lapis Lazuli | `al-ain-rosette-necklace-lapis-lazuli` | necklaces | 520 | pending AED confirmation |
| Pearl Drop Earrings | `earrings-pearl-drop` | earrings | 280 | pending AED confirmation |
| Geometric Studs | `earrings-geometric` | earrings | 195 | pending AED confirmation |
| Textured Gold Hoops | `earrings-hoops` | earrings | 320 | pending AED confirmation |
| Pearl Chain Bracelet | `bracelet-pearl-chain` | bracelets | 295 | pending AED confirmation |
| Heritage Cuff Bracelet | `bracelet-cuff-heritage` | bracelets | 420 | pending AED confirmation |
| Stacking Bangle Set | `bracelet-bangle-set` | bracelets | 350 | pending AED confirmation |
| Silk Tassel Strand | `bag-strand-tassel` | bag-strands | 175 | pending AED confirmation |
| Pearl Cluster Strand | `bag-strand-pearl-cluster` | bag-strands | 220 | pending AED confirmation |
| Monogram Letter Strand | `bag-strand-letter` | bag-strands | 195 | pending AED confirmation |
| Bag Strand | `bag-strand-bint` | bag-strands | 175 | pending AED confirmation |
| Fuchsia Coloured Jade Al Ain Rosette Phone Charm | `al-ain-rosette-phone-charm-fuchsia-jade` | phone-strands | 245 | pending AED confirmation |
| Orange Coloured Jade Al Ain Rosette Phone Charm | `al-ain-rosette-phone-charm-orange-jade` | phone-strands | 245 | pending AED confirmation |
| Onyx Al Ain Rosette Phone Charm | `al-ain-rosette-phone-charm-onyx` | phone-strands | 245 | pending AED confirmation |
| Tiger Eye Al Ain Rosette Phone Charm | `al-ain-rosette-phone-charm-tiger-eye` | phone-strands | 245 | pending AED confirmation |
| Malachite Al Ain Rosette Phone Charm | `al-ain-rosette-phone-charm-malachite` | phone-strands | 245 | pending AED confirmation |
| Lapis Lazuli Al Ain Rosette Phone Charm | `al-ain-rosette-phone-charm-lapis-lazuli` | phone-strands | 245 | pending AED confirmation |
| Rose Quartz Al Ain Rosette Phone Charm | `al-ain-rosette-phone-charm-rose-quartz` | phone-strands | 245 | pending AED confirmation |
| Onyx Strand | `signature-strand-onyx` | signature-strands | 400 | pending AED confirmation |
| Tiger Eye Strand | `signature-strand-tiger-eye` | signature-strands | 430 | pending AED confirmation |
| Sunstone Strand | `signature-strand-sunstone` | signature-strands | 465 | pending AED confirmation |
| Fuchsia Jade Strand | `signature-strand-fuchsia-jade` | signature-strands | 500 | pending AED confirmation |
| Blue Aventurine Strand | `signature-strand-blue-aventurine` | signature-strands | 530 | pending AED confirmation |
| Rose Quartz Strand | `signature-strand-rose-quartz` | signature-strands | 565 | pending AED confirmation |
| Malachite Strand | `signature-strand-malachite` | signature-strands | 600 | pending AED confirmation |
| Lapis Lazuli Strand | `signature-strand-lapis-lazuli` | signature-strands | 645 | pending AED confirmation |
| Amethyst Hearts Strand | `signature-strand-amethyst-hearts` | signature-strands | 720 | pending AED confirmation |
| Jade Hearts Strand | `signature-strand-jade-hearts` | signature-strands | 750 | pending AED confirmation |

## Checkout add-ons

| Item | AED | SAR | QAR | OMR | BHD | KWD | GBP | EUR | USD | CHF | RUB | CNY | CAD | SGD | BND | MYR | MAD | NGN | IDR | KZT | AZN | UZS | HKD |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Signature packaging | 30 | 35 | 35 | 3.2 | 3 | 2.5 | 6 | 7 | 8 | 7 | 2450 | 59 | 11 | 11 | 11 | 37 | 83 | 13200 | 154000 | 4200 | 14 | 110000 | 65 |
| Express shipping | 50 | 55 | 55 | 5.5 | 5 | 4.5 | 10 | 12 | 14 | 12 | 4100 | 99 | 19 | 18 | 18 | 62 | 138 | 22000 | 257000 | 6900 | 23 | 179000 | 108 |

## Catalogue source (AED / GBP / EUR anchors — AED unchanged)

| Slug | AED | GBP | EUR |
| --- | ---: | ---: | ---: |
| `knightsbridge-abaya-jacket` | 3299 | 675 | 795 |
| `covent-garden-abaya` | 2799 | 575 | 695 |
| `kensington-abaya` | 2899 | 599 | 719 |
| `marylebone-abaya` | 2499 | 525 | 619 |
| `belgravia-abaya` | 3199 | 649 | 779 |
| `park-lane-abaya` | 2199 | 449 | 549 |
| `hyde-park-set` | 1399 | 285 | 349 |
| `mayfair-kaftan` | 975 | 199 | 249 |
| `nothing-hill-kaftan` | 975 | 199 | 249 |
| `knightsbridge-dress` | 2199 | 449 | 549 |
| `covent-garden-long-dress` | 1699 | 349 | 429 |
| `hampstead-dress` | 1799 | 369 | 449 |
| `covent-garden-signature-set` | 3199 | 649 | 779 |
| `soho-set` | 1499 | 299 | 379 |

## Full currency map (all ready-to-wear slugs)

| Slug | AED | SAR | QAR | OMR | BHD | KWD | GBP | EUR | USD | CHF | RUB | CNY | CAD | SGD | BND | MYR | MAD | NGN | IDR | KZT | AZN | UZS | HKD |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| `knightsbridge-abaya-jacket` | 3299 | 3395 | 3299 | 349 | 339 | 279 | 675 | 795 | 949 | 749 | 69900 | 6398 | 1295 | 1195 | 1195 | 3795 | 8290 | 1249000 | 16195000 | 439000 | 1549 | 10750000 | 7198 |
| `covent-garden-abaya` | 2799 | 2895 | 2799 | 299 | 289 | 239 | 575 | 695 | 799 | 639 | 59900 | 5398 | 1095 | 999 | 999 | 3195 | 7290 | 1059000 | 13795000 | 369000 | 1319 | 9145000 | 6098 |
| `kensington-abaya` | 2899 | 2995 | 2899 | 309 | 299 | 249 | 599 | 719 | 829 | 659 | 61900 | 5598 | 1145 | 1045 | 1045 | 3295 | 7490 | 1099000 | 14300000 | 379000 | 1369 | 9495000 | 6298 |
| `marylebone-abaya` | 2499 | 2595 | 2499 | 269 | 259 | 219 | 525 | 619 | 729 | 559 | 52900 | 4898 | 995 | 899 | 899 | 2845 | 6490 | 949000 | 12350000 | 329000 | 1179 | 8950000 | 5398 |
| `belgravia-abaya` | 3199 | 3295 | 3199 | 339 | 329 | 279 | 649 | 779 | 919 | 719 | 67900 | 6198 | 1295 | 1145 | 1145 | 3695 | 8290 | 1219000 | 15790000 | 419000 | 1499 | 8195000 | 6898 |
| `park-lane-abaya` | 2199 | 2295 | 2199 | 239 | 229 | 189 | 449 | 549 | 649 | 499 | 46900 | 4298 | 899 | 799 | 799 | 2495 | 5690 | 829000 | 10895000 | 289000 | 1029 | 7195000 | 4798 |
| `hyde-park-set` | 1399 | 1495 | 1399 | 149 | 149 | 119 | 285 | 349 | 419 | 339 | 29900 | 2698 | 549 | 499 | 499 | 1595 | 3690 | 529000 | 6895000 | 185000 | 659 | 4595000 | 3098 |
| `mayfair-kaftan` | 975 | 1045 | 975 | 109 | 99 | 89 | 199 | 249 | 299 | 239 | 20900 | 1998 | 399 | 349 | 349 | 1145 | 2595 | 379000 | 4950000 | 129000 | 469 | 3295000 | 2198 |
| `nothing-hill-kaftan` | 975 | 1045 | 975 | 109 | 99 | 89 | 199 | 249 | 299 | 239 | 20900 | 1998 | 399 | 349 | 349 | 1145 | 2595 | 379000 | 4950000 | 129000 | 469 | 3295000 | 2198 |
| `knightsbridge-dress` | 2199 | 2295 | 2199 | 239 | 229 | 189 | 449 | 549 | 649 | 499 | 46900 | 4298 | 899 | 799 | 799 | 2495 | 5690 | 829000 | 10895000 | 289000 | 1029 | 7195000 | 4798 |
| `covent-garden-long-dress` | 1699 | 1745 | 1699 | 179 | 179 | 149 | 349 | 429 | 519 | 389 | 35900 | 3398 | 699 | 599 | 599 | 1945 | 4390 | 649000 | 8395000 | 225000 | 799 | 5595000 | 3698 |
| `hampstead-dress` | 1799 | 1845 | 1799 | 189 | 189 | 149 | 369 | 449 | 549 | 409 | 37900 | 3598 | 719 | 649 | 649 | 2095 | 4690 | 689000 | 8895000 | 239000 | 849 | 5895000 | 3898 |
| `covent-garden-signature-set` | 3199 | 3295 | 3199 | 339 | 329 | 279 | 649 | 779 | 919 | 719 | 67900 | 6198 | 1295 | 1145 | 1145 | 3695 | 8290 | 1219000 | 15790000 | 419000 | 1499 | 10450000 | 6898 |
| `soho-set` | 1499 | 1545 | 1499 | 159 | 159 | 129 | 299 | 379 | 449 | 349 | 31900 | 2998 | 599 | 529 | 529 | 1695 | 3890 | 569000 | 7395000 | 199000 | 709 | 4895000 | 3298 |
