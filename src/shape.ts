import type { ColorDeclaration } from './color'

export type SVGPathData = string
export type FillRule = 'nonzero' | 'evenodd'
export type StrokeLinecap = 'butt' | 'round' | 'square'
export type StrokeLinejoin = 'arcs' | 'bevel' | 'miter' | 'miter-clip' | 'round'

export interface ShapePathStyle {
  [key: string]: any
  opacity: number
  visibility: string
  // shadow
  shadowColor: ColorDeclaration
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

export interface ShapePathDeclaration extends Partial<ShapePathStyle> {
  data: SVGPathData
}

export interface NormalizedShape {
  preset?: string
  viewBox?: number[]
  paths?: ShapePathDeclaration[]
}

export type ShapeProperty =
  | SVGPathData
  | SVGPathData[]
  | ShapePathDeclaration[]
  | NormalizedShape

export function normalizeShape(shape: ShapeProperty): NormalizedShape {
  if (typeof shape === 'string') {
    return {
      paths: [
        { data: shape },
      ],
    }
  }
  else if (Array.isArray(shape)) {
    return {
      paths: shape.map((data) => {
        if (typeof data === 'string') {
          return {
            data,
          }
        }
        return data
      }),
    }
  }
  else {
    return shape
  }
}
