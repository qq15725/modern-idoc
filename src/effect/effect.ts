import type { None } from '../types'
import type { InnerShadowDeclaration, InnerShadowProperty } from './inner-shadow'
import type { OuterShadowDeclaration, OuterShadowProperty } from './outer-shadow'
import type { SoftEdgeDeclaration, SoftEdgeProperty } from './soft-edge'
import { clearUndef } from '../utils'
import { normalizeInnerShadow } from './inner-shadow'
import { normalizeOuterShadow } from './outer-shadow'
import { normalizeSoftEdge } from './soft-edge'

export interface EffectDeclaration {
  innerShadow?: InnerShadowDeclaration
  outerShadow?: OuterShadowDeclaration
  softEdge?: SoftEdgeDeclaration
}

export interface EffectPropertyObject {
  innerShadow?: InnerShadowProperty
  outerShadow?: OuterShadowProperty
  softEdge?: SoftEdgeProperty
}

export type EffectProperty =
  | None
  | EffectPropertyObject

export function normalizeEffect(effect?: EffectProperty): EffectDeclaration | undefined {
  if (!effect || effect === 'none') {
    return undefined
  }
  else {
    return clearUndef({
      ...effect,
      softEdge: normalizeSoftEdge(effect.softEdge),
      outerShadow: normalizeOuterShadow(effect.outerShadow),
      innerShadow: normalizeInnerShadow(effect.innerShadow),
    })
  }
}
