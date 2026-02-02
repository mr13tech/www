'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
import { EthSectionBg } from '@/components/eth-section-bg'
import { containerVariants, itemVariants } from '@/lib/animations'

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
]

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="snap-start snap-always h-screen flex items-center justify-center w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 2xl:py-40 relative overflow-hidden"
    >
      <EthSectionBg />

      <motion.div
        className="relative max-w-2xl w-full flex flex-col items-center gap-8 sm:gap-10 md:gap-12 z-10"
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
          <div className="bg-gradient-to-r from-[#b3d574] to-[#24b391] bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Available for Hiring
          </div>
        </motion.div>

        <p className="text-zinc-400 text-sm sm:text-base md:text-lg text-center font-light">
          Let's build something great together
        </p>

        {/* Contact links */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 sm:gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {CONTACTS.map(({ label, icon: Icon, value, link, external }) => (
            <motion.a
              key={label}
              href={link}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="flex items-center gap-3 px-4 py-3 sm:px-5 sm:py-3.5 rounded-xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-200 group"
            >
              <div className="p-2 rounded-lg bg-gradient-to-br from-[#b3d574] to-[#24b391] text-zinc-950 group-hover:shadow-lg group-hover:shadow-[#b3d574]/30 transition-all">
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-zinc-50 group-hover:text-[#b3d574] transition-colors">
                  {label}
                </p>
                <p className="text-xs text-zinc-400">{value}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <div className="text-center text-xs text-zinc-500 pt-6 border-t border-white/10 w-full">
          <p>&copy; 2025 Pylyp Radionov. All rights reserved.</p>
        </div>
      </motion.div>
    </section>
  )
}
