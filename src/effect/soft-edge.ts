import type { None } from '../types'

export interface SoftEdgeDeclaration {
  radius: number
}

export type SoftEdgeProperty =
  | None
  | SoftEdgeDeclaration

export function normalizeSoftEdge(softEdge?: SoftEdgeProperty): SoftEdgeDeclaration | undefined {
  if (!softEdge || softEdge === 'none') {
    return undefined
  }
  else {
    return softEdge
  }
}
