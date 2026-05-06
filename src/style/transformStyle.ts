import type { WithStyleNone } from '../types'

export interface NormalizedTransformStyle {
  transform: WithStyleNone<string>
  transformOrigin: string
}

export function getDefaultTransformStyle(): NormalizedTransformStyle {
  return {
    transform: 'none',
    transformOrigin: 'center',
  }
}
