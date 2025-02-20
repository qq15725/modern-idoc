import type { Noneable } from './shared'
import type { StrokeDeclaration } from './StrokeDeclaration'

export type StrokeProp =
  | Noneable
  | string
  | StrokeDeclaration
