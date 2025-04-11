import type { None } from '../types'
import type { InnerShadowDeclaration } from './inner-shadow'
import type { OuterShadowDeclaration } from './outer-shadow'
import type { SoftEdgeDeclaration } from './soft-edge'

export interface EffectDeclaration {
  innerShadow?: InnerShadowDeclaration
  outerShadow?: OuterShadowDeclaration
  softEdge?: SoftEdgeDeclaration
}

export type EffectProperty =
  | None
  | EffectDeclaration

export function normalizeEffect(effect?: EffectProperty): EffectDeclaration | undefined {
  if (!effect || effect === 'none') {
    return undefined
  }
  else {
    return effect
  }
}
