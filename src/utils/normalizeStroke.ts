import type { IDOCStrokeDeclaration, IDOCStrokeProp } from '../interfaces'

export function normalizeStroke(stroke?: IDOCStrokeProp): IDOCStrokeDeclaration | undefined {
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
