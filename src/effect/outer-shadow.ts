import type { None } from '../types'
import type { InnerShadowDeclaration, InnerShadowPropertyObject } from './inner-shadow'
import { getDefaultInnerShadow, normalizeInnerShadow } from './inner-shadow'

export interface BaseOuterShadowDeclaration {
  scaleX: number
  scaleY: number
}

export type OuterShadowDeclaration =
  & BaseOuterShadowDeclaration
  & InnerShadowDeclaration

export type OuterShadowPropertyObject =
  & Partial<BaseOuterShadowDeclaration>
  & InnerShadowPropertyObject

export type OuterShadowProperty =
  | None
  | OuterShadowPropertyObject

export function getDefaultOuterShadow(): OuterShadowDeclaration {
  return {
    ...getDefaultInnerShadow(),
    scaleX: 1,
    scaleY: 1,
  }
}

export function normalizeOuterShadow(shadow?: OuterShadowProperty): OuterShadowDeclaration | undefined {
  if (!shadow || shadow === 'none') {
    return undefined
  }
  else {
    return {
      ...getDefaultOuterShadow(),
      ...normalizeInnerShadow(shadow),
    }
  }
}
