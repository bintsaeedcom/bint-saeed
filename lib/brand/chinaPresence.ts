/**
 * China-market brand identity and official account handles.
 *
 * Chinese is the only locale where the house uses a distinct brand name (承悦).
 * All other locales keep the Latin proper noun “Bint Saeed” untranslated.
 */

/** Chinese brand name — unique to zh; not a transliteration of Bint Saeed. */
export const BRAND_NAME_ZH = '承悦'

/**
 * Display form used on RedNote / WeChat profiles.
 * Latin + Chinese together for recognition across markets.
 */
export const BRAND_NAME_ZH_DISPLAY = 'BINT SAEED 承悦'

/** Xiaohongshu / RedNote (小红书) — Red ID shown on profile. */
export const REDNOTE_ID = 'Bintsaeed_brand'

/** WeChat (微信) — WeChat ID on the brand account. */
export const WECHAT_ID = 'BintSaeed_Brand'

/**
 * Public profile URL for RedNote — set when the share link / numeric user ID is known.
 * Handle-based URLs 404; leave empty until a stable `…/user/profile/{id}` link is provided.
 */
export const REDNOTE_PROFILE_URL = '' as const

/** Soft on-site pages that document China accounts (no public WeChat web profile). */
export const REDNOTE_SITE_PATH = '/rednote' as const
export const WECHAT_SITE_PATH = '/wechat' as const
