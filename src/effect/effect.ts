import type { WithNone } from '../types'
import type { InnerShadow, NormalizedInnerShadow } from './innerShadow'
import type { NormalizedOuterShadow, OuterShadow } from './outerShadow'
import type { NormalizedSoftEdge, SoftEdge } from './softEdge'
import { clearUndef, isNone } from '../utils'
import { normalizeInnerShadow } from './innerShadow'
import { normalizeOuterShadow } from './outerShadow'
import { normalizeSoftEdge } from './softEdge'

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
