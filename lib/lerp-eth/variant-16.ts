import { type DrawFn, lerp, drawLine } from './shared'

/** Mirror — left half and right half sweep opposite directions */
const variant16: DrawFn = (ctx, faces, _top, _bot, numLines) => {
  const left = [faces[0], faces[2], faces[4]]
  const right = [faces[1], faces[3], faces[5]]
  for (let step = 0; step < numLines; step++) {
    const t = numLines > 1 ? step / (numLines - 1) : 0
    const alpha = Math.sin(t * Math.PI) * 0.5 + 0.5
    for (const tri of left) {
      for (let idx = 0; idx < 3; idx++) {
        drawLine(
          ctx,
          tri[idx],
          lerp(tri[(idx + 1) % 3], tri[(idx + 2) % 3], t),
          '#b3d574',
          '#24b391',
          0.16 * alpha,
          0.8
        )
      }
    }
    for (const tri of right) {
      for (let idx = 0; idx < 3; idx++) {
        drawLine(
          ctx,
          tri[idx],
          lerp(tri[(idx + 2) % 3], tri[(idx + 1) % 3], t),
          '#24b391',
          '#b3d574',
          0.16 * alpha,
          0.8
        )
      }
    }
  }
}

export default variant16
