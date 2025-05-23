import type { ColorFill, ColorFillObject, NormalizedColorFill } from './color-fill'
import type { GradientFill, GradientFillObject, NormalizedGradientFill } from './gradient-fill'
import type { ImageFill, ImageFillObject, NormalizedImageFill } from './image-fill'
import type { NormalizedPresetFill, PresetFill, PresetFillObject } from './preset-fill'
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

export function isColorFillObject(fill: FillObject): fill is ColorFillObject {
  return !isNone(fill.color)
}

export function isColorFill(fill: Fill): fill is ColorFill {
  return typeof fill === 'string'
    ? isColor(fill)
    : isColorFillObject(fill)
}

export function isGradientFillObject(fill: FillObject): fill is GradientFillObject {
  return (!isNone(fill.image) && isGradient(fill.image))
    || Boolean(fill.linearGradient)
    || Boolean(fill.radialGradient)
}

export function isGradientFill(fill: Fill): fill is GradientFill {
  return typeof fill === 'string'
    ? isGradient(fill)
    : isGradientFillObject(fill)
}

export function isImageFillObject(fill: FillObject): fill is ImageFillObject {
  return !isNone(fill.image) && !isGradient(fill.image)
}

export function isImageFill(fill: Fill): fill is ImageFill {
  return typeof fill === 'string'
    ? !isGradient(fill)
    : isImageFillObject(fill)
}

export function isPresetFillObject(fill: FillObject): fill is PresetFillObject {
  return !isNone(fill.preset)
}

export function isPresetFill(fill: Fill): fill is PresetFill {
  return typeof fill === 'string'
    ? false // TODO
    : isPresetFillObject(fill)
}

export function normalizeFill(fill: Fill): NormalizedFill {
  if (isColorFill(fill)) {
    return normalizeColorFill(fill)
  }
  else if (isGradientFill(fill)) {
    return normalizeGradientFill(fill)
  }
  else if (isImageFill(fill)) {
    return normalizeImageFill(fill)
  }
  else if (isPresetFill(fill)) {
    return normalizePresetFill(fill)
  }
  throw new Error('Unknown fill property object')
}
