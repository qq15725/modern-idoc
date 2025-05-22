import type { LinearGradient, RadialGradient } from '../color'
import { normalizeGradient } from '../color'

export interface GradientFillObject {
  // `linear-gradient(${string})` | `radial-gradient(${string})`
  image: string
}

export type GradientFill =
  | string
  | GradientFillObject

export interface NormalizedGradientFill {
  linearGradient?: LinearGradient
  radialGradient?: RadialGradient
  rotateWithShape?: boolean
}

export function normalizeGradientFill(fill: GradientFill): NormalizedGradientFill {
  let obj: GradientFillObject
  if (typeof fill === 'string') {
    obj = { image: fill }
  }
  else {
    obj = fill
  }
  const { type, ...props } = normalizeGradient(obj.image)[0] ?? {}
  switch (type) {
    case 'radial-gradient':
      return {
        radialGradient: props as any,
      }
    case 'linear-gradient':
      return {
        linearGradient: props as any,
      }
  }
  return {}
}
