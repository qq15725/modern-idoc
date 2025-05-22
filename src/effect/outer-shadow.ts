import type { InnerNormalizedShadow, InnerShadowPropertyObject } from './inner-shadow'
import { getDefaultInnerShadow, normalizeInnerShadow } from './inner-shadow'

export interface BaseOuterNormalizedShadow {
  scaleX: number
  scaleY: number
}

export type OuterNormalizedShadow =
  & BaseOuterNormalizedShadow
  & InnerNormalizedShadow

export type OuterShadowPropertyObject =
  & Partial<BaseOuterNormalizedShadow>
  & InnerShadowPropertyObject

export type OuterShadowProperty = OuterShadowPropertyObject

export function getDefaultOuterShadow(): OuterNormalizedShadow {
  return {
    ...getDefaultInnerShadow(),
    scaleX: 1,
    scaleY: 1,
  }
}

export function normalizeOuterShadow(shadow: OuterShadowProperty): OuterNormalizedShadow {
  return {
    ...getDefaultOuterShadow(),
    ...normalizeInnerShadow(shadow),
  }
}
