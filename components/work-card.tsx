'use client'

import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { SkillPill } from '@/components/ui/skill-pill'
import { Badge } from '@/components/ui/badge'
import { ExternalLink } from 'lucide-react'

interface WorkCardProps {
  title: string
  description: string
  techStack: string[]
  link?: string
  logoSrc?: string
  award?: string
}

export const WorkCard = ({
  title,
  description,
  techStack,
  link,
  logoSrc,
  award,
}: WorkCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
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
      className="group flex flex-col gap-3 sm:gap-4 rounded-lg sm:rounded-xl md:rounded-2xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 p-4 sm:p-5 md:p-6 lg:p-8 2xl:p-10 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#b3d574]/20"
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
    >
      {/* Logo and Title */}
      <div className="flex flex-col gap-2 sm:gap-3">
        {logoSrc && (
          <motion.div
            className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 rounded-md sm:rounded-lg bg-white/10 flex items-center justify-center overflow-hidden border border-white/10"
            whileHover={{ scale: 1.05, borderColor: 'rgba(179, 213, 116, 0.3)' }}
            transition={{ duration: 0.2 }}
          >
            <img src={logoSrc} alt={title} className="w-full h-full object-contain" />
          </motion.div>
        )}
        <div className="flex flex-col gap-1.5 sm:gap-2">
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-zinc-50 group-hover:text-[#b3d574] transition-colors">
            {title}
          </h3>
          {award && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Badge label={award} variant="award" />
            </motion.div>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-xs sm:text-sm md:text-base lg:text-lg text-zinc-400 leading-relaxed whitespace-pre-line">
        {description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-2.5">
        {techStack.map((tech, idx) => (
          <motion.div
            key={tech}
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
          >
            <SkillPill skill={tech} />
          </motion.div>
        ))}
      </div>

      {/* Link */}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 sm:mt-2 inline-flex items-center gap-2 text-zinc-400 hover:text-[#b3d574] transition-colors duration-200 group/link"
        >
          <span className="text-xs sm:text-sm font-medium">View</span>
          <motion.div whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
            <ExternalLink className="w-3 sm:w-4 h-3 sm:h-4" />
          </motion.div>
        </a>
      )}
    </motion.div>
  )
}
