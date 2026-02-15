'use client'

import { motion } from 'framer-motion'
import { experiences } from '@/data/experience'
import { ExperienceCard } from '@/components/experience-card'
import { EthSectionBg } from '@/components/eth-section-bg'

export const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="snap-start snap-always h-screen overflow-y-auto overflow-x-hidden w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 2xl:py-40 relative"
    >
      <EthSectionBg />

      <div className="max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20 relative z-10">
        {/* Section Title */}
        <motion.div
          className="flex flex-col gap-2 sm:gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-zinc-50">
            Experience
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-zinc-400">
            Blockchain, product architecture, and AI-augmented delivery
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="flex flex-col gap-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.id} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
