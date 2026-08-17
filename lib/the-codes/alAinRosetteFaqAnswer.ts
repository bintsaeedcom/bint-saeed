import type { AppLocale } from '@/lib/i18n/routing'
import { getTheCodesSections } from '@/lib/the-codes/codesPageContent'

/** Full Al Ain Rosette copy from /the-codes — single source of truth sitewide. */
export function getAlAinRosetteFaqAnswer(locale: AppLocale = 'en'): string {
  const section = getTheCodesSections(locale).find((s) => s.id === 'al-ain-rosette')
  const joined = section?.paragraphs.map((p) => p.trim()).filter(Boolean).join(' ')
  if (joined) return joined
  return getTheCodesSections('en')
    .find((s) => s.id === 'al-ain-rosette')!
    .paragraphs.map((p) => p.trim())
    .filter(Boolean)
    .join(' ')
}

const ROSETTE_FAQ_QUESTION: Record<AppLocale, string> = {
  en: 'What is the Al Ain Rosette?',
  ar: 'ما هي روزيت العين؟',
  fr: 'Qu’est-ce que la rosette d’Al Ain ?',
  it: 'Cos’è la Rosetta di Al Ain?',
  es: '¿Qué es la Roseta de Al Ain?',
  ru: 'Что такое розетка Al Ain?',
  zh: '什么是 Al Ain 玫瑰花饰？',
  de: 'Was ist die Al-Ain-Rosette?',
  nl: 'Wat is de Al Ain Rosette?',
  pt: 'O que é a Roseta de Al Ain?',
  id: 'Apa itu Rosette Al Ain?',
  ms: 'Apakah Rosette Al Ain?',
}

export function getAlAinRosetteFaqQuestion(locale: AppLocale = 'en'): string {
  return ROSETTE_FAQ_QUESTION[locale] ?? ROSETTE_FAQ_QUESTION.en
}

/** Detect Rosette FAQ rows so answers can be overwritten with the canonical paragraph. */
export function isAlAinRosetteFaqQuestion(question: string): boolean {
  const q = question.toLowerCase()
  return (
    q.includes('al ain rosette') ||
    q.includes('al-ain-rosette') ||
    q.includes('rosette d’al ain') ||
    q.includes('rosette d\'al ain') ||
    q.includes('rosetta di al ain') ||
    q.includes('roseta de al ain') ||
    q.includes('розетка al ain') ||
    q.includes('al-ain-rosette') ||
    q.includes('روزيت العين') ||
    q.includes('روزيت القوع') ||
    q.includes('玫瑰花饰') ||
    q.includes('rosette al ain')
  )
}
