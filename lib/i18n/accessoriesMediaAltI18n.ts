import type { AppLocale } from '@/lib/i18n/routing'
import { altLoc } from '@/lib/products/imageAltOverridesI18n'

const ACCESSORIES_DESERT_NIGHT_ALT = altLoc(
  'Al Ain Rosette natural gemstone jewellery arranged as desert blooms beneath a star-filled night sky',
  'مجوهرات روزيت العين من الأحجار الكريمة الطبيعية، منسّقة كأزهار صحراوية تحت سماء ليلية مرصّعة بالنجوم',
  'Bijoux Rosette d’Al Ain en pierres fines naturelles, composés comme des fleurs du désert sous un ciel nocturne étoilé',
  'Gioielli Al Ain Rosette in gemme naturali, disposti come fiori del deserto sotto un cielo notturno stellato',
  'Joyas Al Ain Rosette de gemas naturales, dispuestas como flores del desierto bajo un cielo nocturno estrellado',
  'Украшения Al Ain Rosette из натуральных камней, выложенные словно цветы пустыни под звёздным ночным небом',
  'Al Ain Rosette 天然宝石珠宝，如沙漠花朵般陈列于繁星夜空之下',
  'Al Ain Rosette Schmuck aus natürlichen Edelsteinen, wie Wüstenblüten unter einem sternklaren Nachthimmel arrangiert',
  'Al Ain Rosette-juwelen van natuurlijke edelstenen, als woestijnbloemen geschikt onder een sterrenrijke nachtelijke hemel',
  'Joias Al Ain Rosette em pedras preciosas naturais, dispostas como flores do deserto sob um céu noturno estrelado',
  'Barang kemas Al Ain Rosette daripada batu permata semula jadi, digubah seperti bunga gurun di bawah langit malam bertabur bintang',
  'Barang kemas Al Ain Rosette daripada batu permata semula jadi, digubah seperti bunga gurun di bawah langit malam bertabur bintang',
)

export function getAccessoriesDesertNightAlt(locale: AppLocale): string {
  return ACCESSORIES_DESERT_NIGHT_ALT[locale]
}
