import type { Color, NormalizedColor } from './color'
import type { WithNone } from './types'
import { defaultColor, normalizeColor } from './color'
import { isNone } from './utils'

export type BoxShadow = string

export interface NormalizedShadow {
  color: NormalizedColor
  offsetX?: number
  offsetY?: number
  blur?: number
}

export type ShadowObject =
  & Partial<NormalizedShadow>
  & {
    color?: WithNone<Color>
  }

export type Shadow =
  | BoxShadow
  | ShadowObject

export function normalizeShadow(shadow: Shadow): NormalizedShadow {
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
  shadowColor?: NormalizedColor
  shadowOffsetX?: number
  shadowOffsetY?: number
  shadowBlur?: number
}

export function getDefaultShadowStyle(): NormalizedShadowStyle {
  return {
    boxShadow: 'none',
  }
}
