import { type DrawFn, type Point, lerp, drawLine, drawTriangleOutline } from './shared'

/** Cathedral — concentric outlines + fan from vertex 0 combined */
const variant30: DrawFn = (ctx, faces, _top, _bot, numLines) => {
  for (let step = 0; step < numLines; step++) {
    const t = numLines > 1 ? step / (numLines - 1) : 0
    const alpha = Math.sin(t * Math.PI) * 0.5 + 0.5
    for (const tri of faces) {
      // Concentric outline
      const cx = (tri[0][0] + tri[1][0] + tri[2][0]) / 3
      const cy = (tri[0][1] + tri[1][1] + tri[2][1]) / 3
      const c: Point = [cx, cy]
      const s = [lerp(tri[0], c, t), lerp(tri[1], c, t), lerp(tri[2], c, t)]
      drawTriangleOutline(ctx, s, '#b3d574', '#24b391', 0.12 * alpha, 0.7)
      // Fan from vertex 0
      drawLine(ctx, tri[0], lerp(tri[1], tri[2], t), '#24b391', '#b3d574', 0.14 * alpha, 0.8)
    }
  }
}

export default variant30
