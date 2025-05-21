import type { Color, ColorDeclaration } from '../color'
import type { WithNone } from '../types'
import { defaultColor, normalizeColor } from '../color'
import { clearUndef, isNone } from '../utils'

export interface InnerShadowDeclaration {
  color: ColorDeclaration
  offsetX: number
  offsetY: number
  blurRadius: number
}

export type InnerShadowPropertyObject =
  & Partial<InnerShadowDeclaration>
  & { color: WithNone<Color> }

export type InnerShadowProperty = InnerShadowPropertyObject

export function getDefaultInnerShadow(): InnerShadowDeclaration {
  return {
    color: defaultColor,
    offsetX: 0,
    offsetY: 0,
    blurRadius: 1,
  }
}

export function normalizeInnerShadow(shadow: InnerShadowProperty): InnerShadowDeclaration {
  return {
    ...getDefaultInnerShadow(),
    ...clearUndef({
      ...shadow,
      color: isNone(shadow.color) ? defaultColor : normalizeColor(shadow.color)!,
    }),
  }
}
