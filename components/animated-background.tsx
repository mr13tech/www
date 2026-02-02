'use client'

import { useEffect, useRef } from 'react'
import { useReducedMotion } from '@/hooks/use-reduced-motion'

type Point = [number, number]
type Face = [Point, Point, Point]

// Ethereum diamond geometry (scaled to unit space, centered at 0,0)
function createEthDiamond(scale: number, cx: number, cy: number): Face[] {
  const W = 0.613 * scale // width ratio
  const hw = W / 2

  // Y coordinates as ratios of total height
  const topApex: Point = [cx, cy - 0.5 * scale]
  const left: Point = [cx - hw, cy - 0.034 * scale]
  const right: Point = [cx + hw, cy - 0.034 * scale]
  const front: Point = [cx, cy - 0.1 * scale]
  const back: Point = [cx, cy + 0.145 * scale]

  // Bottom section
  const botTopL: Point = [cx - hw, cy + 0.01 * scale]
  const botTopR: Point = [cx + hw, cy + 0.01 * scale]
  const botFront: Point = [cx, cy + 0.21 * scale]
  const botApex: Point = [cx, cy + 0.5 * scale]

  return [
    // Top section — 4 faces of the 3D diamond
    [topApex, left, front],
    [topApex, front, right],
    [back, left, front],
    [back, front, right],
    // Bottom section — 2 faces of the inverted chevron
    [botApex, botTopL, botFront],
    [botApex, botFront, botTopR],
  ]
}

// Equilateral triangle vertices (lerp-triangle.py style)
function createTriangle(cx: number, cy: number, size: number, rotation: number = 0): Face {
  const pts: Point[] = []
  for (let i = 0; i < 3; i++) {
    const angle = rotation + (i * 2 * Math.PI) / 3 - Math.PI / 2
    pts.push([cx + size * Math.cos(angle), cy + size * Math.sin(angle)])
  }
  return pts as Face
}

// ============================================================================
// DRAWING HELPERS
// ============================================================================

function lerpFace(
  ctx: CanvasRenderingContext2D,
  face: Face,
  numLines: number,
  color1: string,
  color2: string,
  baseAlpha: number,
  lineWidth: number,
) {
  for (let step = 0; step < numLines; step++) {
    const ratio = step / numLines
    const edgeFade = Math.sin(ratio * Math.PI) * 0.5 + 0.5

    for (let idx = 0; idx < 3; idx++) {
      const [ox, oy] = face[idx]
      const wallStart = face[(idx + 1) % 3]
      const wallEnd = face[(idx + 2) % 3]
      const tx = wallStart[0] + (wallEnd[0] - wallStart[0]) * ratio
      const ty = wallStart[1] + (wallEnd[1] - wallStart[1]) * ratio

      const alpha = baseAlpha * edgeFade

      const grad = ctx.createLinearGradient(ox, oy, tx, ty)
      grad.addColorStop(0, withAlpha(color1, alpha))
      grad.addColorStop(1, withAlpha(color2, alpha * 0.6))

      ctx.beginPath()
      ctx.moveTo(ox, oy)
      ctx.lineTo(tx, ty)
      ctx.strokeStyle = grad
      ctx.lineWidth = lineWidth
      ctx.stroke()
    }
  }
}

function withAlpha(hex: string, alpha: number): string {
  const r = Number.parseInt(hex.slice(1, 3), 16)
  const g = Number.parseInt(hex.slice(3, 5), 16)
  const b = Number.parseInt(hex.slice(5, 7), 16)
  return `rgba(${r},${g},${b},${alpha})`
}

// ============================================================================
// COMPONENT
// ============================================================================

