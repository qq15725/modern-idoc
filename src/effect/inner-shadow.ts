import type { Color, ColorDeclaration } from '../color'
import type { None } from '../types'
import { normalizeColor } from '../color'
import { clearUndef } from '../utils'

export interface InnerShadowDeclaration {
  color: ColorDeclaration
  offsetX: number
  offsetY: number
  blurRadius: number
}

export type InnerShadowPropertyObject =
  & Partial<InnerShadowDeclaration>
  & { color: Color }

export type InnerShadowProperty =
  | None
  | InnerShadowPropertyObject

export function getDefaultInnerShadow(): InnerShadowDeclaration {
  return {
    color: 'rgb(0, 0, 0)',
    offsetX: 0,
    offsetY: 0,
    blurRadius: 1,
  }
}

export function normalizeInnerShadow(shadow?: InnerShadowProperty): InnerShadowDeclaration | undefined {
  if (!shadow || shadow === 'none') {
    return undefined
  }
  else {
    return {
      ...getDefaultInnerShadow(),
      ...clearUndef({
        ...shadow,
        color: normalizeColor(shadow.color)!,
      }),
    }
  }
}
