import type { Color, NormalizedColor } from '../color'
import { normalizeColor } from '../color'

export interface ColorFillObject {
  color: Color
}

export type ColorFill =
  | string
  | ColorFillObject

export interface NormalizedColorFill {
  color: NormalizedColor
}

export function normalizeColorFill(fill: ColorFill): NormalizedColorFill {
  let obj: ColorFillObject
  if (typeof fill === 'string') {
    obj = { color: fill }
  }
  else {
    obj = fill
  }
  return {
    color: normalizeColor(obj.color),
  }
}
