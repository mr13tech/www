import { type DrawFn, type Point, lerp, drawTriangleOutline } from './shared'

/** Concentric triangles — nested outlines shrinking inward */
const variant2: DrawFn = (ctx, faces, _top, _bot, numLines) => {
  for (let step = 0; step < numLines; step++) {
    const t = numLines > 1 ? step / (numLines - 1) : 0
    const alpha = 0.2 - t * 0.12
    for (const tri of faces) {
      const cx = (tri[0][0] + tri[1][0] + tri[2][0]) / 3
      const cy = (tri[0][1] + tri[1][1] + tri[2][1]) / 3
      const c: Point = [cx, cy]
      const s = [lerp(tri[0], c, t), lerp(tri[1], c, t), lerp(tri[2], c, t)]
      drawTriangleOutline(ctx, s, '#b3d574', '#24b391', alpha, 0.8)
    }
  }
}

export default variant2
