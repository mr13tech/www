'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/use-reduced-motion'
import { counterVariants } from '@/lib/animations'

interface Stat {
  label: string
  value: string
  prefix?: string
}

const stats: Stat[] = [
  { label: 'Years Experience', value: '8', prefix: '+' },
  { label: 'Projects Shipped', value: '20', prefix: '+' },
  { label: 'Hackathon Wins', value: '1' },
]

export const StatsCounter = () => {
  const prefersReducedMotion = useReducedMotion()
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    setIsInView(true)
  }, [])

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.5,
          },
        },
      }}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 w-full"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 15,
            delay: index * 0.1,
          }}
          className="flex flex-col items-center justify-center p-4 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-colors backdrop-blur-sm"
        >
          <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient-green mb-2">
            {prefersReducedMotion ? (
              <span>
                {stat.prefix}
                {stat.value}
              </span>
            ) : (
              <AnimatedNumber value={parseInt(stat.value)} prefix={stat.prefix} />
            )}
          </div>
          <div className="text-xs md:text-sm text-zinc-400 text-center">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  )
}

interface AnimatedNumberProps {
  value: number
  prefix?: string
}

function AnimatedNumber({ value, prefix }: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps
    const increment = value / steps

    let current = 0
    let step = 0

    const timer = setInterval(() => {
      step++
      current += increment
      setDisplayValue(Math.floor(current))

      if (step >= steps) {
        setDisplayValue(value)
        clearInterval(timer)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [value])

  return (
    <span>
      {prefix}
      {displayValue}
    </span>
  )
}
