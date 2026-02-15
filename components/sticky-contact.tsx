'use client'

import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

export const StickyContact = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.button
      onClick={scrollToContact}
      className="fixed bottom-6 left-6 z-floating group"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Scroll to contact"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#b3d574] to-[#24b391] opacity-50 blur-xl group-hover:opacity-75 transition-opacity" />

      {/* Button */}
      <div className="relative flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-[#b3d574] to-[#24b391] text-zinc-950 font-medium shadow-lg">
        <Mail className="w-5 h-5" />
        <span className="text-sm font-medium hidden sm:inline">Contact</span>
      </div>
    </motion.button>
  )
}
