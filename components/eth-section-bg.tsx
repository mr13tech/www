'use client'

import { useEffect, useRef, useState } from 'react'
import { useIntersection } from '@/hooks/use-intersection'
import { useReducedMotion } from '@/hooks/use-reduced-motion'
import { createEthDiamond } from '@/lib/lerp-eth/shared'
import { allVariants } from '@/lib/lerp-eth/variants'
import type { DrawFn } from '@/lib/lerp-eth/shared'

interface EthSectionBgProps {
  variant?: number
  opacity?: number
  scale?: number
}

export const EthSectionBg = ({ variant, opacity = 1, scale = 0.9 }: EthSectionBgProps) => {
  const { ref: containerRef, isVisible } = useIntersection({ threshold: 0.35 })
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const drawFnRef = useRef<DrawFn | null>(null)
  const progressRef = useRef(0)
  const fallbackVariantRef = useRef<number | null>(null)
  if (fallbackVariantRef.current === null) {
    fallbackVariantRef.current = Math.floor(Math.random() * allVariants.length)
  }

  const resolvedVariant = variant ?? fallbackVariantRef.current

  // Pick variant once on mount
  const [ready, setReady] = useState(false)
  useEffect(() => {
    drawFnRef.current = allVariants[resolvedVariant % allVariants.length]
    setReady(true)
  }, [resolvedVariant])

  useEffect(() => {
    if (isVisible) {
      progressRef.current = 0
    }
  }, [isVisible])

  useEffect(() => {
    if (!ready || !isVisible) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    const startTime = Date.now()

    const render = () => {
      const parent = canvas.parentElement
      if (!parent) return
      const w = parent.clientWidth
      const h = parent.clientHeight
      const elapsed = (Date.now() - startTime) / 1000

      ctx.clearRect(0, 0, w, h)

      // Progressive draw-in
      if (prefersReducedMotion) {
        progressRef.current = 1
      } else {
        progressRef.current = Math.min(1, progressRef.current + 0.005)
      }
      const progress = progressRef.current

      // Breathing
      const breathe = prefersReducedMotion ? 1 : 1 + Math.sin(elapsed * 0.4) * 0.012
      const ethScale = Math.min(w, h) * scale * breathe
      const cx = w / 2
      const cy = h / 2

      const faces = createEthDiamond(ethScale, cx, cy)
      const topFaces = faces.slice(0, 4)
      const botFaces = faces.slice(4)

      const maxLines = 24
      const currentLines = Math.max(1, Math.floor(maxLines * progress))

      ctx.globalAlpha = opacity
      drawFnRef.current?.(ctx, faces, topFaces, botFaces, currentLines)
      ctx.globalAlpha = 1

      if (!prefersReducedMotion || progressRef.current < 1) {
        animId = requestAnimationFrame(render)
      }
    }

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      const dpr = Math.min(window.devicePixelRatio, 2)
      const w = parent.clientWidth
      const h = parent.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      if (prefersReducedMotion) {
        render()
      }
    }

    resize()

    window.addEventListener('resize', resize)
    render()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [ready, prefersReducedMotion, opacity, scale, isVisible])

  return (
    <div ref={containerRef} className="absolute inset-0">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      />
    </div>
  )
}
