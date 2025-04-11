import type { None } from '../types'
import type { SoftEdgeDeclaration } from './soft-edge'

export interface EffectDeclaration {
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
