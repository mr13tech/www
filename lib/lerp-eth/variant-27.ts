import { type DrawFn, lerp, drawLine } from './shared'

/** Chevron emphasis — top fans from apex, bottom fans from sides */
const variant27: DrawFn = (ctx, _faces, topFaces, botFaces, numLines) => {
  for (let step = 0; step < numLines; step++) {
    const t = numLines > 1 ? step / (numLines - 1) : 0
    const alpha = Math.sin(t * Math.PI) * 0.5 + 0.5
    for (const tri of topFaces) {
      drawLine(ctx, tri[0], lerp(tri[1], tri[2], t), '#b3d574', '#24b391', 0.18 * alpha, 0.8)
    }
    for (const tri of botFaces) {
      drawLine(ctx, tri[1], lerp(tri[0], tri[2], t), '#24b391', '#b3d574', 0.15 * alpha, 0.8)
      drawLine(ctx, tri[2], lerp(tri[0], tri[1], t), '#b3d574', '#24b391', 0.15 * alpha, 0.8)
    }
  }
}

export default variant27
