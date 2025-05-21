import type { FillDeclaration, FillPropertyObject } from './fill'
import { normalizeFill } from './fill'

export interface BaseForegroundDeclaration {
  withGeometry?: boolean
}

export type ForegroundDeclaration =
  & BaseForegroundDeclaration
  & FillDeclaration

export type ForegroundPropertyObject =
  & BaseForegroundDeclaration
  & FillPropertyObject

export type ForegroundProperty =
  | string
  | ForegroundPropertyObject

export function normalizeForeground(foreground: ForegroundProperty): ForegroundDeclaration | undefined {
  if (typeof foreground === 'string') {
    return { src: foreground }
  }
  else {
    return {
      ...foreground,
      ...normalizeFill(foreground),
    }
  }
}
