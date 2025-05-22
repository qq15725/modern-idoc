import type { Color, NormalizedColor } from '../color'
import type { WithNone } from '../types'
import { defaultColor, normalizeColor } from '../color'
import { clearUndef, isNone } from '../utils'

export interface NormalizedInnerShadow {
  color: NormalizedColor
  offsetX: number
  offsetY: number
  blurRadius: number
}

export type InnerShadowObject =
  & Partial<NormalizedInnerShadow>
  & { color: WithNone<Color> }

export type InnerShadow = InnerShadowObject

export function getDefaultInnerShadow(): NormalizedInnerShadow {
  return {
    color: defaultColor,
    offsetX: 0,
    offsetY: 0,
    blurRadius: 1,
  }
}

export function normalizeInnerShadow(shadow: InnerShadow): NormalizedInnerShadow {
  return {
    ...getDefaultInnerShadow(),
    ...clearUndef({
      ...shadow,
      color: isNone(shadow.color) ? defaultColor : normalizeColor(shadow.color)!,
    }),
  }
}
