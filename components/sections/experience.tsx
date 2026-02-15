'use client'

import { motion } from 'framer-motion'
import { experiences } from '@/data/experience'
import { ExperienceCard } from '@/components/experience-card'
import { EthSectionBg } from '@/components/eth-section-bg'

export const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="snap-start snap-always min-h-screen-safe overflow-y-auto overflow-x-hidden w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-8 sm:py-10 md:py-10 lg:py-8 xl:py-8 relative"
    >
      <div className="absolute inset-x-0 top-0 h-screen z-0 pointer-events-none -ml-4 sm:-ml-6 md:-ml-8 lg:-ml-10 xl:-ml-12 -mr-4 sm:-mr-6 md:-mr-8 lg:-mr-10 xl:-mr-12">
        <EthSectionBg />
      </div>

      <div className="max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-5xl mx-auto flex flex-col gap-5 sm:gap-6 md:gap-7 lg:gap-7 xl:gap-7 relative z-10">
        {/* Section Title */}
        <motion.div
          className="flex flex-col gap-1 sm:gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-zinc-50">
            Experience
          </h2>
          <p className="text-xs sm:text-sm md:text-sm lg:text-base text-zinc-400">
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
