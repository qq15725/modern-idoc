import type { Fill, NormalizedFill } from './fill'
import type { NormalizedOutline, Outline } from './outline'
import type { NormalizedShadow, Shadow } from './shadow'
import type { WithNone, WithStyleNone } from './types'
import { normalizeFill } from './fill'
import { normalizeOutline } from './outline'
import { normalizeShadow } from './shadow'
import { clearUndef, isNone, pick } from './utils'

export interface _EffectV0 {
  transformOrigin?: string
  rotate?: number
  scaleX?: number
  scaleY?: number
  skewX?: number
  skewY?: number
  translateX?: number
  translateY?: number
  shadowOffsetX?: number
  shadowOffsetY?: number
  shadowBlur?: number
  shadowColor?: string
  textStrokeWidth?: number
  textStrokeColor?: string
  color?: string
}

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
  transform?: string
  transformOrigin?: string
}

export const effectFields: (keyof Effect)[] = [
  'fill', 'outline', 'shadow', 'transform', 'transformOrigin',
]

function normalizeEffectV0(effect: _EffectV0 & Effect): Effect {
  const _effect = pick(effect, effectFields) as Effect

  const { rotate, scaleX, scaleY, skewX, skewY, translateX, translateY } = effect

  const transforms: string[] = []
  ;(translateX || translateY) && transforms.push(`translate(${translateX || 0}, ${translateY || 0})`)
  rotate && transforms.push(`rotate(${rotate}deg)`)
  ;(scaleX || scaleY) && transforms.push(`scale(${scaleX ?? 1}, ${scaleY ?? 1})`)
  skewX && transforms.push(`skewX(${skewX}deg)`)
  skewY && transforms.push(`skewY(${skewY}deg)`)
  if (transforms.length > 0) {
    _effect.transform = transforms.join(' ')
  }

  if (effect.textStrokeWidth || effect.textStrokeColor) {
    _effect.outline = {
      color: effect.textStrokeColor,
      width: effect.textStrokeWidth,
    }
  }

  if (effect.color) {
    _effect.fill = {
      color: effect.color,
    }
  }

  if (
    effect.shadowOffsetX
    || effect.shadowOffsetY
    || effect.shadowBlur
    || effect.shadowColor
  ) {
    _effect.shadow = {
      offsetX: effect.shadowOffsetX,
      offsetY: effect.shadowOffsetY,
      blur: effect.shadowBlur,
      color: effect.shadowColor,
    }
  }

  return _effect
}

export function normalizeEffect(effect: _EffectV0 & Effect): NormalizedEffect {
  const _effect = normalizeEffectV0(effect)

  return clearUndef({
    fill: isNone(_effect.fill) ? undefined : normalizeFill(_effect.fill),
    outline: isNone(_effect.outline) ? undefined : normalizeOutline(_effect.outline),
    shadow: isNone(_effect.shadow) ? undefined : normalizeShadow(_effect.shadow),
    transform: isNone(_effect.transform) ? undefined : _effect.transform,
    transformOrigin: _effect.transformOrigin,
  })
}
