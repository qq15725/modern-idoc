import type { InnerShadowObject, NormalizedInnerShadow } from './innerShadow'
import { getDefaultInnerShadow, normalizeInnerShadow } from './innerShadow'

export interface NormalizedBaseOuterShadow {
  scaleX: number
  scaleY: number
}

export type NormalizedOuterShadow =
  & NormalizedBaseOuterShadow
  & NormalizedInnerShadow

export type OuterShadowObject =
  & Partial<NormalizedBaseOuterShadow>
  & InnerShadowObject

export type OuterShadow = OuterShadowObject

export function getDefaultOuterShadow(): NormalizedOuterShadow {
  return {
    ...getDefaultInnerShadow(),
    scaleX: 1,
    scaleY: 1,
  }
}

export function normalizeOuterShadow(shadow: OuterShadow): NormalizedOuterShadow {
  return {
    ...getDefaultOuterShadow(),
    ...normalizeInnerShadow(shadow),
  }
}
