export interface NormalizedSoftEdge {
  radius: number
}

export type SoftEdge = NormalizedSoftEdge

export function normalizeSoftEdge(softEdge: SoftEdge): NormalizedSoftEdge {
  return softEdge
}
