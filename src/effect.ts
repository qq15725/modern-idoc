import type { Fill, NormalizedFill } from './fill'
import type { NormalizedOutline, Outline } from './outline'
import type { NormalizedShadow, Shadow } from './shadow'
import type { WithNone, WithStyleNone } from './types'
import { normalizeFill } from './fill'
import { normalizeOutline } from './outline'
import { normalizeShadow } from './shadow'
import { clearUndef, isNone, pick } from './utils'

export interface Effect {
  fill?: WithNone<Fill>
  outline?: WithNone<Outline>
  shadow?: WithNone<Shadow>
  transform?: WithStyleNone<string>
  transformOrigin?: string
}

export interface NormalizedEffect {
  fill?: NormalizedFill
  outline?: NormalizedOutline
  shadow?: NormalizedShadow
  transform?: WithStyleNone<string>
  transformOrigin?: string
}

export function normalizeEffect(effect: Effect): NormalizedEffect {
  return clearUndef({
    fill: isNone(effect.fill) ? undefined : normalizeFill(effect.fill),
    outline: isNone(effect.outline) ? undefined : normalizeOutline(effect.outline),
    shadow: isNone(effect.shadow) ? undefined : normalizeShadow(effect.shadow),
    ...pick(effect, ['transform', 'transformOrigin']),
  })
}
