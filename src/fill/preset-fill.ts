import type { Color, NormalizedColor } from '../color'
import type { WithNone } from '../types'
import { normalizeColor } from '../color'
import { isNone } from '../utils'

export interface PresetFillObject {
  preset: string
  foregroundColor?: WithNone<Color>
  backgroundColor?: WithNone<Color>
}

export type PresetFill =
  | string
  | PresetFillObject

export interface NormalizedPresetFill extends PresetFillObject {
  foregroundColor?: NormalizedColor
  backgroundColor?: NormalizedColor
}

export function normalizePresetFill(fill: PresetFill): NormalizedPresetFill {
  let obj: PresetFillObject
  if (typeof fill === 'string') {
    obj = { preset: fill }
  }
  else {
    obj = fill
  }
  return {
    preset: obj.preset,
    foregroundColor: isNone(obj.foregroundColor) ? undefined : normalizeColor(obj.foregroundColor),
    backgroundColor: isNone(obj.backgroundColor) ? undefined : normalizeColor(obj.backgroundColor),
  }
}
