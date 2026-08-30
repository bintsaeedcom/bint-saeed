import type { AppLocale } from '@/lib/i18n/routing'
import { localizedPath } from '@/lib/i18n/routing'
import { schemaInLanguageForLocale } from '@/lib/i18n/bcp47'
import {
  BRAND_NAME_ZH,
  BRAND_NAME_ZH_DISPLAY,
  REDNOTE_ID,
  REDNOTE_PROFILE_URL,
  REDNOTE_SITE_PATH,
  WECHAT_ID,
  WECHAT_SITE_PATH,
} from '@/lib/brand/chinaPresence'

const SITE = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.bintsaeed.com').replace(/\/$/, '')

type ChinaSocialTarget = 'rednote' | 'wechat'

const PAGE_COPY: Record<
  ChinaSocialTarget,
  Record<AppLocale, { name: string; description: string }>
> = {
  rednote: {
    en: {
      name: `${BRAND_NAME_ZH_DISPLAY} on RedNote / 小红书`,
      description:
        'Official RedNote (Xiaohongshu) account for Bint Saeed from Abu Dhabi. Chinese house name: 承悦. Red ID Bintsaeed_brand.',
    },
    zh: {
      name: `${BRAND_NAME_ZH_DISPLAY} · 小红书`,
      description:
        '承悦（BINT SAEED）官方小红书账号，阿布扎比时装屋。中文品牌名承悦——非音译。小红书号 Bintsaeed_brand。',
    },
    ar: {
      name: `${BRAND_NAME_ZH_DISPLAY} · RedNote`,
      description: 'Official RedNote account for Bint Saeed Abu Dhabi. Chinese name 承悦.',
    },
    fr: {
      name: `${BRAND_NAME_ZH_DISPLAY} · RedNote`,
      description: 'Compte RedNote officiel de Bint Saeed Abu Dhabi. Nom chinois : 承悦.',
    },
    it: {
      name: `${BRAND_NAME_ZH_DISPLAY} · RedNote`,
      description: 'Account RedNote ufficiale di Bint Saeed Abu Dhabi. Nome cinese: 承悦.',
    },
    es: {
      name: `${BRAND_NAME_ZH_DISPLAY} · RedNote`,
      description: 'Cuenta oficial RedNote de Bint Saeed Abu Dhabi. Nombre chino: 承悦.',
    },
    ru: {
      name: `${BRAND_NAME_ZH_DISPLAY} · RedNote`,
      description: 'Официальный аккаунт RedNote Bint Saeed Абу-Даби. Китайское имя: 承悦.',
    },
    de: {
      name: `${BRAND_NAME_ZH_DISPLAY} · RedNote`,
      description: 'Offizieller RedNote-Account von Bint Saeed Abu Dhabi. Chinesischer Name: 承悦.',
    },
    nl: {
      name: `${BRAND_NAME_ZH_DISPLAY} · RedNote`,
      description: 'Officieel RedNote-account van Bint Saeed Abu Dhabi. Chinese naam: 承悦.',
    },
    pt: {
      name: `${BRAND_NAME_ZH_DISPLAY} · RedNote`,
      description: 'Conta oficial RedNote da Bint Saeed Abu Dhabi. Nome chinês: 承悦.',
    },
    id: {
      name: `${BRAND_NAME_ZH_DISPLAY} · RedNote`,
      description: 'Akun resmi RedNote Bint Saeed Abu Dhabi. Nama China: 承悦.',
    },
    ms: {
      name: `${BRAND_NAME_ZH_DISPLAY} · RedNote`,
      description: 'Akaun rasmi RedNote Bint Saeed Abu Dhabi. Nama China: 承悦.',
    },
  },
  wechat: {
    en: {
      name: `${BRAND_NAME_ZH_DISPLAY} on WeChat / 微信`,
      description:
        'Official WeChat account for Bint Saeed from Abu Dhabi. Chinese house name: 承悦. WeChat ID BintSaeed_Brand.',
    },
    zh: {
      name: `${BRAND_NAME_ZH_DISPLAY} · 微信`,
      description:
        '承悦（BINT SAEED）官方微信账号，阿布扎比时装屋。中文品牌名承悦——非音译。微信号 BintSaeed_Brand。',
    },
    ar: {
      name: `${BRAND_NAME_ZH_DISPLAY} · WeChat`,
      description: 'Official WeChat account for Bint Saeed Abu Dhabi. Chinese name 承悦.',
    },
    fr: {
      name: `${BRAND_NAME_ZH_DISPLAY} · WeChat`,
      description: 'Compte WeChat officiel de Bint Saeed Abu Dhabi. Nom chinois : 承悦.',
    },
    it: {
      name: `${BRAND_NAME_ZH_DISPLAY} · WeChat`,
      description: 'Account WeChat ufficiale di Bint Saeed Abu Dhabi. Nome cinese: 承悦.',
    },
    es: {
      name: `${BRAND_NAME_ZH_DISPLAY} · WeChat`,
      description: 'Cuenta oficial WeChat de Bint Saeed Abu Dhabi. Nombre chino: 承悦.',
    },
    ru: {
      name: `${BRAND_NAME_ZH_DISPLAY} · WeChat`,
      description: 'Официальный WeChat Bint Saeed Абу-Даби. Китайское имя: 承悦.',
    },
    de: {
      name: `${BRAND_NAME_ZH_DISPLAY} · WeChat`,
      description: 'Offizieller WeChat-Account von Bint Saeed Abu Dhabi. Chinesischer Name: 承悦.',
    },
    nl: {
      name: `${BRAND_NAME_ZH_DISPLAY} · WeChat`,
      description: 'Officieel WeChat-account van Bint Saeed Abu Dhabi. Chinese naam: 承悦.',
    },
    pt: {
      name: `${BRAND_NAME_ZH_DISPLAY} · WeChat`,
      description: 'Conta oficial WeChat da Bint Saeed Abu Dhabi. Nome chinês: 承悦.',
    },
    id: {
      name: `${BRAND_NAME_ZH_DISPLAY} · WeChat`,
      description: 'Akun resmi WeChat Bint Saeed Abu Dhabi. Nama China: 承悦.',
    },
    ms: {
      name: `${BRAND_NAME_ZH_DISPLAY} · WeChat`,
      description: 'Akaun rasmi WeChat Bint Saeed Abu Dhabi. Nama China: 承悦.',
    },
  },
}

