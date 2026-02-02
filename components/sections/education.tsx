'use client'

import { motion } from 'framer-motion'
import { education } from '@/data/education'
import { containerVariants, itemVariants } from '@/lib/animations'
import { BookOpen, GraduationCap, MapPin } from 'lucide-react'
import { EthSectionBg } from '@/components/eth-section-bg'

export const EducationSection = () => {
  return (
    <section className="snap-start snap-always h-screen w-full flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 2xl:py-40 relative overflow-hidden">
      <EthSectionBg />

      <div className="max-w-4xl w-full relative z-10">
        {/* Section header */}
        <motion.div
          className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="p-2 rounded-lg bg-white/10">
            <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-[#b3d574]" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-50">
            Education
          </h2>
        </motion.div>

        {/* Education entries */}
        <motion.div
          className="space-y-6 sm:space-y-8"
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
              className="group p-6 sm:p-8 rounded-xl border border-white/10 hover:border-white/20 transition-all bg-white/5 hover:bg-white/10 backdrop-blur-sm hover:shadow-lg hover:shadow-[#b3d574]/10"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6">
                <div className="flex-1">
                  <div className="flex items-baseline gap-3 mb-3">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#b3d574]">
                      {edu.degree}
                    </h3>
                    <span className="text-sm sm:text-base text-zinc-300 font-medium">
                      {edu.field}
                    </span>
                  </div>
                  <p className="text-base sm:text-lg text-zinc-200 mb-3 font-medium">
                    {edu.institution}
                  </p>
                  <div className="flex items-center gap-2 text-sm sm:text-base text-zinc-400">
                    <MapPin className="w-4 h-4 text-zinc-500" />
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
