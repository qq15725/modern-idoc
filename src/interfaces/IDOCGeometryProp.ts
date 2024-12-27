import type { IDOCGeometryDeclaration, SVGPathData } from './IDOCGeometryDeclaration'

export type IDOCGeometryProp =
  | 'none'
  | SVGPathData
  | SVGPathData[]
  | IDOCGeometryDeclaration
