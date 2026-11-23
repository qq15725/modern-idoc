import type { LinearGradient, RadialGradient } from '../color'
import { normalizeGradient } from '../color'
import { pick } from '../utils'

export type GradientFillObject =
  // `linear-gradient(${string})` | `radial-gradient(${string})`
  & { image?: string }
  & Partial<NormalizedGradientFill>

export type GradientFill =
  | string
  | GradientFillObject

export interface NormalizedGradientFill {
  linearGradient?: LinearGradient
  radialGradient?: RadialGradient
  rotateWithShape?: boolean
}

export const gradientFillFields: (keyof NormalizedGradientFill)[] = [
  'linearGradient',
  'radialGradient',
  'rotateWithShape',
]

export function normalizeGradientFill(fill: GradientFill): NormalizedGradientFill {
  let obj: GradientFillObject
  if (typeof fill === 'string') {
    obj = { image: fill }
  }
  else {
    obj = { ...fill }
  }
  if (obj.image) {
    const { type, ...props } = normalizeGradient(obj.image)[0] ?? {}
    switch (type) {
      case 'radial-gradient':
        return {
          radialGradient: props as any,
        }
      case 'linear-gradient':
        return {
          // CSS starts at the top. Document gradients start at the right.
          linearGradient: { ...props as LinearGradient, angle: (((props as LinearGradient).angle - 90) % 360 + 360) % 360 },
        }
    }
  }
  return pick(obj, gradientFillFields)
}
