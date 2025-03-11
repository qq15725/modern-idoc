import type { Noneable } from './shared'

export interface ShadowDeclaration {
  color: string
  offsetX?: number
  offsetY?: number
  blur?: number
}

export type ShadowProp =
  | Noneable
  | string
  | ShadowDeclaration

export interface ShadowStyleDeclaration {
  boxShadow: Noneable | string

  // extended part
  shadowColor: string
  shadowOffsetX?: number
  shadowOffsetY?: number
  shadowBlur?: number
}
