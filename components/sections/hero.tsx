'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { EthSectionBg } from '@/components/eth-section-bg'
import { StatsCounter } from '@/components/stats-counter'
import { heroVariants, heroItemVariants } from '@/lib/animations'
import { useReducedMotion } from '@/hooks/use-reduced-motion'
import Image from 'next/image'

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
    <section id="hero" className="snap-start snap-always min-h-screen-safe w-full flex flex-col items-center justify-center md:justify-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-6 sm:py-12 md:py-20 overflow-hidden relative pb-mobile-nav">
      <EthSectionBg />

      {/* Content */}
      <motion.div
        className="flex flex-col items-center justify-center gap-3 sm:gap-4 md:flex-row md:items-center md:justify-center md:gap-10 lg:gap-14 max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl w-full relative z-10"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image with parallax */}
        <motion.div
          ref={imageRef}
          className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-52 md:h-52 lg:w-60 lg:h-60 xl:w-64 xl:h-64 2xl:w-72 2xl:h-72 will-change-transform flex-shrink-0"
          variants={heroItemVariants}
        >
          <div className="absolute inset-0 w-full h-full pointer-events-none z-10">
            <Image
              src="/images/focus.svg"
              alt=""
              width={224}
              height={224}
              className="w-full h-full"
              priority
            />
          </div>
          <div className="absolute inset-2 sm:inset-2 md:inset-3 lg:inset-3 xl:inset-3 2xl:inset-4 w-auto h-auto">
            {/* Mobile image */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden md:hidden">
              <Image
                src="/images/me.mr13.mobile.png"
                alt="Pylyp Radionov"
                fill
                className="object-cover border-2 border-zinc-800"
                sizes="(max-width: 768px) 160px, 0px"
                priority
                quality={90}
              />
            </div>
            {/* Desktop image */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden hidden md:block">
              <Image
                src="/images/me.mr13.png"
                alt="Pylyp Radionov"
                fill
                className="object-cover border-2 border-zinc-800"
                sizes="(min-width: 768px) 288px, 0px"
                priority
                quality={90}
              />
            </div>
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#b3d574]/20 to-[#24b391]/20 opacity-0 hover:opacity-100 transition-opacity duration-500 z-20" />
          </div>
        </motion.div>

        {/* Right column: name + stats */}
        <motion.div
          className="flex flex-col items-center gap-3 sm:gap-4 md:items-start"
          variants={heroItemVariants}
        >
          <div className="flex flex-col items-center gap-1 sm:gap-2 md:gap-3 text-center md:items-start md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold text-zinc-50 transition-all duration-300 leading-tight">
              Pylyp
              <br />
              <span className="inline-block bg-gradient-to-r from-[#b3d574] to-[#24b391] bg-clip-text text-transparent hover:from-[#24b391] hover:to-[#b3d574] transition-all duration-500">
                Radionov
              </span>
            </h1>

            {/* Achievement highlight */}
            <p className="text-xs sm:text-sm md:text-base text-[#b3d574] font-medium max-w-sm sm:max-w-lg md:max-w-2xl leading-snug">
              Built the first Ethereum internal transaction indexer in the AML/compliance industry
              (2017)
            </p>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm md:text-lg lg:text-xl text-zinc-400 font-light">
              Fullstack Engineer & Product Architect
            </p>
          </div>

          {/* Stats - desktop only (inline) */}
          <div className="hidden md:block w-full">
            <StatsCounter />
          </div>
        </motion.div>
      </motion.div>

      {/* Stats - mobile only (bottom) */}
      <motion.div
        className="md:hidden w-full max-w-sm px-4 mt-auto relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        <StatsCounter />
      </motion.div>

      {/* Scroll indicator - hidden on mobile */}
      <motion.div
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:block"
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
