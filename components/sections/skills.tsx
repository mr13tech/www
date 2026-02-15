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
    <section id="skills" className="snap-start snap-always h-screen overflow-y-auto overflow-x-hidden w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-8 sm:py-10 md:py-10 lg:py-8 xl:py-8 relative">
      <EthSectionBg />

      <div className="max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-5xl mx-auto flex flex-col gap-5 sm:gap-6 md:gap-7 lg:gap-7 xl:gap-7 relative z-10">
        <motion.div
          className="flex flex-col gap-1 sm:gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-zinc-50">
            Skills & Expertise
          </h2>
          <p className="text-xs sm:text-sm md:text-sm lg:text-base text-zinc-400">
            Full-stack engineering, AI-augmented workflows, and blockchain infrastructure
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-4 lg:gap-5 xl:gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map(category => {
            const Icon = iconMap[category.icon as keyof typeof iconMap]
            const accentColor = categoryColors[category.id] || '#b3d574'

            return (
              <motion.div
                key={category.id}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className={`rounded-xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-sm p-3 sm:p-4 md:p-5 lg:p-5 xl:p-5 transition-all duration-300 hover:shadow-lg group${category.id === 'ai-workflows' ? ' sm:col-span-2' : ''}`}
                style={{
                  boxShadow: `0 0 0 0 ${accentColor}00`,
                }}
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 md:mb-3">
                  <div
                    className="inline-flex p-1.5 sm:p-2 rounded-lg bg-white/10"
                    style={{
                      boxShadow: `0 0 20px ${accentColor}10`,
                    }}
                  >
                    {Icon && (
                      <Icon
                        className="w-3.5 sm:w-4 md:w-4 lg:w-4 h-3.5 sm:h-4 md:h-4 lg:h-4"
                        style={{ color: accentColor }}
                      />
                    )}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-lg font-bold text-zinc-50 group-hover:text-[#b3d574] transition-colors">
                      {category.name}
                    </h3>
                    {category.description && (
                      <p className="text-xs md:text-xs lg:text-xs text-zinc-400">
                        {category.description}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2">
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
