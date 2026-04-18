'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LocaleLink from '@/components/LocaleLink'
import { FiX, FiExternalLink, FiCheck } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { sizeGuideTable as sizeData } from '@/lib/sizeGuideData'

interface SizeGuideModalProps {
  isOpen: boolean
  onClose: () => void
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
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-4xl max-h-[88vh] overflow-hidden rounded-xl border border-brand-stone/25 bg-[#f9f6f2] shadow-2xl"
            >
            {/* Header */}
            <div className={`sticky top-0 z-10 flex items-center justify-between border-b border-brand-stone/25 bg-[#f7f2ec] px-6 py-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div>
                <h2 className="font-rozha text-2xl text-brand-darkRed">
                  {isRTL ? 'دليل المقاسات' : 'Size Guide'}
                </h2>
                <p className="font-montserrat text-xs tracking-[0.14em] text-brand-clayRed/65">
                  {isRTL ? 'قياسات العباءة - قصة A' : 'A-Cut Abaya Measurements'}
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-brand-clayRed/70 transition-colors hover:text-brand-darkRed"
                data-cursor-hover
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="max-h-[calc(88vh-96px)] overflow-y-auto p-6 md:p-7">
              {/* Size Selector */}
              <div className="mb-6">
                <p className={`font-montserrat text-xs text-brand-clayRed/70 tracking-wide mb-3 ${isRTL ? 'text-right' : ''}`}>
                  {isRTL ? 'اختاري مقاسك لتمييزه:' : 'Select your size to highlight:'}
                </p>
                <div className={`flex flex-wrap gap-2 ${isRTL ? 'justify-end' : ''}`}>
                  {[...sizeData.headers].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(selectedSize === size ? null : size)}
                      className={`px-4 py-2 font-montserrat text-xs uppercase tracking-wider transition-all ${
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
              <div className="mb-6 overflow-x-auto rounded-lg border border-brand-stone/20 bg-white/70">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr>
                      <th className={`bg-brand-stone/10 px-3 py-3.5 font-montserrat text-xs uppercase tracking-[0.12em] text-brand-darkRed ${isRTL ? 'text-right' : 'text-left'}`}>
                        {isRTL ? 'القياس' : 'Measurement'}
                      </th>
                      {[...sizeData.headers].map((size) => (
                        <th
                          key={size}
                          className={`px-3 py-3.5 text-center font-montserrat text-xs uppercase tracking-[0.12em] transition-all ${
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
                      className={rowIndex % 2 === 0 ? 'bg-white/70' : 'bg-brand-stone/5'}
                      >
                        <td className={`py-3 px-3 font-montserrat text-sm text-brand-darkRed ${isRTL ? 'text-right' : ''}`}>
                          {isRTL ? row.label.ar : row.label.en}
                        </td>
                        {row.values.map((value, colIndex) => (
                          <td
                            key={colIndex}
                            className={`py-3 px-3 text-center font-montserrat text-sm transition-all ${
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
                <p className="font-montserrat text-xs text-brand-clayRed/70 tracking-wide">
                  {isRTL ? '• جميع القياسات بالبوصة' : '• All measurements are in inches'}
                </p>
                <p className="font-montserrat text-xs text-brand-clayRed/70 tracking-wide">
                  {isRTL ? '• الطول حسب الطلب - أضيفي طولك المفضل في ملاحظات الطلب' : '• Length per request - Add your preferred length in order notes'}
                </p>
              </div>

              {/* Full Guide Link */}
              <LocaleLink
                href="/size-guide"
                onClick={onClose}
                className={`inline-flex items-center gap-2 px-6 py-3 bg-brand-darkRed font-montserrat text-xs uppercase tracking-[0.15em] text-white transition-colors hover:bg-brand-dustyBlue ${isRTL ? 'flex-row-reverse' : ''}`}
                data-cursor-hover
              >
                {isRTL ? 'الدليل الكامل' : 'View Full Size Guide'}
                <FiExternalLink className="w-4 h-4" />
              </LocaleLink>
            </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
