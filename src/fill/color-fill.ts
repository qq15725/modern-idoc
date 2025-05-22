import type { Color, ColorDeclaration } from '../color'
import { normalizeColor } from '../color'

export interface ColorFillPropertyObject {
  color: Color
}

export interface NormalizedColorFill {
  color: ColorDeclaration
}

export function normalizeColorFill(fill: ColorFillPropertyObject): NormalizedColorFill {
  return {
    color: normalizeColor(fill.color),
  }
}
