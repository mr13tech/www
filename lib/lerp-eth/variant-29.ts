import { type DrawFn, lerp, drawLine } from './shared'

/** Density gradient — more lines near vertices, fewer in middle (ease-in spacing) */
const variant29: DrawFn = (ctx, faces, _top, _bot, numLines) => {
  const n = numLines * 2
  for (let step = 0; step < n; step++) {
    const raw = n > 1 ? step / (n - 1) : 0
    const t = raw * raw // ease-in
    const alpha = Math.sin(raw * Math.PI) * 0.5 + 0.5
    for (const tri of faces) {
      drawLine(ctx, tri[0], lerp(tri[1], tri[2], t), '#b3d574', '#24b391', 0.16 * alpha, 0.8)
    }
  }
}

export default variant29
