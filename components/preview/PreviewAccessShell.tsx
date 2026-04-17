'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function PreviewAccessShell({
  title,
  subtitle,
  children,
}: {
  title: string
  subtitle?: string
  children: React.ReactNode
}) {
  return (
    <div className="relative min-h-[100dvh] overflow-hidden bg-[#1a0008] text-brand-stone">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#2a0012] via-[#1a0008] to-[#0d0004]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(146,170,193,0.1)_0%,_transparent_65%)]" />

      <div className="pointer-events-none absolute top-10 left-10 h-20 w-20 md:h-28 md:w-28">
        <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-brand-dustyBlue/50 to-transparent" />
        <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-brand-dustyBlue/50 to-transparent" />
      </div>
      <div className="pointer-events-none absolute top-10 right-10 h-20 w-20 md:h-28 md:w-28">
        <div className="absolute top-0 right-0 h-px w-full bg-gradient-to-l from-brand-dustyBlue/50 to-transparent" />
        <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-brand-dustyBlue/50 to-transparent" />
      </div>
      <div className="pointer-events-none absolute bottom-10 left-10 h-20 w-20 md:h-28 md:w-28">
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-brand-dustyBlue/40 to-transparent" />
        <div className="absolute bottom-0 left-0 h-full w-px bg-gradient-to-t from-brand-dustyBlue/40 to-transparent" />
      </div>
      <div className="pointer-events-none absolute bottom-10 right-10 h-20 w-20 md:h-28 md:w-28">
        <div className="absolute bottom-0 right-0 h-px w-full bg-gradient-to-l from-brand-dustyBlue/40 to-transparent" />
        <div className="absolute bottom-0 right-0 h-full w-px bg-gradient-to-t from-brand-dustyBlue/40 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-lg flex-col items-center justify-center px-6 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <div className="relative mx-auto w-48 sm:w-56">
            <div className="absolute inset-0 scale-150 blur-3xl opacity-30 bg-brand-dustyBlue/40 rounded-full" />
            <Image
              src="/logo.png"
              alt="Bint Saeed"
              width={400}
              height={120}
              className="relative z-10 h-auto w-full object-contain"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          <p className="mb-3 font-roboto text-[10px] uppercase tracking-[0.45em] text-brand-dustyBlue/80">
            Bint Saeed · Preview
          </p>
          <h1 data-document-h1="true" className="font-rozha text-3xl text-brand-dustyBlue tracking-wide sm:text-4xl">{title}</h1>
          {subtitle ? (
            <p className="mx-auto mt-5 max-w-md font-roboto text-sm leading-relaxed text-white/55">{subtitle}</p>
          ) : null}
          <div className="mt-10">{children}</div>
        </motion.div>
      </div>
    </div>
  )
}
