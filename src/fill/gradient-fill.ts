import type { LinearGradient, RadialGradient } from '../color'
import { normalizeGradient } from '../color'

export interface GradientFillObject {
  image: `linear-gradient(${string})` | `radial-gradient(${string})`
}

export interface NormalizedGradientFill {
  linearGradient: LinearGradient
  radialGradient: RadialGradient
  rotateWithShape?: boolean
}

export function normalizeGradientFill(fill: GradientFillObject): NormalizedGradientFill {
  return normalizeGradient(fill.image) as any
}
