import { type DrawFn, lerp, drawLine } from './shared'

/** Mesh grid — two sets of parallel slices per face */
const variant15: DrawFn = (ctx, faces, _top, _bot, numLines) => {
  for (let step = 0; step < numLines; step++) {
    const t = numLines > 1 ? step / (numLines - 1) : 0
    const alpha = Math.sin(t * Math.PI) * 0.5 + 0.5
    for (const tri of faces) {
      drawLine(
        ctx,
        lerp(tri[0], tri[1], t),
        lerp(tri[0], tri[2], t),
        '#b3d574',
        '#24b391',
        0.15 * alpha,
        0.8
      )
      drawLine(
        ctx,
        lerp(tri[1], tri[0], t),
        lerp(tri[1], tri[2], t),
        '#24b391',
        '#b3d574',
        0.15 * alpha,
        0.8
      )
    }
  }
}

export default variant15
