import type { FillDeclaration } from './fill'
import type { None } from './types'

export interface ForegroundDeclaration extends FillDeclaration {
  withGeometry?: boolean
}

export type ForegroundProperty =
  | None
  | string
  | ForegroundDeclaration

export function normalizeForeground(foreground?: ForegroundProperty): ForegroundDeclaration | undefined {
  if (!foreground || foreground === 'none') {
    return undefined
  }
  else if (typeof foreground === 'string') {
    return { src: foreground }
  }
  else {
    return foreground
  }
}
