import type { IDOCFillDeclaration, IDOCFillProp } from '../interfaces'

export function normalizeFill(fill?: IDOCFillProp): IDOCFillDeclaration | undefined {
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
