'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, Phone, Download, FileText } from 'lucide-react'
import { EthSectionBg } from '@/components/eth-section-bg'
import { containerVariants, itemVariants } from '@/lib/animations'
import { useState } from 'react'

const CONTACTS = [
  {
    label: 'Email',
    icon: Mail,
    value: 'me@mr13.tech',
    link: 'mailto:me@mr13.tech',
  },
  {
    label: 'GitHub',
    icon: Github,
    value: 'github.com/mr13tech',
    link: 'https://github.com/mr13tech',
    external: true,
  },
  {
    label: 'LinkedIn',
    icon: Linkedin,
    value: 'linkedin.com/in/mr13tech',
    link: 'https://www.linkedin.com/in/mr13tech/',
    external: true,
  },
  {
    label: 'Twitter',
    icon: Twitter,
    value: '@mr13tech',
    link: 'https://twitter.com/mr13tech',
    external: true,
  },
  {
    label: 'Phone',
    icon: Phone,
    value: '+380932610010',
    link: 'https://t.me/+380932610010',
    external: true,
  },
]

export const ContactSection = () => {
  const [showCVMenu, setShowCVMenu] = useState(false)

  const handleDownloadMD = async () => {
    try {
      const response = await fetch('/Pylyp_Radionov_CV.md')
      const text = await response.text()

      const blob = new Blob([text], { type: 'text/markdown' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'Pylyp_Radionov_CV.md'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Failed to download CV:', error)
    }
  }

  const handleViewCV = () => {
    window.open('/Pylyp_Radionov_CV.md', '_blank')
  }

  return (
    <section
      id="contact"
      className="snap-start snap-always min-h-screen-safe flex items-center justify-center w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-8 sm:py-10 md:py-10 lg:py-8 xl:py-8 relative overflow-hidden"
    >
      <EthSectionBg />

      <motion.div
        className="relative max-w-2xl w-full flex flex-col items-center gap-5 sm:gap-6 md:gap-8 z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Availability status */}
        <motion.div
          className="text-center"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="bg-gradient-to-r from-[#b3d574] to-[#24b391] bg-clip-text text-transparent text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            Available for Hiring
          </div>
        </motion.div>

        <p className="text-zinc-400 text-xs sm:text-sm md:text-base text-center font-light">
          Let's build something great together
        </p>

        {/* Download CV CTA */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={handleDownloadMD}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-[#b3d574] to-[#24b391] text-zinc-950 font-bold text-base overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#b3d574]/30 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#24b391] to-[#b3d574] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-3">
              <Download className="w-5 h-5" />
              Download CV (.md)
            </span>
          </motion.button>

          <motion.button
            onClick={handleViewCV}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 rounded-xl border-2 border-[#b3d574]/50 hover:border-[#b3d574] bg-transparent hover:bg-[#b3d574]/10 text-zinc-50 font-bold text-base transition-all duration-300"
          >
            <span className="flex items-center gap-3">
              <FileText className="w-5 h-5" />
              View CV
            </span>
          </motion.button>
        </motion.div>

        {/* Contact links */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {CONTACTS.map(({ label, icon: Icon, value, link, external }, index) => (
            <motion.a
              key={label}
              href={link}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className={`flex items-center gap-3 px-4 py-3 sm:px-5 sm:py-3.5 rounded-xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-200 group overflow-hidden${index === CONTACTS.length - 1 ? ' sm:col-span-2' : ''}`}
            >
              <div className="p-2 rounded-lg bg-gradient-to-br from-[#b3d574] to-[#24b391] text-zinc-950 group-hover:shadow-lg group-hover:shadow-[#b3d574]/30 transition-all flex-shrink-0">
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-zinc-50 group-hover:text-[#b3d574] transition-colors">
                  {label}
                </p>
                <p className="text-xs text-zinc-400 truncate">{value}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <div className="text-center text-xs text-zinc-500 pt-6 border-t border-white/10 w-full">
        </div>
      </motion.div>
    </section>
  )
}