function pathFor(target: ChinaSocialTarget): string {
  return target === 'rednote' ? REDNOTE_SITE_PATH : WECHAT_SITE_PATH
}

function identifierFor(target: ChinaSocialTarget): string {
  return target === 'rednote' ? REDNOTE_ID : WECHAT_ID
}

export function buildChinaSocialWebPageJsonLd(target: ChinaSocialTarget, locale: AppLocale = 'en') {
  const innerPath = pathFor(target)
  const url = `${SITE}${localizedPath(locale, innerPath)}`
  const copy = PAGE_COPY[target][locale] ?? PAGE_COPY[target].en
  const identifier = identifierFor(target)

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: copy.name,
    description: copy.description,
    inLanguage: schemaInLanguageForLocale(locale),
    isPartOf: {
      '@type': 'WebSite',
      name: locale === 'zh' ? BRAND_NAME_ZH_DISPLAY : 'Bint Saeed',
      url: SITE,
    },
    about: {
      '@type': 'Brand',
      name: BRAND_NAME_ZH_DISPLAY,
      alternateName: [BRAND_NAME_ZH, 'Bint Saeed'],
      url: SITE,
    },
    publisher: { '@id': `${SITE}/#organization` },
    ...(target === 'rednote'
      ? {
          sameAs: REDNOTE_PROFILE_URL,
          identifier: {
            '@type': 'PropertyValue',
            name: '小红书号',
            value: REDNOTE_ID,
          },
        }
      : {
          identifier: {
            '@type': 'PropertyValue',
            name: 'WeChat ID',
            value: identifier,
          },
        }),
    keywords: [
      BRAND_NAME_ZH,
      BRAND_NAME_ZH_DISPLAY,
      target === 'rednote' ? '小红书' : '微信',
      identifier,
      '阿布扎比',
      '阿联酋阿巴亚',
    ].join(', '),
  }
}
