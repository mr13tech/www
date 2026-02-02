'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Github, Twitter, Linkedin, Mail } from 'lucide-react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

const CONTACTS = [
  {
    label: 'GitHub',
    icon: Github,
    value: 'github.com/mr13tech',
    link: 'https://github.com/mr13tech',
  },
  {
    label: 'LinkedIn',
    icon: Linkedin,
    value: 'linkedin.com/in/mr13tech',
    link: 'https://www.linkedin.com/in/mr13tech/',
  },
  {
    label: 'Twitter',
    icon: Twitter,
    value: '@mr13tech',
    link: 'https://twitter.com/mr13tech',
  },
  {
    label: 'Email',
    icon: Mail,
    value: 'me@mr13.tech',
    link: 'mailto:me@mr13.tech',
  },
]

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
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
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
          >
            <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl p-6 sm:p-8 shadow-2xl">
              {/* Close button */}
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5 text-zinc-400" />
              </motion.button>

              {/* Header */}
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-zinc-50 mb-2">Get in Touch</h2>
                <p className="text-sm sm:text-base text-zinc-400">
                  Reach out through any of these channels
                </p>
              </div>

              {/* Contacts grid */}
              <div className="space-y-3">
                {CONTACTS.map(({ label, icon: Icon, value, link }, idx) => (
                  <motion.a
                    key={label}
                    href={link}
                    target={label !== 'Email' ? '_blank' : undefined}
                    rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-4 p-4 rounded-lg border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-200 group"
                  >
                    <div className="p-2 rounded-lg bg-gradient-to-br from-[#b3d574] to-[#24b391] text-zinc-950 group-hover:shadow-lg group-hover:shadow-[#b3d574]/30 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-zinc-50">{label}</p>
                      <p className="text-xs text-zinc-400 truncate">{value}</p>
                    </div>
                    <motion.div
                      whileHover={{ x: 2 }}
                      className="text-zinc-500 group-hover:text-[#b3d574] transition-colors"
                    >
                      →
                    </motion.div>
                  </motion.a>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <p className="text-xs text-zinc-500 text-center">© 2025 Pylyp Radionov</p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
