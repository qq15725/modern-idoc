import type { Noneable } from './shared'

export type BoxShadow = Noneable | string

export interface ShadowDeclaration {
  color: string
  offsetX?: number
  offsetY?: number
  blur?: number
}

export type ShadowProp =
  | Noneable
  | BoxShadow
  | ShadowDeclaration

export interface ShadowStyleDeclaration {
  boxShadow: BoxShadow

  // extended part
  shadowColor?: string
  shadowOffsetX?: number
  shadowOffsetY?: number
  shadowBlur?: number
}
