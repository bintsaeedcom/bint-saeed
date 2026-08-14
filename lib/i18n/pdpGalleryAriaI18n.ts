import type { AppLocale } from '@/lib/i18n/routing'

/** Gallery / lightbox aria for apparel PDP — Part 6 chrome. */
type PdpGalleryAriaCopy = {
  showImage: (index: number) => string
  openImageLightbox: (productName: string, index: number) => string
  videoSlide: (productName: string, index: number) => string
  closeGallery: string
  scrollThumbsUp: string
  scrollThumbsDown: string
}

const EN: PdpGalleryAriaCopy = {
  showImage: (index) => `Show image ${index}`,
  openImageLightbox: (productName, index) => `${productName} — open image ${index} in lightbox`,
  videoSlide: (productName, index) => `${productName} — video ${index}`,
  closeGallery: 'Close gallery',
  scrollThumbsUp: 'Show previous images',
  scrollThumbsDown: 'Show more images',
}

const AR: PdpGalleryAriaCopy = {
  showImage: (index) => `عرض الصورة ${index}`,
  openImageLightbox: (productName, index) => `${productName} — افتحي الصورة ${index} في المعرض`,
  videoSlide: (productName, index) => `${productName} — فيديو ${index}`,
  closeGallery: 'إغلاق المعرض',
  scrollThumbsUp: 'عرض الصور السابقة',
  scrollThumbsDown: 'عرض المزيد من الصور',
}

const FR: PdpGalleryAriaCopy = {
  showImage: (index) => `Afficher l'image ${index}`,
  openImageLightbox: (productName, index) => `${productName} — ouvrir l'image ${index} dans la visionneuse`,
  videoSlide: (productName, index) => `${productName} — vidéo ${index}`,
  closeGallery: 'Fermer la galerie',
  scrollThumbsUp: 'Voir les images précédentes',
  scrollThumbsDown: 'Voir plus d’images',
}

export function getPdpGalleryAriaCopy(locale: AppLocale | string): PdpGalleryAriaCopy {
  if (locale === 'ar') return AR
  if (locale === 'fr') return FR
  return EN
}
