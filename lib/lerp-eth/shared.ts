export type Point = [number, number]
export type Face = [Point, Point, Point]
export type DrawFn = (
  ctx: CanvasRenderingContext2D,
  faces: Face[],
  topFaces: Face[],
  botFaces: Face[],
  numLines: number
) => void

export function createEthDiamond(scale: number, cx: number, cy: number): Face[] {
  const hw = (0.613 * scale) / 2

  const topApex: Point = [cx, cy - 0.5 * scale]
  const left: Point = [cx - hw, cy - 0.034 * scale]
  const right: Point = [cx + hw, cy - 0.034 * scale]
  const front: Point = [cx, cy - 0.1 * scale]
  const back: Point = [cx, cy + 0.145 * scale]

  const botTopL: Point = [cx - hw, cy + 0.01 * scale]
  const botTopR: Point = [cx + hw, cy + 0.01 * scale]
  const botFront: Point = [cx, cy + 0.21 * scale]
  const botApex: Point = [cx, cy + 0.5 * scale]

  return [
    [topApex, left, front],
    [topApex, front, right],
    [back, left, front],
    [back, front, right],
    [botApex, botTopL, botFront],
    [botApex, botFront, botTopR],
  ]
}

export function lerp(a: Point, b: Point, t: number): Point {
  return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]
}

export function withAlpha(hex: string, alpha: number): string {
  const r = Number.parseInt(hex.slice(1, 3), 16)
  const g = Number.parseInt(hex.slice(3, 5), 16)
  const b = Number.parseInt(hex.slice(5, 7), 16)
  return `rgba(${r},${g},${b},${alpha})`
}

export function drawLine(
  ctx: CanvasRenderingContext2D,
  p1: Point,
  p2: Point,
  color1: string,
  color2: string,
  alpha: number,
  lineWidth: number
) {
  const grad = ctx.createLinearGradient(p1[0], p1[1], p2[0], p2[1])
  grad.addColorStop(0, withAlpha(color1, alpha))
  grad.addColorStop(1, withAlpha(color2, alpha * 0.6))
  ctx.beginPath()
  ctx.moveTo(p1[0], p1[1])
  ctx.lineTo(p2[0], p2[1])
  ctx.strokeStyle = grad
  ctx.lineWidth = lineWidth
  ctx.stroke()
}

export function drawTriangleOutline(
  ctx: CanvasRenderingContext2D,
  pts: Point[],
  color1: string,
  color2: string,
  alpha: number,
  lineWidth: number
) {
  for (let i = 0; i < 3; i++) {
    drawLine(ctx, pts[i], pts[(i + 1) % 3], color1, color2, alpha, lineWidth)
  }
}
