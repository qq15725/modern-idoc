export type SVGPathData = string
export type FillRule = 'nonzero' | 'evenodd'
export type StrokeLinecap = 'butt' | 'round' | 'square'
export type StrokeLinejoin = 'arcs' | 'bevel' | 'miter' | 'miter-clip' | 'round'

export interface IDOCPath2DStyle {
  [key: string]: any
  opacity: number
  visibility: string
  // shadow
  shadowColor: string
  shadowOffsetX: number
  shadowOffsetY: number
  shadowBlur: number
  // fill
  fill: string
  fillOpacity: number
  fillRule: FillRule
  // stroke
  stroke: string
  strokeOpacity: number
  strokeWidth: number
  strokeLinecap: StrokeLinecap
  strokeLinejoin: StrokeLinejoin
  strokeMiterlimit: number
  strokeDasharray: number[]
  strokeDashoffset: number
}

export interface IDOCPath2D extends Partial<IDOCPath2DStyle> {
  data: SVGPathData
}

export interface IDOCGeometryDeclaration {
  data: IDOCPath2D[]
}
