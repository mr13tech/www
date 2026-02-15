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
    icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: 'Ethereum Indexing Pioneer',
    description:
      'Built the first Ethereum internal transaction indexer in the AML/compliance industry',
    highlight: 'C++ solution: 4M blocks in 6 hours on 256MB RAM',
  },
  {
    icon: <Trophy className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: 'Hackathon Winner',
    description:
      'Won Best Use of IPFS at ETHGlobal HackFS 2023 plus multiple hackathon participations',
    highlight: 'Winner: Best Use of IPFS — Decentralized file sharing on Filecoin',
  },
  {
    icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: 'Technical Leadership',
    description: 'CTO at Copernic Space, Product Engineer at SmartMerchant — owning product outcomes and mentoring engineers',
    highlight: 'Led teams of 3-5 engineers across distributed timezones',
  },
  {
    icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: 'Startup Success',
    description: 'Architected platforms that raised significant funding',
    highlight: '$1M+ total funding raised for portfolio companies',
  },
]

export const ImpactSection = () => {
  return (
    <section className="snap-start snap-always min-h-screen w-full flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 2xl:py-40 relative overflow-hidden">
      <EthSectionBg />

      <div className="max-w-5xl w-full relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-50 mb-4">
            Impact & Achievements
          </h2>
          <p className="text-lg sm:text-xl text-zinc-400">
            Shipping production systems from protocol layer to product
          </p>
        </motion.div>

        {/* Achievement cards grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
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
              className="group p-6 sm:p-8 rounded-xl border border-white/10 hover:border-white/20 transition-all bg-white/5 hover:bg-white/10 backdrop-blur-sm hover:shadow-lg hover:shadow-[#b3d574]/10"
            >
              {/* Icon */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-[#b3d574] to-[#24b391] flex items-center justify-center text-zinc-950 mb-5 group-hover:shadow-lg group-hover:shadow-[#b3d574]/30 transition-all">
                {achievement.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-bold text-zinc-50 mb-2 group-hover:text-[#b3d574] transition-colors">
                {achievement.title}
              </h3>
              <p className="text-sm sm:text-base text-zinc-400 mb-4 leading-relaxed">
                {achievement.description}
              </p>

              {/* Highlight */}
              {achievement.highlight && (
                <p className="text-xs sm:text-sm text-[#b3d574]/80 font-medium">
                  {achievement.highlight}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Full-Stack expertise callout */}
        <motion.div
          className="mt-12 sm:mt-16 p-6 sm:p-10 rounded-xl border border-white/10 bg-gradient-to-r from-[#b3d574]/5 to-[#24b391]/5 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg sm:text-xl font-bold text-zinc-50 mb-4">Full-Stack Expertise</h3>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            From low-level C++ protocol optimization to high-conversion React frontends.
            Currently focused on AI-augmented engineering — using Spec-Driven Development
            and agentic coding tools to accelerate architecture and delivery. Experienced
            across the entire stack: smart contracts, ZK circuits, ETL pipelines processing
            petabytes of blockchain data, and modern frontend architectures.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
