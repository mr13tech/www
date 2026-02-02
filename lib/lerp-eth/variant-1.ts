import { type DrawFn, lerp, drawLine } from './shared'

/** Classic fan — all 3 vertices fan to opposite wall */
const variant1: DrawFn = (ctx, faces, _top, _bot, numLines) => {
  for (let step = 0; step < numLines; step++) {
    const t = numLines > 1 ? step / (numLines - 1) : 0
    const alpha = Math.sin(t * Math.PI) * 0.5 + 0.5
    for (const tri of faces) {
      for (let idx = 0; idx < 3; idx++) {
        const target = lerp(tri[(idx + 1) % 3], tri[(idx + 2) % 3], t)
        drawLine(ctx, tri[idx], target, '#b3d574', '#24b391', 0.18 * alpha, 0.8)
      }
    }
  }
}

export default variant1
