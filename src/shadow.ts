import type { Color, ColorDeclaration } from './color'
import type { WithNone } from './types'
import { defaultColor, normalizeColor } from './color'
import { isNone } from './utils'

export type BoxShadow = string

export interface NormalizedShadow {
  color: ColorDeclaration
  offsetX?: number
  offsetY?: number
  blur?: number
}

export type ShadowPropertyObject =
  & Partial<NormalizedShadow>
  & { color: WithNone<Color> }

export type ShadowProperty =
  | BoxShadow
  | ShadowPropertyObject

export function normalizeShadow(shadow: ShadowProperty): NormalizedShadow {
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

export interface NormalizedShadowStyle {
  boxShadow: BoxShadow

  // extended part
  shadowColor?: ColorDeclaration
  shadowOffsetX?: number
  shadowOffsetY?: number
  shadowBlur?: number
}

export function getDefaultShadowStyle(): NormalizedShadowStyle {
  return {
    boxShadow: 'none',
  }
}
