import type { Color, ColorDeclaration } from '../color'
import { normalizeColor } from '../color'

export interface ColorFillPropertyObject {
  color: Color
}

export interface ColorFillDeclaration {
  color: ColorDeclaration
}

export function normalizeColorFill(fill: ColorFillPropertyObject): ColorFillDeclaration {
  return {
    color: normalizeColor(fill.color),
  }
}
