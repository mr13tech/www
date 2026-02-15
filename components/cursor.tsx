'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useMousePosition } from '@/hooks/use-mouse-position'
import { useReducedMotion } from '@/hooks/use-reduced-motion'

export const CustomCursor = () => {
  const { x, y } = useMousePosition()
  const [isHoveringButton, setIsHoveringButton] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    // Detect touch devices — skip custom cursor entirely
    const isTouch = window.matchMedia('(hover: none)').matches || navigator.maxTouchPoints > 0
    setIsTouchDevice(isTouch)
    if (isTouch) return

    // Hide default cursor
    document.documentElement.style.cursor = 'none'

    // Add hover detection for interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a')
      ) {
        setIsHoveringButton(true)
      }
    }

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a')
      ) {
        setIsHoveringButton(false)
      }
    }

    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    return () => {
      document.documentElement.style.cursor = 'auto'
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
    }
  }, [])

  if (prefersReducedMotion) return null

  return (
    <>
      {/* Cursor dot */}
      <motion.div
        className="fixed w-2 h-2 bg-gradient-to-r from-[#b3d574] to-[#24b391] rounded-full pointer-events-none z-cursor"
        animate={{
          x: x - 4,
          y: y - 4,
          scale: isHoveringButton ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />

      {/* Cursor glow/ring */}
      <motion.div
        className="fixed w-8 h-8 border border-[#b3d574]/30 rounded-full pointer-events-none z-cursor"
        animate={{
          x: x - 16,
          y: y - 16,
          scale: isHoveringButton ? 1.8 : 1,
          borderColor: isHoveringButton ? 'rgba(179, 213, 116, 0.6)' : 'rgba(179, 213, 116, 0.3)',
          boxShadow: isHoveringButton
            ? '0 0 20px rgba(179, 213, 116, 0.4)'
            : '0 0 10px rgba(179, 213, 116, 0.2)',
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      />
    </>
  )
}
