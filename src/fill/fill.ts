import type { Color } from '../color'
import type { WithNone } from '../types'
import type { GradientFillDeclaration } from './gradient-fill'
import type { SolidFillDeclaration } from './solid-fill'
import type { TextureFillDeclaration } from './texture-fill'
import { normalizeColor } from '../color'
import { isNone } from '../utils'

export type FillDeclaration =
  & Partial<TextureFillDeclaration>
  & Partial<SolidFillDeclaration>
  & Partial<GradientFillDeclaration>

export type FillPropertyObject =
  & FillDeclaration
  & { color: WithNone<Color> }

export type FillProperty =
  | string
  | FillPropertyObject

export function normalizeFill(fill: FillProperty): FillDeclaration | undefined {
  if (typeof fill === 'string') {
    return { color: normalizeColor(fill) }
  }
  else {
    return {
      ...fill,
      color: isNone(fill.color) ? undefined : normalizeColor(fill.color),
    }
  }
}
