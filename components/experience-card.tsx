'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { SkillPill } from '@/components/ui/skill-pill'
import { Badge } from '@/components/ui/badge'
import type { Experience } from '@/types'

interface ExperienceCardProps {
  experience: Experience
  index?: number
}

export const ExperienceCard = ({ experience, index = 0 }: ExperienceCardProps) => {
  const [expanded, setExpanded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  return (
    <motion.div
      ref={cardRef}
      className="flex flex-col gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Timeline dot and line connector */}
      <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-5">
        {/* Timeline indicator */}
        <div className="flex flex-col items-center">
          <motion.div
            className="w-2 sm:w-2.5 md:w-3 lg:w-3.5 rounded-full flex-shrink-0 mt-1 sm:mt-1.5 md:mt-2 lg:mt-2.5"
            animate={isVisible ? { scale: 1.2 } : { scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            style={{
              background: isVisible
                ? 'linear-gradient(135deg, #b3d574 0%, #24b391 100%)'
                : 'rgb(113, 113, 122)',
              boxShadow: isVisible ? '0 0 12px rgba(179, 213, 116, 0.4)' : 'none',
            }}
          />
          <motion.div
            className="w-px bg-zinc-800"
            initial={{ height: 0 }}
            animate={isVisible ? { height: 'auto' } : { height: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            style={{ minHeight: '64px' }}
          />
        </div>

        {/* Card with glassmorphism */}
        <motion.div
          className="flex-1 rounded-lg sm:rounded-xl md:rounded-2xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 p-3 sm:p-4 md:p-5 lg:p-5 transition-all duration-300 hover:shadow-lg hover:shadow-[#b3d574]/20 backdrop-blur-sm group"
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
        >
          {/* Header */}
          <div className="flex flex-col gap-2 sm:gap-3 mb-3 sm:mb-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3">
              <div>
                <h3 className="text-sm sm:text-base md:text-lg lg:text-lg font-bold text-zinc-50 group-hover:text-[#b3d574] transition-colors">
                  {experience.company}
                </h3>
                <p className="text-xs sm:text-xs md:text-sm lg:text-sm text-zinc-400">
                  {experience.role}
                </p>
              </div>
              <Badge label={`${experience.startDate} — ${experience.endDate}`} variant="duration" />
            </div>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-xs md:text-sm lg:text-sm text-zinc-400 leading-relaxed mb-2 sm:mb-3">
            {experience.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
            {experience.techStack.map(tech => (
              <SkillPill key={tech} skill={tech} />
            ))}
          </div>

          {/* Achievements toggle */}
          {experience.achievements.length > 0 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-2 text-zinc-400 hover:text-[#b3d574] transition-colors duration-200 text-xs sm:text-sm font-medium group/btn"
            >
              <span>Key Achievements</span>
              <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown className="w-3 sm:w-4 h-3 sm:h-4 group-hover/btn:text-[#b3d574]" />
              </motion.div>
            </button>
          )}

          {/* Achievements list with smooth expand */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: expanded ? 'auto' : 0,
              opacity: expanded ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-3 sm:mt-4 pl-3 sm:pl-4 border-l border-[#b3d574]/20 flex flex-col gap-2 sm:gap-3">
              {experience.achievements.map((achievement, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={expanded ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.2, delay: idx * 0.05 }}
                  className="text-xs sm:text-xs md:text-sm text-zinc-400 leading-relaxed"
                >
                  • {achievement}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}
