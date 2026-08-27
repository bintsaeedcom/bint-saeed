import type { Metadata } from 'next'
import type { AppLocale } from '@/lib/i18n/routing'
import { localizedPath } from '@/lib/i18n/routing'
import { sectionRobotsMetadata } from '@/lib/seo'
import { brandDocumentTitle } from '@/lib/seo/brandDocumentTitle'
import { chinaDiscoveryKeywordsForLocale } from '@/lib/seo/chinaDiscoveryKeywords'
import {
  BRAND_NAME_ZH_DISPLAY,
  REDNOTE_ID,
  REDNOTE_SITE_PATH,
  WECHAT_ID,
  WECHAT_SITE_PATH,
} from '@/lib/brand/chinaPresence'

type ChinaSocialTarget = 'rednote' | 'wechat'

const TITLES: Record<ChinaSocialTarget, Record<AppLocale, string>> = {
  rednote: {
    en: `${BRAND_NAME_ZH_DISPLAY} · RedNote / 小红书`,
    zh: `${BRAND_NAME_ZH_DISPLAY} · 小红书官方账号`,
    ar: `${BRAND_NAME_ZH_DISPLAY} · RedNote`,
    fr: `${BRAND_NAME_ZH_DISPLAY} · RedNote / 小红书`,
    it: `${BRAND_NAME_ZH_DISPLAY} · RedNote`,
    es: `${BRAND_NAME_ZH_DISPLAY} · RedNote`,
    ru: `${BRAND_NAME_ZH_DISPLAY} · RedNote`,
    de: `${BRAND_NAME_ZH_DISPLAY} · RedNote`,
    nl: `${BRAND_NAME_ZH_DISPLAY} · RedNote`,
    pt: `${BRAND_NAME_ZH_DISPLAY} · RedNote`,
    id: `${BRAND_NAME_ZH_DISPLAY} · RedNote`,
    ms: `${BRAND_NAME_ZH_DISPLAY} · RedNote`,
  },
  wechat: {
    en: `${BRAND_NAME_ZH_DISPLAY} · WeChat / 微信`,
    zh: `${BRAND_NAME_ZH_DISPLAY} · 微信官方账号`,
    ar: `${BRAND_NAME_ZH_DISPLAY} · WeChat`,
    fr: `${BRAND_NAME_ZH_DISPLAY} · WeChat / 微信`,
    it: `${BRAND_NAME_ZH_DISPLAY} · WeChat`,
    es: `${BRAND_NAME_ZH_DISPLAY} · WeChat`,
    ru: `${BRAND_NAME_ZH_DISPLAY} · WeChat`,
    de: `${BRAND_NAME_ZH_DISPLAY} · WeChat`,
    nl: `${BRAND_NAME_ZH_DISPLAY} · WeChat`,
    pt: `${BRAND_NAME_ZH_DISPLAY} · WeChat`,
    id: `${BRAND_NAME_ZH_DISPLAY} · WeChat`,
    ms: `${BRAND_NAME_ZH_DISPLAY} · WeChat`,
  },
}

