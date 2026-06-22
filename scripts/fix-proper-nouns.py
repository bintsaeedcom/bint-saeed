#!/usr/bin/env python3
"""Fix proper-noun translations: Bint Saeed and Abu Dhabi stay in Latin; update daughter slogans."""
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

SEO_LOCALES = ['en', 'ar', 'fr', 'it', 'es', 'ru', 'zh', 'de', 'nl', 'pt']

SLOGAN_OLD = [
    "slogan: 'A house devoted to the daughter in every woman'",
    "slogan: 'دار تُكرِّس نفسها لابنةٍ في كلّ امرأة'",
    "slogan: 'Une maison dédiée à la fille en chaque femme'",
    "slogan: 'Una casa dedicata alla figlia in ogni donna'",
    "slogan: 'Una casa dedicada a la hija en cada mujer'",
    "slogan: 'Дом, посвящённый дочери в каждой женщине'",
    "slogan: '献给每位女性心中的女儿之家'",
    "slogan: 'Ein Haus, das der Tochter in jeder Frau gewidmet ist'",
    "slogan: 'Een huis voor de dochter in elke vrouw'",
    "slogan: 'Uma casa dedicada à filha em cada mulher'",
]

def fix_seo_slogans():
    for loc in SEO_LOCALES:
        p = ROOT / f'lib/translations/seo/{loc}.ts'
        text = p.read_text(encoding='utf-8')
        if "from '@/lib/brand/brandPositioning'" not in text:
            text = text.replace(
                "import type { SeoSupplementalBundle } from './types'",
                "import type { SeoSupplementalBundle } from './types'\nimport { BRAND_TAGLINE } from '@/lib/brand/brandPositioning'",
            )
        for old in SLOGAN_OLD:
            text = text.replace(old, f'slogan: BRAND_TAGLINE.{loc}')
        # fix partial daughter slogans if any remain
        text = text.replace(
            "slogan: 'A house devoted to the daughter in every woman'",
            f'slogan: BRAND_TAGLINE.{loc}',
        )
        p.write_text(text, encoding='utf-8')

def fix_brand_positioning():
    p = ROOT / 'lib/brand/brandPositioning.ts'
    text = p.read_text(encoding='utf-8')
    replacements = {
        "ar: 'دار معاصرة من أبوظبي مكرّسة لأسلوب حياة يتطوّر.'": "ar: 'دار معاصرة من Abu Dhabi مكرّسة لأسلوب حياة يتطوّر.'",
        "ru: 'Современный дом из Абу‑Даби, посвящённый меняющемуся образу жизни.'": "ru: 'Современный дом из Abu Dhabi, посвящённый меняющемуся образу жизни.'",
        "zh: '源自阿布扎比的当代品牌屋，致力于不断演进的生活方式。'": "zh: '源自 Abu Dhabi 的当代品牌屋，致力于不断演进的生活方式。'",
        "ar: 'دار معاصرة من أبوظبي مكرّسة لأسلوب حياة يتطوّر. عباءات": "ar: 'دار معاصرة من Abu Dhabi مكرّسة لأسلوب حياة يتطوّر. عباءات",
        "ru: 'Современный дом из Абу‑Даби для меняющегося образа жизни.": "ru: 'Современный дом из Abu Dhabi для меняющегося образа жизни.",
        "zh: '源自阿布扎比的当代品牌屋，致力于不断演进的生活方式。阿巴亚": "zh: '源自 Abu Dhabi 的当代品牌屋，致力于不断演进的生活方式。阿巴亚",
        "ar: 'المرأة المعاصرة الباحثة عن أزياء فاخرة وإطلالات راقية وأسلوب حياة متطوّر من أبوظبي، الإمارات'": "ar: 'المرأة المعاصرة الباحثة عن أزياء فاخرة وإطلالات راقية وأسلوب حياة متطوّر من Abu Dhabi، الإمارات'",
        "ru: 'Современные женщины, ищущие люксовую моду, изысканный стиль и меняющийся образ жизни из Абу‑Даби (ОАЭ)'": "ru: 'Современные женщины, ищущие люксовую моду, изысканный стиль и меняющийся образ жизни из Abu Dhabi (ОАЭ)'",
        "zh: '追求奢华时尚、精致着装与演进生活方式的当代女性（阿联酋阿布扎比）'": "zh: '追求奢华时尚、精致着装与演进生活方式的当代女性（Abu Dhabi, UAE）'",
        "'موضة محتشمة أبوظبي'": "'موضة محتشمة Abu Dhabi'",
        "'скромная мода Абу‑Даби'": "'скромная мода Abu Dhabi'",
        "zh: ['端庄时尚', '奢华端庄服饰', '阿布扎比端庄时尚']": "zh: ['端庄时尚', '奢华端庄服饰', 'Abu Dhabi modest fashion']",
    }
    for old, new in replacements.items():
        text = text.replace(old, new)
    # SCHEMA_AUDIENCE en line use CITY_NAME if not already
    if 'CITY_NAME' in text and "from Abu Dhabi, UAE'" in text:
        text = text.replace(
            "en: 'Contemporary women seeking luxury fashion, refined dressing and evolving lifestyles from Abu Dhabi, UAE'",
            "en: `Contemporary women seeking luxury fashion, refined dressing and evolving lifestyles from ${CITY_NAME}, UAE`",
        )
    p.write_text(text, encoding='utf-8')

def fix_org_schema():
    p = ROOT / 'lib/seo/organizationSchemaLd.ts'
    text = p.read_text(encoding='utf-8')
    text = text.replace('design aboudeen', 'design d’Abu Dhabi')
    text = text.replace('Abu Dabi', 'Abu Dhabi')
    # Arabic org description
    old_ar = "'بِنت سعيد دار معاصرة من أبوظبي، الإمارات العربية المتحدة، مكرّسة لأسلوب حياة يتطوّر."
    new_ar = "'Bint Saeed — دار معاصرة من Abu Dhabi، الإمارات العربية المتحدة، مكرّسة لأسلوب حياة يتطوّر."
    text = text.replace(old_ar, new_ar)
    # Russian - replace Абу-Даби with Abu Dhabi in org description
    import re
    text = re.sub(r'Абу[-‑]Даби', 'Abu Dhabi', text)
    # Chinese org - replace 阿布扎比 with Abu Dhabi in description
    text = text.replace('阿拉伯联合酋长国阿布扎比', 'Abu Dhabi, United Arab Emirates')
    text = text.replace('当代阿布扎比设计', 'contemporary Abu Dhabi design')
    text = text.replace('阿布扎比的奢华', 'Abu Dhabi luxury')
    p.write_text(text, encoding='utf-8')

if __name__ == '__main__':
    fix_seo_slogans()
    fix_brand_positioning()
    fix_org_schema()
    print('Done')
