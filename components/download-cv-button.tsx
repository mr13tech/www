'use client'

import { Download, FileText } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export const DownloadCVButton = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  const handleDownloadMD = async () => {
    try {
      const response = await fetch('/Pylyp_Radionov_CV.md')
      const text = await response.text()

      // Create a blob and download
      const blob = new Blob([text], { type: 'text/markdown' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'Pylyp_Radionov_CV.md'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
      setShowMenu(false)
    } catch (error) {
      console.error('Failed to download CV:', error)
    }
  }

  const handleViewCV = () => {
    window.open('/Pylyp_Radionov_CV.md', '_blank')
    setShowMenu(false)
  }

  return (
    <div className="fixed bottom-6 right-6 z-floating">
      {/* Menu */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-full mb-3 right-0 flex flex-col gap-2 min-w-[180px]"
          >
            <button
              onClick={handleViewCV}
              className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-zinc-900/95 backdrop-blur-sm border border-white/10 hover:border-[#b3d574]/50 text-zinc-100 hover:text-[#b3d574] transition-all text-sm font-medium"
            >
              <FileText className="w-4 h-4" />
              View CV
            </button>
            <button
              onClick={handleDownloadMD}
              className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-zinc-900/95 backdrop-blur-sm border border-white/10 hover:border-[#b3d574]/50 text-zinc-100 hover:text-[#b3d574] transition-all text-sm font-medium"
            >
              <Download className="w-4 h-4" />
              Download .md
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Button */}
      <motion.button
        onClick={() => setShowMenu(!showMenu)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 15 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="CV Actions"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#b3d574] to-[#24b391] opacity-50 blur-xl group-hover:opacity-75 transition-opacity" />

        {/* Button */}
        <div className="relative flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-[#b3d574] to-[#24b391] text-zinc-950 font-medium shadow-lg">
          <Download className="w-5 h-5" />
          <motion.span
            initial={{ width: 0, opacity: 0 }}
            animate={{
              width: isHovered ? 'auto' : 0,
              opacity: isHovered ? 1 : 0
            }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden whitespace-nowrap text-sm"
          >
            CV
          </motion.span>
        </div>
      </motion.button>
    </div>
  )
}
