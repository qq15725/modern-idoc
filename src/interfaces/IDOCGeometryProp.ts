import type { IDOCGeometryDeclaration, SVGPathData } from './IDOCGeometryDeclaration'
import type { Noneable } from './shared'

export type IDOCGeometryProp =
  | Noneable
  | SVGPathData
  | SVGPathData[]
  | IDOCGeometryDeclaration
