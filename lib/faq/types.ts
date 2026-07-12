export type FaqQA = { q: string; a: string }

/** Secondary grouping within a main topic (shown as a subheading). */
export type FaqSubtopic = {
  name: string
  questions: FaqQA[]
}

/** Primary FAQ chapter (sticky nav + section heading). */
export type FaqTopic = {
  id: string
  name: string
  subtopics: FaqSubtopic[]
}

export type FaqBundle = {
  title: string
  subtitle: string
  topics: FaqTopic[]
  contact: {
    title: string
    description: string
  }
}

/** Flatten every Q&A for FAQPage JSON-LD and crawlers. */
export function flattenFaqQuestions(bundle: FaqBundle): FaqQA[] {
  return bundle.topics.flatMap((topic) =>
    topic.subtopics.flatMap((sub) => sub.questions),
  )
}
