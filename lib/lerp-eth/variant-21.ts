import { type DrawFn, type Face, type Point, lerp, drawTriangleOutline } from './shared'

function subdivide(tri: Face, depth: number): Face[] {
  if (depth === 0) return [tri]
  const m01 = lerp(tri[0], tri[1], 0.5)
  const m12 = lerp(tri[1], tri[2], 0.5)
  const m20 = lerp(tri[2], tri[0], 0.5)
  return [
    ...subdivide([tri[0], m01, m20] as Face, depth - 1),
    ...subdivide([m01, tri[1], m12] as Face, depth - 1),
    ...subdivide([m12, tri[2], m20] as Face, depth - 1),
    ...subdivide([m01, m12, m20] as Face, depth - 1),
  ]
}

/** Fractal subdivide — recursively split each face into 4 triangles */
const variant21: DrawFn = (ctx, faces, _top, _bot, numLines) => {
  for (let step = 0; step < numLines; step++) {
    const t = numLines > 1 ? step / (numLines - 1) : 0
    const depth = 1 + Math.floor(t * 2.99)
    const alpha = 0.18 / depth
    for (const tri of faces) {
      const subs = subdivide(tri, depth)
      for (const sub of subs) {
        drawTriangleOutline(ctx, sub as Point[], '#b3d574', '#24b391', alpha, 0.6)
      }
    }
  }
}

export default variant21
