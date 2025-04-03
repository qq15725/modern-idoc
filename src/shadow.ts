import type { None } from './types'

export type BoxShadow = None | string

export interface ShadowDeclaration {
  color: string
  offsetX?: number
  offsetY?: number
  blur?: number
}

export type ShadowProperty =
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

export function getDefaultShadowStyle(): ShadowStyleDeclaration {
  return {
    boxShadow: 'none',
  }
}

export function normalizeShadow(shadow?: ShadowProperty): ShadowDeclaration | undefined {
  if (!shadow || shadow === 'none') {
    return undefined
  }
  else if (typeof shadow === 'string') {
    return {
      color: shadow,
    }
  }
  else {
    return shadow
  }
}
