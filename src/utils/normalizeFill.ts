import type { FillDeclaration, FillProp } from '../interfaces'

export function normalizeFill(fill?: FillProp): FillDeclaration | undefined {
  if (!fill || fill === 'none') {
    return undefined
  }
  else if (typeof fill === 'string') {
    return {
      color: fill,
    }
  }
  else {
    return fill
  }
}
