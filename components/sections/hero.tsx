'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { EthSectionBg } from '@/components/eth-section-bg'
import { StatsCounter } from '@/components/stats-counter'
import { heroVariants, heroItemVariants } from '@/lib/animations'
import { useReducedMotion } from '@/hooks/use-reduced-motion'

export const HeroSection = () => {
  const imageRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()
  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return
      const scrollY = window.scrollY
      const parallaxOffset = prefersReducedMotion ? 0 : scrollY * 0.5
      imageRef.current.style.transform = `translateY(${parallaxOffset}px)`
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prefersReducedMotion])

  return (
    <section className="snap-start snap-always h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 2xl:py-40 overflow-hidden relative">
      <EthSectionBg />

      {/* Content */}
      <motion.div
        className="flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14 2xl:gap-16 max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl w-full relative z-10 flex-1"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image with parallax */}
        <motion.div
          ref={imageRef}
          className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 will-change-transform"
          variants={heroItemVariants}
        >
          <img
            src="/images/focus.svg"
            alt=""
            className="absolute inset-0 w-full h-full pointer-events-none"
          />
          <div className="absolute inset-2 sm:inset-3 md:inset-4 lg:inset-5 xl:inset-6 2xl:inset-8">
            <img
              src="/images/me.mr13.mobile.png"
              alt="Pylyp Radionov"
              className="w-full h-full rounded-3xl object-cover border-2 border-zinc-800 md:hidden"
            />
            <img
              src="/images/me.mr13.png"
              alt="Pylyp Radionov"
              className="w-full h-full rounded-3xl object-cover border-2 border-zinc-800 hidden md:block"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#b3d574]/20 to-[#24b391]/20 opacity-0 hover:opacity-100 transition-opacity duration-500" />
          </div>
        </motion.div>

        {/* Name with gradient and hover animation */}
        <motion.div
          className="flex flex-col items-center gap-3 sm:gap-4 md:gap-5"
          variants={heroItemVariants}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-center text-zinc-50 transition-all duration-300 leading-tight">
            Pylyp
            <br />
            <span className="inline-block bg-gradient-to-r from-[#b3d574] to-[#24b391] bg-clip-text text-transparent hover:from-[#24b391] hover:to-[#b3d574] transition-all duration-500">
              Radionov
            </span>
          </h1>

          {/* Achievement highlight */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#b3d574] font-medium text-center max-w-md sm:max-w-lg md:max-w-2xl">
            Built the first Ethereum internal transaction indexer in the AML/compliance industry
            (2017)
          </p>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-zinc-400 text-center font-light">
            Fullstack Engineer & Product Architect · 7+ Years
          </p>
        </motion.div>

        {/* Stats Counter */}
        <motion.div variants={heroItemVariants}>
          <StatsCounter />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="w-5 h-8 rounded-full border-2 border-zinc-600 flex items-start justify-center p-1">
          <motion.div
            className="w-1 h-2 rounded-full bg-zinc-400"
            animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </div>
      </motion.div>
    </section>
  )
}
