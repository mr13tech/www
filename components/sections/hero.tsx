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
    <section id="hero" className="snap-start snap-always h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-8 sm:py-10 md:py-10 lg:py-8 xl:py-8 overflow-hidden relative">
      <EthSectionBg />

      {/* Content */}
      <motion.div
        className="flex flex-col items-center justify-center gap-4 sm:gap-5 md:gap-5 lg:gap-5 xl:gap-5 max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl w-full relative z-10 flex-1"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image with parallax */}
        <motion.div
          ref={imageRef}
          className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 xl:w-48 xl:h-48 2xl:w-56 2xl:h-56 will-change-transform"
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
                sizes="(min-width: 768px) 192px, 0px"
                priority
                quality={90}
              />
            </div>
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#b3d574]/20 to-[#24b391]/20 opacity-0 hover:opacity-100 transition-opacity duration-500 z-20" />
          </div>
        </motion.div>

        {/* Name with gradient and hover animation */}
        <motion.div
          className="flex flex-col items-center gap-2 sm:gap-2 md:gap-3"
          variants={heroItemVariants}
        >
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold text-center text-zinc-50 transition-all duration-300 leading-tight">
            Pylyp
            <br />
            <span className="inline-block bg-gradient-to-r from-[#b3d574] to-[#24b391] bg-clip-text text-transparent hover:from-[#24b391] hover:to-[#b3d574] transition-all duration-500">
              Radionov
            </span>
          </h1>

          {/* Achievement highlight */}
          <p className="text-xs sm:text-sm md:text-sm lg:text-base text-[#b3d574] font-medium text-center max-w-md sm:max-w-lg md:max-w-2xl">
            Built the first Ethereum internal transaction indexer in the AML/compliance industry
            (2017)
          </p>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl text-zinc-400 text-center font-light">
            Fullstack Engineer & Product Architect
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
