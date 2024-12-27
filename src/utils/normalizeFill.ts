import type { IDOCFillProp, IDOCNormalizedFillProp } from '../interfaces'

export function normalizeFill(fill?: IDOCFillProp): IDOCNormalizedFillProp | undefined {
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
