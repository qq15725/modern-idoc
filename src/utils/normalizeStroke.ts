import type { IDOCNormalizedStrokeProp, IDOCStrokeProp } from '../interfaces'

export function normalizeStroke(stroke?: IDOCStrokeProp): IDOCNormalizedStrokeProp | undefined {
  if (!stroke || stroke === 'none') {
    return undefined
  }
  else if (typeof stroke === 'string') {
    return {
      color: stroke,
    }
  }
  else {
    return stroke
  }
}
