import type { None } from './shared'

export type BoxShadow = None | string

export interface ShadowDeclaration {
  color: string
  offsetX?: number
  offsetY?: number
  blur?: number
}

export type ShadowProp =
  | None
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
