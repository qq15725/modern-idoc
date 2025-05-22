import type { FillDeclaration, FillPropertyObject } from './fill'
import { normalizeFill } from './fill'

export interface BaseForegroundDeclaration {
  fillWithShape: boolean
}

export type ForegroundDeclaration =
  & BaseForegroundDeclaration
  & FillDeclaration

export type ForegroundPropertyObject =
  & Partial<BaseForegroundDeclaration>
  & FillPropertyObject

export type ForegroundProperty =
  | string
  | ForegroundPropertyObject

export function normalizeForeground(foreground: ForegroundProperty): ForegroundDeclaration | undefined {
  if (typeof foreground === 'string') {
    return {
      ...normalizeFill(foreground),
      fillWithShape: false,
    }
  }
  else {
    return {
      ...normalizeFill(foreground),
      fillWithShape: Boolean(foreground.fillWithShape),
    }
  }
}