const DESCRIPTIONS: Record<ChinaSocialTarget, Record<AppLocale, string>> = {
  rednote: {
    en: `Official RedNote (Xiaohongshu / 小红书) for Bint Saeed from Abu Dhabi. Chinese house name 承悦 — Red ID ${REDNOTE_ID}. Shop luxury abayas worldwide at bintsaeed.com.`,
    zh: `承悦（BINT SAEED）官方小红书账号，阿布扎比时装屋。中文品牌名承悦，非音译。小红书号 ${REDNOTE_ID}。官网选购奢华阿巴亚与珠宝，全球配送。`,
    ar: `حساب RedNote الرسمي لـ Bint Saeed من أبوظبي. الاسم الصيني 承悦 — ${REDNOTE_ID}.`,
    fr: `RedNote officiel Bint Saeed Abu Dhabi. Nom chinois 承悦 — ${REDNOTE_ID}.`,
    it: `RedNote ufficiale Bint Saeed Abu Dhabi. Nome cinese 承悦 — ${REDNOTE_ID}.`,
    es: `RedNote oficial Bint Saeed Abu Dhabi. Nombre chino 承悦 — ${REDNOTE_ID}.`,
    ru: `Официальный RedNote Bint Saeed Абу-Даби. Имя 承悦 — ${REDNOTE_ID}.`,
    de: `Offizieller RedNote Bint Saeed Abu Dhabi. Chinesischer Name 承悦 — ${REDNOTE_ID}.`,
    nl: `Officieel RedNote Bint Saeed Abu Dhabi. Chinese naam 承悦 — ${REDNOTE_ID}.`,
    pt: `RedNote oficial Bint Saeed Abu Dhabi. Nome chinês 承悦 — ${REDNOTE_ID}.`,
    id: `RedNote resmi Bint Saeed Abu Dhabi. Nama China 承悦 — ${REDNOTE_ID}.`,
    ms: `RedNote rasmi Bint Saeed Abu Dhabi. Nama China 承悦 — ${REDNOTE_ID}.`,
  },
  wechat: {
    en: `Official WeChat (微信) for Bint Saeed from Abu Dhabi. Chinese house name 承悦 — WeChat ID ${WECHAT_ID}. Shop at bintsaeed.com.`,
    zh: `承悦（BINT SAEED）官方微信，阿布扎比时装屋。中文品牌名承悦，非音译。微信号 ${WECHAT_ID}。官网选购奢华阿巴亚。`,
    ar: `WeChat الرسمي لـ Bint Saeed من أبوظبي. الاسم الصيني 承悦 — ${WECHAT_ID}.`,
    fr: `WeChat officiel Bint Saeed Abu Dhabi. Nom chinois 承悦 — ${WECHAT_ID}.`,
    it: `WeChat ufficiale Bint Saeed Abu Dhabi. Nome cinese 承悦 — ${WECHAT_ID}.`,
    es: `WeChat oficial Bint Saeed Abu Dhabi. Nombre chino 承悦 — ${WECHAT_ID}.`,
    ru: `Официальный WeChat Bint Saeed Абу-Даби. Имя 承悦 — ${WECHAT_ID}.`,
    de: `Offizieller WeChat Bint Saeed Abu Dhabi. Chinesischer Name 承悦 — ${WECHAT_ID}.`,
    nl: `Officieel WeChat Bint Saeed Abu Dhabi. Chinese naam 承悦 — ${WECHAT_ID}.`,
    pt: `WeChat oficial Bint Saeed Abu Dhabi. Nome chinês 承悦 — ${WECHAT_ID}.`,
    id: `WeChat resmi Bint Saeed Abu Dhabi. Nama China 承悦 — ${WECHAT_ID}.`,
    ms: `WeChat rasmi Bint Saeed Abu Dhabi. Nama China 承悦 — ${WECHAT_ID}.`,
  },
}

function canonicalPath(target: ChinaSocialTarget): string {
  return target === 'rednote' ? REDNOTE_SITE_PATH : WECHAT_SITE_PATH
}

export function buildChinaSocialPageMetadata(target: ChinaSocialTarget, locale: AppLocale): Metadata {
  const inner = canonicalPath(target)
  const title = brandDocumentTitle(TITLES[target][locale] ?? TITLES[target].en)
  const description = DESCRIPTIONS[target][locale] ?? DESCRIPTIONS[target].en
  const site = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.bintsaeed.com').replace(/\/$/, '')
  const canonical = `${site}${localizedPath(locale, inner)}`

  return {
    ...sectionRobotsMetadata,
    title: { absolute: title },
    description,
    keywords: chinaDiscoveryKeywordsForLocale(locale),
    alternates: {
      canonical: inner,
      languages: {
        'x-default': `${site}${inner}`,
        en: `${site}${inner}`,
        ar: `${site}${localizedPath('ar', inner)}`,
        fr: `${site}${localizedPath('fr', inner)}`,
        de: `${site}${localizedPath('de', inner)}`,
        it: `${site}${localizedPath('it', inner)}`,
        es: `${site}${localizedPath('es', inner)}`,
        ru: `${site}${localizedPath('ru', inner)}`,
        zh: `${site}${localizedPath('zh', inner)}`,
        nl: `${site}${localizedPath('nl', inner)}`,
        pt: `${site}${localizedPath('pt', inner)}`,
        id: `${site}${localizedPath('id', inner)}`,
        ms: `${site}${localizedPath('ms', inner)}`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'website',
      locale: locale === 'zh' ? 'zh_CN' : locale === 'ar' ? 'ar_AE' : 'en_US',
    },
    other: {
      'ai:topic': target === 'rednote' ? 'Bint Saeed RedNote Xiaohongshu China' : 'Bint Saeed WeChat China',
      'ai:brand_zh': BRAND_NAME_ZH_DISPLAY,
      ...(target === 'rednote' ? { 'ai:rednote_id': REDNOTE_ID } : { 'ai:wechat_id': WECHAT_ID }),
    },
  }
}
