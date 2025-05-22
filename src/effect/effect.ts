import type { WithNone } from '../types'
import type { InnerNormalizedShadow, InnerShadowProperty } from './inner-shadow'
import type { OuterNormalizedShadow, OuterShadowProperty } from './outer-shadow'
import type { SoftEdgeDeclaration, SoftEdgeProperty } from './soft-edge'
import { clearUndef, isNone } from '../utils'
import { normalizeInnerShadow } from './inner-shadow'
import { normalizeOuterShadow } from './outer-shadow'
import { normalizeSoftEdge } from './soft-edge'

export interface NormalizedEffect {
  innerShadow?: InnerNormalizedShadow
  outerShadow?: OuterNormalizedShadow
  softEdge?: SoftEdgeDeclaration
}

export interface EffectPropertyObject {
  innerShadow: WithNone<InnerShadowProperty>
  outerShadow: WithNone<OuterShadowProperty>
  softEdge: WithNone<SoftEdgeProperty>
}

export type EffectProperty =
  | EffectPropertyObject

export function normalizeEffect(effect: EffectProperty): NormalizedEffect {
  return clearUndef({
    ...effect,
    softEdge: isNone(effect.softEdge) ? undefined : normalizeSoftEdge(effect.softEdge),
    outerShadow: isNone(effect.outerShadow) ? undefined : normalizeOuterShadow(effect.outerShadow),
    innerShadow: isNone(effect.innerShadow) ? undefined : normalizeInnerShadow(effect.innerShadow),
  })
}
