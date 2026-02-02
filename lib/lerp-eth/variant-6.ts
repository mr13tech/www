import { type DrawFn, lerp, drawLine } from './shared'

/** String art curves — parabolic envelope on each edge pair */
const variant6: DrawFn = (ctx, faces, _top, _bot, numLines) => {
  for (let step = 0; step < numLines; step++) {
    const t = numLines > 1 ? step / (numLines - 1) : 0
    const alpha = Math.sin(t * Math.PI) * 0.5 + 0.5
    for (const tri of faces) {
      for (let idx = 0; idx < 3; idx++) {
        const p1 = lerp(tri[idx], tri[(idx + 1) % 3], t)
        const p2 = lerp(tri[(idx + 2) % 3], tri[(idx + 1) % 3], t)
        drawLine(ctx, p1, p2, '#b3d574', '#24b391', 0.16 * alpha, 0.8)
      }
    }
  }
}

export default variant6
