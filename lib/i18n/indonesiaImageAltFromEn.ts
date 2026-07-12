/** Indonesian product image alt derived from approved English catalogue copy. */
const EXACT_ALTS: Record<string, string> = {
  "Mayfair Kaftan in Deep Maroon crepe chiffon, front view. Luxury women's occasion kaftan by Bint Saeed Abu Dhabi, United Arab Emirates, featuring a V-neckline, flowing silhouette, attached scarf detail and Bint Saeed signature gold-tone Monogram.":
    'Kaftan Mayfair dalam Deep Maroon crepe chiffon, tampak depan. Kaftan acara wanita mewah oleh Bint Saeed Abu Dhabi, Uni Emirat Arab, dengan garis leher V, siluet mengalir, detail scarf terpasang, dan emblem emas khas.',
  'Mayfair Kaftan in Deep Maroon crepe chiffon, side view. Designer chiffon kaftan by Bint Saeed Abu Dhabi, United Arab Emirates, showcasing fluid draping, layered construction and elegant occasionwear styling.':
    'Kaftan Mayfair dalam Deep Maroon crepe chiffon, tampak samping. Kaftan chiffon desainer oleh Bint Saeed Abu Dhabi, Uni Emirat Arab, menampilkan draperi fluida, konstruksi berlapis, dan gaya busana acara yang elegan.',
  'Mayfair Kaftan in Deep Maroon crepe chiffon, back view. Contemporary luxury kaftan by Bint Saeed Abu Dhabi, United Arab Emirates, highlighting graceful movement, lightweight layered chiffon and refined eveningwear design.':
    'Kaftan Mayfair dalam Deep Maroon crepe chiffon, tampak belakang. Kaftan mewah kontemporer oleh Bint Saeed Abu Dhabi, Uni Emirat Arab, menonjolkan gerakan anggun, chiffon berlapis ringan, dan desain busana malam yang halus.',
  "Nothing Hill Kaftan in Peach Pink chiffon, front view. Luxury women's occasion kaftan by Bint Saeed Abu Dhabi, United Arab Emirates, featuring a bateau neckline, flowing silhouette and Bint Saeed signature gold-tone Monogram.":
    'Kaftan Nothing Hill dalam Peach Pink chiffon, tampak depan. Kaftan acara wanita mewah oleh Bint Saeed Abu Dhabi, Uni Emirat Arab, dengan garis leher bateau, siluet mengalir, dan emblem emas khas.',
  'Nothing Hill Kaftan in Peach Pink chiffon, side view. Designer chiffon kaftan by Bint Saeed Abu Dhabi, United Arab Emirates, showcasing fluid draping, layered construction and graceful movement.':
    'Kaftan Nothing Hill dalam Peach Pink chiffon, tampak samping. Kaftan chiffon desainer oleh Bint Saeed Abu Dhabi, Uni Emirat Arab, menampilkan draperi fluida, konstruksi berlapis, dan gerakan anggun.',
  'Nothing Hill Kaftan in Peach Pink chiffon, back view. Contemporary luxury kaftan by Bint Saeed Abu Dhabi, United Arab Emirates, highlighting its flowing silhouette, lightweight layered chiffon and refined occasionwear design.':
    'Kaftan Nothing Hill dalam Peach Pink chiffon, tampak belakang. Kaftan mewah kontemporer oleh Bint Saeed Abu Dhabi, Uni Emirat Arab, menonjolkan siluet mengalir, chiffon berlapis ringan, dan desain busana acara yang halus.',
  'Nothing Hill Kaftan in Peach Pink chiffon, close-up view. Designer chiffon kaftan by Bint Saeed Abu Dhabi, United Arab Emirates, showcasing soft peach pink chiffon fabric, delicate layered texture and the Bint Saeed signature gold-tone Monogram pin.':
    'Kaftan Nothing Hill dalam Peach Pink chiffon, tampak close-up. Kaftan chiffon desainer oleh Bint Saeed Abu Dhabi, Uni Emirat Arab, menampilkan kain chiffon peach pink lembut, tekstur berlapis halus, dan pin emblem emas khas Bint Saeed.',
  'Belgravia Abaya in Deep Black, front view. Luxury Bisht-inspired abaya by Bint Saeed Abu Dhabi, United Arab Emirates, featuring a handwoven trim inspired by the Emirati tradition of Khous weaving and an elegant open-front silhouette.':
    'Abaya Belgravia dalam Deep Black, tampak depan. Abaya mewah terinspirasi Bisht oleh Bint Saeed Abu Dhabi, Uni Emirat Arab, dengan trim tenun tangan terinspirasi tradisi tenun Khous Emirati dan siluet depan terbuka yang elegan.',
  'Belgravia Abaya in Deep Black, side view. Contemporary luxury abaya by Bint Saeed Abu Dhabi, United Arab Emirates, showcasing graceful movement, a handwoven trim inspired by the Emirati tradition of Khous weaving, and a flowing Bisht-inspired silhouette.':
    'Abaya Belgravia dalam Deep Black, tampak samping. Abaya mewah kontemporer oleh Bint Saeed Abu Dhabi, Uni Emirat Arab, menampilkan gerakan anggun, trim tenun tangan terinspirasi tradisi tenun Khous Emirati, dan siluet mengalir terinspirasi Bisht.',
  'Belgravia Abaya in Deep Black, back view. Designer abaya by Bint Saeed Abu Dhabi, United Arab Emirates, highlighting clean lines, full-length drape, and a handwoven trim inspired by the Emirati tradition of Khous weaving.':
    'Abaya Belgravia dalam Deep Black, tampak belakang. Abaya desainer oleh Bint Saeed Abu Dhabi, Uni Emirat Arab, menonjolkan garis bersih, drape penuh, dan trim tenun tangan terinspirasi tradisi tenun Khous Emirati.',
  'Belgravia Abaya in Deep Black, lifestyle view. Luxury handcrafted abaya by Bint Saeed Abu Dhabi, United Arab Emirates, combining a contemporary Bisht-inspired silhouette with a handwoven trim inspired by the Emirati tradition of Khous weaving.':
    'Abaya Belgravia dalam Deep Black, tampak lifestyle. Abaya buatan tangan mewah oleh Bint Saeed Abu Dhabi, Uni Emirat Arab, menggabungkan siluet terinspirasi Bisht kontemporer dengan trim tenun tangan terinspirasi tradisi tenun Khous Emirati.',
  'Belgravia Abaya in Deep Black, lifestyle view. Contemporary luxury outerwear by Bint Saeed Abu Dhabi, United Arab Emirates, featuring a handwoven trim inspired by the Emirati tradition of Khous weaving and designed for elegant dressing across the Gulf, Europe, and beyond.':
    'Abaya Belgravia dalam Deep Black, tampak lifestyle. Outerwear mewah kontemporer oleh Bint Saeed Abu Dhabi, Uni Emirat Arab, dengan trim tenun tangan terinspirasi tradisi tenun Khous Emirati dan dirancang untuk berpakaian elegan di Teluk, Eropa, dan seterusnya.',
  'Belgravia Abaya in Navy Blue, front view. Luxury Bisht-inspired abaya by Bint Saeed Abu Dhabi, United Arab Emirates, featuring a handwoven trim inspired by the Emirati tradition of Khous weaving and an elegant open-front silhouette.':
    'Abaya Belgravia dalam Navy Blue, tampak depan. Abaya mewah terinspirasi Bisht oleh Bint Saeed Abu Dhabi, Uni Emirat Arab, dengan trim tenun tangan terinspirasi tradisi tenun Khous Emirati dan siluet depan terbuka yang elegan.',
  'Belgravia Abaya in Navy Blue, side view. Contemporary luxury abaya by Bint Saeed Abu Dhabi, United Arab Emirates, showcasing graceful movement, a handwoven trim inspired by the Emirati tradition of Khous weaving, and a flowing Bisht-inspired silhouette.':
    'Abaya Belgravia dalam Navy Blue, tampak samping. Abaya mewah kontemporer oleh Bint Saeed Abu Dhabi, Uni Emirat Arab, menampilkan gerakan anggun, trim tenun tangan terinspirasi tradisi tenun Khous Emirati, dan siluet mengalir terinspirasi Bisht.',
  'Belgravia Abaya in Navy Blue, back view. Designer abaya by Bint Saeed Abu Dhabi, United Arab Emirates, highlighting clean lines, full-length drape, and a handwoven trim inspired by the Emirati tradition of Khous weaving.':
    'Abaya Belgravia dalam Navy Blue, tampak belakang. Abaya desainer oleh Bint Saeed Abu Dhabi, Uni Emirat Arab, menonjolkan garis bersih, drape penuh, dan trim tenun tangan terinspirasi tradisi tenun Khous Emirati.',
}

export function indonesiaImageAltFromEn(en: string): string {
  const trimmed = en.trim()
  if (EXACT_ALTS[trimmed]) return EXACT_ALTS[trimmed]
  return trimmed
    .replace(/, front view\./i, ', tampak depan.')
    .replace(/, side view\./i, ', tampak samping.')
    .replace(/, back view\./i, ', tampak belakang.')
    .replace(/, lifestyle view\./i, ', tampak lifestyle.')
    .replace(/, close-up view\./i, ', tampak close-up.')
    .replace(/United Arab Emirates/g, 'Uni Emirat Arab')
    .replace(/ by Bint Saeed /g, ' oleh Bint Saeed ')
}
