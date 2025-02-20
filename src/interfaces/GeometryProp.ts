import type { GeometryDeclaration, Path2DDeclaration, SVGPathData } from './GeometryDeclaration'
import type { Noneable } from './shared'

export type GeometryProp =
  | Noneable
  | SVGPathData
  | SVGPathData[]
  | Path2DDeclaration[]
  | GeometryDeclaration
