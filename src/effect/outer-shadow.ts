import type { None } from '../types'
import type { InnerShadowDeclaration } from './inner-shadow'

export interface OuterShadowDeclaration extends InnerShadowDeclaration {
  scaleX?: number
  scaleY?: number
}

export type OuterShadowProperty =
  | None
  | OuterShadowDeclaration

export function normalizeOuterShadow(shadow?: OuterShadowProperty): OuterShadowDeclaration | undefined {
  if (!shadow || shadow === 'none') {
    return undefined
  }
  else {
    return shadow
  }
}
