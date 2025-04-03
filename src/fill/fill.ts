import type { None } from '../types'
import type { GradientFillDeclaration } from './gradient-fill'
import type { SolidFillDeclaration } from './solid-fill'
import type { TextureFillDeclaration } from './texture-fill'

export type FillDeclaration =
  & Partial<TextureFillDeclaration>
  & Partial<SolidFillDeclaration>
  & Partial<GradientFillDeclaration>

export type FillProperty =
  | None
  | string
  | FillDeclaration

export function normalizeFill(fill?: FillProperty): FillDeclaration | undefined {
  if (!fill || fill === 'none') {
    return undefined
  }
  else if (typeof fill === 'string') {
    return { color: fill }
  }
  else {
    return fill
  }
}
