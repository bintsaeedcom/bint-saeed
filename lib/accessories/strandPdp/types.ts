export type StrandPdpFaqItem = {
  question: string
  answer: string
}

export type StrandPdpContent = {
  headline: string
  introParagraphs: string[]
  productDetails: string[]
  materials: string[]
  stoneOrigin: string
  naturalStone: string
  care: string[]
  faq: StrandPdpFaqItem[]
}
