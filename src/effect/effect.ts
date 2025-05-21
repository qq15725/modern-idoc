import type { WithNone } from '../types'
import type { InnerShadowDeclaration, InnerShadowProperty } from './inner-shadow'
import type { OuterShadowDeclaration, OuterShadowProperty } from './outer-shadow'
import type { SoftEdgeDeclaration, SoftEdgeProperty } from './soft-edge'
import { clearUndef, isNone } from '../utils'
import { normalizeInnerShadow } from './inner-shadow'
import { normalizeOuterShadow } from './outer-shadow'
import { normalizeSoftEdge } from './soft-edge'

export interface EffectDeclaration {
  innerShadow?: InnerShadowDeclaration
  outerShadow?: OuterShadowDeclaration
  softEdge?: SoftEdgeDeclaration
}

export interface EffectPropertyObject {
  innerShadow: WithNone<InnerShadowProperty>
  outerShadow: WithNone<OuterShadowProperty>
  softEdge: WithNone<SoftEdgeProperty>
}

export type EffectProperty =
  | EffectPropertyObject

export function normalizeEffect(effect: EffectProperty): EffectDeclaration {
  return clearUndef({
    ...effect,
    softEdge: isNone(effect.softEdge) ? undefined : normalizeSoftEdge(effect.softEdge),
    outerShadow: isNone(effect.outerShadow) ? undefined : normalizeOuterShadow(effect.outerShadow),
    innerShadow: isNone(effect.innerShadow) ? undefined : normalizeInnerShadow(effect.innerShadow),
  })
}
