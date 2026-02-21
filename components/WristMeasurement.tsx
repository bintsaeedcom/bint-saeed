'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiInfo, FiCheck, FiAlertCircle } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n/LanguageContext'

interface WristMeasurementProps {
  value: string
  onChange: (value: string) => void
}

export default function WristMeasurement({ value, onChange }: WristMeasurementProps) {
  const { isRTL } = useLanguage()
  const [showGuide, setShowGuide] = useState(false)

  const wristSize = parseFloat(value) || 0
  
  const getSizeRecommendation = () => {
    if (!wristSize) return null
    if (wristSize < 13) return { size: 'XS', fit: isRTL ? 'صغير جداً' : 'Extra Small', bracelet: '14-15cm' }
    if (wristSize < 15) return { size: 'S', fit: isRTL ? 'صغير' : 'Small', bracelet: '15-16cm' }
    if (wristSize < 17) return { size: 'M', fit: isRTL ? 'متوسط' : 'Medium', bracelet: '17-18cm' }
    if (wristSize < 19) return { size: 'L', fit: isRTL ? 'كبير' : 'Large', bracelet: '19-20cm' }
    return { size: 'XL', fit: isRTL ? 'كبير جداً' : 'Extra Large', bracelet: '21-22cm' }
  }

  const recommendation = getSizeRecommendation()

  return (
    <div className={`space-y-4 ${isRTL ? 'text-right' : ''}`}>
      {/* Input Section */}
      <div>
        <div className={`flex items-center justify-between mb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <label className="font-roboto text-xs uppercase tracking-[0.2em] text-brand-darkRed">
            {isRTL ? 'مقاس المعصم (سم)' : 'Wrist Size (cm)'}
          </label>
          <button
            type="button"
            onClick={() => setShowGuide(!showGuide)}
            className={`flex items-center gap-1 font-roboto text-xs text-brand-clayRed hover:text-brand-dustyBlue transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
            data-cursor-hover
          >
            <FiInfo className="w-3 h-3" />
            {isRTL ? 'كيفية القياس' : 'How to measure'}
          </button>
        </div>
        
        <div className={`flex gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <input
            type="number"
            step="0.1"
            min="10"
            max="25"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={isRTL ? 'مثال: 16.5' : 'e.g., 16.5'}
            className={`flex-1 px-4 py-3 border border-brand-stone/50 font-roboto text-sm tracking-wide focus:border-brand-darkRed transition-colors ${isRTL ? 'text-right' : ''}`}
          />
          <span className="px-4 py-3 bg-brand-stone/10 font-roboto text-sm text-brand-clayRed border border-brand-stone/50">
            cm
          </span>
        </div>
      </div>

      {/* Size Recommendation */}
      <AnimatePresence>
        {recommendation && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`p-4 bg-green-50 border border-green-200 rounded-lg ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            <div className={`flex items-center gap-2 mb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <FiCheck className="w-4 h-4 text-green-600" />
              <span className="font-roboto text-sm font-medium text-green-800">
                {isRTL ? 'المقاس الموصى به' : 'Recommended Size'}
              </span>
            </div>
            <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <span className="font-rozha text-2xl text-green-700">{recommendation.size}</span>
              <div>
                <p className="font-roboto text-sm text-green-700">{recommendation.fit}</p>
                <p className="font-roboto text-xs text-green-600">
                  {isRTL ? `طول السوار: ${recommendation.bracelet}` : `Bracelet length: ${recommendation.bracelet}`}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Measurement Guide */}
      <AnimatePresence>
        {showGuide && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="p-6 bg-brand-stone/10 border border-brand-stone/30 rounded-lg">
              <h4 className="font-rozha text-lg text-brand-darkRed mb-4">
                {isRTL ? 'كيفية قياس معصمك' : 'How to Measure Your Wrist'}
              </h4>
              
              {/* Visual Guide */}
              <div className="relative mb-6 p-4 bg-white rounded-lg border border-brand-stone/20">
                <div className="flex items-center justify-center">
                  <div className="relative">
                    {/* Wrist illustration */}
                    <div className="w-24 h-24 rounded-full border-4 border-brand-clayRed/30 relative">
                      <div className="absolute inset-2 rounded-full bg-brand-rose/20" />
                      {/* Measuring tape indicator */}
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-6 bg-brand-darkRed rounded-full" />
                      <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-6 h-1 bg-brand-darkRed rounded-full" />
                    </div>
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-roboto text-xs text-brand-clayRed">
                      {isRTL ? 'المعصم' : 'Wrist'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Steps */}
              <ol className={`space-y-4 ${isRTL ? 'pr-0' : 'pl-0'}`}>
                <li className={`flex gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className="flex-shrink-0 w-6 h-6 bg-brand-darkRed text-white rounded-full flex items-center justify-center font-roboto text-xs">
                    1
                  </span>
                  <div>
                    <p className="font-roboto text-sm text-brand-darkRed font-medium">
                      {isRTL ? 'احصلي على شريط قياس مرن' : 'Get a flexible measuring tape'}
                    </p>
                    <p className="font-roboto text-xs text-brand-clayRed/70 mt-1">
                      {isRTL 
                        ? 'أو استخدمي خيطاً وقيسيه بمسطرة'
                        : 'Or use a string and measure it with a ruler'}
                    </p>
                  </div>
                </li>
                <li className={`flex gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className="flex-shrink-0 w-6 h-6 bg-brand-darkRed text-white rounded-full flex items-center justify-center font-roboto text-xs">
                    2
                  </span>
                  <div>
                    <p className="font-roboto text-sm text-brand-darkRed font-medium">
                      {isRTL ? 'لفي حول معصمك' : 'Wrap around your wrist'}
                    </p>
                    <p className="font-roboto text-xs text-brand-clayRed/70 mt-1">
                      {isRTL 
                        ? 'أسفل عظمة المعصم مباشرة حيث ترتدين السوار عادة'
                        : 'Just below the wrist bone where you normally wear a bracelet'}
                    </p>
                  </div>
                </li>
                <li className={`flex gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className="flex-shrink-0 w-6 h-6 bg-brand-darkRed text-white rounded-full flex items-center justify-center font-roboto text-xs">
                    3
                  </span>
                  <div>
                    <p className="font-roboto text-sm text-brand-darkRed font-medium">
                      {isRTL ? 'سجلي القياس' : 'Note the measurement'}
                    </p>
                    <p className="font-roboto text-xs text-brand-clayRed/70 mt-1">
                      {isRTL 
                        ? 'اتركي مساحة إصبع واحد للراحة'
                        : 'Leave one finger width of space for comfort'}
                    </p>
                  </div>
                </li>
              </ol>

              {/* Size Chart */}
              <div className="mt-6 pt-4 border-t border-brand-stone/30">
                <h5 className="font-roboto text-xs uppercase tracking-[0.15em] text-brand-clayRed mb-3">
                  {isRTL ? 'جدول المقاسات' : 'Size Chart'}
                </h5>
                <div className="grid grid-cols-5 gap-2 text-center">
                  {[
                    { size: 'XS', wrist: '< 13', bracelet: '14-15' },
                    { size: 'S', wrist: '13-15', bracelet: '15-16' },
                    { size: 'M', wrist: '15-17', bracelet: '17-18' },
                    { size: 'L', wrist: '17-19', bracelet: '19-20' },
                    { size: 'XL', wrist: '> 19', bracelet: '21-22' },
                  ].map((item) => (
                    <div key={item.size} className="p-2 bg-white rounded border border-brand-stone/20">
                      <span className="font-rozha text-lg text-brand-darkRed block">{item.size}</span>
                      <span className="font-roboto text-[10px] text-brand-clayRed/70 block">{item.wrist}cm</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tip */}
              <div className={`mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg flex gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <FiAlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="font-roboto text-xs text-amber-800">
                  {isRTL 
                    ? 'نصيحة: إذا كنتِ بين مقاسين، اختاري المقاس الأكبر للراحة.'
                    : 'Tip: If you\'re between sizes, choose the larger size for comfort.'}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
