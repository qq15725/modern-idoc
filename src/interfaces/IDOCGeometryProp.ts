import type { IDOCGeometryDeclaration, IDOCPath2D, SVGPathData } from './IDOCGeometryDeclaration'
import type { Noneable } from './shared'

export type IDOCGeometryProp =
  | Noneable
  | SVGPathData
  | SVGPathData[]
  | IDOCPath2D[]
  | IDOCGeometryDeclaration
