import type { FillDeclaration, FillPropertyObject } from './fill'
import type { None } from './types'
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
  | None
  | string
  | ForegroundPropertyObject

export function normalizeForeground(foreground?: ForegroundProperty): ForegroundDeclaration | undefined {
  if (!foreground || foreground === 'none') {
    return undefined
  }
  else if (typeof foreground === 'string') {
    return { src: foreground }
  }
  else {
    return {
      ...foreground,
      ...normalizeFill(foreground),
    }
  }
}