export const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const drawProgressRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let startTime = Date.now()

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    resize()

    // Fixed decorative triangles at intentional positions
    const floatingTriangles = [
      // Top-left corner
      { x: 0.08, y: 0.12, size: 70, rotation: 0, rotSpeed: 0.0002, numLines: 8, alpha: 0.12 },
      // Top-right corner
      {
        x: 0.88,
        y: 0.1,
        size: 55,
        rotation: Math.PI / 6,
        rotSpeed: -0.00015,
        numLines: 7,
        alpha: 0.1,
      },
      // Bottom-left
      {
        x: 0.06,
        y: 0.82,
        size: 60,
        rotation: Math.PI / 3,
        rotSpeed: 0.00018,
        numLines: 7,
        alpha: 0.1,
      },
      // Bottom-right
      {
        x: 0.9,
        y: 0.85,
        size: 65,
        rotation: -Math.PI / 4,
        rotSpeed: -0.0002,
        numLines: 8,
        alpha: 0.11,
      },
      // Mid-left
      {
        x: 0.04,
        y: 0.48,
        size: 45,
        rotation: Math.PI / 2,
        rotSpeed: 0.00025,
        numLines: 6,
        alpha: 0.08,
      },
      // Mid-right
      {
        x: 0.94,
        y: 0.5,
        size: 50,
        rotation: -Math.PI / 5,
        rotSpeed: -0.00022,
        numLines: 6,
        alpha: 0.09,
      },
    ]

    const render = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      const elapsed = (Date.now() - startTime) / 1000

      // Clear
      ctx.clearRect(0, 0, w, h)

      // Progressive draw-in (0 → 1 over 3s on load)
      if (prefersReducedMotion) {
        drawProgressRef.current = 1
      } else {
        drawProgressRef.current = Math.min(1, drawProgressRef.current + 0.008)
      }
      const progress = drawProgressRef.current

      // ── Central Ethereum Diamond ──
      const ethScale = Math.min(w, h) * 1.1
      const ethCx = w / 2
      const ethCy = h / 2

      // Slow breathing
      const breathe = 1 + Math.sin(elapsed * 0.4) * 0.015
      const currentScale = ethScale * breathe

      const ethFaces = createEthDiamond(currentScale, ethCx, ethCy)
      const maxLinesEth = 28
      const currentLinesEth = Math.floor(maxLinesEth * progress)

      if (currentLinesEth > 0) {
        // Draw each face with slightly different color tints
        const faceColors: Array<[string, string]> = [
          ['#b3d574', '#24b391'], // front-left
          ['#24b391', '#b3d574'], // front-right
          ['#8bc34a', '#1a9e7d'], // back-left (darker)
          ['#1a9e7d', '#8bc34a'], // back-right
          ['#b3d574', '#1a9e7d'], // bottom-left
          ['#1a9e7d', '#b3d574'], // bottom-right
        ]

        for (let fi = 0; fi < ethFaces.length; fi++) {
          const [c1, c2] = faceColors[fi]
          // Top section faces slightly brighter than bottom
          const isTop = fi < 4
          const baseAlpha = isTop ? 0.22 : 0.15
          lerpFace(ctx, ethFaces[fi], currentLinesEth, c1, c2, baseAlpha, 0.8)
        }

        // Glow pass — redraw with thicker, more transparent lines
        ctx.globalCompositeOperation = 'screen'
        for (let fi = 0; fi < ethFaces.length; fi++) {
          const [c1, c2] = faceColors[fi]
          lerpFace(ctx, ethFaces[fi], Math.floor(currentLinesEth * 0.4), c1, c2, 0.04, 3)
        }
        ctx.globalCompositeOperation = 'source-over'
      }

      // ── Floating decorative lerp triangles ──
      if (!prefersReducedMotion) {
        for (const tri of floatingTriangles) {
          tri.rotation += tri.rotSpeed

          const tx = tri.x * w
          const ty = tri.y * h

          const face = createTriangle(tx, ty, tri.size, tri.rotation)
          const triLines = Math.floor(tri.numLines * progress)

          if (triLines > 0) {
            lerpFace(ctx, face, triLines, '#b3d574', '#24b391', tri.alpha * progress, 0.7)
          }
        }
      }

      // ── Subtle radial glow at center ──
      const glowRadius = currentScale * 0.5
      const glow = ctx.createRadialGradient(ethCx, ethCy, 0, ethCx, ethCy, glowRadius)
      glow.addColorStop(0, 'rgba(179, 213, 116, 0.03)')
      glow.addColorStop(0.5, 'rgba(36, 179, 145, 0.015)')
      glow.addColorStop(1, 'transparent')
      ctx.fillStyle = glow
      ctx.fillRect(0, 0, w, h)

      animId = requestAnimationFrame(render)
    }

    window.addEventListener('resize', resize)
    render()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [prefersReducedMotion])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" aria-hidden="true" />
  )
}
