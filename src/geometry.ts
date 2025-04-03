import type { None } from './types'

export type SVGPathData = string
export type FillRule = 'nonzero' | 'evenodd'
export type StrokeLinecap = 'butt' | 'round' | 'square'
export type StrokeLinejoin = 'arcs' | 'bevel' | 'miter' | 'miter-clip' | 'round'

export interface GeometryPathStyle {
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

export interface GeometryPathDeclaration extends Partial<GeometryPathStyle> {
  data: SVGPathData
}

export interface GeometryDeclaration {
  name?: string
  svg?: string
  viewBox?: number[]
  paths?: GeometryPathDeclaration[]
}

export type GeometryProperty =
  | None
  | SVGPathData
  | SVGPathData[]
  | GeometryPathDeclaration[]
  | GeometryDeclaration

export function normalizeGeometry(geometry?: GeometryProperty): GeometryDeclaration | undefined {
  if (!geometry || geometry === 'none') {
    return undefined
  }
  else if (typeof geometry === 'string') {
    return {
      paths: [
        { data: geometry },
      ],
    }
  }
  else if (Array.isArray(geometry)) {
    return {
      paths: geometry.map((data) => {
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
    return geometry
  }
}
