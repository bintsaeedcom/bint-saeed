'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { FiX, FiExternalLink, FiCheck } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'

interface SizeGuideModalProps {
  isOpen: boolean
  onClose: () => void
}

const sizeData = {
  headers: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
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
}

export default function SizeGuideModal({ isOpen, onClose }: SizeGuideModalProps) {
  const { isRTL } = useLanguage()
  const [selectedSize, setSelectedSize] = useState<string | null>(null)

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-4xl md:w-full bg-white z-[101] overflow-hidden max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className={`sticky top-0 bg-brand-darkRed px-6 py-4 flex items-center justify-between z-10 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div>
                <h2 className="font-rozha text-2xl text-white">
                  {isRTL ? 'دليل المقاسات' : 'Size Guide'}
                </h2>
                <p className="font-roboto text-xs text-white/60 tracking-wide">
                  {isRTL ? 'قياسات العباءة - قصة A' : 'A-Cut Abaya Measurements'}
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-white/70 hover:text-white transition-colors"
                data-cursor-hover
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Size Selector */}
              <div className="mb-6">
                <p className={`font-roboto text-xs text-brand-clayRed/70 tracking-wide mb-3 ${isRTL ? 'text-right' : ''}`}>
                  {isRTL ? 'اختاري مقاسك لتمييزه:' : 'Select your size to highlight:'}
                </p>
                <div className={`flex flex-wrap gap-2 ${isRTL ? 'justify-end' : ''}`}>
                  {sizeData.headers.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(selectedSize === size ? null : size)}
                      className={`px-4 py-2 font-roboto text-xs uppercase tracking-wider transition-all ${
                        selectedSize === size
                          ? 'bg-brand-darkRed text-white'
                          : 'bg-brand-stone/10 text-brand-darkRed hover:bg-brand-dustyBlue/20'
                      }`}
                      data-cursor-hover
                    >
                      {size}
                      {selectedSize === size && <FiCheck className="inline-block w-3 h-3 ml-1" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Table */}
              <div className="overflow-x-auto mb-6">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr>
                      <th className={`py-3 px-3 bg-brand-stone/10 font-roboto text-xs uppercase tracking-[0.1em] text-brand-darkRed ${isRTL ? 'text-right' : 'text-left'}`}>
                        {isRTL ? 'القياس' : 'Measurement'}
                      </th>
                      {sizeData.headers.map((size) => (
                        <th
                          key={size}
                          className={`py-3 px-3 font-roboto text-xs uppercase tracking-[0.1em] text-center transition-all ${
                            selectedSize === size
                              ? 'bg-brand-darkRed text-white'
                              : 'bg-brand-stone/10 text-brand-darkRed'
                          }`}
                        >
                          {size}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {sizeData.measurements.map((row, rowIndex) => (
                      <tr
                        key={row.label.en}
                        className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-brand-stone/5'}
                      >
                        <td className={`py-3 px-3 font-roboto text-sm text-brand-darkRed ${isRTL ? 'text-right' : ''}`}>
                          {isRTL ? row.label.ar : row.label.en}
                        </td>
                        {row.values.map((value, colIndex) => (
                          <td
                            key={colIndex}
                            className={`py-3 px-3 text-center font-roboto text-sm transition-all ${
                              selectedSize === sizeData.headers[colIndex]
                                ? 'bg-brand-darkRed/10 text-brand-darkRed font-medium'
                                : 'text-brand-clayRed'
                            }`}
                          >
                            {value}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Notes */}
              <div className={`space-y-3 mb-6 ${isRTL ? 'text-right' : ''}`}>
                <p className="font-roboto text-xs text-brand-clayRed/70 tracking-wide">
                  {isRTL ? '• جميع القياسات بالبوصة' : '• All measurements are in inches'}
                </p>
                <p className="font-roboto text-xs text-brand-clayRed/70 tracking-wide">
                  {isRTL ? '• الطول حسب الطلب - أضيفي طولك المفضل في ملاحظات الطلب' : '• Length per request - Add your preferred length in order notes'}
                </p>
              </div>

              {/* Full Guide Link */}
              <Link
                href="/size-guide"
                onClick={onClose}
                className={`inline-flex items-center gap-2 px-6 py-3 bg-brand-darkRed text-white font-roboto text-xs uppercase tracking-[0.15em] hover:bg-brand-dustyBlue transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
                data-cursor-hover
              >
                {isRTL ? 'الدليل الكامل' : 'View Full Size Guide'}
                <FiExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
