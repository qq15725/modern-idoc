import type { Noneable } from './shared'

export interface StrokeDeclaration {
  width?: number
  style?: 'dashed' | 'solid' | string
  image?: string
  color?: string
  opacity?: number
}

export type StrokeProp =
  | Noneable
  | string
  | StrokeDeclaration
