/** Shared A-cut abaya measurements — used on PDP, modal, and /size-guide can import later. */
export const sizeGuideTable = {
  headers: ['XS', 'S', 'M', 'L', 'XL', 'XXL'] as const,
  measurements: [
    { label: { en: 'Length', ar: 'الطول' }, values: ['50-52', '54-56', '56-58', '58-60', '59-61', '60-62'] },
    { label: { en: 'Bust', ar: 'الصدر' }, values: ['19-20', '20-22', '22-24', '24-25', '25-26', '26-28'] },
    { label: { en: 'Waist', ar: 'الخصر' }, values: ['18-19', '19-21', '21-23', '23-24', '24-25', '25-27'] },
    { label: { en: 'Bottom Width', ar: 'عرض الأسفل' }, values: ['40', '42', '52', '56', '60', '64'] },
    { label: { en: 'Shoulder', ar: 'الكتف' }, values: ['13.5-14', '14-14.5', '15-16', '16-16.5', '16-17', '17-18'] },
    { label: { en: 'Sleeve', ar: 'الكم' }, values: ['22', '23.5', '24', '24.5', '25', '25.5'] },
    { label: { en: 'Sleeve Width', ar: 'عرض الكم' }, values: ['9', '9.5', '10', '10.5', '11', '12'] },
    { label: { en: 'Arm Hole', ar: 'فتحة الذراع' }, values: ['8.5', '8.5', '9.5', '10', '11', '12.5'] },
  ],
} as const
