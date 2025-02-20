import type { StrokeDeclaration, StrokeProp } from '../interfaces'

export function normalizeStroke(stroke?: StrokeProp): StrokeDeclaration | undefined {
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
