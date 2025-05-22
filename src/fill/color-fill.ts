import type { Color, NormalizedColor } from '../color'
import { normalizeColor } from '../color'

export interface ColorFillObject {
  color: Color
}

export interface NormalizedColorFill {
  color: NormalizedColor
}

export function normalizeColorFill(fill: ColorFillObject): NormalizedColorFill {
  return {
    color: normalizeColor(fill.color),
  }
}
