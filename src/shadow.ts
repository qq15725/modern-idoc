import type { Color, ColorDeclaration } from './color'
import type { WithNone } from './types'
import { defaultColor, normalizeColor } from './color'
import { isNone } from './utils'

export type BoxShadow = string

export interface ShadowDeclaration {
  color: ColorDeclaration
  offsetX?: number
  offsetY?: number
  blur?: number
}

export type ShadowPropertyObject =
  & Partial<ShadowDeclaration>
  & { color: WithNone<Color> }

export type ShadowProperty =
  | BoxShadow
  | ShadowPropertyObject

export function normalizeShadow(shadow: ShadowProperty): ShadowDeclaration {
  if (typeof shadow === 'string') {
    return {
      color: normalizeColor(shadow)!,
    }
  }
  else {
    return {
      ...shadow,
      color: isNone(shadow.color) ? defaultColor : normalizeColor(shadow.color)!,
    }
  }
}

export interface ShadowStyleDeclaration {
  boxShadow: BoxShadow

  // extended part
  shadowColor?: ColorDeclaration
  shadowOffsetX?: number
  shadowOffsetY?: number
  shadowBlur?: number
}

export function getDefaultShadowStyle(): ShadowStyleDeclaration {
  return {
    boxShadow: 'none',
  }
}
