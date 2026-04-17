export type FaqQA = { q: string; a: string }

export type FaqCategory = {
  name: string
  questions: FaqQA[]
}

export type FaqBundle = {
  title: string
  subtitle: string
  categories: FaqCategory[]
  contact: {
    title: string
    description: string
  }
}
