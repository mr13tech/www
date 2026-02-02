'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ContactModal } from '@/components/contact-modal'

export const StickyContact = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <motion.div
        className="fixed bottom-6 sm:bottom-8 md:bottom-10 right-6 sm:right-8 md:right-10 z-30"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <button
          onClick={() => setIsOpen(true)}
          className="group relative px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#b3d574] to-[#24b391] text-zinc-950 text-xs sm:text-sm font-medium overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#b3d574]/30 whitespace-nowrap"
        >
          <span className="relative z-10">Contact</span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#24b391] to-[#b3d574] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      </motion.div>

      <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
