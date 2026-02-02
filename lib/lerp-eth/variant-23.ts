import { type DrawFn, type Point, lerp, drawTriangleOutline } from './shared'

/** Contour lines — outlines shrinking toward global center */
const variant23: DrawFn = (ctx, faces, _top, _bot, numLines) => {
  const gc: Point = [0, 0]
  // We need the actual center — compute from first call's face data
  // Since faces are already positioned, compute center from all vertices
  let sumX = 0
  let sumY = 0
  for (const tri of faces) {
    for (const v of tri) { sumX += v[0]; sumY += v[1] }
  }
  gc[0] = sumX / (faces.length * 3)
  gc[1] = sumY / (faces.length * 3)

  for (let step = 0; step < numLines; step++) {
    const t = numLines > 1 ? step / (numLines - 1) : 0
    const alpha = 0.2 - t * 0.12
    for (const tri of faces) {
      const s = [
        lerp(tri[0], gc, t * 0.8),
        lerp(tri[1], gc, t * 0.8),
        lerp(tri[2], gc, t * 0.8),
      ]
      drawTriangleOutline(ctx, s, '#b3d574', '#24b391', alpha, 0.8)
    }
  }
}

export default variant23
