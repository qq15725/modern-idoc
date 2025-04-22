import type { Color, ColorDeclaration } from './color'
import type { None } from './types'
import { normalizeColor } from './color'

export type BoxShadow = None | string

export interface ShadowDeclaration {
  color: ColorDeclaration
  offsetX?: number
  offsetY?: number
  blur?: number
}

export type ShadowPropertyObject =
  & Partial<ShadowDeclaration>
  & { color?: Color }

export type ShadowProperty =
  | None
  | BoxShadow
  | ShadowPropertyObject

export type ShadowStyleDeclaration = Partial<{
  boxShadow: BoxShadow

  // extended part
  shadowColor: ColorDeclaration
  shadowOffsetX: number
  shadowOffsetY: number
  shadowBlur: number
}>

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
      color: normalizeColor(shadow)!,
    }
  }
  else {
    return {
      ...shadow,
      color: normalizeColor(shadow.color)!,
    }
  }
}
