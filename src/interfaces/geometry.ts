import type { Noneable } from './shared'

export type SVGPathData = string
export type FillRule = 'nonzero' | 'evenodd'
export type StrokeLinecap = 'butt' | 'round' | 'square'
export type StrokeLinejoin = 'arcs' | 'bevel' | 'miter' | 'miter-clip' | 'round'

export interface Path2DStyle {
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

export interface Path2DDeclaration extends Partial<Path2DStyle> {
  data: SVGPathData
}

export interface GeometryDeclaration {
  name?: string
  data: Path2DDeclaration[]
}

export type GeometryProp =
  | Noneable
  | SVGPathData
  | SVGPathData[]
  | Path2DDeclaration[]
  | GeometryDeclaration
