import type { WithNone } from '../types'
import type { InnerShadow, NormalizedInnerShadow } from './inner-shadow'
import type { NormalizedOuterShadow, OuterShadow } from './outer-shadow'
import type { NormalizedSoftEdge, SoftEdge } from './soft-edge'
import { clearUndef, isNone } from '../utils'
import { normalizeInnerShadow } from './inner-shadow'
import { normalizeOuterShadow } from './outer-shadow'
import { normalizeSoftEdge } from './soft-edge'

export interface NormalizedEffect {
  innerShadow?: NormalizedInnerShadow
  outerShadow?: NormalizedOuterShadow
  softEdge?: NormalizedSoftEdge
}

export interface EffectObject {
  innerShadow: WithNone<InnerShadow>
  outerShadow: WithNone<OuterShadow>
  softEdge: WithNone<SoftEdge>
}

export type Effect =
  | EffectObject

export function normalizeEffect(effect: Effect): NormalizedEffect {
  return clearUndef({
    ...effect,
    softEdge: isNone(effect.softEdge) ? undefined : normalizeSoftEdge(effect.softEdge),
    outerShadow: isNone(effect.outerShadow) ? undefined : normalizeOuterShadow(effect.outerShadow),
    innerShadow: isNone(effect.innerShadow) ? undefined : normalizeInnerShadow(effect.innerShadow),
  })
}
