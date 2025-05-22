import type { Color, ColorDeclaration } from '../color'
import type { WithNone } from '../types'
import { normalizeColor } from '../color'
import { isNone } from '../utils'

export interface PresetFillPropertyObject {
  preset: string
  foregroundColor?: WithNone<Color>
  backgroundColor?: WithNone<Color>
}

export interface PresetFillDeclaration extends PresetFillPropertyObject {
  foregroundColor?: ColorDeclaration
  backgroundColor?: ColorDeclaration
}

export function normalizePresetFill(fill: PresetFillPropertyObject): PresetFillDeclaration {
  return {
    preset: fill.preset,
    foregroundColor: isNone(fill.foregroundColor) ? undefined : normalizeColor(fill.foregroundColor),
    backgroundColor: isNone(fill.backgroundColor) ? undefined : normalizeColor(fill.backgroundColor),
  }
}
