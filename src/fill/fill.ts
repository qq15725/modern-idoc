import type { Color } from '../color'
import type { None } from '../types'
import type { GradientFillDeclaration } from './gradient-fill'
import type { SolidFillDeclaration } from './solid-fill'
import type { TextureFillDeclaration } from './texture-fill'
import { normalizeColor } from '../color'

export type FillDeclaration =
  & Partial<TextureFillDeclaration>
  & Partial<SolidFillDeclaration>
  & Partial<GradientFillDeclaration>

export type FillPropertyObject =
  & FillDeclaration
  & { color?: Color }

export type FillProperty =
  | None
  | string
  | FillPropertyObject

export function normalizeFill(fill?: FillProperty): FillDeclaration | undefined {
  if (!fill || fill === 'none') {
    return undefined
  }
  else if (typeof fill === 'string') {
    return { color: normalizeColor(fill) }
  }
  else {
    return {
      ...fill,
      color: normalizeColor(fill.color),
    }
  }
}
