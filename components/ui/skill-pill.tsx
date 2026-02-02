'use client'

import { motion } from 'framer-motion'

interface SkillPillProps {
  skill: string
  variant?: 'default' | 'featured'
}

export const SkillPill = ({ skill, variant = 'default' }: SkillPillProps) => {
  const variantClasses = {
    default:
      'bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-[#b3d574]/20',
    featured:
      'bg-white/15 hover:bg-white/25 border border-[#b3d574]/30 hover:border-[#b3d574]/60 hover:shadow-lg hover:shadow-[#b3d574]/30',
  }

  return (
    <motion.span
      className={`inline-block rounded-full px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 md:py-1.5 text-xs sm:text-xs md:text-sm lg:text-sm text-zinc-50 transition-all duration-200 backdrop-blur-sm ${variantClasses[variant]}`}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 10 }}
    >
      {skill}
    </motion.span>
  )
}
