'use client'

import { motion } from 'framer-motion'
import { education } from '@/data/education'
import { containerVariants, itemVariants } from '@/lib/animations'
import { BookOpen, GraduationCap, MapPin } from 'lucide-react'
import { EthSectionBg } from '@/components/eth-section-bg'

export const EducationSection = () => {
  return (
    <section id="education" className="snap-start snap-always min-h-screen-safe w-full flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-8 sm:py-10 md:py-10 lg:py-8 xl:py-8 relative overflow-hidden">
      <EthSectionBg />

      <div className="max-w-4xl w-full relative z-10">
        {/* Section header */}
        <motion.div
          className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-7 md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="p-1.5 sm:p-2 rounded-lg bg-white/10">
            <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-[#b3d574]" />
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-zinc-50">
            Education
          </h2>
        </motion.div>

        {/* Education entries */}
        <motion.div
          className="space-y-4 sm:space-y-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {education.map(edu => (
            <motion.div
              key={edu.id}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="group p-4 sm:p-5 rounded-xl border border-white/10 hover:border-white/20 transition-all bg-white/5 hover:bg-white/10 backdrop-blur-sm hover:shadow-lg hover:shadow-[#b3d574]/10"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
                <div className="flex-1">
                  <div className="flex items-baseline gap-2 mb-2">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#b3d574]">
                      {edu.degree}
                    </h3>
                    <span className="text-xs sm:text-sm text-zinc-300 font-medium">
                      {edu.field}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-zinc-200 mb-2 font-medium">
                    {edu.institution}
                  </p>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-400">
                    <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                    {edu.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
