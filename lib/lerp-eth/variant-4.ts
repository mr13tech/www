import { type DrawFn, lerp, drawLine } from './shared'

/** Horizontal slices — parallel cuts across each face */
const variant4: DrawFn = (ctx, faces, _top, _bot, numLines) => {
  for (let step = 0; step < numLines; step++) {
    const t = numLines > 1 ? step / (numLines - 1) : 0
    const alpha = Math.sin(t * Math.PI) * 0.5 + 0.5
    for (const tri of faces) {
      const p1 = lerp(tri[0], tri[1], t)
      const p2 = lerp(tri[0], tri[2], t)
      drawLine(ctx, p1, p2, '#b3d574', '#24b391', 0.18 * alpha, 0.8)
    }
  }
}

export default variant4
