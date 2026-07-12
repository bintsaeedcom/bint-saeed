/** Malay product image alt derived from approved English catalogue copy. */
const EXACT_ALTS: Record<string, string> = {
  "Mayfair Kaftan in Deep Maroon crepe chiffon, pandangan hadapan. Luxury women's occasion kaftan by Bint Saeed Abu Dhabi, United Arab Emirates, featuring a V-neckline, flowing silhouette, attached scarf butiran and Bint Saeed signature gold-tone Monogram.":
    'Kaftan Mayfair dalam Deep Maroon crepe chiffon, pandangan hadapan. Kaftan acara wanita mewah oleh Bint Saeed Abu Dhabi, Emiriah Arab Bersatu, dengan garis leher V, siluet mengalir, butiran scarf terpasang, dan emblem emas khas.',
  'Mayfair Kaftan in Deep Maroon crepe chiffon, pandangan sisi. Designer chiffon kaftan by Bint Saeed Abu Dhabi, United Arab Emirates, showcasing fluid draping, layered construction and elegant occasionwear styling.':
    'Kaftan Mayfair dalam Deep Maroon crepe chiffon, pandangan sisi. Kaftan chiffon pereka oleh Bint Saeed Abu Dhabi, Emiriah Arab Bersatu, mempamerkan jatuh kain mengalir, konstruksi berlapis, dan gaya pakaian majlis yang elegan.',
  'Mayfair Kaftan in Deep Maroon crepe chiffon, pandangan belakang. Contemporary luxury kaftan by Bint Saeed Abu Dhabi, United Arab Emirates, highlighting graceful movement, lightweight layered chiffon and refined eveningwear design.':
    'Kaftan Mayfair dalam Deep Maroon crepe chiffon, pandangan belakang. Kaftan mewah kontemporari oleh Bint Saeed Abu Dhabi, Emiriah Arab Bersatu, menonjolkan gerakan anggun, chiffon berlapis ringan, dan desain pakaian malam yang halus.',
  "Nothing Hill Kaftan in Peach Pink chiffon, pandangan hadapan. Luxury women's occasion kaftan by Bint Saeed Abu Dhabi, United Arab Emirates, featuring a bateau neckline, flowing silhouette and Bint Saeed signature gold-tone Monogram.":
    'Kaftan Nothing Hill dalam Peach Pink chiffon, pandangan hadapan. Kaftan acara wanita mewah oleh Bint Saeed Abu Dhabi, Emiriah Arab Bersatu, dengan garis leher bateau, siluet mengalir, dan emblem emas khas.',
  'Nothing Hill Kaftan in Peach Pink chiffon, pandangan sisi. Designer chiffon kaftan by Bint Saeed Abu Dhabi, United Arab Emirates, showcasing fluid draping, layered construction and graceful movement.':
    'Kaftan Nothing Hill dalam Peach Pink chiffon, pandangan sisi. Kaftan chiffon pereka oleh Bint Saeed Abu Dhabi, Emiriah Arab Bersatu, mempamerkan jatuh kain mengalir, konstruksi berlapis, dan gerakan anggun.',
  'Nothing Hill Kaftan in Peach Pink chiffon, pandangan belakang. Contemporary luxury kaftan by Bint Saeed Abu Dhabi, United Arab Emirates, highlighting its flowing silhouette, lightweight layered chiffon and refined occasionwear design.':
    'Kaftan Nothing Hill dalam Peach Pink chiffon, pandangan belakang. Kaftan mewah kontemporari oleh Bint Saeed Abu Dhabi, Emiriah Arab Bersatu, menonjolkan siluet mengalir, chiffon berlapis ringan, dan desain pakaian majlis yang halus.',
  'Nothing Hill Kaftan in Peach Pink chiffon, pandangan dekat. Designer chiffon kaftan by Bint Saeed Abu Dhabi, United Arab Emirates, showcasing soft peach pink chiffon fabric, delicate layered texture and the Bint Saeed signature gold-tone Monogram pin.':
    'Kaftan Nothing Hill dalam Peach Pink chiffon, pandangan dekat. Kaftan chiffon pereka oleh Bint Saeed Abu Dhabi, Emiriah Arab Bersatu, mempamerkan kain chiffon peach pink lembut, tekstur berlapis halus, dan pin emblem emas khas Bint Saeed.',
  'Belgravia Abaya in Deep Black, pandangan hadapan. Luxury Bisht-inspired abaya by Bint Saeed Abu Dhabi, United Arab Emirates, featuring a handwoven hiasan inspired by the Emirati tradition of Khous weaving and an elegant open-front silhouette.':
    'Abaya Belgravia dalam Deep Black, pandangan hadapan. Abaya mewah terinspirasi Bisht oleh Bint Saeed Abu Dhabi, Emiriah Arab Bersatu, dengan hiasan tenunan tangan terinspirasi tradisi tenun Khous Emirati dan siluet depan terbuka yang elegan.',
  'Belgravia Abaya in Deep Black, pandangan sisi. Contemporary luxury abaya by Bint Saeed Abu Dhabi, United Arab Emirates, showcasing graceful movement, a handwoven hiasan inspired by the Emirati tradition of Khous weaving, and a flowing Bisht-inspired silhouette.':
    'Abaya Belgravia dalam Deep Black, pandangan sisi. Abaya mewah kontemporari oleh Bint Saeed Abu Dhabi, Emiriah Arab Bersatu, mempamerkan gerakan anggun, hiasan tenunan tangan terinspirasi tradisi tenun Khous Emirati, dan siluet mengalir terinspirasi Bisht.',
  'Belgravia Abaya in Deep Black, pandangan belakang. Designer abaya by Bint Saeed Abu Dhabi, United Arab Emirates, highlighting clean lines, full-length drape, and a handwoven hiasan inspired by the Emirati tradition of Khous weaving.':
    'Abaya Belgravia dalam Deep Black, pandangan belakang. Abaya pereka oleh Bint Saeed Abu Dhabi, Emiriah Arab Bersatu, menonjolkan garis bersih, jatuh kain penuh, dan hiasan tenunan tangan terinspirasi tradisi tenun Khous Emirati.',
  'Belgravia Abaya in Deep Black, pandangan gaya hidup. Luxury handcrafted abaya by Bint Saeed Abu Dhabi, United Arab Emirates, combining a contemporary Bisht-inspired silhouette with a handwoven hiasan inspired by the Emirati tradition of Khous weaving.':
    'Abaya Belgravia dalam Deep Black, pandangan gaya hidup. Abaya buatan tangan mewah oleh Bint Saeed Abu Dhabi, Emiriah Arab Bersatu, menggabungkan siluet terinspirasi Bisht kontemporari dengan hiasan tenunan tangan terinspirasi tradisi tenun Khous Emirati.',
  'Belgravia Abaya in Deep Black, pandangan gaya hidup. Contemporary luxury outerwear by Bint Saeed Abu Dhabi, United Arab Emirates, featuring a handwoven hiasan inspired by the Emirati tradition of Khous weaving and designed for elegant dressing across the Gulf, Europe, and beyond.':
    'Abaya Belgravia dalam Deep Black, pandangan gaya hidup. Pakaian luar mewah kontemporari oleh Bint Saeed Abu Dhabi, Emiriah Arab Bersatu, dengan hiasan tenunan tangan terinspirasi tradisi tenun Khous Emirati dan direka untuk berpakaian elegan di Teluk, Eropah, dan seterusnya.',
  'Belgravia Abaya in Navy Blue, pandangan hadapan. Luxury Bisht-inspired abaya by Bint Saeed Abu Dhabi, United Arab Emirates, featuring a handwoven hiasan inspired by the Emirati tradition of Khous weaving and an elegant open-front silhouette.':
    'Abaya Belgravia dalam Navy Blue, pandangan hadapan. Abaya mewah terinspirasi Bisht oleh Bint Saeed Abu Dhabi, Emiriah Arab Bersatu, dengan hiasan tenunan tangan terinspirasi tradisi tenun Khous Emirati dan siluet depan terbuka yang elegan.',
  'Belgravia Abaya in Navy Blue, pandangan sisi. Contemporary luxury abaya by Bint Saeed Abu Dhabi, United Arab Emirates, showcasing graceful movement, a handwoven hiasan inspired by the Emirati tradition of Khous weaving, and a flowing Bisht-inspired silhouette.':
    'Abaya Belgravia dalam Navy Blue, pandangan sisi. Abaya mewah kontemporari oleh Bint Saeed Abu Dhabi, Emiriah Arab Bersatu, mempamerkan gerakan anggun, hiasan tenunan tangan terinspirasi tradisi tenun Khous Emirati, dan siluet mengalir terinspirasi Bisht.',
  'Belgravia Abaya in Navy Blue, pandangan belakang. Designer abaya by Bint Saeed Abu Dhabi, United Arab Emirates, highlighting clean lines, full-length drape, and a handwoven hiasan inspired by the Emirati tradition of Khous weaving.':
    'Abaya Belgravia dalam Navy Blue, pandangan belakang. Abaya pereka oleh Bint Saeed Abu Dhabi, Emiriah Arab Bersatu, menonjolkan garis bersih, jatuh kain penuh, dan hiasan tenunan tangan terinspirasi tradisi tenun Khous Emirati.',
}

export function malaysiaImageAltFromEn(en: string): string {
  const trimmed = en.trim()
  if (EXACT_ALTS[trimmed]) return EXACT_ALTS[trimmed]
  return trimmed
    .replace(/, front view\./i, ', pandangan hadapan.')
    .replace(/, side view\./i, ', pandangan sisi.')
    .replace(/, back view\./i, ', pandangan belakang.')
    .replace(/, lifestyle view\./i, ', pandangan gaya hidup.')
    .replace(/, close-up view\./i, ', pandangan dekat.')
    .replace(/United Arab Emirates/g, 'Emiriah Arab Bersatu')
    .replace(/ by Bint Saeed /g, ' oleh Bint Saeed ')
}
