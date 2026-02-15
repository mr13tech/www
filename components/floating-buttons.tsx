'use client'

import { Download, Mail, ChevronUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ContactModal } from '@/components/contact-modal'

export const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [showContactModal, setShowContactModal] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero')
      const contactSection = document.getElementById('contact')

      if (!contactSection || !heroSection) {
        setIsVisible(true)
        setShowScrollTop(false)
        return
      }

      const heroRect = heroSection.getBoundingClientRect()
      const contactRect = contactSection.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Show scroll to top button when not on hero section
      const onHero = heroRect.bottom > windowHeight * 0.5
      setShowScrollTop(!onHero)

      // Only hide Contact and CV buttons when contact section is visible
      // But always show scroll to top if not on hero
      const onContact = contactRect.top <= windowHeight * 0.2
      setIsVisible(!onContact)
    }

    const container = document.querySelector('[data-scroll-container]')
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true })
      handleScroll() // Initial check
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToTop = () => {
    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.div
      className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-modal flex flex-col gap-3 pointer-events-auto"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      style={{ touchAction: 'auto' }}
    >
      {/* Button Stack */}
      <div className="flex flex-col gap-3">
        {/* Scroll to Top - Show when not on hero */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              onClick={scrollToTop}
              className="group relative pointer-events-auto"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll to top"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#b3d574] to-[#24b391] opacity-30 blur-lg group-hover:opacity-50 transition-opacity" />
              <div className="relative w-14 h-14 sm:w-12 sm:h-12 rounded-full bg-zinc-900/90 backdrop-blur-sm border border-white/10 hover:border-[#b3d574]/50 flex items-center justify-center text-zinc-400 hover:text-[#b3d574] transition-all">
                <ChevronUp className="w-5 h-5" />
              </div>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Contact and CV Buttons - Hide on contact section */}
        <AnimatePresence>
          {isVisible && (
            <>
              {/* Contact Button */}
              <motion.button
                onClick={() => setShowContactModal(true)}
                className="group relative pointer-events-auto"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 15 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Contact"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#b3d574] to-[#24b391] opacity-30 blur-lg group-hover:opacity-50 transition-opacity" />
                <div className="relative w-14 h-14 sm:w-12 sm:h-12 rounded-full bg-zinc-900/90 backdrop-blur-sm border border-white/10 hover:border-[#b3d574]/50 flex items-center justify-center text-zinc-400 hover:text-[#b3d574] transition-all">
                  <Mail className="w-5 h-5" />
                </div>
              </motion.button>

              {/* Download CV Button - Scrolls to contact */}
              <motion.button
                onClick={scrollToContact}
                className="group relative pointer-events-auto"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ delay: 1.1, type: 'spring', stiffness: 200, damping: 15 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Download CV"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#b3d574] to-[#24b391] opacity-50 blur-xl group-hover:opacity-75 transition-opacity" />
                <div className="relative w-14 h-14 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-[#b3d574] to-[#24b391] flex items-center justify-center text-zinc-950 shadow-lg">
                  <Download className="w-5 h-5" />
                </div>
              </motion.button>
            </>
          )}
        </AnimatePresence>
      </div>

      <ContactModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
      />
    </motion.div>
  )
}
