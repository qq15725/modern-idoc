import type { ColorFillObject, NormalizedColorFill } from './color-fill'
import type { GradientFillObject, NormalizedGradientFill } from './gradient-fill'
import type { ImageFillObject, NormalizedImageFill } from './image-fill'
import type { NormalizedPresetFill, PresetFillObject } from './preset-fill'
import { isColor, isGradient } from '../color'
import { isNone } from '../utils'
import { normalizeColorFill } from './color-fill'
import { normalizeGradientFill } from './gradient-fill'
import { normalizeImageFill } from './image-fill'
import { normalizePresetFill } from './preset-fill'

export type FillObject =
  & Partial<ColorFillObject>
  & Partial<GradientFillObject>
  & Partial<ImageFillObject>
  & Partial<PresetFillObject>

export type Fill =
  | string
  | FillObject

export type NormalizedFill =
  & Partial<NormalizedColorFill>
  & Partial<NormalizedGradientFill>
  & Partial<NormalizedImageFill>
  & Partial<NormalizedPresetFill>

export function normalizeFill(fill: Fill): NormalizedFill {
  if (typeof fill === 'string') {
    if (isColor(fill)) {
      return normalizeColorFill({ color: fill } as ColorFillObject)
    }
    else if (isGradient(fill)) {
      return normalizeGradientFill({ image: fill } as GradientFillObject)
    }
    else {
      return normalizeImageFill({ image: fill } as ImageFillObject)
    }
  }
  else {
    if (!isNone(fill.color)) {
      return normalizeColorFill(fill as ColorFillObject)
    }
    else if (!isNone(fill.image)) {
      if (isGradient(fill.image)) {
        return normalizeGradientFill(fill as GradientFillObject)
      }
      else {
        return normalizeImageFill(fill as ImageFillObject)
      }
    }
    else if (isNone(fill.preset)) {
      return normalizePresetFill(fill as PresetFillObject)
    }
  }
  throw new Error('Unknown fill property object')
}
