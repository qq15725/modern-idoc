import type { ColorValue, None } from '../types'

export interface InnerShadowDeclaration {
  color: ColorValue
  offsetX?: number
  offsetY?: number
  blurRadius?: number
}

export type InnerShadowProperty =
  | None
  | InnerShadowDeclaration

export function normalizeInnerShadow(shadow?: InnerShadowProperty): InnerShadowDeclaration | undefined {
  if (!shadow || shadow === 'none') {
    return undefined
  }
  else {
    return shadow
  }
}
