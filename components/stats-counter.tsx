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
  { label: 'Hackathons · 1 Win', value: '7', prefix: '+' },
]

export const StatsCounter = () => {
  const prefersReducedMotion = useReducedMotion()
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    setIsInView(true)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.3 }}
      className="flex items-center rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm divide-x divide-white/10 w-full"
    >
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className="flex flex-col items-center justify-center px-3 py-2.5 md:px-5 md:py-3 flex-1"
        >
          <div className="text-lg md:text-xl font-bold text-gradient-green">
            {prefersReducedMotion ? (
              <span>
                {stat.prefix}
                {stat.value}
              </span>
            ) : (
              <AnimatedNumber value={Number.parseInt(stat.value)} prefix={stat.prefix} />
            )}
          </div>
          <div className="text-xs text-zinc-400 text-center whitespace-nowrap">{stat.label}</div>
        </div>
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
