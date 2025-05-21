export interface SoftEdgeDeclaration {
  radius: number
}

export type SoftEdgeProperty = SoftEdgeDeclaration

export function normalizeSoftEdge(softEdge: SoftEdgeProperty): SoftEdgeDeclaration {
  return softEdge
}
