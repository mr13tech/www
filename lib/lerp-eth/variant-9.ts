import { type DrawFn, lerp, drawLine } from './shared'

/** Woven — even faces sweep forward, odd faces sweep backward */
const variant9: DrawFn = (ctx, faces, _top, _bot, numLines) => {
  for (let step = 0; step < numLines; step++) {
    const t = numLines > 1 ? step / (numLines - 1) : 0
    const alpha = Math.sin(t * Math.PI) * 0.5 + 0.5
    for (let fi = 0; fi < faces.length; fi++) {
      const tri = faces[fi]
      for (let idx = 0; idx < 3; idx++) {
        if (fi % 2 === 0) {
          drawLine(ctx, tri[idx], lerp(tri[(idx + 1) % 3], tri[(idx + 2) % 3], t), '#b3d574', '#24b391', 0.16 * alpha, 0.8)
        } else {
          drawLine(ctx, tri[idx], lerp(tri[(idx + 2) % 3], tri[(idx + 1) % 3], t), '#24b391', '#b3d574', 0.16 * alpha, 0.8)
        }
      }
    }
  }
}

export default variant9
