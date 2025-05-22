import type { ColorFillPropertyObject, NormalizedColorFill } from './color-fill'
import type { GradientFillPropertyObject, NormalizedGradientFill } from './gradient-fill'
import type { ImageFillPropertyObject, NormalizedImageFill } from './image-fill'
import type { NormalizedPresetFill, PresetFillPropertyObject } from './preset-fill'
import { isColor, isGradient } from '../color'
import { isNone } from '../utils'
import { normalizeColorFill } from './color-fill'
import { normalizeGradientFill } from './gradient-fill'
import { normalizeImageFill } from './image-fill'
import { normalizePresetFill } from './preset-fill'

export type NormalizedFill =
  & Partial<NormalizedColorFill>
  & Partial<NormalizedGradientFill>
  & Partial<NormalizedImageFill>
  & Partial<NormalizedPresetFill>

export type FillPropertyObject =
  & Partial<ColorFillPropertyObject>
  & Partial<GradientFillPropertyObject>
  & Partial<ImageFillPropertyObject>
  & Partial<PresetFillPropertyObject>

export type FillProperty =
  | string
  | FillPropertyObject

export function normalizeFill(fill: FillProperty): NormalizedFill {
  if (typeof fill === 'string') {
    if (isColor(fill)) {
      return normalizeColorFill({ color: fill } as ColorFillPropertyObject)
    }
    else if (isGradient(fill)) {
      return normalizeGradientFill({ image: fill } as GradientFillPropertyObject)
    }
    else {
      return normalizeImageFill({ image: fill } as ImageFillPropertyObject)
    }
  }
  else {
    if (!isNone(fill.color)) {
      return normalizeColorFill(fill as ColorFillPropertyObject)
    }
    else if (!isNone(fill.image)) {
      if (isGradient(fill.image)) {
        return normalizeGradientFill(fill as GradientFillPropertyObject)
      }
      else {
        return normalizeImageFill(fill as ImageFillPropertyObject)
      }
    }
    else if (isNone(fill.preset)) {
      return normalizePresetFill(fill as PresetFillPropertyObject)
    }
  }
  throw new Error('Unknown fill property object')
}
