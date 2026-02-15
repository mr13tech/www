'use client'

import { motion } from 'framer-motion'
import { Zap, Code2, Database, Users2, Brain } from 'lucide-react'
import { skillCategories } from '@/data/skills'
import { SkillPill } from '@/components/ui/skill-pill'
import { EthSectionBg } from '@/components/eth-section-bg'
import { containerVariants, itemVariants } from '@/lib/animations'

const iconMap = {
  Brain,
  Zap,
  Code2,
  Database,
  Users2,
}

// Category-specific accent colors
const categoryColors: Record<string, string> = {
  'ai-workflows': '#a78bfa',
  'web3-blockchain': '#b3d574',
  'languages-frameworks': '#24b391',
  'data-infrastructure': '#6b9fff',
  'product-leadership': '#d4a574',
}

export const SkillsSection = () => {
  return (
    <section className="snap-start snap-always h-screen overflow-y-auto overflow-x-hidden w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 2xl:py-40 relative">
      <EthSectionBg />

      <div className="max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20 relative z-10">
        <motion.div
          className="flex flex-col gap-2 sm:gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-zinc-50">
            Skills & Expertise
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-zinc-400">
            Full-stack engineering, AI-augmented workflows, and blockchain infrastructure
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap]
            const accentColor = categoryColors[category.id] || '#b3d574'

            return (
              <motion.div
                key={category.id}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="rounded-xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-sm p-4 sm:p-5 md:p-6 lg:p-8 transition-all duration-300 hover:shadow-lg group"
                style={{
                  boxShadow: `0 0 0 0 ${accentColor}00`,
                }}
              >
                <div className="flex items-center gap-3 mb-3 sm:mb-4 md:mb-5">
                  <div
                    className="inline-flex p-2 sm:p-2.5 rounded-lg bg-white/10"
                    style={{
                      boxShadow: `0 0 20px ${accentColor}10`,
                    }}
                  >
                    {Icon && (
                      <Icon
                        className="w-4 sm:w-5 md:w-5 lg:w-6 h-4 sm:h-5 md:h-5 lg:h-6"
                        style={{ color: accentColor }}
                      />
                    )}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-zinc-50 group-hover:text-[#b3d574] transition-colors">
                      {category.name}
                    </h3>
                    {category.description && (
                      <p className="text-xs md:text-sm text-zinc-400">
                        {category.description}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-2.5">
                  {category.skills.map(skill => (
                    <SkillPill key={skill} skill={skill} />
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
