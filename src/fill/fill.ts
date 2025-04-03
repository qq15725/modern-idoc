import type { None } from '../types'
import type { GradientFillDeclaration } from './gradient-fill'
import type { SolidFillDeclaration } from './solid-fill'
import type { TextureFillDeclaration } from './texture-fill'

export type SingleFillDeclaration =
  | TextureFillDeclaration
  | SolidFillDeclaration
  | GradientFillDeclaration

export type FillDeclaration = SingleFillDeclaration[]

export type FillProperty =
  | None
  | string
  | SingleFillDeclaration
  | FillDeclaration

export function normalizeFill(fill?: FillProperty): FillDeclaration | undefined {
  if (!fill || fill === 'none') {
    return undefined
  }
  else if (typeof fill === 'string') {
    return [
      { type: 'solid', color: fill },
    ]
  }
  else if (!Array.isArray(fill)) {
    return [fill]
  }
  else {
    return fill
  }
}
