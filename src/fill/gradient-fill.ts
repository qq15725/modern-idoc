import type { LinearGradient, RadialGradient } from '../color'
import { normalizeGradient } from '../color'

export interface GradientFillPropertyObject {
  image: `linear-gradient(${string})` | `radial-gradient(${string})`
}

export interface NormalizedGradientFill {
  linearGradient: LinearGradient
  radialGradient: RadialGradient
  rotateWithShape?: boolean
}

export function normalizeGradientFill(fill: GradientFillPropertyObject): NormalizedGradientFill {
  return normalizeGradient(fill.image) as any
}
