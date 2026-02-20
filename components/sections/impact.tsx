'use client'

import { motion } from 'framer-motion'
import { Zap, Trophy, Users, TrendingUp } from 'lucide-react'
import { containerVariants, itemVariants } from '@/lib/animations'
import { EthSectionBg } from '@/components/eth-section-bg'

interface AchievementCard {
  icon: React.ReactNode
  title: string
  description: string
  highlight?: string
}

const achievements: AchievementCard[] = [
  {
    icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: 'Ethereum Indexing Pioneer',
    description:
      'Built the first Ethereum internal transaction indexer in the AML/compliance industry',
    highlight: 'C++ solution: 4M blocks in 6 hours on 256MB RAM',
  },
  {
    icon: <Trophy className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: 'Hackathon Winner',
    description:
      'Won Best Use of IPFS at ETHGlobal HackFS 2023 plus multiple hackathon participations',
    highlight: 'Winner: Best Use of IPFS — Decentralized file sharing on Filecoin',
  },
  {
    icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: 'Technical Leadership',
    description:
      'CTO at Copernic Space, Product Engineer at SmartMerchant — owning product outcomes and mentoring engineers',
    highlight: 'Led teams of 3-5 engineers across distributed timezones',
  },
  {
    icon: <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: 'Startup Success',
    description: 'Architected platforms that raised significant funding',
    highlight: '$1.5M+ total funding raised for portfolio companies',
  },
]

export const ImpactSection = () => {
  return (
    <section id="impact" className="snap-start snap-always min-h-screen-safe w-full flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-8 sm:py-10 md:py-10 lg:py-8 xl:py-8 relative overflow-hidden pb-mobile-nav">
      <EthSectionBg />

      <div className="max-w-5xl w-full relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-6 sm:mb-8 md:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-zinc-50 mb-2">
            Impact & Achievements
          </h2>
          <p className="text-sm sm:text-base md:text-base text-zinc-400">
            Shipping production systems from protocol layer to product
          </p>
        </motion.div>

        {/* Achievement cards grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="group p-4 sm:p-5 md:p-5 rounded-xl border border-white/10 hover:border-white/20 transition-all bg-white/5 hover:bg-white/10 backdrop-blur-sm hover:shadow-lg hover:shadow-[#b3d574]/10"
            >
              {/* Icon */}
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-[#b3d574] to-[#24b391] flex items-center justify-center text-zinc-950 mb-3 group-hover:shadow-lg group-hover:shadow-[#b3d574]/30 transition-all">
                {achievement.icon}
              </div>

              {/* Content */}
              <h3 className="text-sm sm:text-base md:text-base font-bold text-zinc-50 mb-1.5 group-hover:text-[#b3d574] transition-colors">
                {achievement.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mb-2.5 leading-relaxed">
                {achievement.description}
              </p>

              {/* Highlight */}
              {achievement.highlight && (
                <p className="text-xs text-[#b3d574] font-semibold border-l-2 border-[#b3d574]/40 pl-2 mt-1">{achievement.highlight}</p>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Full-Stack expertise callout */}
        <motion.div
          className="mt-4 sm:mt-6 p-4 sm:p-5 rounded-xl border border-white/10 bg-gradient-to-r from-[#b3d574]/5 to-[#24b391]/5 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-sm sm:text-base font-bold text-zinc-50 mb-2">Full-Stack Expertise</h3>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            From low-level C++ protocol optimization to high-conversion React frontends. Currently
            focused on AI-augmented engineering — using Spec-Driven Development and agentic coding
            tools to accelerate architecture and delivery. Experienced across the entire stack:
            smart contracts, ZK circuits, ETL pipelines processing petabytes of blockchain data, and
            modern frontend architectures.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
